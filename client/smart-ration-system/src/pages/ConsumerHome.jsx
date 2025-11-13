import React from 'react'
import { useNavigate } from 'react-router-dom'

const ConsumerHome = () => {

    const navigate = useNavigate();

    return (
        <div className='bg-emerald-200 flex flex-col items-center justify-center min-h-screen'>
            <div className='bg-white border-4 border-gray-500 p-10 rounded-2xl shadow-md w-120 h-60 text-center'>
                <h2 className='text-2xl font-extrabold mb-6'><i className="fa-solid fa-door-open"></i>Welcome Consumer</h2>
                <button
                    onClick={() => navigate("/view-products")}
                    className='bg-blue-600 text-white w-full py-2 rounded-md mb-3 hover:bg-blue-700'
                > <i className ="fa-solid fa-magnifying-glass"></i> View Products</button>
                <button
                    onClick={() => navigate("/select-products")}
                    className='bg-green-600 text-white w-full py-2 rounded-md hover:bg-green-700'
                ><i className="fa-solid fa-check"></i> Select Products
                </button>
            </div>
        </div>
    );
};

export default ConsumerHome