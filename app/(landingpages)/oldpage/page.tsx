import Image from "next/image";
import Section from "@/components/layout/Section";
import {MouseEvent} from "react";

export default function Home() {

    // const handleClick=(e:MouseEvent)=>{
    //     window.dispatchEvent(new CustomEvent('customScroll',{detail:e.currentTarget.id.split(':')[0]}))
    // }

    return(
        < >
            <div className={'grid justify-center py-32 select-none h-[100vh]'} id={'home'}>
                <div className={'my-8 w-[600px] grid justify-center p-10 bg-gradient-radial from-amber-100 to-transparent to-60% group'}>
                    <h1 className={'text-4xl text-center font-bold text-yellow-100 m-2'}>Jeremy Cox</h1>
                    <Image className={'shadow-lg shadow-amber-100 group-hover:shadow-2xl group-hover:shadow-amber-100 transition-shadow duration-700 '} src={'/JeremySmiling.jpg'} alt={"Jeremy Cox"} width={'500'} height={'200'}  draggable={false} />
                    <p className={'w-[500px] text-center'}></p>
                </div>
                <div>
                    <div className={'text-center grid'}>
                        {/*<button className={'text-blue-900 text-2xl'} onClick={handleClick} id={'yyc_hacks_2024:b'}>*/}
                        {/*    YYC Hacks 2024*/}
                        {/*</button>*/}
                        {/*<button className={'text-blue-900 text-2xl'} onClick={handleClick} id={'wrapaudit:b'}>*/}
                        {/*    Wrapaudit.com*/}
                        {/*</button>*/}
                    </div>

                </div>
            </div>
            <Section id={'yyc_hacks_2024'}/>
            <Section id={'wrapaudit'}/>

            {/*<div className={'my-8 w-[600px] grid justify-center p-10 bg-gradient-radial from-amber-100 to-transparent to-60% group'}>*/}
            {/*    <h2 className={'text-4xl text-center opacity-5 font-bold text-amber-100 group-hover:opacity-100 transition-opacity duration-500 ease-out m-2'}>YYC Hacks 2024</h2>*/}
            {/*    <Image className={'shadow-lg shadow-amber-100 group-hover:shadow-2xl group-hover:shadow-amber-100 transition-shadow duration-500 ease-out my-8'} src={'/yychacks.jpg'} alt={"YYCHacks 2024 YYC-iosk group photo"}  height={'20'} width={'500'}  draggable={false} />*/}
            {/*    <p className={'w-[500px] text-center'}></p>*/}
            {/*</div>*/}
            {/*<div className={'my-8 w-[600px] grid justify-center p-10 bg-gradient-radial from-amber-100 to-transparent to-60% group'}>*/}
            {/*    <h2 className={'text-4xl text-center opacity-5 font-bold text-amber-100 group-hover:opacity-100 transition-opacity duration-500 ease-out m-2'}>YYC Hacks 2024</h2>*/}
            {/*    <Image className={'shadow-lg shadow-amber-100 group-hover:shadow-2xl group-hover:shadow-amber-100 transition-shadow duration-500 ease-out my-8'} src={'/yychacks.jpg'} alt={"YYCHacks 2024 YYC-iosk group photo"}  height={0} width={0} sizes={'100px'} draggable={false} />*/}
            {/*    <p className={'w-[500px] text-center'}></p>*/}
            {/*</div>*/}

        </>
    );
}
