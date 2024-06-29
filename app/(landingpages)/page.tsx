'use client'
import Image from "next/image";
import Section from "@/components/layout/Section";
import {MouseEvent, useRef, useState} from "react";
import GlitchyTitle from "@/components/layout/GlitchyTitle";

export default function Home() {
    const handleClick=(e:MouseEvent)=>{
        let scroller = document.getElementById('scrollBar')
        let elem = document.getElementById(`img${e.currentTarget.id}`)
        if(scroller){
            scroller.scrollLeft = elem.offsetLeft
        }

    }

    return(
        < >
            <div className={'grid select-none ]'} id={'home'}>
                <div className={'w-full text-amber-100  px-8'}>
                    <h1>
                        Jeremy Cox.
                    </h1>
                    <GlitchyTitle/>
                </div>
                <div id={'scrollBar'} className={'flex overflow-x-scroll no-scrollbar snap-x snap-mandatory scroll-smooth mx-16'}>
                    {/*{*/}
                    {/*    Array(100).fill("").map((_,index)=>{*/}
                    {/*        return(*/}
                    {/*            <div key={index} id={'img'+index} className={'object-cover mx-[50%] snap-center min-w-[600px] border grid justify-center bg-gradient-radial from-amber-100 to-transparent to-60% group '}>*/}
                    {/*                /!*<h1 className={'text-4xl text-center font-bold text-yellow-100 m-2'}>Jeremy Cox</h1>*!/*/}
                    {/*                <Image className={'shadow-lg shadow-amber-100 group-hover:shadow-2xl group-hover:shadow-amber-100 transition-shadow duration-700 '} src={'/JeremySmiling.jpg'} alt={"Jeremy Cox"} width={'500'} height={'200'} id={'jeremy1'}  draggable={false} />*/}
                    {/*                <p className={'w-[500px] text-center'}>{index}</p>*/}
                    {/*            </div>*/}
                    {/*        )*/}
                    {/*    })*/}
                    {/*}*/}

                    <div id={'img0'} className={'object-cover mx-[50%] min-w-[800px] h-[600px] py-8 snap-center   grid justify-center group '}>
                        {/*<h1 className={'text-4xl text-center font-bold text-yellow-100 m-2'}>Jeremy Cox</h1>*/}
                        <Image className={'shadow-lg shadow-amber-100 group-hover:shadow-2xl group-hover:shadow-amber-100 transition-shadow duration-700 m-auto '} src={'/JeremySmiling.jpg'} alt={"Jeremy Cox"} width={500} height={200} id={'jeremy1'}  draggable={false} />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar dictum diam eu lacinia. Curabitur a vulputate urna. Etiam pulvinar libero nisl. Praesent luctus dui lacus, eget varius turpis dictum sit amet. Nunc ut justo vulputate, mollis dolor sed, tincidunt libero. Cras vel risus quis dolor volutpat gravida eu ut leo. Ut bibendum in mauris sed rhoncus. Pellentesque dignissim, sem nec finibus gravida, neque quam elementum urna, eget porta nibh tortor at ante. Donec vitae odio elementum, venenatis elit ac, porta ante. Etiam dictum consequat ante, ut euismod arcu auctor non. Cras nec ullamcorper orci. Aenean mollis urna a efficitur ornare. Nam ac fermentum turpis. Maecenas ut condimentum nibh, in posuere quam.

                            Nunc a arcu semper, sagittis odio quis, venenatis nunc. Maecenas lacus nisi, laoreet sit amet nisi quis, posuere vulputate mi. Integer sed orci ut libero feugiat accumsan quis quis nunc. Ut et facilisis ex, nec feugiat lacus. In id dui nibh. Sed eget sem egestas, malesuada orci a, egestas diam. In elementum, ipsum vel molestie dapibus, lorem orci mattis massa, eget ullamcorper nibh purus sit amet tellus. Integer eu enim ac justo tincidunt fringilla.
                        </p>
                    </div>
                    <div id={'img1'} className={'object-cover mx-[50%] min-w-[800px] h-[600px] py-8 snap-center group'}>
                        {/*<h1 className={'text-4xl text-center font-bold text-yellow-100 m-2'}>Jeremy Cox</h1>*/}
                        <Image className={'shadow-lg shadow-amber-100 group-hover:shadow-2xl group-hover:shadow-amber-100 transition-shadow duration-700 mx-auto'} src={'/yychacks.jpg'} alt={"Jeremy Cox"} width={400} height={0} id={'jeremy1'}  draggable={false} />
                        {/*<p>*/}
                        {/*    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque pulvinar dictum diam eu lacinia. Curabitur a vulputate urna. Etiam pulvinar libero nisl. Praesent luctus dui lacus, eget varius turpis dictum sit amet. Nunc ut justo vulputate, mollis dolor sed, tincidunt libero. Cras vel risus quis dolor volutpat gravida eu ut leo. Ut bibendum in mauris sed rhoncus. Pellentesque dignissim, sem nec finibus gravida, neque quam elementum urna, eget porta nibh tortor at ante. Donec vitae odio elementum, venenatis elit ac, porta ante. Etiam dictum consequat ante, ut euismod arcu auctor non. Cras nec ullamcorper orci. Aenean mollis urna a efficitur ornare. Nam ac fermentum turpis. Maecenas ut condimentum nibh, in posuere quam.*/}

                        {/*    Nunc a arcu semper, sagittis odio quis, venenatis nunc. Maecenas lacus nisi, laoreet sit amet nisi quis, posuere vulputate mi. Integer sed orci ut libero feugiat accumsan quis quis nunc. Ut et facilisis ex, nec feugiat lacus. In id dui nibh. Sed eget sem egestas, malesuada orci a, egestas diam. In elementum, ipsum vel molestie dapibus, lorem orci mattis massa, eget ullamcorper nibh purus sit amet tellus. Integer eu enim ac justo tincidunt fringilla.*/}
                        {/*</p>*/}
                    </div>
                </div>
                <div>
                    <div className={'text-center grid'}>


                        <button className={'text-blue-900 text-2xl'} onClick={handleClick} id={0}>
                            Jeremy1
                        </button>
                        <button className={'text-blue-900 text-2xl'} onClick={handleClick} id={1}>
                            Jeremy2
                        </button>
                    </div>

                </div>
            </div>

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
