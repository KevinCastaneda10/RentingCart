import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-700 text-sm text-white w-full py-2">
      <div className="max-w-screen-xl mx-auto p-4 md:flex md:items-center md:justify-between">
        <div className="mb-4 md:mb-0 flex items-center justify-center">
          <span>
            © 2024{" "}
            <a href="/" className="hover:underline">
              My Shop™
            </a>
            . All Rights Reserved.
          </span>
        </div>
        <div className="flex justify-center space-x-6">
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
        </div>
        {/* <div className="flex justify-center space-x-6 mt-4 md:mt-0">
          <div className="relative group">
            <a
              href="https://github.com/KevinCastaneda10"
              className="hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/github.png"
                width={16}
                height={16}
                alt="GitHub"
                className="w-5 h-5"
              />
            </a>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
              GitHub
            </div>
          </div>
          <div className="relative group">
            <a
              href="http://www.linkedin.com/in/kevincastanedacarreno"
              className="hover:text-gray-900"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.png"
                width={16}
                height={16}
                alt="LinkedIn"
                className="w-5 h-5"
              />
            </a>
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-xs rounded py-1 px-2">
              LinkedIn
            </div>
          </div>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
