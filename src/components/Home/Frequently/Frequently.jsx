import React, { useState } from "react";
import Frequent_list from "./Frequent_list"; // Adjust path as needed

const faqs = [
  {
    question: "What are your focus areas as a Marketing agency?",
    answer:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words.",
  },
  {
    question: "What sets Lenscafe apart from other top design agencies?",
    answer:
      "We combine strategic thinking with design excellence to create meaningful and impactful solutions. Our collaborative approach, attention to detail, and focus on results-driven design sets us apart from other agencies.",
  },
  {
    question:
      "What services do you offer for start-ups, and how can they add value to my business?",
    answer:
      "We offer comprehensive services tailored for startups including branding, website development, marketing strategy, and growth consulting. Our solutions are scalable and designed to help startups establish their presence and grow efficiently.",
  },
  {
    question:
      "Can you help us redesign our app, website, or enterprise/B2B software?",
    answer:
      "Yes, we specialize in redesigning digital products across all platforms. Our process includes thorough analysis, user research, UX/UI design, and implementation support to ensure successful outcomes.",
  },
  {
    question: "How do you estimate the time for the Web development project?",
    answer:
      "We estimate project timelines based on scope, complexity, and requirements. Our process includes detailed planning, regular milestones, and transparent communication to ensure timely delivery.",
  },
];

const Frequently = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-900">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Frequent_list
              key={index}
              faq={faq}
              index={index}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Frequently;
