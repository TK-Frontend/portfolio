import React from "react";
import bolt from "../assets/images/bolt.png";
import checklist from "../assets/images/checklist.png";
import html from "../assets/images/html5.png";
import css from "../assets/images/css3.png";
import js from "../assets/images/js.png";
import reactIcon from "../assets/images/reactIcon.png";
import sc from "../assets/images/styledComponents.png";
import git from "../assets/images/git.png";
import github from "../assets/images/github.png";
import gitlab from "../assets/images/gitlab.png";
import node from "../assets/images/node.png";
import express from "../assets/images/express.png";
import mongodb from "../assets/images/mongodb.png";
import receipt from "../assets/images/receipt.png";
import typescript from "../assets/images/typescript.png";
import tailwind from "../assets/images/tailwind.png";
import reduxIcon from "../assets/images/reduxIcon.png";
import addTask from "../assets/images/addTask.png";
import next from "../assets/images/next.png";
import jest from "../assets/images/jest.png";
import reactNative from "../assets/images/reactnative.png";
import { Element } from "react-scroll";

const Skills = () => {
  const SCALE_STYLES = " transform scale-100 hover:scale-110 ";

  return (
    <Element name="skills">
      <div className="bg-white font-rubik text-gray-600 px-4 py-14 pb-24 mx-auto  ">
        <div className="flex justify-center">
          <h1 className=" text-5xl  font-medium border-b border-gray-600 pb-3">
            Skills
          </h1>
        </div>
        <div className="flex justify-center pt-12 sm:pb-0 pb-10 items-center ">
          <img src={bolt} alt="bolt" className="text-gray-600" />
          <h2 className="text-3xl font-light">I feel good in</h2>
        </div>
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-8 gap-12 sm:gap-1 mt-4 sm:mt-8 px-2 py-4 mx-auto self-center justify-center justify-items-center items-center border-l border-r border-gray-200 shadow-md">
          <img
            src={html}
            alt="html5"
            className={SCALE_STYLES + " w-28 sm:w-14 h-full "}
          />
          <img
            src={css}
            alt="css"
            className={SCALE_STYLES + "w-28 sm:w-14 h-full "}
          />
          <img
            src={js}
            alt="js"
            className={SCALE_STYLES + "w-28 sm:w-14 h-full "}
          />
          <img
            src={reactIcon}
            alt="react"
            className={SCALE_STYLES + "w-28 sm:w-14 h-full "}
          />
          <img
            src={sc}
            alt="styled"
            className={SCALE_STYLES + "w-28 sm:w-14 h-full "}
          />
          <img
            src={git}
            alt="git"
            className={SCALE_STYLES + "w-28 sm:w-14 h-full "}
          />
          <img
            src={github}
            alt="github"
            className={SCALE_STYLES + "w-28 sm:w-14 h-full "}
          />
          <img
            src={gitlab}
            alt="gitlab"
            className={SCALE_STYLES + "w-28 sm:w-14 h-full "}
          />
        </div>
        <div className="flex justify-center pt-12 sm:pb-0 pb-10 items-center ">
          <img src={checklist} alt="bolt" className="text-gray-600 pr-2 " />
          <h2 className="text-3xl font-light pb-2">I know basics of</h2>
        </div>
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-1 mt-4 sm:mt-8 px-2 sm:py-4 pb-12 sm:pb-4 mx-auto self-center justify-center justify-items-center items-center border-l border-r border-gray-200 shadow-md">
          <img
            src={node}
            alt="node"
            className={SCALE_STYLES + "w-48 sm:w-28 "}
          />
          <img
            src={express}
            alt="express"
            className={SCALE_STYLES + "w-48 sm:w-32 "}
          />
          <img
            src={mongodb}
            alt="mongodb"
            className={SCALE_STYLES + "w-48 sm:w-32 "}
          />
        </div>
        <div className="flex justify-center pt-12 sm:pb-0 pb-10 items-center ">
          <img src={receipt} alt="bolt" className="text-gray-600 pr-2" />
          <h2 className="text-3xl font-light">Actually I&apos;m learning</h2>
        </div>
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-1 mt-4 sm:mt-8 px-2 sm:py-4 pb-12 sm:pb-4 mx-auto self-center justify-center justify-items-center items-center border-l border-r border-gray-200 shadow-md">
          <img
            src={typescript}
            alt="ts"
            className={SCALE_STYLES + "w-24 sm:w-14 "}
          />
          <img
            src={reduxIcon}
            alt="redux"
            className={SCALE_STYLES + "w-24 sm:w-14 "}
          />
          <img
            src={tailwind}
            alt="tailwind"
            className={SCALE_STYLES + "w-28 sm:w-14 "}
          />
        </div>
        <div className="flex justify-center pt-12 sm:pb-0 pb-10 items-center ">
          <img src={addTask} alt="add" className="text-gray-600 pr-2" />
          <h2 className="text-3xl font-light">I wan&apos;t to learn</h2>
        </div>
        <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-1 mt-4 sm:mt-8 px-2 sm:py-4 pb-12 sm:pb-4 mx-auto self-center justify-center justify-items-center items-center border-l border-r border-gray-200 shadow-md">
          <img
            src={next}
            alt="next"
            className={SCALE_STYLES + "w-28 sm:w-24 "}
          />
          <img
            src={jest}
            alt="jest"
            className={SCALE_STYLES + "w-28 sm:w-24 "}
          />
          <img
            src={reactNative}
            alt="reactNative"
            className={SCALE_STYLES + "w-36 sm:w-48 "}
          />
        </div>
      </div>
    </Element>
  );
};

export default Skills;
