import { useApiData } from "../../hooks/useApiData";

const fallbackData = {
  title: "Our Range of Services",
  description:
    "Laminar offers a comprehensive range of services, ensuring seamless integration and efficient execution for all pipeline projects. Our capabilities span across:",
  services: [
    "Compressed Air Distribution Systems",
    "Hydraulic Fluid Lines",
    "Cryogenic Installations",
    "High-Pressure Gas Pipelines",
    "Water Pipelines",
    "Gas Manifold Systems",
    "Fire Hydrant Pipelines",
  ],
};

const transformServices = (apiData) => {
  if (!Array.isArray(apiData) || apiData.length === 0) return null;
  const item = apiData[0];
  return {
    title: item.title || fallbackData.title,
    description: item.description || fallbackData.description,
    services: item.items?.map((i) => i.title) || fallbackData.services,
  };
};

const Services = () => {
  const { data } = useApiData("/api/home?type=project-services", fallbackData, transformServices);

  const services = data.services || [];
  const firstRow = services.slice(0, 4);
  const secondRow = services.slice(4);

  // Parse title to handle "Our Range of Services" format with highlighted last word
  const renderTitle = () => {
    const title = data.title || "";
    const words = title.split(" ");
    if (words.length >= 2) {
      const firstPart = words.slice(0, -1).join(" ");
      const lastWord = words[words.length - 1];
      return (
        <>
          {firstPart} <span className="text-[#0061A6] font-bold">{lastWord}</span>
        </>
      );
    }
    return <span className="text-[#0061A6] font-bold">{title}</span>;
  };

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto text-left md:text-center px-[calc(var(--spacing)*4)] md:px-0">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl text-[#010B1E] mb-4">
          {renderTitle()}
        </h2>
        <p className="text-gray-600 max-w-3xl mx-0 md:mx-auto mb-12 text-sm md:text-base">
          {data.description}
        </p>

        {/* First Row - Grid of 4 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {firstRow.map((service, index) => (
            <div
              key={index}
              className="bg-[#E3EEF6] border border-[#D5E2EB] text-[#010B1E] font-semibold text-left md:text-center p-8 h-[150px] flex justify-center items-center text-lg"
            >
              <span className="max-w-[220px] leading-snug">{service}</span>
            </div>
          ))}
        </div>

        {/* Second Row - Flex Centered */}
        <div className="flex flex-wrap md:justify-center gap-6">
          {secondRow.map((service, index) => (
            <div
              key={index}
              className="bg-[#E3EEF6] border border-[#D5E2EB] text-[#010B1E] font-semibold text-left md:text-center p-8 h-[150px] w-full sm:w-[270px] flex justify-center items-center text-lg"
            >
              <span className="max-w-[220px] leading-snug">{service}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
