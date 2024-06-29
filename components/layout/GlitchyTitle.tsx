'use client'

import {useCallback, useEffect, useState} from "react";
import {random} from "nanoid";

const possibilities1 = ["Software","Web","Database","Solutions","Computer"]
const possibilities2 = ["Developer","Designer","Consulting","Professional","Hosting","Wizard"]

export default function GlitchyTitle(){

    const [title1, setTitle1]=useState(possibilities1[0])
    const [title2, setTitle2]=useState(possibilities2[0])

    useEffect(()=>{
        let intervalTime = parseInt((Math.random()*10000).toFixed(0))+4000
       const interval = setInterval(()=>{
           if(["Developer","Hosting"].includes(title2)){
               let safeVal = possibilities1[Math.floor(Math.random()*possibilities1.length)]
               while (safeVal == "Computer"){
                   console.log("Case caught")
                   safeVal = possibilities1[Math.floor(Math.random()*possibilities1.length)]
               }
               setTitle1(safeVal)
           }else{
               setTitle1(possibilities1[Math.floor(Math.random()*possibilities1.length)])
           }
        },intervalTime)
        return(()=>{
            clearInterval(interval)
        })
    },[title1])
    useEffect(()=>{
        let intervalTime = parseInt((Math.random()*10000).toFixed(0))+4000
        const interval = setInterval(()=>{

            if(title1==="Computer"){
                let safeVal = possibilities2[Math.floor(Math.random()*possibilities2.length)]
                while (["Developer","Hosting"].includes(safeVal)){
                    console.log("Case caught")
                    safeVal = possibilities2[Math.floor(Math.random()*possibilities2.length)]
                }
                setTitle2(safeVal)
            }else{
                setTitle2(possibilities2[Math.floor(Math.random()*possibilities2.length)])
            }
        },intervalTime)
        return(()=>{
            clearInterval(interval)
        })
    },[title2])
    return(
       <>

           <div className={'flex relative'}>
               {possibilities1.map((title,index)=>{
                   return(
                       <h2 className={title===title1?'px-8 top-0 transition-all ease-in duration-500':'absolute px-8 translate-y-[1lh] opacity-0 transition-all ease-in duration-500'} key={"title1"+index}>
                           {`${title}`}
                       </h2>
                   )
               })}
               {possibilities2.map((title,index)=>{
                   return(
                       <h2 className={title===title2?'absolute translate-x-[200px] transition-all ease-in duration-500':'absolute translate-x-[200px] translate-y-[1lh] opacity-0 transition-all ease-in duration-500'} key={"title1"+index}>
                           {`${title}`}
                       </h2>
                   )
               })}
           </div>
       </>
    )
}