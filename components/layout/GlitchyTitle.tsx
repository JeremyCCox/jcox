'use client'

import {useCallback, useEffect, useState} from "react";
import {random} from "nanoid";

interface ScrambleTitle{
    title: string;
    selections: string[];
    rare:string[];
    style?:React.CSSProperties;
}

const possibilities1 = ["Software","Web","Database","Solutions","Computer"]
const possibilities2 = ["Developer","Designer","Consulting","Professional","Hosting","Wizard"]
const possibleTitle1:ScrambleTitle[] = [
    {
        title:"Software",
        selections:[
            "Developer",
            "Designer",
            "Consulting",
            "Professional",
        ],
        rare:[
            "Wizard",
        ]

    },
    {
        title:"Web",
        selections:[
            "Developer",
            "Designer",
            "Consulting",
            "Professional",
            "Hosting"
        ],
        rare:[
            "Wizard",
        ]

    },
    {
        title:"Database",
        selections:[
            "Developer",
            "Designer",
            "Consulting",
            "Hosting",
        ],
        rare:[
            "Wizard",
        ]

    },
    {
        title:"Solutions",
        selections:[
            "Developer",
            "Designer",
            "Consulting",
            "Professional",
            "Hosting",
        ],
        rare:[
            "Wizard",
        ]

    },
    {
        title:"Computer",
        selections:[
            "Designer",
            "Consulting",
            "Professional",
        ],
        rare:[
            "Wizard",
        ]

    },
]
const possibleTitle2:ScrambleTitle[] = [
    {
        title:"Developer",
        selections:[
            "Software",
            "Web",
            "Database",
            "Solutions",
        ],
        rare:[]

    },
    {
        title:"Designer",
        selections:[
            "Software",
            "Web",
            "Database",
            "Solutions",
            "Computer"
        ],
        rare:[]

    },
    {
        title:"Consulting",
        selections:[
            "Software",
            "Web",
            "Database",
            "Solutions",
            "Computer",
        ],
        rare:[]
    },
    {
        title:"Professional",
        selections:[
            "Software",
            "Web",
            "Solutions",
            "Computer",
        ],
        rare:[]

    },
    {
        title:"Hosting",
        selections:[
            "Web",
            "Database",
            "Solutions",
        ],
        rare:[],
        style:{
        }

    },
    {
        title:"Wizard",
        selections: [
            "Software",
            "Web",
            "Database",
            "Solutions",
            "Computer"
        ],
        rare:[
        ],
        style:{
            color:"lightcyan",
            animationDuration:'1s',
            animationIterationCount:999,
            animationName:'shakeTitle',
        }
    }
]

export default function GlitchyTitle(){

    const [title1, setTitle1]=useState(possibleTitle1[0])
    const [title2, setTitle2]=useState(possibleTitle2[0])

    useEffect(()=>{
        let intervalTime = parseInt((Math.random()*10000).toFixed(0))+4000
       const interval = setInterval(()=>{
           // let possible: ScrambleTitle = possibleTitle2.find(({title})=>title===title2) || possibleTitle2[0];
           let randVal = Math.random();
           if (randVal > .0){
               let selections = title2.selections.concat(title2.rare)
               let selected:ScrambleTitle = possibleTitle1.find(({title})=>title===selections[Math.floor(Math.random()*selections.length)])||possibleTitle1[0]
               setTitle1(selected)
           }else{
               setTitle1(possibleTitle1.find(({title})=>title===title2.selections[Math.floor(Math.random()*title2.selections.length)])||possibleTitle1[0])
           }

           // if(["Developer","Hosting"].includes(title2)){
           //     let safeVal = possibilities1[Math.floor(Math.random()*possibilities1.length)]
           //     while (safeVal == "Computer"){
           //         console.log("Case caught")
           //         safeVal = possibilities1[Math.floor(Math.random()*possibilities1.length)]
           //     }
           //     setTitle1(safeVal)
           // }else{
           //     setTitle1(possibilities1[Math.floor(Math.random()*possibilities1.length)])
           // }
        },intervalTime)
        return(()=>{
            clearInterval(interval)
        })
    },[title1, title2.rare, title2.selections])
    useEffect(()=>{
        let intervalTime = parseInt((Math.random()*10000).toFixed(0))+4000
        const interval = setInterval(()=>{
            // let possible: ScrambleTitle = possibleTitle1.find(({title})=>title===title1) || possibleTitle1[0];
            let randVal = Math.random();
            if (randVal > .95){
                // let selections = title1.rare
                let selections = title1.selections.concat(title1.rare)
                let selected = possibleTitle2.find(({title})=>title===selections[Math.floor(Math.random()*selections.length)])||possibleTitle2[0]
                setTitle2(selected)
            }else{
                setTitle2(possibleTitle2.find(({title})=>title===title1.selections[Math.floor(Math.random()*title2.selections.length)])||possibleTitle2[0])
            }
            // if(title1==="Computer"){
            //     let safeVal = possibilities2[Math.floor(Math.random()*possibilities2.length)]
            //     while (["Developer","Hosting"].includes(safeVal)){
            //         console.log("Case caught")
            //         safeVal = possibilities2[Math.floor(Math.random()*possibilities2.length)]
            //     }
            //     setTitle2(safeVal)
            // }else{
            //     setTitle2(possibilities2[Math.floor(Math.random()*possibilities2.length)])
            // }
        },intervalTime)
        return(()=>{
            clearInterval(interval)
        })
    },[title1.rare, title1.selections, title2])
    return(
        <div className={'flex relative'}>
            {possibleTitle1.map((title,index)=>{
                return(
                    <h2 className={title===title1?'px-2 md:px-8 top-0 transition-all ease-in duration-500':'absolute px-2 md:px-8 translate-y-[1lh] -z-10 opacity-0 transition-all ease-in duration-500'} key={"title1"+index}>
                        {`${title.title}`}
                    </h2>
                )
            })}
            {possibleTitle2.map((title,index)=>{
                return(
                    <h2 style={title.style} className={title===title2?'absolute translate-x-[130px] md:translate-x-[200px] lg:translate-x-[350px] transition-all ease-in duration-500 -z-10':'absolute translate-x-[130px] md:translate-x-[200px] lg:translate-x-[350px] -z-10 translate-y-[1lh] opacity-0 transition-all ease-in duration-500'} key={"title1"+index}>
                        {`${title.title}`}
                    </h2>
                )
            })}
        </div>
    )
}