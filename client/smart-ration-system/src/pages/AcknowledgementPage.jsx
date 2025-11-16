import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AcknowledgementPage = () => {
  const [ackId, setAckId] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const id = localStorage.getItem('ackId');
    if (id) setAckId(id);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-emerald-200">
      <div className="bg-gray-100 border-4 border-gray-500 rounded-2xl shadow-md p-8 w-80 text-center">
        <h2 className="text-2xl font-semibold mb-4">Acknowledgement</h2>
        <p className="text-2xl font-semibold mb-4">Your Payment / Order is Confirmed</p>
        <p className="font-bold text-blue-700">ID: {ackId}</p>
        <p className="text-sm mt-2 text-gray=500">
          Please collect your items from the shop at the given time
        </p>
        <button
          onClick={() => navigate('/home')}
          className="bg-blue-600 text-white px-4 py-2 rounded-md mt-5 hover:bg-blue-700"
        >
          Return Home
        </button>
      </div>
    </div>
  );
};

export default AcknowledgementPage;
