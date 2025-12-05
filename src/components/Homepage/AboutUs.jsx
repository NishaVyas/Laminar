import AboutBg from "../../assets/Homepage/About.svg";
import People from "../../assets/Homepage/People.svg";
import Box from "../../assets/Homepage/Box.svg";
import Network from "../../assets/Homepage/Network.svg";
import Setting from "../../assets/Homepage/Setting.svg";
import { NavLink } from "react-router-dom";
import { useApiData, transformAbout, transformStats } from "../../hooks/useApiData";

// Fallback about data (original hardcoded content)
const fallbackAbout = {
  title: "About Us",
  description: "At Laminar Group, we drive fluid connection excellence across industries, offering cutting-edge solutions in pneumatics and hydraulics. With a legacy of precision engineering and reliability, we provide a comprehensive range of high-performance products, from low-pressure thermoplastic tubing to advanced hose & tube assemblies.",
  link: "/contact-us",
};

// Fallback stats data (original hardcoded content)
const fallbackStats = [
  { icon: Box, value: "5+", label: "Product Categories" },
  { icon: People, value: "200+", label: "Customers" },
  { icon: Network, value: "60+", label: "Distributors" },
  { icon: Setting, value: "3000+", label: "Installations" },
];

const AboutUs = () => {
  // Fetch about data from API with fallback
  const { data: apiAbout } = useApiData(
    "/api/home?type=about",
    null,
    (data) => transformAbout(Array.isArray(data) ? data[0] : data)
  );

  // Fetch stats data from API with fallback
  const { data: apiStats } = useApiData(
    "/api/home?type=stat",
    null,
    transformStats
  );

  // Use API data if available, otherwise use fallback
  const aboutData = apiAbout || fallbackAbout;
  const statsData = apiStats || fallbackStats;

  return (
    <section
      className="relative w-full h-screen text-white"
      style={{
        backgroundImage: `url(${AboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="relative z-10 w-full h-full flex items-center justify-center px-0 lg:px-6 py-10 lg:py-0">
        <div
          className="max-w-7xl mx-auto w-full flex flex-col gap-16"
          style={{ paddingInline: "calc(var(--spacing) * 4)" }}
        >
          {/* Top Content */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-6 lg:gap-10 text-left">
            <h2 className="text-3xl lg:text-3xl font-semibold w-full lg:w-1/3 text-left">
              {aboutData.title}
            </h2>

            <p className="text-[13px] text-white/80 leading-relaxed text-left max-w-[700px] mb-0 lg:mb-10">
              {aboutData.description}
            </p>

            <div className="w-full lg:w-1/3 flex justify-start lg:justify-end mt-4 lg:mt-0">
              <NavLink
                to={aboutData.link || "/contact-us"}
                className="border border-white px-4 py-2 text-sm hover:bg-white hover:text-[#001f3f] transition whitespace-nowrap"
              >
                Get in Touch →
              </NavLink>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 gap-8 lg:flex lg:flex-row lg:justify-between text-left sm:text-center">
            {statsData.map((item, index) => (
              <div key={index} className="relative lg:w-1/4">
                {index !== 0 && (
                  <div className="absolute top-0 h-full w-[1px] bg-white/30 hidden lg:block"></div>
                )}

                <img
                  src={item.icon}
                  alt={item.label}
                  className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mb-3 lg:mb-4 mx-0 sm:mx-auto"
                />

                <p className="cursor-pointer text-xl sm:text-2xl lg:text-3xl hover:scale-110 transition duration-200 text-left sm:text-center">
                  {item.value}
                </p>

                <p className="text-xs sm:text-sm lg:text-base mt-2 text-white/90 text-left sm:text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
