import Image from "next/image";
import React from "react";

const Partner = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 sm:p6 bg-white">
      <div className="flex justify-center mb-4">
        <Image
          width={600}
          height={400}
          src="/logo-renting.png"
          alt="Logo Renting Colombia"
          className="h-24 w-auto sm:h-36"
        />
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
