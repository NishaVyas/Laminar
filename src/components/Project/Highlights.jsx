import circle from "../../assets/Pneumatic/circle.svg";
import img1 from "../../assets/Projects/img1.svg";
import img2 from "../../assets/Projects/img2.svg";
import img3 from "../../assets/Projects/img3.svg";
import img4 from "../../assets/Projects/img4.svg";
import { useApiData } from "../../hooks/useApiData";
import { getImageUrl } from "../../config/api";

const fallbackImages = [img3, img1, img2, img4, img4];

const fallbackData = [
  {
    projectName: "Modern Coach Factory",
    location: "Raebareli, Uttar Pradesh",
    year: "2015",
    benefits: [
      "Installed 50 km of pipeline network with 35 bar N2.",
      "Completed cryogenic and compressed air installations.",
      "Integrated oxygen generation and distribution systems.",
      "Delivered with high precision and safety standards.",
    ],
    image: img3,
  },
  {
    projectName: "Rail Coach Factory",
    location: "Kapurthala, Punjab",
    year: "2019",
    benefits: [
      "Set up compressed air pipelines (1TB to 6TNB).",
      "Implemented high-pressure nitrogen generation for plasma cutting.",
      "Project execution handled with Laminar Industries.",
      "Enhanced operational efficiency with integrated systems.",
    ],
    image: img1,
  },
  {
    projectName: "Fire Hydrant System",
    location: "Turnkey Fire Safety Solutions",
    year: "2020",
    benefits: [
      "Provided complete consultancy services for fire hydrant systems.",
      "Designed and implemented fire hydrant solutions.",
      "Managed the full process, including erection and commissioning.",
      "Ensured compliance with fire safety regulations.",
    ],
    image: img2,
  },
  {
    projectName: "Chemical Industry",
    location: "Food and Industrial Gases",
    year: "2024",
    benefits: [
      "Delivered electro-polished pipeline solutions for the chemical industry.",
      "Designed low RA value pipelines for food and chemical manufacturing.",
      "Systems adapted for harsh industrial environments.",
      "Complied with industry safety standards.",
    ],
    image: img4,
  },
  {
    projectName: "Micron Lab & Semiconductor Sanand",
    location: "Sanand",
    year: "2024–25",
    benefits: [
      "Installed modular aluminium alloy piping solutions for compressed air.",
      "Executed SS compression and polymer piping systems for vacuum and specialty gases.",
      "Completed aluminium header installations (100mm) spanning ~850 meters with clean room tool hook-ups.",
      "Integrated regulators, pressure sensors, gauges, and transmitters to enhance process reliability.",
    ],
    image: img4,
  },
];

const transformHighlights = (apiData) => {
  if (!Array.isArray(apiData) || apiData.length === 0) return null;

  return apiData.map((item, index) => {
    // Parse description which is in format: projectName|||location|||year
    const parts = (item.description || "").split("|||");
    const projectName = parts[0] || item.title || "";
    const location = parts[1] || "";
    const year = parts[2] || "";

    // Get benefits from items array
    const benefits = item.items?.map(i => i.title) || [];

    // Get image URL or use fallback
    const image = item.imageUrl ? getImageUrl(item.imageUrl) : fallbackImages[index % fallbackImages.length];

    return {
      projectName,
      location,
      year,
      benefits,
      image,
    };
  });
};

const Highlights = () => {
  const { data: categoriesData } = useApiData("/api/home?type=project-highlight", fallbackData, transformHighlights);

  return (
    <div className="py-2">
      <div className="max-w-7xl mx-auto px-[calc(var(--spacing)*4)] md:px-0">
        <h2 className="text-2xl md:text-3xl text-gray-900 text-left md:text-center mb-10">
          Project{" "}
          <span className="text-[#0061A6] font-bold">Highlights</span>
        </h2>

        {categoriesData.map((category, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row bg-white border border-[#0061A6] mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="md:w-1/3 h-[250px] md:h-[400px]">
              <img
                src={category.image}
                alt="Project"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="px-[calc(var(--spacing)*4)] md:px-26 py-6 md:py-0 flex items-center">
              <div className="flex flex-col md:flex-row w-full items-start gap-6">
                {/* Description */}
                <div className="flex-1 mb-4 md:mb-0">
                  <p className="text-[#010B1E] text-lg md:text-xl leading-relaxed">
                    <strong>{category.projectName}</strong> <br />
                    {category.location} <br />
                    <strong>({category.year})</strong>
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="flex-1">
                  <ul className="space-y-3">
                    {category.benefits.map((benefit, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 leading-tight"
                      >
                        <span className="flex-shrink-0 mt-[3px] w-5 h-5 flex items-center justify-center">
                          <img
                            src={circle}
                            alt=""
                            className="w-4 h-4 object-contain"
                          />
                        </span>
                        <span className="text-[#010B1E] text-sm md:text-base">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Highlights;
