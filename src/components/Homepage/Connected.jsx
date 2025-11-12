import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import hm from "../../assets/Homepage/hm.svg";
import iree from "../../assets/Events/iree-2023.jpeg";
import expo from "../../assets/Homepage/expo.svg";
import arrow from "../../assets/Homepage/arrow.svg";
import Calendar from "../../assets/Homepage/Calendar.svg";
import Map from "../../assets/Homepage/Map.svg";
import { NavLink } from "react-router-dom";

const Connected = () => {
    const events = [
        {
            image: hm,
            title: "Hannover Messe Exhibition 2024",
            description:
                "We showcased thermoplastic tubing & hoses for industrial, mobile, and DIY applications, connecting with industry experts from around the world.",
            details: "Hall 5, Stand A16/1, Hannover Exhibition Ground, Germany",
            date: "Apr 22nd - 28th, 2024",
        },
        {
            image: iree,
            title: "IREE 2023",
            description:
                "As a key exhibitor, we showcased our railway fluid connection technologies, driving advancements in railway equipment and infrastructure.",
            details: "Hall A5, Stall 5.86/A, Pragati Maidan, New Delhi",
            date: "Oct 12th - 14th, 2023",
        },
        {
            image: expo,
            title: "Automation EXPO 2023",
            description:
                "A landmark event where we introduced high-performance fluid automation systems, reinforcing our leadership in industrial automation.",
            details: "BEC, Hall 1, Goregaon East, Mumbai",
            date: "August 23rd - 26th, 2023",
        },
    ];

    const [sliderRef, slider] = useKeenSlider({
        loop: true,
        breakpoints: {
            "(min-width: 768px)": {
                slides: { perView: 2, spacing: 16 },
            },
            "(min-width: 1024px)": {
                slides: { perView: 3, spacing: 24 },
            },
        },
        slides: { perView: 1, spacing: 16 },
    });

    const prev = () => slider.current?.prev();
    const next = () => slider.current?.next();

    return (
        <section className="py-16 bg-gray-50 min-h-screen">
            {/* Heading block */}
            <div className="max-w-7xl mx-auto px-[calc(var(--spacing)_*_4)] sm:px-0">
                <p className="text-xs sm:text-sm text-gray-900 text-left sm:text-center mb-2">
                    E V E N T S
                </p>
                <h2 className="text-xl sm:text-3xl text-left sm:text-center text-[#001f3f] mb-12">
                    Stay Connected with Us at{" "}
                    <span className="text-[#0061A6] font-bold">
                        Industry-Leading Events
                    </span>
                </h2>
            </div>

            {/* Slider */}
            <div className="relative max-w-7xl mx-auto px-[calc(var(--spacing)_*_4)] sm:px-4">
                <button
                    onClick={prev}
                    className="absolute z-10 left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
                >
                    <svg
                        className="w-5 h-5 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                <NavLink to="/events">
                    <div ref={sliderRef} className="keen-slider">
                        {events.map((event, index) => (
                            <div key={index} className="keen-slider__slide">
                                <div className="flex flex-col">
                                    <img
                                        src={event.image}
                                        alt={event.title}
                                        className="w-100 h-80 object-cover mb-4 transition-transform duration-500 ease-in-out transform hover:scale-105"
                                    />
                                    <h3 className="text-base sm:text-xl font-light text-[#001f3f] flex items-center justify-between">
                                        {event.title}
                                        <img
                                            src={arrow}
                                            alt=""
                                            className="w-4 h-4 sm:w-5 sm:h-5"
                                        />
                                    </h3>
                                    <p
                                        className="text-[#010B1E] mt-2 text-sm sm:text-[11.8px] font-light mb-4"
                                        style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                                    >
                                        {event.description}
                                    </p>
                                    <hr className="text-gray-300" />
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 text-gray-600 mt-2 text-[10px] gap-2 sm:gap-0">
                                        <div className="flex items-center space-x-1">
                                            <img className="w-4 h-4" src={Map} alt="" />
                                            <span className="break-words max-w-[200px]">
                                                {event.details}
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-1 sm:ml-10">
                                            <img className="w-4 h-4" src={Calendar} alt="" />
                                            <span>{event.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </NavLink>

                <button
                    onClick={next}
                    className="absolute z-10 right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow hover:bg-gray-100"
                >
                    <svg
                        className="w-5 h-5 text-gray-800"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>
        </section>
    );
};

export default Connected;
