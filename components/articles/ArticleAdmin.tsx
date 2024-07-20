'use client'
import {useMutation, useQuery, useQueryClient} from "react-query";
import {ArticleType, getArticle, getArticles, updateArticle} from "@/app/lib/ArticleServices";
import Loading from "@/components/layout/Loading";
import TextInput from "@/components/inputs/TextInput";
import MyTiptap from "@/components/inputs/MyTiptap";
import React from "react";
import EditArticle from "@/components/articles/EditArticle";

export default function ArticleAdmin({articleId}:{articleId:string}){
    const queryClient = useQueryClient();
    const editArticle = async (data:ArticleType)=>{
        console.log("edit article")
        console.log(data)
        await updateArticle(data)
    }
    const articleData = useQuery(["article",articleId],async () => {
        let article = JSON.parse(await getArticle(articleId));
        if(article.error){
            throw new Error(article.error.message)
        }
        console.log(article)
        return article
    })
    const mutation = useMutation(
        {
            mutationFn:editArticle,
            onMutate: async (article) => {
                // Cancel any outgoing refetches
                // (so they don't overwrite our optimistic update)
                // await queryClient.cancelQueries({ queryKey: ['article', articleId] })

                // Snapshot the previous value
                const previousArticle = queryClient.getQueryData(['article', articleId])

                // Optimistically update to the new value
                queryClient.setQueryData(['article', articleId], article)

                // Return a context with the previous and new todo
                return { previousArticle, article }
            },
            onSuccess:()=>{
                // queryClient.refetchQueries({
                //     queryKey:['article', articleId]
                // })
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
                    <>
                        <EditArticle article={articleData.data} mutate={mutation}/>
                        <pre className={'text-wrap'}>
                            {JSON.stringify(mutation,null,2)}
                        </pre>

                    </>
            }
        </div>
    )
}