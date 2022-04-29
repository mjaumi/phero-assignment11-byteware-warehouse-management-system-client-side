import React from 'react';
import { PhoneIcon, LocationMarkerIcon } from '@heroicons/react/outline';
import { faFacebookF, faYoutube, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className='bg-byteware-footer-bg pt-10 pb-5'>
            <div className='w-4/5 mx-auto grid grid-cols-3 gap-28'>
                <div>
                    <h4 className='text-byteware-white font-medium tracking-widest text-lg text-left ml-5 uppercase'>Support</h4>
                    <div className='mt-5 flex p-3 border rounded-full border-byteware-dark-gray cursor-pointer hover:border-byteware-base-red duration-300'>
                        <div className='flex items-center pl-2 pr-5 mr-5 border-r border-byteware-dark-gray'>
                            <PhoneIcon className='text-byteware-white w-10 h-10' />
                        </div>
                        <div className='text-byteware-white text-left'>
                            <p className='text-byteware-dark-gray'><small>9:30AM - 7:00PM</small></p>
                            <h3 className='text-byteware-base-red font-medium text-xl'>09214567853</h3>
                        </div>
                    </div>
                    <a href="https://www.google.com/maps">
                        <div className='mt-5 flex p-3 border rounded-full border-byteware-dark-gray cursor-pointer hover:border-byteware-base-red duration-300'>
                            <div className='flex items-center pl-2 pr-5 mr-5 border-r border-byteware-dark-gray'>
                                <LocationMarkerIcon className='text-byteware-white w-10 h-10' />
                            </div>
                            <div className='text-byteware-white text-left'>
                                <p className='text-byteware-dark-gray'><small>Warehouse Locator</small></p>
                                <h3 className='text-byteware-base-red font-medium text-xl'>Find Our Warehouses</h3>
                            </div>
                        </div>
                    </a>
                </div>
                <div>
                </div>
                <div className='ml-14'>
                    <h4 className='text-byteware-white font-medium tracking-widest text-lg text-left uppercase'>Stay Connected</h4>
                    <div className='mt-5 text-left'>
                        <h4 className='text-byteware-white text-lg'>Byteware Warehouse Ltd.</h4>
                        <p className='mt-2 text-byteware-dark-gray'>14th floor, Opposite to Rajarbag Police Telecom Bhaban, Motijheel,Dhaka 1000</p>
                        <h4 className='mt-5 text-byteware-dark-gray font-medium'>Email:</h4>
                        <h4 className='mt-2 text-byteware-base-red font-medium'>info.warehouse@byteware.com</h4>
                        <div className='mt-10'>
                            <a href="https://www.facebook.com/mj.aumi/" target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={faFacebookF} className='w-5 h-5 text-byteware-white bg-byteware-dark-gray p-3 rounded-full hover:bg-byteware-base-red duration-300 hover:scale-110' />
                            </a>
                            <a href="https://www.youtube.com/channel/UCB1MBK_HsbpAoGuTma7-P1g" target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={faYoutube} className='ml-8 w-5 h-5 text-byteware-white bg-byteware-dark-gray p-3 rounded-full hover:bg-byteware-base-red duration-300 hover:scale-110' />
                            </a>
                            <a href="https://www.instagram.com/?hl=en" target='_blank' rel='noreferrer'>
                                <FontAwesomeIcon icon={faInstagram} className='ml-8 w-5 h-5 text-byteware-white bg-byteware-dark-gray p-3 rounded-full hover:bg-byteware-base-red duration-300 hover:scale-110' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-4/5 mx-auto flex justify-between border-t border-byteware-dark-gray mt-10 pt-3'>
                <div>
                    <p className='text-byteware-dark-gray'><small>©2022 Byteware Warehouse Ltd. | All rights reserved</small></p>
                </div>
                <div>
                    <p className='text-byteware-dark-gray'><small>Powered By: <a href="https://github.com/mjaumi" className='text-byteware-base-red hover:opacity-40 duration-300' target='_blank' rel='noreferrer'>Milhan Joardar Aumi</a></small></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;