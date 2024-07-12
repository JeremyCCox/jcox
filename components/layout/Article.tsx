'use client'
import Image from "next/image";
import React from "react";

export default function Article(
    {
        children,
        id,
        title,
        imgSrc,
        imgAlt="Default image ALT text",
        bodyText,
        isHome = false
        }:Readonly<{
        children?: React.ReactNode;
        id?:string,
        title?:string,
        imgSrc?:string,
        imgAlt?:string,
        bodyText?:string,
            isHome?:boolean
    }>){

        const returnHome=()=>{
                let elem = document.getElementById('scrollBar')
                if(elem){
                        elem.scrollLeft=0;

                }
        }

    return (
        <div id={id} className={'py-8 min-w-[80vw] sm:px-16 md:px-24 lg:px-32 mx-[10vw] relative md:snap-center md:snap-mandatory min-h-[90vh] group border border-amber-100 rounded-lg bg-gradient-to-b from-gray-900 to-gray-700 from-50% shadow-gray-700 shadow-2xl mb-16'}>
                {!isHome&&<button className={'hidden md:block absolute md:text-6xl left-16  '} onClick={returnHome}>
                        ←
                </button>}
            {/*<h1 className={'text-4xl text-center font-bold text-yellow-100 m-2'}>Jeremy Cox</h1>*/}
            <h1 id={`H:${id}`} className={'text-amber-100 font-bold text-center'}>{title}</h1>
            {imgSrc&&
                <Image className={'m-auto mt-6 mb-10  shadow-amber-200 shadow-lg group-hover:shadow-amber-200 group-hover:shadow-xl transition-shadow duration-700 w-4/5 max-w-[300px] md:max-w-[400px] lg:max-w-[680px]'} src={imgSrc} alt={imgAlt} width={0} sizes={'100vw'} height={0} id={'jeremy1'}  draggable={false} />
            }
            {bodyText&&
                <p>
                {bodyText}
                </p>
                }
            {children}
        </div>

)
}