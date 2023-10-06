import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import medical from "../assets/portfolio/medical.png"
function Medical() {
  return (
    <div className='w-full h-auto bg-gradient-to-r from-purple-500 to-pink-500 pt-10'>
    <div className="w-full h-[400px] flex items-center justify-center  ">
        <img className='w-[80%] md:w-[65%] h-[300px] md:hover:w-[80%] hover:h-full duration-200 object-cover ' src={medical} alt="" />
    </div>
    <div className="w-full h-[500px] p-10 md:pl-40 md:pr-40 xl:pl-[240px] xl:pr-[240px] ">
        <div className="w-full h-full">
            <h1 className='text-4xl sm:text-5xl font-bold text-white'>Creators:
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed out once, initially
                        'Yosinxon Tolipov',

                        1000,
                    ]}
                    wrapper="span"
                    speed={1}
                    style={{ fontSize: '40px', display: 'inline-block', color: 'cyan' }}
                    repeat={Infinity}
                />
            </h1>
            <h1 className='text-4xl sm:text-5xl font-bold text-white mt-8'>Loaded: <span className='text-cyan-400'>Github</span></h1>
            <h1 className='text-4xl sm:text-5xl font-bold text-white mt-8'>Technologies: <span className='text-cyan-400'>Html, Css, JavaScript</span></h1>
            <div className="flex items-center justify-between ">
                <a href="https://yosinbek-uz.github.io/medical/">
                    <button className='w-[120px] h-[40px] md:w-[200px] md:h-[60px] bg-gradient-to-r from-sky-500 to-indigo-500  hover:from-cyan-500 hover:to-blue-500 text-white text-[16px] md:text-[20px] mt-5 hover:rounded-lg duration-200'>Web-site View</button>

                </a>


                <a href="./">
                    <button className='w-[120px] h-[40px] md:w-[200px] md:h-[60px] bg-gradient-to-r from-sky-500 to-indigo-500  hover:from-cyan-500 hover:to-blue-500 text-white text-[16px] md:text-[20px] mt-5 hover:rounded-lg duration-200 '>Back</button>
                </a>

            </div>

        </div>
    </div>
</div>
  )
}

export default Medical