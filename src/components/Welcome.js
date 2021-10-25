import React from "react";
import face from "../assets/images/imgb.png";
import Typical from "react-typical";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";

const Welcome = () => {
  return (
    <div className="bg-black text-white font-rubik ">
      <div className="pt-0 md:pt-12 pb-40 max-w-6xl mx-auto gap-0 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 grid grid-rows-3 sm:flex place-items-center justify-around overflow-hidden">
        <div className="hidden sm:grid  grid-rows-3 place-items-center  h-96">
          <div className="grid h-full border-r "></div>
          <div className="">
            <div className="grid py-2 text-2xl hover:text-yellow-400 transform hover:scale-110">
              <BsGithub />
            </div>
            <div className="grid py-2 text-2xl hover:text-yellow-400 transform hover:scale-110">
              <FaLinkedinIn />
            </div>
            <div className="grid py-2 text-2xl hover:text-yellow-400 transform hover:scale-110">
              <FaFacebook />
            </div>
          </div>
          <div className="grid h-full border-r "></div>
        </div>
        <div className="mx-20 flex flex-col justify-center items-baseline">
          <h1 className="text-xl sm:text-2xl md:text-5xl lg:text-6xl  font-bold text-left ">
            Hi, I&apos;m Tomek
          </h1>
          <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl mt-2 font-light text-left">
            <Typical
              loop={Infinity}
              wrapper="a"
              steps={[
                " I'm Frontend Developer",
                2000,
                " I'm a Father ",
                1500,
                " I'm a Husband",
                1500,
              ]}
            />
          </p>
          <button className="bg-yellow-400 text-black rounded-lg mt-2 text-lg px-3 py-1 hover:bg-yellow-300">
            CV.pdf
          </button>
        </div>
        <img
          src={face}
          alt="TK"
          className="scale-125 w-44 sm:w-48 md:w-64 lg:w-72 xl:w-80 2xl:w-96 transition-all duration-300 ease-out transform"
        />
      </div>
    </div>
  );
};

export default Welcome;
