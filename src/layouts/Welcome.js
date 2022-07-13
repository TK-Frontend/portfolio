import React from "react";
import face from "../assets/images/imgb.png";
import TypeAnimation from "react-type-animation";
import CV from "../assets/images/TomaszKozinaCV.pdf";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { motion } from "framer-motion";
import dayjs from "dayjs";

const Welcome = () => {
  const relativeTime = require("dayjs/plugin/relativeTime");
  dayjs.extend(relativeTime);
  const age = dayjs().diff("1992-09-08", "years");

  return (
    <section className="bg-black text-white font-rubik px-4 ">
      <div className="max-w-6xl pt-4 pb-20 sm:pb-40 md:pt-8 mx-auto flex flex-col sm:grid grid-cols-12 place-items-center justify-around">
        <div className="hidden sm:grid  grid-rows-3 place-items-center h-full justify-self-start ml-5 col-start-1 col-end-2  ">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", delay: 0.4, duration: 0.6 }}
            className="grid h-full border-r "
          ></motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeOut", delay: 0.4, duration: 0.6 }}
            className=""
          >
            <div className="grid py-2 text-2xl hover:text-yellow-400 transform hover:scale-110">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/TK-Frontend?tab=repositories"
              >
                <BsGithub />
              </a>
            </div>
            <div className="grid py-2 text-2xl hover:text-yellow-400 transform hover:scale-110">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/tomasz-kozina-0101992/"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="grid py-2 text-2xl hover:text-yellow-400 transform hover:scale-110">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/tomek.kozina"
              >
                <FaFacebook />
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: "easeOut", delay: 0.4, duration: 0.6 }}
            className="grid h-full border-r "
          ></motion.div>
        </div>
        <div className="col-start-3 col-end-8 order-last sm:order-none sm:justify-self-start">
          <motion.div
            initial={{ x: "-10vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ ease: "easeOut", delay: 0.4, duration: 0.6 }}
            className="mx-2 pt-6 flex flex-col justify-center justify-items-center sm:items-baseline items-center  "
          >
            <header>
              <h1
                animate={{ fontSize: 20 }}
                className="text-xl text-center sm:text-2xl md:text-5xl lg:text-6xl font-bold sm:text-left"
              >
                Hi, I&apos;m Tomasz
              </h1>
            </header>
            <p className="text-sm sm:text-xl md:text-2xl lg:text-3xl mt-2 font-light text-left">
              <TypeAnimation
                repeat={Infinity}
                wrapper="a"
                sequence={[
                  // "I am a self-taught developer",
                  // 2000,
                  `I am ${age} years old`,
                  1500,
                  "I am from Legnica in Poland", // Add here polish flag
                  1500,
                  `I am a happy husband and father`, // Add here family-icon
                  1500,
                ]}
              />
            </p>
            <button className="bg-yellow-400 text-black rounded-lg mt-2 text-lg px-3 py-1 hover:bg-yellow-300">
              <a href={CV} download="TomaszKozinaCV.pdf">
                {" "}
                CV.pdf{" "}
              </a>
            </button>
          </motion.div>
        </div>
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ ease: "easeOut", delay: 0.4, duration: 0.6 }}
          className="flex justify-center col-start-8 col-span-5 "
        >
          <picture>
            <img src={face} alt="TK" className="w-full" />
          </picture>
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;
