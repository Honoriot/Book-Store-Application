import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

const baseurl = 'http://localhost:5000'
const baseQuery = fetchBaseQuery({
    baseUrl: `${baseurl}/api/books`,
        credentials: 'include',
        prepareHeaders: (Headers)=>{
            const token = localStorage.getItem('token');
            if(token){
                Headers.set('Authorization', `Bearer ${token}`)
            }
            return Headers;
        }
})

export const bookApi = createApi({
    reducerPath: 'bookAPI',
    baseQuery: baseQuery,
    tagTypes: ['Books'],
    endpoints: (builders) => ({
        fetchAllBooks: builders.query({
            query: () => '/',
            providesTags: ['Books']
        }),
        fetchTrendingBooks: builders.query({
            query: () => '/trending',
            providesTags: ['Books']
        }),
        fetchBookById: builders.query({
            query: (id) => (`/${id}`),
            providesTags: ['Books']
        }),
    })
})

export const {useFetchAllBooksQuery, useFetchTrendingBooksQuery, useFetchBookByIdQuery} = bookApi;