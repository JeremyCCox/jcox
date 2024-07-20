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
                <h4 className={`w-fit m-auto  ${!underline&&"hover:underline"}`}>
                    {underline&&article.title&&
                        <span className={"absolute no-underline translate-y-[16px]"}>
                        {Array.from(Array(Math.floor(article.title.length)).fill('-')).map(val=>{
                            return (val)
                        })}
                            &gt;
                    </span>
                    }
                    {article.title&&article.title}
                </h4>
            </button>
            {children}
        </>

    )
}