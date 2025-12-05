import { IoIosCheckmark } from "react-icons/io";
import { useApiData, transformChooseUs } from "../../hooks/useApiData";
import ChooseUs from "../../assets/Manufacturing/chooseUs.svg";

// Fallback advantages data (original hardcoded content)
const fallbackAdvantages = [
    {
        title: "Quality Assurance",
        description: "Every product undergoes rigorous testing to ensure it exceeds industry standards",
    },
    {
        title: "Custom Solutions",
        description: "Tailored manufacturing to suit your specific needs",
    },
    {
        title: "Expert Team",
        description: "Skilled engineers and technicians dedicated to excellence",
    },
    {
        title: "Advanced Technology",
        description: "State-of-the-art equipment for precision and efficiency",
    }
];

function Choose() {
    // Fetch choose us data from API with fallback
    const { data: apiAdvantages } = useApiData(
        "/api/home?type=manufacturing-choose-us",
        null,
        transformChooseUs
    );

    // Use API data if available, otherwise use fallback
    const advantagesData = apiAdvantages || fallbackAdvantages;

    // Get image from first item if available, otherwise use default
    const chooseUsImage = (apiAdvantages && apiAdvantages[0]?.image) || ChooseUs;

    return (
        <div className="bg-[#F9FAFB] py-10 px-[calc(var(--spacing)_*_4)] sm:px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row">
                    {/* Advantages List */}
                    <div className="md:w-2/3 mt-6 md:mt-6 md:pl-8">
                        <h2 className="text-3xl md:text-3xl text-gray-900 mb-10">
                            Why{" "}
                            <span className="text-[#0061A6] font-semibold md:text-3xl">
                                Choose Us?
                            </span>
                        </h2>

                        <div className="grid gap-y-8 gap-x-1">
                            {advantagesData.map((advantage, index) => (
                                <div key={index} className="flex flex-col items-start space-y-2">
                                    <div className="flex items-center space-x-2">
                                        <div className="bg-[#0061A6] rounded-full flex items-center justify-center w-4 h-4">
                                            <IoIosCheckmark className="text-white w-3.5 h-3.5" />
                                        </div>
                                        <h3 className="font-semibold text-[13px] text-gray-900">
                                            {advantage.title}
                                        </h3>
                                    </div>
                                    <p className="text-gray-700 text-[13px] ml-7">
                                        {advantage.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="md:w-2/3 mt-10 md:-mt-14">
                        <img
                            src={chooseUsImage}
                            alt="Pneumatic Automation"
                            className="w-full max-w-[700px] max-h-[1000px] h-full object-contain"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Choose;
