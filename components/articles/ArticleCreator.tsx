'use client'
import TextInput from "@/components/inputs/TextInput";
import MyTiptap from "@/components/inputs/MyTiptap";
import React, {MouseEventHandler, useReducer, useState} from "react";
import {Editor} from "@tiptap/core";
import {QueryClient, useMutation, useQuery, useQueryClient} from "react-query";
import {addArticle} from "@/app/lib/ArticleServices";
import article from "@/models/Article";

enum ArticleActionKind {
    TIPTAP = 'TIPTAP',
    TITLE = 'TITLE',
    DESC = 'DESC',
}
interface ArticleAction{
    type:string,
    payload:any;
}
interface ArticleState{
    _id?:string,
    title?:string,
    description?:string,
    category?:string,
    body?:string,
    template?:string,
}
function articleReducer(state: ArticleState, action: ArticleAction) {
    const { type, payload } = action;
    switch (type) {
        case ArticleActionKind.TIPTAP:
            return {
                ...state,
                body:payload
            };
        case ArticleActionKind.TITLE:
            return {
                ...state,
                title:payload

                // value: state.count - payload,
            }
        case ArticleActionKind.DESC:
            return {
                ...state,
                description:payload
            };
        default:
            return state;
    }
}
export default function ArticleCreator(){
    const [state,dispatch]=useReducer(articleReducer,{title:"",description:"",category:"",body:"",template:""},undefined);
    const handleSubmit=async (e: React.MouseEvent) => {
        await addArticle(state)

        // console.log(state)
    }
    const handleUpdate=(e:Editor)=>{
        dispatch({type:ArticleActionKind.TIPTAP,payload:e.getHTML()})
    }
    return(
        <>
            <div className={'grid'} >
                <TextInput type={'text'} title={"Title"} name={'title'} id={'title'} onChange={(e)=>dispatch({type:ArticleActionKind.TITLE,payload:e.currentTarget.value})}/>
                <TextInput type={'text'} title={"Description"} name={'description'} id={'description'} onChange={(e)=>dispatch({type:ArticleActionKind.DESC,payload:e.currentTarget.value})} />
                <MyTiptap content={state.body} onUpdate={handleUpdate}/>
                <button type={"button"} onClick={handleSubmit}>
                    Post new article
                </button>
                <div>
                    <pre className={'text-amber-100'}>
                        {JSON.stringify(state,null,2)}
                    </pre>
                </div>
            </div>
        </>

    )

}