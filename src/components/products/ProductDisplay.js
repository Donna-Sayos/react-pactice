import React from 'react';
import { useParams } from 'react-router-dom';
import { fakeProducts } from '../products/data/fakeProduct';

export default function ProductDisplay() {
  const { id } = useParams();

  return (
    <div className='listOfProducts'>
      <div className='productDisplay'>
        <h1>{fakeProducts[id - 1].name}</h1>{" "}
        <h4>{fakeProducts[id - 1].type}</h4>{" "}
        <h5>{fakeProducts[id - 1].price}</h5>{" "}
        <img src={fakeProducts[id - 1].img} alt='product' />{" "}
        <p>{fakeProducts[id - 1].description}</p>{" "}
      </div>
    </div>
  )
};
