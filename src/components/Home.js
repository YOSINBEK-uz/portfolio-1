import React, { useEffect } from "react";
import yosinbek from "../assets/yosinxon.png"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { TypeAnimation } from 'react-type-animation';
import Aos from "aos";
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=> {
Aos.init({duration: 2000})
  }, [])
  return (
    <div
      name="home"
      className=" h-[400px] sm:h-[500px] w-full md:h-screen "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div data-aos="fade-right"  className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Junior Developer
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
          <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                ' I have 1 year of experience in software development and design. Now I like to work on web applications using technologies like Html, Css, React and Tailwind.',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '16px', display: 'inline-block' }}
              repeat={Infinity}
            />
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div data-aos="fade-left" className="md:w-[350px] md:h-[350px] rounded-full bg-white hidden md:flex  overflow-hidden duration-200">
          <img
            src={yosinbek}
            alt="my profile"
            className=" mx-auto hidden md:flex md:w-full hover:scale-[1.15] duration-200 "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
