import React from 'react'
import { Link } from "react-scroll";
function Concat() {
    return (
        <div
            name="contact"
            className="w-full h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500 p-4 text-white"
        >
            <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500">
                        Contact
                    </p>
                    <p className="py-6">Submit the form below to get in touch with me</p>
                </div>

                <div className=" flex justify-center items-center">
                    <div className="flex flex-col w-full md:w-1/2">
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <input
                            type="text"
                            name="email"
                            placeholder="Enter your email"
                            className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        />
                        <textarea
                            name="message"
                            placeholder="Enter your message"
                            rows="10"
                            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
                        ></textarea>

                        <div className="flex items-center justify-between ">

                            <button className='w-[120px] h-[40px] md:w-[200px] md:h-[60px] bg-gradient-to-r from-sky-500 to-indigo-500  hover:from-cyan-500 hover:to-blue-500 text-white text-[16px] md:text-[20px] mt-5 hover:rounded-lg duration-200'>Let's talk</button>



                            <a href="./">
                                <button className='w-[120px] h-[40px] md:w-[200px] md:h-[60px] bg-gradient-to-r from-sky-500 to-indigo-500  hover:from-cyan-500 hover:to-blue-500 text-white text-[16px] md:text-[20px] mt-5 hover:rounded-lg duration-200 '>Back</button>
                            </a>





                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Concat