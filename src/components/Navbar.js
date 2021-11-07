import React, { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import tklogo from "../assets/images/tklogo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  /*  const toggleNav = () => {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  }; */

  const [showNav, setShowNav] = useState(false);

  return (
    // sticky top-0 z-20
    <nav className="bg-black font-rubik px-3 py-6 ">
      <div className="max-w-6xl mx-auto ">
        <div className="flex justify-between items-center text-blue-50">
          <div className="flex justify-center">
            <a rel="noreferrer" href="/">
              <img
                src={tklogo}
                alt=""
                className="w-16 h-auto transition-all duration-300 ease-out transform scale-100 hover:rotate-3 hover:scale-110"
              />
            </a>
          </div>
          <div
            className={
              (showNav ? "right-0" : "-right-full") +
              " sm:flex sm:static fixed sm:bg-transparent bottom-0 top-0 right-0 w-3/5 sm:w-full bg-black opacity-90 sm:opacity-100 z-20 sm:justify-end sm:space-y-0 space-y-5 pt-10 sm:pt-0 sm:space-x-12 font-thin text-lg transition-right delay-100"
            }
          >
            <div className="hover:text-yellow-400 text-blue-50 text-xl transition duration-300 cursor-pointer">
              <Link to="skills" smooth={true}>
                Skills
              </Link>
            </div>
            <div className="hover:text-yellow-400 text-blue-50 text-xl transition duration-300 cursor-pointer">
              Portfolio
            </div>
            <div className="hover:text-yellow-400 text-blue-50 text-xl transition duration-300 cursor-pointer">
              Contact
            </div>
          </div>
          <div className="sm:hidden fixed right-3 flex items-center z-30">
            <button onClick={() => setShowNav(!showNav)}>
              <HiOutlineMenuAlt3 className={"cursor-pointer w-6 h-6 "} />
            </button>
          </div>
        </div>
      </div>
      {/*   <div className="hidden mobile-menu ease-in-out duration-700 text-blue-50 fixed bottom-0 top-0 right-0 w-1/2 bg-black opacity-90 z-20">
        <div className=" md:hidden justify-center hover:text-yellow-400 transition duration-300 pt-10 pb-2">
          <Link to="skills" smooth={true}>
            Skills
          </Link>
        </div>
        <div className=" md:hidden justify-center hover:text-yellow-400 transition duration-300 py-2">
          Portfolio
        </div>
        <div className=" md:hidden justify-center hover:text-yellow-400 transition duration-300 py-2">
          Contact
        </div>
      </div> */}
    </nav>
  );
};

export default Navbar;
