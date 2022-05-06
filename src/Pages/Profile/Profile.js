import React, { useEffect, useRef, useState } from 'react';
import { PlusCircleIcon } from '@heroicons/react/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faTruckLoading, faEdit, faMailForward, faMultiply, faBan, faCheck } from '@fortawesome/free-solid-svg-icons';
import PageTitle from '../Shared/PageTitle/PageTitle';
import { useAuthState, useSendEmailVerification, useSendPasswordResetEmail, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';
import useProfile from '../../hooks/useProfile';

const Profile = () => {
    //integration of React Firebase hooks here
    const [user] = useAuthState(auth);
    const [sendEmailVerification, sendingVerifyMail, verificationError] = useSendEmailVerification(auth);
    const [sendPasswordResetEmail, sendingResetMail, passwordResetError] = useSendPasswordResetEmail(auth);
    const [updateProfile, updating, updatingError] = useUpdateProfile(auth);

    //integration of React hooks here
    const [showEditNameModal, setShowEditNameModal] = useState(false);
    const newNameRef = useRef();

    //integration of custom hooks here
    const [profile] = useProfile(user);

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //handling update profile name event
    const handleUpdateProfileName = async () => {
        const displayName = newNameRef.current.value;

        await updateProfile({ displayName });

        if (updatingError) {
            toast('An Error Occurred. Please, Try Again.', {
                position: 'bottom-right'
            });
        } else {
            toast('Updated Name Successfully!!!', {
                position: 'bottom-right'
            });
        }
    }

    //handling verify email event
    const handleVerifyEmail = async () => {
        await sendEmailVerification();

        if (verificationError) {
            toast('An Error Occurred. Please, Try Again.', {
                position: 'bottom-right'
            });
        } else {
            toast('A Verification Email Is Sent. Please, Check Your Email.', {
                position: 'bottom-right'
            });
        }
    }

    //handling change password event
    const handleChangePassword = async () => {
        await sendPasswordResetEmail(user.email);

        if (passwordResetError) {
            toast('An Error Occurred. Please, Try Again.', {
                position: 'bottom-right'
            });
        } else {
            toast('An Email Is Sent. Please, Check Your Email.', {
                position: 'bottom-right'
            });
        }
    }

    //rendering the profile component here
    return (
        <section>
            <PageTitle title={'Profile'} />
            <div className='w-[95%] md:w-4/5 mx-auto'>
                <h3 className='md:text-left font-semibold text-4xl mt-10'>{user.displayName}</h3>
                <p className='md:text-left'>Email: {user.email}</p>
                <div className='my-12'>
                    <h4 className='md:text-left font-semibold text-2xl mb-5'>Profile Overview</h4>
                    {
                        Object.keys(profile).length === 0 ?
                            <div className='h-[20vh] flex items-center justify-center'>
                                <Loading />
                            </div>
                            :
                            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-28'>
                                <div className='flex flex-col items-center bg-byteware-white p-7 rounded-2xl shadow-byte-shadow cursor-pointer hover:scale-125 duration-300'>
                                    <PlusCircleIcon className='w-14 h-14 text-byteware-light-red' />
                                    <h2 className='mt-5 font-extrabold text-4xl'>{profile.added}</h2>
                                    <p className='text-byteware-dark-gray'>Items Added</p>
                                </div>
                                <div className='flex flex-col items-center bg-byteware-white p-7 rounded-2xl shadow-byte-shadow cursor-pointer hover:scale-125 duration-300'>
                                    <FontAwesomeIcon icon={faTrashCan} className='w-14 h-14 text-byteware-light-red' />
                                    <h2 className='mt-5 font-extrabold text-4xl'>{profile.deleted}</h2>
                                    <p className='text-byteware-dark-gray'>Items Deleted</p>
                                </div>
                                <div className='flex flex-col items-center bg-byteware-white p-7 rounded-2xl shadow-byte-shadow cursor-pointer hover:scale-125 duration-300'>
                                    <FontAwesomeIcon icon={faTruckLoading} className='w-14 h-14 text-byteware-light-red' />
                                    <h2 className='mt-5 font-extrabold text-4xl'>{profile.delivered}</h2>
                                    <p className='text-byteware-dark-gray'>Laptops Delivered</p>
                                </div>
                            </div>
                    }
                </div>
                <div className='my-12'>
                    <h4 className='md:text-left font-semibold text-2xl mb-5'>Manage Profile</h4>
                    <div>
                        <div className='flex flex-col md:flex-row justify-between items-center border-b border-gray-300 p-2'>
                            <p className='text-xl text-gray-400 mt-4 md:mt-0'>Profile Name: <span className='text-black font-semibold'>{user.displayName}</span></p>
                            <button
                                onClick={() => setShowEditNameModal(true)}
                                className='w-4/5 md:w-fit bg-gradient-to-r from-byteware-base-red to-byteware-light-red px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300 disabled:opacity-30 disabled:cursor-not-allowed my-4 md:my-0'>
                                <FontAwesomeIcon icon={faEdit} className='mr-3' />
                                Edit Name
                            </button>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between items-center border-b border-gray-300 p-2'>
                            <p className='text-xl text-gray-400 mt-4 md:mt-0'>Email Verification Status: <span className={`font-semibold ${user.emailVerified ? 'text-green-700' : 'text-red-700'}`}>{user.emailVerified ? 'Verified' : 'Not Verified'}</span></p>
                            <button
                                onClick={handleVerifyEmail}
                                className='w-4/5 md:w-fit bg-gradient-to-r from-byteware-base-red to-byteware-light-red px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300 disabled:opacity-30 disabled:cursor-not-allowed my-4 md:my-0' disabled={user.emailVerified}>
                                <FontAwesomeIcon icon={faMailForward} className='mr-3' />
                                Verify Email
                            </button>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between items-center border-b border-gray-300 p-2'>
                            <p className='text-xl text-gray-400 mt-4 md:mt-0'>Password: <span className='text-black font-semibold'>••••••••••••••••••</span></p>
                            <button
                                onClick={handleChangePassword}
                                className='w-4/5 md:w-fit bg-gradient-to-r from-byteware-base-red to-byteware-light-red px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300 disabled:opacity-30 disabled:cursor-not-allowed my-4 md:my-0'>
                                <FontAwesomeIcon icon={faMailForward} className='mr-3' />
                                Change Password
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {
                    (sendingVerifyMail || sendingResetMail || updating) &&
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
            <div>
                {showEditNameModal ? (
                    <>
                        <div
                            className="w-[90%] mx-auto md:w-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Change Name
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-40 hover:opacity-100 duration-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowEditNameModal(false)}
                                        >
                                            <FontAwesomeIcon icon={faMultiply} className='w-6 h-6' />
                                        </button>
                                    </div>
                                    <div className="relative p-6 flex-auto">
                                        <div>
                                            <div className='mb-5 text-left'>
                                                <label className='ml-2 text-lg' htmlFor="newName">New  Name<span className='font-bold text-red-600 text-xl'>*</span></label>
                                                <input ref={newNameRef} className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='newName' placeholder='Enter Your New Name' required autoComplete='off' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            onClick={() => setShowEditNameModal(false)}
                                            className='bg-red-600 px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                                            <FontAwesomeIcon icon={faBan} className='mr-3' />
                                            Cancel
                                        </button>
                                        <button
                                            onClick={() => {
                                                handleUpdateProfileName();
                                                setShowEditNameModal(false);
                                            }}
                                            className='ml-5 bg-green-800 px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                                            <FontAwesomeIcon icon={faCheck} className='mr-3' />
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </div>
        </section>
    );
};

export default Profile;