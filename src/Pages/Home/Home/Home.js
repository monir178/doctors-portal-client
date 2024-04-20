import React from 'react';
import Banner from '../Banner/Banner';
import Information from '../Information/Information';
import ServiceCards from './ServiceCards/ServiceCards';
import Treatment from '../Treatment/Treatment';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../Testimonial/Testimonial';
import ContactForm from '../ContactForm/ContactForm';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Information></Information>
            <ServiceCards></ServiceCards>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Home;