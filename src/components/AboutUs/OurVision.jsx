import { useApiData } from "../../hooks/useApiData";
import visionImg from "../../assets/AboutUs/vision.jpg";

// Fallback vision data (original hardcoded content)
const fallbackVision = {
  title: "Our Vision",
  description: "To be recognised in the industry as a preferred supplier of pneumatic and hydraulic fittings and hoses, and as a distinguished service provider for energy-efficient generation and distribution of gases.",
  imageUrl: visionImg,
};

const OurVision = () => {
  // Fetch vision data from API with fallback
  const { data: apiVision } = useApiData(
    "/api/home?type=aboutus-vision",
    null,
    (data) => {
      const item = Array.isArray(data) ? data[0] : data;
      if (!item) return null;
      return {
        title: item.title || "Our Vision",
        description: item.description || "",
        imageUrl: item.imageUrl || visionImg,
      };
    }
  );

  // Use API data if available, otherwise use fallback
  const visionData = apiVision || fallbackVision;

  return (
    <section className="py-20 bg-gray-50">
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-10 md:gap-25 px-[calc(var(--spacing)*4)] md:px-0"
      >
        {/* Text Column */}
        <div className="md:w-1/2 text-left flex flex-col justify-center mb-6 md:mb-0">
          <h2 className="text-3xl lg:text-4xl text-[#001f3f] mb-4">
            Our <span className="text-[#0061A6] font-bold">Vision</span>
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            {visionData.description}
          </p>
        </div>

        {/* Image Column */}
        <div className="md:w-1/2 flex justify-center md:justify-start">
          <img
            src={visionData.imageUrl}
            alt="Vision Logo"
            className="w-[350px] md:w-[500px] lg:w-[800px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default OurVision;
