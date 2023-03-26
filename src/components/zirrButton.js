import React from 'react';

const ZirrButton = ({children,inverted,small}) => {

    if(inverted){
        return (
            <a href={'tel:+233201275168'} className={`bg-blue-600 ${small?'w-24 h-10':'w-40 h-14'}  rounded rounded-lg text-white text-sm font-medium self-start grid place-items-center`}>
                {children}
            </a>
        );
    }
    return (
        <a href={'tel:+233201275168'} className={'bg-white w-40 h-14 rounded rounded-lg text-blue-600 text-sm font-medium self-start grid place-items-center'}>
            {children}
        </a>
    );
};

export default ZirrButton;
