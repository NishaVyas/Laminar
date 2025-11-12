import circle from "../../assets/Pneumatic/circle.svg";
import tools from "../../assets/Pneumatic/tools.svg";
import supply from "../../assets/Pneumatic/supply.svg";
import isolation from "../../assets/Pneumatic/isolation.svg";
import fluid from "../../assets/Pneumatic/fluid.svg";
import settings from "../../assets/Pneumatic/Settings.svg";
import robotic from "../../assets/Pneumatic/robotic.svg";
import hose from "../../assets/Hydraulics/hose.svg";
import hydraulics from "../../assets/Hydraulics/hydraulics.svg";
import pipes from "../../assets/Hydraulics/pipe.svg";
import hCouplers from "../../assets/Hydraulics/h-couplers.svg";
import ball from "../../assets/Hydraulics/ball.svg";
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
        title: "Hydraulic Hoses",
        description:
            <>Hydraulic hoses transport high-pressure fluids while maintaining flexibility, durability, <br />
                and leak resistance.</>,
        applications: [
            "Heavy machinery, cranes, and excavators",
            "Oil & gas drilling and offshore applications",
            "High-speed industrial automation systems",
        ],
        benefits: [
            "Handles extreme pressure up to 6000 psi",
            "Smooth inner lining ensures optimal fluid flow",
            "Abrasion and chemical-resistant synthetic rubber and steel reinforcements",
        ],
        image: hose,
        url: "/pdfs/hose.pdf"
    },
    {
        title: "Hydraulic Fittings",
        description:
            <>Hydraulic fittings enable secure and leak-proof connections, ensuring fluid containment and <br />
                high-pressure integrity.</>,
        applications: [
            "Hydraulic presses and industrial power units",
            "Automotive braking and steering systems",
            "Oil refineries and gas distribution systems",
        ],
        benefits: [
            "Available in stainless steel, brass, and coated steel",
            "Supports BSP, NPT, JIC, and metric threading",
            "Pressure handling up to 6000 psi"
        ],
        image: hydraulics,
        url: "https://laminarindia.com/Website%20PDFs/Hydraulics/Hydraulic%20Fittings.pdf"
    },
    {
        title: "Hydraulic Couplers",
        description:
            "Hydraulic couplers provide fast and leak-free connections, allowing quick attachment and detachment of hoses and pipes.",
        applications: [
            "Heavy-duty construction vehicles",
            "Mobile hydraulic equipment and cranes",
            "Agricultural and forestry machinery",
        ],
        benefits: [
            "Flat-face, ball-lock, and push-to-connect designs",
            "Quick installation and leak-proof operation",
            "Handles extreme temperatures and pressures",
        ],
        image: hCouplers,
        url: "https://laminarindia.com/Website%20PDFs/Hydraulics/Hydraulic%20Couplers.pdf"
    },
    {
        title: "Ball Valves and Non-Return Valves",
        description:
            "Ball valves and non-return valves control fluid flow, pressure regulation, and backflow prevention in hydraulic systems.",
        applications: [
            "Industrial automation and power generation",
            "Hydraulic braking and transmission systems",
            "Marine, aerospace, and offshore industries",
        ],
        benefits: [
            "Quarter-turn operation for instant shut-off",
            "Leak-proof POM seals for high-pressure containment",
            "Corrosion-resistant brass, carbon steel, and stainless steel options",
        ],
        image: ball,
        url: "https://laminarindia.com/Website%20PDFs/Hydraulics/Hydraulic%20Ball%20Valves.pdf"
    },
    {
        title: "Seamless Hydraulic Pipes",
        description:
            "Seamless hydraulic pipes provide high-strength, precise fluid transfer in high-pressure environments.",
        applications: [
            "Hydraulic cylinders and control circuits",
            "Thermal power plants and cooling systems",
            "Mining, offshore, and deep-sea drilling rigs",
        ],
        benefits: [
            "Cold-drawn seamless construction for zero leakage",
            <>Supports bending, welding, and machining for custom <br /> applications</>,
            <>Corrosion-resistant phosphated, zinc-plated, and stainless <br /> steel options</>
        ],
        image: pipes,
        url: "https://laminarindia.com/Website%20PDFs/Hydraulics/Hydraulic%20Seamless%20Pipes.pdf"
    },
];

const Categories = ({ title }) => {
    const titleSplit = title.split(" ");
    return (
        <div className="bg-[#F9FAFB] py-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-3xl text-gray-900 text-center mb-10">
                    {titleSplit[0]}{" "}
                    <span className="text-[#0061A6] md:text-4xl font-bold">{titleSplit[1]}</span>
                </h2>
                {categoriesData.map((category, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row bg-white border border-[#0061A6] mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                            }`}
                    >
                        {/* Image Section */}
                        <div className="md:w-1/3 bg-[#E3EEF6] flex justify-center md:justify-center items-center">
                            <img
                                className="h-100"
                                src={category.image}
                                alt={category.title}
                            />
                        </div>

                        {/* Content Section */}
                        <div className="md:w-2/3 p-12">
                            <h2 className="text-xl font-semibold text-[#1a3c5e]">
                                {category.title}
                            </h2>
                            <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                                {category.description}
                            </p>

                            <div className="flex flex-col md:flex-row mt-4 gap-x-12 gap-y-6">
                                {/* Applications */}
                                <div className="flex-1">
                                    <h3 className="text-base font-semibold font-sm text-[#0061A6] mb-4 mt-4">
                                        Applications
                                    </h3>
                                    <ul className="mt-2 space-y-2">
                                        {category.applications.map((app, i) => (
                                            <li key={i} className="flex items-start">
                                                <span className="inline-block w-5 h-5 mr-2">
                                                    <img
                                                        className="h-5 w-5"
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
                                            <li key={i} className="flex items-start">
                                                <span className="inline-block w-5 h-5 mr-2">
                                                    <img className="h-5 w-5" src={circle} alt="" />
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