import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';


const Information = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white gap-4 my-12 '>
            <div className=' bg-gradient-to-l from-primary to-secondary flex items-center rounded-xl px-6 py-8 flex-1' >
                <div>
                    <img className='w-20 h-20' src={clock} alt="" />
                </div>
                <div className='ms-4'>
                    <h3 className='text-xl font-semibold mb-3 '>Opening Hours</h3>
                    <p>It opens from 8am to 10pm everyday. </p>
                </div>
            </div>
            <div className=' bg-accent flex items-center rounded-xl px-6 py-8 flex-1' >
                <div>
                    <img className='w-20 h-20' src={marker} alt="" />
                </div>
                <div className='ms-4'>
                    <h3 className='text-xl font-semibold mb-3 '>Visit our location</h3>
                    <p>Brooklyn, NY 10036, United States </p>
                </div>
            </div>
            <div className=' bg-gradient-to-l from-primary to-secondary flex items-center rounded-xl px-6 py-8 flex-1' >
                <div>
                    <img className='w-20 h-20' src={phone} alt="" />
                </div>
                <div className='ms-4'>
                    <h3 className='text-xl font-semibold mb-3 '>Contact us now</h3>
                    <p>+000 123 456789 </p>
                </div>
            </div>

        </div>
    );
};

export default Information;