import React from "react"
import { Link } from "react-router-dom";
function Footer() {


    return (
        <div className="w-full h-[120px] pl-10 pr-10 xl:pl-20 xl:pr-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 ">
            <div className="w-full h-full  flex items-center justify-between">
                <h1 className="text-white text-[16px] sm:text-[24px]">© 2023 Tolipov Yosinxon</h1>
                <Link to='concat'>
                    <button className='w-[120px] h-[40px] md:w-[200px] md:h-[60px] bg-gradient-to-r from-sky-500 to-indigo-500  hover:from-cyan-500 hover:to-blue-500 text-white text-[16px] md:text-[24px]  hover:rounded-lg duration-200'>Contact</button>


                </Link>
            </div>
            

        </div>
    )
}

export default Footer