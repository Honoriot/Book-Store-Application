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
            providesTags: (result, error, id)=>[{type: "Books", id}]
        }),
        addBook: builders.mutation({
            query: (newBook) => ({
                url: `/create-book`,
                method: "POST",
                body: newBook
            }),
            invalidatesTags: ["Books"]
        }),
        updateBook: builders.mutation({
            query: ({id, ...rest}) => ({
                url: `/edit/${id}`,
                method: 'PUT',
                body: rest,
                headers: {
                    'Content-Type': 'application/json'
                }
            }),
            invalidatesTags: ['Books']
        }),
        deleteBook: builders.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'delete'
            }),
            invalidatesTags: ["Books"]
        })
    })
})

export const {useFetchAllBooksQuery, useFetchTrendingBooksQuery, useFetchBookByIdQuery, useAddBookMutation, useDeleteBookMutation, useUpdateBookMutation} = bookApi;