import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const [method, setMethod] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handlePayment = () => {
    if (method === "offline") {
      const id = Date.now();
      localStorage.setItem("ackId", id);
      alert(`Offline payment selected. Acknowledgement ID: ${id}`);
      navigate('/acknowledgement');
    } else if (method === "online" && password.trim() !== "") {
      const id = Date.now();
      localStorage.setItem("ackId", id);
      alert('Payment Successfull');
      navigate("/acknowledgement")
    } else {
      alert('Please choose method and enter password if online');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-80">
        <h2 className="text-xl font-semibold mb-4 text-center">Make Payment</h2>
        <select
          id="paymentMethod"
          name="paymentMethod"
          onChange={(e) => setMethod(e.target.value)}
          className="border rounded-md w-full p-2 mb-4"
        >
          <option value=''>Select Payment Method</option>
          <option value='online'>Pay Online</option>
          <option value='offline'> Pay Offline</option>
        </select>

        {method === 'online' && (
          <input
            type="password"
            placeholder="Enter Password"
            id="paymentPassword"
            name="payementPassword"
            className="border rounded-md px-3 py-2 w-full mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        )}

        <button
          onClick={handlePayment}
          className="bg-green-600 text-white w-full py-2 rounded-md hover:bg-green-700"
        >
          Confirm Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;