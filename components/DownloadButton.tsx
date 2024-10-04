'use client'
import { request } from "@octokit/request";
import { useEffect, useState } from "react";

export default function DownloadButton(){

    const [releaseSource, setReleaseSource] = useState({url:"",name:""})
    const [osType, setOsType] = useState("Unknown")

    useEffect(() => {
        let userAgent = navigator.userAgent;
        switch(true){
            case(userAgent.includes("Windows")):
                setOsType("Windows")
                break;
            case(userAgent.includes("Linux")):
                setOsType("Linux")
                break;
            case(userAgent.includes("X11")):
                setOsType("Unix")
                break;
            case(userAgent.includes("Mac")):
                setOsType("Mac Os")
                break;
            default:
                setOsType("Unknown")
                break;
        }
    }, [])

    useEffect(() => {
        getReleases();
    }, [osType]);

    const getReleases = async () => {
        const queryParams = new URLSearchParams()
        queryParams.set("per_page", "5")
        let res = await request('GET /repos/{owner}/{repo}/releases',{
            owner: "JeremyCCox",
            repo:"jman-mod-installer",
            headers:{
                "X-GitHub-Api-Version": "2022-11-28",
                authorization: process.env["NEXT_PUBLIC_GIT_RELEASES_READ_TOKEN"]
            }
        })
        switch (osType){
            case("Windows"):
                let asset = res.data[0].assets.find(({name})=>name.split(".").pop() ==="msi");
                if(!asset){
                    console.error("Could not find release for OS type!")
                    return
                }
                setReleaseSource({url:asset.browser_download_url,name:asset.name})
                break
            case("Linux"):
                break
            default:
                console.log('default')
        }

    }
    const download=async ()=>{
        let a = document.createElement("a")
        a.href = releaseSource.url;
        a.click()
        a.remove()
    }
    return(
        <div className={'text-center'}>
            <button className={'border-white border-2 rounded-md text-4xl px-16 py-6'} onClick={download} type={"button"}>
                Download
            </button>
            <h4 className={'text-sm'}>
                {
                    osType==="Unknown"?
                        <>
                            Please Select a version to install!
                        </>
                        :
                        <>
                            <span className={'text-lime-500 text-sm'}>{osType}</span> detected, recommended installer:
                        </>
                }
            </h4>
            <p>
                {releaseSource.name}
            </p>
        </div>
    )
}