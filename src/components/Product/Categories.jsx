import { NavLink } from "react-router-dom";
import { useApiData } from "../../hooks/useApiData";
// Fallback images
import Connectors from "../../assets/Product/connectors.png";
import Pneumatics from "../../assets/Product/Pneumatics.svg";
import Hydraulic from "../../assets/Product/hose-2.svg";
import Pipe from "../../assets/Product/Pipe.svg";
import brands from "../../assets/Product/logo-laminar.jpg";
import compressed from "../../assets/Product/compressed.jpg";

// Fallback product categories (original hardcoded content)
const fallbackCategories = [
  {
    slug: "low-pressure-product",
    title: "Low Pressure Connectors",
    description: "Fittings, tubing, valves, couplers, guns & accessories for pneumatics & low pressure fluid transfer",
    image: Connectors,
    btnText: "See All Products →",
    bgClass: "bg-[#e6f3fc]",
    objectFit: "object-contain",
  },
  {
    slug: "pneumatics",
    title: "Pneumatics",
    description: "Cylinders, air preparation units & control devices for pneumatic automation",
    image: Pneumatics,
    btnText: "See All Products →",
  },
  {
    slug: "hydraulics",
    title: "Hydraulic Hose & Fittings",
    description: "Comprehensive range of hydraulic & industrial hose & tube assemblies & fittings",
    image: Hydraulic,
    btnText: "See All Products →",
  },
  {
    slug: "transair",
    title: "Transair Product",
    description: "Transair piping systems are revolutionary solutions for compressed air, vacuum, and inert gas distribution.",
    image: Pipe,
    btnText: "See All Products →",
    bgClass: "bg-[#e6f3fc]",
    objectFit: "object-contain",
  },
  {
    slug: "compressed-air-and-gas-treatment",
    title: "Compressed Air & Gas Treatment",
    description: "Transair aluminum piping system for efficient distribution of air & inert gases",
    image: compressed,
    btnText: "See All Products →",
  },
  {
    slug: "contact-us",
    title: "Brands",
    description: "",
    image: brands,
    btnText: "Partner With Us →",
    bgClass: "bg-[#fff]",
    objectFit: "object-contain",
    isBrands: true,
  },
];

// Transform API products to match component structure
const transformProducts = (apiData) => {
  if (!Array.isArray(apiData) || apiData.length === 0) return null;

  return apiData.map(item => ({
    slug: item.slug || "",
    title: item.title || "",
    description: item.description || "",
    image: item.image || "",
    btnText: item.btnText || "See All Products →",
  }));
};

function Categories() {
  // Fetch products from API
  const { data: apiProducts } = useApiData(
    "/api/product",
    null,
    transformProducts
  );

  // Use API products if available, otherwise use fallback
  // No merging - show only what's in admin when admin has data
  const categories = apiProducts && apiProducts.length > 0 ? apiProducts : fallbackCategories;

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
        {categories.map((category, index) => (
          <div key={index} className={category.isBrands ? "space-y-4" : "space-y-3"}>
            <img
              src={category.image}
              alt={category.title}
              className={`w-full h-auto md:h-[466px] ${category.bgClass || ""} ${category.objectFit || ""}`}
            />
            <h3 className="text-lg font-semibold">{category.title}</h3>
            {category.description && (
              <p className="text-sm text-gray-600">{category.description}</p>
            )}
            <button className={`bg-[#0061A6] cursor-pointer text-white px-6 py-2 ${category.isBrands ? "mt-6" : "mt-4"} hover:bg-[#004d84] w-fit`}>
              <NavLink to={`/${category.slug}`} className="text-xs">
                {category.btnText}
              </NavLink>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;
