import React from 'react';
type TProp = {
    text: string;

}
const BlackButton = ({ text }: TProp) => {
    return (
        <button className="p-3  font-medium text-white rounded-sm bg-transparent hover:border border-transparent hover:border-x-gradStart hover:border-y-gradEnd  hover:opacity-90 transition-opacity text-base">

            {text}
        </button>
    );
};

export default BlackButton;