import React from 'react';
import HeaderLink from "./headerLink";
import ZirrButton from "./zirrButton";

const Header = () => {
    return (
        <div className={'bg-white text-blue-600 flex items-center justify-between px-5 md:px-10 py-4 shadow-md'}>
            <h1 className={'font-medium text-blue-900'}>Zirr's Tidy Squad</h1>
            <div className={'hidden lg:flex items-center space-x-7 '}>
                <HeaderLink to={'#about'}>About Us</HeaderLink>
                <HeaderLink to={'#services'}>Our Services</HeaderLink>
                <ZirrButton to={'tel:+233201275168'} inverted small>Contact</ZirrButton>
            </div>
        </div>
    );
};

export default Header;