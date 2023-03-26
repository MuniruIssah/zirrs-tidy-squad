import React from 'react';
import ZirrButton from "./zirrButton";
import background from '../images/background.png'
const Banner = () => {
    return (
        <div className={'bg-blue-600 text-white min-h-[60vh] py-5 flex items-center bg-cover bg-no-repeat'}
             style={{backgroundImage:`url(${background})`,backgroundBlendMode:'color-burn'}}>
            <div className={'max-w-7xl px-5 w-full mx-auto grid md:grid-cols-2 '}>
                <div className={'flex flex-col space-y-6 text-center md:text-left'}>
                    <h1 className={'font-bold text-lg md:text-xl text-gray-100'}>Welcome to Zirr's Tidy Squad</h1>
                    <p className={'text-3xl md:text-5xl'}>From Cloudy to Clear</p>
                    <p className={'font-light text-gray-100'}>Trust us to take care of the cleaning,
                        while you focus on enjoying the beauty and comfort of
                        your sparkling clean home or office.</p>
                    <ZirrButton to={'#about'}>About Us</ZirrButton>
                </div>

            </div>

        </div>
    );
};

export default Banner;