import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import { useQuery } from '@tanstack/react-query';
import Loading from '../../Shared/Loading/Loading';

const MyAppointment = () => {
    const { user } = useContext(AuthContext);

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    const { data: bookings, isLoading } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            console.log("query result", data);
            return data;

        }
    })

    if (isLoading) {
        return <Loading />
    }

    if (!Array.isArray(bookings) || bookings.length === 0) {
        return <p className='text-3xl font-semibold text-primary'>You have no appointments.</p>;
    }

    return (
        <div>
            <h3 className='text-3xl mb-5'>My Appointments</h3>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead className='bg-base-200'>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Treatment</th>
                            <th>Date</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bookings.map((booking, i) => <tr key={booking?._id}>
                                <th> {i + 1} </th>
                                <td> {booking?.patient} </td>
                                <td> {booking?.treatment} </td>
                                <td> {booking?.appointmentDate} </td>
                                <td> {booking?.slot} </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyAppointment;