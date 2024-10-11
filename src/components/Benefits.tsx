import React from "react";

const Beneficios = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-200 shadow-lg rounded-lg p-6 hover:shadow-xl transition transform hover:scale-105 duration-500 ease-out">
        <h2 className="text-xl font-bold text-blue-700 mb-4">
          Beneficios Financieros
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-2xl mr-2">💰</span>
            Preserva capital al evitar un desembolso inicial significativo,
            conservando liquidez para otras inversiones.
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-2">📈</span>
            Pagos mensuales que facilitan la planificación financiera.
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-2">💵</span>
            Mejora el flujo de caja al evitar la compra de activos, permitiendo
            destinar recursos a áreas críticas.
          </li>
        </ul>
      </div>

      <div className="bg-gray-200 shadow-lg rounded-lg p-6 hover:shadow-xl transition transform hover:scale-105 duration-500 ease-out">
        <h2 className="text-xl font-bold text-green-700 mb-4">
          Beneficios Operativos
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-2xl mr-2">🔧</span>
            Mantenimiento y reparaciones incluidos: Los contratos de renting
            incluyen el mantenimiento y las reparaciones, garantizando que sus
            vehículos estén siempre en óptimas condiciones.
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-2">🚗</span>
            Renovación de flota: La flexibilidad del renting permite la
            actualización periódica de su flota vehicular, asegurando que
            siempre cuente con los modelos más nuevos y eficientes en términos
            de consumo y tecnología.
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-2">📋</span>
            Gestión simplificada: Al centralizar todos los servicios
            relacionados con sus vehículos en un solo proveedor, se simplifica
            la gestión operativa y se reduce la carga administrativa para su
            equipo.
          </li>
          <li className="flex items-start underline italic text-xs">
            *La renovación de la flota está sujeta a lo contratado y no se
            realiza de manera automática; RentingColombia estudia cada caso para
            evaluar la actualización de los vehículos.
          </li>
        </ul>
      </div>

      <div className="bg-gray-200 shadow-lg rounded-lg p-6 hover:shadow-xl transition transform hover:scale-105 duration-500 ease-out">
        <h2 className="text-xl font-bold text-red-700 mb-4">
          Beneficios Tributarios
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start">
            <span className="text-2xl mr-2">💼</span>
            Deducción de impuestos mediante pagos de renting, reduciendo la
            carga tributaria.
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-2">⚖️</span>
            Ventajas fiscales adicionales en vehículos comerciales, optimizando
            la estructura tributaria.
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-2">📊</span>
            El renting no afecta el balance, mejorando los indicadores
            financieros y la atracción para inversores.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Beneficios;
