import React from 'react';

const Pagination = ({currentPage = 1, limit, total, handleCurrentPage}) => {
  const countPages = Math.ceil(total/limit);
  const prevPage = currentPage === 1 ? 1 : currentPage - 1;
  const nextPage = currentPage === countPages ? countPages : currentPage + 1;

  return (
    <div className="btn-group">
      <button className="btn btn-light" onClick={() => handleCurrentPage(1)}>First</button>
      <button className="btn btn-light" onClick={() => handleCurrentPage(prevPage)}>{'<<'}</button>
      <button className="btn btn-light">{currentPage}/{countPages}</button>
      <button className="btn btn-light" onClick={() => handleCurrentPage(nextPage)}>{'>>'}</button>
      <button className="btn btn-light" onClick={() => handleCurrentPage(countPages)}>Last</button>
    </div>
  )
}

export default Pagination;