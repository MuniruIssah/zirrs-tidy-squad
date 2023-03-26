import React from 'react';
import ZirrButton from "./zirrButton";

const Contact = () => {
    return (
        <div className={'bg-blue-600 text-white h-[30vh] flex items-center ring ring-blue-900'}>
            <div className={'max-w-[70vw] w-full mx-auto flex justify-between items-center'}>
                <div className={'flex flex-col space-y-3'}>
                    <h2 className={'text-3xl text-gray-100'}>Call us to get an extraordinary service</h2>
                    <span className={'font-bold text-2xl'}>+233 20 127 5168</span>
                </div>
                <ZirrButton>Contact Us</ZirrButton>
            </div>
        </div>
    );
};

export default Contact;