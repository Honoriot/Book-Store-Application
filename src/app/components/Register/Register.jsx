'use client'
import Link from "next/link";
import { useRef, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Register(){
    const [showOTPInput, setShowOTPInput] = useState(false)
    const [emailVarified, setEmailVarified] = useState(false)
    const router = useRouter()
    const email = useRef()
    const OTPInput = useRef()
    const {register, handleSubmit, watch, formState: {errors}} = useForm()
    const [message, setMessage] = useState('')
    const {registerUser, signInWithGoogle} = useAuth()

    // resgister user
    const onSubmit = async (data) => {
        console.log(data)
        try {
            await registerUser(data.email, data.password);
            alert("User registration successful")
        } catch (error) {
            setMessage("Please provide a valid email and [password")
        }
    }
    const handleGoogleSignIn = async () => {
        try {
            await signInWithGoogle()
            router.push('/')
        } catch (error) {
            setMessage('Google login failed')
        }
    }

    const handleClickVerify = () => {
        const reg = new RegExp(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/)
        const enterEmail = email.current.value;
        if(reg.test(enterEmail)){
            axios({
                url: "http://localhost:5000/api/verification/generateOTP",
                method: 'GET',
                params: {email: enterEmail}
            })
            .then(data=>console.log(data))
            .catch(err=>console.error(err))
            
            // console.log('Valid email')
            setShowOTPInput(true)
            OTPInput.current.select()
        }else{
            console.log('Invalid email')
            setShowOTPInput(false)
        }
    }

    const handleClickCheckOTP = async () =>{
        try {
            const reg = new RegExp(/^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/)
            const otpValue = OTPInput.current.value;
            const enterEmail = email.current.value;
            if(otpValue && reg.test(enterEmail)){
                const info = await axios({
                    url: "http://localhost:5000/api/verification/validateOTP",
                    method: 'GET',
                    params: {email: enterEmail, code:otpValue}
                })
                console.log(info)
                if(info?.data?.success){
                    setEmailVarified(true)
                    setShowOTPInput(false)
                }else{

                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className="h-[calc(100vh-120px)] flex justify-center items-center">
            <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-xl font-semibold mb-4">Please Register</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <div className="flex gap-[3px] items-center">
                            <input 
                            {...register("email", {required: true})}
                            type="email" name="email" id="email" 
                            ref={email} placeholder="Email Address" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-gray-400 "/>
                            <button onClick={handleClickVerify} className="bg-green-400 text-white px-1 rounded text-sm py-1 hover:bg-green-500">{emailVarified? "verified": "verify"}</button>
                        </div>
                        <div className={showOTPInput? "" : "hidden"}>
                            <input type="text" ref={OTPInput} name="OTP" required id="OTP" className="shadow w-20 mt-2 border rounded focus:outline-none text-center text-gray-900 " />
                            <button onClick={handleClickCheckOTP} className="bg-blue-600 text-white px-1 text-sm py-[1px] ml-2 rounded hover:bg-blue-800">confirm</button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Password</label>
                        <input 
                        {...register("password", {required: true})}
                        type="password" name="password" id="password" placeholder="password" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-gray-500 "/>
                    </div>
                    {
                        message && <p className="text-red-500 text-xs italic mb-3">{message}</p>
                    }
                    <div>
                        <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-4 py-1 rounded focus:outline-none cursor-pointer">Register</button>
                    </div>
                </form>
                <p className="align-baseline font-medium mt-2 mb-1 text-sm">Have an account? Please <Link 
                href={'/login'} 
                className="text-blue-600 hover:text-blue-700" >Login</Link></p>

                {/*Google Signin*/}
                <div>
                    <button
                    onClick={handleGoogleSignIn} 
                    className="bg-secondary w-full flex flex-wrap items-center justify-center rounded text-white align-middle hover:bg-blue-800 py-1 focus:outline-none gap-1">
                        <FaGoogle className="inline-block mr-2" /> Sign in with google
                    </button>
                </div>
                <p className="text-xs text-center text-gray-500 mt-5">©{new Date().getFullYear()} Book Store. All rights reserved.</p>
            </div>
        </div>
    );
}