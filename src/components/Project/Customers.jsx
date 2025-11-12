import icon1 from "../../assets/Projects/icon1.svg";
import icon2 from "../../assets/Projects/icon2.svg";
import icon3 from "../../assets/Projects/icon3.svg";
import icon4 from "../../assets/Projects/icon4.svg";

const Customers = () => {
  return (
    <section className="py-10 mb-10">
      <div className="max-w-7xl mx-auto text-left md:text-center px-[calc(var(--spacing)*4)] md:px-0">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-[#010B1E] font-medium mb-4">
          Over <span className="text-[#0061A6] font-bold">3000+</span> Satisfied Customers
        </h2>
        <p className="text-[#333] text-sm md:text-base max-w-5xl mx-0 md:mx-auto">
          Laminar has successfully delivered solutions to over esteemed 3000 customers,
          establishing long-term partnerships across multiple industries.
          Few of our customers are:
        </p>

        {/* Logos */}
        <div className="mt-10 grid grid-cols-2 gap-8 items-center md:flex md:flex-wrap md:justify-center md:gap-20">
          <div className="flex justify-start md:justify-center">
            <img
              src={icon1}
              alt="Customer 1"
              className="h-12 md:h-16 object-contain"
            />
          </div>
          <div className="flex justify-start md:justify-center">
            <img
              src={icon4}
              alt="Customer 4"
              className="h-12 md:h-16 object-contain"
            />
          </div>
          <div className="flex justify-start md:justify-center">
            <img
              src={icon2}
              alt="Customer 2"
              className="h-12 md:h-16 object-contain"
            />
          </div>
          <div className="flex justify-start md:justify-center">
            <img
              src={icon3}
              alt="Customer 3"
              className="h-12 md:h-16 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Customers;
