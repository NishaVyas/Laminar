import { useApiData, transformAccreditations } from "../../hooks/useApiData";
// Fallback images
import iso from "../../assets/Homepage/iso.svg";
import iso2 from "../../assets/Homepage/iso2.svg";
import iso3 from "../../assets/Homepage/iso3.svg";
import dun from "../../assets/Homepage/dun.svg";
import dun2 from "../../assets/Homepage/dun2.svg";
import crisil from "../../assets/Homepage/crisil.svg";
import brics from "../../assets/Homepage/brics.svg";
import iatf from "../../assets/Homepage/iatf.svg";

// Fallback accreditations data (original hardcoded content)
const fallbackAccreditations = [
  { title: "IATF", image: iatf },
  { title: "ISO 9001", image: iso },
  { title: "ISO 14001", image: iso2 },
  { title: "ISO 45001", image: iso3 },
  { title: "DUNS numbers of Laminar Industries & DUNS Laminar Technologies", image: dun },
  { title: "DUNS ESG", image: dun2 },
  { title: "Crisil", image: crisil },
  { title: "BRICS chamber of commerce & industry", image: brics },
];

const Recognized = () => {
  // Fetch accreditations data from API with fallback
  const { data: apiAccreditations } = useApiData(
    "/api/home?type=accreditation",
    null,
    transformAccreditations
  );

  // Use API data if available, otherwise use fallback
  const accreditations = apiAccreditations || fallbackAccreditations;

  return (
    <section className="py-10 bg-gray-50">
      <div
        className="max-w-7xl mx-auto"
        style={{ paddingInline: "calc(var(--spacing) * 4)" }}
      >
        {/* Heading */}
        <p className="text-xs md:text-sm text-left md:text-center text-gray-900 mb-2">
          A C C R E D I T A T I O N S
        </p>
        <h2 className="text-2xl lg:text-3xl text-left md:text-center text-[#001f3f] mb-12">
          Recognized{" "}
          <span className="text-[#0061A6] font-bold">by the best</span>
        </h2>

        {/* Accreditations Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-10 sm:gap-12 pt-4">
          {accreditations.map((item, index) => (
            <div key={index} className="flex flex-col items-start md:items-center">
              <img
                src={item.image}
                alt={item.title}
                className="h-14 sm:h-16 md:h-12 mb-2 md:mx-auto"
              />
              <p className="text-left md:text-center text-gray-900 text-xs">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Recognized;
