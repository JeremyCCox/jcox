'use client'
import {FC, SVGProps, useEffect, useRef} from "react";
import {createAnimatable, createScope, Scope, utils} from "animejs";

export interface EyeballProps {
    eyeSpeed?:number,
    className?:string,
    eyeballId:string,
    ballSvg:FC<SVGProps<SVGSVGElement>>,
    irisSvg:FC<SVGProps<SVGSVGElement>>,
    width?:number,
    height?:number,
    top?:number,
    left?:number,
}

export default function Eyeball(props:Readonly<EyeballProps>){
    const container = useRef(null)
    const scope= useRef<Scope>(null)


    useEffect(() => {
        scope.current = createScope({
            root: container.current || undefined
        }).add((scope)=> {
            const demo = document.getElementById(`${props.eyeballId}-ball`);
            if(!demo){
                return
            }
            let bounds = demo.getBoundingClientRect();
            const refreshBounds = () => bounds = demo.getBoundingClientRect();
            const animatableSquare = createAnimatable(`#${props.eyeballId}-iris`, {
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
            style={
                {
                    position: 'relative',
                    left: props.left,
                    top: props.top,
                    width:props.width,
                    height:props.height??props.width,
                }
            }
        >
               <props.ballSvg
                   id={`${props.eyeballId}-ball`}
                   style={
                       {
                           position:"absolute",
                           width: props.width,
                           height:props.height
                       }}
                className={`absolute`}
               />

            <div
                id={`${props.eyeballId}-iris`}
            >
                <props.irisSvg
                    style={
                        {
                            position:'absolute',
                            width: props.width,
                            height:props.height
                        }}
                />
            </div>
        </div>

    )
}