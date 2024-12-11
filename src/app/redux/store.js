import { configureStore } from "@reduxjs/toolkit";
import  {cartReducer} from "./features/cart/cartSlice";
import { bookApi } from "./features/books/books.api";
import NewsApi from "./features/books/news.api";


export const makeStore = ()=>configureStore({
        reducer: {
            cart: cartReducer,
            [bookApi.reducerPath]: bookApi.reducer,
            [NewsApi.reducerPath]: NewsApi.reducer,
        },
        middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat([bookApi.middleware, NewsApi.middleware])
})