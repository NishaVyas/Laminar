import { useRef } from "react";
import { NavLink } from "react-router-dom";
import ArrowRight from "../../assets/Homepage/ArrowRight.svg";
import ArrowLeft from "../../assets/Homepage/ArrowLeft.svg";
import Automation from "../../assets/Homepage/Automation.jpg";
import automobile2 from "../../assets/Homepage/automobile-2.jpg";
import Cement from "../../assets/Homepage/Cement.jpg";
import construction from "../../assets/Homepage/construction.jpg";
import food from "../../assets/Homepage/food.jpg";
import LifeScience from "../../assets/Homepage/Life-Science.jpg";
import mobile from "../../assets/Homepage/mobile.jpg";
import oilGas from "../../assets/Homepage/oil-gas.jpg";
import Packaging from "../../assets/Homepage/Packaging.jpg";
import Printing from "../../assets/Homepage/Printing.jpg";
import ProcessIndustry from "../../assets/Homepage/Process-Industry.jpg";
import Textile from "../../assets/Homepage/Textile.jpg";

const Industries = () => {
  const scrollRef = useRef(null);
  const cardRef = useRef(null);

  const industries = [
    {
      image: Automation,
      title: "Automation",
      desc: "Powering industrial automation with pneumatic and hydraulic solutions for seamless motion control and precision engineering.",
    },
    {
      image: automobile2,
      title: "Automobile",
      desc: "Delivering advanced fluid solutions for fuel lines, braking systems, and automation, ensuring efficiency and precision in automotive manufacturing.",
    },
    {
      image: Cement,
      title: "Cement",
      desc: "Providing heavy-duty fluid connection systems that ensure efficiency and durability in cement production and processing.",
    },
    {
      image: construction,
      title: "Construction",
      desc: "Powering industrial automation with precision fluid connectors and precision engineering.",
    },
    {
      image: food,
      title: "Food & Beverage",
      desc: "Ensuring hygienic and contamination-free fluid handling with food-grade tubing and high-purity fluid control solutions.",
    },
    {
      image: LifeScience,
      title: "Life Science",
      desc: "Supporting medical and pharmaceutical industries with high-purity tubing, precise fluid control, and contamination-free solutions.",
    },
    {
      image: mobile,
      title: "Mobile Construction",
      desc: "POptimizing construction machinery with leak-proof, high-strength fluid connectors for uninterrupted performance.",
    },
    {
      image: oilGas,
      title: "Oil & Gas",
      desc: "Delivering high-pressure fittings, hoses, and valves designed for safe, efficient, and corrosion-resistant fluid handling.",
    },
    {
      image: Packaging,
      title: "Packaging",
      desc: "Delivering precision-engineered fluid connectors for high-speed packaging machinery and automated systems.",
    },
    {
      image: Printing,
      title: "Printing",
      desc: "Supporting industrial printing with efficient pneumatic and hydraulic solutions for precise ink and paper handling.",
    },
    {
      image: ProcessIndustry,
      title: "Process Industry",
      desc: "Optimizing fluid handling systems for chemical, pharmaceutical, and industrial processing applications.",
    },
    {
      image: Textile,
      title: "Textile",
      desc: "Enhancing textile manufacturing with specialized fluid solutions that ensure seamless processing and production efficiency.",
    },
  ];

  const scroll = (direction) => {
    if (scrollRef.current && cardRef.current) {
      const cardWidth = cardRef.current.offsetWidth + 8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      {/* Heading + Description + Desktop Arrows */}
      <div
        className="max-w-7xl mx-auto px-[calc(var(--spacing)*4)] sm:px-6"
      >
        {/* Title label */}
        <p className="text-xs text-left sm:text-center text-gray-900 mb-2">
          I N D U S T R I E S
        </p>

        <div className="relative mb-4">
          <h2 className="text-xl sm:text-2xl lg:text-4xl text-left sm:text-center text-[#001f3f]">
            Industries We{" "}
            <span className="text-[#0061A6] font-bold">Serve</span>
          </h2>

          {/* Desktop / Tablet arrows (unchanged layout) */}
          <div className="absolute right-4 top-28 sm:top-1/2 -translate-y-1/2 flex space-x-2 hidden sm:flex">
            <button
              onClick={() => scroll("left")}
              className="p-2 cursor-pointer hover:opacity-80"
            >
              <img
                src={ArrowLeft}
                alt="Previous"
                className="w-5 h-5"
              />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 cursor-pointer hover:opacity-80"
            >
              <img
                src={ArrowRight}
                alt="Next"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="text-xs sm:text-sm text-gray-700 text-left sm:text-center max-w-4xl mx-0 sm:mx-auto mb-4 sm:mb-10">
          Empowering diverse industries with high-performance fluid connection
          solutions, we ensure efficiency, reliability, and
          <br className="hidden sm:block" /> seamless operations across multiple
          sectors.
        </p>

        {/* Mobile-only arrows: right aligned, smaller, after description */}
        <div className="flex justify-end sm:hidden mb-6">
          <div className="flex space-x-1">
            <button
              onClick={() => scroll("left")}
              className="p-1 cursor-pointer hover:opacity-80"
            >
              <img
                src={ArrowLeft}
                alt="Previous"
                className="w-4 h-4"
              />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-1 cursor-pointer hover:opacity-80"
            >
              <img
                src={ArrowRight}
                alt="Next"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Scrollable Slider */}
      <div className="max-w-8xl mx-auto px-[calc(var(--spacing)*4)] sm:px-12 overflow-x-auto">
        <div
          ref={scrollRef}
          className="flex gap-2 overflow-hidden scroll-smooth no-scrollbar snap-x snap-mandatory"
        >
          {industries.map((item, index) => (
            <NavLink
              to="/industries"
              key={index}
              ref={index === 0 ? cardRef : null}
              className="snap-center flex-shrink-0 w-full sm:w-1/2 lg:w-1/3"
            >
              <div className="h-[300px] sm:h-[400px] lg:h-[500px] overflow-hidden relative group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                  <p className="text-lg font-semibold">{item.title}</p>
                  <p className="text-xs sm:text-sm mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
