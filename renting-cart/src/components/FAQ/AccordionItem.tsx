"use client";

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/solid';

type AccordionItemProps = {
  question: string;
  children: React.ReactNode;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ question, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4">
      <button
        className={`accordion bg-gray-200 p-4 w-full text-left flex justify-between items-center focus:outline-none rounded-3xl transition-colors duration-300 ${isOpen ? 'bg-gray-400' : 'hover:bg-gray-400'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        {isOpen ? (
          <ChevronUpIcon className="w-5 h-5" />
        ) : (
          <ChevronDownIcon className="w-5 h-5" />
        )}
      </button>
      <div className={`panel transition-max-height duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="p-4 border border-t-0">{children}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
