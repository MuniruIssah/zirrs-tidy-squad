import React from 'react';
import ZirrButton from "./zirrButton";

const Contact = () => {
    return (
        <div className={'bg-blue-600 text-white min-h-[30vh] flex items-center ring ring-blue-900 p-10'}>
            <div className={'max-w-7xl px-5 w-full mx-auto flex flex-col md:flex-row space-y-5 md:space-y-0 md:justify-between items-center'}>
                <div className={'flex flex-col space-y-3 text-center md:text-left'}>
                    <h2 className={'text-xl md:text-3xl text-gray-100'}>Call us to get an extraordinary service</h2>
                    <span className={'font-bold text-lg md:text-2xl'}>+233 20 127 5168</span>
                </div>
                <ZirrButton to={'tel:+233201275168'}>Contact Us</ZirrButton>
            </div>
        </div>
    );
};

export default Contact;