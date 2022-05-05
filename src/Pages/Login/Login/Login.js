import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import axios from 'axios';

const Login = () => {
    //integration of React Firebase hooks here
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        logInError,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, passwordResetError] = useSendPasswordResetEmail(auth);

    //integration of React hooks here
    const [showLoading, setShowLoading] = useState(false);
    const emailRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    //showing login successful toast
    if (user) {
        toast('LogIn Successful!!!', {
            position: 'bottom-right'
        });
        navigate(from, { replace: true });
    }

    if (loading || sending) {

    }

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //event handler for log in
    const handleLogin = async (event) => {

        setShowLoading(true);
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password);

        //fetching JWT token
        const { data } = await axios.post('https://guarded-cove-25404.herokuapp.com/getToken', { email });

        localStorage.setItem('accessToken', data.accessToken);
        event.target.reset();
        window.scrollTo(0, 0);
        setShowLoading(false);
    }

    //handling forget password email sending 
    const handleResetPassword = async () => {

        if (emailRef.current.value) {
            setShowLoading(true);
            await sendPasswordResetEmail(emailRef.current.value);
            toast('Password Reset Email Has Been Sent!!!', {
                position: 'bottom-right'
            });
            setShowLoading(false);
        } else {
            toast('Please, Insert Your Email.', {
                position: 'bottom-right'
            });
        }
    }

    //rendering the log in component here
    return (
        <section className='bg-byteware-light-gray'>
            <PageTitle title={'Log In'} />
            <div className='w-[95%] md:w-4/5 mx-auto py-14 flex justify-center'>
                <div className='md:w-2/5 mx auto p-5 bg-white rounded-2xl shadow-2xl'>
                    <form onSubmit={handleLogin}>
                        <div className='text-left mb-5'>
                            <h4 className='text-3xl font-bold'>Log In</h4>
                            <p className='text-byteware-dark-gray'>Already have an account? Log in to your account here.</p>
                        </div>
                        <div className='mb-5 text-left'>
                            <label className='ml-2 text-lg' htmlFor="email">Email<span className='font-bold text-red-600 text-xl'>*</span></label>
                            <input ref={emailRef} className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="email" name='email' placeholder='Enter Your Email' required autoComplete='off' />
                        </div>
                        <div className='mb-2 text-left'>
                            <label className='ml-2 text-lg' htmlFor="password">Password<span className='font-bold text-red-600 text-xl'>*</span></label>
                            <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="password" name='password' placeholder='Enter Your Password' required />
                        </div>
                        <div>
                            <p className='text-red-600'>{logInError && 'Invalid Email Or Password'}</p>
                            <p className='text-red-600'>{passwordResetError && 'Failed To Reset The Password'}</p>
                        </div>
                        <div className='flex justify-end'>
                            <button
                                onClick={handleResetPassword}
                                type='button'
                                className='text-byteware-light-red underline hover:opacity-40 duration-300'>Forgot Password?</button>
                        </div>
                        <div className='mt-10 mb-2'>
                            <button
                                type='submit'
                                className='bg-gradient-to-r from-byteware-base-red to-byteware-light-red w-full py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                                <FontAwesomeIcon icon={faArrowRightToBracket} className='mr-3' />
                                Log In
                            </button>
                        </div>
                        <div>
                            <p>Don't have an account? <Link className='text-byteware-base-red underline hover:opacity-40 duration-300' to={'/signup'}>Register Now</Link></p>
                        </div>
                    </form>
                    <SocialLogin />
                </div>
            </div>
            <div>
                {
                    showLoading &&
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <Loading />
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                }
            </div>
        </section>
    );
};

export default Login;