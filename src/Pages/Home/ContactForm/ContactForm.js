import React from 'react';
import backImg from '../../../assets/images/appointment.png';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ContactForm = () => {
    return (
        <section className='text-center py-16 mt-12'
            style={
                {
                    background: `url(${backImg})`
                }
            }
        >
            <div>
                <div>
                    <h3 className='text-primary text-lg font-bold'>Contact Form</h3>
                    <h1 className='text-2xl text-white'>Stay connected with us</h1>
                </div>

                <form className='flex flex-col gap-3  justify-center items-center mt-10'>
                    <input className="input  input-sm input-bordered w-full max-w-xs" type="email" name="email" id="email" placeholder='Email Address' />
                    <input className="input  input-sm input-bordered w-full max-w-xs" type="text" name="subject" id="subject" placeholder='Subject' />
                    <textarea placeholder="Your message" className="textarea textarea-bordered textarea-md w-full max-w-xs mb-4" ></textarea>
                    <PrimaryButton>Submit</PrimaryButton>
                </form>
            </div>
        </section>
    );
};

export default ContactForm;