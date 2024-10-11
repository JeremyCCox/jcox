'use server'
import LoginForm from "@/components/inputs/LoginForm";
import { Suspense } from "react";

export default async function Page(){
    return(
        <>
            <Suspense fallback={<></>}>
                <LoginForm/>
            </Suspense>
        </>
    )
}