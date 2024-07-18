'use server'
import EditArticle from "@/components/inputs/articles/EditArticle";
import QueryClientWrapper from "@/components/QueryClientWrapper";
interface idParams{
    articleId:string
}
export default async function Page({params}:{params:idParams}){

    return(
        <QueryClientWrapper>
            <EditArticle articleId={params.articleId}/>
        </QueryClientWrapper>
    )
}