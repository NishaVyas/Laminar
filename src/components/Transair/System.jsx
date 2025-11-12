import hose from "../../assets/Transair/hose.svg";
import pipe from "../../assets/Transair/pipe.svg";
import pipe2 from "../../assets/Transair/pipe2.svg";
import tank from "../../assets/Transair/tank.svg";
import hoseReel from "../../assets/Transair/hose-reel.png";
import home from "../../assets/Transair/home.svg";
import robotic from "../../assets/Transair/robotic.svg";
import wheel from "../../assets/Transair/Wheel.svg";
import circle from "../../assets/Pneumatic/circle.svg";
import isolation from "../../assets/Pneumatic/isolation.svg";
import { FaArrowRightLong } from "react-icons/fa6";

// Mapping of application text to corresponding icons
const applicationIcons = {
  "Workshops and production lines": home,
  "Automotive service centers and garages": wheel,
  "Automotive assembly plants and industrial workstations": robotic,
  "Vacuum and inert gas piping in cleanrooms and laboratories": tank,
  "Industrial compressed air and fluid distribution systems": pipe2,
  "Compressed air distribution in manufacturing facilities": isolation,
};

// Data for each category
const categoriesData = [
  {
    title: "Energy-Saving Transair Pipes & Fittings",
    description:
      "Transair energy-saving pipes and fittings are designed to improve efficiency and reduce operational costs, making them the ideal choice for compressed air networks.",
    applications: [
      "Compressed air distribution in manufacturing facilities",
      "Vacuum and inert gas piping in cleanrooms and laboratories",
      "Automotive assembly plants and industrial workstations",
    ],
    benefits: [
      "Reduces energy consumption by up to 30%",
      "Smooth inner surfaces prevent airflow turbulence",
      "O-ring sealed fittings provide leak-free connections",
      "Modular aluminum piping allows quick system expansion",
    ],
    image: pipe,
    url: "https://laminarindia.com/Website%20PDFs/Transair/Energy%20Saving%20Transair%20Pipes%20&%20Fittings.pdf",
  },
  {
    title: "Hose Reels",
    description:
      "Transair hose reels offer efficient and organized hose management, ensuring easy access, tangle-free storage, and prolonged hose lifespan.",
    applications: [
      "Workshops and production lines",
      "Automotive service centers and garages",
      "Industrial compressed air and fluid distribution systems",
    ],
    benefits: [
      "Automatic retraction system prevents hose tangling",
      "Durable construction for heavy-duty applications",
      "Safety lock mechanism prevents accidental hose retraction",
      "360° swivel mounting provides flexibility in use",
    ],
    image: hoseReel,
    url: "https://laminarindia.com/Website%20PDFs/Transair/Hose%20Reel.pdf",
  },
];

const System = () => {
  return (
    <div className="bg-[#F9FAFB] py-10">
      <div className="max-w-7xl mx-auto px-[calc(var(--spacing)*4)] md:px-0">
        <h2 className="text-3xl md:text-3xl text-gray-900 text-left md:text-center mb-10">
          Transair{" "}
          <span className="text-[#0061A6] md:text-3xl font-bold">Piping Systems</span>
        </h2>

        {categoriesData.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row bg-white border border-[#0061A6] mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image Section */}
            <div className="md:w-1/3 bg-[#E3EEF6] flex justify-center items-center p-4 md:p-6 min-h-[200px]">
              <img src={category.image} alt={category.title} />
            </div>

            {/* Content Section */}
            <div className="md:w-2/3 p-5 md:p-10">
              <h2 className="text-xl font-semibold text-[#1a3c5e]">
                {category.title}
              </h2>

              {/* Reduced padding in mobile for description */}
              <p className="text-gray-600 text-sm mt-2 leading-relaxed mb-3">
                {category.description}
              </p>

              <div className="flex flex-col md:flex-row mt-4 gap-x-12 gap-y-6">
                {/* Applications */}
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#0061A6] mb-3 mt-3">
                    Applications
                  </h3>
                  <ul className="mt-1 space-y-2">
                    {category.applications.map((app, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-5 h-5 mr-2">
                          <img
                            className="h-5 w-5"
                            src={applicationIcons[app] || circle}
                            alt=""
                          />
                        </span>
                        <span className="text-gray-600 text-sm mb-2">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Key Benefits */}
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-[#0061A6] mb-3 mt-3">
                    Key Benefits
                  </h3>
                  <ul className="mt-1 space-y-2">
                    {category.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start">
                        <span className="inline-block w-5 h-5 mr-2">
                          <img className="h-5 w-5" src={circle} alt="" />
                        </span>
                        <span className="text-gray-600 text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Download Catalog Button */}
              <a
                href={category.url}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="mt-6 bg-[#0061A6] w-48 md:w-52 cursor-pointer hover:bg-[#005089] text-white text-xs font-medium py-2.5 md:py-3 px-8 md:px-10 flex justify-center items-center"
              >
                Download Catalog
                <FaArrowRightLong className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


export default System;
