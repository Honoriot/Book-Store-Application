'use client'
import { useEffect, useRef, useState } from "react";
import BookSwipper from "./Swipper";
import { useFetchAllBooksQuery } from "@/app/redux/features/books/books.api";

const catagory = ["Choose a genre", "Business", "Fiction", "Horror", "Adventure"]

export default function TopSeller(){
    const {data, isLoading, isError, error} = useFetchAllBooksQuery()
    const [selectedCategory, setSelecteCategory] = useState("Choose a genre")
    const bookSelectCatagory = useRef()
    let filteredBooks;
    
    if(!isLoading){
        filteredBooks = selectedCategory === "Choose a genre" ? data?.books : data?.books.filter(book => book.category === selectedCategory.toLowerCase())
    }else{
        filteredBooks = []
    }

    const handleCatagoryChange = ()=>{
        const chooseCatagory = bookSelectCatagory.current.value
        setSelecteCategory(chooseCatagory)
    }

    return (
    <div className="py-10">
        <div className="text-3xl font-semibold mb-6">Top Seller</div>
        <div className="mb-8 flex items-center">
        <select name="catagory" id="catagory" ref={bookSelectCatagory} onChange={handleCatagoryChange} className="border bg-[#EAEAEA] border-gray-300 rounded-md px-3 py-2 focus:outline-none">
                {catagory.map((catagory, index)=>{
                    return <option key={index} value={catagory}>{catagory}</option>
                })}
            </select>
        </div>
        <div>
            {isLoading ? <div>Loading...</div> : <BookSwipper books={filteredBooks} />}
            {isError ? <div>{error}</div> : <div></div>}
        </div>
    </div>
    );
}