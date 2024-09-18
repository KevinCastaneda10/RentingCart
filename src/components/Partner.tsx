import Image from "next/image";
import React from "react";

const Partner = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 bg-white">
      <div className="flex flex-col sm:flex-row justify-center items-center mb-4 relative">
        <div className="flex flex-col sm:flex-row items-center relative">
          <div className="relative mb-4 sm:mb-0">
            <Image
              src="/logo-YnnovaRent.jpg"
              width={600}
              height={400}
              className="h-80 w-auto rounded-full sm:h-80"
              alt="YnnovaRent-logo"
            />
          </div>

          <div className="hidden sm:block left-1/2 w-1 bg-gray-500 h-48"></div>

          <div className="block sm:hidden absolute top-80 w-56 bg-gray-500 h-1"></div>

          <div className="relative">
            <Image
              width={600}
              height={400}
              src="/logo-renting.png"
              alt="Logo Renting Colombia"
              className="h-48 w-auto sm:h-48"
            />
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-700 text-lg leading-relaxed">
          Única marca de vehículos en Colombia con servicio de renting propio.
          Ofrecemos 10 años de experiencia, servicio personalizado. Incluye
          matrícula, impuestos, SOAT, mantenimiento, llantas y seguro.
          Calculamos el canon según el kilometraje deseado.
        </p>
      </div>
    </div>
  );
};

export default Partner;
