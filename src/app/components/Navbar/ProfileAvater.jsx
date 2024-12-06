"use client";
import Image from "next/image";
import { HiOutlineUser } from "react-icons/hi";
import { useState } from "react";
import Link from "next/link";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { LiaFirstOrderAlt } from "react-icons/lia";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdLogout } from "react-icons/md";

const navigation = [
  { name: "Dashboard", href: "/dashboard", logo:<MdOutlineSpaceDashboard /> },
  { name: "Orders", href: "/order", logo: <LiaFirstOrderAlt /> },
  { name: "Cart Page", href: "/cart", logo: <MdOutlineShoppingCart /> },
  { name: "Check Out", href: "/checkout", logo: <MdLogout /> },
];

function DropDown({setIsDropDownOpen}) {
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
        </ul>
      </div>
    </>
  );
}

export default function ProfileAvater() {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  const handleAvatarClick = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };
  const currentUser = true;

  return (
    <div>
      {currentUser ? (
        <>
          <button onClick={handleAvatarClick} className="flex items-center">
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
          {isDropDownOpen && <DropDown setIsDropDownOpen={setIsDropDownOpen} />}
        </>
      ) : (
        <Link href="/login">
          <HiOutlineUser className="size-6" />
        </Link>
      )}
    </div>
  );
}
