import React from 'react';

const HeaderLink = ({to,children}) => {
    return (
        <a href={to} className={'text-sm text-gray-600 hover:text-blue-600 transition-all ease-in-out cursor-pointer'}>
            {children}
        </a>
    );
};

export default HeaderLink;