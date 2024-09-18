import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';

interface CallButtonProps {
  phoneNumber: string;
}

const CallButton: React.FC<CallButtonProps> = ({ phoneNumber }) => {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className="flex items-center justify-center w-12 h-12 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-700 transition-colors"
    >
      <FaPhoneAlt size={24} />
    </a>
  );
};

export default CallButton;
