import React from "react";
import face from "../assets/images/imgb.png";
import Typical from "react-typical";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Welcome = () => {
  return (
    <div className="bg-black text-white font-rubik">
      <div className="max-w-6xl mx-auto gap-0 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 grid grid-rows-3 sm:flex place-items-center justify-around overflow-hidden">
        <div className="hidden sm:grid  grid-rows-3 place-items-center  h-96">
          <div className="grid h-full border-r "></div>
          <div className="">
            <div className="grid py-2 text-2xl">
              <BsGithub />
            </div>
            <div className="grid py-2 text-2xl">
              <FaLinkedinIn />
            </div>
            <div className="grid py-2 text-2xl">
              <FaFacebook />
            </div>
          </div>
          <div className="grid h-full border-r "></div>
        </div>
        <div className="">
          <h1 className="text-xl sm:text-2xl md:text-5xl lg:text-6xl sm:mx-20 font-bold ">
            Hi I&apos;m Tomek
          </h1>
          <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl mt-2 font-light">
            <Typical
              loop={Infinity}
              wrapper="a"
              steps={[
                " I'm Frontend Developer",
                2000,
                "I'm a Father ",
                1500,
                " I'm a Husband",
                1500,
              ]}
            />
          </p>
        </div>
        <img
          src={face}
          alt="TK"
          className="w-32 sm:w-36 md:w-48 lg:w-52 xl:w-64 2xl:w-96 transition-all duration-300 ease-out transform  hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Welcome;
