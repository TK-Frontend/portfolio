import React from "react";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="contact">
      <div className="py-12 font-rubik text-black bg-white">
        <div className="flex justify-center">
          <h1 className="text-5xl font-medium border-b border-gray-600 py-6">
            Contact
          </h1>
        </div>
        <div className="px-3 pt-4 ">
          <div className="flex flex-col align sm:text-2xl text:xl py-4 gap-y-4 ">
            <h2>TK-Frontend</h2>
            <h2>Phone: 722 181 028</h2>
            <h2>e-mail: tomekozina@gmail.com</h2>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Contact;
