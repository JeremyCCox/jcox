import Image from "next/image";
import Eyeball from "@/test/comps/Eyeball";
import LeftIris from "@public/eyes/LeftIris.svg";
import LeftEyeball from "@public/eyes/LeftEyeball.svg";
import RightEyeball from "@public/eyes/RightEyeball.svg";
import {useEffect, useRef} from 'react'

export default function EyeImage(){
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
        <div className={'relative w-full h-full bg-red-300 flex'}>
            <Image
                src={'/JeremySmiling.jpg'}
                alt={'Jeremy Smiling'}
                style={{objectFit:"contain",position:"absolute" }}
                priority
                width={'400'}
                height={'200'}
                ref={imageRef}
            />
            <Eyeball
                irisSvg={LeftIris}
                irisId={'leftIris'}
                ballSvg={LeftEyeball}
                ballId={'leftBall'}
                className={'w-8 top-[35px] left-[46px]  '}
            />
            <Eyeball
                irisSvg={LeftIris} // Double left iris looks better.
                irisId={'rightIris'}
                ballSvg={RightEyeball}
                ballId={'rightBall'}
                className={'w-8 top-[35px] left-[51px] '}
            />
        </div>
    )
}