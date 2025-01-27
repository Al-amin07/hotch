import React from 'react';
type TProp = {
    text: string
}
const Button = ({ text }: TProp) => {
    return (
        <button className="py-3 px-4  font-medium text-white rounded-sm bg-gradient-to-r from-[#3456FF] via-[#723FF8] to-[#A128E3] hover:opacity-90 transition-opacity text-base">
            {text}
        </button>
    );
};

export default Button;