import React, { useState } from "react";
import tklogo from "../assets/images/tklogo.png";
import { Link } from "react-scroll";
import { Hamburger } from "./hamburger/Hamburger";
import { motion } from "framer-motion";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleActive = () => {
    const menu = document.querySelector(".test");
    menu.classList.toggle("fixed");
    setShowNav(!showNav);
  };

  const containersVariants = {
    hidden: {
      x: -30,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        ease: "easeOut",
        delay: 0.7,
        duration: 0.6,
      },
    },

    hiddenLogo: {
      x: 40,
      opacity: 0,
      rotateY: -180,
    },
    visibleLogo: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: {
        ease: "easeOut",
        delay: 0.7,
        duration: 0.6,
      },
    },
  };

  return (
    <nav className=" bg-black font-rubik px-3 py-6 ">
      <div className="max-w-6xl mx-auto ">
        <div className="flex justify-between items-center text-blue-50">
          <motion.div
            variants={containersVariants}
            animate="visibleLogo"
            initial="hiddenLogo"
            className="flex justify-center"
          >
            <a rel="noreferrer" href="/portfolio">
              <img
                src={tklogo}
                alt=""
                className="w-16 h-auto transition-all duration-300 ease-out transform scale-100 hover:rotate-3 hover:scale-110"
              />
            </a>
          </motion.div>
          <motion.div
            variants={containersVariants}
            animate="visible"
            initial="hidden"
            className={
              (showNav ? "right-0" : "-right-full") +
              " sm:flex sm:static fixed sm:bg-transparent bottom-0 top-0 right-0 w-3/5 sm:w-full bg-black opacity-90 sm:opacity-100 z-20 items-center sm:justify-end pt-10 sm:pt-0 space-y-4 sm:space-x-12 font-thin text-lg transition-right delay-100"
            }
          >
            <div className="flex flex-col sm:flex-row space-x-10 sm:pt-0 pt-10 items-center space-y-4">
              <div className="flex hover:text-yellow-400 text-blue-50 text-xl transition duration-300 cursor-pointer pl-3 pt-4">
                <Link to="skills" smooth={true}>
                  Skills
                </Link>
              </div>
              <div className=" flex hover:text-yellow-400 text-blue-50 text-xl transition duration-300 cursor-pointer">
                <Link to="projects" smooth={true}>
                  Projects
                </Link>
              </div>
              <div className="flex hover:text-yellow-400 text-blue-50 text-xl transition duration-300 cursor-pointer">
                <Link to="contact" smooth={true}>
                  Contact
                </Link>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={containersVariants}
            animate="visible"
            initial="hidden"
            className="test sm:hidden right-3 flex items-center z-30"
            onClick={() => toggleActive()}
          >
            <Hamburger className={"cursor-pointer w-6 h-6 "} />
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
