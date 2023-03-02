import React from 'react';
import "../css/Page.css"

const Pagination = ({ page, perPage, total, onPageChange }) => {
  const totalPages = Math.ceil(total / perPage);
  const pages = [];
 
  for (let i = 1; i <= totalPages; i++) {
    pages.push(
      
      <button className='page-btn' key={i} onClick={() => onPageChange(i)} disabled={i === page}>
        {i}
      </button>
      
    );
  }

  return <div className='buttons'>{pages}</div>;
};

export default Pagination;