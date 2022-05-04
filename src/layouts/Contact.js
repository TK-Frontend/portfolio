import React, { useState } from "react";
import { Element } from "react-scroll";
import {
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiFacebook,
  FiMail,
} from "react-icons/fi";
import { EmailMe } from "../components/EmailMe";
import Modal from "../components/Modal";

const Contact = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section>
      <Element name="contact">
        <div className=" max-w-6xl mx-auto py-6 sm:py-16 font-rubik text-gray-600 bg-white">
          <div className="flex justify-center">
            <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-medium border-b border-gray-600 py-3">
              Contact
            </h1>
          </div>
          <EmailMe setModalOpen={setModalOpen} />
          {modalOpen && <Modal setModalOpen={setModalOpen} />}
          <address className="px-3 sm:pt-4">
            <div className="flex md:flex-row flex-col items-center md:justify-between sm:text-2xl text:xl pt-8 gap-y-4">
              <div className="flex gap-1 items-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/TK-Frontend"
                  className="flex flex-row gap-1"
                >
                  <FiGithub />
                  <h2 className="text-base">TK-Frontend</h2>
                </a>
              </div>

              <div className="flex gap-1 items-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.facebook.com/tomek.kozina"
                  className="flex flex-row gap-1"
                >
                  <FiFacebook />
                  <h2 className="text-base">Tomek Kozina</h2>
                </a>
              </div>

              <div className="flex gap-1 items-center">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/tomasz-kozina-0101992/"
                  className="flex flex-row gap-1"
                >
                  <FiLinkedin />
                  <h2 className="text-base">Tomasz Kozina</h2>
                </a>
              </div>

              <div className="flex gap-1 items-center">
                <a href="tel:722181028" className="flex flex-row gap-1">
                  <FiPhone />
                  <h2 className="text-base">+48 722 181 028</h2>
                </a>
              </div>

              <div className="flex items-center">
                <a href="mailto:adres e-mail" className="flex flex-row gap-1">
                  <FiMail className="text-2xl " />
                  <h2 className="text-base flex ">tomasz.kozina@wp.pl</h2>
                </a>
              </div>
            </div>
          </address>
        </div>
      </Element>
    </section>
  );
};

export default Contact;
