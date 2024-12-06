'use client'
import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import NewsSwipper from "./NewsSwipper";

export default function News(){
    const [news, setNews] = useState([])
    
    useEffect(()=>{
        fetch('/news.json')
        .then(news=>news.json())
        .then(data=>setNews(data))
    })

    return (
        <div>
            <div className="text-3xl font-semibold mb-6">
                News
            </div>
            <div>
                <NewsSwipper news={news} />
            </div>
        </div>
    );
}