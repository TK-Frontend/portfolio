import React from "react";
import { Element } from "react-scroll";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import SwiperCore, { Pagination, Navigation } from "swiper";
import AirportFinder from "../projects/AirportFinder";
import Portfolio from "../projects/Portfolio";
import FindYourPizza from "../projects/FindYourPizza";
import StarTrek from "../projects/StarTrek";
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
            navigation={true}
            className="mySwiper"
          >
            <SwiperSlide className="py-0 sm:py-10 px-8 sm:px-14 self-center">
              <AirportFinder />
            </SwiperSlide>

            <SwiperSlide className="py-0 sm:py-10 px-8 sm:px-14 self-center">
              <Portfolio />
            </SwiperSlide>

            <SwiperSlide className="py-0 sm:py-10 px-8 sm:px-14 self-center">
              <FindYourPizza />
            </SwiperSlide>

            <SwiperSlide className="py-0 sm:py-10 px-8 sm:px-14 self-center">
              <StarTrek />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Element>
  );
};

export default Projects;
