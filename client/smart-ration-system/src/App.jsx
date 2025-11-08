import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import LoginConsumer from './pages/LoginConsumer';
import LoginSalesman from './pages/LoginSalesman';
import ConsumerHome from './pages/ConsumerHome';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path='/' element={<LoginConsumer />} />
      <Route path='/salesman' element={<LoginSalesman />} />
      <Route path='/home' element={<ConsumerHome />} />
    </Routes>
  </div>
)

export default App