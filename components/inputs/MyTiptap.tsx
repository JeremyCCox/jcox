'use client'
import {
    Editor,
    EditorProvider,
    FloatingMenu,
    useCurrentEditor,
    useEditor
} from "@tiptap/react";
import { Color } from '@tiptap/extension-color'
import ListItem from '@tiptap/extension-list-item'
import TextStyle from '@tiptap/extension-text-style'
import StarterKit from '@tiptap/starter-kit'
import React, {EventHandler, useEffect} from 'react'

export default function MyTiptap({content="Placeholder Text", onUpdate,classNameOverride,className}:{content?:string,onUpdate:any,classNameOverride?:string,className?:string}){


    const extensions = [
        Color.configure({ types: [TextStyle.name, ListItem.name] }),
        TextStyle.configure({HTMLAttributes: undefined}),
        StarterKit.configure({
            bulletList: {
                keepMarks: true,
                keepAttributes: false, // TODO : Making this as `false` because marks are not preserved when I try to preserve attrs, awaiting a bit of help
            },
            orderedList: {
                keepMarks: true,
                keepAttributes: false, // TODO : Making this as `false` because marks are not preserved when I try to preserve attrs, awaiting a bit of help
            },
        }),
    ]
    const editorAttributes={
        attributes:{
            class:classNameOverride?classNameOverride:`min-h-[1.2lh] h-full  p-[.4lh] border mx-2 mb-2 text-overflow bg-transparent text-black ${className}`
        }
    }
    const handleUpdate=(props:{editor:Editor,transaction:any})=>{
        onUpdate(props.editor)
    }
    return(
        <EditorProvider extensions={extensions} onUpdate={handleUpdate}  content={content} slotBefore={<MenuBar/>} editorProps={editorAttributes} immediatelyRender={false}>
        </EditorProvider>
    )
}

const MenuBar = () => {
    const { editor } = useCurrentEditor()

    if (!editor) {
        return null
    }

    return (
        <div className={'border-t border-x border-black mx-2 mt-2 bg-white m-2'}>
            <div className={'flex md:justify-center transition: align-bottom overflow-clip'}>
                <div className={'flex align-bottom text-lg'}>
                    <button type={'button'}
                        onClick={() => editor.chain().focus().toggleBold().run()}
                        disabled={
                            !editor.can()
                                .chain()
                                .focus()
                                .toggleBold()
                                .run()
                        }
                        className={editor.isActive('bold') ? 'bg-green-200 border border-gray-500 px-1 text-gray-900 font-bold' : 'border border-gray-500 px-1 text-gray-900 font-bold'}
                    >
                        <b>B</b>
                    </button>
                    <button type={'button'}
                        onClick={() => editor.chain().focus().toggleItalic().run()}
                        disabled={
                            !editor.can()
                                .chain()
                                .focus()
                                .toggleItalic()
                                .run()
                        }
                        className={editor.isActive('italic') ? 'bg-green-200 text-xl border border-gray-500 px-1 text-gray-900 font-bold' : ' text-xl border border-gray-500 px-1 text-gray-900 font-bold'}
                    >
                        <i className={'font-serif text-lg'}>I</i>
                    </button>
                    <button type={'button'}
                        onClick={() => editor.chain().focus().toggleStrike().run()}
                        disabled={
                            !editor.can()
                                .chain()
                                .focus()
                                .toggleStrike()
                                .run()
                        }
                        className={editor.isActive('strike') ? 'bg-green-200 border border-gray-500 px-1 text-gray-900 font-bold' : 'border border-gray-500 px-1 text-gray-900 font-bold'}
                    >
                        <s>S</s>
                    </button>
                </div>
                {/*<button type={'button'}*/}
                {/*    onClick={() => editor.chain().focus().toggleCode().run()}*/}
                {/*    disabled={*/}
                {/*        !editor.can()*/}
                {/*            .chain()*/}
                {/*            .focus()*/}
                {/*            .toggleCode()*/}
                {/*            .run()*/}
                {/*    }*/}
                {/*    className={editor.isActive('code') ? 'is-active' : ''}*/}
                {/*>*/}
                {/*    Code*/}
                {/*</button>*/}
                {/*<button type={'button'} onClick={() => editor.chain().focus().unsetAllMarks().run()}>*/}
                {/*    Clear marks*/}
                {/*</button>*/}
                {/*<button type={'button'} onClick={() => editor.chain().focus().clearNodes().run()}>*/}
                {/*    Clear nodes*/}
                {/*</button>*/}
                {/*<button type={'button'}*/}
                {/*    onClick={() => editor.chain().focus().setParagraph().run()}*/}
                {/*    className={editor.isActive('paragraph') ? 'is-active' : ''}*/}
                {/*>*/}
                {/*    Paragraph*/}
                {/*</button>*/}

                <div className={'flex align-bottom text-lg '}>
                    <button type={'button'}
                        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                        className={editor.isActive('heading', { level: 1 }) ? 'bg-green-200 border border-gray-500 px-1 text-gray-900 font-bold' : ' border border-gray-500 px-1 text-gray-900 font-bold'}
                    >
                        H1
                    </button>
                    <button type={'button'}
                        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                        className={editor.isActive('heading', { level: 2 }) ? 'bg-green-200 border border-gray-500 px-1 text-gray-900 font-bold' : ' border border-gray-500 px-1 text-gray-900 font-bold'}
                    >
                        H2
                    </button>
                    <button type={'button'}
                        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                        className={editor.isActive('heading', { level: 3 }) ? 'bg-green-200 border border-gray-500 px-1 text-gray-900 font-bold' : ' border border-gray-500 px-1 text-gray-900 font-bold'}
                    >
                        H3
                    </button>
                    <button type={'button'}
                        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
                        className={editor.isActive('heading', { level: 4 }) ? 'bg-green-200 border border-gray-500 px-1 text-gray-900 font-bold' : ' border border-gray-500 px-1 text-gray-900 font-bold'}
                    >
                        H4
                    </button>
                    <button type={'button'}
                        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
                        className={editor.isActive('heading', { level: 5 }) ? 'bg-green-200 border border-gray-500 px-1 text-gray-900 font-bold' : ' border border-gray-500 px-1 text-gray-900 font-bold'}
                    >
                        H5
                    </button>
                </div>
                {/*<button type={'button'}*/}
                {/*    onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}*/}
                {/*    className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}*/}
                {/*>*/}
                {/*    H4*/}
                {/*</button>*/}
                {/*<button type={'button'}*/}
                {/*    onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}*/}
                {/*    className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}*/}
                {/*>*/}
                {/*    H5*/}
                {/*</button>*/}
                {/*<button type={'button'}*/}
                {/*    onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}*/}
                {/*    className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}*/}
                {/*>*/}
                {/*    H6*/}
                {/*</button>*/}
                <div className={'flex align-bottom text-lg'}>
                    <button type={'button'}
                        onClick={() => editor.chain().focus().toggleBulletList().run()}
                        className={editor.isActive('bulletList') ? 'is-active border border-gray-500 px-1 text-nowrap text-gray-900 font-bold' : ' border border-gray-500 px- text-nowrap text-gray-900 font-bold'}
                    >
                        Bullet list
                    </button>
                    <button type={'button'}
                        onClick={() => editor.chain().focus().toggleOrderedList().run()}
                        className={editor.isActive('orderedList') ? 'is-active border border-gray-500 px-1 text-nowrap text-gray-900 font-bold' : ' border border-gray-500 px-1 text-nowrap text-gray-900 font-bold'}
                    >
                        Ordered list
                    </button>
                </div>
                {/*<button type={'button'}*/}
                {/*    onClick={() => editor.chain().focus().toggleCodeBlock().run()}*/}
                {/*    className={editor.isActive('codeBlock') ? 'is-active' : ''}*/}
                {/*>*/}
                {/*    Code block*/}
                {/*</button>*/}
                {/*<button type={'button'}*/}
                {/*    onClick={() => editor.chain().focus().toggleBlockquote().run()}*/}
                {/*    className={editor.isActive('blockquote') ? 'is-active' : ''}*/}
                {/*>*/}
                {/*    Blockquote*/}
                {/*</button>*/}
                <button type={'button'} onClick={() => editor.chain().focus().setHorizontalRule().run()}  className={"border border-gray-500 px-2 text-xl text-gray-900 font-bold"}>
                    Line
                </button>
                <button type={'button'} onClick={() => editor.chain().focus().setHardBreak().run()} className={"border border-gray-500 px-2 text-xl text-gray-900 font-bold"}>
                    Break
                </button>
                <div className={'flex align-bottom text-lg'}>
                    <button type={'button'}
                        onClick={() => editor.chain().focus().undo().run()}
                        disabled={
                            !editor.can()
                                .chain()
                                .focus()
                                .undo()
                                .run()
                        }
                        className={!editor.can().chain().focus().undo().run()?'border border-gray-500 bg-gray-400 px-2 text-gray-900 font-bold':'border border-gray-500 px-2 text-gray-900 font-bold'}
                    >
                        Undo
                    </button>
                    <button type={'button'}
                        onClick={() => editor.chain().focus().redo().run()}
                        disabled={
                            !editor.can()
                                .chain()
                                .focus()
                                .redo()
                                .run()
                        }
                        className={!editor.can().chain().focus().redo().run()?'border border-gray-500 bg-gray-400 px-2 text-gray-900 font-bold':'border border-gray-500 px-2 text-gray-900 font-bold'}
                    >
                        Redo
                    </button>
                </div>
                {/*<button type={'button'}*/}
                {/*    onClick={() => editor.chain().focus().setColor('#958DF1').run()}*/}
                {/*    className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}*/}
                {/*>*/}
                {/*    Purple*/}
                {/*</button>*/}
            </div>
        </div>
    )
}