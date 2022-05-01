import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/solid';
import InventoryItem from '../InventoryItem/InventoryItem';
import { useNavigate } from 'react-router-dom';
import useItems from '../../../hooks/useItems';

const InventoryItems = () => {
    //integration of React hooks
    const navigate = useNavigate();

    //integration of custom hooks
    const [items] = useItems();

    //rendering inventory items component here
    return (
        <div className='mt-20 bg-byteware-light-gray py-10'>
            <div className='w-4/5 mx-auto'>
                <h3 className='text-left font-semibold text-4xl mb-10'>Inventory Items</h3>
                <div className='grid grid-cols-3 gap-10'>
                    {
                        items.slice(0, 6).map(item => <InventoryItem key={item._id} item={item} />)
                    }
                </div>
                <div className='mt-10 flex justify-end'>
                    <button
                        onClick={() => navigate('/manageInventory')}
                        className='font-semibold text-xl text-byteware-light-red hover:opacity-60 duration-300'>
                        Mange Inventories
                        <ArrowRightIcon className='ml-2 w-5 h-5 inline' />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InventoryItems;