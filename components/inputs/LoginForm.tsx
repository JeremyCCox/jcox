'use client'
import {FormEvent, useRef, useState} from "react";
import TextInput from "@/components/inputs/TextInput";
import {handleLogin} from "@/app/lib/AuthorizationServices";

export default function LoginForm(){
    const formRef = useRef(null)
    const [loading, setLoading] = useState(false)
    const handleSubmit = async (e:FormEvent)=>{
        e.preventDefault()
        setLoading(true)
        if(formRef.current){
            let formData = new FormData(formRef.current)
            await handleLogin(formData)
            setLoading(false)
        }

    }
    return(
        <form onSubmit={handleSubmit} ref={formRef} className={'grid justify-evenly h-[80vh]'}>
            <div className={'grid h-fit my-auto'}>
                <TextInput type={'text'} name={'username'} id={'username'} title={"Username"}/>
                <TextInput type={'password'} name={'password'} id={'password'} title={"Password"}/>
                <button className={'text-2xl'} disabled={loading}>
                    {loading?<>loading...</>:<>Login</>}
                </button>
            </div>
        </form>
    )
}