'use server'
import {cookies} from "next/headers";
import {setJwt, getJwtData, getJwt} from "test-jman-web-tokens";
import {isRedirectError} from "next/dist/client/components/redirect";

export async function handleLogin(formData:FormData){
    try{
        console.log('form data')
        await setJwt({username:formData.get('username')})
        let cookie = cookies().get('jwtoken')
        console.log(cookie)
        if(cookie){
            console.log('JWT ',await getJwt(cookie))
            console.log(await getJwtData(cookie))
        }
        return true
    }catch (e:any){
        if(isRedirectError(e)){
            throw e
        }
        console.error(e.message)
        return false
    }
}
export async function getUsername(){
    try{
        const cookie = cookies().get('jwtoken')
        if(!cookie){
            return({error:"No JWT!"})
        }
        return await getJwtData(cookie)
    }catch(e){
        console.error(e)
        return {error:"Error thrown!"}
    }
}