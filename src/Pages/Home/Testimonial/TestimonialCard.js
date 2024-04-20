import React from 'react';

const TestimonialCard = ({ card }) => {
    const { id, description, location, name, img } = card;
    return (
        <div className='shadow-lg p-10 rounded-lg'>
            <div className='mb-8'>
                <p>
                    {description}
                </p>
            </div>

            <div className='flex items-center'>
                <div className="avatar ">
                    <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-4">
                        <img src={img} alt='' />

                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-semibold'>{name}</h1>
                    <p>{location}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;