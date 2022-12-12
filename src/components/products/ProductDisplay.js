import React from 'react';
import { useParams } from 'react-router-dom';
import { fakeProducts } from '../products/data/fakeProduct';
import ErrorPage from '../ErrorPage';

export default function ProductDisplay() {
  const { id } = useParams();
  const product = fakeProducts.find((p) => String(p.id) === id);

  if (!product) return <ErrorPage />;

  return (
    <div className='listOfProducts'>
      <div className='productDisplay'>
        <h3>{product.name}</h3>
        <h4>{product.type}</h4>
        <h5>${product.price}</h5>
        <img src={product.img} alt='product' />
        <p>{product.description}</p>
      </div>
    </div>
  )
};
