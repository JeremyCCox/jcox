'use client'
import {useQuery, UseQueryResult} from "react-query";
import {ArticleType, getArticleTitles} from "@/app/lib/ArticleServices";
import Article from "@/components/articles/Article";
import Loading from "@/components/layout/Loading";
import QueryError from "@/components/query/QueryError";
import AdminArticleLink from "@/components/articles/AdminArticleLink";

export default function AdminArticleList(){
    const articleTitles:UseQueryResult<[ArticleType]> = useQuery('articleTitles',async () => {
        let titles = JSON.parse(await getArticleTitles());
        if(titles.error){
            throw new Error(titles.error.message)
        }
        return titles.data
    })

    return(
        <div className={'mt-16'}>
           <Article>
               {articleTitles.isLoading?
                   <Loading/>
                   :
                   articleTitles.isError?
                   <QueryError/>
                   :
                       articleTitles.data?
                           <>
                               {articleTitles.data.map(article=>{
                                   return(
                                        <AdminArticleLink key={article._id} article={article} />
                                   )
                               }
                               )}
                           </>
                           :
                           <QueryError/>

               }
           </Article>
        </div>
    )
}