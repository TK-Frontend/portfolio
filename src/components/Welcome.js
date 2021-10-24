import React from "react";
import face from "../assets/images/imgb.png";
import Typical from "react-typical";

const Welcome = () => {
  return (
    <div className="bg-black p-1 md:p-8 gap-0 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 grid grid-rows-2 sm:flex place-items-center justify-center overflow-hidden">
      <div className="text-white font-rubik">
        <h1 className="text-xl sm:text-2xl md:text-5xl lg:text-6xl sm:mx-20 ">
          Hi, I&apos;m Tomasz Kozina
        </h1>
        <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl mt-2">
          I&apos;m
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              " aspiring Frontend Developer ",
              2000,
              " a Father ",
              1500,
              " a Husband ",
              1500,
            ]}
          />
        </p>
      </div>
      <img
        src={face}
        alt=""
        className="w-32 sm:w-36 md:w-48 lg:w-52 xl:w-64 2xl:w-72 transition-all duration-300 ease-out transform scale-100  hover:scale-105"
      />
    </div>
  );
};

export default Welcome;
