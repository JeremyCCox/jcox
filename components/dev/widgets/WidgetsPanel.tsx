'use client'

import {ChangeEvent, MouseEvent, useEffect, useState } from "react"
import DownloadButton from "../../DownloadButton"
import NewWidget from "./NewWidget"

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
    const [newWidget,setNewWidget]=useState<WidgetType>()
    const [widgets,setWidgets]=useState<WidgetType[]>([])
    const handleInput=(e:ChangeEvent<HTMLInputElement>)=>{
        setWidgets([{...widgets[0], values:{...widgets[0].values, [e.currentTarget.id]:e.currentTarget.value }}])
    }
    const addNewWidget=(e:MouseEvent<HTMLButtonElement>)=>{
        setNewWidget(
            {
                name:"Releases Button",
                component:"releaseDownload",
                parameters:["owner", "repository"],
                values:{}
            }
        )
    }
    useEffect(() => {
        console.log(widgets)
    }, [widgets]);
    return(
        <>
            <div className={'border-2 w-[400px] '}>
                {selectableWidgets.map(widget=>{
                    return(
                        <button key={widget.name} id={widget.name} type={"button"} onClick={addNewWidget}>
                            {widget.name}
                        </button>
                    )
                })}
                {newWidget&&
                    <NewWidget widget={newWidget} addWidget={(widget:WidgetType)=>{console.log(widget);setWidgets(prevState=>[...prevState, widget])}} />
                }
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