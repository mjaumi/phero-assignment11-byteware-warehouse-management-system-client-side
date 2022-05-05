import React from 'react';
import { Link, resolvePath, useMatch } from 'react-router-dom';

const CustomLink = ({ children, to, ...props }) => {
    const resolved = resolvePath(to);
    const match = useMatch({ path: resolved.pathname, end: true });

    //rendering custom link component here
    return (
        <Link
            className={`mt-5 md:mt-0 md:ml-5 hover:opacity-50 duration-300 ${match ? 'border-b-2 border-byteware-base-red text-byteware-base-red' : ''}`}
            to={to}
            {...props}
        >
            {children}
        </Link>
    );
};

export default CustomLink;