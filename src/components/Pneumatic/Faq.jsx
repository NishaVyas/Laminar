import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqData = [
  {
    question: "What are Pneumatic Automation Solutions?",
    answer:
      "Pneumatic automation refers to systems that use compressed air to power machines, tools, or processes. It is widely used in industrial applications for actuation, control, and movement.",
  },
  {
    question: "Why choose pneumatic systems for industrial automation?",
    answer:
      "FRL units (Filter, Regulator, Lubricator) ensure clean, dry, and regulated air supply. They increase efficiency, reduce wear, and extend equipment life.",
  },
  {
    question: "What components are included in Laminar India’s Pneumatic Automation range?",
    answer:
      "Quick-release couplers provide instant, leak-proof connections and disconnections for pneumatic tools and hoses, improving safety and efficiency.",
  },
  {
    question: "What industries can benefit from these pneumatic components?",
    answer:
      "Yes, our products comply with international standards like ISO 15552, CE, ROHS, and IP65 to ensure global reliability and safety.",
  },
  {
    question: "How do FRLs improve system performance?",
    answer:
      "Yes, our products comply with international standards like ISO 15552, CE, ROHS, and IP65 to ensure global reliability and safety.",
  },
];

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-10 px-[calc(var(--spacing)_*_4)] md:px-0">
      <div className="max-w-4xl mx-auto text-left md:text-center">
        <h2 className="text-3xl text-[#010B1E]">
          Frequently Asked <span className="text-[#0061A6] font-semibold">Questions</span>
        </h2>

        <div className="mt-14 space-y-8 mb-10">
          {faqData.map((item, index) => {
            const isActive = activeIndex === index;
            const isLast = index === faqData.length - 1;

            return (
              <div key={index}>
                <div className="flex flex-col">
                  <div
                    onClick={() => toggleFaq(index)}
                    className="cursor-pointer flex justify-between items-center text-sm font-medium text-[#010B1E]"
                  >
                    <span className="text-left text-[#010B1E] font-normal mb-4">
                      {item.question}
                    </span>
                    <span>
                      {isActive ? (
                        <IoIosArrowUp className="w-5 h-5 text-[#1F1F2A]" />
                      ) : (
                        <IoIosArrowDown className="w-5 h-5 text-[#1F1F2A]" />
                      )}
                    </span>
                  </div>

                  {!isLast && <hr className="border-t border-[#D5E2EB] mt-2" />}
                </div>

                {isActive && (
                  <div className="pb-4 mt-4 text-xs text-gray-700">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
