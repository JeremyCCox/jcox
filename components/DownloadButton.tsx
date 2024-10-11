'use client'
import { request } from "@octokit/request";
import React, {ChangeEvent, useEffect, useState } from "react";
import ReleaseSelect from "./ReleaseSelect";

export interface ReleasesType{
    [key:string]: Record<string,any>
}
interface ReleaseType{
    [key:string]:any,
}

export default function DownloadButton(){

    const [releaseSource, setReleaseSource] = useState({} as ReleaseType)
    const [releases,setReleases] = useState({}as ReleasesType)
    const [osType, setOsType] = useState("Default")
    useEffect(() => {
        checkOsType()
        getReleases()
    }, [])

    const checkOsType=()=> {
        let userAgent = navigator.userAgent;
        let osType;
        switch (true) {
            case(userAgent.includes("Windows")):
                osType = "Windows"
                break;
            case(userAgent.includes("Linux")):
                osType = "Linux"
                break;
            case(userAgent.includes("X11")):
                osType = "Unix"
                break;
            case(userAgent.includes("Mac")):
                osType = "MacOs"
                break;
            default:
                osType = "Default"
                break;
        }
        setOsType(osType)
        return osType
    }
    const getReleases = async () => {
        const queryParams = new URLSearchParams()
        queryParams.set("per_page", "5")
        console.log('proc env',process.env["NEXT_PUBLIC_GIT_RELEASES_READ_TOKEN"])
        let res = await request('GET /repos/{owner}/{repo}/releases',{
            owner: "JeremyCCox",
            repo:"jman-mod-installer",
            headers:{
                "X-GitHub-Api-Version": "2022-11-28",
                authorization: process.env["NEXT_PUBLIC_GIT_RELEASES_READ_TOKEN"]
            }
        })
        let releases:ReleasesType = {} as ReleasesType;
        res.data.map(release=>{
            let releaseBuilds:ReleaseType= {}
            release.assets.map(asset=>{
                let name = asset.name.split(".").pop()
                switch (name){
                    case("msi"):
                        // releaseBuilds["Windows"]= {...releaseBuilds["Windows"],[name]:asset}
                        releaseBuilds["Windows"] = asset
                        break;
                    case("dmg"):
                        releaseBuilds["MacOs"] = asset
                        break;
                    case("gz"):
                        releaseBuilds["Linux"] = asset
                        break;
                    case("deb"):
                        releaseBuilds["Debian"] = asset
                        break;
                    case("rpm"):
                        releaseBuilds["Redhat/CentOs"] = asset
                        break;
                    case("exe"):
                        releaseBuilds["Default"] = asset
                    // case("msi"):
                    //     break;
                }
            })
            if(!releaseBuilds["Windows"] && releaseBuilds["Default"]){
                releaseBuilds["Windows"] = releaseBuilds["Default"]
            }
            releases[release.name || crypto.randomUUID()] = releaseBuilds
        })

        setReleases(releases)
        setReleaseSource(Object.values(releases)[0])
    }
    const changeRelease=(e:ChangeEvent<HTMLSelectElement>)=>{
        let rs = releases[e.currentTarget.value]
        checkOsType()
        setReleaseSource(rs)
    }
    const changeOs=(e:ChangeEvent<HTMLSelectElement>)=>{
        setOsType(e.currentTarget.value)
    }
    const download=async ()=>{
        let a = document.createElement("a")
        a.href = releaseSource[osType]["browser_download_url"]
        a.click()
        a.remove()
    }
    return(
        <div className={'text-center grid max-h-[500px] grow'}>
            <label className={'text-amber-100'}>
                Version:
                <span className={'border '}>
                    <ReleaseSelect releases={releases} handleChange={changeRelease}/>
                </span>
            </label>
            <button className={'border-white border-2 rounded-md text-4xl px-16 py-6 h-fit hover:bg-gray-800 hover:cursor-pointer '} onClick={download} type={"button"}>
                Download
            </button>
            <h4 className={'text-sm my-2'}>
                {
                    osType===undefined?
                        <>
                            <ReleaseSelect releases={releaseSource} selected={osType} handleChange={changeOs}/>
                            Please Select a version to install!
                        </>
                        :
                        <>
                            <span className={'text-lime-500 text-lg hover:cursor-pointer'}>
                                <ReleaseSelect releases={releaseSource} selected={osType} handleChange={changeOs}/>
                            </span> installer:
                            <p>
                                {releaseSource[osType]?.name}
                            </p>
                        </>
                }
            </h4>
        </div>
    )
}