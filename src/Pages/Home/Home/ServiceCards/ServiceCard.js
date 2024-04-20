import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, description, img } = service;

    return (
        <div className="card glass text-center w-full shadow-lg" >
            <figure><img className='w-32 h-32' src={img} alt="" /></figure>
            <div className="card-body" >
                <h2 className="font-semibold text-xl">{title}</h2>
                <p>{description}</p>
            </div >
        </div >
    );
};

export default ServiceCard;