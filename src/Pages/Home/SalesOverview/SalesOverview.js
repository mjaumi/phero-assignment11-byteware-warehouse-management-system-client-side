import React from 'react';
import { EmojiHappyIcon, CurrencyBangladeshiIcon } from '@heroicons/react/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';

const SalesOverview = () => {
    //rendering sales overview component here
    return (
        <div className='py-20 bg-byteware-light-gray'>
            <div className='w-4/5 mx-auto'>
                <h3 className='text-left font-semibold text-4xl mb-10'>Sales Overview</h3>
                <div className='grid grid-cols-3 gap-28'>
                    <div className='flex flex-col items-center bg-byteware-white p-7 rounded-2xl shadow-2xl cursor-pointer hover:scale-125 duration-300'>
                        <EmojiHappyIcon className='w-14 h-14 text-byteware-light-red' />
                        <h2 className='mt-5 font-extrabold text-4xl'>50</h2>
                        <p className='text-byteware-dark-gray'>Happy Customers</p>
                    </div>
                    <div className='flex flex-col items-center bg-byteware-white p-7 rounded-2xl shadow-2xl cursor-pointer hover:scale-125 duration-300'>
                        <FontAwesomeIcon icon={faLaptop} className='w-14 h-14 text-byteware-light-red' />
                        <h2 className='mt-5 font-extrabold text-4xl'>100</h2>
                        <p className='text-byteware-dark-gray'>Laptops Sold</p>
                    </div>
                    <div className='flex flex-col items-center bg-byteware-white p-7 rounded-2xl shadow-2xl cursor-pointer hover:scale-125 duration-300'>
                        <CurrencyBangladeshiIcon className='w-14 h-14 text-byteware-light-red' />
                        <h2 className='mt-5 font-extrabold text-4xl'>৳7500000</h2>
                        <p className='text-byteware-dark-gray'>Worth of Revenue</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SalesOverview;