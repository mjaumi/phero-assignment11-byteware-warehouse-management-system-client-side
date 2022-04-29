import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import InventoryItem from '../InventoryItem/InventoryItem';

const InventoryItems = () => {
    return (
        <div className='mt-20 bg-byteware-light-gray py-10'>
            <div className='w-4/5 mx-auto'>
                <h3 className='text-left font-semibold text-4xl mb-10'>Inventory Items</h3>
                <div className='grid grid-cols-3 gap-10'>
                    <InventoryItem />
                    <InventoryItem />
                    <InventoryItem />
                    <InventoryItem />
                    <InventoryItem />
                    <InventoryItem />
                </div>
                <div className='mt-10 flex justify-end'>
                    <button className='font-semibold text-xl text-byteware-light-red hover:opacity-60 duration-300'>
                        Mange Inventories
                        <ArrowRightIcon className='ml-2 w-5 h-5 inline' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InventoryItems;