import { useState } from 'react';
import Logo from "../assets/header/logo.svg";
import { NavLink } from 'react-router-dom';
import SearchBox from '../components/SearchBox/SearchBox';
import Login from '../components/Modal/Login';
import Register from '../components/Modal/Register';
import { FaAngleDown } from 'react-icons/fa6';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // controls right-side mobile drawer
  const [modalType, setModalType] = useState(null);
  const handleClose = () => setModalType(null);
  const [menuOpen, setMenuOpen] = useState(false); // (kept from your code; not used)
  const token = localStorage.getItem("laminar-token");
  const userDataString = localStorage.getItem("laminar-user");
  const userData = JSON.parse(userDataString);
  const [showDropdown, setShowDropdown] = useState(false);

  const dropdownOpt = [
    "My Profile",
    "Log Out",
  ];

  return (
    <header className="bg-white shadow-md w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-5 flex justify-between items-center">
        <NavLink to="/">
          <img src={Logo} alt="Laminar Logo" className="h-4 md:h-8" />
        </NavLink>

        {/* Hamburger Icon (opens right-side drawer) */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <svg className="h-6 w-6" fill="none" stroke="black" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-sm items-center">
          <NavLink to="/about-us" className="font-small">About Us</NavLink>
          <NavLink to="/products" className="font-small">Products</NavLink>
          <NavLink to="/parker-product" className="font-small">Parker Products</NavLink>
          <NavLink to="/industries" className="font-small">Industries</NavLink>
          <NavLink to="/projects" className="font-small">Projects</NavLink>
          <NavLink to="/manufacturing" className="font-small">Manufacturing Operation</NavLink>

          <div className="flex items-center space-x-4">
            <SearchBox />

            {!token ? (
              <button
                className="border border-[#0061A6] bg-[#0061A6] cursor-pointer text-white px-4 py-2 ml-4 text-xs transition"
                onClick={() => setModalType('login')}
              >
                Login / Register
              </button>
            ) : (
              <div className="relative text-xs">
                <button
                  onClick={() => setShowDropdown((prev) => !prev)}
                  className="flex items-center space-x-2 hover:text-blue-400 cursor-pointer"
                >
                  {userData?.image ? (
                    <img
                      src={userData.image}
                      alt="Profile"
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-gray-300 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {(userData?.name || "")
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .toUpperCase()}
                    </div>
                  )}
                  <span className="text-black">{userData?.name}</span>
                  <FaAngleDown className="text-xs mt-0.5" />
                </button>

                {showDropdown && (
                  <div className="absolute left-0 mt-2 bg-white shadow-lg border border-gray-200 rounded-md z-50 text-black whitespace-nowrap">
                    {dropdownOpt.map((option, idx) => (
                      <NavLink
                        to="/my-profile"
                        key={idx}
                        onClick={() => setShowDropdown(false)}
                        className="block px-4 py-2 text-xs hover:bg-gray-100"
                      >
                        {option}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Extra mobile hamburger inside desktop cluster (kept from your code) */}
            <button
              className="md:hidden text-white"
              onClick={() => setMenuOpen('login')}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Nav Slide-In (RIGHT SIDE) — matches upper code spacing/menus */}
      <div
        className={`md:hidden fixed top-0 right-0 w-64 h-screen bg-white/95 px-4 py-6 text-sm space-y-4 z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close button */}
        <div className="flex justify-end mb-4">
          <button onClick={() => setIsOpen(false)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Menus (same as upper code) */}
        <NavLink
          to="/about-us"
          className="block text-black hover:text-blue-600"
          onClick={() => setIsOpen(false)}
        >
          About Us
        </NavLink>
        <NavLink
          to="/products"
          className="block text-black hover:text-blue-600"
          onClick={() => setIsOpen(false)}
        >
          Products
        </NavLink>
        <NavLink
          to="/parker-product"
          className="block text-black hover:text-blue-600"
          onClick={() => setIsOpen(false)}
        >
          Parker Products
        </NavLink>
        <NavLink
          to="/industries"
          className="block text-black hover:text-blue-600"
          onClick={() => setIsOpen(false)}
        >
          Industries
        </NavLink>
        <NavLink
          to="/events"
          className="block text-black hover:text-blue-600"
          onClick={() => setIsOpen(false)}
        >
          Events
        </NavLink>
        <NavLink
          to="/manufacturing"
          className="block text-black hover:text-blue-600"
          onClick={() => setIsOpen(false)}
        >
          Manufacturing Operation
        </NavLink>

        {/* Auth section (like upper code) */}
        <div className="pt-2 border-t border-gray-200" />

        {!token ? (
          <button
            className="w-full border border-[#0061A6] bg-[#0061A6] text-white px-4 py-2 text-sm rounded cursor-pointer"
            onClick={() => {
              setIsOpen(false);
              setModalType('login');
            }}
          >
            Login / Register
          </button>
        ) : (
          <div className="text-black">
            <div className="flex items-center gap-3">
              {userData?.image ? (
                <img
                  src={userData.image}
                  alt="Profile"
                  className="w-9 h-9 rounded-full object-cover"
                />
              ) : (
                <div className="w-9 h-9 bg-gray-300 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                  {(userData?.name || "")
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </div>
              )}
              <div className="flex-1">
                <p className="text-sm font-medium">{userData?.name}</p>
                <button
                  className="flex items-center gap-1 text-xs text-gray-600"
                  onClick={() => setShowDropdown((prev) => !prev)}
                >
                  Account <FaAngleDown className="text-[10px]" />
                </button>
              </div>
            </div>

            {showDropdown && (
              <div className="mt-2 bg-white shadow border border-gray-200 rounded-md overflow-hidden">
                {dropdownOpt.map((option, idx) => (
                  <NavLink
                    to="/my-profile"
                    key={idx}
                    onClick={() => {
                      setShowDropdown(false);
                      setIsOpen(false);
                    }}
                    className="block px-4 py-2 text-xs hover:bg-gray-100 text-black"
                  >
                    {option}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      {modalType === 'login' && (
        <Login
          onClose={handleClose}
          onSwitchToRegister={() => setModalType('register')}
        />
      )}

      {modalType === 'register' && (
        <Register
          onClose={handleClose}
          onSwitchToLogin={() => setModalType('login')}
        />
      )}
    </header>
  );
};

export default Header;
