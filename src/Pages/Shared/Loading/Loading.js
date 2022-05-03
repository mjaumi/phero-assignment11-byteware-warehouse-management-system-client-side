import React from 'react';

const Loading = () => {

    //rendering loading component here
    return (
        <div>
            <div className="spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-byteware-base-red" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="ml-5 spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-byteware-base-red" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <div className="ml-5 spinner-grow inline-block w-8 h-8 bg-current rounded-full opacity-0 text-byteware-base-red" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    );
};

export default Loading;