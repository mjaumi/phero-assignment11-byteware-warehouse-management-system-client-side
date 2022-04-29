import React from 'react';

const Header = () => {
    //rendering header component here
    return (
        <header className='bg-byteware-base-blue py-5 shadow-lg'>
            <div className='w-4/5 mx-auto flex justify-between items-center'>
                <div>
                    <h1><span className='text-4xl font-extrabold'>Byte</span>ware</h1>
                </div>
                <div>
                    <nav className='font-semibold flex items-center'>
                        <p>Home</p>
                        <p className='ml-5'>Blogs</p>
                        <button className='ml-5 bg-gradient-to-r from-byteware-base-red to-byteware-light-red px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>Log In</button>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;