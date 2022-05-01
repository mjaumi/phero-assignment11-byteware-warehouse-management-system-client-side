import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import dummy from '../../../images/dummy-laptop.jpg';

const Item = () => {
    //integration of react hooks
    const navigate = useNavigate();

    //event handler for update stock button
    const handleUpdateStock = id => {
        navigate(`/inventory/${id}`);
    }

    //rendering manage inventory item component here
    return (
        <div className='bg-[#ffffff] p-5 rounded-2xl shadow-2xl'>
            <div>
                <img src={dummy} alt="" />
            </div>
            <div>
                <h4 className='text-left font-semibold'>ASUS VivoBook 15 X515EA Core i3 11th Gen 512GB SSD 15.6" IPS FHD Laptop</h4>
                <div className='text-left text-byteware-dark-gray my-5 pb-7 border-b border-byteware-border-gray'>
                    <small className='block mb-2'><li>Intel Core i3-1115G4 Processor (6M Cache, 3.00 GHz up to 4.10 GHz)</li></small>
                    <small className='block mb-2'><li>4GB DDR4 RAM</li></small>
                    <small className='block mb-2'><li>512GB PCI-E G3 SSD</li></small>
                    <small className='block mb-2'><li>15.6" FHD LED Display</li></small>
                </div>
                <div>
                    <h3 className='font-semibold text-byteware-light-red text-2xl'>51,500৳</h3>
                    <p className='text-byteware-dark-gray mt-5'>Quantity: 10</p>
                    <p className='text-byteware-dark-gray'>Supplier: aumi</p>
                    <div className='flex'>
                        <button
                            onClick={() => handleUpdateStock(123)}
                            className='mt-8 w-full bg-gradient-to-r from-byteware-base-red to-byteware-light-red py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                            <FontAwesomeIcon icon={faUpload} className='mr-3' />
                            Update Stock
                        </button>
                        <button
                            onClick={() => handleUpdateStock(123)}
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