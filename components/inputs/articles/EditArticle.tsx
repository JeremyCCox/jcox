'use client'
import {useMutation, useQuery, useQueryClient} from "react-query";
import {ArticleType, getArticle} from "@/app/lib/ArticleServices";
import Loading from "@/components/layout/Loading";

export default function EditArticle({articleId}:{articleId:string}){
    const queryClient = useQueryClient();
    const editArticle = async (data:ArticleType)=>{

    }
    const articleData = useQuery(["article",articleId],async () => {
        let ad = await getArticle(articleId)
        if(!ad){
            throw new Error("No article found!")
        }
        return await JSON.parse(ad)._doc
    })
    const mutation = useMutation(
        {
            mutationFn:editArticle,
            onMutate: async (panel) => {
                // Cancel any outgoing refetches
                // (so they don't overwrite our optimistic update)
                // await queryClient.cancelQueries({ queryKey: ['panels', panel._id] })

                // Snapshot the previous value
                const previousTodo = queryClient.getQueryData(['panels', panel._id])

                // Optimistically update to the new value
                queryClient.setQueryData(['panels', panel._id], panel)

                // Return a context with the previous and new todo
                return { previousTodo, panel }
            },
            onSuccess:()=>{
                queryClient.refetchQueries({
                    queryKey:['article', articleId]
                })
            }
        })
    return(
        <div className={"text-amber-100"}>
            {articleData.isLoading?
                <Loading/>
                :
                articleData.isError?
                    <>Something went wrong!</>
                    :
                    <pre>
                        {JSON.stringify(articleData.data,null,2)}
                    </pre>
            }
        </div>
    )
}