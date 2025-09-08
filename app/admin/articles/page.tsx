'use server'
import AdminArticleList from "@components/articles/AdminArticleList";
import QueryClientWrapper from "@components/query/QueryClientWrapper";
export default async function Page(){

    return(
        <>
            <QueryClientWrapper >
                <AdminArticleList/>
            </QueryClientWrapper>
        </>
    )
}