'use client'
import {useQueryClient} from "react-query";
import {ArticleType} from "@/app/lib/ArticleServices";
import {useDebouncedCallback} from "use-debounce";
import TextInput from "@/components/inputs/TextInput";
import MyTiptap from "@/components/inputs/MyTiptap";
import React, {useEffect, useState} from "react";
import {Editor} from "@tiptap/core";
import WidgetsPanel, {WidgetType} from "@/components/dev/widgets/WidgetsPanel";
import WidgetDisplaySwitch from "@/components/dev/widgets/WidgetDisplaySwitch";

export default function EditArticle({article,mutate}:Readonly<{article:ArticleType,mutate:any}>){
    const [trackedArticle,setTrackedArticle]= useState(article)
    const queryClient = useQueryClient();
    const updateArticle = useDebouncedCallback(()=>{
            mutate.mutate(trackedArticle)
        }
    ,2500)
    const editArticleBody = (e:Editor)=>{
        let newArticle = {...article, bodyHTML: e.getHTML()}
        setTrackedArticle(newArticle)
        updateArticle()
    }
    const editArticle = (e:React.ChangeEvent<HTMLInputElement>)=>{
        let newArticle = {...article, [e.currentTarget.id]: e.currentTarget.value}
        setTrackedArticle(newArticle)
        updateArticle()
    }
    const addWidgetToArticle = (widget:WidgetType)=>{
        let newArticle = {...article, widgets:[...article.widgets||[],widget]}
        setTrackedArticle(newArticle)
        updateArticle()
    }
    const removeWidget=(e:React.MouseEvent<HTMLButtonElement>)=>{
        let newWidgets = article.widgets?.filter(({id})=>!(id === e.currentTarget.id))
        let newA = {...article, widgets: newWidgets }
        setTrackedArticle(newA)
        updateArticle()
    }
    const debouncedUpdate = useDebouncedCallback(()=>{

    },
        700)
    return(
        <>
            <div className={'flex flex-col min-h-[80vh] mx-20 my-24 border-amber-100 '}>
                <WidgetsPanel addWidgetCallback={addWidgetToArticle} />
                <TextInput type={'text'} title={"Title"} name={'title'} id={'title'} value={article.title} onChange={editArticle}/>
                <TextInput type={'text'} title={"Description"} name={'description'} id={'description'} value={article.description} onChange={editArticle} />
                <MyTiptap content={article.bodyHTML} onUpdate={editArticleBody}  className={"min-h-[60vh]"} />
                {article.widgets&&
                    article.widgets.map(widget=>{
                        return(
                            <div className={' border border-amber-100 relative p-8'} key={`switch-name:${widget.id}`}>
                                <button className={'absolute right-0 top-0'} type={'button'} id={widget.id} onClick={removeWidget} >
                                    🗑️
                                </button>
                                <WidgetDisplaySwitch widget={widget}/>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}