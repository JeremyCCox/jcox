'use client'
import React, {ChangeEventHandler} from "react";

export default function TextInput({title="Text here", onChange=()=>{}, id="", name=id,value,type='text', width=60}:Readonly<{
    title: string,
    onChange:ChangeEventHandler<HTMLInputElement>,
    id:string,
    name:string,
    type:string,
    width:number,
    value:string|undefined
}>){
    return(
        <label className={`max-w-[${width}px]`} >
                <span className={'fixed select-none opacity-100 block translate-y-[-7px]  rounded-full translate-x-[10px] px-1 text-xs text-nowrap overflow-hidden font-bold font-mono bg-gradient-to-t from-transparent from-40% to-white to-40%'}>
                {title}
                </span>
            <input type={type} className={'rounded-lg px-[.2lh] w-full placeholder:px-1'} placeholder={title} name={name} id={id} onChange={onChange} value={value}/>
        </label>
    )
}