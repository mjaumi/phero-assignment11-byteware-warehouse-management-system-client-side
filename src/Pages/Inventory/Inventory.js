import React, { useEffect, useState } from 'react';
import PageTItle from '../Shared/PageTitle/PageTItle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckMoving, faWindowRestore, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useParams } from 'react-router-dom';

const Inventory = () => {
    //integration of React hooks
    const [item, setItem] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    useEffect(() => {
        const url = `https://guarded-cove-25404.herokuapp.com/item/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data));
    }, [id]);

    //rendering inventory component here
    return (
        <section>
            <PageTItle title={'Inventory'} />
            {console.log(item)}
            <div className='w-4/5 mx-auto pt-20'>
                <div className='flex justify-between'>
                    <div>
                        <img src={item?.img} alt="" />
                    </div>
                    <div className='flex-1 text-left ml-32'>
                        <h2 className='font-bold text-2xl'>{item?.title}</h2>
                        <div className='flex mt-5'>
                            <h5 className='bg-byteware-genre-bg py-2 px-3 rounded-full shadow-md text-byteware-dark-gray'>Product ID: <span className='font-bold text-[#000000]'>{item?._id}</span></h5>
                            <h5 className='ml-5 bg-byteware-genre-bg py-2 px-3 rounded-full shadow-md text-byteware-dark-gray'>Brand: <span className='font-bold text-[#000000]'>{item?.brand}</span></h5>
                            <h5 className='ml-5 bg-byteware-genre-bg py-2 px-3 rounded-full shadow-md text-byteware-dark-gray'>Status: <span className={`font-bold ${item?.quantity > 0 ? 'text-[#007812]' : 'text-red-600'}`}>{item?.quantity > 0 ? 'In Stock' : 'Out of Stock'}</span></h5>
                        </div>
                        <div className='mt-10'>
                            <h3 className='font-extrabold text-3xl text-byteware-light-red'>৳{item?.price}</h3>
                        </div>
                        <div className='mt-10'>
                            <h3 className='font-bold text-lg'>Key Features</h3>
                            <div className='mt-4'>
                                <p className='text-byteware-dark-gray'>Model: <span className='text-[#000000]'>{item?.model}</span></p>
                                <p className='mt-2 text-byteware-dark-gray'>Processor: <span className='text-[#000000]'>{item?.basicInfo?.processor}</span></p>
                                <p className='mt-2 text-byteware-dark-gray'>Memory: <span className='text-[#000000]'>{item?.basicInfo?.memory}</span></p>
                                <p className='mt-2 text-byteware-dark-gray'>Storage: <span className='text-[#000000]'>{item?.basicInfo?.storage}</span></p>
                                <p className='mt-2 text-byteware-dark-gray'>Display: <span className='text-[#000000]'>{item?.basicInfo?.display}</span></p>
                                <p className='mt-2 text-byteware-dark-gray'>Quantity: <span className='text-[#000000]'>{item?.quantity}</span></p>
                                <p className='mt-2 text-byteware-dark-gray'>Supplier: <span className='text-[#000000]'>{item?.supplier}</span></p>
                            </div>
                            <div className='my-12'>
                                <button
                                    className='bg-gradient-to-r from-byteware-base-red to-byteware-light-red px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                                    <FontAwesomeIcon icon={faTruckMoving} className='mr-3' />
                                    Delivered
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-byteware-light-gray py-20'>
                <div className='w-3/5 mx-auto bg-byteware-white p-5 rounded-2xl shadow-xl'>
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
                            <div className="overflow-x-hidden sm:-mx-6 lg:-mx-8">
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
                <div className='mt-20 w-3/5 mx-auto bg-byteware-white p-5 rounded-2xl shadow-xl'>
                    <h3 className='font-bold text-2xl text-left pt-5 mb-5'>Restock The Item</h3>
                    <form>
                        <div className='mb-5'>
                            <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-3 font-semibold' type="text" name='' placeholder='Enter Quantity' />
                        </div>
                        <button
                            className='bg-gradient-to-r from-byteware-base-red to-byteware-light-red px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                            <FontAwesomeIcon icon={faWindowRestore} className='mr-3' />
                            Restock
                        </button>
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

        </section>
    );
};

export default Inventory;