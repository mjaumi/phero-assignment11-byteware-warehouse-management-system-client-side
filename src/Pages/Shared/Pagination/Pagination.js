import React from 'react';

const Pagination = ({ pageCount, currentPage, setCurrentPage }) => {
    return (
        <div className='my-10'>
            {
                [...Array(pageCount).keys()].map(pageNumber => <button
                    key={pageNumber}
                    className={`font-semibold border-2 border-byteware-base-red w-10 h-10 rounded-full ml-5 hover:text-byteware-base-red duration-300 ${currentPage === pageNumber ? 'bg-byteware-base-red text-white hover:text-white' : ''}`}
                    onClick={() => setCurrentPage(pageNumber)}
                >{pageNumber + 1}</button>)
            }
        </div>
    );
};

export default Pagination;