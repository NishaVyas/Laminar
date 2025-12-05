// import { useState } from "react";
// import AboutBg from "../../assets/Homepage/About.svg";
// import { useApiData } from "../../hooks/useApiData";
// // Fallback images
// import image1 from "../../assets/AboutUs/image.png";
// import image2 from "../../assets/AboutUs/image2.png";
// import image3 from "../../assets/AboutUs/image3.png";
// import image4 from "../../assets/AboutUs/image4.jpg";
// import image5 from "../../assets/AboutUs/image5.png";
// import image6 from "../../assets/AboutUs/image6.png";
// import image7 from "../../assets/AboutUs/image7.png";
// import image8 from "../../assets/AboutUs/image8.png";
// import image9 from "../../assets/AboutUs/image9.png";
// import image10 from "../../assets/AboutUs/image10.png";
// import image11 from "../../assets/AboutUs/image11.png";
// import image12 from "../../assets/AboutUs/image12.png";

// // Fallback timeline data (original hardcoded content)
// const fallbackTimelineData = [
//   { year: "1992", img: image1, text: "" },
//   { year: "1994", img: image2, text: "" },
//   { year: "1998", img: image3, text: "" },
//   { year: "2001", img: image4, text: "" },
//   { year: "2003", img: image5, text: "Second generation 'Proline' series of fittings & tubing" },
//   { year: "2008", img: image6, text: "" },
//   { year: "2011", img: image7, text: "" },
//   { year: "2016", img: image8, text: "" },
//   { year: "2017", img: image9, text: "" },
//   { year: "2018", img: image10, text: "" },
//   { year: "2019", img: image11, text: "" },
//   { year: "2021", img: image12, text: "" },
// ];

// // Fallback story content
// const fallbackStoryContent = {
//   title: "Our Story",
//   description: "Laminar Industries (formerly Legris India Pvt.Ltd.) serves diversified industries as a fluid connection solution provider across its key product groups in pneumatics, hydraulics & industrial piping."
// };

// function OurStory() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   // Fetch story content from API
//   const { data: apiStoryContent } = useApiData(
//     "/api/home?type=aboutus-story",
//     null,
//     (data) => {
//       const item = Array.isArray(data) ? data[0] : data;
//       if (!item) return null;
//       return {
//         title: item.title || "Our Story",
//         description: item.description || "",
//       };
//     }
//   );

//   // Use API data if available, otherwise use fallback
//   const storyContent = apiStoryContent || fallbackStoryContent;
//   const timelineData = fallbackTimelineData; // Timeline images stay as fallback for now

//   const toggleImage = (index) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   return (
//     <section
//       className="relative w-full min-h-screen text-white py-16 px-[calc(var(--spacing)_*_4)] sm:px-4"
//       style={{
//         backgroundImage: `url(${AboutBg})`,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       <div className="text-left md:text-center mb-20">
//         <h2 className="text-3xl font-bold">{storyContent.title}</h2>
//         <p className="mt-6 text-sm max-w-3xl mx-auto">
//           {storyContent.description}
//         </p>
//       </div>

//       {/* Timeline strip */}
//       <div className="flex gap-4 items-end justify-start md:justify-center overflow-x-auto md:overflow-hidden pb-4">
//         {timelineData.map((item, index) => {
//           const isActive = activeIndex === index;

//           return (
//             <div
//               key={index}
//               className={`transition-all duration-500 cursor-pointer relative flex-shrink-0 transform origin-left
//                 ${
//                   isActive
//                     ? "w-[260px] h-[360px] sm:w-[360px] sm:h-[420px] md:w-[500px] md:h-[500px]"
//                     : "w-[60px] h-[280px] sm:w-[80px] sm:h-[400px]"
//                 }`}
//               onClick={() => toggleImage(index)}
//             >
//               <img
//                 src={item.img}
//                 alt={item.year}
//                 className={`w-full h-full object-cover transition-all duration-500 ${
//                   activeIndex !== null && !isActive ? "grayscale opacity-50" : ""
//                 }`}
//               />

//               {/* Year for collapsed state */}
//               {!isActive && (
//                 <div className="absolute bottom-2 left-2 text-xs md:text-sm font-semibold text-white drop-shadow-md">
//                   {item.year}
//                 </div>
//               )}

//               {/* Expanded content */}
//               {isActive && (
//                 <>
//                   {/* Large year at top */}
//                   <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-5xl sm:text-6xl md:text-[80px] font-extrabold drop-shadow-md">
//                     {item.year}
//                   </div>

//                   {/* Bottom description text */}
//                   {item.text && (
//                     <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-xs max-w-xs text-center px-2">
//                       {item.text}
//                     </div>
//                   )}
//                 </>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// }

// export default OurStory;


import { useState } from "react";
import AboutBg from "../../assets/Homepage/About.svg";
import { useApiData } from "../../hooks/useApiData";


const fallbackTimelineData = [
  { year: "1992",  text: "Second generation 'Proline' series of fittings & tubing" },
  { year: "1994",  text: "Second generation 'Proline' series of fittings & tubing" },
  { year: "1998", text: "Second generation 'Proline' series of fittings & tubing" },
  { year: "2001", text: "Second generation 'Proline' series of fittings & tubing" },
  { year: "2003", text: "Second generation 'Proline' series of fittings & tubing" },
  { year: "2008",  text: "Second generation 'Proline' series of fittings & tubing" },
  { year: "2011", text: "Second generation 'Proline' series of fittings & tubing" },
  { year: "2016",  text: "Second generation 'Proline' series of fittings & tubing" },
  { year: "2017", text: "Second generation 'Proline' series of fittings & tubing" },
  { year: "2018",  text: "Second generation 'Proline' series of fittings & tubing" },
  { year: "2019", text: "Second generation 'Proline' series of fittings & tubing" },
  { year: "2021",  text: "Second generation 'Proline' series of fittings & tubing" },
];
const fallbackStoryContent = {
  title: "Our Story",
  description: "Laminar Industries (formerly Legris India Pvt.Ltd.) serves diversified industries as a fluid connection solution provider across its key product groups in pneumatics, hydraulics & industrial piping."
};
function OurStory() {
  const [activeIndex, setActiveIndex] = useState(null);
  const storyContent = fallbackStoryContent;
  const timelineData = fallbackTimelineData;

  return (
    <section className="relative w-full h-150 bg-gray-900 text-white py-16 px-8 flex items-center justify-center">
      <div className="w-full max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{storyContent.title}</h2>
          <p className="text-sm md:text-base max-w-3xl mx-auto text-gray-300">
            {storyContent.description}
          </p>
        </div>

        {/* Timeline Container */}
        <div className="overflow-x-auto pb-8">
          <div className="min-w-max px-4">
            {/* Timeline with Years, Line, and Text */}
            <div className="relative">
              {/* Years Row */}
              <div className="flex justify-between items-center mb-4">
                {timelineData.map((item, index) => (
                  <div 
                    key={`year-${index}`}
                    className="text-xl md:text-2xl font-bold text-center"
                    style={{ width: '140px' }}
                  >
                    {item.year}
                  </div>
                ))}
              </div>

              {/* Dots and Line Row */}
              <div className="flex justify-between items-center mb-8 relative">
                {/* Connecting Line - starts from first dot to last dot */}
                <div 
                  className="absolute top-1/2 h-0.5 bg-gray-600 -translate-y-1/2"
                  style={{ 
                    left: '70px', 
                    right: '70px' 
                  }}
                ></div>
                
                {timelineData.map((item, index) => (
                  <div 
                    key={`dot-${index}`}
                    className="relative z-10"
                    style={{ width: '140px', display: 'flex', justifyContent: 'center' }}
                  >
                    <div className="w-4 h-4 bg-white rounded-full shadow-lg"></div>
                  </div>
                ))}
              </div>

              {/* Text Row - Zigzag Pattern */}
              <div className="flex justify-between gap-4">
                {timelineData.map((item, index) => (
                  <div 
                    key={`text-${index}`}
                    className="cursor-pointer transition-all duration-300 flex flex-col gap-3"
                    style={{ 
                      width: '140px',
                      marginTop: index % 2 === 0 ? '0' : '60px'
                    }}
                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                  >
                    {item.text && (
                      <>
                        <p className="text-xs text-left text-gray-300 leading-relaxed">
                          {item.text}
                        </p>
                        
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default OurStory;