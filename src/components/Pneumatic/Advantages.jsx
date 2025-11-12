import advantageImg from "../../assets/Pneumatic/automation.svg";
import { IoIosCheckmark } from "react-icons/io";

const advantagesData = [
  {
    title: "Enhanced System Efficiency",
    description: "Ensures optimal air distribution, flow control, and actuation.",
  },
  {
    title: "Leak-Proof & Energy-Saving Design",
    description: "Minimizes compressed air losses, reducing operational costs.",
  },
  {
    title: "Durable & Corrosion-Resistant",
    description: "Built from high-quality stainless steel, aluminum, and brass for long-lasting reliability.",
  },
  {
    title: "Versatile & Customizable",
    description: "Available in various configurations to suit diverse industrial needs.",
  },
  {
    title: "ISO-Certified & Globally Compliant",
    description: "Meets ISO 15552, ROHS, and IP65 protection standards.",
  },
];

const Advantages = () => {
  return (
    <div className="bg-[#F9FAFB] py-6 md:py-10 px-[calc(var(--spacing)_*_4)] sm:px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Advantages List */}
          <div className="md:w-2/3 mt-6 md:mt-0 md:pl-8">
            <h2 className="text-3xl md:text-3xl text-gray-900 mb-10">
              Advantages of Laminar's{" "}
              <span className="text-[#0061A6] font-semibold md:text-3xl">
                Pneumatic Automation Solutions
              </span>
            </h2>

            <div className="grid gap-y-5 gap-x-1">
              {advantagesData.map((advantage, index) => (
                <div key={index} className="flex flex-col items-start space-y-1">
                  <div className="flex items-center space-x-2">
                    <div className="bg-[#0061A6] rounded-full flex items-center justify-center w-4 h-4">
                      <IoIosCheckmark className="text-white w-3.5 h-3.5" />
                    </div>
                    <h3 className="font-semibold text-sm text-gray-900">
                      {advantage.title}
                    </h3>
                  </div>
                  <p className="text-gray-700 text-sm ml-7">{advantage.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-2/3 mt-8 md:-mt-14">
            <img
              src={advantageImg}
              alt="Pneumatic Automation"
              className="w-full max-w-[700px] max-h-[1000px] h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Advantages;
