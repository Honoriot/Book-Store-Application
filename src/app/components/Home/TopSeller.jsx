'use client'
import { useEffect, useRef, useState } from "react";
import BookSwipper from "./Swipper";

const catagory = ["Choose a Genre", "Business", "Fiction", "Horror", "Adventure"]

export default function TopSeller(){
    const [books, setBooks] = useState([])
    const [filterBook, setFilterBook] = useState([])
    const bookSelectCatagory = useRef()

    useEffect(()=>{
        fetch("/books.json")
        .then(res=>res.json())
        .then(data=>{setBooks(data), setFilterBook(data)})
    }, [])
    

    const handleCatagoryChange = ()=>{
        const chooseCatagory = bookSelectCatagory.current.value
        const filterBook = chooseCatagory==catagory[0] ? books : books.filter(book=>book.category==chooseCatagory.toLowerCase())
        console.log(filterBook)
        setFilterBook(filterBook)
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
            <BookSwipper books={filterBook} />
        </div>
    </div>
    );
}