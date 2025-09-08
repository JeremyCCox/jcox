'use server'
import QueryClientWrapper from "@components/query/QueryClientWrapper";
import ArticleAdmin from "@components/articles/ArticleAdmin";
interface idParams{
    articleId:string
}
export default async function Page({params}:{params:idParams}){

    return(
        <QueryClientWrapper>
            <ArticleAdmin articleId={params.articleId}/>
        </QueryClientWrapper>
    )
}