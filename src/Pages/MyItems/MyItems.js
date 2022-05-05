import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Item from '../Shared/Item/Item';
import Loading from '../Shared/Loading/Loading';
import PageTitle from '../Shared/PageTitle/PageTitle';

const MyItems = () => {
    //integration of React Firebase hooks here
    const [user] = useAuthState(auth);

    //integration of React hooks here
    const [items, setItems] = useState([]);
    const [showLoading, setShowLoading] = useState(false);
    const [showDeleteLoading, setShowDeleteLoading] = useState(false);
    const navigate = useNavigate();

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //fetching items by supplier here
    useEffect(() => {

        setShowLoading(true);

        const fetchMyItems = async () => {
            const url = `https://guarded-cove-25404.herokuapp.com/itemsBySupplier?email=${user.email}`;
            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                setItems(data);
                setShowLoading(false);
            } catch (error) {
                if (error.response.status === 401 || error.response.status === 403) {
                    toast('Access Denied!!! Please, Try To Login Again.', {
                        position: 'bottom-right'
                    });
                    signOut(auth);
                    navigate('/login');
                }
            }
        }
        fetchMyItems();

    }, [user.email, navigate]);

    //event handler for delete item button sent through props
    const handleDeleteItem = async (id) => {

        setShowDeleteLoading(true);
        const url = `https://guarded-cove-25404.herokuapp.com/deleteItem/${id}`;
        await axios.delete(url);

        toast('Successfully Deleted Item!!!', {
            position: 'bottom-right'
        });
        const remainingItems = items.filter(item => item._id !== id);
        setItems(remainingItems);
        setShowDeleteLoading(false);

    }

    //rendering my items component here
    return (
        <section>
            <PageTitle title={'My Items'} />

            <div className='w-[95%] md:w-4/5 mx-auto'>
                <h3 className='md:text-left font-semibold text-4xl my-10'>My Items</h3>
                {
                    showLoading ?
                        <div className='h-[80vh] flex items-center justify-center'>
                            <Loading />
                        </div>
                        :
                        <>
                            {
                                items.length === 0 ?
                                    <div className='h-[60vh] flex items-center justify-center'>
                                        <h2 className='font-extrabold text-4xl md:text-6xl text-gray-300'>No Items To Show Yet!</h2>
                                    </div>
                                    :
                                    <div className='grid grid-cols-1 md:grid-cols-3 mt-10 mb-20 gap-10'>
                                        {
                                            items.map(item => <Item
                                                key={item._id}
                                                item={item}
                                                handleDeleteItem={handleDeleteItem} />)
                                        }
                                    </div>
                            }
                        </>
                }
            </div>
            <div>
                {
                    showDeleteLoading &&
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <Loading />
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                }
            </div>
        </section>
    );
};

export default MyItems;