const { useState, useEffect } = require("react")

// custom hook for fetching inventory items from database
const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://guarded-cove-25404.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setItems(data));
    }, []);

    return [items];
}

export default useItems;