import React from "react";
import airportFinder from "../assets/images/airportFinder.png";
import airportCircle from "../assets/images/airportCircle.png";
import { BsGithub } from "react-icons/bs";

function AirportFinder() {
  return (
    <div className="flex flex-col sm:grid grid-cols-12 place-items-center h-full justify-self-start">
      <div className="hidden sm:grid grid-rows-3 col-start-1 col-span-1 row-start-1 justify-items-center justify-self-start">
        <div className="grid h-full border-l"></div>
        <div className="py-8 ">
          <img src={airportCircle} alt="starTrek" className="w-10" />
        </div>
        <div className="grid h-full border-r"></div>
      </div>

      <div className="pl-0 sm:pl-2 md:pl-0 col-start-1 sm:col-start-2 col-span-7 row-start-1 z-10 text-left justify-self-start">
        <div className="flex flex-col justify-items-start ">
          <h1 className="font-semibold text-md sm:text-2xl md:text-4xl lg:text-5xl sm:py-2 text-center">
            Airport Finder
          </h1>
          <h2 className="text-xs sm:text-sm md:text-md lg:text-lg">
            Find the airport and go there!
          </h2>
          <div className="flex flex-row items-center h-10 gap-4 sm:self-start self-center">
            <div className="text-2xl hover:text-yellow-400 transform hover:scale-110 ">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/TK-Frontend/airport-finder"
                className="px-2"
              >
                <BsGithub className="text-sm md:text-xl lg:text-2xl" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="col-start-5 col-span-8 row-start-1 px-3 sm:pr-4">
        <div className="flex justify-center">
          <img src={airportFinder} alt="" className="w-4/5 rounded-md" />
        </div>
      </div>
    </div>
  );
}

export default AirportFinder;
