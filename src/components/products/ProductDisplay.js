import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { fakeProducts } from '../products/data/fakeProduct';
import ErrorPage from '../fallback/ErrorPage';

export default function ProductDisplay() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = fakeProducts.find((p) => String(p.id) === id);
  if (!product) return <ErrorPage />;

  return (
    <div className='center'>
      <div className='productDisplay mt-5 p-5'>
        <button className='mt-5 back' onClick={() => navigate("/products/list")}>back</button>
        <h3>{product.name}</h3>
        <h4>{product.type}</h4>
        <h5>${product.price}</h5>
        <img className='img' src={product.img} alt='product' />
        <p>{product.description}</p>
      </div>
    </div>
  )
};