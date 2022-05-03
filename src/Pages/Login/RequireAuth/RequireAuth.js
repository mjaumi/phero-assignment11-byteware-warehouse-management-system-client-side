import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    //integration of React Firebase hooks here
    const [user, loading] = useAuthState(auth);

    //integration of React hooks
    const location = useLocation();

    //preventing reloading issue of private component
    if (loading) {
        return (
            <div className='h-[80vh] flex items-center justify-center'>
                <Loading />
            </div>
        );
    }

    //checking if the user exists or not
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace />
    }

    return children;
};

export default RequireAuth;