'use client'
import React, {MouseEvent} from "react";
import {QueryClient, QueryClientProvider} from "react-query";

export default function ScrollBar({children}:Readonly<{
    children?:React.ReactNode,
}>){
    const queryClient = new QueryClient();
    const scrollRight=(e:MouseEvent)=>{
        let scroller = document.getElementById('scrollBar')
        if(scroller){
            scroller.scrollTo(scroller.scrollLeft+window.innerWidth,0)
        }

    }
    const scrollLeft=(e:MouseEvent)=>{
        let scroller = document.getElementById('scrollBar')
        if(scroller){
            scroller.scrollTo(scroller.scrollLeft-window.innerWidth,0)
        }
    }

    return(
        <div className={'flex overflow-x-scroll no-scrollbar relative my-16'}>
            <button type={'button'} onClick={scrollLeft} className={'hidden md:block group h-full absolute w-24 lg:w-32'}>
                <div className={'-translate-x-28 group-hover:-translate-x-20  bg-gradient-radial from-amber-100 to-transparent to-70% w-full h-full transition-all duration-1000'}>

                </div>
            </button>
            <div id={'scrollBar'}  className={'grid md:flex overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory'}>
                <QueryClientProvider client={queryClient}>
                    {children}
                </QueryClientProvider>
            </div>
            <button type={'button'} onClick={scrollRight} className={'hidden md:block group h-full absolute  w-24 lg:w-32 right-0'}>
                <div className={'translate-x-28 group-hover:translate-x-20  bg-gradient-radial from-amber-100 to-transparent to-70% w-full h-full transition-all duration-1000'}>

                </div>
            </button>
        </div>
        )
}