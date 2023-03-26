import React from 'react';
import background from '../images/mancleaner.avif'
const About = () => {
    return (
        <div id={'about'} className={'flex items-center'}>
            <div className={'max-w-[70vw] w-full mx-auto min-h-[60vh] flex flex-col space-y-14 items-center justify-center text-center py-10'}>
                <div className={'grid lg:grid-cols-2'}>
                    <div className={'hidden  lg:flex bg-cover bg-no-repeat bg-top'} style={{backgroundImage:`url(${background})`}}>
                    </div>
                    <div className={'text-left flex flex-col space-y-3'}>
                        <h6 className={'uppercase text-gray-700 text-sm font-bold'}>About Us</h6>
                        <p className={'font-light text-gray-600'}>
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