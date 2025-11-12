import { useEffect, useState } from "react";
import Banner1 from "../../assets/header/Banner1.jpg";
import Banner2 from "../../assets/header/banner2.jpg";
import Banner3 from "../../assets/header/banner3.jpg";
import Banner4 from "../../assets/header/banner4.jpg";
import logo2 from "../../assets/header/logo2.svg";
import { NavLink } from "react-router-dom";
import SearchBox from "../SearchBox/SearchBox";
import Login from "../Modal/Login";
import Register from "../Modal/Register";
import { FaAngleDown } from "react-icons/fa6";

const TopBanner = () => {
  const banners = [Banner1, Banner2, Banner3, Banner4];
  const token = localStorage.getItem("laminar-token");
  const userDataString = localStorage.getItem("laminar-user");
  const userData = userDataString ? JSON.parse(userDataString) : null;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalType, setModalType] = useState(null); // "login" | "register" | null
  const [showDropdown, setShowDropdown] = useState(false);

  const handleClose = () => setModalType(null);

  const dropdownOpt = ["My Profile", "Log Out"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [banners.length]);

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {isAtTop && (
        <header className="fixed top-0 w-full z-50 bg-transparent text-white transition-all duration-500">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-2 py-4">
            <img src={logo2} alt="Logo" className="h-4 md:h-8" />

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 text-sm">
              <NavLink to="/about-us" className="hover:text-blue-400">
                About Us
              </NavLink>
              <NavLink to="/products" className="hover:text-blue-400">
                Products
              </NavLink>
              <NavLink to="/parker-product" className="hover:text-blue-400">
                Parker Product
              </NavLink>
              <NavLink to="/industries" className="hover:text-blue-400">
                Industries
              </NavLink>
              <NavLink to="/projects" className="hover:text-blue-400">
                Projects
              </NavLink>
              <NavLink to="/manufacturing" className="hover:text-blue-400">
                Manufacturing Operation
              </NavLink>
            </nav>

            {/* Search + Auth (desktop only) + Mobile Toggle */}
            <div className="flex items-center space-x-4">
              <SearchBox type="home" />

              {/* DESKTOP/LAPTOP AUTH: unchanged; hidden on mobile */}
              <div className="hidden md:block">
                {!token ? (
                  <button
                    className="border border-[#0061A6] bg-[#0061A6] cursor-pointer text-white px-4 py-2 ml-4 text-xs transition"
                    onClick={() => setModalType("login")}
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
                      <span className="text-white">{userData?.name}</span>
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
              </div>

              {/* Hamburger Icon (Mobile Only) */}
              <button
                className="md:hidden text-white"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Slide-in Mobile Menu (Right Side) */}
          <div
            className={`md:hidden fixed top-0 right-0 w-64 h-screen bg-white/95 px-4 py-6 text-sm space-y-4 z-40 transform transition-transform duration-300 ease-in-out ${
              menuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {/* Close button */}
            <div className="flex justify-end mb-4">
              <button onClick={() => setMenuOpen(false)}>
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

            <NavLink
              to="/about-us"
              className="block text-black hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/products"
              className="block text-black hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Products
            </NavLink>
            <NavLink
              to="/parker-product"
              className="block text-black hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Parker Products
            </NavLink>
            <NavLink
              to="/industries"
              className="block text-black hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Industries
            </NavLink>
            <NavLink
              to="/events"
              className="block text-black hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Events
            </NavLink>
            <NavLink
              to="/manufacturing"
              className="block text-black hover:text-blue-600"
              onClick={() => setMenuOpen(false)}
            >
              Manufacturing Operation
            </NavLink>

            {/* AUTH SECTION — MOBILE ONLY (inside hamburger) */}
            <div className="pt-2 border-t border-gray-200" />

            {!token ? (
              <button
                className="w-full border border-[#0061A6] bg-[#0061A6] text-white px-4 py-2 text-sm rounded cursor-pointer"
                onClick={() => {
                  setMenuOpen(false);
                  setModalType("login");
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
                          setMenuOpen(false);
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
        </header>
      )}

      {/* Banner Section */}
      <section className="relative w-full text-white pt-0">
        {/* MOBILE VIEW: full image, no crop, no extra space, no progress bars */}
        <div className="block md:hidden relative">
          <img
            src={banners[currentIndex]}
            alt="Banner"
            className="w-full h-auto block"
          />
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-[5]" />
        </div>

        {/* DESKTOP / LAPTOP VIEW: keep original style */}
        <div
          className="hidden md:block relative w-full h-screen bg-cover bg-center pt-20 transition-all duration-700 ease-in-out"
          style={{ backgroundImage: `url(${banners[currentIndex]})` }}
        >
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-[5]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-end h-full">
            {/* Progress bars + text only on md+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm pb-8">
              {[
                { title: "Delivering Trust", desc: "Crafting Excellence" },
                { title: "Revolutionizing Industries", desc: "Redefining Standards" },
                { title: "Built for Reliability", desc: "Driven by Innovation" },
                { title: "Powering connected future", desc: "Pioneering Precision" },
              ].map((item, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="cursor-pointer"
                >
                  <div className="w-full h-1 bg-gray-500 mb-4 overflow-hidden rounded">
                    <div
                      className={`h-full ${
                        currentIndex === index ? "bg-white" : "bg-transparent"
                      }`}
                      style={{
                        width: currentIndex === index ? "100%" : "0%",
                        transition:
                          currentIndex === index ? "width 4s linear" : "none",
                      }}
                    />
                  </div>
                  <p className="text-white-100">{item.desc}</p>
                  <p className="font-bold">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {modalType === "login" && (
          <Login
            onClose={handleClose}
            onSwitchToRegister={() => setModalType("register")}
          />
        )}

        {modalType === "register" && (
          <Register
            onClose={handleClose}
            onSwitchToLogin={() => setModalType("login")}
          />
        )}
      </section>
    </>
  );
};

export default TopBanner;
