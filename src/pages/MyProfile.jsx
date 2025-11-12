import React, { useState } from 'react';
import Header from '../layouts/Header';

const MyProfile = () => {
    const [profile, setProfile] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        location: '',
        address: '',
    });

    const [password, setPassword] = useState({
        current: '',
        new: '',
        confirm: '',
    });

    const handleProfileChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    const handlePasswordChange = (e) => {
        setPassword({ ...password, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit logic here
        console.log({ profile, password });
    };

    return (
        <>
            <Header />
            <div className="max-w-5xl mx-auto py-12 px-4 text-[#010B1E]">
                <h2 className="text-2xl font-bold mb-10">My Account</h2>

                {/* Profile Image + Name */}
                <div className="flex items-center mb-10 space-x-4">
                    <div className="w-20 h-20 rounded-full overflow-hidden">
                        <img
                            src="https://randomuser.me/api/portraits/women/44.jpg"
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">Mamie Stroman</h3>
                        <p className="text-sm text-gray-500">Businesses</p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Edit Profile Section */}
                    <div>
                        <h4 className="text-md font-semibold mb-6">Edit Profile</h4>
                        {['First Name', 'Last Name', 'Email', 'Phone', 'Location', 'Address'].map((label, i) => (
                            <div className="mb-4" key={i}>
                                <label className="block text-sm mb-1 text-[#010B1E]">{label}</label>
                                <input
                                    type="text"
                                    name={label.toLowerCase().replace(/ /g, '')}
                                    value={profile[label.toLowerCase().replace(/ /g, '')]}
                                    onChange={handleProfileChange}
                                    className="w-full border border-[#D3DBE7] px-3 py-2 text-sm  focus:outline-none focus:ring-1 focus:ring-blue-500"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Change Password Section */}
                    <div>
                        <h4 className="text-md font-semibold mb-6">Change Password</h4>
                        <div className="mb-4">
                            <label className="block text-sm mb-1 text-[#010B1E]">Current Password</label>
                            <input
                                type="password"
                                name="current"
                                value={password.current}
                                onChange={handlePasswordChange}
                                className="w-full border border-[#D3DBE7] px-3 py-2 text-sm  focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm mb-1 text-[#010B1E]">New Password</label>
                            <input
                                type="password"
                                name="new"
                                value={password.new}
                                onChange={handlePasswordChange}
                                className="w-full border border-[#D3DBE7] px-3 py-2 text-sm  focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm mb-1 text-[#010B1E]">Confirm Password</label>
                            <input
                                type="password"
                                name="confirm"
                                value={password.confirm}
                                onChange={handlePasswordChange}
                                className="w-full border border-[#D3DBE7] px-3 py-2 text-sm  focus:outline-none focus:ring-1 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-2">
                        <button
                            type="submit"
                            className="bg-[#0061A6] text-white px-6 py-2 text-sm hover:bg-[#004e88] transition"
                        >
                            Save Changes
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default MyProfile;