import React from 'react';

export default function Search() {
  return (
    <div>
      <div className='wrap'>
        <div className='search'>
          <input type='text' className='searchTerm form-control form-control-lg' placeholder='Type to search..' />
          <button type='submit' className='searchButton btn btn-lg'>search</button>
        </div>
      </div>
    </div>
  )
};
