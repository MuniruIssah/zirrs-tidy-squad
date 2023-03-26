import React from 'react';
import ClientCard from "./clientCard";
import {services} from "../utils";

const Services = () => {
    return (
        <div id={'services'} className={'flex items-center bg-gray-200 '}>
            <div className={'max-w-[70vw] w-full mx-auto flex flex-col space-y-14 items-center text-center py-10'}>

               <div className={'flex flex-col space-y-6'}>
                   <span className={'uppercase text-gray-700 text-sm font-bold'}>WHO WE SERVE</span>
                   <h2 className={'text-blue-600 font-medium text-4xl'}>With a wide range of cleaning services,<br/> We are able to meet the needs of different people</h2>
               </div>

                <div className={'w-full gap-7'} style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(400px,1fr))"}}>
                    {services.map((item,index)=><ClientCard {...item} key={index} />)}
                </div>
            </div>
        </div>
    );
};

export default Services;