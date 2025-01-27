import React from 'react';
import Button from './Button';

import { outfit } from './font';
import { IoPlayCircleOutline } from "react-icons/io5";

const Banner = () => {
    return (
        <section className=" text-white">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-3xl text-center">
                    <h1
                        className={`text-4xl md:text-5xl lg:text-6xl font-medium leading-none lg:leading-[65px]  ${outfit.className} `}
                    >
                        Write better
                        <br />
                        content for your

                        {/* <span className=" block w-2/3 mx-auto border-b-2 border-orange-500 underline  bg-gradient-to-r from-[#FC6839] via-yellow-400 to-orange-500 bg-clip-text text-transparent ">
                            Facebook Ads
                        </span> */}
                        <span className='underline decoration-orange-500'>
                            <span className="block w-2/3 mx-auto   bg-gradient-to-r from-[#FC6839] via-yellow-400 to-orange-500 bg-clip-text   text-transparent">
                                Facebook Ads
                            </span>
                        </span>


                    </h1>

                    <p className="mx-auto mt-4 max-w-xl text-para1 sm:text-lg/relaxed">
                        Artificial intelligence writting tool helps you create blogs, social media websites and much more.
                    </p>

                    <div className="mt-8 flex flex-col items-center gap-5 ">
                        <Button text='Start 14 Days Free Trial' />


                        <button className="py-3 px-6  font-medium text-white rounded-sm bg-transparent border border-transparent hover:border-x-gradStart hover:border-y-gradEnd  hover:opacity-90 transition-opacity text-base">
                            <IoPlayCircleOutline size={24} className='inline-block mr-4' />
                            Watch A Demo
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;