import React from "react";
import Home from "./components/Home"
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Footer from "./components/Footer"
import About from "./components/About"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

/**
 * This is the entry point for your react-app
 *  1. We strongly recommend comparmentalizing your code into Components
 *  2. We strongly recommend using the components folder and following whatever structure you like (for e.g., atomic design, feature-based, etc)
 *  3. We strongly recommend using a modular-approach to CSS:
 *    - An example has been provided for you, see the 'Example' component
 *    - The 'Example.jsx' component comes with an 'Example.module.css'
 *    - Pay attention to variable file import (gives access to CSS variables)
 *    - Pay special attention to how we apply the className from the imported 'styles'
 *  4. We added additional comments below to guide you
 */

function AppWrapper(){
  const location = useLocation();

  return(
    <>

    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/products" element={<ProductList />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/about" element={<About />} />
      </Routes>
      {["/", "/about", "/products"].includes(location.pathname) && <Footer /> }
    </>
  );
}

function App () {
  return (
    <Router>
      <AppWrapper />
      
    </Router>
   
  )
}

export default App;
