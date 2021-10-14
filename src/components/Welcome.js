import React from "react";
import face from "../assets/images/imgb.png";
import Typical from "react-typical";

const Welcome = () => {
  return (
    <div className="bg-black py-8 flex px-8 items-center justify-center gap-10">
      <div className="text-white font-rubik">
        <div className="#efd00"></div>
        <h1 className="text-8xl mx-20">Hi, I&apos;m Tomek</h1>
        <p className="text-4xl mt-2">
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
      <img src={face} alt="" className="w-72" />
    </div>
  );
};

export default Welcome;
