import { IoIosCheckmark } from "react-icons/io";

const features = [
  {
    title: "Moisture Control",
    description: (
      <>
        Advanced drying technologies including refrigerated and <br /> desiccant dryers for consistent dew point management.
      </>
    ),
  },
  {
    title: "Filtration Excellence",
    description: (
      <>
        High-efficiency filters eliminate oil, dust, and particles down to 0.01 microns
      </>
    ),
  },
  {
    title: "Pressure Regulation",
    description: (
      <>
        Smart regulators and drains to ensure consistent, <br /> pressure and system uptime
      </>
    ),
  },
  {
    title: "Energy-Efficient Design",
    description: (
      <>
        Minimized pressure drop and optimized flow pathways for energy savings.
      </>
    ),
  },
  {
    title: "Global Compliance",
    description: (
      <>
        Engineered to meet ISO 8573-1, CE, and other <br /> international air.
      </>
    ),
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 pt-0 pb-10 px-[calc(var(--spacing)*4)] md:py-10 md:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-3xl text-gray-900 text-left md:text-center">
          Key Features of{" "}
          <span className="text-[#0061A6] font-semibold">
            Compressed Air & Gas Treatment
          </span>
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-y-10 md:gap-x-20">
          {features.map((feature, index) => {
            const isShifted =
              feature.title === "Filtration Excellence" ||
              feature.title === "Energy-Efficient Design";

            return (
              <div
                key={index}
                className={`flex flex-col items-start space-y-1 ${
                  isShifted ? "md:ml-20" : ""
                }`}
              >
                {/* Title with Icon */}
                <div className="flex items-center space-x-2">
                  <div className="bg-[#0061A6] rounded-full flex items-center justify-center w-4 h-4">
                    <IoIosCheckmark className="text-white w-3.5 h-3.5" />
                  </div>
                  <h3 className="font-semibold text-[14px] text-[#010B1E]">
                    {feature.title}
                  </h3>
                </div>

                {/* Description below */}
                <p className="text-[#010B1E] text-[14px] ml-6">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
