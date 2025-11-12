import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { NavLink } from "react-router-dom";
import P1 from "../../assets/Homepage/p1.svg";
import P2 from "../../assets/Homepage/p2.svg";
import P3 from "../../assets/Homepage/p3.svg";
import compressed from "../../assets/Product/compressed.jpg";
import Pipe from "../../assets/Product/Pipe.svg";

const productList = [
  {
    title: "Low Pressure Solutions",
    desc: "Delivering precision-engineered fittings, hoses, and valves, our low-pressure solutions ensure optimal fluid flow and energy efficiency in various industrial applications.",
    image: P1,
    link: "/low-pressure-product",
  },
  {
    title: "Pneumatics Solutions",
    desc: "From FRLs to solenoid valves, our pneumatic automation solutions provide seamless airflow control, durability, and high-speed performance for industrial automation.",
    image: P2,
    link: "/pneumatics",
  },
  {
    title: "Hydraulics Solutions",
    desc: "Built for high-pressure environments, our hydraulic hoses, fittings, and couplers ensure smooth power transmission and reliable leak-proof connections across industries.",
    image: P3,
    link: "/hydraulics",
  },
  {
    title: "Transair Product",
    desc: "Revolutionizing compressed air and gas distribution, our Transair piping systems and hose reels offer lightweight, corrosion-resistant, and energy-efficient performance.",
    image: Pipe,
    link: "/transair",
  },
  {
    title: "Compressed Air Piping System",
    desc: "Compressed air and gas aren’t just utilities — they’re critical lifelines in industrial ecosystems. At Laminar, we ensure these lifelines remain pure, dry, and efficient.",
    image: compressed,
    link: "/compressed-air-and-gas-treatment",
  },
];

// Autoplay plugin
const Autoplay = (slider) => {
  let timeout;
  let mouseOver = false;

  function clearNextTimeout() {
    clearTimeout(timeout);
  }

  function nextTimeout() {
    clearTimeout(timeout);
    if (mouseOver) return;
    timeout = setTimeout(() => {
      slider.next();
    }, 2000);
  }

  slider.on("created", () => {
    slider.container.addEventListener("mouseover", () => {
      mouseOver = true;
      clearNextTimeout();
    });
    slider.container.addEventListener("mouseout", () => {
      mouseOver = false;
      nextTimeout();
    });
    nextTimeout();
  });

  slider.on("dragStarted", clearNextTimeout);
  slider.on("animationEnded", nextTimeout);
  slider.on("updated", nextTimeout);
};

export default function Products() {
  const [sliderRef, slider] = useKeenSlider(
    {
      loop: true,
      slides: {
        perView: 1, // mobile default
        spacing: 16,
      },
      breakpoints: {
        "(min-width: 640px)": {
          slides: { perView: 2, spacing: 16 },
        },
        "(min-width: 768px)": {
          slides: { perView: 3, spacing: 20 },
        },
        "(min-width: 1024px)": {
          slides: { perView: 4, spacing: 24 },
        },
      },
    },
    [Autoplay]
  );

  return (
    <section className="py-16 bg-gray-50 relative">
      <div
        className="max-w-7xl mx-auto md:px-4"
        style={{ paddingInline: "calc(var(--spacing) * 4)" }}
      >
        {/* Heading Section */}
        <div className="text-left md:text-center mb-12">
          <p className="text-sm text-gray-900 mb-2">P R O D U C T S</p>
          <h2 className="text-2xl md:text-3xl text-gray-800 leading-snug">
            Partner With Us For{" "}
            <span className="text-[#0061A6] font-semibold">
              Cutting-Edge
            </span>
            <br className="hidden md:block" />
            Fluid Solutions
          </h2>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => slider.current?.prev()}
          className="absolute left-4 sm:left-6 lg:left-4 top-2/3 -translate-y-1/2 cursor-pointer z-10 bg-white hover:bg-[#0061A6] text-[#0061A6] hover:text-white transition-colors duration-300 rounded-full shadow-lg w-10 h-10 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={() => slider.current?.next()}
          className="absolute right-4 sm:right-6 lg:right-4 top-2/3 -translate-y-1/2 cursor-pointer z-10 bg-white hover:bg-[#0061A6] text-[#0061A6] hover:text-white transition-colors duration-300 rounded-full shadow-lg w-10 h-10 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            className="w-5 h-5"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Carousel */}
        <div ref={sliderRef} className="keen-slider">
          {productList.map((prod, i) => (
            <NavLink key={i} to={prod.link} className="keen-slider__slide">
              <div className="flex flex-col justify-between min-h-[100px]">
                <h3 className="text-xl text-gray-900 font-light mb-4">
                  {prod.title}
                </h3>
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-50 object-cover transform transition-transform duration-300 hover:scale-105"
                />
                <div className="pt-4">
                  <p
                    style={{ fontFamily: 'Helvetica, Arial, sans-serif' }}
                    className="text-[14px] text-gray-600 mb-4 line-clamp-5 leading-5"
                  >
                    {prod.desc}
                  </p>
                  <p className="text-[#0061A6] hover:text-[#004F8A] text-sm font-small flex items-center gap-1">
                    Learn More <span>→</span>
                  </p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
