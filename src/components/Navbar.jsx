import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar() {
  return (
   
    <nav className="bg-pink-600 text-white shadow-lg w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        
        <Link to="/" className="text-2xl font-black tracking-wide text-white drop-shadow-sm">
          ShopEasy
        </Link>

       
        <div className="flex gap-6 items-center font-semibold">
       
          <Link to="/" className="hover:text-pink-100 transition-colors">
            Home
          </Link>
          
          <Link to="/shop" className="hover:text-pink-100 transition-colors">
            Shop
          </Link>
          
          <Link to="/cart" className="flex items-center gap-2 hover:text-pink-100 transition-colors">
            <FaShoppingCart />
            <span>Cart</span>
          </Link>

          
          <Link to="/login" className="hover:text-pink-100 transition-colors">
            Login
          </Link>
          
         
          <Link to="/register" className="bg-pink-700 hover:bg-pink-800 text-white px-4 py-1.5 rounded-xl transition-colors shadow-sm">
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;