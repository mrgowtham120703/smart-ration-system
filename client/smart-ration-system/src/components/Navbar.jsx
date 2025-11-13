import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className='bg-emerald-800 flex justify-between items-center px-6 py-4 sticky top-0'>
      <h1 className='font-extrabold text-gray-200 text-lg'><i className="fa-solid fa-cart-shopping"></i> SMART RATION</h1>
      <div className='flex gap-4'>
        <Link to="/" className='hover:underline decoration-2 text-gray-200 font-bold'><i className="fa-regular fa-user"></i> CONSUMER</Link>
        <Link to="/salesman" className='hover:underline decoration-2 text-gray-200 font-bold'><i className="fa-solid fa-user-tie"></i> SALESMAN</Link>
      </div>
    </nav>
);

export default Navbar;