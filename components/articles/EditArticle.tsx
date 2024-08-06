'use client'
import {useQueryClient} from "react-query";
import {ArticleType} from "@/app/lib/ArticleServices";
import {useDebouncedCallback} from "use-debounce";
import TextInput from "@/components/inputs/TextInput";
import MyTiptap from "@/components/inputs/MyTiptap";
import React, {useEffect, useState} from "react";
import {Editor} from "@tiptap/core";

export default function EditArticle({article,mutate}:Readonly<{article:ArticleType,mutate:any}>){
    const [trackedArticle,setTrackedArticle]= useState(article)
    const queryClient = useQueryClient();
    const updateArticle = useDebouncedCallback(()=>{
            mutate.mutate(trackedArticle)
        }
    ,2500)
    useEffect(()=>{
        if(trackedArticle !== article){
            updateArticle()
        }
    },[trackedArticle])
    const editArticleBody = (e:Editor)=>{
        let newArticle = {...article, bodyHTML: e.getHTML()}
        setTrackedArticle(newArticle)
    }
    const editArticle = (e:React.ChangeEvent<HTMLInputElement>)=>{
        let newArticle = {...article, [e.currentTarget.id]: e.currentTarget.value}
        setTrackedArticle(newArticle)
    }
    const debouncedUpdate = useDebouncedCallback(()=>{

    },
        700)
    return(
        <>
            <div className={'flex flex-col min-h-[80vh] mx-20 my-24 border-amber-100'}>
                <TextInput type={'text'} title={"Title"} name={'title'} id={'title'} value={article.title} onChange={editArticle}/>
                <TextInput type={'text'} title={"Description"} name={'description'} id={'description'} value={article.description} onChange={editArticle} />
                <MyTiptap content={article.bodyHTML} onUpdate={editArticleBody}  className={"min-h-[60vh]"} />
            </div>
        </>
    )
}