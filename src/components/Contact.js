import React from "react";
import { Element } from "react-scroll";
import { FiPhone, FiLinkedin, FiGithub, FiFacebook } from "react-icons/fi";
import { MdAlternateEmail } from "react-icons/md";

const Contact = () => {
  return (
    <Element name="contact">
      <div className=" max-w-6xl mx-auto py-6 sm:py-16 font-rubik text-gray-600 bg-white">
        <div className="flex justify-center">
          <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-medium border-b border-gray-600 py-3">
            Contact
          </h1>
        </div>
        <div className="px-3 sm:pt-4 ">
          <div className="flex md:flex-row flex-col items-center md:justify-between sm:text-2xl text:xl pt-8 gap-y-4">
            <div className="flex gap-1 items-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/TK-Frontend"
              >
                <FiGithub />
              </a>
              <h2 className="text-base">TK-Frontend</h2>
            </div>

            <div className="flex gap-1 items-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/tomek.kozina"
              >
                <FiFacebook />
              </a>
              <h2 className="text-base">Tomek Kozina</h2>
            </div>

            <div className="flex gap-1 items-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/TK-Frontend"
              >
                <FiLinkedin />
              </a>
              <h2 className="text-base">Tomasz Kozina</h2>
            </div>

            <div className="flex gap-1 items-center">
              <FiPhone />
              <h2 className="text-base">+48 722 181 028</h2>
            </div>

            <div className="flex gap-1 items-center">
              <MdAlternateEmail />
              <h2 className="text-base">tomekozina@gmail.com</h2>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
