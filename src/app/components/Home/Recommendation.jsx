'use client'
import { useEffect, useState } from "react";
import BookSwipper from "./Swipper";


export default function RecommendationSection(){
    const [books, setBooks] = useState([]);
    useEffect(()=>{
        async function fetchBook () { 
            const book = await fetch('/books.json')
            const data = await book.json()
            setBooks(data.slice(0, 10))
         }
         fetchBook()
    })


    return (
        <div className="py-10">
        <div className="text-3xl font-semibold mb-6">Recommended for you</div>
        <div className="mb-8 flex items-center">
       
        </div>
        <div>
            <BookSwipper books={books} />
        </div>
    </div>
    );
}