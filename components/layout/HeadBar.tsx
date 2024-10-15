'use client'
import GlitchyTitle from "@/components/layout/GlitchyTitle";
import OutLinks from "@/components/layout/OutLinks";


export default function HeadBar(){
    return(
        <div className={'w-full grid relative z-10 md:flex md:justify-between'}>

            <div className={'w-fit text-amber-100 pl-6'}>
                <h1 className={'text-nowrap '} >
                    <a href={'/'}>
                        Jeremy Cox.
                    </a>
                </h1>
                <GlitchyTitle/>
            </div>
            <OutLinks/>
        </div>
    )
}