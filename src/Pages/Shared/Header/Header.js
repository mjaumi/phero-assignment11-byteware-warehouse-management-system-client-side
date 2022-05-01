import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    //integration of React hooks
    const navigate = useNavigate();

    //rendering header component here
    return (
        <header className='bg-byteware-white py-5 shadow-lg sticky top-0 z-50'>
            <div className='w-4/5 mx-auto flex justify-between items-center'>
                <div>
                    <h1><span className='text-4xl font-extrabold'>Byte</span>ware</h1>
                </div>
                <div>
                    <nav className='font-semibold flex items-center'>
                        <Link className='hover:opacity-50 duration-300' to='/'>Home</Link>
                        <Link className='ml-5 hover:opacity-50 duration-300' to='/blogs'>Blogs</Link>
                        <button
                            onClick={() => navigate('/login')}
                            className='ml-5 bg-gradient-to-r from-byteware-base-red to-byteware-light-red px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                            <FontAwesomeIcon icon={faUser} className='mr-3' />
                            Log In
                        </button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;