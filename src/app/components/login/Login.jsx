'use client'
import Link from "next/link";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useAuth } from "@/app/context/AuthContext";
import { useRouter } from "next/navigation";

export default function Login(){
    const {register, handleSubmit, watch, formState: {errors}} = useForm()
    const [message, setMessage] = useState('')
    const {loginUser, signInWithGoogle} = useAuth()
    const router = useRouter()

    const onSubmit = async (data) => {
        console.log(data)
        try {
            await loginUser(data.email, data.password)
            router.push('/')
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

    return (
        <div className="h-[calc(100vh-120px)] flex justify-center items-center">
            <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-xl font-semibold mb-4">Please Login</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input 
                        {...register("email", {required: true})}
                        type="email" name="email" id="email" placeholder="Email Address" className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-gray-500 "/>
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
                        <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold px-4 py-1 rounded focus:outline-none cursor-pointer">Login</button>
                    </div>
                </form>
                <p className="align-baseline font-medium mt-2 mb-1 text-sm">Haven't an account? Please <Link 
                href={'/register'} 
                className="text-blue-600 hover:text-blue-700" >Register</Link></p>

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