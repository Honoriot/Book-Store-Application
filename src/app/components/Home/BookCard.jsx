'use client'
import { addToCart } from "@/app/redux/features/cart/cartSlice";
import { useDispatch } from "react-redux";
import Image from "next/image";
import Link from "next/link";
import {FiShoppingCart} from 'react-icons/fi'


export default function BookCard({book}){
  const dispatch = useDispatch()

  const handleAddToCart = (product) =>{
    dispatch(addToCart(product))
  }

    return (
        <div className="rounded-lg transition-shadow duration-300">
        <div
        className="flex flex-col sm:flex-row sm:items-center sm:h-72  sm:justify-center gap-4"
      >
        <div className="sm:h-72 sm:flex-shrink-0 border rounded-md">
          <Link href={`/books/${book._id}`}>
            <Image
              src={`/books/${book.coverImage}`}
              alt=""
              width='0'
              height='0'
              sizes="100vw"
              className="w-full bg-cover p-2 rounded-md cursor-pointer hover:scale-105 transition-all duration-200"
            />
          </Link>
        </div>
    
        <div>
            <Link href={`/books/${book._id}`}
            ><h3 className="text-xl font-semibold hover:text-blue-600 mb-3">
              {book.title}
            </h3>
            </Link>
          <p className="text-gray-600 mb-5">{book.description.length>80 ? `${book.description.slice(0, 80)}...`: book.description}</p>
          <p className="font-medium mb-5">
            ${book?.newPrice} <span className="line-through font-normal ml-2">${book?.oldPrice}</span>
          </p>
          <button className="btn-primary px-6 space-x-1 flex items-center gap-1" onClick={() => handleAddToCart(book)}>
            <FiShoppingCart className="" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
        </div>
    );
}