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

const ManageInventory = () => {
    //integration of React hooks
    const [showLoading, setShowLoading] = useState(false);
    const [noDataFound, setNoDataFound] = useState(false);
    const [filter, setFilter] = useState('All');
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const { brand } = useParams();
    const navigate = useNavigate();

    //integration of custom hooks
    const [items, setItems] = useItems(brand, currentPage, 3);

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        const getItemsCount = async () => {
            let totalPages;

            if (!brand) {
                const { data } = await axios.get('https://guarded-cove-25404.herokuapp.com/itemsCount');
                totalPages = Math.ceil(data.count / 3);
            } else {
                const url = `https://guarded-cove-25404.herokuapp.com/itemsCountByBrand?brand=${brand}`;
                const { data } = await axios.get(url);
                totalPages = Math.ceil(data.countBrand / 3);
            }

            setPageCount(totalPages);
        }
        getItemsCount();
    }, [brand]);

    //setting filter from featured brands
    useEffect(() => {

        if (brand) {
            setFilter(brand);

            const url = `https://guarded-cove-25404.herokuapp.com/itemsByBrand?brand=${brand}&page=${currentPage}&size=${3}`;
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
                            Add New Items
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
            <div className='my-10'>
                {
                    [...Array(pageCount).keys()].map(pageNumber => <button
                        key={pageNumber}
                        className={`font-semibold border-2 border-byteware-base-red w-10 h-10 rounded-full ml-5 hover:text-byteware-base-red duration-300 ${currentPage === pageNumber ? 'bg-byteware-base-red text-white hover:text-white' : ''}`}
                        onClick={() => setCurrentPage(pageNumber)}
                    >{pageNumber + 1}</button>)
                }
            </div>
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