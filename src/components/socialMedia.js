import React from 'react';

const SocialMedia = (socialMedia) => {
    const handleClick=()=>{
        window.open(socialMedia.to,'')
    }
    return (
        <button onClick={handleClick} className={`${socialMedia.small?'text-xl':'text-3xl'} transition-all ease-in-out hover:scale-110 hover:-translate-y-1`}>
            {socialMedia.icon}
        </button>
    );
};

export default SocialMedia;