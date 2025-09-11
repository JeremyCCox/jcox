'use client'

import RightEyeball from "@public/eyes/RightEyeball.svg"
import LeftEyeball from "@public/eyes/LeftEyeball.svg"
import LeftIris from "@public/eyes/LeftIris.svg"
import Eyeball from "@/test/comps/Eyeball";
export default function Page(){
    return(
        <div className={'flex items-center justify-center w-80 h-80 bg-green-200 '}   id={'box'} >
            <Eyeball
                irisSvg={LeftIris}
                irisId={'leftIris'}
                ballSvg={LeftEyeball}
                ballId={'leftBall'}
                className={'w-20 h-20'}
            />
            <div className={'w-20'}></div>
            <Eyeball
                    irisSvg={LeftIris} // Double left iris looks better.
                    irisId={'rightIris'}
                    ballSvg={RightEyeball}
                    ballId={'rightBall'}
                    className={'w-20 h-20'}
                />
        </div>
    )
}