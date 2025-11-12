import Operation1 from "../../assets/Homepage/Operation6.jpg";
import Operation2 from "../../assets/Homepage/Operation7.jpg";
import Operation3 from "../../assets/Homepage/Operation8.jpg";
import Operation4 from "../../assets/Homepage/Operation9.jpg";
import Operation5 from "../../assets/Homepage/Operation10.jpg";
import { NavLink } from "react-router-dom";

const Manufacturing = () => {
  const operations = [
    {
      title: "Plastic Tubing Extrusion",
      description:
        "Using advanced thermoplastic tubing technology with enhanced flexibility for various applications.",
      img: Operation1,
    },
    {
      title: "Tube Thermoforming",
      description:
        "With cutting-edge and precision engineering, our state-of-the-art manufacturing capabilities ensure high quality and scalable fluid connection solutions across industries.",
      img: Operation2,
    },
    {
      title: "CNC Machining",
      description:
        "Our high-precision CNC machining delivers complex and accurate components, ensuring tight tolerances and superior finishing.",
      img: Operation4,
    },
    {
      title: "Hose Assembly",
      description:
        "From crimping to high-pressure testing, our hose assembly solutions guarantee leak-proof, durable, and industry-compliant connections.",
      img: Operation3,
    },
    {
      title: "Metal Tube Bending & Assembly",
      description:
        "Using multi-axis CNC tube bending, we offer customized metal tubing solutions with high precision for fluid transmission.",
      img: Operation5,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      {/* Heading */}
      <div
        className="max-w-7xl mx-auto md:px-6"
        style={{ paddingInline: "calc(var(--spacing) * 4)" }}
      >
        <p className="text-xs md:text-sm text-left md:text-center text-gray-900 mb-2">
          M A N U F A C T U R I N G
        </p>
        <h2 className="text-2xl lg:text-3xl text-left md:text-center text-[#001f3f] mb-12">
          Manufacturing{" "}
          <span className="text-[#0061A6] font-bold">Operations</span>
        </h2>
      </div>

      {/* Carousel Container */}
      <div
        className="max-w mx-auto overflow-hidden"
        style={{ paddingInline: "calc(var(--spacing) * 4)" }}
      >
        <div className="flex animate-slide">
          {[...operations, ...operations].map((operation, idx) => (
            <div key={idx} className="flex-none w-full sm:w-1/2 lg:w-1/4 px-4">
              <div className="flex flex-col h-full border border-[#E2E2E2] overflow-hidden">
                <div className="flex-1 p-4">
                  <h3 className="text-sm font-semibold text-[#001f3f] mb-2 text-left">
                    {operation.title}
                  </h3>
                  <p className="text-xs mb-10 leading-relaxed font-light text-[#000000] text-left">
                    {operation.description}
                  </p>
                </div>
                <NavLink to="/manufacturing">
                  <img
                    src={operation.img}
                    alt={operation.title}
                    className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all cursor-pointer"
                  />
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom CSS for Animation */}
      <style>
        {`
          @keyframes slide {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-slide {
            animation: slide 20s linear infinite;
          }
          .animate-slide:hover {
            animation-play-state: paused;
          }
        `}
      </style>
    </section>
  );
};

export default Manufacturing;
