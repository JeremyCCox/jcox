'use server'
import {ArticleType, getArticle} from "@/app/lib/ArticleServices";
import {Suspense} from "react";
import Article from "@/components/articles/Article";

export default async function Page({params}:Readonly<{params:{articleId:string}}>){
    const article:ArticleType = await JSON.parse(await getArticle(params.articleId))

    return(
        <Suspense fallback={<>loading</>}>
            <Article article={article} goBack={false}/>
        </Suspense>
    )
}