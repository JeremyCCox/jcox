'use server'
import ArticleCreator from "@/components/inputs/ArticleCreator";

export default async function Page(){

    return(
        <div className={'w-full grid justify-evenly my-32'}>
            <ArticleCreator/>
        </div>
    )
}