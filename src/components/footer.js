import React from 'react';
import SocialMedia from "./socialMedia";
import {BsInstagram, BsTwitter} from "react-icons/bs";

const Footer = () => {
    return (
        <div className={'bg-gray-700 text-gray-400 text-center flex flex-col justify-center items-center py-10 space-y-4'}>
            <span className={'text-sm'}>&copy; 2023</span>
            <h1 className={'text-lg font-light'}>Zirr's Tidy Squad</h1>
            <div className={'flex items-center space-x-6 text-gray-500'}>
                <SocialMedia small to={'https://twitter.com/zts'} icon={<BsTwitter/>}/>
                <SocialMedia small to={'https://twitter.com/zts'} icon={<BsInstagram/>}/>
            </div>
        </div>
    );
};

export default Footer;