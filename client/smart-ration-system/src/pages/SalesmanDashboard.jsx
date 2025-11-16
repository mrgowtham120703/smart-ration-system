import React, { useEffect, useState } from 'react';

const SalesmanDashboard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const mockOrders = [
      { id: 1, name: 'Ration Card #1234', items: 'Rice 5kg, sugar 2kg', status: 'Pending' },
      { id: 2, name: 'Ration Card #5678', items: 'Oil 1L', status: 'Completed' },
      { id: 2, name: 'Ration Card #5678', items: 'Oil 1L', status: 'Completed' },
    ];
    setOrders(mockOrders);
  }, []);

  return (
    <div className='min-h-screen bg-emerald-200 flex flex-col items-center py-10'>
      <h2 className='text-2xl font-semibold mb-6'><i class="fa-solid fa-table-columns"></i> Salesman Dashboard</h2>
      <div className='w-96 space-y-3'>
        {orders.map((o) => (
          <div
            key={o.id} className='bg-gray-100 border-4 border-gray-500 shadow p-4 rounded-xl flex justify-between'>
            <div>
              <i className="fa-solid fa-id-card"></i>
              <p className='font-semibold'>{o.name}</p>
              <p className='text-sm text-gray-500'>{o.items}</p>
            </div>
            <span
              className={`${o.status === 'completed' ? 'text-green-600' : 'text-yellow-600'} font-medium`}
            >
              {o.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );

};

export default SalesmanDashboard;