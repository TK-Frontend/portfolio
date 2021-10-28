import React from "react";
import face from "../assets/images/imgb.png";
import Typical from "react-typical";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";

const Welcome = () => {
  return (
    <div className="bg-black text-white font-rubik px-4 ">
      <div className="max-w-6xl pt-0 pb-20 sm:pb-40 md:pt-2 mx-auto flex flex-col sm:grid grid-cols-12 place-items-center justify-around">
        <div className="hidden sm:grid  grid-rows-3 place-items-center h-full justify-self-start ml-5 col-start-1 col-end-2  ">
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
        <div className="col-start-2 col-end-8 order-last sm:order-none">
          <div className="mx-2 sm:mx-20 pt-6 flex flex-col justify-center justify-items-center sm:items-baseline items-center  ">
            <h1 className="text-xl text-center sm:text-2xl md:text-5xl lg:text-6xl font-bold sm:text-left">
              Hi, I&apos;m Tomek
            </h1>
            <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl mt-2 font-light text-left">
              <Typical
                loop={Infinity}
                wrapper="a"
                steps={[
                  " I'm Frontend Developer",
                  2000,
                  " I'm a Father",
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
        </div>
        <div className="flex justify-center col-start-8 col-span-5 ">
          <img src={face} alt="TK" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
