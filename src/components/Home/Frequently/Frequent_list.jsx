import React from "react";
import { ChevronDown } from "lucide-react";

const Frequent_list = ({ index, openIndex, setOpenIndex, faq }) => {
  return (
    <div className="border rounded-lg bg-white px-4 lg:p-4 shadow-sm">
      <button
        onClick={() => setOpenIndex(openIndex === index ? null : index)}
        className="w-full flex justify-between items-center py-4 text-left text-base font-medium text-gray-900 focus:outline-none"
        aria-expanded={openIndex === index}
        aria-controls={`faq-answer-${index}`}
      >
        {faq.question}
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            openIndex === index ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className={`overflow-hidden transition-all duration-200 ${
          openIndex === index ? "max-h-96 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-[#524E4C] text-sm lg:text-[16px]">{faq.answer}</p>
      </div>
    </div>
  );
};

export default Frequent_list;
