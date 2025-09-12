'use client'

import RightEyeball from "@public/eyes/RightEyeball.svg"
import LeftEyeball from "@public/eyes/LeftEyeball.svg"
import LeftIris from "@public/eyes/LeftIris.svg"
import Eyeball from "@/test/comps/Eyeball";
import Image from "next/image"
import EyeImage from "@/test/EyeImage";

export default function Page(){
    return(
        <div className={'flex relative items-center justify-center w-[42vw] h-[54vh] bg-green-200 '} >
            <EyeImage/>
        </div>
    )
}