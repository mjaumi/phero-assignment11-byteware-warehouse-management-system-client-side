import React from 'react';
import { Link } from 'react-router-dom';
import acer from '../../../images/Acer-logo.png';
import asus from '../../../images/ASUS-logo.png';
import dell from '../../../images/Dell-logo.png';
import lenovo from '../../../images/Lenovo-logo.png';

const FeaturedBrands = () => {
    //rendering featured brands component here
    return (
        <div className='my-20 py-10'>
            <div className='w-4/5 mx-auto'>
                <h3 className='md:text-left font-semibold text-4xl mb-20 md:mb-10'>Featured Brands</h3>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-28'>
                    <div className='opacity-40 my-auto cursor-pointer hover:opacity-100 duration-300 hover:scale-110'>
                        <Link to='/manageInventory/Acer'>
                            <img src={acer} alt="" />
                        </Link>
                    </div>
                    <div className='opacity-40 my-auto cursor-pointer hover:opacity-100 duration-300 hover:scale-110'>
                        <Link to='/manageInventory/Asus'>
                            <img src={asus} alt="" />
                        </Link>
                    </div>
                    <div className='opacity-40 my-auto cursor-pointer hover:opacity-100 duration-300 hover:scale-110'>
                        <Link to='/manageInventory/Dell'>
                            <img className='h-[90%]' src={dell} alt="" />
                        </Link>
                    </div>
                    <div className='opacity-40 my-auto cursor-pointer hover:opacity-100 duration-300 hover:scale-110'>
                        <Link to='/manageInventory/Lenovo'>
                            <img src={lenovo} alt="" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturedBrands;