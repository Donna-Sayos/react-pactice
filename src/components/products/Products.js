import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Products() {
  return (
    <div className='products'>
      <h1 className='mt-5 p-2'>Hello from products</h1>
      <div className='productsNav mt-5 p-4'>
        <Link to="/products/search">Search</Link>
        <Link to="/products/list">List</Link>
        <Link to="/products/add">Add</Link>
      </div>
      <Outlet />
    </div>
  )
};
