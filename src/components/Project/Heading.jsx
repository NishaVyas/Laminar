import { useApiData } from "../../hooks/useApiData";

const fallbackData = {
  title: "Piping Solutions",
  description:
    "Laminar specializes in delivering high-quality and customized pipeline solutions for a range of industries. With a strong focus on precision engineering, state-of-the-art technology, and a commitment to safety, we provide complete end-to-end solutions, ensuring seamless integration for all your pipeline requirements.",
};

const transformHeading = (apiData) => {
  if (!Array.isArray(apiData) || apiData.length === 0) return null;
  const item = apiData[0];
  return {
    title: item.title || fallbackData.title,
    description: item.description || fallbackData.description,
  };
};

const Heading = () => {
  const { data } = useApiData("/api/home?type=project-heading", fallbackData, transformHeading);

  // Parse title to handle "Piping Solutions" format with highlighted word
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
    <section className="py-16 px-[calc(var(--spacing)*4)] md:px-0">
      <div className="max-w-4xl mx-auto text-left md:text-center">
        <h2 className="text-2xl md:text-3xl text-gray-900">
          {renderTitle()}
        </h2>
        <p className="mt-6 text-xs md:text-sm text-gray-700 leading-relaxed">
          {data.description}
        </p>
      </div>
    </section>
  );
};

export default Heading;
