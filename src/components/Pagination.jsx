import React, { useState, useEffect } from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const [pageNumbers, setPageNumbers] = useState([]);
  const [displayedPages, setDisplayedPages] = useState([]);
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  useEffect(() => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    setPageNumbers(pages);
    updateDisplayedPages(currentPage, pages);
  }, [totalPosts, postsPerPage, currentPage]);

  const updateDisplayedPages = (page, pages) => {
    if (window.innerWidth <= 768) {
      setDisplayedPages(pages.slice(Math.max(0, page - 1), Math.min(page + 3, pages.length)));
    } else {
      setDisplayedPages(pages);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
      updateDisplayedPages(currentPage + 1, pageNumbers);
    }
  };

  const handleBack = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
      updateDisplayedPages(currentPage - 1, pageNumbers);
    }
  };

  return (
    <nav>
      <ul className="flex justify-center space-x-4 pagination-height">
        <li className={`px-3 py-1 rounded ${currentPage === 1 ? 'bg-gray-300 text-gray-500' : 'bg-gray-300 text-black'}`}>
          <a onClick={handleBack} href="#!" className={`block ${currentPage === 1 ? 'pointer-events-none' : ''}`}>
            Back
          </a>
        </li>
        {displayedPages.map((number) => (
          <li key={number} className={`px-3 py-1 rounded ${currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
            <a onClick={() => paginate(number)} href="#!" className="block">
              {number}
            </a>
          </li>
        ))}
        <li className={`px-3 py-1 rounded ${currentPage === totalPages ? 'bg-gray-300 text-gray-500' : 'bg-gray-300 text-black'}`}>
          <a onClick={handleNext} href="#!" className={`block ${currentPage === totalPages ? 'pointer-events-none' : ''}`}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
