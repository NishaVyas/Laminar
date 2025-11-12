import { useState, useEffect, useRef } from "react";
import Header from "../../layouts/Header";
import banner1 from "../../assets/AboutUs/banner1.jpg";
import banner2 from "../../assets/AboutUs/banner2.jpg";
import banner3 from "../../assets/AboutUs/banner3.jpg";
import banner4 from "../../assets/AboutUs/banner4.jpg";

const Banner = () => {
    const banners = [banner1, banner2, banner3, banner4];
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef(null);

    // Auto-slide logic
    useEffect(() => {
        startAutoSlide();
        return () => clearInterval(intervalRef.current);
    }, []);

    const startAutoSlide = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
        }, 4000);
    };

    const handleClick = (index) => {
        setCurrentIndex(index);
        startAutoSlide(); // Reset timer on manual click
    };

    const bannerInfo = [
        {
            title: "Delivering Trust",
            desc: "Crafting Excellence",
        },
        {
            title: "Revolutionizing Industries",
            desc: "Redefining Standards",
        },
        {
            title: "Built for Reliability",
            desc: "Driven by Innovation",
        },
        {
            title: "Powering connected future",
            desc: "Pioneering Precision",
        },
    ];

    return (
        <>
            <Header />

            <section className="relative w-full text-white pt-0">
                {/* MOBILE VIEW – full image, not cropped, no progress bars */}
                <div className="block md:hidden relative">
                    <img
                        src={banners[currentIndex]}
                        alt="Banner"
                        className="w-full h-auto block"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent z-[5]" />
                </div>

                {/* DESKTOP / LAPTOP VIEW – original style with background image & progress bars */}
                <div
                    className="hidden md:block relative w-full h-175 bg-cover bg-center pt-20 transition-all duration-700 ease-in-out"
                    style={{ backgroundImage: `url(${banners[currentIndex]})` }}
                >
                    <div className="absolute bottom-0 left-0 right-0 h-80 bg-gradient-to-t from-black to-transparent z-0" />

                    <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-end h-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm pb-8">
                            {bannerInfo.map((item, index) => (
                                <div
                                    key={index}
                                    onClick={() => handleClick(index)}
                                    className="cursor-pointer"
                                >
                                    <div className="w-full h-1 bg-gray-500 mb-4 overflow-hidden rounded">
                                        <div
                                            className={`h-full ${
                                                currentIndex === index
                                                    ? "bg-white"
                                                    : "bg-transparent"
                                            }`}
                                            style={{
                                                width:
                                                    currentIndex === index
                                                        ? "100%"
                                                        : "0%",
                                                transition:
                                                    currentIndex === index
                                                        ? "width 4s linear"
                                                        : "none",
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
            </section>
        </>
    );
};

export default Banner;
