'use client'
import { clearCart, removeFromCart } from "@/app/redux/features/cart/cartSlice";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { FaLongArrowAltRight } from "react-icons/fa";

function CartCardUI({book}){
    const dispatch = useDispatch()

    function handleRemove(book){
        dispatch(removeFromCart(book))
    }

    return (
        <div className="border-b-2 border-gray-300 py-2 mb-2">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <Image src={`/books/${book.coverImage}`} width={0} height={0} sizes="100vw" alt="" className="w-16 flex-shrink-0 rounded" />
                    <div className="text-xs flex flex-col justify-between">
                        <div>
                            <div ><span className="font-semibold">Product:</span> <span className="text-gray-500">{book.title}</span></div>
                            <div><span className="font-semibold">Category:</span> <span className="text-gray-500">{book.category}</span></div>
                        </div>
                        <div>Qty: 1</div>
                    </div>
                </div>
                <div className="flex flex-col justify-between">
                    <div>${book.newPrice}</div>
                    <button 
                    onClick={()=>{handleRemove(book)}}
                    className="outline-none border-none text-sm text-blue-700">Remove</button>
                </div>
            </div>
        </div>
    );
}

export default function CartUI(){
    const dispatch = useDispatch()
    const cartItems = useSelector((state)=>state.cart.cartItems)
    const totalPrice = cartItems.reduce((t, c)=> c.newPrice+t, 0).toFixed(2)

    

    function handleClear() {
        dispatch(clearCart())
    }

    return (
        <div className="rounded shadow-md">
            <div className="px-2 py-2">
                <div className="flex justify-between items-center ">
                    <h2 className="text-md font-secondary">Shopping cart</h2>
                    <button 
                    onClick={()=>{handleClear()}}
                    className="bg-red-400 hover:bg-red-500 transition-all duration-100 px-2 py-1 rounded align-middle text-xs font-bold text-white">Clear Cart</button>
                </div>
                {cartItems.length > 0 ? <div>{cartItems.map((book, index)=>{
                    return <CartCardUI book={book} key={index} />
                })}</div> : <div className="py-2 text-center text-gray-400 border-b-2">No Items to show</div>
                }

                <div>
                    <div className="flex justify-between pt-2 pb-0 mb-0">
                        <div className="text-sm">Subtotal</div>
                        <div className="font-semibold">$ {totalPrice}</div>
                    </div>
                    <div className="text-xs text-gray-400 pt-0 mt-0">Shipping and taxes calcuted at checkout.</div>
                </div>
                <Link href={'/checkout'}><div className="w-full my-1 bg-blue-700 hover:bg-blue-800 transition-all duration-100 rounded text-white text-sm py-1 text-center">Checkout</div></Link>
                <div className="text-center"><Link href={'/'} className="text-xs text-blue-800 cursor-pointer"><span className="text-gray-500">or</span> Continue Shopping <FaLongArrowAltRight className="inline-block text-blue-800"/></Link></div>
                
            </div>
        </div>
    );
}