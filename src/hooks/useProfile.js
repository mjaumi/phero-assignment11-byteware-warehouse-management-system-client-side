import axios from 'axios';
import { useEffect, useState } from 'react';

//fetching the user profile data with this custom hook
const useProfile = user => {
    const [profile, setProfile] = useState({});

    useEffect(() => {
        const getProfile = async () => {
            const url = `https://guarded-cove-25404.herokuapp.com/userProfile?email=${user.email}`;
            const { data } = await axios.get(url);
            setProfile(data);
        }
        getProfile();
    }, [user]);

    return [profile];
}

export default useProfile;