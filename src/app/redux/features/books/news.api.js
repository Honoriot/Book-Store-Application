import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseurl = 'http://localhost:5000'
const baseQuery = fetchBaseQuery({
    baseUrl: `${baseurl}/api/news`,
        credentials: 'include',
        prepareHeaders: (Headers)=>{
            const token = localStorage.getItem('token');
            if(token){
                Headers.set('Authorization', `Bearer ${token}`)
            }
            return Headers;
        }
})

const NewsApi = createApi({
    reducerPath: 'NewsAPI',
    baseQuery: baseQuery,
    tagTypes: ['News'], 
    endpoints: (builder) => ({
        fetchAllNews: builder.query({
            query: () => ('/'),
            providesTags: ['News']
        })
    })
})

export default NewsApi;
export const {useFetchAllNewsQuery} = NewsApi;