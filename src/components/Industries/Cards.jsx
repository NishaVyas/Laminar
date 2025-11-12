import textiles from "../../assets/Industries/Textile.png";
import Automobile from "../../assets/Industries/Automobile.png";
import Cement from "../../assets/Industries/Cement.png";
import construction from "../../assets/Industries/construction.png";
import food from "../../assets/Industries/food.png";
import science from "../../assets/Industries/science.png";
import mobile from "../../assets/Industries/mobile.png";
import oil from "../../assets/Industries/oil.png";
import Packaging from "../../assets/Industries/Packaging.png";
import Printing from "../../assets/Industries/Printing.png";
import process from "../../assets/Industries/process.png";
import Automation from "../../assets/Industries/Automation.png";

function Cards() {
  const industries = [
    { name: "Automation", image: Automation },
    { name: "Textile", image: textiles },
    { name: "Automobile", image: Automobile },
    { name: "Cement", image: Cement },
    { name: "Construction", image: construction },
    { name: "Food & Beverage", image: food },
    { name: "Science", image: science },
    { name: "Mobile", image: mobile },
    { name: "Oil", image: oil },
    { name: "Packaging", image: Packaging },
    { name: "Printing", image: Printing },
    { name: "Process", image: process },
  ];

  return (
    <div
      className="
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 
        bg-gray-100 
        px-[calc(var(--spacing)*4)] py-10 
        md:p-20
      "
    >
      {industries.map((industry, index) => (
        <div
          key={index}
          className="border mb-8 text-[#E2E2E2] overflow-hidden"
        >
          <img
            src={industry.image}
            alt={industry.name}
            className="w-full h-80 object-cover p-4"
          />
          <div className="pt-2 pb-4 px-4">
            <h3 className="text-lg font-semibold text-[#010B1E]">
              {industry.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;
