import { useState } from "react";
import Verification from "./Verification";
import axios from "axios";

export default function Register({ onClose, onSwitchToLogin }) {
    const [showOtp, setShowOtp] = useState(false);
    const [email, setEmail] = useState("");
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: "",
        phone: "",
        businessName: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/signup/send-otp`, userData);
            if (response.status === 201 || response.status === 200) {
                setEmail(userData.email);
                setShowOtp(true);
            }
        } catch (err) {
            console.error("Registration error:", err.response?.data || err.message);
            alert("Registration failed: " + (err.response?.data?.message || err.message));
        }
    };

    if (showOtp) {
        return <Verification email={email} onClose={onClose} />;
    }
    return (
        <div
            className="fixed inset-0 flex items-center justify-center z-50"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
            <div className="bg-white w-full max-w-2xl rounded-3xl shadow-lg p-12 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 border cursor-pointer rounded-[6px] border-gray-300 w-6 h-6 flex items-center justify-center text-gray-500 hover:text-black text-md"
                >
                    ×
                </button>

                <h2 className="text-center text-lg font-semibold mb-1 text-[#010B1E]">Register</h2>
                <p className="text-center text-sm text-[#010B1E] mb-6">Welcome! Please enter your details.</p>
                <p className="text-center text-xs text-[#010B1E] mb-6">
                    Already have an account?{' '}
                    <span className="text-[#0061A6] cursor-pointer hover:underline" onClick={onSwitchToLogin}>
                        Sign In
                    </span>
                </p>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-[#161616]" onSubmit={handleRegister}>
                    <div>
                        <label className="block mb-1">Full Name</label>
                        <input
                            type="text"
                            required
                            name="name"
                            className="w-full border border-gray-300 px-3 py-2 bg-[#F9FAFB]"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block mb-1">Business Name</label>
                        <input
                            type="text"
                            name="businessName"
                            className="w-full border border-gray-300 px-3 py-2 bg-[#F9FAFB]"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block mb-1">Email</label>
                        <input
                            required
                            type="email"
                            name="email"
                            className="w-full border border-gray-300 px-3 py-2 bg-[#F9FAFB]"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block mb-1">Phone</label>
                        <input
                            type="tel"
                            name="phone"
                            className="w-full border border-gray-300 px-3 py-2 bg-[#F9FAFB]"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block mb-1">Password</label>
                        <input
                            type="password"
                            required
                            name="password"
                            className="w-full border border-gray-300 px-3 py-2 bg-[#F9FAFB]"
                            onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label className="block mb-1">Confirm Password</label>
                        <input
                            type="password"
                            required
                            className="w-full border border-gray-300 bg-[#F9FAFB] px-3 py-2"
                        />
                    </div>

                    <div className="col-span-1 md:col-span-2 mt-4">
                        <button
                            type="submit"
                            className="w-full bg-[#0061A6] text-white py-2 cursor-pointer hover:bg-[#004E86] transition">
                            Register Now
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}