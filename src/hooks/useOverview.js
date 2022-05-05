import axios from "axios";
import { useEffect, useState } from "react"

const useOverview = () => {
    const [overview, setOverview] = useState({});

    useEffect(() => {
        const getOverviewData = async () => {
            const { data } = await axios.get(' https://guarded-cove-25404.herokuapp.com/overview');
            setOverview(data);
        }
        getOverviewData();
    }, []);

    return [overview];
}

export default useOverview;