'use client'
import React from "react";
import {ArticleType} from "@/app/lib/ArticleServices";
import {useRouter} from "next/navigation";

export default function AdminArticleLink({children,article,underline=false}:Readonly<{ children?:React.ReactNode,article: ArticleType,underline?:boolean}>){
    const router = useRouter()
    const handleClick=()=>{
        router.push(`/admin/articles/${article?._id}`)
    }

    return(
        <>
            <button type={"button"} className={'hover:font-bold hover:tracking-tight'}  onClick={handleClick}>
                <h4 className={`w-full flex justify-between bg-gray-700 border-gray-900 border-2 hover:underline`}>
                    <span className={'w-2/3 text-left px-8'}>{article.title}</span>

                    {!underline&&article.creationDate&&
                        new Date(article.creationDate).toDateString()
                    }
                </h4>
            </button>
            {children}
        </>

    )
}