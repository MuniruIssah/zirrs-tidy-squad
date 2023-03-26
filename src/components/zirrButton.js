import React from 'react';

const ZirrButton = ({children,inverted,small,to}) => {

    if(inverted){
        return (
            <a href={to} className={`bg-blue-600 ${small?'w-24 h-10':'w-40 h-14'}  rounded rounded-lg text-white text-sm font-medium self-start grid place-items-center`}>
                {children}
            </a>
        );
    }
    return (
        <a href={to} className={'bg-white w-full md:w-40 h-14 rounded rounded-lg text-blue-600 text-sm font-medium  grid place-items-center'}>
            {children}
        </a>
    );
};

export default ZirrButton;
