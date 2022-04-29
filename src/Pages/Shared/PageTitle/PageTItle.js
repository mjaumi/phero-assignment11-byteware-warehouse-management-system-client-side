import React from 'react';
import { Helmet } from 'react-helmet-async';

const PageTItle = ({ title }) => {
    return (
        <Helmet>
            <title>{title} | ByteWare Warehouse Management System</title>
        </Helmet>
    );
};

export default PageTItle;