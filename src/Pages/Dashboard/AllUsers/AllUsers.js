import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast, { LoaderIcon } from 'react-hot-toast';
import Loading from '../../Shared/Loading/Loading';

const AllUsers = () => {
    const { data: users = [], isPending, refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users');
            const data = await res.json();
            return data;
        }
    });

    if (isPending) {
        return <Loading></Loading>
    }



    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Successfully added as an Admin')
                    refetch();
                }
                console.log(data);
            })
    }

    return (
        <div>
            <h3>All Users</h3>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Admin</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, i) => <tr key={user?._id}>
                                <th> {i + 1} </th>
                                <td> {user?.name} </td>
                                <td> {user?.email} </td>

                                <td>
                                    {
                                        user?.role !== 'admin' && <button onClick={() => handleMakeAdmin(user?._id)} className='btn btn-xs btn-primary'>Make Admin</button>
                                    }
                                </td>

                                <td> <button className='btn btn-xs btn-error'>Delete</button> </td>


                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllUsers;