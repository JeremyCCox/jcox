'use client'
import Image from "next/image";
import {useEffect, useState} from "react";

export default function OutLinks(){
    const [active, setActive] = useState(false)
    const [copyText, setCopyText] = useState("Copy")
    const [imageSize, setImageSize] = useState({})//(window.innerWidth>768?window.innerWidth>1024?75:50:44)
    const copy=async () => {
        await navigator.clipboard.writeText('Jchristophercox@gmail.com')
        setCopyText("Copied!")
    }
    useEffect(()=>{
        setTimeout(()=>{
            setCopyText('Copy')
        },500)
    },[active])
    const calcImages =()=>{
        let sqr = 40
        switch(true){
            case(window.innerWidth>1024):
                sqr = 75;
                break;
            case(window.innerWidth>768):
                sqr = 50;
                break;
            default:
                sqr=44
        }
        setImageSize(
        {width:sqr,height:sqr}
        )
    }
    useEffect(()=>{
        calcImages()
    },[])
    useEffect(()=>{
        window.addEventListener('resize',calcImages)
        return()=>{
            window.removeEventListener('resize',calcImages)
        }
    })
    return(
        <div className={'flex relative'}>
            <h4 className={'hidden md:block absolute text-center w-full text-white'}>
                You can find me:
            </h4>
            <div className={'text-amber-100 grid md:flex justify-end w-full fixed md:relative px-2 md:px-0'}>
                <div className={'flex'}>
                    <div className={`relative group my-auto ${active?'w-[280px] md:w-[370px] lg:w-[545px] ':'w-0'} overflow-hidden transition-all duration-700`} onClick={()=>console.log("adada")}>
                        <span className={'flex bg-gray-900 rounded-lg'}>
                            <span className={`bg-white py-[3px] md:py-[5px] lg:py-[8px] select-all overflow-hidden relative text-lg md:text-2xl lg:text-4xl px-2 my-auto text-gray-900 hover:cursor-text group transition-all rounded-l-lg duration-700`}>
                                Jchristophercox@gmail.com
                            </span>
                            <button onClick={copy} className={`${copyText==="Copied!"?'bg-green-500':'bg-white'} my-auto py-[3px] md:py-[5px] lg:py-[8px] rounded-r-lg ml-1 text-lg md:text-2xl lg:text-4xl text-gray-900 transition-all duration-1000`}>
                                {copyText}
                            </button>
                        </span>
                    </div>
                    <button className={'text-white font-extrabold text-5xl md:text-6xl lg:text-8xl mx-2 px-1' } onClick={()=> {setActive(!active)}}>
                        M
                    </button>
                </div>
            </div>
            <div className={`text-amber-100 grid md:flex justify-end  ${active?'md:w-0':'md:w-[280px] lg:w-[350px]'} transition-w duration-700 px-4 md:px-0 right-0 fixed mt-20 md:mt-0 md:relative `}>
                <a href={'https://github.com/JeremyCCox'} className={'hover:cursor-pointer my-6 md:mx-6 lg:my-auto w-[44px] md:w-[50px] lg:w-[75px]'} target={'_blank'}>
                    <Image src={'/github-mark-white.png'} alt={'github url'} sizes={'100vw'} width={0} height={0} style={imageSize}/>
                </a>
                <a href={'https://www.linkedin.com/in/jeremy-cox-aa44531b7/'} className={'hover:cursor-pointer my-6 md:mx-6 lg:my-auto w-[44px] md:w-[50px] lg:w-[75px]'} target={'_blank'}>
                    <Image src={'/In-White.png'} alt={'LinkedIn url'} sizes={'100vw'} width={0} height={0} style={imageSize}/>
                </a>
            </div>

        </div>
    )
}