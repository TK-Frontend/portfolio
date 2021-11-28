import React from "react";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import { Element } from "react-scroll";
import { BsGithub } from "react-icons/bs";
import { FiExternalLink, FiGitlab } from "react-icons/fi";
import pizzaLogo from "../assets/images/pizzaMini.png";
import pizzaSite from "../assets/images/pizzaSite.png";
import starTrek from "../assets/images/starTrek.png";
import starTrekMini from "../assets/images/starTrekMini.png";
import SwiperCore, { Pagination, Navigation } from "swiper";
import "swiper/swiper.scss";
import "swiper/modules/navigation/navigation.scss";
import "swiper/modules/pagination/pagination.scss";

SwiperCore.use([Pagination, Navigation]);

const Projects = () => {
  return (
    <Element name="projects">
      <div className="bg-black text-white font-rubik pt-10 pb-14 lg:py-20 ">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center items-center pb-8">
            <h1 className="text-center font-medium text-2xl sm:text-2xl md:text-4xl lg:text-5xl border-b border-white pb-3 ">
              Projects
            </h1>
          </div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide className="py-0 sm:py-10 px-8 sm:px-14 self-center">
              <div className="flex flex-col sm:grid grid-cols-12 place-items-center h-full justify-self-start">
                <div className="hidden sm:grid grid-rows-3 col-start-1 col-span-1 row-start-1 justify-items-center justify-self-start">
                  <div className="grid h-full border-l"></div>
                  <div className="py-8">
                    <img src={pizzaLogo} alt="pizzaLogo" className="w-10" />
                  </div>
                  <div className="grid h-full border-r"></div>
                </div>

                <div className="pl-0 sm:pl-2 md:pl-0 col-start-1 sm:col-start-2 col-span-7 row-start-1 z-10 text-left justify-self-start">
                  <div className="flex flex-col justify-items-start">
                    <h1 className="font-semibold text-md sm:text-2xl md:text-4xl lg:text-5xl sm:py-2 text-center">
                      Find your Pizza
                    </h1>
                    <h2 className="text-xs sm:text-sm md:text-md lg:text-lg">
                      Create your pizza based on the ingredients
                    </h2>
                    <div className="flex flex-row items-center h-10 gap-4 sm:self-start self-center">
                      <div className="text-2xl hover:text-yellow-400 transform hover:scale-110">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://github.com/TK-Frontend/findyourpizza"
                          className="px-2"
                        >
                          <BsGithub className="text-sm md:text-xl lg:text-2xl" />
                        </a>
                      </div>
                      <div className="text-2xl hover:text-yellow-400 transform hover:scale-110">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://tk-frontend.github.io/findyourpizza"
                        >
                          <FiExternalLink className="text-sm md:text-xl lg:text-2xl" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-start-5 col-span-8 row-start-1 px-3 sm:pr-4">
                  <img
                    src={pizzaSite}
                    alt=""
                    className="w-full rounded-md opacity-90"
                  />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="py-0 sm:py-10 px-8 sm:px-14 self-center">
              <div className="flex flex-col sm:grid grid-cols-12 place-items-center h-full justify-self-start">
                <div className="hidden sm:grid grid-rows-3 col-start-1 col-span-1 row-start-1 justify-items-center justify-self-start">
                  <div className="grid h-full border-l"></div>
                  <div className="py-8 ">
                    <img src={starTrekMini} alt="starTrek" className="w-10" />
                  </div>
                  <div className="grid h-full border-r"></div>
                </div>

                <div className="pl-0 sm:pl-2 md:pl-0 col-start-1 sm:col-start-2 col-span-7 row-start-1 z-10 text-left justify-self-start">
                  <div className="flex flex-col justify-items-start ">
                    <h1 className="font-semibold text-md sm:text-2xl md:text-4xl lg:text-5xl sm:py-2 text-center">
                      Super Star Trek
                    </h1>
                    <h2 className="text-xs sm:text-sm md:text-md lg:text-lg">
                      The project is adaptation of classic game
                    </h2>
                    <div className="flex flex-row items-center h-10 gap-4 sm:self-start self-center">
                      <div className="text-2xl hover:text-yellow-400 transform hover:scale-110 ">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://gitlab.com/oak-forge-sst/front/sst-new-frontend"
                          className="px-2"
                        >
                          <FiGitlab className="text-sm md:text-xl lg:text-2xl" />
                        </a>
                      </div>
                      <div className="text-2xl hover:text-yellow-400 transform hover:scale-110">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://oak-forge-sst.gitlab.io/front/sst-new-frontend"
                        >
                          <FiExternalLink className="text-sm md:text-xl lg:text-2xl" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" col-start-5 col-span-8 row-start-1 px-3 sm:pr-4 ">
                  <img src={starTrek} alt="" className="w-full rounded-md" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
