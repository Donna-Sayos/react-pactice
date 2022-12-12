import React from 'react';

export default function Search() {
  return (
    <div>
      <div className='wrap'>
        <div className='search'>
          <input type='text' className='searchTerm' placeholder='What are you looking for today?' />
          <button type='submit' className='searchButton'>search</button>
        </div>
      </div>
    </div>
  )
};
