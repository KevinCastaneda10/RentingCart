"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { vehicles } from "@/utils/availableVehicles";

const VehicleCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? vehicles.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === vehicles.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative w-full max-w-5xl mx-auto pt-8 flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl text-center text-[#ff8f00] font-bold mb-6">
        Vehículos Disponibles para Renting
      </h2>
      <div className="relative flex items-center w-full">
        <button
          onClick={handlePrev}
          className="absolute left-4 rigt bg-gray-800 text-white rounded-full p-2 sm:p-3 z-10 transform -translate-y-1/2 top-1/2"
        >
          <FaChevronLeft size={20} />
        </button>
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="flex-shrink-0 w-full sm:w-1/2 md:w-1/3 p-2"
              >
                <div
                  className="relative w-full"
                  style={{ paddingBottom: "75%" }}
                >
                  <Image
                    src={vehicle.imageUrl}
                    alt={vehicle.name}
                    layout="fill"
                    objectFit="contain"
                    className="absolute top-0 left-0 w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-75 p-2 text-center">
                    <h3 className="text-sm sm:text-base font-semibold">
                      {vehicle.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={handleNext}
          className="absolute right-4 bg-gray-800 text-white rounded-full p-2 sm:p-3 z-10 transform -translate-y-1/2 top-1/2"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default VehicleCarousel;
