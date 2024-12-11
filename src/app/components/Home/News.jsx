'use client'
import NewsSwipper from "./NewsSwipper";
import { useFetchAllNewsQuery } from "@/app/redux/features/books/news.api";

export default function News(){
    const {data: news = [], isLoading} = useFetchAllNewsQuery()

    return (
        <div>
            <div className="text-3xl font-semibold mb-6">
                News
            </div>
            <div>
                {isLoading ? <div>Loading...</div> : <NewsSwipper news={news?.news} />}
            </div>
        </div>
    );
}