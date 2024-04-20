import React from 'react';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import TestimonialCard from './TestimonialCard';
import icon from '../../../assets/icons/quote.svg';

const Testimonial = () => {

    const cardData = [
        {
            id: 1,
            img: people1,
            name: "Winson Herry",
            location: "California",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content."
        },
        {
            id: 2,
            img: people2,
            name: " Emma Henry",
            location: "USA",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content."
        },
        {
            id: 3,
            img: people3,
            name: "Jerry Hena",
            location: "Afganistan",
            description: "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content."
        }
    ]
    return (
        <div className='mt-12'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-primary font-bold text-lg mb-2'>Testimonial</h3>
                    <h2 className='text-2xl'>What Our Patient Says</h2>
                </div>
                <div>
                    <img className='w-40 ' src={icon} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
                {
                    cardData.map(card => <TestimonialCard
                        key={card.id}
                        card={card}
                    >

                    </TestimonialCard>)
                }
            </div>
        </div>
    );
};

export default Testimonial;