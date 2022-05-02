import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect } from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Item from '../Shared/Item/Item';
import useItems from '../../hooks/useItems';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {
    //integration of custom hooks
    const [items, setItems] = useItems();

    //integration of React hooks
    const navigate = useNavigate();

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //event handler for delete item button sent through props
    const handleDeleteItem = id => {
        const url = `https://guarded-cove-25404.herokuapp.com/deleteItem/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                toast('Successfully Deleted Item!!!', {
                    position: 'bottom-right'
                });
                const remainingItems = items.filter(item => item._id !== id);
                setItems(remainingItems);
            });
    }

    //rendering manage inventory component here
    return (
        <section>
            <PageTitle title={'Manage Inventory'} />
            <div className='w-4/5 mx-auto'>
                <div className='flex justify-between'>
                    <h3 className='text-left font-semibold text-4xl my-10'>Inventory Items</h3>
                    <div className='flex items-center'>
                        <button
                            onClick={() => navigate('/addInventoryItem')}
                            className='bg-gradient-to-r from-byteware-base-red to-byteware-light-red px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                            <FontAwesomeIcon icon={faCirclePlus} className='mr-3' />
                            Add New Items
                        </button>
                    </div>
                </div>
                <div className='grid grid-cols-3 mt-10 mb-20 gap-10'>
                    {
                        items.map(item => <Item
                            key={item._id}
                            item={item}
                            handleDeleteItem={handleDeleteItem} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default ManageInventory;