import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginConsumer = () => {

   const [cardNumber, setCardNumber] = useState("");
   const navigate = useNavigate();

   const handleLogin = () => {
    if(cardNumber.trim() !== ""){
        alert("Consumer Login successfull");
        navigate('/home');
    } else {
        alert("Please enter a vlaid ration card number")
    }
   };

  return (
    <div className='flex flex-col items-center justify-center min-h-screen'>
      <div className='bg-white shadow-lg rounded-2xl p-8 w-80'>
        <h2 className='text-xl font-semibold mb-4 text-center'>Consumer Login</h2>
        <input
        type='text'
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
        placeholder='Enter a Ration Card Number'
        className='border rounded-md px-3 py-2 w-full mb-4'
        />
        <button
        onClick={handleLogin}
        className='bg-blue-600 text-white w-full py-2 rounded-md hover:bg-blue-700'
        >
        Login
        </button>
      </div>
    </div>
  );
};

export default LoginConsumer