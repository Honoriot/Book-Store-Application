'use client'
import { useEffect, useState } from "react";
import BookSwipper from "./Swipper";
import { useFetchTrendingBooksQuery } from "@/app/redux/features/books/books.api";


export default function RecommendationSection(){
    const {data: books = [], isLoading} = useFetchTrendingBooksQuery()

    return (
        <div className="py-10">
        <div className="text-3xl font-semibold mb-6">Recommended for you</div>
        <div className="mb-8 flex items-center">
       
        </div>
        <div>
            {console.log(books)}
            {isLoading ? <div>Loading...</div> : <BookSwipper books={books?.books} />}
        </div>
    </div>
    );
}