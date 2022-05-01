import React, { useEffect } from 'react';
import PageTItle from '../Shared/PageTitle/PageTItle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruckMoving, faWindowRestore, faWarehouse } from '@fortawesome/free-solid-svg-icons';
import dummy from '../../images/dummy-laptop.jpg';

const Inventory = () => {

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    //rendering inventory component here
    return (
        <section>
            <PageTItle title={'Inventory'} />
            <div className='w-4/5 mx-auto pt-20'>
                <div className='flex justify-between'>
                    <div>
                        <img src={dummy} alt="" />
                    </div>
                    <div className='flex-1 text-left ml-32'>
                        <h2 className='font-bold text-2xl'>ASUS VivoBook 15 X515EA Core i3 11th Gen 15.6" FHD Laptop</h2>
                        <div className='flex mt-5'>
                            <h5 className='bg-byteware-genre-bg py-2 px-3 rounded-full shadow-md text-byteware-dark-gray'>Product ID: <span className='font-bold text-[#000000]'>123</span></h5>
                            <h5 className='ml-5 bg-byteware-genre-bg py-2 px-3 rounded-full shadow-md text-byteware-dark-gray'>Brand: <span className='font-bold text-[#000000]'>Asus</span></h5>
                            <h5 className='ml-5 bg-byteware-genre-bg py-2 px-3 rounded-full shadow-md text-byteware-dark-gray'>Status: <span className='font-bold text-[#007812]'>In Stock</span></h5>
                        </div>
                        <div className='mt-10'>
                            <h3 className='font-extrabold text-3xl text-byteware-light-red'>৳50,500</h3>
                        </div>
                        <div className='mt-10'>
                            <h3 className='font-bold text-lg'>Key Features</h3>
                            <div className='mt-4'>
                                <p className='text-byteware-dark-gray'>Model: <span className='text-[#000000]'>VivoBook 15 X515EA</span></p>
                                <p className='mt-2 text-byteware-dark-gray'>Processor: <span className='text-[#000000]'>Intel Core i3-1115G4 (6M Cache, 3.00 GHz up to 4.10 GHz)</span></p>
                                <p className='mt-2 text-byteware-dark-gray'>Memory: <span className='text-[#000000]'>4GB DDR4 RAM (Onboard)</span></p>
                                <p className='mt-2 text-byteware-dark-gray'>Storage: <span className='text-[#000000]'>1TB HDD</span></p>
                                <p className='mt-2 text-byteware-dark-gray'>Display: <span className='text-[#000000]'>15.6" FHD (1920X1080)</span></p>
                                <p className='mt-2 text-byteware-dark-gray'>Quantity: <span className='text-[#000000]'>10</span></p>
                                <p className='mt-2 text-byteware-dark-gray'>Supplier: <span className='text-[#000000]'>Aumi</span></p>
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
                                                        Intel Core i3-1115G4 Processor (6M Cache, 3.00 GHz up to 4.10 GHz)
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-[#ECEDEF]">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Display</td>
                                                    <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                        15.6-inch, FHD (1920 x 1080)
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-[#ECEDEF]">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Memory</td>
                                                    <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                        4GB DDR4 3200MHz RAM (Onboard)
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-[#ECEDEF]">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Storage</td>
                                                    <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                        1TB HDD WITH FTPM
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-[#ECEDEF]">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Graphics</td>
                                                    <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                        Intel UHD Graphics
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-[#ECEDEF]">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Operating System</td>
                                                    <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                        Windows 11 Home
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-[#ECEDEF]">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Battery</td>
                                                    <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                        37WHrs, 2S1P, 2-cell Li-ion
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-[#ECEDEF]">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Adapter</td>
                                                    <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                        45W AC Adapter
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-[#ECEDEF]">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Audio</td>
                                                    <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                        SonicMaster
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
                                                        Chiclet Keyboard with Num-key
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-[#ECEDEF]">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">WebCam</td>
                                                    <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                        VGA camera without privacy shutter
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-[#ECEDEF]">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Card Reader</td>
                                                    <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                        Micro SD card reader
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
                                                        Wi-Fi 5(802.11ac)
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-[#ECEDEF]">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Bluetooth</td>
                                                    <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                        Bluetooth 4.1 (Dual-band)
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
                                                        <p>1x USB 3.2 Gen 1 Type-A</p>
                                                        <p>1x USB 3.2 Gen 1 Type-C</p>
                                                        <p>2x USB 2.0 Type-A</p>
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-[#ECEDEF]">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">HDMI</td>
                                                    <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                        1x HDMI 1.4
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-[#ECEDEF]">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Audio Jack Combo</td>
                                                    <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                        1x 3.5mm Combo Audio Jack
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
                                                        36.02 x 23.49 x 1.99 ~ 1.99 cm (14.18" x 9.25" x 0.78" ~ 0.78")
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-[#ECEDEF]">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Weight</td>
                                                    <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                        1.80 kg (3.97 lbs)
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-[#ECEDEF]">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Color(s)</td>
                                                    <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                        <p>PEACOCK BLUE (BQ2315W-X515EA)</p>
                                                        <p>TRANSPARENT SILVER (BQ2311W-X515EA)</p>
                                                    </td>
                                                </tr>
                                                <tr className="border-b border-[#ECEDEF]">
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-byteware-dark-gray w-[20%] text-left">Body Material</td>
                                                    <td className="text-sm px-6 py-4 whitespace-nowrap text-left">
                                                        ABS Plastic
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
                                                        02 years International Limited Warranty (Battery 1 year)
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