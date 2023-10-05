import React from "react";
import Alrashid from "../assets/portfolio/Alrashid.png"
import traveler from "../assets/portfolio/traveler.png"
import Gihubsite1 from "../assets/portfolio/github1.png"
import youtube from "../assets/portfolio/Youtube.png"
import Loru from "../assets/portfolio/Loru.png"
import medical from "../assets/portfolio/medical.png"
import { Link } from "react-router-dom";
const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Alrashid,
      href:"alrashid"
    },
    {
      id: 2,
      src: youtube,
      href:"youtube"
    },
    {
      id: 3,
      src: Gihubsite1,
      href:"sabzavotlar"
    },
    {
      id: 4,
      src: Loru,
      href:"loru"

    },
    {
      id: 5,
      src: traveler,
      href: "travel"
    },
    {
      id: 6,
      src: medical,
      href: "medical"

    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-r from-violet-500 to-fuchsia-500 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src ,href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
             
               <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105 w-full h-full"
              />  
             <Link to={href}><button>Info</button></Link>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
