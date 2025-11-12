import { IoIosCheckmark } from "react-icons/io";

const features = [
  {
    title: "High-Speed Operation",
    description: (
      <>
        Enables fast and accurate motion <br /> control
      </>
    ),
  },
  {
    title: "Versatile Applications",
    description: (
      <>
        Used in automation, robotics, medical, packaging, and assembly lines.
      </>
    ),
  },
  {
    title: "Energy-Efficient & Cost-Effective",
    description: (
      <>
        Reduces air consumption and operating <br /> costs
      </>
    ),
  },
  {
    title: "Compliant International Standards",
    description: (
      <>
        Meets ISO 15552, CE, ROHS, and IP65 <br /> ratings
      </>
    ),
  },
  {
    title: "Durable & Leak-Proof Designs",
    description: (
      <>
        Ensures reliable sealing and minimal <br /> maintenance
      </>
    ),
  },
];

const Features = () => {
  return (
    <section className="bg-gray-50 py-10 px-[calc(var(--spacing)*4)] md:px-0">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-3xl text-gray-900 text-left md:text-center">
          Key Features of{" "}
          <span className="text-[#0061A6]">Pneumatic Automation</span>
        </h2>

        <div className="mt-12 grid md:grid-cols-2 gap-y-10 gap-x-12">
          {features.map((feature, index) => {
            const isShifted =
              feature.title === "Versatile Applications" ||
              feature.title === "Compliant International Standards";

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
                  <h3 className="font-semibold text-sm text-gray-900">
                    {feature.title}
                  </h3>
                </div>

                {/* Description below */}
                <p className="text-gray-700 text-sm ml-7">
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
