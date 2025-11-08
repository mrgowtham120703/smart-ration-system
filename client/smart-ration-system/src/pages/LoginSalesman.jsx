import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginSalesman = () => {
    const [shopId, setShopId] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = () => {
        if (shopId && password) {
            alert("Salesman login successfull");
            navigate("/dashboard")
        } else {
            alert("Enter valid credentials")
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-80">
                <h2 className="text=xl font-semibold mb-4 text-center">Salesman</h2>
                <input
                    type="text"
                    placeholder="Shop Number"
                    className="border rounded-md px-3 py-2 w-full mb-3"
                    value={shopId}
                    onChange={(e) => setShopId(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="border rounded-md py-3 w-full mb-4"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button
                    onClick={handleLogin}
                    className="bg-green-600 text-white w-fill py-3 rounded-md hover:bg-green-700"
                >Login
                </button>
            </div>
        </div>
    );
};

export default LoginSalesman;