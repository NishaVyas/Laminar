import { IoIosCheckmark } from "react-icons/io";

const features = [
    {
        title: "High-Pressure Handling",
        description: (
            <>
                Designed for extreme hydraulic loads with <br /> pressure ratings up to 10,000 psi.
            </>
        ),
    },
    {
        title: "Leak-Proof & Durable Construction",
        description: (
            <>
                Manufactured using precision-engineered materials <br /> for zero fluid loss.
            </>
        ),
    },
    {
        title: "Corrosion & Wear Resistance",
        description: (
            <>
                Stainless steel, carbon steel, and brass construction <br /> for extended service life.
            </>
        ),
    },
    {
        title: "Versatile Applications",
        description: (
            <>
                Used in construction, mining, automation, oil & gas, <br /> and power plants.
            </>
        ),
    },
    {
        title: "Meets Global Industry Standards",
        description: (
            <>
                Compliant with SAE, DIN, ISO, and ASTM <br />certifications
            </>
        ),
    },
];

const Features = () => {
    return (
        <section className="bg-gray-50 py-4 px-4">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-3xl text-gray-900 text-center">
                    Key Features of{" "}
                    <span className="text-[#0061A6] font-bold">Hydraulic Systems</span>
                </h2>

                <div className="mt-12 grid md:grid-cols-2 gap-y-6 gap-x-50">
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
                            <p className="text-gray-700 text-sm pl-6 mt-2 leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;