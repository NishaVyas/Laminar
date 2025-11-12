import { useState } from "react";
import AboutBg from "../../assets/Homepage/About.svg";
import image1 from "../../assets/AboutUs/image.png";
import image2 from "../../assets/AboutUs/image2.png";
import image3 from "../../assets/AboutUs/image3.png";
import image4 from "../../assets/AboutUs/image4.jpg";
import image5 from "../../assets/AboutUs/image5.png";
import image6 from "../../assets/AboutUs/image6.png";
import image7 from "../../assets/AboutUs/image7.png";
import image8 from "../../assets/AboutUs/image8.png";
import image9 from "../../assets/AboutUs/image9.png";
import image10 from "../../assets/AboutUs/image10.png";
import image11 from "../../assets/AboutUs/image11.png";
import image12 from "../../assets/AboutUs/image12.png";

const timelineData = [
  { year: "1992", img: image1, text: "" },
  { year: "1994", img: image2, text: "" },
  { year: "1998", img: image3, text: "" },
  { year: "2001", img: image4, text: "" },
  { year: "2003", img: image5, text: "Second generation 'Proline' series of fittings & tubing" },
  { year: "2008", img: image6, text: "" },
  { year: "2011", img: image7, text: "" },
  { year: "2016", img: image8, text: "" },
  { year: "2017", img: image9, text: "" },
  { year: "2018", img: image10, text: "" },
  { year: "2019", img: image11, text: "" },
  { year: "2021", img: image12, text: "" },
];

function OurStory() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleImage = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section
      className="relative w-full min-h-screen text-white py-16 px-[calc(var(--spacing)_*_4)] sm:px-4"
      style={{
        backgroundImage: `url(${AboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="text-left md:text-center mb-20">
        <h2 className="text-3xl font-bold">Our Story</h2>
        <p className="mt-6 text-sm max-w-3xl mx-auto">
          Laminar Industries (formerly Legris India Pvt.Ltd.) serves diversified industries as a
          fluid connection solution provider across its key product groups in pneumatics, hydraulics
          & industrial piping.
        </p>
      </div>

      {/* Timeline strip */}
      <div className="flex gap-4 items-end justify-start md:justify-center overflow-x-auto md:overflow-hidden pb-4">
        {timelineData.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={index}
              className={`transition-all duration-500 cursor-pointer relative flex-shrink-0 transform origin-left
                ${
                  isActive
                    ? "w-[260px] h-[360px] sm:w-[360px] sm:h-[420px] md:w-[500px] md:h-[500px]"
                    : "w-[60px] h-[280px] sm:w-[80px] sm:h-[400px]"
                }`}
              onClick={() => toggleImage(index)}
            >
              <img
                src={item.img}
                alt={item.year}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  activeIndex !== null && !isActive ? "grayscale opacity-50" : ""
                }`}
              />

              {/* Year for collapsed state */}
              {!isActive && (
                <div className="absolute bottom-2 left-2 text-xs md:text-sm font-semibold text-white drop-shadow-md">
                  {item.year}
                </div>
              )}

              {/* Expanded content */}
              {isActive && (
                <>
                  {/* Large year at top */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-5xl sm:text-6xl md:text-[80px] font-extrabold drop-shadow-md">
                    {item.year}
                  </div>

                  {/* Bottom description text */}
                  {item.text && (
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xs max-w-xs text-center px-2">
                      {item.text}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default OurStory;
