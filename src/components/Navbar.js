import React from "react";
import { FaGripLines } from "react-icons/fa";
import tklogo from "../assets/images/tklogo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const toggleMobileMenu = () => {
    const menu = document.querySelector(".mobile-menu");
    menu.classList.toggle("hidden");
  };

  return (
    <nav className="bg-black font-rubik px-3 py-6">
      <div className="max-w-6xl mx-auto ">
        <div className="flex justify-between items-center text-blue-50">
          <div className="flex justify-center">
            <a rel="noreferrer" href="https://tk-frontend.github.io/portfolio/">
              <img
                src={tklogo}
                alt=""
                className="w-16 h-auto transition-all duration-300 ease-out transform scale-100 hover:rotate-3 hover:scale-110"
              />
            </a>
          </div>
          <div className="flex space-x-12 font-thin text-lg">
            <div className="hidden md:flex hover:text-yellow-400 text-xl transition duration-300 cursor-pointer">
              <Link to="skills" smooth={true}>
                Skills
              </Link>
            </div>
            <div className="hidden md:flex hover:text-yellow-400 text-xl transition duration-300 cursor-pointer">
              Portfolio
            </div>
            <div className="hidden md:flex hover:text-yellow-400 text-xl transition duration-300 cursor-pointer">
              Contact
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
      </div>
    </nav>
  );
};

export default Navbar;
