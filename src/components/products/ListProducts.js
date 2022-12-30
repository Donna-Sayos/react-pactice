import React from 'react';
import { useNavigate } from 'react-router-dom';
import { fakeProducts } from '../products/data/fakeProduct';

export default function ListProducts() {
    const navigate = useNavigate();

  return (
    <div className='listOfProducts'>
        <div className='productsList mt-5 p-5'>
            {fakeProducts && fakeProducts.map((product, i) => (
                <div className='productListDisplay' key={i} onClick={() => navigate(`/products/${product.id}`)}>
                    <h3>"{product.name}"</h3>
                    <h5 className='product-font'>${product.price}</h5>
                    <img src={product.img} alt='product' />
                </div>
            ))}
        </div>
    </div>
  )
};
