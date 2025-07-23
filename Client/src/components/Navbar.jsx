import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {FaShoppingCart} from 'react-icons/fa'
import { setSearchTerm, setSortOption } from '../features/ShopCart/filterSlice'

function Navbar() {
   const dispatch = useDispatch();
   const cartItems=useSelector((state)=>state.cart.items);
   const {searchTerm, sortOption} = useSelector((state)=>state.filters);



  return (

    <nav>
      <h1>Shopping Cart</h1>
      
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">
        <FaShoppingCart size={30}  style={{ marginRight: '5px' }}  />
        Cart({cartItems.length})</Link>
        <Link to="/about" className='nav-link'>About Us</Link>
      </div>


      <div className='section'>
        <input
          type='text'
          value={searchTerm}
          onChange={(e) => dispatch(setSearchTerm(e.target.value))} 
          placeholder='Search products...'
          className='input'
        />


        <select value={sortOption} 
        onChange={(e) => dispatch(setSortOption(e.target.value))} className='select'>
          <option value=''>Sort By</option>
          <option value='name'>Name (A-z)</option>
          <option value='price-low'>Price (Low-High)</option>
          <option value='price-high'>Price (High-Low)</option>
        </select>

      </div>

    </nav>
  )
}

export default Navbar;    