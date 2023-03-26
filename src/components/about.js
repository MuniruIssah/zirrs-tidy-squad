import React from 'react';
import background from '../images/mancleaner.avif'
const About = () => {
    return (
        <div id={'about'} className={'flex'}>
            <div className={'max-w-7xl px-5 w-full mx-auto py-10 flex flex-col items-center justify-center text-center'}>
                <div className={'grid lg:grid-cols-2 h-full'}>
                    <div className={'hidden lg:flex bg-contain bg-no-repeat bg-top'}>
                        <img src={background} className={'w-4/5'} alt={'alternative'}/>
                    </div>
                    <div className={'text-center lg:text-left flex flex-col space-y-3 h-full justify-center'}>
                        <h6 className={'uppercase text-gray-700 font-bold'}>About Us</h6>
                        <p className={'font-light text-gray-600 md:text-lg'}>
                            At Zirr’s Tidy Squad, we understand that a clean and tidy space is essential for your wellbeing and productivity.
                            We take pride in providing thorough and efficient cleaning services that exceed our clients' expectations.
                            Our team of experienced and trustworthy professionals uses eco-friendly cleaning products and advanced equipment to ensure that your home or office is spotless and sanitized.
                            Whether you need a one-time deep cleaning or regular maintenance services, we've got you covered.
                            Let us take care of the cleaning, so you can focus on what really matters.
                            Contact us today to schedule your cleaning appointment!
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;