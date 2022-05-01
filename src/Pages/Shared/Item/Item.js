import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Item = ({ item }) => {
    //fetching data from props
    const { _id, title, img, price, quantity, supplier, basicInfo } = item;

    //integration of react hooks
    const navigate = useNavigate();

    //event handler for update stock button
    const handleUpdateStock = id => {
        navigate(`/inventory/${id}`);
    }

    //event handler for delete item button button
    const handleDeleteItem = id => {
        console.log(id);
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
                            onClick={() => handleDeleteItem(_id)}
                            className='ml-10 mt-8 w-2/6 bg-[#e31919] py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;