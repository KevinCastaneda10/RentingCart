import React from "react";
import { FaWhatsapp } from "react-icons/fa";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber,
  message,
}) => {
  const formattedPhoneNumber = phoneNumber
    .replace(/[\s\-\(\)]/g, "")
    .replace("+", "");

  const encodedMessage = encodeURIComponent(message);

  const url = `https://api.whatsapp.com/send?phone=${formattedPhoneNumber}&text=${encodedMessage}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-12 h-12 bg-green-500 text-white rounded-full shadow-md hover:bg-green-700 transition-colors"
    >
      <FaWhatsapp size={24} />
    </a>
  );
};

export default WhatsAppButton;
