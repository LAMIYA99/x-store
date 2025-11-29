import { Plus } from "lucide-react";

import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Can I customize the design of a home?",
      answer:
        "Yes, we offer extensive customization options for all our home designs. You can modify floor plans, choose finishes, select fixtures, and personalize many aspects of your home to match your vision and lifestyle needs.",
    },
    {
      question: "What is the process for purchasing a home?",
      answer:
        "Our home purchasing process typically includes: initial consultation, design selection, site evaluation, financing approval, contract signing, customization choices, construction phase, and final walkthrough before closing.",
    },
    {
      question: "Do you offer fully custom-built homes?",
      answer:
        "Absolutely! We specialize in fully custom-built homes tailored to your exact specifications. Our team will work with you from initial concept through completion to create your dream home.",
    },
    {
      question: "How long does it take to complete a home?",
      answer:
        "Construction timelines vary based on home size and complexity, but typically range from 6-12 months. Custom homes may take longer depending on design intricacy and material selections.",
    },
  ];

  return (
    <div className="max-w-[1320px] mx-auto px-4 py-[100px]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <span className="text-gray-500 bg-white rounded-2xl px-3 py-1 text-sm font-medium">Faq</span>
          <h1 className="text-[38px] max-w-[500px] font-light text-gray-900 leading-11">
            Frequently asked questions.
          </h1>
          <p className="text-gray-500 text-lg leading-relaxed">
            Still got questions? Feel free to reach out to our
            <br />
            incredible support team, 7 days a week.
          </p>
          <button className="bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors">
            Contact Us
          </button>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-[99px]  overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg text-gray-900 font-normal pr-8">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-gray-900 shrink-0 transition-transform ${
                    openIndex === index ? "rotate-45" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
