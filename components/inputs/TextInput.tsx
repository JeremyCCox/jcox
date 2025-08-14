'use client'
import React, {ChangeEventHandler, useState} from "react";

export default function TextInput({title="Text here", onChange=()=>{}, id="", name=id,value,type='text', width=60,required=false}:Readonly<{
    title: string,
    onChange?:ChangeEventHandler<HTMLInputElement>,
    id:string,
    name:string,
    type:string,
    width?:number,
    required?:boolean,
    value?:string|undefined
}>){
    const [togglePassword, setTogglePassword] = useState(true)

    return(
        <label className={`max-w-[${width}px] my-2 group relative`} >
            <input type={type === 'password'?togglePassword?"password":'text':'text'} className={'float-input peer'}  placeholder={title} name={name} id={id} onChange={onChange} value={value} required={required}/>
            <span className={'float-input-span'}>
                {title}
            </span>
            {type==="password"&&
                <span className={'-tracking-[4px] absolute top-2 mx-2 select-none hover:cursor-pointer'} onClick={()=>{setTogglePassword(!togglePassword)}}>
                    &lt;
                    {togglePassword?
                        <>0</>
                        :
                        <>O</>
                    }
                    &gt;
                </span>
            }
        </label>
    )
}