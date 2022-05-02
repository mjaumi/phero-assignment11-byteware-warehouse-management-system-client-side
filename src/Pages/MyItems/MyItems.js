import React, { useEffect } from 'react';
import PageTitle from '../Shared/PageTitle/PageTitle';

const MyItems = () => {

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    //rendering my items component here
    return (
        <section>
            <PageTitle title={'My Items'} />
            <div className='w-4/5 mx-auto'>
                <h3 className='text-left font-semibold text-4xl my-10'>My Items</h3>
                <div className='grid grid-cols-3'>

                </div>
            </div>
        </section>
    );
};

export default MyItems;