import React from 'react';
import "../Banner/Banner.css";
import backImg from '../../../assets/images/chair.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const Banner = () => {
    return (
        <div className="hero banner py-32">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={backImg} className="w-1/2 rounded-lg shadow-2xl" alt='' />
                <div className='mr-4'>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Welcome to Doctors Portal, your smile's best friend. We offer top-notch dental care in a warm, inviting atmosphere. Let us help you achieve your dream smile."</p>
                    <PrimaryButton>Getting Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;