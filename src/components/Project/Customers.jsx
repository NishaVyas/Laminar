import icon1 from "../../assets/Projects/icon1.svg";
import icon2 from "../../assets/Projects/icon2.svg";
import icon3 from "../../assets/Projects/icon3.svg";
import icon4 from "../../assets/Projects/icon4.svg";
import { useApiData } from "../../hooks/useApiData";
import { getImageUrl } from "../../config/api";

const fallbackData = {
  title: "Over 3000+ Satisfied Customers",
  description:
    "Laminar has successfully delivered solutions to over esteemed 3000 customers, establishing long-term partnerships across multiple industries. Few of our customers are:",
  customers: [
    { name: "Customer 1", logoUrl: icon1 },
    { name: "Customer 2", logoUrl: icon4 },
    { name: "Customer 3", logoUrl: icon2 },
    { name: "Customer 4", logoUrl: icon3 },
  ],
};

const transformCustomers = (apiData) => {
  if (!Array.isArray(apiData) || apiData.length === 0) return null;
  const item = apiData[0];

  // Get customers array from API
  const customers = item.customers?.map((c) => ({
    name: c.name || "Customer",
    logoUrl: getImageUrl(c.logoUrl),
  })) || [];

  return {
    title: item.title || fallbackData.title,
    description: item.description || fallbackData.description,
    customers: customers.length > 0 ? customers : fallbackData.customers,
  };
};

const Customers = () => {
  const { data } = useApiData("/api/home?type=project-customers", fallbackData, transformCustomers);

  // Parse title to highlight the number (e.g., "3000+")
  const renderTitle = () => {
    const title = data.title || "";
    // Match pattern like "Over 3000+ Satisfied Customers" or similar
    const match = title.match(/^(.*?)(\d+\+?)(.*)$/);
    if (match) {
      return (
        <>
          {match[1]}<span className="text-[#0061A6] font-bold">{match[2]}</span>{match[3]}
        </>
      );
    }
    return title;
  };

  return (
    <section className="py-10 mb-10">
      <div className="max-w-7xl mx-auto text-left md:text-center px-[calc(var(--spacing)*4)] md:px-0">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl text-[#010B1E] font-medium mb-4">
          {renderTitle()}
        </h2>
        <p className="text-[#333] text-sm md:text-base max-w-5xl mx-0 md:mx-auto">
          {data.description}
        </p>

        {/* Logos */}
        <div className="mt-10 grid grid-cols-2 gap-8 items-center md:flex md:flex-wrap md:justify-center md:gap-20">
          {data.customers.map((customer, index) => (
            <div key={index} className="flex justify-start md:justify-center">
              <img
                src={customer.logoUrl}
                alt={customer.name}
                className="h-12 md:h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Customers;
