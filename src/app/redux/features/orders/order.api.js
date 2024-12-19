const { createApi, fetchBaseQuery } = require("@reduxjs/toolkit/query/react");

const baseurl = 'http://localhost:5000'
const baseQuery = fetchBaseQuery({
    baseUrl: `${baseurl}/api/orders`,
        credentials: 'include',
        prepareHeaders: (Headers)=>{
            const token = localStorage.getItem('token');
            if(token){
                Headers.set('Authorization', `Bearer ${token}`)
            }
            return Headers;
        }
})

export const orderApi = createApi({
    reducerPath: 'orderAPI',
    baseQuery: baseQuery,
    tagTypes: ['Orders'],
    endpoints: (builders) => ({
        createOrder: builders.mutation({
            query: (newOrder)=>({
                url: `/creatOrder`,
                method: 'POST',
                body: newOrder,
                credentials: 'include'
            })
        })
    })
})

export const {useCreateOrderMutation} = orderApi