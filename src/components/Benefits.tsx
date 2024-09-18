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
            Pagos mensuales fijos y predecibles, facilitando la planificación
            financiera sin sorpresas.
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
            Mantenimiento y reparaciones incluidos, asegurando vehículos en
            óptimas condiciones sin costos extra.
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-2">🚗</span>
            Actualización periódica de flota con los modelos más nuevos y
            eficientes.
          </li>
          <li className="flex items-start">
            <span className="text-2xl mr-2">📋</span>
            Gestión operativa simplificada al centralizar todos los servicios en
            un solo proveedor.
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
