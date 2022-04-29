import React from 'react';
import banner from '../../../images/banner.jpg';

const Banner = () => {
    //rendering banner component here
    return (
        <div className='w-4/5 mx-auto flex justify-between items-center py-5'>
            <div className='w-1/2'>
                <h2 className='text-left text-6xl font-semibold'>Welcome to<br /><span className='font-extrabold text-byteware-light-red text-8xl'>Byteware</span></h2>
                <p className='text-left mt-5 w-4/5'>The largest laptop warehouse situated in Bangladesh. Where we handle each and every product with care so that we can satisfy our beloved customers.</p>
            </div>
            <div className='w-1/2'>
                <img className='w-[90%] float-right' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;