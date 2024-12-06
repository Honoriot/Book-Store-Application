import Link from "next/link"
import {RiMenu2Fill} from "react-icons/ri"
import {IoSearch} from "react-icons/io5"
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import ProfileAvater from "./ProfileAvater";

export default function Navbar(){

    return <>
        <header className="max-w-screen-2xl mx-auto px-4 py-6">
            <nav className="flex justify-between items-center">
                <div className="flex items-center md:gap-16 gap-4">
                    <Link href='/' ><RiMenu2Fill className="size-6"/></Link>
                    <div className="relative sm:w-72 w-40 space-x-2">
                        <IoSearch className="absolute inline-block inset-y-2 left-4"/>
                        <input type="text" placeholder="Search here" className="bg-[#EAEAEA] w-full py-1 md:px-8 px-6 rounded-md focus:outline-none text-gray-700 font-primary"></input>
                    </div>
                </div>
                <div className="relative flex items-center md:space-x-3 space-x-2">
                    <ProfileAvater />
                    <button className="hidden sm:block"><FaRegHeart className="size-6" /></button>
                    <Link href='/cart' className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-md" >
                        <MdOutlineShoppingCart />
                        <span className="text-sm font-semibold sm:ml-1">0</span>
                    </Link>
                </div>
            </nav>
        </header>
    </>
}