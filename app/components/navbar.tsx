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
    <header className="bg-gray-900/50 sticky top-0 z-10 backdrop-blur-md transition-all duration-300">
      <nav className="px-10 md:px-25 mx-auto py-10 mb-20 max-w-7xl">

        <div className="flex flex-row justify-between items-center">
        <p className=" text-xl lg:text-3xl font-bold text-white">Logo</p> 
        
        <ul className=" md:flex md:flex-row flex-col lg:gap-15 gap-8 hidden">

            {navlinks.map((link) => (
                <li  key={link.name} className="text-white  md:text-lg lg:text-xl font-semibold"><a href={link.href}>{link.name}</a></li>
            ))}
        </ul>

        <button onClick={handleToggle} className="block cursor-pointer  md:hidden">

          <FaBars className="w-8 h-8"/>
        </button>


        </div>
      </nav>
    </header>
  );
};

export default Navbar;
