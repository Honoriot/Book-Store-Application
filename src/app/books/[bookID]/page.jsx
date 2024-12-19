'use client'
import SingleBook from "@/app/components/singleBook/SingleBook";
import { use } from "react";

export default function SingleBookPage({params}) {
    const {bookID} = use(params)
    return (
        <div><SingleBook id={bookID} /></div>
    );
}