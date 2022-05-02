import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const SocialLogin = () => {
    //integration of React Firebase hooks here
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (user) {

    }

    if (loading) {

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
                    onClick={() => signInWithGoogle()}
                    className='border-2 border-byteware-base-red w-full py-3 rounded-xl font-semibold text-byteware-base-red hover:bg-byteware-base-red hover:text-byteware-white hover:drop-shadow-byteware-btn-shadow duration-300'>
                    <FontAwesomeIcon icon={faGoogle} className='mr-3' />
                    Log In With Google
                </button>
                <p className='my-2 text-red-600'>{error && 'Failed To Log In With Google.'}</p>
            </div>
        </div>
    );
};

export default SocialLogin;