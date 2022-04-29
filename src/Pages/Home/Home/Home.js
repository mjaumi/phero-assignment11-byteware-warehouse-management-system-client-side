import React from 'react';
import PageTItle from '../../Shared/PageTitle/PageTItle';
import Banner from '../Banner/Banner';
import InventoryItems from '../InventoryItems/InventoryItems';

const Home = () => {
    return (
        <section>
            <PageTItle title={'Home'} />
            <Banner />
            <InventoryItems />
        </section>
    );
};

export default Home;