import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateLeft } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import PageTitle from '../PageTitle/PageTitle';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    //integration of React hooks
    const navigate = useNavigate();

    //rendering page not found component here
    return (
        <section>
            <PageTitle title={'404 Page Not Found'} />
            <div className='min-h-[70vh] flex flex-col justify-center items-center'>
                <h1 className='font-black text-6xl md:text-8xl text-byteware-base-red'>404</h1>
                <h4 className='mt-5 font-semibold text-2xl md:text-3xl'>Page Not Found!</h4>
                <p className='mb-10 w-4/5 md:w-full text-base md:text-lg'>Whoops, Looks Like The Page You Are Looking For Does Not Exists.</p>
                <button
                    onClick={() => navigate('/')}
                    className='bg-gradient-to-r from-byteware-base-red to-byteware-light-red px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                    <FontAwesomeIcon icon={faArrowRotateLeft} className='mr-3' />
                    Return To HomePage
                </button>
            </div>
        </section>
    );
};

export default NotFound;