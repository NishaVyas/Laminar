import advantageImg from "../../assets/Hydraulics/advImg.svg";
import { IoIosCheckmark } from "react-icons/io";

const advantagesData = [
    {
        title: "Leak-Proof & High-Pressure Performance",
        description: "Precision engineering ensures durability and reliability.",
    },
    {
        title: "Corrosion-Resistant & Heavy-Duty Build",
        description: "Suitable for harsh environments and extreme conditions.",
    },
    {
        title: "Fast & Efficient Installation",
        description: "Push-to-connect, threaded, and welded options available.",
    },
    {
        title: "Optimized for Industrial & Mobile Applications",
        description: "Versatile configurations for different industries.",
    },
    {
        title: "Meets Global Safety & Performance Standards",
        description: "Ensures universal compatibility.",
    },
];

const Advantages = () => {
    return (
        <div className="bg-[#F9FAFB] py-10 px-4">
            <div className="max-w-7xl mx-auto">

                <div className="flex flex-col md:flex-row">

                    {/* Advantages List */}
                    <div className="md:w-2/3 mt-6 md:mt-0 md:pl-8">
                        <h2 className="text-3xl md:text-3xl text-gray-900  mb-10">
                            Advantages of Laminar’s{" "}
                            <span className="text-[#0061A6] font-bold md:text-3xl">Hydraulic <br /> Solutions</span>
                        </h2>

                        <div className="grid gap-y-8 gap-x-1">
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
                    <div className="md:w-2/3 -mt-14">
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