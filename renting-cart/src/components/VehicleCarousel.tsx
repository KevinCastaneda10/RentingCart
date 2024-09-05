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
      <h2 className="text-2xl sm:text-3xl text-[#ff8f00] font-bold mb-6">
        Vehículos Disponibles para Renting
      </h2>
      <div className="relative flex items-center w-full">
        <button
          onClick={handlePrev}
          className="absolute left-0 bg-gray-800 text-white rounded-full p-2 sm:p-3 z-10 transform -translate-y-1/2 top-1/2"
        >
          <FaChevronLeft size={20} />
        </button>
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {vehicles.map((vehicle) => (
              <div
                key={vehicle.id}
                className="flex-shrink-0 w-1/3 p-2 sm:p-4"
                style={{ flexBasis: "33.333%" }}
              >
                <div className="group relative">
                  <Image
                    width={300}
                    height={200}
                    src={vehicle.imageUrl}
                    alt={vehicle.name}
                    className="w-full h-32 sm:h-48 object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-white p-2 text-center">
                    <h3 className="text-xs sm:text-sm font-semibold">
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
          className="absolute right-0 bg-gray-800 text-white rounded-full p-2 sm:p-3 z-10 transform -translate-y-1/2 top-1/2"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default VehicleCarousel;
