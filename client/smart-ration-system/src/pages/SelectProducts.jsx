import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SelectProducts = () => {
    const navigate = useNavigate();
    const items = [
        { name: 'Rice', price: 0, image: <i className="fa-solid fa-bowl-rice"></i> },
        { name: 'Sugar', price: 20, image: <i className="fa-solid fa-cubes-stacked"></i>  },
        { name: 'Oil', price: 100, image: <i className="fa-solid fa-oil-can"></i> },
        { name: 'Dhal', price: 35, image: <i className="fa-solid fa-bowl-food"></i> },
        { name: 'Wheat', price: 0, image: <i className="fa-solid fa-wheat-awn"></i> },
    ];

    const [selected, setSelected] = useState([]);

    const handleCheck = (item) => {
        if (selected.find((x) => x.name === item.name))
            setSelected(selected.filter((x) => x.name !== item.name));
        else setSelected([...selected, { ...item, quantity: 1 }]);
    };

    const updateQty = (item, qty) => {
        setSelected(
            selected.map((x) =>
                x.name === item.name ? { ...x, quantity: Number(qty) } : x)
        )
    };

    const proceed = () => {

        // ensure we store only the needed fields

        const safeSelected = selected.map(item => ({
           id: item._id || item.id,
           name: item.name,
           price: item.price,
           quantity: item.quantity,
  }));
        localStorage.setItem('cart', JSON.stringify(safeSelected));
        navigate('/cart');
    }

    return (
        <div className="min-h-screen flex flex-col items-center bg-emerald-200 py-8">
            <h2 className="text-2xl font-semibold mb-6">Selected Products</h2>
            <div className="w-80 space-y-4">
                {items.map((item, i) => (
                    <div key={i} className="flex justify-between bg-white p-3 rounded-xl shadow">
                        <label>
                            <input
                                type="checkbox"
                                checked={!!selected.find((x) => x.name === item.name)}
                                onChange={() => handleCheck(item)}
                            />{" "}
                            {item.name}
                        </label>
                        <input
                            type="number"
                            min='1'
                            className="border rounded-md w-16 text-center"
                            disabled={!selected.find((x) => x.name === item.name)}
                            value={
                                selected.find((x) => x.name === item.name)?.quantity || ""
                            }
                            onChange={(e) => updateQty(item, e.target.value)}
                        />
                    </div>
                ))}
            </div>
            <div className="flex gap-3 mt-6">
                <button
                    onClick={() => navigate('/home')}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >Return Home
                </button>
                <button
                    onClick={proceed}
                    className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                >
                    Proceed to Cart
                </button>
            </div>
        </div>
    );
};

export default SelectProducts;