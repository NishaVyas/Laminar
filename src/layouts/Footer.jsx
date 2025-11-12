import Email from "../assets/footer/email.svg";
import Fb from "../assets/footer/fb.svg";
import footerBg from "../assets/footer/footerBg.svg";
import linkedin from "../assets/footer/linkedin.svg";
import map from "../assets/footer/map.svg";
import phone from "../assets/footer/phone.svg";
import logo from "../assets/footer/logo.svg";
import { NavLink } from "react-router-dom";
import hm from "../assets/Homepage/hm.svg";
import expo from "../assets/Homepage/expo.svg";

const Footer = () => {
    return (
        <footer
            className="text-white"
            style={{
                backgroundImage: `url(${footerBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
                {/* Company Info */}
                <div>
                    <img src={logo} alt="Logo" className="h-10 mb-6" />
                    <p className="text-xs mb-6">
                        Laminar Group is India’s leading provider of fluid connection products in pneumatics and hydraulics with activities spread across sales & distribution, manufacturing,
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <a target="_blank" href="https://www.facebook.com/LaminarTech"><img src={Fb} alt="Facebook" className="h-6 w-6" /></a>
                        <a target="_blank" href="https://www.linkedin.com/company/laminargroup/"><img src={linkedin} alt="LinkedIn" className="h-6 w-6" /></a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="md:pl-16">
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-4 text-sm">
                        <li><NavLink to="/about-us" className="hover:underline">About Us</NavLink></li>
                        <li><NavLink to="/products" className="hover:underline">Products</NavLink></li>
                        <li><NavLink to="/parker-product" className="hover:underline">Parker Product</NavLink></li>
                        <li><NavLink to="/industries" className="hover:underline">Industries</NavLink></li>
                        <li><NavLink to="/contact-us" className="hover:underline">Contact Us</NavLink></li>
                    </ul>
                </div>

                {/* News & Articles */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Events</h3>
                    <NavLink to="/events" >
                        <div className="flex mb-4">
                            <img src={hm} alt="Article" className="w-14 h-14 rounded mr-3 flex-shrink-0" />
                            <div className="text-sm">
                                <p className="font-medium">Hannover Messe Exhibition 2024</p>
                                <p className="text-xs text-gray-300">Germany • 22 April 2024</p>
                            </div>
                        </div>
                        <div className="flex">
                            <img src={expo} alt="Article" className="w-14 h-14 rounded mr-3 flex-shrink-0" />
                            <div className="text-sm">
                                <p className="font-medium">Automechanika Frankfurt Expo 2024</p>
                                <p className="text-xs text-gray-300">Germany • 10 Sept 2024</p>
                            </div>
                        </div>
                    </NavLink>
                </div>

                {/* Corporate Office */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Corporate Office</h3>
                    <div className="flex items-start text-sm mb-3">
                        <img src={phone} alt="Phone" className="h-4 w-4 mr-2 mt-1" />
                        <span>+911204774261</span>
                    </div>
                    <div className="flex items-start text-sm mb-3">
                        <img src={Email} alt="Email" className="h-4 w-4 mr-2 mt-1" />
                        <span>info@laminarindia.com</span>
                    </div>
                    <div className="flex items-start text-sm">
                        <img src={map} alt="Map" className="h-4 w-4 mr-2 mt-1" />
                        <span>
                            C-48, Site-C, Surajpur<br />
                            Greater Noida - 201306 (UP) India
                        </span>
                    </div>
                </div>
            </div>

            {/* Footer Bottom Bar */}
            <div className="border-t border-white/20 py-4 text-xs text-gray-300 px-4 sm:px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-start md:items-center space-y-2 md:space-y-0 md:space-x-8">
                    <span>Laminar Global Industries Pvt Ltd. 2020</span>
                    <span className="hidden md:inline">|</span>
                    <span>All Rights Reserved</span>
                    {/* <span className="hidden md:inline">|</span>
                    <span>Privacy policy</span>
                    <span className="hidden md:inline">|</span>
                    <span>Terms of service</span> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;