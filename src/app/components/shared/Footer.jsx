import Image from "next/image";
import Link from "next/link";
import { ImFacebook2 } from "react-icons/im";
import { CgInstagram } from "react-icons/cg";
import { BsTwitterX } from "react-icons/bs";

export default function Footer(){
    return (
        <div className="bg-gray-900 w-full mt-3 py-10">
            <div className="flex flex-col md:flex-row items-center mx-auto px-4 max-w-screen-2xl pb-5 md:justify-between justify-center border-b-2 border-gray-700">
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
                        type="email" 
                        placeholder="Enter your email" 
                        className="pl-1 text-sm rounded-none py-[2px] h-full focus:outline-none" />
                        <button className="bg-primary rounded-l-none rounded-r-sm text-white text-sm px-3 py-[2px] text-center h-full hover:bg-gray-900 hover:text-white transition-all duration-75">Subscribe</button>
                    </div>
                </div>
            </div>
            <div className="mx-auto px-4 max-w-screen-2xl mt-2 flex justify-between items-center">
                <div className="text-gray-300 text-sm font-primary border-b-2 border-gray-900 hover:border-gray-400 hover:text-gray-200 transition-all duration-100">Privacy Policy | Terms & Condition</div>
                <div className="flex gap-6 text-gray-300">
                    <Link href={''} className="px-1" ><ImFacebook2 className="size-4 hover:text-gray-200" /></Link>
                    <Link href={''} className="px-1" ><CgInstagram className="size-4 hover:text-gray-200" /></Link>
                    <Link href={''} className="px-1" ><BsTwitterX className="size-4 hover:text-gray-200" /></Link>
                </div>
            </div>
        </div>
    );
}