'use client'
import EyeImage from "@/test/EyeImage";
import LeftIris from "@public/eyes/LeftIris.svg"
import LeftEyeball from "@public/eyes/LeftEyeball.svg"
import RightEyeball from "@public/eyes/RightEyeball.svg"
import {EyeballProps} from "@/test/comps/Eyeball";

export default function Page(){
    const eyes:EyeballProps[]=[
        {
            irisSvg:LeftIris,
            ballSvg:LeftEyeball,
            eyeballId:'leftEye',
            width:18,
            top:74,
            left:102
        },
        {
            irisSvg:LeftIris,
            ballSvg:RightEyeball,
            eyeballId:'rightEye',
            width:18,
            top:72,
            left:121
        },
        {
            irisSvg:LeftIris,
            ballSvg:LeftEyeball,
            eyeballId:'leftEye2',
            width:10,
            top:230,
            left:98
        },
        {
            irisSvg:LeftIris,
            ballSvg:RightEyeball,
            eyeballId:'rightEye2',
            width:10,
            top:230,
            left:99
        }
    ]

    return(
        <div className={'flex relative items-center justify-center w-[400px] h-fit bg-green-200 '} >
            <EyeImage
                imageSrc={'/JeremySmiling.jpg'}
                width={400}
                height={200}
                eyes={eyes}
            />
        </div>
    )
}