import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import LoginConsumer from './pages/LoginConsumer';
import LoginSalesman from './pages/LoginSalesman';
import ConsumerHome from './pages/ConsumerHome';
import ViewProducts from './pages/ViewProducts';
import SelectProducts from './pages/SelectProducts';
import CartPage from './pages/CartPage';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path='/' element={<LoginConsumer />} />
      <Route path='/salesman' element={<LoginSalesman />} />
      <Route path='/home' element={<ConsumerHome />} />
      <Route path='/view-products' element={<ViewProducts />} />
      <Route path='/select-products' element={<SelectProducts />} />
      <Route path='/cart' element={<CartPage />} />
    </Routes>
  </div>
)

export default App