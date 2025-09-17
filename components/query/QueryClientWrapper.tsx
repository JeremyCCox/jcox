'use client'
import {QueryClient, QueryClientProvider} from "react-query";
import {Suspense} from "react";
import Loading from "@components/layout/Loading";

export default function QueryClientWrapper({children}:Readonly<{children:React.ReactNode}>){
    const queryClient = new QueryClient()
    return(
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    )
}