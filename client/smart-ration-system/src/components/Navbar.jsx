import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className='bg-emerald-800 flex justify-between items-center px-6 py-3'>
      <h1 className='font-extrabold text-gray-200 text-lg'>SMART RATION</h1>
      <div className='flex gap-4'>
        <Link to="/" className='hover:underline decoration-2 text-gray-200 font-bold'>CONSUMER</Link>
        <Link to="/salesman" className='hover:underline decoration-2 text-gray-200 font-bold'>SALESMAN</Link>
      </div>
    </nav>
);

export default Navbar;