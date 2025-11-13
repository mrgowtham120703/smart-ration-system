import React from "react";
import { useNavigate } from "react-router-dom";

const ViewProducts = () => {
  const navigate = useNavigate();
  const products = [
    { name: 'Rice', price: 0, image: <i className="fa-solid fa-bowl-rice"></i>},
    { name: 'Sugar', price: 20, image: <i className="fa-solid fa-cubes-stacked"></i> },
    { name: 'Oil', price: 100, image: <i className="fa-solid fa-oil-can"></i> },
    { name: 'Dhal', price: 35, image: <i className="fa-solid fa-bowl-food"></i> },
    { name: 'Wheat', price: 0, image: <i className="fa-solid fa-wheat-awn"></i> },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-emerald-200 py-10">
      <h2 className="text-2xl font-semibold mb-6">Product Available</h2>
      <div className="grid grid-cols-1 gap-7 w-80">
        {products.map((p, i) => (
          <div key={i} className="bg-white shadow rounded-xl p-4 flex justify-evenly">
            <span>{p.image}</span>
            <span>{p.name}</span>
            <span><i className="fa-solid fa-indian-rupee-sign"></i> {p.price}/Kg</span>
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