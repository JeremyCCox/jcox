'use client'

import {ChangeEvent, MouseEvent, useEffect, useState } from "react"
import DownloadButton from "../DownloadButton"

export interface WidgetType{
    name:string,
    component:string,
    parameters:string[],
    values:{[key:string]:string},

}

const selectableWidgets = [
    {name:"Github Releases Download", component:"releaseDownload"}
]

export default function WidgetsPanel(){
    const [widgets,setWidgets]=useState<WidgetType[]>([])
    const handleInput=(e:ChangeEvent<HTMLInputElement>)=>{

        setWidgets([{...widgets[0], values:{...widgets[0].values, [e.currentTarget.id]:e.currentTarget.value }}])
    }
    const newWidget=(e:MouseEvent<HTMLButtonElement>)=>{
        setWidgets([
            {
                name:"Releases Button",
                component:"releaseDownload",
                parameters:["owner", "repository"],
                values:{}
            }
        ])
    }
    return(
        <>
            <div className={'border-2 w-[400px] '}>
                {selectableWidgets.map(widget=>{
                    return(
                        <button key={widget.name} id={widget.name} type={"button"} onClick={newWidget}>
                            {widget.name}
                        </button>
                    )
                })}
                <div className={'grid text-amber-100'}>

                    {widgets[0] && widgets[0].parameters.map(param=>{
                        return(
                            <label>
                                {param}
                                <input className={'bg-gray-700 px-2'} type={'text'} id={param} onChange={handleInput} />
                            </label>
                        )
                    })}
                </div>
            </div>
            {widgets.map(widget=>{
                return(
                    <div>
                        {widget.component==="releaseDownload"?
                            <>
                                {widget.values["owner"]}
                                {widget.values["repository"]}
                                <DownloadButton repository={widget.values['repository']} owner={widget.values['owner']} />
                            </>
                            :
                            <></>
                        }
                    </div>
                )
            })}
        </>
    )
}