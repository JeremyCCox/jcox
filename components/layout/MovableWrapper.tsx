import React, {useEffect, useRef, useState} from "react";

interface Point{
    top:string;
    left:string;
}
interface PointOffset{
    top:number;
    left:number;
}

export default function MovableWrapper({children,displayText="Toggle"}:Readonly<{
    children: React.ReactNode,
    displayText:string,
}>){
    const [displayed,setDisplayed]=useState<boolean>(false)
    const [moving,setMoving]=useState<boolean>(false)
    const [point, setPoint] = useState<Point>({top:'60px',left:'30px'})
    const [pointOffset, setPointOffset] = useState<PointOffset>({top:0,left:0})
    const boxRef = useRef(null)
    const handleMouseDown=(e:React.MouseEvent)=>{
        setMoving(true)
        setPointOffset({top:e.nativeEvent.offsetY,left:e.nativeEvent.offsetX})
        setPoint({top:`${e.pageY-(e.nativeEvent.offsetY+1)}px`,left:`${e.pageX-(e.nativeEvent.offsetX+1)}px`})
    }
    const handleMouseUp=(e:Event)=>{
        resetPoint()
    }
    const resetPoint=()=>{
        setPointOffset({top:0,left:0})
        setMoving(false)
    }
    const movePoint = (e:MouseEvent)=>{
        setPoint({top:`${e.pageY-(pointOffset.top)}px`,left:`${e.pageX-(pointOffset.left)}px`})
    }
    const resetDisplay=()=>{
        dispatchEvent(new Event('clear'))
        setDisplayed(!displayed)
        setPoint({top:'60px',left:'30px'})
    }
    useEffect(()=> {
        if(moving){
            addEventListener('mousemove', movePoint)
            addEventListener('mouseup', resetPoint)
            addEventListener('keypress',(e)=>{
                if(e.key==='x'){
                    resetPoint()
                }
            })
        }
        return ()=>{
            removeEventListener('mousemove', movePoint)
            removeEventListener('mouseup', resetPoint)
            removeEventListener('keypress',(e)=>{
                if(e.key==='x'){
                    resetPoint()
                }
            })
        }
    },[pointOffset])
    useEffect(()=>{
        if(displayed){
            addEventListener("clear",()=>{
                setDisplayed(false)
            })
        }
        return()=>{
            removeEventListener("clear",()=>{
                setDisplayed(false)
            })
        }
    },[displayed])

    return(
        <>
            {displayed&&
                <div ref={boxRef} className={'absolute border border-black bg-white select-none transition:w'} style={point} >
                    <div  className={'w-full border-b bg-gray-300 border-black select-none flex justify-end'} onMouseDown={handleMouseDown}>
                        <button className={'bg-red-400 px-2 text-xl font-bold rounded-bl-xl z-10'} onMouseDown={(e)=>{e.stopPropagation()}} onClick={()=> {
                            setDisplayed(!displayed)
                        }}>
                            X
                        </button>
                    </div>
                    {children}
                </div>
            }
                <button className={'hover:bg-green-200 border-black border-b border-x'} onClick={resetDisplay}>
                    {displayText}
                </button>

            {/*<div className={'absolute bottom-0 flex'}>*/}
            {/*        <pre className={'w-fit'}>*/}
            {/*            Point:*/}
            {/*            {JSON.stringify(point,null,'\t')}*/}
            {/*        </pre>*/}
            {/*    <pre className={'w-fit'}>*/}
            {/*        Offset:*/}
            {/*        {JSON.stringify(pointOffset,null,'\t')}*/}
            {/*        </pre>*/}
            {/*</div>*/}
        </>

    )
}