import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";

const initialState = {
    cartItems: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addToCart: (state, action)=>{
            const existing = state.cartItems.find((book) => book._id===action.payload._id)

            if(!existing){
                state.cartItems.push(action.payload)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Book added in cart",
                    showConfirmButton: false,
                    timer: 1000
                })
            } else{
                Swal.fire({
                    position: "top-end",
                    icon: "info",
                    title: "Book already in cart",
                    showConfirmButton: false,
                    timer: 1000
                })
            }
        },
        removeFromCart: (state, action) => {
            state.cartItems = [...state.cartItems.filter((book)=>book._id!==action.payload._id)]
        },
        clearCart: (state, action) => {
            state.cartItems = []
        }
    }
})

export const {addToCart, removeFromCart, clearCart} = cartSlice.actions
export const cartReducer = cartSlice.reducer;