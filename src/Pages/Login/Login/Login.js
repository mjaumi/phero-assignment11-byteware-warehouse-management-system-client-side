import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

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
    const [showToast, setShowToast] = useState(false);
    const emailRef = useRef();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    //showing login successful toast
    if (user && !showToast) {
        toast('LogIn Successful!!!', {
            position: 'bottom-right'
        });
        setShowToast(true);
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
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;

        await signInWithEmailAndPassword(email, password);
        event.target.reset();
        window.scrollTo(0, 0);
    }

    const handleResetPassword = async () => {
        if (emailRef.current.value) {
            await sendPasswordResetEmail(emailRef.current.value);
            toast('Password Reset Email Has Been Sent!!!', {
                position: 'bottom-right'
            });
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
            <div className='w-4/5 mx-auto py-14 flex justify-center'>
                <div className='w-2/5 mx auto p-5 bg-white rounded-2xl shadow-2xl'>
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
        </section>
    );
};

export default Login;