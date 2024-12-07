'use client'
import Link from "next/link";
import { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { useForm } from "react-hook-form";

export default function Register(){
    const {register, handleSubmit, watch, formState: {errors}} = useForm()
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = (data) => console.log(data)
    const googleSignIn = () => {
        
    }

    return (
        <div className="h-[calc(100vh-120px)] flex justify-center items-center">
            <div className="w-full max-w-sm mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-xl font-semibold mb-4">Please Register</h2>
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
                        errorMessage && <p className="text-red-500 text-xs italic mb-3">{errorMessage}</p>
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
                    onClick={googleSignIn} 
                    className="bg-secondary w-full flex flex-wrap items-center justify-center rounded text-white align-middle hover:bg-blue-800 py-1 focus:outline-none gap-1">
                        <FaGoogle className="inline-block mr-2" /> Sign in with google
                    </button>
                </div>
                <p className="text-xs text-center text-gray-500 mt-5">©{new Date().getFullYear()} Book Store. All rights reserved.</p>
            </div>
        </div>
    );
}