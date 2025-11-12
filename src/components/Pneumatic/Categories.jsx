import Cylinder from "../../assets/Pneumatic/Cylinder.svg";
import FRL from "../../assets/Pneumatic/FRL.svg";
import Solenoid from "../../assets/Pneumatic/Solenoid.svg";
import quickRelease from "../../assets/Pneumatic/quickRelease.svg";
import circle from "../../assets/Pneumatic/circle.svg";
import tools from "../../assets/Pneumatic/tools.svg";
import supply from "../../assets/Pneumatic/supply.svg";
import isolation from "../../assets/Pneumatic/isolation.svg";
import fluid from "../../assets/Pneumatic/fluid.svg";
import settings from "../../assets/Pneumatic/Settings.svg";
import robotic from "../../assets/Pneumatic/robotic.svg";
import { FaArrowRightLong } from "react-icons/fa6";

const applicationIcons = {
  "Compressed air and gas handling systems": isolation,
  "Material handling and robotic arms": isolation,
  "Directional control of compressed air and industrial fluids": isolation,
  "Industrial pneumatic tools": supply,
  "Packaging, conveyor systems, and assembly lines": supply,
  "Pressure regulation in industrial air supply networks": supply,
  "Preventing wear in pneumatic actuators and tools": tools,
  "Fluid transfer in automation and manufacturing": fluid,
  "Precision control in pneumatic actuation & hydraulic systems": fluid,
  "Pick-and-place automation in manufacturing": settings,
  "Automation and robotic process control": robotic,
  "Compressed air preparation for automation systems": supply,
};

const categoriesData = [
  {
    title: "FRL (Filter, Regulator & Lubricator)",
    description:
      "FRLs ensure clean, dry, and regulated air supply, improving system efficiency and longevity. These units remove contaminants, stabilize pressures, and provide lubrication – ensuring smooth pneumatic operations.",
    applications: [
      "Compressed air preparation for automation systems",
      "Preventing wear in pneumatic actuators and tools",
      "Pressure regulation in industrial air supply networks",
    ],
    benefits: [
      "Removes moisture and particulates from the air lines",
      "Ensures consistent pressure regulation",
      "Extends equipment lifespan with precise lubrication",
      "Handles pressures up to 1.5 MPa (215 psi)",
    ],
    image: FRL,
    url: "https://laminarindia.com/Website%20PDFs/Pneumatic/White%20Legris%20frl%20Catalogue.pdf",
  },
  {
    title: "Quick Release Couplers",
    description:
      "Quick Release Couplers provide instant connections and disconnections, improving operational efficiency and safety. These couplers are used in pneumatic and hydraulic applications, ensuring leak-proof performance and energy efficiency.",
    applications: [
      "Compressed air and gas handling systems",
      "Industrial pneumatic tools",
      "Fluid transfer in automation and manufacturing",
    ],
    benefits: [
      "One-handed operation for quick tool changes",
      "Leak-proof connections minimize air/fluid loss",
      "Compatible with high pressure and vacuum systems",
      "Available in single shut-off, double shut-off, dry-break designs",
    ],
    image: quickRelease,
    url: "https://laminarindia.com/Website%20PDFs/Pneumatic/Quick%20Release%20Coulpers.pdf",
  },
  {
    title: "Pneumatic Cylinders",
    description:
      "Pneumatic cylinders convert compressed air into mechanical force, providing precise linear motion for automation systems. These actuators play a crucial role in lifting, positioning, pushing, and clamping applications.",
    applications: [
      "Material handling and robotic arms",
      "Pick-and-place automation in manufacturing",
      "Packaging, conveyor systems, and assembly lines",
    ],
    benefits: [
      "Available in ISO 15552 standard for global compatibility",
      "Lightweight aluminum and stainless steel construction",
      "High-speed operation with adjustable cushioning",
      "Wide bore and stroke ranges from 32mm to 2800mm",
      "Energy-efficient and maintenance-free operation",
    ],
    image: Cylinder,
    url: "https://laminarindia.com/Website%20PDFs/Pneumatic/Pneumatic%20Cylinders%20Brochure.pdf",
  },
  {
    title: "Solenoid Valves",
    description:
      "Solenoid valves are electromechanically controlled devices that regulate compressed air, water, oil, and gas flow. These valves enable automation of fluid control with high-speed response and leak-proof operation.",
    applications: [
      "Automation and robotic process control",
      "Directional control of compressed air and industrial fluids",
      "Precision control in pneumatic actuation & hydraulic systems",
    ],
    benefits: [
      "Fast actuation within 0.05 seconds",
      "Multiple configurations: 2/2, 3/2, 5/2, and 5/3 way valves",
      "Compatible with AC/DC voltage (AC220V, DC24V, etc.)",
      "Handles pressures up to 1.5 MPa (215 psi)",
      "Leak-proof and corrosion-resistant stainless steel, brass, and aluminum",
    ],
    image: Solenoid,
    url: "https://laminarindia.com/Website%20PDFs/Pneumatic/Legris%20Solenoid%20Valve%20Catalogue.pdf",
  },
];

const Categories = () => {
  return (
    <div className="bg-[#F9FAFB] pt-10 pb-0 md:pb-10">
      <div className="max-w-7xl mx-auto px-[calc(var(--spacing)*4)] md:px-0">
        <h2 className="text-3xl md:text-3xl text-gray-900 text-left md:text-center mb-10">
          Pneumatic Automation{" "}
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
            <div className="md:w-2/3 p-4 md:p-8">
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
                        <span className="text-gray-600 text-sm mb-2">{app}</span>
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
                        <span className="text-gray-600 text-sm">{benefit}</span>
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
                className="mt-8 bg-[#0061A6] w-52 cursor-pointer hover:bg-[#005089] text-white text-xs font-medium py-3 px-10 flex justify-center items-center"
              >
                Download Catalog
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
