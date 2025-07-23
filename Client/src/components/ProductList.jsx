import React, { useEffect } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/ShopCart/productSlice';
import { addToCart } from '../features/ShopCart/cartSlice';


function ProductList() {
  const {items:products, status} = useSelector((state)=>state.products);
  const dispatch=useDispatch();
  const {searchTerm, sortOption} = useSelector((state)=>state.filters);
   
    
  useEffect(()=> {
    if (status === 'idle'){
      dispatch(fetchProducts())
    }   
  },[status, dispatch])

  if(status==='loading') return <p>Loading products...</p>
  if(status==='failed') return <p>Failed to load products...please try again</p>


  const filteredBySearch = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

    const sortedProducts = [...filteredBySearch].sort((a, b) => {

      if (sortOption === 'name') {
        return a.title.localeCompare(b.title);
      } else if (sortOption === 'price-low') {
        return a.price - b.price;
      } else if (sortOption === 'price-high') {
        return b.price - a.price;
      }
      return 0;
    });
    
  return (
    <>
   <Navbar />
   <div className='product-list'>
    {sortedProducts.length === 0 ? (
      <p>No products match your criteria</p>
    ) : (
      sortedProducts.map(product =>(
        <div className='product-card' key={product.id}>
        <img src={product.image} alt={product.title}/>

        <h2>{product.title.length>20 ? `${product.title.slice(0, 20)}...` : product.title}</h2>
        <p>Price : ${product.price}</p>
        
        <button onClick={()=> dispatch(addToCart(product))} >Add to cart</button>
      </div>  
    ))
  )}
   </div>
   </>
  )
} 

export default ProductList;