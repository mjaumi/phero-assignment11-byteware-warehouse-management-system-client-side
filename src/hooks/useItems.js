import axios from "axios";

const { useState, useEffect } = require("react")

// custom hook for fetching inventory items from database
const useItems = (brand, currentPage, size) => {
    const [items, setItems] = useState([]);

    useEffect(() => {

        if (!brand) {

            const fetchItems = async () => {
                const url = `https://guarded-cove-25404.herokuapp.com/items?page=${currentPage}&size=${size}`;
                const { data } = await axios.get(url);
                setItems(data);
            }
            fetchItems();
        }

    }, [brand, currentPage, size]);

    return [items, setItems];
}

export default useItems;