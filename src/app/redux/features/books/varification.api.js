import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseurl = 'http://localhost:5000'
const baseQuery = fetchBaseQuery({
    baseUrl: `${baseurl}/api/verification`,
        credentials: 'include',
        prepareHeaders: (Headers)=>{
            const token = localStorage.getItem('token');
            if(token){
                Headers.set('Authorization', `Bearer ${token}`)
            }
            return Headers;
        }
})

export const validationAPI = createApi({
    reducerPath : 'api/verification',
    baseQuery: baseQuery,
    endpoints: (builders) => ({
        generateOTP: builders.query({
            query: (info) => ({
                url: `/generateOTP`,
                method: "GET",
                body: info,
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        })
    })
})

export const {useGenerateOTPQuery} = validationAPI