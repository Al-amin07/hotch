import React from 'react';
import { outfit } from './font';
type TProp = {
    text1: string;
    text2?: string;
    desc?: string
}
const TextComponent = ({ text1, text2, desc }: TProp) => {
    return (
        <div className="text-center mb-10">
            <h1 className={`text-3xl md:text-4xl font-[500] mb-4 ${outfit.className}`}>
                {text1}
                <br />
                {text2}
            </h1>
            <p className="text-para1 w-full lg:w-1/3 mx-auto ">{desc}</p>
        </div>
    );
};

export default TextComponent;