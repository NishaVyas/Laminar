import { useRef, useState, useEffect } from "react";
import axios from "axios";

export default function Verification({ onClose, email }) {
    const inputsRef = useRef([]);
    const [otp, setOtp] = useState(Array(6).fill(""));
    const [resendMsg, setResendMsg] = useState("");
    const [loading, setLoading] = useState(false);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const handleChange = (e, index) => {
        const value = e.target.value;
        if (/^[0-9]$/.test(value)) {
            const updatedOtp = [...otp];
            updatedOtp[index] = value;
            setOtp(updatedOtp);
            if (index < 5) {
                inputsRef.current[index + 1]?.focus();
            }
        } else {
            e.target.value = "";
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace") {
            const updatedOtp = [...otp];
            updatedOtp[index] = "";
            setOtp(updatedOtp);
            if (!e.target.value && index > 0) {
                inputsRef.current[index - 1]?.focus();
            }
        }
    };

    const handleVerify = async () => {
        const enteredOtp = otp.join("");
        if (enteredOtp.length < 6) {
            alert("Please enter the full 6-digit OTP.");
            return;
        }

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/users/signup/verify-otp`,
                { email, otp: enteredOtp }
            );

            if (response.status === 201) {
                alert("OTP verified successfully!");
                onClose();
            }
        } catch (error) {
            console.error("OTP verification failed:", error);
            alert(error.response?.data?.message || "OTP verification failed");
        }
    };

    const handleResendOTP = async () => {
        if (timer > 0) return;
        setLoading(true);
        setResendMsg("");
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/users/signup/resend-otp`,
                { email }
            );

            if (response.status === 200) {
                setResendMsg("A new OTP has been sent to your email.");
                setTimer(30);
            }
        } catch (error) {
            console.error("Failed to resend OTP:", error);
            setResendMsg(error.response?.data?.message || "Failed to resend OTP");
        } finally {
            setLoading(false);
        }
    };

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

                <h2 className="text-center text-lg font-semibold mb-1 text-[#010B1E]">Verification</h2>
                <p className="text-center text-sm text-[#010B1E] mb-6">
                    Please check your email. We have sent an OTP to <br />
                    <span className="font-medium">{email}</span>
                </p>

                <div className="flex justify-center gap-2 mb-6">
                    {[...Array(6)].map((_, index) => (
                        <input
                            key={index}
                            type="text"
                            maxLength="1"
                            ref={(el) => (inputsRef.current[index] = el)}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            value={otp[index]}
                            className="w-12 h-12 text-center border border-gray-300 text-black rounded-md text-lg"
                        />
                    ))}
                </div>

                {resendMsg && (
                    <p className="text-center text-xs text-green-600 mb-2">{resendMsg}</p>
                )}

                <p className="text-center text-sm text-[#010B1E] mb-6">
                    Didn’t get the code?{" "}
                    <span
                        className={`text-[#0061A6] ${timer === 0 ? "cursor-pointer hover:underline" : "text-gray-400 cursor-not-allowed"}`}
                        onClick={handleResendOTP}
                    >
                        {timer > 0 ? `Resend in ${timer}s` : loading ? "resending..." : "Resend"}
                    </span>
                </p>

                <button
                    type="button"
                    onClick={handleVerify}
                    className="w-full bg-[#0061A6] text-white py-2 rounded-md cursor-pointer hover:bg-[#004E86] transition"
                >
                    Log In
                </button>
            </div>
        </div>
    );
}