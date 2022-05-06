import React from 'react';
import { EmojiHappyIcon, CurrencyBangladeshiIcon } from '@heroicons/react/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop } from '@fortawesome/free-solid-svg-icons';
import useOverview from '../../../hooks/useOverview';
import Loading from '../../Shared/Loading/Loading';

const SalesOverview = () => {
    //integration of custom hooks here
    const [overview] = useOverview();

    //rendering sales overview component here
    return (
        <div className='py-20 bg-byteware-light-gray'>
            <div className='w-[95%] md:w-4/5 mx-auto'>
                <h3 className='md:text-left font-semibold text-4xl mb-10'>Sales Overview</h3>
                {
                    Object.keys(overview).length === 0 ?
                        <div className='h-[20vh] flex items-center justify-center'>
                            <Loading />
                        </div>
                        :
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-28'>
                            <div className='flex flex-col items-center bg-byteware-white p-7 rounded-2xl shadow-byte-shadow cursor-pointer hover:scale-125 duration-300'>
                                <EmojiHappyIcon className='w-14 h-14 text-byteware-light-red' />
                                <h2 className='mt-5 font-extrabold text-4xl'>{overview.totalCustomers}</h2>
                                <p className='text-byteware-dark-gray'>Happy Customers</p>
                            </div>
                            <div className='flex flex-col items-center bg-byteware-white p-7 rounded-2xl shadow-byte-shadow cursor-pointer hover:scale-125 duration-300'>
                                <FontAwesomeIcon icon={faLaptop} className='w-14 h-14 text-byteware-light-red' />
                                <h2 className='mt-5 font-extrabold text-4xl'>{overview.laptopSold}</h2>
                                <p className='text-byteware-dark-gray'>Laptops Sold</p>
                            </div>
                            <div className='flex flex-col items-center bg-byteware-white p-7 rounded-2xl shadow-byte-shadow cursor-pointer hover:scale-125 duration-300'>
                                <CurrencyBangladeshiIcon className='w-14 h-14 text-byteware-light-red' />
                                <h2 className='mt-5 font-extrabold text-4xl'>৳{overview.revenue}</h2>
                                <p className='text-byteware-dark-gray'>Worth of Revenue</p>
                            </div>
                        </div>
                }
            </div>
        </div>
    );
};

export default SalesOverview;