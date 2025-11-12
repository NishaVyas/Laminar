import { IoIosCheckmark } from "react-icons/io";

const features = [
    {
        title: "High Durability & Leak-Proof Sealing",
        description: (
            <>
                Engineered for long-lasting performance with <br /> corrosion-resistant materials.
            </>
        ),
    },
    {
        title: "Energy-Efficient & Cost-Effective",
        description: (
            <>
                Reduces energy waste while maintaining high <br /> performance.
            </>
        ),
    },
    {
        title: "Wide Pressure & Temperature Range",
        description: (
            <>
                Operates efficiently in diverse industrial <br /> conditions.
            </>
        ),
    },
    {
        title: "Industry Compliance & Certifications",
        description: (
            <>
                Meets ISO, ROHS, SAE, and REACH safety <br /> standards.
            </>
        ),
    },
    {
        title: "Versatile Applications",
        description: (
            <>
                Used in automotive, industrial automation, <br />
                healthcare, food processing, and chemical <br /> industries.
            </>
        ),
    },
];

const Features = () => {
    return (
        <section className="py-4 px-[calc(var(--spacing)_*_4)] sm:px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl text-gray-900 text-left md:text-center">
                    Key Features of{" "}
                    <span className="text-[#0061A6] font-bold">Low-Pressure Solutions</span>
                </h2>

                <div className="mt-12 grid md:grid-cols-2 gap-y-10 gap-x-50">
                    {features.map((feature, index) => (
                        <div key={index} className="flex flex-col items-start space-y-1">
                            {/* Title with Icon */}
                            <div className="flex items-center space-x-2">
                                <div className="bg-[#0061A6] rounded-full flex items-center justify-center w-4 h-4">
                                    <IoIosCheckmark className="text-white w-3.5 h-3.5" />
                                </div>
                                <h3 className="font-semibold text-sm text-gray-900">
                                    {feature.title}
                                </h3>
                            </div>

                            {/* Description below */}
                            <p className="text-gray-700 text-sm pl-6 mt-2 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
