import { NavLink } from "react-router-dom";
import { useApiData, transformStory } from "../../hooks/useApiData";
// Fallback assets
import video from "../../assets/Homepage/Laminar.mp4";

// Fallback story data (original hardcoded content)
const fallbackStory = {
  title: "Our Story",
  description: "Laminar serves diversified end markets in the fluid power segment with its core product categories of low-pressure connectors, pneumatics, hose & fittings, industrial piping & industrial air filtration.",
  videoUrl: video,
  link: "/about-us",
};

const Story = () => {
  // Fetch story data from API with fallback
  const { data: apiStory } = useApiData(
    "/api/home?type=story",
    null,
    transformStory
  );

  // Use API data if available, otherwise use fallback
  const storyData = apiStory || fallbackStory;

  return (
    <section className="bg-gray-50 pb-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between pt-0 px-[calc(var(--spacing)_*_4)] sm:px-6 text-left">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <p className="text-xs text-gray-900 mb-2">O U R S T O R Y</p>
          <h2 className="text-3xl lg:text-4xl text-[#001f3f] mb-4">
            Our <span className="text-[#0061A6] font-bold">Story</span>
          </h2>
          <p className="text-gray-700 mb-6 text-sm">
            {storyData.description}
          </p>

          <div className="flex justify-start">
            <NavLink
              to={storyData.link || "/about-us"}
              className="bg-[#0061A6] text-white px-6 py-3 flex items-center space-x-2"
            >
              <span className="text-xs">Our Story →</span>
            </NavLink>
          </div>
        </div>

        {/* Right Column: Video */}
        <div className="w-full md:w-1/2 flex justify-center">
          <video
            className="w-full h-auto"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={storyData.videoUrl || video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default Story;
