import Connectors from "../../assets/Product/connectors.png";
import Pneumatics from "../../assets/Product/Pneumatics.svg";
import Hydraulic from "../../assets/Product/hose-2.svg";
import Pipe from "../../assets/Product/Pipe.svg";
import brands from "../../assets/Product/logo-laminar.jpg";
import compressed from "../../assets/Product/compressed.jpg";
import { NavLink } from "react-router-dom";

function Categories() {
  return (
    <section className="px-[calc(var(--spacing)*4)] sm:px-8 md:px-18 py-18 bg-white">
      <div className="mb-12 text-left md:text-center">
        <h2 className="text-3xl md:text-4xl">
          Our Product{" "}
          <span className="text-[#0061A6] font-bold">Categories</span>
        </h2>
        <p className="mt-4 text-gray-600 text-sm mx-0 md:mx-auto">
          Laminar serves diversified end markets in the fluid power segment with its core product categories
          of low-pressure connectors, <br className="hidden sm:block" /> pneumatics, hose & fittings, industrial
          piping & industrial air filtration solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {/* Row 1 */}
        <div className="space-y-3">
          <img
            src={Connectors}
            alt="Low Pressure Connectors"
            className="w-full h-auto md:h-[466px] bg-[#e6f3fc] object-contain"
          />
          <h3 className="text-lg font-semibold">Low Pressure Connectors</h3>
          <p className="text-sm text-gray-600">
            Fittings, tubing, valves, couplers, guns & accessories for pneumatics & low pressure fluid transfer
          </p>
          <button className="bg-[#0061A6] cursor-pointer text-white px-6 py-2 mt-4 hover:bg-[#004d84] w-fit">
            <NavLink to="/low-pressure-product" className="text-xs">
              See All Products →
            </NavLink>
          </button>
        </div>

        <div className="space-y-3">
          <img
            src={Pneumatics}
            alt="Pneumatics"
            className="w-full h-auto md:h-[466px]"
          />
          <h3 className="text-lg font-semibold">Pneumatics</h3>
          <p className="text-sm text-gray-600">
            Cylinders, air preparation units & control devices for pneumatic automation
          </p>
          <button className="bg-[#0061A6] cursor-pointer text-white px-6 py-2 mt-4 hover:bg-[#004d84] w-fit">
            <NavLink to="/pneumatics" className="text-xs">
              See All Products →
            </NavLink>
          </button>
        </div>

        {/* Row 2 */}
        <div className="space-y-3">
          <img
            src={Hydraulic}
            alt="Hydraulic Hose & Fittings"
            className="w-full h-auto md:h-[466px]"
          />
          <h3 className="text-lg font-semibold">Hydraulic Hose & Fittings</h3>
          <p className="text-sm text-gray-600">
            Comprehensive range of hydraulic & industrial hose & tube assemblies & fittings
          </p>
          <button className="bg-[#0061A6] cursor-pointer text-white px-6 py-2 mt-4 hover:bg-[#004d84] w-fit">
            <NavLink to="/hydraulics" className="text-xs">
              See All Products →
            </NavLink>
          </button>
        </div>

        {/* Row 3 */}
        <div className="space-y-3">
          <img
            src={Pipe}
            alt="Transair Product"
            className="w-full h-auto md:h-[466px] bg-[#e6f3fc] object-contain"
          />
          <h3 className="text-lg font-semibold">Transair Product</h3>
          <p className="text-sm text-gray-600">
            Transair piping systems are revolutionary solutions for compressed air, vacuum, and inert gas
            distribution.
          </p>
          <button className="bg-[#0061A6] cursor-pointer text-white px-6 py-2 mt-4 hover:bg-[#004d84] w-fit">
            <NavLink to="/transair" className="text-xs">
              See All Products →
            </NavLink>
          </button>
        </div>

        <div className="space-y-3">
          <img
            src={compressed}
            alt="Compressed Air & Gas Treatment"
            className="w-full h-auto md:h-[466px]"
          />
          <h3 className="text-lg font-semibold">Compressed Air & Gas Treatment</h3>
          <p className="text-sm text-gray-600">
            Transair aluminum piping system for efficient distribution of air & inert gases
          </p>
          <button className="bg-[#0061A6] cursor-pointer text-white px-6 py-2 mt-4 hover:bg-[#004d84] w-fit">
            <NavLink to="/compressed-air-and-gas-treatment" className="text-xs">
              See All Products →
            </NavLink>
          </button>
        </div>

        <div className="space-y-4">
          <img
            src={brands}
            alt="Brands"
            className="w-full h-auto md:h-[466px] bg-[#fff] object-contain"
          />
          <h3 className="text-lg font-semibold">Brands</h3>
          <button className="bg-[#0061A6] cursor-pointer text-white px-6 py-2 mt-6 hover:bg-[#004d84] w-fit">
            <NavLink to="/contact-us" className="text-xs">
              Partner With Us →
            </NavLink>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Categories;
