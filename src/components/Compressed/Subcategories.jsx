import circle from "../../assets/Pneumatic/circle.svg";

const subcategories = [
  {
    title: "CO₂-Free Gas Generators",
    description:
      "Solenoid valves are electromechanically controlled devices that regulate compressed air, water, oil, and gas flow. These valves enable automated fluid control with high-speed response and leak-proof operation.",
    applications: ["FT-IR", "TOC analyzers", "NMR systems", "Emissions testing"],
    benefits: [
      "Supplies CO₂-free pure air",
      "Protects sensitive instrumentation",
      "Enhances measurement precision",
    ],
  },
  {
    title: "Hydrogen Gas Generators",
    description:
      "Solenoid valves are electromechanically controlled devices that regulate compressed air, water, oil, and gas flow. These valves enable automated fluid control with high-speed response and leak-proof operation.",
    applications: ["Gas chromatography (GC)", "GC/MS", "Fuel cells"],
    benefits: [
      "Ultra-high purity (up to 99.9999%)",
      "Safe operation, compact design",
      "Eliminates cylinder handling",
    ],
  },
  {
    title: "Nitrogen Gas Generators",
    description:
      "Solenoid valves are electromechanically controlled devices that regulate compressed air, water, oil, and gas flow. These valves enable automated fluid control with high-speed response and leak-proof operation.",
    applications: [
      "Food & beverage packaging",
      "Pharmaceuticals",
      "Electronics",
      "Laser cutting",
    ],
    benefits: [
      "Generates high-purity nitrogen on-site",
      "Reduces costs",
      "Supports continuous operation",
    ],
  },
  {
    title: "Zero Air Gas Generators",
    description:
      "Solenoid valves are electromechanically controlled devices that regulate compressed air, water, oil, and gas flow. These valves enable automated fluid control with high-speed response and leak-proof operation.",
    applications: ["GC-FID", "Environmental analysis", "Process instrumentation"],
    benefits: [
      "Produces hydrocarbon-free air (<0.05 ppm)",
      "Provides stable baselines",
      "Safer than bottled air",
    ],
  },
  {
    title: "Membrane Gas Separation",
    description:
      "Solenoid valves are electromechanically controlled devices that regulate compressed air, water, oil, and gas flow. These valves enable automated fluid control with high-speed response and leak-proof operation.",
    applications: ["Oil & gas", "Marine", "Process industries"],
    benefits: [
      "Compact and efficient nitrogen",
      "Oxygen generation",
      "Ideal for continuous and integrated operations",
    ],
  },
];

function Subcategories() {
  return (
    <div className="px-[calc(var(--spacing)_*_4)] md:px-8 py-8 md:py-10 bg-gray-50">
      <h2 className="text-3xl text-left md:text-center mb-8 md:mb-12">
        Gas Generators <span className="text-[#0061A6] font-semibold">Subcategories</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
        {subcategories.map((cat, i) => (
          <div
            key={i}
            className="bg-[#E3EEF6] p-6 md:p-14 flex flex-col gap-2 rounded-lg overflow-hidden"
          >
            <h3 className="text-lg md:text-xl font-semibold text-gray-800">{cat.title}</h3>
            <p className="text-[12px] md:text-[13px] text-[#010B1E] mb-4 md:mb-8 leading-relaxed">
              {cat.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 md:gap-12 text-sm">
              <div>
                <h4 className="text-[#0061A6] font-semibold mb-2">Applications</h4>
                <ul className="space-y-2 md:space-y-3 text-gray-700 list-disc list-inside text-[12px] md:text-[13px]">
                  {cat.applications.map((app, j) => (
                    <li key={j}>{app}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-[#0061A6] font-semibold mb-2">Key Benefits</h4>
                <ul className="space-y-2 md:space-y-3 text-gray-700 text-[12px] md:text-[13px]">
                  {cat.benefits.map((b, k) => (
                    <li key={k} className="flex items-start gap-2">
                      <img src={circle} alt="bullet" className="mt-1 w-3 h-3 flex-shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subcategories;
