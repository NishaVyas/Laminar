import tubing from "../../assets/Product/t-tubing.svg";
import Ball from "../../assets/Product/Ball.svg";
import axial from "../../assets/Product/axial.svg";
import adapter from "../../assets/Product/adapter.svg";
import airGun from "../../assets/Product/airGun.svg";
import tubes2 from "../../assets/Product/tubes-2.svg";
import functionFitting from "../../assets/Product/function-fitting.svg";
import compressionFitting from "../../assets/Product/compression-fitting.svg";
import transportationFitting from "../../assets/Product/transportation-fitting.svg";
import pushIn from "../../assets/Product/push-in.svg";
import circle from "../../assets/Pneumatic/circle.svg";
import tools from "../../assets/Pneumatic/tools.svg";
import supply from "../../assets/Pneumatic/supply.svg";
import isolation from "../../assets/Pneumatic/isolation.svg";
import fluid from "../../assets/Pneumatic/fluid.svg";
import settings from "../../assets/Pneumatic/Settings.svg";
import robotic from "../../assets/Pneumatic/robotic.svg";
import { FaArrowRightLong } from "react-icons/fa6";

// Mapping of application text to corresponding icons
const applicationIcons = {
  "Compressed air and gas handling systems": isolation,
  "Industrial automation and robotics": isolation,
  "Directional control of compressed air and industrial fluids": isolation,
  "Industrial pneumatic tools": supply,
  "Medical and food-grade applications": supply,
  "Food-grade tubing for beverage and medical applications": supply,
  "High-pressure fluid transfer in industrial automation": tools,
  "Fluid transfer in automation and manufacturing": fluid,
  "Precision control in pneumatic actuation & hydraulic systems": fluid,
  "Pneumatic and air brake systems": settings,
  "Automation and robotic process control": robotic,
  "Compressed air distribution in manufacturing plants": supply,
};

// Data for each category
const categoriesData = [
  {
    title: "Push-In Fittings",
    description: (
      <>
        Push-in fittings are essential for quick, tool-free connections in pneumatic circuits and compressed air systems. These fittings provide secure,
        leak proof, and durable connections for fluid and air transfer.
      </>
    ),
    applications: [
      "Industrial automation and robotics",
      "Pneumatic and air brake systems",
      "Medical and food-grade applications",
    ],
    benefits: [
      "Easy installation and removal",
      "Leak-free performance with precision sealing",
      "Compatible with various tubing materials (PU, PA, PE, FEP)",
    ],
    image: pushIn,
    url: "/pdfs/push-in-fittings.pdf",
  },
  {
    title: "Technical Tubes and Hoses",
    description: (
      <>
        High-performance tubes and hoses ensure consistent and efficient fluid transmission, handling compressed air, hydraulic fluids, and
        industrial gases.
      </>
    ),
    applications: [
      "Compressed air distribution in manufacturing plants",
      "High-pressure fluid transfer in industrial automation",
      "Food-grade tubing for beverage and medical applications",
    ],
    benefits: [
      "Abrasion-resistant and chemical-proof materials",
      "Flexible yet rigid designs for optimized performance",
      <>Withstands high-pressure environments without compromising  flow efficiency</>,
    ],
    image: tubes2,
    url: "https://laminarindia.com/Website%20PDFs/Low%20pressure/techtubes.pdf",
  },
  {
    title: "Function Fittings",
    description:
      "Function fittings regulate airflow, pressure, and system safety, optimizing pneumatic circuits for enhanced performance.",
    applications: [
      "Pneumatic control systems in industrial automation",
      "Precision fluid metering in medical and laboratory equipment",
      "Air and gas regulation in HVAC systems",
    ],
    benefits: [
      "Integrated flow control for optimized energy use",
      "Prevents backflow and pressure loss",
      "Multiple configurations, including non-return, blocking, and quick-exhaust valves",
    ],
    image: functionFitting,
    url: "https://laminarindia.com/Website%20PDFs/Low%20pressure/functionfittings.pdf",
  },
  {
    title: "Compression Fittings",
    description:
      "Compression fittings create secure and leak-proof connections in low-pressure hydraulic and pneumatic applications, ensuring high mechanical strength and easy assembly.",
    applications: [
      "Industrial cooling and lubrication circuits",
      "Gas and chemical fluid transfer in industrial processes",
      "Hydraulic systems for automated machinery",
    ],
    benefits: [
      "Robust sealing without welding or threading",
      "Withstands pressures up to 550 bar",
      "Corrosion-resistant brass, nickel-plated, and stainless steel options",
    ],
    image: compressionFitting,
    url: "https://laminarindia.com/Website%20PDFs/Low%20pressure/compressionfitings.pdf",
  },
  {
    title: "Transportation Fittings",
    description:
      "Specialized fittings designed for fluid and air connections in automotive, railway, and heavy vehicle industries.",
    applications: [
      "Air brake systems for trucks and trailers",
      "Fuel line fittings for petrol, diesel, and CNG applications",
      "Industrial and off-road vehicle pneumatic systems",
    ],
    benefits: [
      "Quick-connect technology for fast installation",
      "Leak-proof and vibration-resistant connections",
      "Meets SAE, ISO, and DOT compliance standards",
    ],
    image: transportationFitting,
    url: "https://laminarindia.com/Website%20PDFs/Low%20pressure/Transportating%20Fittings.pdf",
  },
  {
    title: "Transportation Tubings",
    description:
      "High-performance tubing solutions for automotive and industrial transport sectors, ensuring efficient and safe fluid distribution.",
    applications: [
      "Fuel transport in commercial and passenger vehicles",
      "Industrial pneumatic tools",
      "Fluid transfer in automation and manufacturing",
    ],
    benefits: [
      "One-handed operation for quick tool changes",
      "Leak-proof connections minimize air/fluid loss",
      "Compatible with high pressure and vacuum systems",
      "Available in single shut-off, double shut-off, dry-break designs",
    ],
    image: tubing,
    url: "https://laminarindia.com/Website%20PDFs/Low%20pressure/Transportation%20Tubing.pdf",
  },
  {
    title: "Industrial Ball Valves",
    description:
      "Ball valves provide precise flow control, shut-off, and system protection, ensuring durability in industrial fluid management.",
    applications: [
      "Gas and fuel shut-off in commercial pipelines",
      "Water and chemical fluid control in manufacturing plants",
      "Compressed air management in automation systems",
    ],
    benefits: [
      "Leak-proof and corrosion-resistant design",
      "Wide temperature and pressure handling capabilities",
      "Available in stainless steel, brass, and nickel-plated brass",
    ],
    image: Ball,
    url: "https://laminarindia.com/Website%20PDFs/Low%20pressure/ballvalves.pdf",
  },
  {
    title: "Energy-Saving Air Blow Guns",
    description:
      "Blow guns optimize compressed air usage, ensuring efficient cleaning, cooling, and drying operations while reducing air consumption.",
    applications: [
      "Manufacturing equipment cleaning and dust removal",
      "Cooling and drying applications in industrial settings",
      "Maintenance of pneumatic and electronic components",
    ],
    benefits: [
      "Energy-efficient design saves up to 40% compressed air",
      "Lightweight and ergonomic for operator comfort",
      "Multiple nozzle types for precision airflow control",
    ],
    image: airGun,
    url: "https://laminarindia.com/Website%20PDFs/Low%20pressure/airblowguns.pdf",
  },
  {
    title: "Adapters and Manifolds",
    description:
      "Adapters and manifolds provide secure and flexible multi-port connections, allowing efficient distribution of compressed air and industrial fluids.",
    applications: [
      "Pneumatic automation and control systems",
      "Fluid distribution in chemical and food processing industries",
      "Compressed air branching and multi-line setups",
    ],
    benefits: [
      "High-pressure tolerance for industrial environments",
      "Leak-proof threaded and push-in connection options",
      "Available in brass, stainless steel, and anodized aluminum",
    ],
    image: adapter,
    url: "https://laminarindia.com/Website%20PDFs/Low%20pressure/adapters&manifolds.pdf",
  },
  {
    title: "Axial Valves and Needle Valves",
    description:
      "Axial and needle valves enable precise flow control and pressure adjustment, ensuring smooth operation in pneumatic and hydraulic circuits.",
    applications: [
      "Precision metering in laboratory and pharmaceutical industries",
      "Flow regulation in HVAC and gas distribution systems",
      "Pressure relief and system isolation in industrial processes",
    ],
    benefits: [
      "Adjustable flow control for optimized system efficiency",
      "High-pressure handling capabilities up to 400 bar",
      "Available in stainless steel, brass, and polymer materials",
    ],
    image: axial,
    url: "https://laminarindia.com/Website%20PDFs/Low%20pressure/axial&needle_valves.pdf",
  },
];

const Categories = () => {
  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto px-[calc(var(--spacing)*4)] md:px-0">
        <h2 className="text-3xl md:text-3xl text-gray-900 text-left md:text-center mb-10">
          Low-Pressure Solutions{" "}
          <span className="text-[#0061A6] md:text-4xl font-bold">Categories</span>
        </h2>

        {categoriesData.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row bg-white border border-[#0061A6] mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image Section */}
            <div className="md:w-1/3 bg-[#E3EEF6] flex justify-center items-center p-4 md:p-6 min-h-[200px]">
              <img src={category.image} alt={category.title} />
            </div>

            {/* Content Section */}
            <div className="md:w-2/3 p-5 md:p-12">
              <h2 className="text-xl font-semibold text-[#1a3c5e]">
                {category.title}
              </h2>

              <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-col md:flex-row mt-4 gap-x-12 gap-y-6">
                {/* Applications */}
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#0061A6] mb-4 mt-4">
                    Applications
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {category.applications.map((app, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-5 h-5 mt-[2px] flex items-center justify-center">
                          <img
                            className="w-4 h-4 object-contain"
                            src={applicationIcons[app] || circle}
                            alt=""
                          />
                        </span>
                        <span className="text-gray-600 text-xs mb-2">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Benefits */}
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#0061A6] mb-4 mt-4">
                    Key Benefits
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {category.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="flex-shrink-0 w-5 h-5 mt-[2px] flex items-center justify-center">
                          <img className="w-4 h-4 object-contain" src={circle} alt="" />
                        </span>
                        <span className="text-gray-600 text-xs">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Download Catalog Button */}
              <a
                href={category.url}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="mt-6 bg-[#0061A6] w-40 md:w-44 cursor-pointer hover:bg-[#005089] text-white text-xs font-medium py-2.5 md:py-3 px-8 md:px-10 flex justify-center items-center"
              >
                See Catalog
                <FaArrowRightLong className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
