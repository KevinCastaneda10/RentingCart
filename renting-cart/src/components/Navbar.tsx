"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (isOpen && !(e.target as HTMLElement).closest(".menu-content")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]);

  return (
    <nav className="bg-blue-700 fixed w-full top-0 shadow-md z-20 px-5 text-white">
      <div className="flex justify-around items-center">
        <Image
          src="/logo-YnnovaRent.jpg"
          width={120}
          height={14}
          className="h-16 rounded-full p-0.5"
          alt="YnnovaRent-logo"
        />

        <div className="lg:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        <ul className="hidden lg:flex space-x-5">
          <li>
            <a href="" className="text-white hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="" className="text-white hover:underline">
              Services
            </a>
          </li>
          <li>
            <a href="" className="text-white hover:underline">
              Feature
            </a>
          </li>
          <li>
            <a href="" className="text-white hover:underline">
              Pricing
            </a>
          </li>
          <li>
            <a href="" className="text-white hover:underline">
              File Management
            </a>
          </li>
          <li>
            <a href="" className="text-white hover:underline">
              Testimonials
            </a>
          </li>
        </ul>
      </div>

      <div
        className={`lg:hidden fixed top-0 right-0 w-3/4 h-full bg-blue-700 text-white shadow-lg z-30 transition-transform duration-300 ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <div className="menu-content">
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <ul className="flex flex-col space-y-5 p-10">
            <li>
              <a
                href=""
                className="text-white hover:underline"
                onClick={toggleMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-white hover:underline"
                onClick={toggleMenu}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-white hover:underline"
                onClick={toggleMenu}
              >
                Feature
              </a>
            </li>
            <li>
              <a
                href=""
                className="text-white hover:underline"
                onClick={toggleMenu}
              >
                Pricing
              </a>
            </li>
            
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
