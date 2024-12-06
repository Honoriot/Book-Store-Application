import Image from "next/image";
import Link from "next/link";

export default function NewsCard({news}) {
    return (
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-12">
            <div className="py-4">
                <Link href='/' className="text-md text-gray-700 font-medium hover:text-blue-500" >{news.title}</Link>
                <div className="w-10 h-[4px] bg-primary rounded-sm mb-5"></div>
                <p className="text-sm text-gray-400">{news.description}</p>
            </div>
            <div className="flex-shrink-0">
                <Link href='/'>
                    <Image 
                    src={`/news/${news.image}`} 
                    width='0' 
                    height='0' 
                    sizes="100vw" 
                    alt="" 
                    className="w-full object-cover"/>
                </Link>
            </div>
        </div>
    );
}