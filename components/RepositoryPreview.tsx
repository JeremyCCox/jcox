'use client'
import {request} from "@octokit/request";
import {useEffect, useState} from "react";

export default function RepositoryPreview({owner,repository}:Readonly<{owner:string,repository:string}>){
    const [data, setData] = useState();
    const readMe=async () => {
        const queryParams = new URLSearchParams()
        queryParams.set("per_page", "5")
        let res = await request('GET /repos/{owner}/{repo}/contents/README.md', {
            owner: owner,
            repo: repository,
            headers: {
                "Accept":'application/vnd.github.html+json',
                "X-GitHub-Api-Version": "2022-11-28",
                // authorization: process.env["NEXT_PUBLIC_GIT_RELEASES_READ_TOKEN"]
            }
        })
        setData(res.data)
    }
    useEffect(() => {
        if(!data) {
            readMe()
        }
    }, []);

    return(
        <>
            <div>
                <div dangerouslySetInnerHTML={{__html:data}}/>
            </div>
        </>
    )
}