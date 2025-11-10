import React from "react";
import { useNavigate } from "react-router-dom";

const ViewProducts = () => {
  const navigate = useNavigate();
  const products = [
    { name: 'Rice', price: 0 },
    { name: 'Sugar', price: 20 },
    { name: 'Oil', price: 100 },
    { name: 'Dhal', price: 35 },
    { name: 'Wheat', price: 0 },
  ];

  return (
    <div className="min-h-screen felx flex-col items-center bg-gray-50 py-10">
      <h2 className="text-2xl font-semibold mb-6">Product Available</h2>
      <div className="grid grid-cols-1 gap-4 w-80">
        {products.map((p, i) => (
          <div key={i} className="bg-white shadow rounded-xl p-4 flex justify-between">
            <span>{p.name}</span>
            <span>{p.price}/Kg</span>
          </div>
        ))}
      </div>
      <button
        onClick={() => navigate('/home')}
        className="mt-6 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Return to Home
      </button>
    </div>
  );
};

export default ViewProducts;