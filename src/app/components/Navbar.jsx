import React from "react";
import Link from "next/link";
import {BiSearch} from "react-icons/bi";
import {BsPerson} from "react-icons/bs";

const Navbar = () =>{
    return (
        <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
<div>
    {/* logo */}
    <h1 className="font-bold text-3xl p-3">
Hotel Khánh Linh
    </h1>
</div>
<ul className="hidden md:flex justify-between items-center gap-10">
    
    <Link href="">
    <li className="hover:text-blue-400 hover:underline duration-200">
       HOME
    </li>
    </Link>
    <Link href="">
    <li className="hover:text-blue-400 hover:underline duration-200">
       Destinations
    </li>
    </Link>
    <Link href="">
    <li className="hover:text-blue-400 hover:underline duration-200">
       Travel
    </li>
    </Link>
    <Link href="">
    <li className="hover:text-blue-400 hover:underline duration-200">
       VIEW
    </li>
    </Link>
    <Link href="">
    <li>
       ROOM
    </li>
    </Link>
    <Link href="">
    <li>
       BOOK
    </li>
    </Link>
</ul>
<div className="hidden md:flex gap-10" >

    <BiSearch className="hover:text-blue-400 hover:underline duration-200" size={20}/>
    <BsPerson className="hover:text-blue-400 hover:underline duration-200" size={20}/>

</div>

        </div>
    )
}

export default Navbar;