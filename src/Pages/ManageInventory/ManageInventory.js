import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import Item from '../Shared/Item/Item';
import useItems from '../../hooks/useItems';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading/Loading';
import axios from 'axios';
import Pagination from '../Shared/Pagination/Pagination';
import useProfile from '../../hooks/useProfile';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ManageInventory = () => {
    //integration of React hooks
    const [showLoading, setShowLoading] = useState(false);
    const [noDataFound, setNoDataFound] = useState(false);
    const [filter, setFilter] = useState('All');
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const { brand } = useParams();
    const navigate = useNavigate();

    //integration of React Firebase hooks here
    const [user] = useAuthState(auth);

    //integration of custom hooks
    const [items, setItems] = useItems(brand, currentPage, 6);
    const [profile] = useProfile(user);

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [items]);

    useEffect(() => {
        const getItemsCount = async () => {
            let totalPages;

            if (!brand) {
                const { data } = await axios.get('https://guarded-cove-25404.herokuapp.com/itemsCount');
                totalPages = Math.ceil(data.count / 6);
            } else {
                const url = `https://guarded-cove-25404.herokuapp.com/itemsCountByBrand?brand=${brand}`;
                const { data } = await axios.get(url);
                totalPages = Math.ceil(data.countBrand / 6);
            }

            setPageCount(totalPages);
        }
        getItemsCount();
    }, [brand]);

    //setting filter from featured brands
    useEffect(() => {

        if (brand) {
            setFilter(brand);

            const url = `https://guarded-cove-25404.herokuapp.com/itemsByBrand?brand=${brand}&page=${currentPage}&size=${6}`;
            const SearchByBrands = async () => {
                const { data } = await axios.get(url);

                if (data.length === 0) {
                    setNoDataFound(true);
                } else {
                    setNoDataFound(false);
                }
                setItems(data);
            }
            SearchByBrands();
        } else {
            setFilter('All');
        }

    }, [brand, setItems, currentPage]);

    //event handler for delete item button sent through props
    const handleDeleteItem = async (id) => {

        setShowLoading(true);
        const url = `https://guarded-cove-25404.herokuapp.com/deleteItem/${id}`;
        await axios.delete(url);

        const updatedProfile = { ...profile, 'deleted': profile.deleted + 1 };

        const updateProfileURL = `https://guarded-cove-25404.herokuapp.com/updateProfile/${profile._id}`;
        await axios.put(updateProfileURL, updatedProfile);

        toast('Successfully Deleted Item!!!', {
            position: 'bottom-right'
        });
        const remainingItems = items.filter(item => item._id !== id);
        setItems(remainingItems);
        setShowLoading(false);

    }

    //rendering manage inventory component here
    return (
        <section>
            <PageTitle title={'Manage Inventory'} />
            <div className='w-[95%] md:w-4/5 mx-auto'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='flex flex-col md:flex-row'>
                        <h3 className='md:text-left font-semibold text-4xl mt-10'>Inventory Items</h3>
                        <h3 className='md:text-left font-semibold text-4xl md:ml-2 mt-0 md:mt-10 mb-10 md:mb-0'>({filter})</h3>
                    </div>
                    <div className='flex items-center'>
                        <button
                            onClick={() => navigate('/addInventoryItem')}
                            className='bg-gradient-to-r from-byteware-base-red to-byteware-light-red px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                            <FontAwesomeIcon icon={faCirclePlus} className='mr-3' />
                            Add New Item
                        </button>
                    </div>
                </div>
                {
                    (!noDataFound && items.length === 0) ?
                        <div className='h-[80vh] flex items-center justify-center'>
                            <Loading />
                        </div>
                        :
                        <>
                            {
                                noDataFound ?
                                    <div className='h-[60vh] flex items-center justify-center'>
                                        <h2 className='font-extrabold text-4xl md:text-6xl text-gray-300'>No Items Found!</h2>
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
            <Pagination
                pageCount={pageCount}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
            <div>
                {
                    showLoading &&
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

export default ManageInventory;