import React from 'react';
import "./pagination.css";

const Pagination = ({ totalPages, onPageChange, currentPage }) => {
  const goToPreviousPage = () => {
    if (currentPage > 1) {
        onPageChange(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
        onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="pagination">
      <button onClick={goToPreviousPage} disabled={currentPage === 1}>
        Previous
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={goToNextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
