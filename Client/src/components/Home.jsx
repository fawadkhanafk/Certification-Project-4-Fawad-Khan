import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate();

  return (
    <div className='landing-page'>
        <div className='hero-section'>
            <h1>Welcome to ShopEase</h1>
            <p>your one-stop shop for quality products at great prices !</p>
            <button onClick={()=> navigate('/products')}>Start Shopping</button> 
            <img src='public/frontpage.jpg' alt='ShoppingCart' className='hero-image'/>
        </div>
    </div>
  );
}

export default Home;