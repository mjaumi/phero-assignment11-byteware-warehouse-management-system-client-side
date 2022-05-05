import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckMoving, faWindowRestore, faWarehouse, faMultiply, faCheck, faBan } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Loading from '../Shared/Loading/Loading';
import axios from 'axios';
import useOverview from '../../hooks/useOverview';

const Inventory = () => {
    //integration of React hooks
    const [item, setItem] = useState({});
    const [showDeliveredModal, setShowDeliveredModal] = useState(false);
    const [showRestockModal, setShowRestockModal] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const navigate = useNavigate();
    const { id } = useParams();

    //integration of custom hooks
    const [overview] = useOverview();

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //fetching individual item details from database
    useEffect(() => {

        const url = `https://guarded-cove-25404.herokuapp.com/item/${id}`;
        const fetchItem = async () => {
            const { data } = await axios.get(url);
            setItem(data);
        }
        fetchItem();

    }, [id]);

    //event handler for restock item form
    const handleRestockItem = event => {
        event.preventDefault();
        const quantity = parseInt(event.target.quantity.value);
        if (!isNaN(quantity) && quantity > 0) {
            updateQuantity(quantity);
        } else {
            toast('Invalid Input', {
                position: 'bottom-right'
            });
        }
        setShowRestockModal(false);
        event.target.reset();
        window.scrollTo(0, 0);
    }

    //updating the quantity of items when delivered and restocked
    const updateQuantity = async (unit) => {

        setShowLoading(true);
        const newQuantity = item.quantity + unit;

        const updateURL = `https://guarded-cove-25404.herokuapp.com/updateItem/${id}`;
        await axios.put(updateURL, { quantity: newQuantity });

        const reloadItemURL = `https://guarded-cove-25404.herokuapp.com/item/${id}`;
        const { data } = await axios.get(reloadItemURL);

        if (unit < 0) {
            const totalCustomers = overview.totalCustomers + 1;
            const laptopSold = overview.laptopSold + 1;
            const revenue = overview.revenue + item.price;

            const updateOverviewURL = `https://guarded-cove-25404.herokuapp.com/updateOverview/${overview._id}`;
            await axios.put(updateOverviewURL, { totalCustomers, laptopSold, revenue });
        }

        setItem(data);
        toast('Updated Stock Successfully!!!', {
            position: 'bottom-right'
        });
        setShowLoading(false);

    }

    //rendering inventory component here
    return (
        <section>
            <PageTitle title={'Inventory'} />
            {
                Object.keys(item).length === 0 ?
                    <div className='h-[80vh] flex items-center justify-center'>
                        <Loading />
                    </div>
                    :
                    <>
                        <div className='w-[95%] md:w-4/5 mx-auto pt-20'>
                            <div className='flex flex-col md:flex-row justify-between'>
                                <div>
                                    <img src={item?.img} alt="" />
                                </div>
                                <div className='flex-1 md:text-left md:ml-32'>
                                    <h2 className='font-bold text-2xl'>{item?.title}</h2>
                                    <div className='flex flex-col md:flex-row mt-5'>
                                        <h5 className='bg-byteware-genre-bg py-2 px-3 rounded-full shadow-byte-small-shadow text-byteware-dark-gray'>Product ID: <span className='font-bold text-black'>{item?._id}</span></h5>
                                        <h5 className='mt-5 md:mt-0 md:ml-5 bg-byteware-genre-bg py-2 px-3 rounded-full shadow-byte-small-shadow text-byteware-dark-gray'>Brand: <span className='font-bold text-black'>{item?.brand}</span></h5>
                                        <h5 className='mt-5 md:mt-0 md:ml-5 bg-byteware-genre-bg py-2 px-3 rounded-full shadow-byte-small-shadow text-byteware-dark-gray'>Status: <span className={`font-bold ${item?.quantity > 0 ? 'text-[#007812]' : 'text-red-600'}`}>{item?.quantity > 0 ? 'In Stock' : 'Out of Stock'}</span></h5>
                                    </div>
                                    <div className='mt-10'>
                                        <h3 className='font-extrabold text-3xl text-byteware-light-red'>৳{item?.price}</h3>
                                    </div>
                                    <div className='mt-10'>
                                        <h3 className='font-bold text-lg'>Key Features</h3>
                                        <div className='w-4/5 mx-auto md:w-full mt-4 text-left'>
                                            <p className='text-byteware-dark-gray'>Model: <span className='text-black'>{item?.model}</span></p>
                                            <p className='mt-2 text-byteware-dark-gray'>Processor: <span className='text-black'>{item?.basicInfo?.processor}</span></p>
                                            <p className='mt-2 text-byteware-dark-gray'>Memory: <span className='text-black'>{item?.basicInfo?.memory}</span></p>
                                            <p className='mt-2 text-byteware-dark-gray'>Storage: <span className='text-black'>{item?.basicInfo?.storage}</span></p>
                                            <p className='mt-2 text-byteware-dark-gray'>Display: <span className='text-black'>{item?.basicInfo?.display}</span></p>
                                            <p className='mt-2 text-byteware-dark-gray'>Quantity: <span className='text-black'>{item?.quantity}</span></p>
                                            <p className='mt-2 text-byteware-dark-gray'>Supplier: <span className='text-black'>{item?.supplier}</span></p>
                                        </div>
                                        <div className='my-12'>
                                            <button
                                                onClick={() => setShowDeliveredModal(true)}
                                                className='w-4/5 md:w-fit bg-gradient-to-r from-byteware-base-red to-byteware-light-red px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300 disabled:opacity-30 disabled:cursor-not-allowed' disabled={item.quantity === 0}>
                                                <FontAwesomeIcon icon={faTruckMoving} className='mr-3' />
                                                Delivered
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-byteware-light-gray py-20'>
                            <div className='w-[95%] md:w-3/5 mx-auto bg-byteware-white p-5 rounded-2xl shadow-byte-shadow'>
                                <h3 className='font-bold text-2xl text-left pt-10 mb-5'>Specification</h3>
                                <div>
                                    <h4 className='font-bold text-lg text-left text-byteware-light-red bg-byteware-light-red/20 px-5 py-3 rounded-xl'>Basic Information</h4>
                                    <div className="flex flex-col">
                                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                                <div className="overflow-hidden">
                                                    <table className="min-w-full">
                                                        <tbody>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Processor</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.basicInfo?.processor}
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Display</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.basicInfo?.display}
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Memory</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.basicInfo?.memory}
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Storage</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.basicInfo?.storage}
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Graphics</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.basicInfo?.graphics}
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Operating System</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.basicInfo?.os}
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Battery</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.basicInfo?.battery}
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Adapter</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.basicInfo?.adapter}
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Audio</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.basicInfo?.audio ? item.basicInfo.audio : 'N/A'}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <h4 className='font-bold text-lg text-left text-byteware-light-red bg-byteware-light-red/20 px-5 py-3 rounded-xl'>Input Devices</h4>
                                    <div className="flex flex-col">
                                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                                <div className="overflow-hidden">
                                                    <table className="min-w-full">
                                                        <tbody>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Keyboard</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.inputDevices?.keyboard}
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">WebCam</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.inputDevices?.webcam}
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Card Reader</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.inputDevices?.cardReader ? item?.inputDevices?.cardReader : 'N/A'}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <h4 className='font-bold text-lg text-left text-byteware-light-red bg-byteware-light-red/20 px-5 py-3 rounded-xl'>Network & Wireless Connectivity</h4>
                                    <div className="flex flex-col">
                                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                                <div className="overflow-hidden">
                                                    <table className="min-w-full">
                                                        <tbody>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Wi-Fi</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.network?.wifi}
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Bluetooth</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.network?.bluetooth}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <h4 className='font-bold text-lg text-left text-byteware-light-red bg-byteware-light-red/20 px-5 py-3 rounded-xl'>Ports, Connectors & Slots</h4>
                                    <div className="flex flex-col">
                                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                                <div className="overflow-hidden">
                                                    <table className="min-w-full">
                                                        <tbody>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">USB (s)</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.ports?.usb}
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">HDMI</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.ports?.hdmi}
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Audio Jack Combo</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.ports?.audioJack}
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Extra RAM Slot</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.ports?.extraRamSlot ? item?.ports?.extraRamSlot : 'N/A'}
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Extra M.2 Slot</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.ports?.extraM2Slot ? item?.ports?.extraM2Slot : 'N/A'}
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Supported SSD Type</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.ports?.ssdType ? item?.ports?.ssdType : 'N/A'}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <h4 className='font-bold text-lg text-left text-byteware-light-red bg-byteware-light-red/20 px-5 py-3 rounded-xl'>Physical Specification</h4>
                                    <div className="flex flex-col">
                                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                                <div className="overflow-hidden">
                                                    <table className="min-w-full">
                                                        <tbody>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Dimensions (W x D x H)</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.physical?.dimensions}
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Weight</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.physical?.weight}
                                                                </td>
                                                            </tr>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Color(s)</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.physical?.color ? item?.physical?.color : 'N/A'}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <h4 className='font-bold text-lg text-left text-byteware-light-red bg-byteware-light-red/20 px-5 py-3 rounded-xl'>Warranty</h4>
                                    <div className="flex flex-col">
                                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                                <div className="overflow-hidden">
                                                    <table className="min-w-full">
                                                        <tbody>
                                                            <tr className="border-b border-[#ECEDEF]">
                                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Manufacturing Warranty</td>
                                                                <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                                    {item?.warranty}
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='mt-20 w-[95%] md:w-3/5 mx-auto bg-byteware-white p-5 rounded-2xl shadow-byte-shadow'>
                                <h3 className='font-bold text-2xl text-left pt-5 mb-5'>Restock The Item</h3>
                                <form onSubmit={handleRestockItem}>
                                    <div className='mb-5'>
                                        <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-3 font-semibold' type="number" name='quantity' placeholder='Enter Quantity' required />
                                    </div>
                                    <button
                                        onClick={() => setShowRestockModal(true)}
                                        type='button'
                                        className='bg-gradient-to-r from-byteware-base-red to-byteware-light-red px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                                        <FontAwesomeIcon icon={faWindowRestore} className='mr-3' />
                                        Restock
                                    </button>
                                    <div>
                                        {showRestockModal ? (
                                            <>
                                                <div
                                                    className="w-[90%] mx-auto md:w-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                                >
                                                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                                <h3 className="text-3xl font-semibold">
                                                                    Are You Sure?
                                                                </h3>
                                                                <button
                                                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-40 hover:opacity-100 duration-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                                    onClick={() => setShowRestockModal(false)}
                                                                >
                                                                    <FontAwesomeIcon icon={faMultiply} className='w-6 h-6' />
                                                                </button>
                                                            </div>
                                                            <div className="relative p-6 flex-auto">
                                                                <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                                                    Are you sure that you want to restock this product?
                                                                </p>
                                                            </div>
                                                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                                <button
                                                                    onClick={() => setShowRestockModal(false)}
                                                                    className='bg-red-600 px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                                                                    <FontAwesomeIcon icon={faBan} className='mr-3' />
                                                                    No
                                                                </button>
                                                                <button
                                                                    type='submit'
                                                                    className='ml-5 bg-green-800 px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                                                                    <FontAwesomeIcon icon={faCheck} className='mr-3' />
                                                                    Yes
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                            </>
                                        ) : null}
                                    </div>
                                </form>
                            </div>
                            <div className='mt-20'>
                                <button
                                    onClick={() => navigate('/manageInventory')}
                                    className='bg-gradient-to-r from-byteware-base-red to-byteware-light-red px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                                    <FontAwesomeIcon icon={faWarehouse} className='mr-3' />
                                    Manage Inventories
                                </button>
                            </div>
                        </div>
                        <div>
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
                        </div>
                        <div>
                            {showDeliveredModal ? (
                                <>
                                    <div
                                        className="w-[90%] mx-auto md:w-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                    <h3 className="text-3xl font-semibold">
                                                        Are You Sure?
                                                    </h3>
                                                    <button
                                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-40 hover:opacity-100 duration-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                        onClick={() => setShowDeliveredModal(false)}
                                                    >
                                                        <FontAwesomeIcon icon={faMultiply} className='w-6 h-6' />
                                                    </button>
                                                </div>
                                                <div className="relative p-6 flex-auto">
                                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                                        Are you sure that the product has been successfully delivered?
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                    <button
                                                        onClick={() => setShowDeliveredModal(false)}
                                                        className='bg-red-600 px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                                                        <FontAwesomeIcon icon={faBan} className='mr-3' />
                                                        No
                                                    </button>
                                                    <button
                                                        onClick={() => {
                                                            updateQuantity(-1);
                                                            setShowDeliveredModal(false);
                                                        }}
                                                        className='ml-5 bg-green-800 px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                                                        <FontAwesomeIcon icon={faCheck} className='mr-3' />
                                                        Yes
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                                </>
                            ) : null}
                        </div>
                    </>
            }
        </section>
    );
};

export default Inventory;