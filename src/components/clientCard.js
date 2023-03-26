import React from 'react';

const ClientCard = ({title,description,icon}) => {
    return (
        <div className={'border-b-4 border-blue-900 bg-white shadow-md p-4 flex items-start space-x-4'}>
            <div className={'text-2xl'}>{icon}</div>
            <div className={'flex flex-col items-start space-y-3'}>
                <h4 className={'font-bold text-gray-800'}>{title??'Facility Managers'}</h4>
                <p className={'text-left text-gray-700 text-sm'}> {description??`
                    Rely on us as a trusted part of their team to deliver a variety of commercial
                    cleaning services that consistently exceed expectations.`}</p>
            </div>
        </div>
    );
};

export default ClientCard;