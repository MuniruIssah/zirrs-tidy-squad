import React from 'react';
import ZirrButton from "./zirrButton";
import background from '../images/background.png'
const Banner = () => {
    return (
        <div className={'bg-blue-600 text-white min-h-[60vh] flex items-center bg-cover bg-no-repeat'}
             style={{backgroundImage:`url(${background})`,backgroundBlendMode:'color-burn'}}>
            <div className={'max-w-[70vw] w-full mx-auto grid grid-cols-2 '}>
                <div className={'flex flex-col space-y-6'}>
                    <h1 className={'font-bold text-xl text-gray-100'}>Welcome to Zirr's Tidy Squad</h1>
                    <p className={'text-5xl'}>From Cloudy to Clear ...</p>
                    <p className={'font-light text-gray-100'}>Trust us to take care of the cleaning,
                        while you focus on enjoying the beauty and comfort of
                        your sparkling clean home or office.</p>
                    <ZirrButton>About Us</ZirrButton>
                </div>

            </div>

        </div>
    );
};

export default Banner;