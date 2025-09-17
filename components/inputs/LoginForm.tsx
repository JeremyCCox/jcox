'use client'
import {FormEvent, useEffect, useRef, useState} from "react";
import TextInput from "@components/inputs/TextInput";
import {handleLogin, registerUser} from "@/lib/AuthorizationServices";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export default function LoginForm(){
    const formRef = useRef(null)
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState("")
    const searchParams = useSearchParams();
    const pageType = !searchParams.has('p') ||searchParams.get('p') === "login";
    const pathName = usePathname();
    const {replace} = useRouter()
    const handleSubmit = async (e:FormEvent)=>{
        e.preventDefault()
        setLoading(true)
        if(formRef.current){
            let formData = new FormData(formRef.current)
            if(pageType){
                await handleLogin(formData)
            }else{

                if(formData.get("password") === formData.get('confPassword')){
                    setMessage("")
                    await registerUser(formData)
                }else{
                    setMessage("Passwords do not match!")
                }


            }
            setLoading(false)
        }
    }
    const changePage=()=>{
        if(pageType){
            replace(`${pathName}?p=register`)
        }else{
            replace(`${pathName}?p=login`)
        }
    }
    return(
        <form onSubmit={handleSubmit} ref={formRef} className={'grid justify-evenly h-[80vh]'}>
            <div className={'text-center grid h-fit my-auto min-w-[400px] md:min-w-[600px]'}>
                <TextInput type={'text'} name={'username'} id={'username'} title={"Username"} required={true}/>
                <TextInput type={'password'} name={'password'} id={'password'} title={"Password"} required={true}/>
                {!pageType&&
                    <TextInput type={'password'} name={'confPassword'} id={'password'} required={true} title={"Confirm Password"}/>
                }
                <p> {message}</p>
                <button className={'text-2xl'} disabled={loading}>
                    {loading?<>loading...</>:<>{pageType?"Log In":"Register"}</>}
                </button>
                <button type={"button"} onClick={changePage}>
                    {
                        pageType?
                            <p>Dont have an account? <u>Register here.</u></p>
                            :
                            <p>Already have an account? <u> Sign In here.</u></p>
                    }
                </button>

            </div>
        </form>
    )
}