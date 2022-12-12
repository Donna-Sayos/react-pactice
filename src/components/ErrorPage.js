import React from 'react';
import { useNavigate } from 'react-router-dom';
import IMG from "../assets/404-error.gif";

export default function ErrorPage() {
  const navigate = useNavigate();

  return (
    <div>
        <img src={IMG} alt='error img' />
        <button onClick={() => navigate('/products')}>back</button>
    </div>
  )
};