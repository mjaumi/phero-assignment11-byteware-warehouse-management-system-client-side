import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faMultiply, faBan, faCheck } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import PageTitle from '../Shared/PageTitle/PageTitle';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import axios from 'axios';

const AddInventoryItem = () => {
    //integration of React hooks
    const [showAddNewItemModal, setShowAddNewItemModal] = useState(false);
    const [showLoading, setShowLoading] = useState(false);

    //integration of React Firebase hooks here
    const [user, loading] = useAuthState(auth);

    if (loading) {
        setShowLoading(true);
    }

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //handles add new item to database
    const handleAddNewItem = async (event) => {
        event.preventDefault();
        const title = event.target.title.value;
        const img = event.target.imageURL.value;
        const brand = event.target.brand.value;
        const model = event.target.model.value;
        const price = parseInt(event.target.price.value);
        const quantity = parseInt(event.target.quantity.value);
        const supplier = event.target.supplier.value;
        const supplierEmail = event.target.email.value;
        const processor = event.target.processor.value;
        const display = event.target.display.value;
        const memory = event.target.memory.value;
        const storage = event.target.storage.value;
        const graphics = event.target.graphics.value;
        const os = event.target.os.value;
        const battery = event.target.battery.value;
        const adapter = event.target.adapter.value;
        const audio = event.target.audio.value;
        const keyboard = event.target.keyboard.value;
        const webcam = event.target.webcam.value;
        const cardReader = event.target.cardReader.value;
        const wifi = event.target.wifi.value;
        const bluetooth = event.target.bluetooth.value;
        const usb = event.target.usb.value;
        const hdmi = event.target.hdmi.value;
        const audioJack = event.target.audioJack.value;
        const extraRamSlot = event.target.extraRamSlot.value;
        const extraM2Slot = event.target.extraM2Slot.value;
        const ssdType = event.target.ssdType.value;
        const dimensions = event.target.dimensions.value;
        const weight = event.target.weight.value;
        const color = event.target.color.value;
        const warranty = event.target.warranty.value;

        const newItem = {
            title,
            img,
            brand,
            model,
            price,
            quantity,
            supplier,
            supplierEmail,
            basicInfo: {
                processor,
                display,
                memory,
                storage,
                graphics,
                os,
                battery,
                adapter,
                audio
            },
            inputDevices: {
                keyboard,
                webcam,
                cardReader
            },
            network: {
                wifi,
                bluetooth
            },
            ports: {
                usb,
                hdmi,
                audioJack,
                extraRamSlot,
                extraM2Slot,
                ssdType
            },
            physical: {
                dimensions,
                weight,
                color
            },
            warranty
        }

        setShowAddNewItemModal(false);
        setShowLoading(true);

        await axios.post('https://guarded-cove-25404.herokuapp.com/addNewItem', newItem);

        toast('Item Added Successfully!!!', {
            position: 'bottom-right'
        });
        event.target.reset();
        window.scrollTo(0, 0);
        setShowLoading(false);

    }

    //rendering add inventory item component here
    return (
        <section className='py-20 bg-byteware-light-gray'>
            <PageTitle title={'Add Inventory Item'} />
            <div className='w-[95%] md:w-4/5 mx-auto'>
                <h3 className='md:text-left font-semibold text-4xl mb-10'>Add Inventory Item</h3>
                <div className='bg-white px-5 md:px-10 py-5 shadow-2xl rounded-xl my-10'>
                    <form onSubmit={handleAddNewItem}>
                        <div>
                            <div className='mb-5 text-left'>
                                <label className='ml-2 text-lg' htmlFor="title">Title<span className='font-bold text-red-600 text-xl'>*</span></label>
                                <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='title' placeholder='Enter The Title Of The Item' required autoComplete='off' />
                            </div>
                            <div className='mb-5 text-left flex flex-col md:flex-row'>
                                <div className='md:w-[30%]'>
                                    <label className='ml-2 text-lg' htmlFor="brand">Brand<span className='font-bold text-red-600 text-xl'>*</span></label>
                                    <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='brand' placeholder='Enter The Brand' required autoComplete='off' />
                                </div>
                                <div className='mt-5 md:mt-0 md:ml-5 md:w-[70%]'>
                                    <label className='ml-2 text-lg' htmlFor="model">Model<span className='font-bold text-red-600 text-xl'>*</span></label>
                                    <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='model' placeholder='Enter The Model' required autoComplete='off' />
                                </div>
                            </div>
                            <div className='mb-5 text-left'>
                                <label className='ml-2 text-lg' htmlFor="imageURL">Image URL<span className='font-bold text-red-600 text-xl'>*</span></label>
                                <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='imageURL' placeholder='Enter The Image URL' required autoComplete='off' />
                            </div>
                            <div className='mb-5 text-left flex flex-col md:flex-row'>
                                <div className='md:w-1/2'>
                                    <label className='ml-2 text-lg' htmlFor="price">Unit Price<span className='font-bold text-red-600 text-xl'>*</span></label>
                                    <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="number" name='price' placeholder='Enter Per Unit Price' required autoComplete='off' />
                                </div>
                                <div className='mt-5 md:mt-0 md:ml-5 md:w-1/2'>
                                    <label className='ml-2 text-lg' htmlFor="quantity">Quantity<span className='font-bold text-red-600 text-xl'>*</span></label>
                                    <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="number" name='quantity' placeholder='Enter The Quantity' required autoComplete='off' />
                                </div>
                            </div>
                            <div className='mb-5 text-left flex flex-col md:flex-row'>
                                <div className='md:w-[30%]'>
                                    <label className='ml-2 text-lg' htmlFor="supplier">Supplier<span className='font-bold text-red-600 text-xl'>*</span></label>
                                    <input className='border-2 bg-gray-100 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold text-byteware-dark-gray' type="text" name='supplier' value={user?.displayName || ''} placeholder="Enter The Supplier's Name" required readOnly disabled />
                                </div>
                                <div className='mt-5 md:mt-0 md:ml-5 md:w-[70%]'>
                                    <label className='ml-2 text-lg' htmlFor="email">Supplier's Email<span className='font-bold text-red-600 text-xl'>*</span></label>
                                    <input className='border-2 bg-gray-100 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold text-byteware-dark-gray' type="text" name='email' value={user?.email || ''} placeholder="Enter The Supplier's Email" required readOnly disabled />
                                </div>
                            </div>
                        </div>
                        <div className='text-left mt-10'>
                            <h4 className='mb-3 font-semibold text-xl'>Basic Information</h4>
                            <div className='mb-5 text-left'>
                                <label className='ml-2 text-lg' htmlFor="processor">Processor<span className='font-bold text-red-600 text-xl'>*</span></label>
                                <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='processor' placeholder='Enter The Processor Configuration' required autoComplete='off' />
                            </div>
                            <div className='mb-5 text-left'>
                                <label className='ml-2 text-lg' htmlFor="display">Display<span className='font-bold text-red-600 text-xl'>*</span></label>
                                <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='display' placeholder='Enter The Display Configuration' required autoComplete='off' />
                            </div>
                            <div className='mb-5 text-left'>
                                <label className='ml-2 text-lg' htmlFor="memory">Memory<span className='font-bold text-red-600 text-xl'>*</span></label>
                                <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='memory' placeholder='Enter The Memory Configuration' required autoComplete='off' />
                            </div>
                            <div className='mb-5 text-left flex flex-col md:flex-row'>
                                <div className='md:w-1/2'>
                                    <label className='ml-2 text-lg' htmlFor="storage">Storage<span className='font-bold text-red-600 text-xl'>*</span></label>
                                    <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='storage' placeholder='Enter The Storage Configuration' required autoComplete='off' />
                                </div>
                                <div className='mt-5 md:mt-0 md:ml-5 md:w-1/2'>
                                    <label className='ml-2 text-lg' htmlFor="graphics">Graphics<span className='font-bold text-red-600 text-xl'>*</span></label>
                                    <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='graphics' placeholder='Enter The Graphics Configuration' required autoComplete='off' />
                                </div>
                            </div>
                            <div className='mb-5 text-left flex flex-col md:flex-row'>
                                <div className='md:w-1/2'>
                                    <label className='ml-2 text-lg' htmlFor="os">Operating System<span className='font-bold text-red-600 text-xl'>*</span></label>
                                    <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='os' placeholder='Enter The Operating System Configuration' required autoComplete='off' />
                                </div>
                                <div className='mt-5 md:mt-0 md:ml-5 md:w-1/2'>
                                    <label className='ml-2 text-lg' htmlFor="audio">Audio<span className='font-bold text-red-600 text-xl'>*</span></label>
                                    <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='audio' placeholder='Enter The Audio Configuration' required autoComplete='off' />
                                </div>
                            </div>
                            <div className='mb-5 text-left flex flex-col md:flex-row'>
                                <div className='md:w-1/2'>
                                    <label className='ml-2 text-lg' htmlFor="battery">Battery<span className='font-bold text-red-600 text-xl'>*</span></label>
                                    <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='battery' placeholder='Enter The Battery Configuration' required autoComplete='off' />
                                </div>
                                <div className='mt-5 md:mt-0 md:ml-5 md:w-1/2'>
                                    <label className='ml-2 text-lg' htmlFor="adapter">Adapter<span className='font-bold text-red-600 text-xl'>*</span></label>
                                    <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='adapter' placeholder='Enter The Adapter Configuration' required autoComplete='off' />
                                </div>
                            </div>
                        </div>
                        <div className='text-left mt-10'>
                            <h4 className='mb-3 font-semibold text-xl'>Input Devices</h4>
                            <div className='mb-5 text-left'>
                                <label className='ml-2 text-lg' htmlFor="keyboard">Keyboard<span className='font-bold text-red-600 text-xl'>*</span></label>
                                <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='keyboard' placeholder='Enter The Keyboard Configuration' required autoComplete='off' />
                            </div>
                            <div className='mb-5 text-left'>
                                <label className='ml-2 text-lg' htmlFor="webcam">WebCam<span className='font-bold text-red-600 text-xl'>*</span></label>
                                <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='webcam' placeholder='Enter The WebCam Configuration' required autoComplete='off' />
                            </div>
                            <div className='mb-5 text-left'>
                                <label className='ml-2 text-lg' htmlFor="cardReader">Card Reader</label>
                                <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='cardReader' placeholder="Enter The Card Reader's Configuration" autoComplete='off' />
                            </div>
                        </div>
                        <div className='text-left mt-10'>
                            <h4 className='mb-3 font-semibold text-xl'>Network & Wireless Connectivity</h4>
                            <div className='mb-5 text-left flex flex-col md:flex-row'>
                                <div className='md:w-1/2'>
                                    <label className='ml-2 text-lg' htmlFor="wifi">Wi-Fi<span className='font-bold text-red-600 text-xl'>*</span></label>
                                    <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='wifi' placeholder='Enter The Wi-Fi Configuration' required autoComplete='off' />
                                </div>
                                <div className='mt-5 md:mt-0 md:ml-5 md:w-1/2'>
                                    <label className='ml-2 text-lg' htmlFor="bluetooth">Bluetooth<span className='font-bold text-red-600 text-xl'>*</span></label>
                                    <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='bluetooth' placeholder='Enter The Bluetooth Configuration' required autoComplete='off' />
                                </div>
                            </div>
                        </div>
                        <div className='text-left mt-10'>
                            <h4 className='mb-3 font-semibold text-xl'>Ports, Connectors & Slots</h4>
                            <div className='mb-5 text-left'>
                                <label className='ml-2 text-lg' htmlFor="usb">USB(s)<span className='font-bold text-red-600 text-xl'>*</span></label>
                                <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='usb' placeholder='Enter The USB Configuration' required autoComplete='off' />
                            </div>
                            <div className='mb-5 text-left'>
                                <label className='ml-2 text-lg' htmlFor="audioJack">Audio Jack Combo<span className='font-bold text-red-600 text-xl'>*</span></label>
                                <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='audioJack' placeholder='Enter The Audio Jack Configuration' required autoComplete='off' />
                            </div>
                            <div className='mb-5 text-left flex flex-col md:flex-row'>
                                <div className='md:w-1/2'>
                                    <label className='ml-2 text-lg' htmlFor="hdmi">HDMI<span className='font-bold text-red-600 text-xl'>*</span></label>
                                    <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='hdmi' placeholder='Enter The HDMI Configuration' required autoComplete='off' />
                                </div>
                                <div className='mt-5 md:mt-0 md:ml-5 md:w-1/2'>
                                    <label className='ml-2 text-lg' htmlFor="ssdType">Supported SSD Type</label>
                                    <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='ssdType' placeholder='Enter The SSD Configuration' autoComplete='off' />
                                </div>
                            </div>
                            <div className='mb-5 text-left flex flex-col md:flex-row'>
                                <div className='md:w-1/2'>
                                    <label className='ml-2 text-lg' htmlFor="extraRamSlot">Extra RAM Slot</label>
                                    <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='extraRamSlot' placeholder='Enter The Extra RAM Slot Configuration' autoComplete='off' />
                                </div>
                                <div className='mt-5 md:mt-0 md:ml-5 md:w-1/2'>
                                    <label className='ml-2 text-lg' htmlFor="extraM2Slot">Extra M.2 Slot</label>
                                    <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='extraM2Slot' placeholder='Enter The Extra M.2 Slot Configuration' autoComplete='off' />
                                </div>
                            </div>
                        </div>
                        <div className='text-left mt-10'>
                            <h4 className='mb-3 font-semibold text-xl'>Physical Specification</h4>
                            <div className='mb-5 text-left'>
                                <label className='ml-2 text-lg' htmlFor="dimensions">Dimensions (W x D x H)<span className='font-bold text-red-600 text-xl'>*</span></label>
                                <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='dimensions' placeholder='Enter The Dimensions' required autoComplete='off' />
                            </div>
                            <div className='mb-5 text-left flex flex-col md:flex-row'>
                                <div className='md:w-1/2'>
                                    <label className='ml-2 text-lg' htmlFor="weight">Weight<span className='font-bold text-red-600 text-xl'>*</span></label>
                                    <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='weight' placeholder='Enter The Weight' required autoComplete='off' />
                                </div>
                                <div className='mt-5 md:mt-0 md:ml-5 md:w-1/2'>
                                    <label className='ml-2 text-lg' htmlFor="color">Color(s)<span className='font-bold text-red-600 text-xl'>*</span></label>
                                    <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='color' placeholder='Enter The Colors Available' required autoComplete='off' />
                                </div>
                            </div>
                        </div>
                        <div className='text-left mt-10'>
                            <h4 className='mb-3 font-semibold text-xl'>Warranty</h4>
                            <div className='mb-5 text-left'>
                                <label className='ml-2 text-lg' htmlFor="warranty">Manufacturing Warranty<span className='font-bold text-red-600 text-xl'>*</span></label>
                                <input className='border-2 border-byteware-base-red rounded-lg w-full px-5 py-2 font-semibold' type="text" name='warranty' placeholder='Enter The Warranty Information' required autoComplete='off' />
                            </div>
                        </div>
                        <div className='mt-14 mb-5'>
                            <button
                                onClick={() => setShowAddNewItemModal(true)}
                                type='button'
                                className='w-full md:w-fit bg-gradient-to-r from-byteware-base-red to-byteware-light-red px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                                <FontAwesomeIcon icon={faCirclePlus} className='mr-3' />
                                Add Item
                            </button>
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
                        <div>
                            {showAddNewItemModal ? (
                                <>
                                    <div
                                        className="w-[90%] mx-auto md:w-full justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                                    >
                                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                                    <h3 className="text-3xl font-semibold">
                                                        Confirm New Item?
                                                    </h3>
                                                    <button
                                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-40 hover:opacity-100 duration-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                                        onClick={() => setShowAddNewItemModal(false)}
                                                    >
                                                        <FontAwesomeIcon icon={faMultiply} className='w-6 h-6' />
                                                    </button>
                                                </div>
                                                <div className="relative p-6 flex-auto">
                                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                                        Are you sure to add this new item?
                                                    </p>
                                                </div>
                                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                                    <button
                                                        onClick={() => setShowAddNewItemModal(false)}
                                                        className='bg-red-600 px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                                                        <FontAwesomeIcon icon={faBan} className='mr-3' />
                                                        No
                                                    </button>
                                                    <button
                                                        type='submit'
                                                        className='ml-5 bg-green-800 px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300' >
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
            </div>
        </section>
    );
};

export default AddInventoryItem;