import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 text-sm text-white w-full py-2">
      <div className="max-w-screen-xl mx-auto p-4 md:flex md:items-center md:justify-around">
        <div className="mb-4 md:mb-0 flex items-center justify-center">
          <span>
            © 2024{" "}
            <a href="/" className="hover:underline">
              YnnovaRent™
            </a>
            . Todos los derechos reservados.
          </span>
        </div>
        {/* <div className="flex justify-center space-x-6">
          <a href="/#" className="hover:underline">
            About Us
          </a>
          <a href="/#" className="hover:underline">
            Contact
          </a>
          <a href="/#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="/#" className="hover:underline">
            Terms & Conditions
          </a>
        </div> */}
        <div className="flex justify-center space-x-6 mt-4 md:mt-0">
          <div className="relative group">
            <a
              href="https://www.facebook.com/profile.php?id=61565783102156"
              className="hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/facebook.png"
                width={128}
                height={128}
                alt="Facebook"
                className="w-6 h-6"
              />
            </a>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
              Facebook
            </div>
          </div>
          <div className="relative group">
            <a
              href="https://www.instagram.com/ynnovarent/"
              className="hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/instagram.png"
                width={128}
                height={128}
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
              Instagram
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
