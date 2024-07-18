'use server'
import ArticleCreator from "@/components/inputs/articles/ArticleCreator";
import QueryClientWrapper from "@/components/query/QueryClientWrapper";

export default async function Page(){

    return(
        <div className={'w-full grid justify-evenly my-32'}>
            <QueryClientWrapper>
                <ArticleCreator/>
            </QueryClientWrapper>
        </div>
    )
}