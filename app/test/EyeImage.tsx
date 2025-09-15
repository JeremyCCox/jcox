import Image from "next/image";
import Eyeball, {EyeballProps} from "@/test/comps/Eyeball";
import LeftIris from "@public/eyes/LeftIris.svg";
import LeftEyeball from "@public/eyes/LeftEyeball.svg";
import RightEyeball from "@public/eyes/RightEyeball.svg";
import {useEffect, useRef} from 'react'

interface EyeImageProps {
    eyes: EyeballProps[],
    imageSrc: string,
    width: number | `${number}`,
    height?: number | `${number}`,
}

export default function EyeImage({eyes,imageSrc,width,height}:Readonly<EyeImageProps>){
    const imageRef = useRef(null);

    useEffect(() => {

        /**
         *  on window resize, (Debounced by a few seconds?)
         *
         *  let:
         *      - base image width (bw)
         *      - base image height (bh)
         *
         *  get:
         *      - Image width (iw)
         *      - Image height (ih)
         *      - Desired y (dy)
         *      - Desired x (dx)
         *      - Desired eye width (ew)
         *      - Desired eye height (eh)
         *
         *  then:
         *      - Scale width ( sw ) = ( iw / bw )
         *      - Scale height ( sh ) = ( ih / bh )
         *
         *      Scale the window:
         *      h = sh * bh
         *      w = sw * bw
         *
         *      Scale the eye
         *      h = sh * eh
         *      w = sw * ew
         *
         *      Set the new eye position:
         *      ( x, y ) = ( dx + sw ( bw - dx ), dy + sh ( bh - dy ) )  // Courtesy of [Isaac from stack overflow](https://math.stackexchange.com/questions/109122/how-do-i-calculate-the-new-x-y-coordinates-and-width-height-of-a-re-sized-group)
         *
         *
         */



    }, []);

    return (
        <div className={`relative w-[${width}px] h-[${height??width}px] flex`}>
            <Image
                src={imageSrc}
                alt={'Jeremy Smiling'}
                style={{objectFit:"contain",position:"absolute" }}
                priority
                width={width}
                height={height}
                ref={imageRef}
            />
            {
                eyes?.map(eye=>{
                    return(
                        <Eyeball
                            key={eye.eyeballId}
                            irisSvg={eye.irisSvg}
                            ballSvg={eye.ballSvg}
                            eyeballId={eye.eyeballId}
                            width={eye.width}
                            height={eye.height}
                            top={eye.top}
                            left={eye.left}
                        />
                    )
                })
            }
        </div>
    )
}