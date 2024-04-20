import { format } from 'date-fns';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import toast from 'react-hot-toast';

const BookingModal = ({ treatment, selectedDate, setTreatment, refetch }) => {
    const { user } = useContext(AuthContext);

    // treatment is just another name of appointment options with name, slots, _id. You can check it in AppointmentOptions component. 
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: patientName,
            slot,
            email,
            phone,
        }

        // TO DO: send data to the server
        // and once data is saved then close the modal 
        // and display success toast

        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast.success('Booking Confirmed')
                    refetch();
                }
                else {
                    toast.error(data.message);
                }
            })
    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 mt-10'>
                        <input type="text"
                            value={date}
                            disabled
                            className="input w-full   input-bordered" />
                        <select name='slot' className="select select-bordered w-full ">

                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}> {slot} </option>)
                            }
                        </select>

                        <input name='name' type="text" placeholder="Your Name" defaultValue={user?.displayName} className="input w-full  input-bordered " disabled />
                        <input name='email' type="text" defaultValue={user?.email} placeholder="Email Address" className="input w-full  input-bordered " disabled />
                        <input name='phone' type="tel" placeholder="Phone Number" className="input w-full  input-bordered " />
                        <br />
                        <input className='btn btn-accent w-full  input-bordered ' type="submit" value="Submit" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;