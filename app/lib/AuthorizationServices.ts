'use server'
import {cookies} from "next/headers";
import {setJwt, getJwtData, getJwt} from "test-jman-web-tokens";
import {isRedirectError} from "next/dist/client/components/redirect";
import Administrator from "@/models/Administrator";
import mongoose from "mongoose";
import {compareSync,hashSync} from "bcrypt-ts";
import {redirect} from "next/navigation";

export async function connect_mongoose(){
    const uri = process.env.MONGODB_URI
    if(!uri){
        throw new Error("MONGODB_URI env variable is not defined")
    }
    await mongoose.connect(uri)
}
export async function registerUser(formData:FormData){
    try{
        console.log(formData)
        await connect_mongoose();
        const saltRounds=10;
        let hash = hashSync(formData.get('password') as string,saltRounds)
        let admin = await Administrator.create(new Administrator(
            {
                username:formData.get("username"),
                password:hash
            }
        ))
        console.log(admin)
        let valid = compareSync(formData.get('password') as string,admin.password)
        console.log(valid)
        return true
    }catch (e:any){
        if(isRedirectError(e)){
            throw e
        }
        return false
    }
}
export async function handleLogin(formData:FormData){
    try{
        console.log(formData)
        await connect_mongoose();
        let admin = await Administrator.findOne({username:formData.get("username")})
        console.log(admin)
        let valid = compareSync(formData.get('password') as string,admin.password)
        if(valid){
            await setJwt({username:formData.get('username')})
        }
        redirect("/admin/articles")
        return valid
    }catch (e:any){
        if(isRedirectError(e)){
            throw e
        }
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