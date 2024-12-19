import { configureStore } from "@reduxjs/toolkit";
import  {cartReducer} from "./features/cart/cartSlice";
import { bookApi } from "./features/books/books.api";
import NewsApi from "./features/books/news.api";
import { validationAPI } from "./features/books/varification.api";
import { orderApi } from "./features/orders/order.api";


export const makeStore = ()=>configureStore({
        reducer: {
            cart: cartReducer,
            [bookApi.reducerPath]: bookApi.reducer,
            [NewsApi.reducerPath]: NewsApi.reducer,
            [validationAPI.reducerPath]: validationAPI.reducer,
            [orderApi.reducerPath]: orderApi.reducer,
        },
        middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat([bookApi.middleware, NewsApi.middleware, validationAPI.middleware, orderApi.middleware])
})