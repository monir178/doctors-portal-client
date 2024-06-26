import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState('');
    const [createdUserEmail, setCreatedUserEmail] = useState('');

    const [token] = useToken(createdUserEmail);

    const navigate = useNavigate();


    useEffect(() => {
        if (token) {
            navigate('/');
        }
    }, [token, navigate]);


    const handleSignUp = data => {
        // console.log(data);
        // console.log(errors);
        setSignUpError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success("User Created Successfully")
                // handleEmailVerification()
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        // console.log("user updated");
                        saveUser(data.name, data.email);
                    })
                    .catch(err => console.log(err))

            })
            .catch(err => {
                setSignUpError(err.message)
                console.log(err)
            })
    }

    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log('saveUserData', data);
                setCreatedUserEmail(email);

            })
    }




    // // Email Verification
    // const handleEmailVerification = () => {
    //     verifyEmail()
    //         .then(() => { })
    //         .catch(error => console.error(error))
    // }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center mb-7'>Sign Up</h2>

                <form onSubmit={handleSubmit(handleSignUp)}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">   <span className="label-text">Name</span> </label>
                        <input type='text'
                            {...register("name", {
                                required: "Name is required"
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.name && <p className='text-red-600'> <small> {errors.name?.message} </small> </p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">   <span className="label-text">Email</span> </label>
                        <input type='email'
                            {...register("email", {
                                required: true
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.email && <p className='text-red-600'> <small> {errors.email?.message} </small> </p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">   <span className="label-text">Password</span> </label>
                        <input type='password'
                            {...register("password", {
                                required: "Password is required",
                                minLength: { value: 6, message: "Password must be 6 characters long" },
                                pattern: {
                                    value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                                    message: 'Password must have uppercase, number and special character.'
                                }
                            })}
                            className="input input-bordered w-full max-w-xs"
                        />
                        {errors.password && <p className='text-red-600'> <small>{errors.password?.message}</small> </p>}

                    </div>
                    <input className='btn btn-accent mt-5 w-full' value="Sign Up" type="submit" />
                    {signUpError && <p className='text-red-600'> {signUpError} </p>}
                </form>
                <p className='my-3'>Already have an account? <Link className='text-secondary text-sm' to="/login">Please Login</Link> </p>
                <div className="divider">OR</div>
                <button className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default SignUp;