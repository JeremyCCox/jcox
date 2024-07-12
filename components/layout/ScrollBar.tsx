'use client'
import React, {MouseEvent} from "react";

export default function ScrollBar({children}:Readonly<{
    children?:React.ReactNode,
}>){
    const scrollRight=(e:MouseEvent)=>{
        let scroller = document.getElementById('scrollBar')
        // let elem = document.getElementById(`${e.currentTarget.id}`)
        console.log("scroll")
        if(scroller){
            scroller.scrollTo(scroller.scrollLeft+window.innerWidth,0)
            // scroller.scrollLeft = window.innerWidth
            // console.log("Adada")
        }

    }
    const scrollLeft=(e:MouseEvent)=>{
        let scroller = document.getElementById('scrollBar')
        // let elem = document.getElementById(`${e.currentTarget.id}`)
        if(scroller){
            // console.log(scroller.scrollLeft)
            scroller.scrollTo(scroller.scrollLeft-window.innerWidth,0)
            // scroller.scrollLeft = -window.innerWidth
        }
    }

    return(
        <div className={'flex overflow-x-scroll no-scrollbar relative my-16'}>
            <button type={'button'} onClick={scrollLeft} className={'hidden md:block group h-full absolute w-24 lg:w-32'}>
                <div className={'-translate-x-28 group-hover:-translate-x-20  bg-gradient-radial from-amber-100 to-transparent to-70% w-full h-full transition-all duration-1000'}>

                </div>
            </button>
            <div id={'scrollBar'}  className={'grid md:flex overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory'}>
                {children}
            </div>
            <button type={'button'} onClick={scrollRight} className={'hidden md:block group h-full absolute  w-24 lg:w-32 right-0'}>
                <div className={'translate-x-28 group-hover:translate-x-20  bg-gradient-radial from-amber-100 to-transparent to-70% w-full h-full transition-all duration-1000'}>

                </div>
            </button>
        </div>
        )
}