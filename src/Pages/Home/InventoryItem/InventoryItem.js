import React from 'react';
import { useNavigate } from 'react-router-dom';
import dummy from '../../../images/dummy-laptop.jpg';

const InventoryItem = () => {
    //integration of react hooks
    const navigate = useNavigate();

    const handleUpdateStock = id => {
        navigate(`/inventory/${id}`);
    }

    //rendering inventory item card here
    return (
        <div className='bg-byteware-white p-5 rounded-2xl shadow-2xl'>
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
                    <button
                        onClick={() => handleUpdateStock(123)}
                        className='mt-8 w-full bg-gradient-to-r from-byteware-base-red to-byteware-light-red py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                        Update Stock
                    </button>
                </div>
            </div>
        </div>
    );
};

export default InventoryItem;