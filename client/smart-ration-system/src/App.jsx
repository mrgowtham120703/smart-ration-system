import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import LoginConsumer from './pages/LoginConsumer';

const App = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path='/' element={<LoginConsumer />} />
    </Routes>
  </div>
)

export default App