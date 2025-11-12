import axios from "axios";
import { useState } from "react";
import ForgotPasswordPopup from "./ForgotPassword";

export default function Login({ onClose, onSwitchToRegister }) {
    const [userData, setUserData] = useState({ email: "", password: "" });
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [err, setErr] = useState("");

    const handleChange = (e) => {
        setErr("");
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/login`, userData);
            if (response.status === 200 || response.status === 201) {
                const { token, user } = response.data;
                localStorage.setItem("laminar-token", token);
                localStorage.setItem("laminar-user", JSON.stringify(user));
                onClose();
            }
        } catch (err) {
            console.error("Login error:", err.response?.data || err.message);
            setErr(err.response?.data?.message || err.message);
        }
    };

    if (showForgotPassword) {
        return (
            <ForgotPasswordPopup
                onClose={() => setShowForgotPassword(false)}
            />
        );
    }

    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
            <div className="bg-white w-full max-w-md rounded-3xl shadow-lg p-12 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 border cursor-pointer rounded-[6px] border-gray-300 w-6 h-6 flex items-center justify-center text-gray-500 hover:text-black text-md"
                >
                    ×
                </button>

                <h2 className="text-center text-lg font-semibold mb-1 text-[#010B1E]">Log In</h2>
                <p className="text-center text-sm text-[#010B1E] mb-4">
                    Welcome Back! Please enter your details.
                </p>
                <p className="text-center text-xs text-[#010B1E] mb-4">
                    New to Laminar?{" "}
                    <span
                        className="text-[#0061A6] cursor-pointer hover:underline"
                        onClick={onSwitchToRegister}
                    >
                        Sign up
                    </span>
                </p>

                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-sm text-[#161616] mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            required
                            className="w-full border border-gray-300 px-3 py-2 text-[#494949]"
                            placeholder="Enter email"
                            onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label className="block text-sm text-[#161616] mb-1">Password</label>
                        <input
                            required
                            type="password"
                            name="password"
                            className="w-full border border-gray-300 px-3 py-2 text-[#494949]"
                            placeholder="Enter password"
                            onChange={handleChange}
                        />
                    </div>
                    <p className="text-rose-700 font-medium text-xs">{err}</p>
                    <div className="flex items-center justify-between text-[12px] mb-6 text-gray-600">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-1" /> Remember Me
                        </label>
                        <span
                            className="text-[#0061A6] underline cursor-pointer"
                            onClick={() => setShowForgotPassword(true)}
                        >
                            Forget Password
                        </span>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#0061A6] text-white py-2 cursor-pointer hover:bg-[#004E86] transition"
                    >
                        Log In
                    </button>
                </form>
            </div>
        </div>
    );
}