'use client'
import TextInput from "@/components/inputs/TextInput";
import MyTiptap from "@/components/inputs/MyTiptap";
import {useState} from "react";
import {Editor} from "@tiptap/core";

export default function ArticleCreator(){
    const [content, setContent] = useState("")
    const handleInput = (editor:Editor) =>{
        setContent(editor.getHTML())
    }
    return(
        <>
            <form className={'grid'}>
                <TextInput type={'text'} title={"Title"} name={'title'} id={'title'}/>
                <TextInput type={'text'} title={"Description"} name={'description'} id={'description'}/>
                <MyTiptap content={content} onUpdate={handleInput} name={''}/>
            </form>
        </>

    )

}