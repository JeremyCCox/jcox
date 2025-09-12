'use client'
import {FC, SVGProps, useEffect, useRef} from "react";
import {createAnimatable, createScope, Scope, utils} from "animejs";

export default function Eyeball(props:Readonly<{eyeSpeed?:number,className:string,ballId:string,irisId:string,ballSvg:FC<SVGProps<SVGSVGElement>>,irisSvg:FC<SVGProps<SVGSVGElement>>, }>){
    const container = useRef(null)
    const scope= useRef<Scope>(null)


    useEffect(() => {
        scope.current = createScope({
            root: container.current || undefined
        }).add((scope)=> {
            const demo = document.getElementById(props.ballId);
            if(!demo){
                return
            }
            let bounds = demo.getBoundingClientRect();
            const refreshBounds = () => bounds = demo.getBoundingClientRect();
            const animatableSquare = createAnimatable(`#${props.irisId}`, {
                x: 1*(props.eyeSpeed || 700), // Define the x duration to be 500ms
                y: 1.8*(props.eyeSpeed || 700),  // Define the y duration to be 500ms
                ease: 'out(3)',
            });

            const onMouseMove = (e:MouseEvent) => {
                const { width, height, left,right, top,bottom } = bounds;
                const hw = width / 10; // TODO: This needs to be cleverer. probably something parabolic
                const hh = height / 10;
                const x = utils.clamp(e.clientX - (left + (right-left)/4) - hw, -hw, hw);
                const y = utils.clamp(e.clientY - (top + (bottom-top)/4)  - hh, -hh, hh);
                animatableSquare.x(x); // Animate the x value in 500ms
                animatableSquare.y(y); // Animate the y value in 500ms
            }

            window.addEventListener('mousemove',onMouseMove)
            window.addEventListener('scroll', refreshBounds);
        })
        return ()=> scope.current?.revert()

    },[]);
    return (
        <div
            ref={container}
            className={`${props.className} relative`}
        >
               <props.ballSvg
                   id={props.ballId}
                className={`${props.className} absolute`}
               />

            <div
                id={props.irisId}
            >
                <props.irisSvg
                    className={`${props.className} absolute`}
                />
            </div>
            <p>
            </p>
        </div>

    )
}