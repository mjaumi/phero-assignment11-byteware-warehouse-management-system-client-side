import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import axios from 'axios';

const Signup = () => {
    //integration of React Firebase hooks here
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        creationError,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);
    const [sendEmailVerification, sending, verificationError] = useSendEmailVerification(auth);

    //integration of React hooks here
    const [errorMsg, setErrorMsg] = useState('');
    const [showToast, setShowToast] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    if (loading || updating || sending) {

    }

    useEffect(() => {
        if (creationError || updatingError || verificationError) {
            setErrorMsg('Failed to Create User. Please, Try Again.');
            setShowLoading(false);
        }
    }, [creationError, updatingError, verificationError]);

    if (user && !showToast) {
        toast('User Created Successfully!!!', {
            position: 'bottom-right'
        });
        toast('A Verification Email Is Sent. Please, Check Your Email.', {
            position: 'bottom-right'
        });
        setShowToast(true);
        navigate(from, { replace: true });
    }

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //event handler for sign up
    const handleSignup = async (event) => {
        event.preventDefault();
        const displayName = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;

        if (password === confirmPassword) {
            setShowLoading(true);
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName });
            await sendEmailVerification();

            const newProfile = {
                email,
                'added': 0,
                'deleted': 0,
                'delivered': 0
            }

            await axios.post('https://guarded-cove-25404.herokuapp.com/userProfile', newProfile);

            event.target.reset();
            window.scrollTo(0, 0);
            setShowLoading(false);
        } else {
            setErrorMsg('Your Given Password Mismatched!');
        }
    }

    //rendering sign up component here 
    return (
        <section className='bg-byteware-light-gray'>
            <PageTitle title={'Sign Up'} />
            <div className='w-[95%] md:w-4/5 mx-auto py-14 flex justify-center'>
                <div className='md:w-2/5 mx auto p-5 bg-white rounded-2xl shadow-2xl'>
                    <form onSubmit={handleSignup}>
                        <div className='text-left mb-5'>
                            <h4 className='text-3xl font-bold'>Sign Up</h4>
                            <p className='text-byteware-dark-gray'>Don't have an account? Create one here.</p>
                        </div>
                        <div className='mb-5 text-left'>
                            <label className='ml-2 text-lg' htmlFor="name">Name<span className='font-bold text-red-600 text-xl'>*</span></label>
                            <input
                                onChange={() => setErrorMsg('')}
                                className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='name' placeholder='Enter Your Name' required autoComplete='off' />
                        </div>
                        <div className='mb-5 text-left'>
                            <label className='ml-2 text-lg' htmlFor="email">Email<span className='font-bold text-red-600 text-xl'>*</span></label>
                            <input
                                onChange={() => setErrorMsg('')}
                                className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="email" name='email' placeholder='Enter Your Email' required autoComplete='off' />
                        </div>
                        <div className='mb-5 text-left'>
                            <label className='ml-2 text-lg' htmlFor="password">Password<span className='font-bold text-red-600 text-xl'>*</span></label>
                            <input
                                onChange={() => setErrorMsg('')}
                                className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="password" name='password' placeholder='Enter Your Password' required />
                        </div>
                        <div className='mb-2 text-left'>
                            <label className='ml-2 text-lg' htmlFor="confirmPassword">Confirm Password<span className='font-bold text-red-600 text-xl'>*</span></label>
                            <input
                                onChange={() => setErrorMsg('')}
                                className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="password" name='confirmPassword' placeholder='Re Enter Your Password' required />
                        </div>
                        <div>
                            <p className='text-red-600'>{errorMsg}</p>
                        </div>
                        <div className='mt-12 mb-2'>
                            <button
                                type='submit'
                                className='bg-gradient-to-r from-byteware-base-red to-byteware-light-red w-full py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                                <FontAwesomeIcon icon={faUser} className='mr-3' />
                                Sign Up
                            </button>
                        </div>
                        <div>
                            <p>Already have an account? <Link className='text-byteware-base-red underline hover:opacity-40 duration-300' to={'/login'}>Log In Now</Link></p>
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

export default Signup;