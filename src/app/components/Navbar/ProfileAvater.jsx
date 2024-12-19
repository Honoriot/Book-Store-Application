"use client";
import Image from "next/image";
import { HiOutlineUser } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LiaFirstOrderAlt } from "react-icons/lia";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import { useAuth } from "@/app/context/AuthContext";

const navigation = [
  { name: "Dashboard", href: "/dashboard", logo:<MdOutlineSpaceDashboard /> },
  { name: "Orders", href: "/order", logo: <LiaFirstOrderAlt /> },
  { name: "Cart Page", href: "/cart", logo: <MdOutlineShoppingCart /> },
  { name: "Check Out", href: "/checkout", logo: <MdLogout /> },
];

function DropDown({setIsDropDownOpen, handleLogout}) {
  return (
    <>
      <div className="absolute left-0 mt-2 w-32 bg-white shadow-lg rounded-md z-40">
        <ul className="py-2">
          {navigation.map((item) => {
            return (
              <Link onClick={()=>setIsDropDownOpen(false)}
                key={item.name}
                href={item.href}
                className="block px-4 text-sm hover:bg-gray-100 hover:border-r-2 hover:border-l-2 border-gray-700">
                <div className="flex items-center gap-2">
                {item.logo}
                {item.name} 
                </div>
              </Link>
            );
          })}
          <li>
            <button onClick={handleLogout} className="bloack w-full text-left px-4 py-2 text-sm hover:bg-gray-100">Logout</button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default function ProfileAvater() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleAvatarClickON = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  // const currentUser = false;

  const {currentUser, logout} = useAuth()

  const handleLogout = () => {
    logout()
  }

  return (
    <div>
      {currentUser ? (
        <>
          <button onMouseEnter={handleAvatarClickON} className="flex items-center">
            <Image
              src={'/avatar.png'}
              alt=""
              width="24"
              height="24"
              className={`size-6 rounded-full ${
                currentUser ? "ring-2 ring-blue-500" : ""
              }`}
            />
          </button>
          {isDropDownOpen && <DropDown 
          // onMouseOut={()=>{setIsDropDownOpen(false)}} 
          setIsDropDownOpen={setIsDropDownOpen}
          handleLogout={handleLogout} />}
        </>
      ) : (
        <Link href="/login">
          <HiOutlineUser className="size-6" />
        </Link>
      )}
    </div>
  );
}
