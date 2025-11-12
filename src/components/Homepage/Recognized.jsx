import iso from "../../assets/Homepage/iso.svg";
import iso2 from "../../assets/Homepage/iso2.svg";
import iso3 from "../../assets/Homepage/iso3.svg";
import dun from "../../assets/Homepage/dun.svg";
import dun2 from "../../assets/Homepage/dun2.svg";
import crisil from "../../assets/Homepage/crisil.svg";
import brics from "../../assets/Homepage/brics.svg";
import iatf from "../../assets/Homepage/iatf.svg";

const Recognized = () => {
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
          {/* IATF */}
          <div className="flex flex-col items-start md:items-center">
            <img
              src={iatf}
              alt="IATF"
              className="h-14 sm:h-16 md:h-12 mb-2 md:mx-auto"
            />
            <p className="text-left md:text-center text-gray-900 text-xs">
              IATF
            </p>
          </div>

          {/* ISO 9001 */}
          <div className="flex flex-col items-start md:items-center">
            <img
              src={iso}
              alt="ISO 9001"
              className="h-14 sm:h-16 md:h-12 mb-2 md:mx-auto"
            />
            <p className="text-left md:text-center text-gray-900 text-xs">
              ISO 9001
            </p>
          </div>

          {/* ISO 14001 */}
          <div className="flex flex-col items-start md:items-center">
            <img
              src={iso2}
              alt="ISO 14001"
              className="h-14 sm:h-16 md:h-12 mb-2 md:mx-auto"
            />
            <p className="text-left md:text-center text-gray-900 text-xs">
              ISO 14001
            </p>
          </div>

          {/* ISO 45001 */}
          <div className="flex flex-col items-start md:items-center">
            <img
              src={iso3}
              alt="ISO 45001"
              className="h-14 sm:h-16 md:h-12 mb-2 md:mx-auto"
            />
            <p className="text-left md:text-center text-gray-900 text-xs">
              ISO 45001
            </p>
          </div>

          {/* DUNS Laminar */}
          <div className="flex flex-col items-start md:items-center">
            <img
              src={dun}
              alt="DUNS Laminar"
              className="h-12 sm:h-14 md:h-10 mb-2 md:mx-auto"
            />
            <p className="text-left md:text-center text-gray-900 text-xs max-w-sm">
              DUNS numbers of Laminar Industries &
            </p>
            <p className="text-left md:text-center text-gray-900 text-xs max-w-sm">
              DUNS Laminar Technologies
            </p>
          </div>

          {/* DUNS ESG */}
          <div className="flex flex-col items-start md:items-center">
            <img
              src={dun2}
              alt="DUNS ESG"
              className="h-12 sm:h-14 md:h-10 mb-2 md:mx-auto"
            />
            <p className="text-left md:text-center text-gray-900 text-xs">
              DUNS ESG
            </p>
          </div>

          {/* CRISIL */}
          <div className="flex flex-col items-start md:items-center">
            <img
              src={crisil}
              alt="CRISIL"
              className="h-6 sm:h-8 md:h-4 mb-4 mt-2 md:mx-auto"
            />
            <p className="text-left md:text-center text-gray-900 text-xs">
              Crisil
            </p>
          </div>

          {/* BRICS */}
          <div className="flex flex-col items-start md:items-center">
            <img
              src={brics}
              alt="BRICS"
              className="h-10 sm:h-12 md:h-8 mb-2 md:mx-auto"
            />
            <p className="text-left md:text-center text-gray-900 text-xs">
              BRICS chamber of commerce <br /> &amp; industry
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recognized;
