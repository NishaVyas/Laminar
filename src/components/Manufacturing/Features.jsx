import circle from "../../assets/Pneumatic/circle.svg";
import cnc from "../../assets/Manufacturing/cnc.svg";
import wing from "../../assets/Manufacturing/wing.svg";
import wire from "../../assets/Manufacturing/wire.svg";
import tube from "../../assets/Manufacturing/tube.svg";
import tube2 from "../../assets/Manufacturing/tube2.svg";
import metalTube from "../../assets/Manufacturing/metalTube.svg";
import molding from "../../assets/Manufacturing/molding.svg";
import fuel from "../../assets/Manufacturing/fuel.svg";
import chef from "../../assets/Manufacturing/chef.svg";
import Buildings from "../../assets/Manufacturing/Buildings.svg";
import line from "../../assets/Manufacturing/line.svg";
import hat from "../../assets/Manufacturing/hat.svg";
import { NavLink } from "react-router-dom";

// Mapping of application text to corresponding icons
const applicationIcons = {
    "Food and beverage fluid systems": chef,
    "Fuel line assemblies in PA 12 for automotive/off-highway": fuel,
    "Consumer and industrial products": Buildings,
    "Industrial equipment assemblies": Buildings,
    "Automotive fuel line assemblies ": line,
    "Hydraulic tube assemblies": hat,
};

// Data for each category
const categoriesData = [
    {
        title: "Thermoplastic Tubing Extrusion",
        heading: "Key Benefits",
        description:
            "Our thermoplastic tubing extrusion capabilities deliver high-performance, durable, and flexible tubing solutions for a variety of industries. With expertise in working with materials like polyurethane, nylon, & PVC, we provide high precision tubing tailored to meet specific size, aesthetic, and functionality requirements.",
        applications: [
            "Precise wall thickness and diameter control",
            "Wide range of material options",
            "High capacity to meet bulk requirements with a short lead time",
        ],
        image: wire,
    },
    {
        title: "Tube Thermoforming",
        heading: "Applications",
        description:
            "We specialize in tube thermoforming with a steam vulcanization process to create custom shapes and configurations from thermoplastic materials. Our process ensures exceptional accuracy, strength, and uniformity, making it ideal for applications in automotive & industrial systems.",
        applications: [
            "Fuel line assemblies in PA 12 for automotive/off-highway",
            "Food and beverage fluid systems",
            "Consumer and industrial products",
        ],
        image: tube2,
    },
    {
        title: "CNC Machining",
        description:
            "Our CNC machining services deliver high-precision parts for industries requiring tight tolerances and complex geometries. From prototypes to full-scale production, we utilize cutting-edge equipment to ensure accuracy and efficiency.",
        applications: [
            "CNC milling and turning",
            "Custom machining for metals and plastics",
            "Rapid prototyping and low-to-high volume production",
        ],
        heading: "Capabilities Include",
        image: cnc,
    },
    {
        title: "Injection Molding",
        description:
            "We produce high-quality plastic components with complex designs, meeting the demands of industries such as automotive, electronics, and consumer goods. By working closely with our customers through the product development cycle, we are a partner from ideation, prototyping till production.",
        applications: [
            "Custom mold design and production",
            "High-volume manufacturing",
            "Wide range of thermoplastic materials",
        ],
        heading: "Applications",
        image: molding,
    },
    {
        title: "Hose Assembly",
        description:
            "We provide complete hose assembly solutions for hydraulic, pneumatic, and industrial applications. With in-house manufacturing of hose fittings & a stringent control & testing process, we provide bulk hose assemblies to OEMs across industries including railways, defense, agriculture, off-highway & industrial. Our assemblies are engineered for optimal durability, performance, and compatibility.",
        applications: [
            "Custom hose fabrication and crimping",
            "Wide selection of fittings and connectors",
            "Testing for pressure, flow, and leak resistance",
            "Complete batch tracking"
        ],
        heading: "Capabilities Include",
        image: tube,
    },
    {
        title: "Metal Tube Bending & Assembly",
        description:
            "Our metal tube bending and assembly services ensure precision and consistency for complex projects. We work with various materials, including stainless steel, aluminum, and brass, to create bent tubes and assemblies for critical applications.",
        applications: [
            "Hydraulic tube assemblies",
            "Automotive fuel line assemblies ",
            "Industrial equipment assemblies",
        ],
        heading: "Applications",
        image: metalTube,
    },
    {
        title: "Pneumatic Cylinder Assembly",
        description:
            "With an in-house cylinder stroking unit & a tool room, we can deliver standard & customized pneumatic cylinders at short lead times. From standard ISO 15552 profiles to pencil or compact cylinders, our exhaustive range of cylinders along with a complete range of automation & accessory products makes us an ideal partner for pneumatic solutions.",
        applications: [
            "Custom cylinder configurations",
            "Precision assembly and testing",
            "Components built to withstand harsh environments",
        ],
        heading: "Capabilities Include",
        image: wing,
    },
];

const Features = () => {
    return (
        <div className="bg-[#F9FAFB] py-10">
            <div className="max-w-7xl mx-auto px-[calc(var(--spacing)_*_4)] sm:px-4">
                {categoriesData.map((category, index) => (
                    <div
                        key={index}
                        className={`flex flex-col md:flex-row bg-white border border-[#0061A6] mb-12 ${
                            index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                        }`}
                    >
                        {/* Image Section */}
                        <div className="md:w-1/3 bg-[#E3EEF6] flex justify-center md:justify-center items-center p-6 min-h-[200px]">
                            <img
                                src={category.image}
                                alt={category.title}
                            />
                        </div>

                        {/* Content Section */}
                        <div className="md:w-2/3 p-6 sm:p-10 md:p-16">
                            <h2 className="text-xl font-semibold text-[#1a3c5e]">
                                {category.title}
                            </h2>
                            <p className="text-gray-600 text-[13px] mt-2 leading-relaxed">
                                {category.description}
                            </p>

                            <div className="flex flex-col md:flex-row mt-4 gap-x-12 gap-y-6">
                                {/* Applications */}
                                <div className="flex-1">
                                    <h3 className="text-base font-semibold font-sm text-[#0061A6] mb-4 mt-4">
                                        {category.heading}
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
                                                <span className="text-gray-600 text-[13px] mb-2">
                                                    {app}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <button className="bg-[#0061A6] cursor-pointer text-white px-6 py-2 mt-4 hover:bg-[#004d84] w-fit">
                                <NavLink to="/contact-us" className="text-xs">
                                    Know More →
                                </NavLink>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;
