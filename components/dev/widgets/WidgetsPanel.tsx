'use client'

import {ChangeEvent, MouseEvent, useEffect, useState } from "react"
import DownloadButton from "../../DownloadButton"
import NewWidget from "./NewWidget"
import WidgetDisplaySwitch from "@/components/dev/widgets/WidgetDisplaySwitch";

export interface WidgetType{
    id:string,
    name:string,
    component:string,
    parameters:string[],
    values:{[key:string]:string},

}

const selectableWidgets = [
    {name:"Github Releases Download", component:"releaseDownload"}
]

export default function WidgetsPanel({addWidgetCallback}:Readonly<{ addWidgetCallback?:(widget:WidgetType)=>void }>){
    const [newWidget,setNewWidget]=useState<WidgetType>()
    const [widgets,setWidgets]=useState<WidgetType[]>([])
    const handleInput=(e:ChangeEvent<HTMLInputElement>)=>{
        setWidgets([{...widgets[0], values:{...widgets[0].values, [e.currentTarget.id]:e.currentTarget.value }}])
    }
    const addNewWidget=(e:MouseEvent<HTMLButtonElement>)=>{
        setNewWidget(
            {
                id:"unset",
                name:"Releases Button",
                component:"releaseDownload",
                parameters:["owner", "repository"],
                values:{}
            }
        )
    }
    const addWidget=(widget:WidgetType)=>{
        if(addWidgetCallback){
            addWidgetCallback(widget)
        }else{
            setWidgets(prevState=>[...prevState, widget]);
        }
    }
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
                    <NewWidget widget={newWidget} addWidget={addWidget} />
                }
            </div>
            {widgets.map(widget=>{
                return(
                    <WidgetDisplaySwitch key={widget.name} widget={widget}/>
                )
            })}
        </>
    )
}