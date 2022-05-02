import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faTrashCan, faCheck, faBan, faMultiply } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ item, handleDeleteItem }) => {
    //fetching data from props
    const { _id, title, img, price, quantity, supplier, basicInfo } = item;

    //integration of react hooks
    const navigate = useNavigate();
    const [showDeleteConfirmModal, setShowDeleteConfirmModal] = useState(false);

    //event handler for update stock button
    const handleUpdateStock = id => {
        navigate(`/inventory/${id}`);
    }

    //rendering manage inventory item component here
    return (
        <div className='bg-white p-5 rounded-2xl shadow-2xl'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='mt-5 grid grid-rows-byteware-item-card-layout'>
                <h4 className='text-left font-semibold'>{title}</h4>
                <div className='text-left text-byteware-dark-gray my-5 pb-7 border-b border-byteware-border-gray'>
                    <small className='block mb-2'><li>{basicInfo.processor}</li></small>
                    <small className='block mb-2'><li>{basicInfo.memory}</li></small>
                    <small className='block mb-2'><li>{basicInfo.storage}</li></small>
                    <small className='block mb-2'><li>{basicInfo.display}</li></small>
                </div>
                <div>
                    <h3 className='font-semibold text-byteware-light-red text-2xl'>৳{price}</h3>
                    <p className='text-byteware-dark-gray mt-5'>Quantity: {quantity}</p>
                    <p className='text-byteware-dark-gray'>Supplier: {supplier}</p>
                    <div className='flex'>
                        <button
                            onClick={() => handleUpdateStock(_id)}
                            className='mt-8 w-full bg-gradient-to-r from-byteware-base-red to-byteware-light-red py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                            <FontAwesomeIcon icon={faUpload} className='mr-3' />
                            Update Stock
                        </button>
                        <button
                            onClick={() => setShowDeleteConfirmModal(true)}
                            className='ml-10 mt-8 w-2/6 bg-[#e31919] py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </div>
                </div>
            </div>

            <div>
                {showDeleteConfirmModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                        <h3 className="text-3xl font-semibold">
                                            Are You Sure?
                                        </h3>
                                        <button
                                            className="p-1 ml-auto bg-transparent border-0 text-black opacity-40 hover:opacity-100 duration-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                            onClick={() => setShowDeleteConfirmModal(false)}
                                        >
                                            <FontAwesomeIcon icon={faMultiply} className='w-6 h-6' />
                                        </button>
                                    </div>
                                    <div className="relative p-6 flex-auto">
                                        <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                            Are you sure that you want to delete this product?
                                        </p>
                                    </div>
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            onClick={() => setShowDeleteConfirmModal(false)}
                                            className='bg-red-600 px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                                            <FontAwesomeIcon icon={faBan} className='mr-3' />
                                            No
                                        </button>
                                        <button
                                            onClick={() => {
                                                handleDeleteItem(_id);
                                                setShowDeleteConfirmModal(false);
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
        </div>
    );
};

export default Item;