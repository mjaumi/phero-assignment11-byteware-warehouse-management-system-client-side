import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import PageTItle from '../Shared/PageTitle/PageTItle';
import Item from '../Shared/Item/Item';

const ManageInventory = () => {

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    //rendering manage inventory component here
    return (
        <section>
            <PageTItle title={'Manage Inventory'} />
            <div className='w-4/5 mx-auto'>
                <div className='flex justify-between'>
                    <h3 className='text-left font-semibold text-4xl my-10'>Inventory Items</h3>
                    <div className='flex items-center'>
                        <button
                            className='bg-gradient-to-r from-byteware-base-red to-byteware-light-red px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                            <FontAwesomeIcon icon={faCirclePlus} className='mr-3' />
                            Add New Items
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-3 mt-10 mb-20 gap-10'>
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                    <Item />
                </div>
            </div>
        </section>
    );
};

export default ManageInventory;