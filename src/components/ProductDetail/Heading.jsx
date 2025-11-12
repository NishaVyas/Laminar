const Heading = () => {
  return (
    <section className="py-16 px-[calc(var(--spacing)*4)] md:px-0">
      <div className="max-w-4xl mx-auto text-left md:text-center">
        <h2 className="text-2xl md:text-3xl text-gray-900">
          Low Pressure Fluid{" "}
          <span className="text-[#0061A6] font-bold">
            Connection <br className="hidden md:block" /> Solutions
          </span>
        </h2>

        <p className="mt-6 text-xs md:text-sm text-gray-700 leading-relaxed">
          Low-pressure systems are fundamental in pneumatic, hydraulic, and industrial fluid control applications, ensuring seamless fluid and air transfer with
          precision, efficiency, and durability. At Laminar India, we offer an extensive range of low-pressure fittings, tubings, valves, and accessories, designed to meet
          the rigorous demands of industrial automation, transportation, manufacturing, medical, and chemical industries.
        </p>

        <p className="mt-6 text-xs md:text-sm text-gray-700 leading-relaxed">
          Our low-pressure solutions provide leak-proof connections, energy-efficient performance, and superior durability, making them the go-to choice for industries
          looking to enhance fluid and air distribution while ensuring system reliability and safety.
        </p>
      </div>
    </section>
  );
};

export default Heading;
