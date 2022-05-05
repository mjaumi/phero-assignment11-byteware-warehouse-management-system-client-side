import React from 'react';
import banner from '../../../images/banner.jpg';

const Banner = () => {
    //rendering banner component here
    return (
        <div className='w-[95%] md:w-4/5 mx-auto flex flex-col-reverse md:flex-row justify-between items-center py-5'>
            <div className='w-full md:w-1/2 mt-12 md:mt-0'>
                <h2 className='text-center md:text-left text-3xl md:text-6xl font-semibold'>Welcome to<br /><span className='font-extrabold text-byteware-light-red text-4xl md:text-8xl'>Byteware</span></h2>
                <p className='md:text-left mt-5 w-full md:w-4/5'>The largest laptop warehouse situated in Bangladesh. Where we handle each and every product with care so that we can satisfy our beloved customers.</p>
            </div>
            <div className='w-full md:w-1/2'>
                <img className='md:w-[90%] md:float-right' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;