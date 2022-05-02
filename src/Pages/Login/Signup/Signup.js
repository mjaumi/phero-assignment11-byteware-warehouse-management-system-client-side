import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

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

    if (loading || updating || sending) {

    }

    if (user && !showToast) {
        toast('User Created Successfully!!!', {
            position: 'bottom-right'
        });
        setShowToast(true);
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
            await createUserWithEmailAndPassword(email, password);
            await updateProfile({ displayName });

            await sendEmailVerification();
            toast('A Verification Email Is Sent. Please, Check Your Email.', {
                position: 'bottom-right'
            });

            event.target.reset();
            window.scrollTo(0, 0);
        } else {
            setErrorMsg('Your Given Password Mismatched!');
        }
    }

    //rendering sign up component here 
    return (
        <section className='bg-byteware-light-gray'>
            <PageTitle title={'Sign Up'} />
            <div className='w-4/5 mx-auto py-14 flex justify-center'>
                <div className='w-2/5 mx auto p-5 bg-white rounded-2xl shadow-2xl'>
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
                            <p className='text-red-600'>{creationError && 'Failed to Create User. Please, Try Again.'}</p>
                            <p className='text-red-600'>{updatingError && 'Failed to Update Username. Please, Try Again.'}</p>
                            <p className='text-red-600'>{verificationError && 'Failed to Verify Email. Please, Try Again.'}</p>
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
        </section>
    );
};

export default Signup;