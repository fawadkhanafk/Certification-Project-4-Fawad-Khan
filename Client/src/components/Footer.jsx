import React from 'react'
import {FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
  return (
    <footer className='footer'>
      <div className='content'>

        <p>&copy; {new Date().getFullYear()}Shopping Cart App. All rights reserved.</p>

        <div className='socials'>

          <a href='https://facebook.com' target='_blank' rel='noopener noreferrer' aria-label='Facebook'>
            <FaFacebookF size={28} color='#3b5998'/> </a>

          <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' aria-label='Twitter'>
            <FaTwitter size={28} color='#1da1f2' /> </a> 

          <a href='https://instagram.com' target='_blank' rel='noopener noreferrer' aria-label='Instagram'>
            <FaInstagram size={28} color='#e1306c'/> </a>  

      </div>  
    </div>         
    </footer>
  );
}

export default Footer;