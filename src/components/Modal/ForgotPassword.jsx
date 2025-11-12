import { useState, useRef, useEffect } from "react";
import axios from "axios";

export default function ForgotPasswordPopup({ onClose }) {
    const [step, setStep] = useState(1);
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState(Array(6).fill(""));
    const [timer, setTimer] = useState(0);
    const [resendMsg, setResendMsg] = useState("");
    const [passwordData, setPasswordData] = useState({ password: "", confirmPassword: "" });
    const [loading, setLoading] = useState(false);

    const inputsRef = useRef([]);

    useEffect(() => {
        let interval;
        if (timer > 0) {
            interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
        }
        return () => clearInterval(interval);
    }, [timer]);

    const sendOtp = async () => {
        setLoading(true);
        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/forgot-password/send-otp`, { email });
            setStep(2);
            setTimer(30);
        } catch (err) {
            alert(err.response?.data?.message || "Failed to send OTP");
            // setErr(err.response?.data?.message || "Failed to send OTP")
        }
        finally {
            setLoading(false);
        }
    };

    const verifyOtp = async () => {
        setLoading(true);
        const enteredOtp = otp.join("");
        if (enteredOtp.length < 6) return alert("Enter full OTP");

        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/forgot-password/verify-otp`, { email, otp: enteredOtp });
            setStep(3);
        } catch (err) {
            alert(err.response?.data?.message || "OTP verification failed");
            // setErr(err.response?.data?.message || "OTP verification failed")
        } finally {
            setLoading(false);
        }
    };

    const resendOtp = async () => {
        setLoading(true);
        if (timer > 0) return;
        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/forgot-password/send-otp`, { email });
            setTimer(30);
            setResendMsg("OTP resent successfully.");
        } catch (err) {
            setResendMsg(err.response?.data?.message || "Failed to resend OTP");
            // setErr(err.response?.data?.message || "Failed to resend OTP")
        } finally {
            setLoading(false);
        }
    };

    const resetPassword = async () => {
        setLoading(true);
        const enteredOtp = otp.join("");
        const { password, confirmPassword } = passwordData;
        if (!password || password !== confirmPassword) return alert("Passwords must match and not be empty.");

        try {
            await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/users/forgot-password/reset`, { email, newPassword: password, enteredOtp });
            alert("Password reset successful. Please login.");
            onClose();
        } catch (err) {
            alert(err.response?.data?.message || "Failed to reset password");
        } finally {
            setLoading(false);
        }
    };

    const handleOtpChange = (e, index) => {
        const value = e.target.value;
        if (/^[0-9]$/.test(value)) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);
            if (index < 5) inputsRef.current[index + 1]?.focus();
        } else {
            e.target.value = "";
        }
    };

    const handleOtpBackspace = (e, index) => {
        if (e.key === "Backspace") {
            const newOtp = [...otp];
            newOtp[index] = "";
            setOtp(newOtp);
            if (!e.target.value && index > 0) inputsRef.current[index - 1]?.focus();
        }
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="bg-white w-full max-w-md rounded-3xl shadow-lg p-10 relative">
                {/* <button onClick={onClose} className="absolute top-4 right-4 border rounded cursor-pointer w-6 h-6 text-gray-600 hover:text-black">×</button> */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 border cursor-pointer rounded-[6px] border-gray-300 w-6 h-6 flex items-center justify-center text-gray-500 hover:text-black text-md"
                >
                    ×
                </button>

                <h2 className="text-center text-lg font-semibold text-[#010B1E] mb-4">Forgot Password</h2>

                {/* Step 1: Enter Email */}
                {step === 1 && (
                    <>
                        <label className="block text-sm mb-1 text-[#010B1E]">Enter your email</label>
                        <input type="email" required value={email} onChange={e => setEmail(e.target.value)} className="w-full border border-[#D3DBE7] text-[#010b1ec6] bg-[#F9FAFB] px-3 py-2 mb-2" />
                        <button onClick={sendOtp} className={`cursor-pointer w-full bg-[#0061A6] text-white py-2 rounded transition ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#004E86]"}`}>
                            {loading ?
                                <svg aria-hidden="true" class="inline w-5 h-5 text-gray-200 animate-spin dark:text-white fill-[#0061A6]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                : "Send OTP"}
                        </button>
                        <div className="mt-6 text-center">
                            <button
                                onClick={onClose}
                                className="text-sm cursor-pointer text-[#0061A6] hover:underline"
                            >
                                Back to Login
                            </button>
                        </div>
                    </>
                )}

                {/* Step 2: Verify OTP */}
                {step === 2 && (
                    <>
                        <p className="text-sm mb-4 text-[#010B1E]">Enter the 6-digit OTP sent to <strong>{email}</strong></p>
                        <div className="flex justify-center gap-2 mb-4 ">
                            {otp.map((digit, i) => (
                                <input
                                    key={i}
                                    maxLength="1"
                                    ref={el => inputsRef.current[i] = el}
                                    value={digit}
                                    onChange={e => handleOtpChange(e, i)}
                                    onKeyDown={e => handleOtpBackspace(e, i)}
                                    className="w-10 h-10 border text-center text-lg rounded text-[#888b8d]"
                                />
                            ))}
                        </div>
                        {resendMsg && <p className="text-green-600 text-sm mb-2 text-center">{resendMsg}</p>}
                        <p className="text-center text-sm mb-4 text-[#1E1E1E]">
                            Didn’t get the code?{" "}
                            <span
                                className={`cursor-pointer ${timer > 0 ? "text-gray-400" : "text-[#0061A6] hover:underline"}`}
                                onClick={resendOtp}
                            >
                                {timer > 0 ? `Resend in ${timer}s` : "Resend"}
                            </span>
                        </p>
                        <button onClick={verifyOtp} className="cursor-pointer w-full bg-[#0061A6] text-white py-2 rounded hover:bg-[#004E86] transition">Verify OTP</button>
                    </>
                )}

                {/* Step 3: New Password */}
                {step === 3 && (
                    <>
                        <label className="block text-sm mb-1 text-[#010B1E]">New Password</label>
                        <input
                            type="password"
                            className="w-full border px-3 py-2 mb-4 text-[#2c2d2e]"
                            value={passwordData.password}
                            onChange={e => setPasswordData(prev => ({ ...prev, password: e.target.value }))}
                        />
                        <label className="block text-sm mb-1 text-[#010B1E]">Confirm Password</label>
                        <input
                            type="password"
                            className="w-full border px-3 py-2 mb-4 text-[#2c2d2e]"
                            value={passwordData.confirmPassword}
                            onChange={e => setPasswordData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                        />
                        <button onClick={resetPassword} className="cursor-pointer w-full bg-[#0061A6] text-white py-2 rounded hover:bg-[#004E86] transition">Reset Password</button>
                    </>
                )}
            </div>

        </div>
    );
}