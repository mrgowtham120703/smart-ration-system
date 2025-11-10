import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('cart') || '[]');
    setCart(data);
  }, []);

  const total = cart.reduce((acc, x) => acc + x.price * x.quantity, 0);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-50 py-20">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
      <div className="w-80 space-y-3">
        {cart.map((item, i) => (
          <div key={i} className="bg-white p-4 rounded-xl shadow flex justify=between">
            <span>{item.name}</span>
            <span>{item.quantity}kg x ₹{item.price} = ₹{item.quantity * item.price}</span>
          </div>
        ))}
      </div>
      <h3 className="mt-6 font-bold text-lg">Total: ₹{total}</h3>
      <div className="flex gap-3 mt-4">
        <button
          onClick={() => navigate('/select-products')}
          className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
        >Return
        </button>
        <button
          onClick={() => navigate('/payment')}
          className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
        >Make Payment
        </button>
      </div>
    </div>
  );
};

export default CartPage;