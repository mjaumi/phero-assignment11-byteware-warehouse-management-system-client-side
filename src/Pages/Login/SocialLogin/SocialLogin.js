import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import React, { useEffect, useState } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const SocialLogin = () => {
    //integration of React Firebase hooks here
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    //integration of React hooks here
    const [showLoading, setShowLoading] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    //Generating JWT when logged in with google
    useEffect(() => {

        const generateToken = async () => {
            if (user) {
                //fetching JWT token
                const { data } = await axios.post('https://guarded-cove-25404.herokuapp.com/getToken', { email: user.user.email });

                localStorage.setItem('accessToken', data.accessToken);
                toast('LogIn Successful!!!', {
                    position: 'bottom-right'
                });
                navigate(from, { replace: true });
            }
        }
        generateToken();

    }, [from, navigate, user]);

    if (loading) {

    }

    const handleLoginWithGoogle = async () => {
        setShowLoading(true);
        await signInWithGoogle();
        setShowLoading(false);
    }

    //rendering social log in component here
    return (
        <div>
            <div className='flex items-center mt-10'>
                <div className='w-full h-px bg-gray-400'></div>
                <p className='text-gray-400 mx-2'>OR</p>
                <div className='w-full h-px bg-gray-400'></div>
            </div>
            <div className='mt-10 mb-5'>
                <button
                    onClick={handleLoginWithGoogle}
                    className='border-2 border-byteware-base-red w-full py-3 rounded-xl font-semibold text-byteware-base-red hover:bg-byteware-base-red hover:text-byteware-white hover:drop-shadow-byteware-btn-shadow duration-300'>
                    <FontAwesomeIcon icon={faGoogle} className='mr-3' />
                    Log In With Google
                </button>
                <p className='my-2 text-red-600'>{error && 'Failed To Log In With Google.'}</p>
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
        </div>
    );
};

export default SocialLogin;