'use server'
import {ArticleType, getArticle} from "@/app/lib/ArticleServices";
import {Suspense} from "react";
import Article from "@/components/articles/Article";

export default async function Page({params}){
    const article:ArticleType = JSON.parse(await getArticle(params.articleId))

    return(
        <Suspense fallback={<>loading</>}>
            <Article article={article} goBack={true}/>
        </Suspense>
    )
}