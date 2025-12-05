import { useApiData } from "../../hooks/useApiData";
import missionImg from "../../assets/AboutUs/mission.jpg";

// Fallback mission data (original hardcoded content)
const fallbackMission = {
  title: "Our Mission",
  description: "To build synergetic partnerships with our customers by offering efficient solutions in fluid connections, pneumatic automation and industrial hardware. To grow into new sectors and markets by introducing innovative products and services supplemented with seamless after sales service.",
  imageUrl: missionImg,
};

const OurMission = () => {
  // Fetch mission data from API with fallback
  const { data: apiMission } = useApiData(
    "/api/home?type=aboutus-mission",
    null,
    (data) => {
      const item = Array.isArray(data) ? data[0] : data;
      if (!item) return null;
      return {
        title: item.title || "Our Mission",
        description: item.description || "",
        imageUrl: item.imageUrl || missionImg,
      };
    }
  );

  // Use API data if available, otherwise use fallback
  const missionData = apiMission || fallbackMission;

  return (
    <section className="bg-gray-50 pt-0 pb-10 md:py-10">
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-25 px-[calc(var(--spacing)*4)] md:px-0"
      >
        {/* Text Column (first on mobile, second on desktop) */}
        <div className="md:w-1/2 text-left flex flex-col justify-center order-1 md:order-2 mb-6 md:mb-0">
          <h2 className="text-3xl lg:text-4xl text-[#001f3f] mb-4">
            Our <span className="text-[#0061A6] font-bold">Mission</span>
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            {missionData.description}
          </p>
        </div>

        {/* Image Column (second on mobile, first on desktop) */}
        <div className="md:w-1/2 flex justify-center md:justify-start order-2 md:order-1">
          <img
            src={missionData.imageUrl}
            alt="Mission Logo"
            className="w-[350px] md:w-[500px] lg:w-[800px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
