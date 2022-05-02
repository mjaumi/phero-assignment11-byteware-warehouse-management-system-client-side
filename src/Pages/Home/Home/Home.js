import React, { useEffect } from 'react';
import PageTitle from '../../Shared/PageTitle/PageTitle';
import Banner from '../Banner/Banner';
import FeaturedBrands from '../FeaturedBrands/FeaturedBrands';
import InventoryItems from '../InventoryItems/InventoryItems';
import SalesOverview from '../SalesOverview/SalesOverview';

const Home = () => {

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    //rendering home component here
    return (
        <section>
            <PageTitle title={'Home'} />
            <Banner />
            <InventoryItems />
            <FeaturedBrands />
            <SalesOverview />
        </section>
    );
};

export default Home;