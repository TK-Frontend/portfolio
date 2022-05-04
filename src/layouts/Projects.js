import React from "react";
import { Element } from "react-scroll";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import AirportFinder from "../components/projects/AirportFinder";
import Portfolio from "../components/projects/Portfolio";
import FindYourPizza from "../components/projects/FindYourPizza";
import StarTrek from "../components/projects/StarTrek";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Projects = () => {
  return (
    <section>
      <Element name="projects">
        <div className="bg-black text-white font-rubik pt-10 pb-14 lg:py-20 ">
          <div className="max-w-6xl mx-auto">
            <div className="flex justify-center items-center pb-8">
              <h1 className="text-center font-medium text-2xl sm:text-2xl md:text-4xl lg:text-5xl border-b border-white pb-3 ">
                Projects
              </h1>
            </div>
            <Swiper
              modules={[Navigation, Pagination]}
              slidesPerView={1}
              spaceBetween={30}
              pagination={{ clickable: true }}
              loop={true}
              navigation
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
    </section>
  );
};

export default Projects;
