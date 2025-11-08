import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className='bg-blue-700 text-white flex justify-between items-center px-6 py-3'>
      <h1 className='font-bold text-lg'>SMART RATION</h1>
      <div className='flex gap-4'>
        <Link to="/" className='hover:text-gray-200'>Consumer</Link>
        <Link to="/salesman" className='hover:text-gray-200'>Salesman</Link>
      </div>
    </nav>
);

export default Navbar;