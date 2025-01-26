import React, { useState } from "react";
import { motion } from "framer-motion";

interface CollapsibleItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

const CollapsibleItem: React.FC<CollapsibleItemProps> = ({
  question,
  answer,
  isOpen,
  onToggle,
}) => {
  return (
    <div className=" border-gray-200">
      <button
        className="w-full flex justify-between items-center py-4 focus:outline-none"
        onClick={onToggle}
      >
        <span className="text-gray-700">{question}</span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        exit={{ height: 0, opacity: 0 }}
        className="overflow-hidden"
      >
        {isOpen && <p className="text-gray-600 mt-2">{answer}</p>}
      </motion.div>
    </div>
  );
};

const Collapse: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const items = [
    {
      question: "Are these products used?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "What is the warranty?",
      answer:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How fast will my order ship?",
      answer:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ];

  return (
    <div className="bg-gray-100 flex items-center justify-center pt-[8vh] py-[5vh]">
      <div className="w-2/3 bg-white shadow-md rounded-lg p-6">
        <div className="flex"></div>
        <h2 className="text-xl font-semibold text-center mb-4">
          Need-to-Know Info
        </h2>
        {items.map((item, index) => (
          <CollapsibleItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={activeIndex === index}
            onToggle={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default Collapse;
