import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightToBracket, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { toast } from 'react-toastify';

const Header = () => {
    //integration of React hooks
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
            <div className='w-4/5 mx-auto flex justify-between items-center'>
                <div>
                    <h1><span className='text-4xl font-extrabold'>Byte</span>ware</h1>
                </div>
                <div>
                    <nav className='font-semibold flex items-center'>
                        <Link className='hover:opacity-50 duration-300' to='/'>Home</Link>
                        <Link className='ml-5 hover:opacity-50 duration-300' to='/blogs'>Blogs</Link>
                        {
                            user ? <>
                                <Link className='ml-5 hover:opacity-50 duration-300' to='/manageInventory'>Manage Items</Link>
                                <Link className='ml-5 hover:opacity-50 duration-300' to='/addInventoryItem'>Add Items</Link>
                                <Link className='ml-5 hover:opacity-50 duration-300' to='/myItems'>My Items</Link>
                                <p className='ml-5 font-bold text-lg text-gray-400'>{user.displayName}</p>
                                <button
                                    onClick={handleSignOut}
                                    className='ml-5 bg-gradient-to-r from-byteware-base-red to-byteware-light-red px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
                                    <FontAwesomeIcon icon={faArrowRightFromBracket} className='mr-3' />
                                    Log Out
                                </button>
                            </>
                                :
                                <button
                                    onClick={() => navigate('/login')}
                                    className='ml-5 bg-gradient-to-r from-byteware-base-red to-byteware-light-red px-8 py-3 rounded-xl font-semibold text-byteware-white hover:drop-shadow-byteware-btn-shadow hover:opacity-80 duration-300'>
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