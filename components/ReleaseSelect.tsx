import {ChangeEvent } from "react";
import { ReleasesType } from "./DownloadButton";

export default function ReleaseSelect({releases,selected,handleChange}:Readonly<{ releases: ReleasesType,selected?:string,handleChange:(e:ChangeEvent<HTMLSelectElement>)=>void}>){
    const empty = Object.keys(releases).length === 0;
    return(
        <>
            <select className={"bg-transparent hover:border border-amber-100 px-1 "} value={selected} onChange={handleChange} >
                <option className={''} key={crypto.randomUUID()} value={""} disabled hidden={!empty} >
                    No current options
                </option>
                {Object.keys(releases).map((name)=>{
                    return(
                        <option className={'text-black'} key={`${name}:${selected}`} value={name} >
                            {name}
                        </option>
                    )
                })}
            </select>
        </>
    )
}
