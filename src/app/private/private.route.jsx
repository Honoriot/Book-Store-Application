'use client'
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";

export const PrivateRoute = ({children}) =>{
    const router = useRouter()
    const {currentUser} = useAuth();

    useEffect(()=>{
        if(!currentUser){
            router.push('/login')
        }
    }, [])

    if(currentUser){
        return <>{children}</>;
    }else{
        return null;
    }
}