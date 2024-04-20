import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const AppointmentOption = ({ appointmentOption, setTreatment }) => {
    const { name, slots } = appointmentOption;

    return (
        <div className="card shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-2xl text-center font-bold text-secondary">{name}</h2>
                <p> {slots.length > 0 ? slots[0] : 'Try Another Day'}</p>
                <p> {slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">

                    <label
                        disabled={slots.length === 0}
                        htmlFor="booking-modal"
                        onClick={() => setTreatment(appointmentOption)}
                        className="btn text-white btn-primary">Book Appointment
                    </label>

                </div>
            </div>
        </div>
    );
};

export default AppointmentOption;