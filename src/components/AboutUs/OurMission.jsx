import mission from "../../assets/AboutUs/mission.jpg";

const OurMission = () => {
  return (
    <section className="bg-gray-50 pt-0 pb-10 md:py-10">
      <div
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-8 md:gap-25 px-[calc(var(--spacing)*4)] md:px-0"
      >
        {/* Text Column (first on mobile, second on desktop) */}
        <div className="md:w-1/2 text-left flex flex-col justify-center order-1 md:order-2 mb-6 md:mb-0">
          <h2 className="text-3xl lg:text-4xl text-[#001f3f] mb-4">
            Our <span className="text-[#0061A6] font-bold">Mission</span>
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            To build synergetic partnerships with our customers by offering efficient solutions in fluid <br />
            connections, pneumatic automation and industrial hardware. To grow into new sectors and <br />
            markets by introducing innovative products and services supplemented with seamless after <br />
            sales service.
          </p>
        </div>

        {/* Image Column (second on mobile, first on desktop) */}
        <div className="md:w-1/2 flex justify-center md:justify-start order-2 md:order-1">
          <img
            src={mission}
            alt="Mission Logo"
            className="w-[350px] md:w-[500px] lg:w-[800px] object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMission;
