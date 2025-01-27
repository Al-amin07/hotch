import React from 'react';
import { outfit } from './font';

const FooterBanner = () => {
    return (

        <div className="bg-gradient-to-r rounded-md from-blue-600 to-purple-600 py-7 px-8 ">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <h2 className={`text-2xl leading-relaxed md:text-3xl pr-6 font-medium max-w-lg ${outfit.className}`}>
                    It will help you improve your writing & bring ideas more clearly.
                </h2>
                <button className="px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors">
                    Start 14 Days Free Trial
                </button>
            </div>
        </div>
    );
};

export default FooterBanner;