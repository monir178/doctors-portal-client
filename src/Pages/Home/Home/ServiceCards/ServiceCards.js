import React from 'react';
import cavity from '../../../../assets/images/cavity.png';
import fluoride from '../../../../assets/images/fluoride.png';
import whitening from '../../../../assets/images/whitening.png';
import ServiceCard from './ServiceCard';

const ServiceCards = () => {

    const services = [
        {
            id: 1,
            img: fluoride,
            title: "Fluoride Treatment",
            description: "It helps to prevent cavities and strengthen tooth enamel."
        },
        {
            id: 2,
            img: cavity,
            title: "Cavity Filling",
            description: "It involves removing decayed parts of a tooth and filling the area with a dental material."
        },
        {
            id: 3,
            img: whitening,
            title: "Teeth Whitening",
            description: "It involves using a bleaching agent to lighten the color of teeth."
        }
    ]

    return (
        <div className='text-center '>
            <h2 className='text-primary font-bold'>OUR SERVICES</h2>
            <h1 className='text-2xl'>Services We Provide</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-20">
                {
                    services.map(service => <ServiceCard
                        key={service.id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default ServiceCards;