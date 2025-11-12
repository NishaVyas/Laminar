import advantageImg from "../../assets/Transair/advantageImg.svg";
import { IoIosCheckmark } from "react-icons/io";

const advantagesData = [
  {
    title: "Proven Durability in rugged industrial environments",
  },
  {
    title: "Zero Compromise on Air Purity, protecting downstream systems",
  },
  {
    title: "Plug & Play Integration with existing compressor setups",
  },
  {
    title: "Backed by Trusted Global Brands & Certifications",
  },
  {
    title: "Customizable Solutions tailored to plant requirements",
  },
];

const Advantages = () => {
  return (
    <div className="bg-[#F9FAFB] pt-6 pb-10 md:py-26 px-[calc(var(--spacing)_*_4)] md:px-0">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row">
          {/* Advantages List */}
          <div className="md:w-2/3 mt-6 md:mt-0 md:pl-8 text-left">
            <h2 className="text-3xl md:text-3xl text-gray-900 mb-10">
              Advantages of Laminar’s{" "}
              <span className="text-[#0061A6] font-semibold md:text-3xl">
                Compressed <br /> Air Treatment Solutions
              </span>
            </h2>

            <div className="grid gap-y-8 gap-x-1">
              {advantagesData.map((advantage, index) => (
                <div key={index} className="flex flex-col items-start space-y-1">
                  <div className="flex items-center space-x-2">
                    <div className="bg-[#0061A6] rounded-full flex items-center justify-center w-4 h-4">
                      <IoIosCheckmark className="text-white w-3.5 h-3.5" />
                    </div>
                    <h3 className="text-[14px] text-gray-900">{advantage.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-2/3 mt-8 md:-mt-20">
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
