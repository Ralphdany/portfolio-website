'use client'

import { useState } from "react";
import { navlinks } from "../constants/navlinks";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <header className="sticky top-0 z-10">
      <nav className="px-10 md:px-25 mx-auto py-10 mb-20 max-w-7xl">

        <div className="flex flex-row justify-between items-center">
        <p className=" text-xl lg:text-3xl font-bold text-white">Logo</p> 
        
        <ul className=" md:flex flex-row lg:gap-15 gap-8 hidden">

            {navlinks.map((link) => (
                <li  key={link.name} className="text-white  md:text-lg lg:text-xl font-semibold"><a href={link.href}>{link.name}</a></li>
            ))}
        </ul>

        <FaBars className=" block cursor-pointer w-8 h-8 md:hidden"/>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;
