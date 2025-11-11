import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import LoginConsumer from './pages/LoginConsumer';
import LoginSalesman from './pages/LoginSalesman';
import ConsumerHome from './pages/ConsumerHome';
import ViewProducts from './pages/ViewProducts';
import SelectProducts from './pages/SelectProducts';
import CartPage from './pages/CartPage';
import PaymentPage from './pages/PaymentPage';
import AcknowledgementPage from './pages/AcknowledgementPage';
import SalesmanDashboard from './pages/SalesmanDashboard';
import NotFound from './pages/NotFound';

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
      <Route path='/payment' element={<PaymentPage />} />
      <Route path='/acknowledgement' element={<AcknowledgementPage />} />
      <Route path='/dashboard' element={<SalesmanDashboard />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  </div>
)

export default App