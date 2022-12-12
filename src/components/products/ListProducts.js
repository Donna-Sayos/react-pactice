import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fakeProducts } from '../products/data/fakeProduct';

export default function ListProducts() {
    const navigate = useNavigate();

  return (
    <div className='listOfProducts'>
        <div className='productsList'>
            {fakeProducts.map((product, i) => (
                <div className='productDisplay' key={i} onClick={() => navigate(`/products/${i}`)}>
                    <h1>{product.name}</h1>
                    <h4>{product.type}</h4>
                    <h5>{product.price}</h5>
                    <img src={product.img} alt='product' />
                    <p>{product.description}</p>
                </div>
            ))}
        </div>
    </div>
  )
};
