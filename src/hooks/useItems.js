import axios from "axios";

const { useState, useEffect } = require("react")

// custom hook for fetching inventory items from database
const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {

        const fetchItems = async () => {
            const { data } = await axios.get('https://guarded-cove-25404.herokuapp.com/items');
            setItems(data);
        }
        fetchItems();

    }, []);

    return [items, setItems];
}

export default useItems;