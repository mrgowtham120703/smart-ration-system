import React from 'react'
import { useNavigate } from 'react-router-dom'

const ConsumerHome = () => {

    const navigate = useNavigate();

    return (
        <div className='dlex flex-col items-center justify-center min-h-screen bg-gray-100'>
            <div className='bg-white p-8 rounded-2xl shadow-md w-80 w-80 text-center'>
                <h2 className='text-2xl font-bold mb-6'>Welcome Consumer</h2>
                <button
                    onClick={() => navigate("/view-products")}
                    className='bg-blue-600 text-white w-full py-2 rounded-md mb-3 hover:bg-blue-700'
                >View Products</button>
                <button
                    onClick={() => navigate("/select-products")}
                    className='bg-green-600 text-white w-full py-2 rounded-md hover:bg-green-700'
                >
                    Selext Products
                </button>
            </div>
        </div>
    );
};

export default ConsumerHome