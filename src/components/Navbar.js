import React from "react";
import { FaGripLines } from "react-icons/fa";
import tklogo from "../assets/images/tklogo.png";

const Navbar = () => {
  const toggleMobileMenu = () => {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  };

  return (
    <nav className="bg-black pt-2 font-rubik">
      <div className="max-w-6xl mx-auto px-2 sm:px-4 py-6 border-b border-gray-300">
        <div className="flex justify-between items-center text-blue-50">
          <div className="flex justify-center">
            <img
              src={tklogo}
              alt=""
              className="w-14 h-auto transition-all duration-300 ease-out transform scale-100 hover:rotate-3 hover:scale-110"
            />
          </div>
          <div className="flex space-x-8">
            <div className="hidden md:flex hover:text-yellow-400 text-xl transition duration-300 cursor-pointer">
              Skills
            </div>
            <div className="hidden md:flex hover:text-yellow-400 text-xl transition duration-300 cursor-pointer">
              Portfolio
            </div>
            <div className="hidden md:flex hover:text-yellow-400 text-xl transition duration-300 cursor-pointer">
              ContactMe
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button className="mobile-menu-button " onClick={toggleMobileMenu}>
              <FaGripLines />
            </button>
          </div>
        </div>
      </div>
      <div className="hidden mobile-menu ease-in-out duration-700 text-blue-50">
        <div className=" md:hidden justify-center hover:text-yellow-400 transition duration-300 py-2">
          Skills
        </div>
        <div className=" md:hidden justify-center hover:text-yellow-400 transition duration-300 py-2">
          Portfolio
        </div>
        <div className=" md:hidden justify-center hover:text-yellow-400 transition duration-300 py-2">
          ContactMe
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
