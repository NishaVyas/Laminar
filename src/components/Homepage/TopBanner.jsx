import { useEffect, useState } from "react";
import Header from "../../layouts/Header";
import { useApiData, transformBanners } from "../../hooks/useApiData";
// Fallback images
import Banner1 from "../../assets/header/Banner1.jpg";
import Banner2 from "../../assets/header/banner2.jpg";
import Banner3 from "../../assets/header/banner3.jpg";
import Banner4 from "../../assets/header/banner4.jpg";

// Fallback data (original hardcoded content)
const fallbackBannerData = [
  { image: Banner1, title: "Delivering Trust", desc: "Crafting Excellence" },
  { image: Banner2, title: "Revolutionizing Industries", desc: "Redefining Standards" },
  { image: Banner3, title: "Built for Reliability", desc: "Driven by Innovation" },
  { image: Banner4, title: "Powering connected future", desc: "Pioneering Precision" },
];

// Fallback images array for when API images fail to load
const fallbackImages = [Banner1, Banner2, Banner3, Banner4];

const TopBanner = () => {
  // Fetch banner data from API with fallback
  const { data: apiBanners } = useApiData(
    "/api/home?type=banner",
    null,
    transformBanners
  );

  // Use API data if available, otherwise use fallback
  const bannerData = apiBanners || fallbackBannerData;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [bannerData.length]);

  // Get current image with fallback
  const getCurrentImage = () => {
    return bannerData[currentIndex]?.image || fallbackImages[currentIndex % fallbackImages.length];
  };

  // Handle image load error
  const handleImageError = (e) => {
    if (e?.target) {
      e.target.src = fallbackImages[currentIndex % fallbackImages.length];
    }
  };

  return (
    <>
      {/* Global Header included (same as Banner component) */}
      <Header />

      {/* Banner Section */}
      <section className="relative w-full text-white pt-0">
        {/* MOBILE VIEW: full image, no crop, no progress bars */}
        <div className="block md:hidden relative">
          <img
            src={getCurrentImage()}
            alt="Banner"
            className="w-full h-auto block"
            onError={handleImageError}
          />
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-[5]" />
        </div>

        {/* DESKTOP / LAPTOP VIEW: original style */}
        <div
          className="hidden md:block relative w-full h-screen bg-cover bg-center pt-20 transition-all duration-700 ease-in-out"
          style={{ backgroundImage: `url(${getCurrentImage()})` }}
        >
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent z-[5]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col justify-end h-full">
            {/* Progress bars + text only on md+ */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm pb-8">
              {bannerData.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className="cursor-pointer"
                >
                  <div className="w-full h-1 bg-gray-500 mb-4 overflow-hidden rounded">
                    <div
                      className={`h-full ${
                        currentIndex === index ? "bg-white" : "bg-transparent"
                      }`}
                      style={{
                        width: currentIndex === index ? "100%" : "0%",
                        transition:
                          currentIndex === index ? "width 4s linear" : "none",
                      }}
                    />
                  </div>
                  <p className="text-white-100">{item.desc}</p>
                  <p className="font-bold">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopBanner;
