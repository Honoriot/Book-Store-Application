import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return (
        <div className="bg-gray-900 w-full mt-3 pb-5">
        <div className="flex flex-col md:flex-row items-center mx-auto px-4 max-w-screen-2xl py-5 md:justify-between justify-center border-b-2 border-gray-700">
            <div className="">
                <Image src='/footer-logo.png' width={0} alt="" height={0} sizes="100vw" className="w-[100px] "/>
                <ul className="text-white text-[10px] flex gap-3 justify-evenly ">
                    <Link href={'/'} >Home</Link>
                    <Link href={'/service'} >Services</Link>
                    <Link href={'/about'} >About Us</Link>
                    <Link href={'/contact'} >Contact</Link>
                </ul>
            </div>
            <div className="">
                <p className="text-white text-[12px] py-1">Subscribe to our newsletter to receive the latest updates, news and offers</p>
                <div className="flex justify-start">
                    <input 
                    type="text" 
                    placeholder="Enter your email" 
                    className="pl-1 text-sm rounded-none py-[2px] h-full focus:outline-none" />
                    <button className="bg-primary rounded-l-none rounded-r-sm text-white text-sm px-3 py-[2px] text-center h-full hover:bg-gray-900 hover:text-white transition-all duration-75">Subscribe</button>
                </div>
            </div>
        </div>
        </div>
    );
}