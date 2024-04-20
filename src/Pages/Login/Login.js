import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import useToken from '../../hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { signIn, providerLogin, resetPassword } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');

    const [loginUserEmail, setLoginUserEmail] = useState('');
    const [token] = useToken(loginUserEmail);

    const [data, setData] = useState({
        email: '',
    })

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate]);

    // Email sign In
    const handleLogin = data => {
        // console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginUserEmail(data.email);


            })
            .catch(err => {
                console.log(err.message)
                setLoginError(err.message);

            })
    }

    // google sign In
    const googleProvider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);

                navigate(from, { replace: true });


            })
            .catch(err => console.error(err));
    }




    // reset password 
    const handleForgotPassword = (formData) => {
        resetPassword(formData.email)
            .then(() => {
                toast.success('Password reset email sent! Check your inbox.')
            })
            .catch(error => toast.error(error.message))
    };




    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7'>
                <h2 className='text-xl text-center mb-7'>Login</h2>

                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">   <span className="label-text">Email</span> </label>
                        <input type='email' onChange={e => setData({ ...data, email: e.target.value })} className="input input-bordered w-full max-w-xs" autoComplete="username"
                            {...register("email",
                                { required: "Email Address is required" }
                            )}
                        />
                        {errors.email && <p className='text-red-600'> <small>
                            {errors.email?.message}
                        </small> </p>}

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">   <span className="label-text">Password</span> </label>
                        <input type='password' autoComplete="current-password" className="input input-bordered w-full max-w-xs"
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Password must be 6 characters or longer' }

                                }
                            )} />
                        {errors.password && <p className='text-red-600'> <small>
                            {errors.password?.message}
                        </small> </p>}

                    </div>

                    <input className='btn btn-accent w-full mt-7' value="Login" type="submit" />
                    <div>
                        {loginError && <p className='text-red-600'> {loginError} </p>}
                    </div>
                </form>

                <form onSubmit={handleSubmit(handleForgotPassword)}>
                    <button type="submit" className="my-4 text-primary hover:underline">
                        Forgot Password?
                    </button>
                </form>



                <p className='my-3'>New to Doctor's Portal? <Link className='text-secondary text-sm' to="/signup"> Create New Account</Link> </p>
                <div className="divider">OR</div>
                <button onClick={handleGoogleSignIn} className="btn btn-outline w-full">CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Login;