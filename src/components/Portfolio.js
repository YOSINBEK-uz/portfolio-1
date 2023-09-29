import React from "react";
import Alrashid from "../assets/portfolio/Alrashid.png"
import traveler from "../assets/portfolio/traveler.png"
import Gihubsite1 from "../assets/portfolio/github1.png"
import youtube from "../assets/portfolio/Youtube.png"
import Loru from "../assets/portfolio/Loru.png"
import medical from "../assets/portfolio/medical.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Alrashid,
      href: "https://www.al-rashidtourism.uz/",
    },
    {
      id: 2,
      src: youtube,
      href: "https://yosinbek-uz.github.io/you-tube/",
    },
    {
      id: 3,
      src: Gihubsite1,
      href: "https://yosinbek-uz.github.io/sabzavotlar/",
    },
    {
      id: 4,
      src: Loru,
      href: "https://yosinbek-uz.github.io/Loru-site/",
    },
    {
      id: 5,
      src: traveler,
      href: "https://yosinbek-uz.github.io/traveler/",
    },
    {
      id: 6,
      src: medical,
      href: "https://yosinbek-uz.github.io/medical/",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src , href}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={href}>
               <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full h-full"
              />  
              </a>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
