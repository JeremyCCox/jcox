'use client'
import {useEffect, useState} from "react";

export default function Section({id}:{id:string}){
    const [visible, setVisible] = useState(false)
    const eventHandle=(e:CustomEvent)=>{
        if(e.detail === id){
            console.log(e)
        }
        window.location.hash=e.detail
    }
    useEffect(()=>{
        window.addEventListener('customScroll',eventHandle)
        return(()=>{
            window.removeEventListener('customScroll',eventHandle)
        })
    })

    return(
        <div className={`relative grid justify-center py-32 select-none h-[100vh] `} id={id}>
            <button className={'absolute left-8 top-8 bg-amber-100 rounded-full h-16 w-16 border-black border '} type={'button'} onClick={()=>{window.scrollTo(0,0)}}>
                Text
            </button>
        </div>
    )
}