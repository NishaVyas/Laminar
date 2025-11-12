import { IoIosCheckmark } from "react-icons/io";

const features = [
  {
    title: "Energy-Efficient Air Distribution",
    description: (
      <>
        Reduces air leakage and pressure drops, ensuring optimal compressor efficiency.
      </>
    ),
  },
  {
    title: "Leak-Proof & Durable Design",
    description: (
      <>
        Advanced sealing technology ensures long-term performance and minimal maintenance.
      </>
    ),
  },
  {
    title: "Lightweight & Corrosion-Resistant",
    description: (
      <>
        Made from high-quality aluminum and reinforced polymers, eliminating rust and scale buildup.
      </>
    ),
  },
  {
    title: "Wide Pressure & Temperature Range",
    description: (
      <>
        Handles pressures up to 16 bar and temperatures from -20°C to +85°C.
      </>
    ),
  },
  {
    title: "Quick & Modular Installation",
    description: (
      <>
        Push-to-connect fittings allow fast and flexible system modifications, reducing installation costs.
      </>
    ),
  },
  {
    title: "Complies with International Standards",
    description: (
      <>
        Meets ISO 8573-1, ISO 4414, and OSHA regulations for industrial compressed air safety.
      </>
    ),
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-8 md:py-10 px-[calc(var(--spacing)_*_4)] sm:px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-3xl text-gray-900 text-left md:text-center">
          Key Features of{" "}
          <span className="text-[#0061A6] font-bold">Transair Piping Systems</span>
        </h2>

        <div className="mt-10 grid md:grid-cols-2 gap-y-8 md:gap-y-10 md:gap-x-20">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start space-y-1">
              {/* Title with Icon */}
              <div className="flex items-center space-x-2">
                <div className="bg-[#0061A6] rounded-full flex items-center justify-center w-4 h-4 flex-shrink-0">
                  <IoIosCheckmark className="text-white w-3.5 h-3.5" />
                </div>
                <h3 className="font-semibold text-sm text-gray-900">
                  {feature.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-700 text-sm pl-6 leading-relaxed">
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
