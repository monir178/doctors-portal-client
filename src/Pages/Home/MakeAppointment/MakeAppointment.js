import React from 'react';
import doctor from '../../../assets/images/doctor-small.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className='mt-12 md:mt-60 '
            style={{
                background: `url(${appointment})`
            }}
        >
            <div className="hero px-8 py-10 lg:py-0">
                <div className=" flex items-center flex-col lg:flex-row">
                    <img
                        src={doctor} className="-mt-40  hidden md:block lg:w-1/2 " alt='' />
                    <div>
                        <p className='text-primary font-bold text-lg mb-4'>Appointment</p>
                        <h1 className=" text-white text-4xl font-bold">Make an appointment Today</h1>
                        <p className="py-6 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Appointment</PrimaryButton>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MakeAppointment;