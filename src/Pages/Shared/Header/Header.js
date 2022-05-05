import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { MenuIcon } from '@heroicons/react/outline';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    //integration of React hooks
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();

    //integration of React Firebase hooks here
    const [user, loading] = useAuthState(auth);

    if (loading) {

    }

    const handleSignOut = () => {
        signOut(auth);
        toast('Log Out Successful!!!', {
            position: 'bottom-right'
        })
    }

    //rendering header component here
    return (
        <header className='bg-byteware-white py-5 shadow-lg sticky top-0 z-50'>
            <div className='w-[90%] md:w-4/5 mx-auto flex justify-between items-center'>
                <div>
                    <h1><span className='text-4xl font-extrabold'>Byte</span>ware</h1>
                </div>
                <div className='md:hidden'>
                    <MenuIcon onClick={() => setShowMenu(!showMenu)} className='w-10 h-10 text-byteware-base-red' />
                </div>
                <div className={`absolute ${showMenu ? 'top-[40px]' : '-top-[450px]'} left-0 -z-[1000] md:z-0 md:static w-full md:w-fit bg-byteware-white duration-300 ease-in-out pb-5 md:pb-0 shadow-xl md:shadow-none`}>
                    <nav className='font-semibold flex flex-col md:flex-row items-center pt-14 md:pt-0'>
                        <CustomLink to='/'>Home</CustomLink>
                        <CustomLink to='/blogs'>Blogs</CustomLink>
                        {
                            user ? <>
                                <CustomLink to='/manageInventory'>Manage Items</CustomLink>
                                <CustomLink to='/addInventoryItem'>Add Items</CustomLink>
                                <CustomLink to='/myItems'>My Items</CustomLink>
                                <p className='mt-5 md:mt-0 md:ml-5 font-bold text-lg text-gray-400'>{user.displayName}</p>
                                <button
                                    onClick={handleSignOut}
                                    className='mt-5 md:mt-0 md:ml-5 bg-gradient-to-r from-byteware-base-red to-byteware-light-red px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                                    <FontAwesomeIcon icon={faArrowRightFromBracket} className='mr-3' />
                                    Log Out
                                </button>
                            </>
                                :
                                <button
                                    onClick={() => navigate('/login')}
                                    className='mt-5 md:mt-0 md:ml-5 bg-gradient-to-r from-byteware-base-red to-byteware-light-red px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                                    <FontAwesomeIcon icon={faArrowRightToBracket} className='mr-3' />
                                    Log In
                                </button>
                        }
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;