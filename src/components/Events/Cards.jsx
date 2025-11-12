import hm from "../../assets/Homepage/hm.svg";
import amf from "../../assets/Homepage/amf.svg";
import expo from "../../assets/Homepage/expo.svg";
import expo2025 from "../../assets/Events/expo-2025.jpeg";
import arrow from "../../assets/Homepage/arrow.svg";
import Calendar from "../../assets/Homepage/Calendar.svg";
import iree from "../../assets/Events/iree.svg";
import Map from "../../assets/Homepage/Map.svg";
import { NavLink } from "react-router-dom";

const Cards = () => {
  const events = [
    {
      image: hm,
      title: "Hannover Messe Exhibition 2024",
      description:
        "We showcased thermoplastic tubing & hoses for industrial, mobile, and DIY applications, connecting with industry experts from around the world.",
      details: <>Hall 5, Stand A16/1, Hannover Exhibition Ground, Germany</>,
      date: "April 22nd - 26th, 2024",
    },
    {
      image: expo2025,
      title: "Fluid Power Expo 2025",
      description:
        "At Fluid Power Expo 2025, we highlighted next-gen fluid power solutions, helping businesses enhance competitiveness through change.",
      details: <>Pragati Maidan, New Delhi, <br /> India</>,
      date: "Feb 16th - 18th, 2025",
    },
    {
      image: amf,
      title: "Automechanika Frankfurt Expo 2024",
      description:
        "A global platform where we presented our innovative hydraulic and pneumatic solutions for the automotive and manufacturing industries.",
      details: <>Hall 6.2, Stall F99B, Messe Frankfurt, <br /> Germany</>,
      date: "Sept 10th - 14th, 2024",
    },
    {
      image: iree,
      title: "IREE 2023",
      description:
        "As a key exhibitor, we showcased our railway fluid connection technologies, driving advancements in railway equipment and infrastructure.",
      details: <> Hall A5, Stall 5.86A, Pragati Maidan, <br /> New Delhi </>,
      date: "Oct 12th - 14th, 2023",
    },
    {
      image: expo,
      title: "Automation Expo 2023",
      description:
        "A landmark event where we introduced high-performance fluid automation systems, reinforcing our leadership in industrial automation.",
      details: <>BEC, Hall 1, Goregaon East, <br /> Mumbai</>,
      date: "Aug 23rd - 26th, 2023",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-[calc(var(--spacing)_*_4)] sm:px-6 text-left">
        <NavLink to="/events">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="flex flex-col border text-[#E2E2E2] px-4 py-4">
                {/* Event Image */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-100 h-70 object-cover mb-4"
                />
                {/* Event Title */}
                <h3 className="text-base sm:text-md mb-2 font-semibold text-[#001f3f] flex items-center justify-between">
                  {event.title}
                  <img src={arrow} alt="arrow" className="w-4 h-4 sm:w-5 sm:h-5" />
                </h3>
                {/* Event Description */}
                <p
                  className="text-[#010B1E] font-light text-xs sm:text-[12px] mb-6"
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                >
                  {event.description}
                </p>
                <hr className="text-gray-300" />

                <div className="flex justify-between items-start text-gray-600 mt-4 text-[10px] sm:text-[10px] w-full">
                  {/* Location */}
                  <div className="flex items-start space-x-1 max-w-[60%]">
                    <img className="w-4 h-4 mt-[2px]" src={Map} alt="" />
                    <span className="break-words">{event.details}</span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center space-x-1">
                    <img className="w-4 h-4" src={Calendar} alt="" />
                    <span className="whitespace-nowrap">{event.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </NavLink>
      </div>
    </section>
  );
};

export default Cards;
