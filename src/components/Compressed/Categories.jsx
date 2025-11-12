import pipe2 from "../../assets/Transair/pipe2.svg";
import hat from "../../assets/Manufacturing/hat.svg";
import robotic from "../../assets/Transair/robotic.svg";
import circle from "../../assets/Pneumatic/circle.svg";
import isolation from "../../assets/Pneumatic/isolation.svg";
import filter from "../../assets/CompressedAir/filter.svg";
import parker from "../../assets/CompressedAir/parker.svg";
import dryers from "../../assets/CompressedAir/image.png";
import parker2 from "../../assets/CompressedAir/parker2.png";
import generator from "../../assets/CompressedAir/co2.png";
import refrigeration from "../../assets/CompressedAir/refrigeration.svg";
import Settings from "../../assets/CompressedAir/Settings.svg";
import building from "../../assets/CompressedAir/building.svg";
import plaster from "../../assets/CompressedAir/plaster.svg";
import roller from "../../assets/CompressedAir/roller.svg";
import fan from "../../assets/CompressedAir/fan.svg";
import drainage from "../../assets/CompressedAir/drainage.svg";
import projector from "../../assets/CompressedAir/projector.svg";
import flow from "../../assets/CompressedAir/flow.svg";
import instrument from "../../assets/CompressedAir/instrument.svg";
import tube from "../../assets/CompressedAir/tube.svg";
import CPU from "../../assets/CompressedAir/CPU.svg";
import mode from "../../assets/CompressedAir/mode.svg";
import { FaArrowRightLong } from "react-icons/fa6";

// Mapping of application text to corresponding icons
const applicationIcons = {
  "Critical air systems": fan,
  Pharma: plaster,
  "Sensitive machinery": robotic,
  "Automated systems": Settings,
  "Paint shops": roller,
  "General industrial use": building,
  "Compressor outlets": isolation,
  "Drainage from filters": drainage,
  Receivers: projector,
  Pipelines: pipe2,
  "Flow-critical processes": flow,
  Instrumentation: instrument,
  Manufacturing: Settings,
  "Food packaging": hat,
  "Analytical labs": tube,
  Electronics: CPU,
  Spectroscopy: mode,
};

// Data for each category
const categoriesData = [
  {
    title: "Refrigeration Dryers",
    description:
      "Push-in fittings are essential for quick, tool-free connections in pneumatic circuits and compressed air systems. These fittings provide secure, leak proof, and durable connections for fluid and air transfer.",
    applications: ["General industrial use", "Automated systems"],
    benefits: ["Stable dew point", "Low maintenance", "Compact footprint"],
    image: dryers,
    url: "https://www.parker.com/content/dam/Parker-com/Literature/IGFG/PDF-Files/BRO_PKR_CGGC-Linecard_092022.pdf",
  },
  {
    title: "Desiccant Dryers",
    description:
      "Solenoid valves are electromechanically controlled devices that regulate compressed air, water, oil, and gas flow. These valves enable automated fluid control with high-speed response and leak-proof operation.",
    applications: ["Critical air systems", "Pharma", "Paint shops"],
    benefits: ["Extremely low dew point (up to -70°C)", "Oil-free delivery"],
    image: refrigeration,
    url: "https://www.parker.com/content/dam/Parker-com/Literature/IGFG/PDF-Files/BRO_PKR_CGGC-Linecard_092022.pdf",
  },
  {
    title: "Filters & Pre-Filters",
    description:
      "Push-in fittings are essential for quick, tool-free connections in pneumatic circuits and compressed air systems. These fittings provide secure, leak proof, and durable connections for fluid and air transfer.",
    applications: ["Compressor outlets", "Sensitive machinery"],
    benefits: ["Particle and oil removal", "Extended equipment life"],
    image: parker,
    url: "https://www.parker.com/content/dam/Parker-com/Literature/Industrial-Process/US-Lit/IPF_NA_Industrial-Catalog_2017_4Web.pdf",
  },
  {
    title: "Auto Drains & Moisture Separators",
    description:
      "Solenoid valves are electromechanically controlled devices that regulate compressed air, water, oil, and gas flow. These valves enable automated fluid control with high-speed response and leak-proof operation.",
    applications: ["Drainage from filters", "Receivers", "Pipelines"],
    benefits: ["Prevents water logging", "Reduces corrosion", "Maintenance-free"],
    image: parker2,
    url: "/pdfs/auto-drains.pdf",
  },
  {
    title: "Pressure Regulators & Accessories",
    description:
      "Push-in fittings are essential for quick, tool-free connections in pneumatic circuits and compressed air systems. These fittings provide secure, leak proof, and durable connections for fluid and air transfer.",
    applications: ["Flow-critical processes", "Instrumentation"],
    benefits: ["Precise control", "Safety", "Reduced downtime"],
    image: filter,
    url: "/pdfs/Pressure-Regulators.pdf",
  },
  {
    title: "Gas Generators",
    description:
      "Solenoid valves are electromechanically controlled devices that regulate compressed air, water, oil, and gas flow. These valves enable automated fluid control with high-speed response and leak-proof operation.",
    applications: [
      "Analytical labs",
      "Manufacturing",
      "Food packaging",
      "Electronics",
      "Spectroscopy",
    ],
    benefits: [
      "On-demand gas supply",
      "High purity",
      "Eliminates cylinder dependency",
      "Cost-effective",
    ],
    image: generator,
    url: "/pdfs/gas-generator.pdf",
  },
];

const Categories = () => {
  return (
    <div className="bg-[#F9FAFB] pt-10 pb-0 md:pb-10">
      <div className="max-w-7xl mx-auto px-[calc(var(--spacing)*4)] md:px-0">
        <h2 className="text-3xl md:text-3xl text-gray-900 text-left md:text-center mb-10">
          Categories Under{" "}
          <span className="text-[#0061A6] md:text-3xl font-semibold">
            Compressed Air & Gas Treatment
          </span>
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

            {/* Content Section (reduced padding on mobile) */}
            <div className="md:w-2/3 p-4 md:p-12">
              <h2 className="text-xl font-semibold text-[#1a3c5e]">
                {category.title}
              </h2>
              <p className="text-gray-600 text-[14px] mt-2 leading-relaxed">
                {category.description}
              </p>

              <div className="flex flex-col md:flex-row mt-4 gap-x-12 gap-y-6">
                {/* Applications */}
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#0061A6] mb-4 mt-4">
                    Applications
                  </h3>

                  <ul className="mt-2">
                    {category.title === "Gas Generators" ? (
                      <div className="flex flex-col sm:flex-row justify-start gap-6">
                        {/* Left 3 items */}
                        <div className="flex flex-col space-y-2">
                          {category.applications.slice(0, 3).map((app, i) => (
                            <div
                              key={i}
                              className="flex items-center text-gray-600 text-[13px]"
                            >
                              <span className="flex-shrink-0 w-5 h-5 mt-[1px] mr-2 flex items-center justify-center">
                                <img
                                  className="w-4 h-4 object-contain"
                                  src={applicationIcons[app] || circle}
                                  alt=""
                                />
                              </span>
                              <span>{app}</span>
                            </div>
                          ))}
                        </div>

                        {/* Right 2 items */}
                        <div className="flex flex-col space-y-2">
                          {category.applications.slice(3).map((app, i) => (
                            <div
                              key={i}
                              className="flex items-center text-gray-600 text-[13px]"
                            >
                              <span className="flex-shrink-0 w-5 h-5 mt-[1px] mr-2 flex items-center justify-center">
                                <img
                                  className="w-4 h-4 object-contain"
                                  src={applicationIcons[app] || circle}
                                  alt=""
                                />
                              </span>
                              <span>{app}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : (
                      category.applications.map((app, i) => (
                        <li
                          key={i}
                          className="flex items-center text-gray-600 text-[13px] mb-2"
                        >
                          <span className="flex-shrink-0 w-5 h-5 mt-[1px] mr-2 flex items-center justify-center">
                            <img
                              className="w-4 h-4 object-contain"
                              src={applicationIcons[app] || circle}
                              alt=""
                            />
                          </span>
                          <span>{app}</span>
                        </li>
                      ))
                    )}
                  </ul>
                </div>

                {/* Key Benefits */}
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#0061A6] mb-4 mt-4">
                    Key Benefits
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {category.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="flex-shrink-0 w-5 h-5 mt-[2px] mr-2 flex items-center justify-center">
                          <img
                            className="w-4 h-4 object-contain"
                            src={circle}
                            alt=""
                          />
                        </span>
                        <span className="text-gray-600 text-[13px]">
                          {benefit}
                        </span>
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
                className="mt-8 bg-[#0061A6] w-40 cursor-pointer hover:bg-[#005089] text-white text-xs font-medium py-3 px-8 flex justify-center items-center"
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
