'use client'
import {useQuery, useQueryClient, UseQueryResult} from "react-query";
import {ArticleType, getArticleTitles, removeArticle} from "@/app/lib/ArticleServices";
import Article from "@/components/articles/Article";
import Loading from "@/components/layout/Loading";
import QueryError from "@/components/query/QueryError";
import AdminArticleLink from "@/components/articles/AdminArticleLink";
import {useRouter} from "next/navigation";
import {useEffect} from "react";

export default function AdminArticleList(){
    const router = useRouter()
    const queryClient = useQueryClient()
    const articleTitles:UseQueryResult<[ArticleType]> = useQuery('articleTitles',async () => {
        let titles = JSON.parse(await getArticleTitles());
        if(titles.error){
            throw new Error(titles.error.message)
        }
        return titles.data
    })
    const goToNew=()=>{
        router.push('/admin/articles/new')
    }
    const deleteArticle=async (articleId: string) => {
        await removeArticle(articleId)
        await queryClient.refetchQueries("articleTitles")

    }

    return(
        <div className={'mt-16 grid justify-evenly'}>
           <Article title={'Jcox.ca Admin'}>
               <div className={'px-16 my-8 select-none'}>
                   <button className={'border rounded w-full h-20 hover:shadow-inner hover:shadow-amber-100  transition-all duration-700'} type={"button"} onClick={goToNew}>
                        New Article
                   </button>
               </div>
               {articleTitles.isLoading?
                   <Loading/>
                   :
                   articleTitles.isError?
                   <QueryError/>
                   :
                       articleTitles.data?
                           <div className={'grid '}>
                               {articleTitles.data.map(article=>{
                                   return(
                                        <AdminArticleLink key={article._id} article={article} deleteArticle={deleteArticle} />
                                   )
                               }
                               )}
                           </div>
                           :
                           <QueryError/>

               }
               <pre className={'text-amber-100'}>
                   {JSON.stringify(articleTitles.data,null,2)}
               </pre>
           </Article>
        </div>
    )
}