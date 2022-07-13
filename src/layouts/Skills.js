import React from "react";

import { Element } from "react-scroll";
import {
  ADD_TASK,
  BOLT,
  CONTEXT,
  CHECKLIST,
  CSS3,
  EXPO,
  EXPRESS,
  FORMIK,
  FIREBASE,
  FLUTTER,
  HTML,
  JS,
  GIT,
  GITHUB,
  GITLAB,
  JEST,
  NODEJS,
  MUI,
  MONGODB,
  NEXT,
  REACT_ICON,
  REACT_NATIVE,
  RECEIPT,
  REDUX_ICON,
  SASS,
  SC,
  SCRUM,
  TAILWIND,
  TYPESCRIPT,
  VSC,
} from "../assets/images"; // Try to import * from this file

const Skills = () => {
  const SCALE_STYLES = " transform scale-100 hover:scale-110 ";

  return (
    <section>
      <Element name="skills">
        <div className="bg-white font-rubik text-gray-600 px-4 py-14 pb-24 mx-auto  ">
          <div className="flex justify-center">
            <h1 className="sm:text-3xl md:text-4xl lg:text-5xl text-3xl font-medium border-b border-gray-600 pb-3">
              Skills
            </h1>
          </div>

          <div className="sm:pt-12 sm:pb-0 flex justify-center pt-8 pb-6 items-center ">
            <img src={BOLT} alt="bolt" className="w-8 text-gray-600" />
            <h2 className="sm:text-3xl text-xl font-light">
              I feel comfortable with
            </h2>
          </div>

          <div className="max-w-6xl sm:grid sm:grid-cols-4 sm:gap-x-42 sm:mt-8 grid grid-cols-1 gap-12 mt-4 px-2 py-4 mx-auto self-center justify-center justify-items-center items-center border-l border-r border-gray-200 shadow-md">
            <img
              src={HTML}
              alt="html5"
              className={SCALE_STYLES + " w-20 h-full "}
            />
            <img
              src={CSS3}
              alt="css"
              className={SCALE_STYLES + "w-20 h-full "}
            />
            <img src={SC} alt="styled" className={SCALE_STYLES + "w-20"} />

            <img src={SASS} alt="sass" className={SCALE_STYLES + "w-20"} />
            <img
              src={TAILWIND}
              alt="tailwind"
              className={SCALE_STYLES + "w-20"}
            />
            <img src={MUI} alt="mui" className={SCALE_STYLES + "w-20"} />
            <img src={JS} alt="javascript" className={SCALE_STYLES + "w-20 "} />
            <img
              src={REACT_ICON}
              alt="react"
              className={SCALE_STYLES + "w-20 "}
            />
            <img
              src={CONTEXT}
              alt="context"
              className={SCALE_STYLES + "w-44 "}
            />
            <img src={FORMIK} alt="formik" className={SCALE_STYLES + "w-20 "} />
            <img src={GIT} alt="git" className={SCALE_STYLES + "w-20 "} />
            <img src={GITHUB} alt="github" className={SCALE_STYLES + "w-16 "} />
            <img src={GITLAB} alt="gitlab" className={SCALE_STYLES + "w-16 "} />
            <img
              src={VSC}
              alt="visual-studio-code"
              className={SCALE_STYLES + "w-16 "}
            />
            <img src={SCRUM} alt="scrum" className={SCALE_STYLES + "w-20 "} />
          </div>

          <div className="flex justify-center pt-12 sm:pb-0 pb-6 items-center ">
            <img
              src={CHECKLIST}
              alt="checklist"
              className="w-8 text-gray-600 pr-2 "
            />
            <h2 className="text-xl sm:text-3xl font-light">
              I used technologies such as
            </h2>
          </div>

          <div className="max-w-6xl sm:grid sm:grid-cols-4 sm:gap-x-42 sm:mt-8 sm:py-4 sm:pb-4 grid grid-cols-1 gap-12 px-2 pb-12 mt-4 mx-auto self-center justify-center justify-items-center items-center border-l border-r border-gray-200 shadow-md">
            <img src={TYPESCRIPT} alt="ts" className={SCALE_STYLES + "w-14"} />
            <img
              src={REDUX_ICON}
              alt="redux"
              className={SCALE_STYLES + "w-14"}
            />
            <img
              src={FIREBASE}
              alt="firebase"
              className={SCALE_STYLES + "w-14"}
            />
            <img src={EXPO} alt="expo" className={SCALE_STYLES + "w-20"} />
            <img
              src={NODEJS}
              alt="node-JS"
              className={SCALE_STYLES + "w-32 sm:w-28 "}
            />
            <img
              src={EXPRESS}
              alt="express"
              className={SCALE_STYLES + "w-32 sm:w-32 "}
            />
            <img
              src={MONGODB}
              alt="mongodb"
              className={SCALE_STYLES + "w-32 sm:w-32 "}
            />
          </div>

          <div className="flex justify-center pt-12 sm:pb-0 pb-6 items-center ">
            <img src={RECEIPT} alt="bolt" className="w-8 text-gray-600 pr-2" />
            <h2 className="text-xl sm:text-3xl font-light">
              I&apos;m learning
            </h2>
          </div>

          <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-1 gap-12 sm:gap-1 mt-4 sm:mt-8 px-2 sm:py-4 pb-12 sm:pb-4 mx-auto self-center justify-center justify-items-center items-center border-l border-r border-gray-200 shadow-md">
            <img
              src={REACT_NATIVE}
              alt="react-native"
              className={SCALE_STYLES + "w-52 "}
            />
          </div>

          <div className="flex justify-center pt-12 sm:pb-0 pb-6 items-center ">
            <img src={ADD_TASK} alt="add" className="w-8 text-gray-600 pr-2" />
            <h2 className="text-xl sm:text-3xl font-light">I want to learn</h2>
          </div>

          <div className="max-w-6xl grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-1 mt-4 sm:mt-8 px-2 sm:py-4 pb-12 sm:pb-4 mx-auto self-center justify-center justify-items-center items-center border-l border-r border-gray-200 shadow-md">
            <img src={JEST} alt="jest" className={SCALE_STYLES + "w-20 "} />
            <img src={NEXT} alt="next" className={SCALE_STYLES + "w-20 "} />
            <img
              src={FLUTTER}
              alt="flutter"
              className={SCALE_STYLES + "w-20 "}
            />
          </div>
        </div>
      </Element>
    </section>
  );
};

export default Skills;
