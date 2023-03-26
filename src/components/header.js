import React from 'react';
import HeaderLink from "./headerLink";
import ZirrButton from "./zirrButton";

const Header = () => {
    return (
        <div className={'bg-white text-blue-600 flex items-center justify-between px-10 py-4 shadow-md'}>
            <h1 className={'font-medium text-blue-900'}>Zirr's Tidy Squad</h1>
            <div className={'flex items-center space-x-7 '}>
                <HeaderLink>About Us</HeaderLink>
                <HeaderLink to={'#services'}>Our Services</HeaderLink>
                <ZirrButton inverted small>Contact</ZirrButton>
            </div>
        </div>
    );
};

export default Header;