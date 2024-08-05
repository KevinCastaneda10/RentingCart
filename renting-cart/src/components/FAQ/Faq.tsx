import AccordionItem from "./AccordionItem";

const FAQ: React.FC = () => {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="font-bold text-center text-[#292929] text-2xl lg:text-4xl mt-0">
              Preguntas Frecuentes
            </h1>
          </div>
  
          <AccordionItem question="1. ¿En qué consiste la renta de carros para empresas en Colombia?">
            <p className="text-gray-700 p-2">
              El renting consiste en un contrato mediante el cual tú o tu empresa se comprometen a pagar una cuota mensual a cambio del uso de un vehículo. Esto incluye servicios adicionales como mantenimiento, seguros y trámites anuales, eliminando la necesidad de ocuparte de estos aspectos.
            </p>
          </AccordionItem>
  
          <AccordionItem question="2. ¿Qué servicios incluye el canon mensual de alquiler de camiones o de carros para empresas?">
            <p className="text-gray-700 p-2">
              El canon mensual incluye el uso del vehículo, matrícula, impuestos, trámites anuales, seguro del vehículo, SOAT, mantenimiento, telemetría y administración de combustible. Estos servicios garantizan que tu empresa no tenga que preocuparse por costos adicionales relacionados con la gestión del vehículo.
            </p>
          </AccordionItem>
  
          <AccordionItem question="3. ¿Por cuánto tiempo son los contratos de renting para negocios y pymes?">
            <p className="text-gray-700 p-2">
              Los contratos de renting tienen una duración que varía entre 48 meses (4 años) y 72 meses (6 años), dependiendo del tipo de vehículo, la cantidad de vehículos rentados, el tipo de empresa y el uso que se le dará al vehículo.
            </p>
          </AccordionItem>
  
          <AccordionItem question="4. ¿Cuáles son los requisitos para alquilar carros con la figura de renting?">
            <AccordionItem question="Empleados">
              <ul className="list-disc list-inside text-gray-700 pl-5">
                <li>No tener reportes negativos en centrales de riesgo.</li>
                <li>Cédula de ciudadanía.</li>
                <li>Extractos bancarios de los últimos 3 meses.</li>
                <li>Formatos específicos.</li>
              </ul>
            </AccordionItem>
  
            <AccordionItem question="Independientes">
              <ul className="list-disc list-inside text-gray-700 pl-5">
                <li>Tiempo mínimo de un año en la actividad.</li>
                <li>No pertenecer al régimen subsidiado.</li>
                <li>No tener reportes negativos en centrales de riesgo.</li>
                <li>Cédula de ciudadanía.</li>
                <li>RUT.</li>
                <li>Composición accionaria.</li>
                <li>Estados financieros de los últimos años.</li>
                <li>Declaración de renta.</li>
                <li>Entre otros documentos.</li>
              </ul>
            </AccordionItem>
  
            <AccordionItem question="Pymes">
              <ul className="list-disc list-inside text-gray-700 pl-5">
                <li>Cámara de comercio actualizada.</li>
                <li>Cédula del representante legal.</li>
                <li>RUT.</li>
                <li>Composición accionaria.</li>
                <li>Estados financieros de los últimos años.</li>
                <li>Declaración de renta.</li>
                <li>Entre otros documentos.</li>
              </ul>
            </AccordionItem>
          </AccordionItem>
  
          <AccordionItem question="5. ¿Cuál es el valor del canon de arrendamiento?">
            <p className="text-gray-700 p-2">
              El valor del canon mensual varía según las necesidades de tu negocio y factores como el tipo de vehículo, el uso que se le dará y el kilometraje máximo que recorrerá.
            </p>
          </AccordionItem>
  
          <AccordionItem question="6. ¿Cuánto tarda el estudio para la verificación de documentos y la entrega de los vehículos?">
            <p className="text-gray-700 p-2">
              El estudio de verificación de documentos puede durar entre 1 y 3 semanas. El tiempo de entrega del vehículo depende de su disponibilidad en el mercado y las especificaciones requeridas por tu empresa.
            </p>
          </AccordionItem>
  
          <AccordionItem question="7. ¿El renting para empresas cuenta como endeudamiento?">
            <p className="text-gray-700 p-2">
              No, el renting no se considera endeudamiento. Los pagos mensuales se registran como un gasto operativo, lo que puede ser deducible del impuesto de renta.
            </p>
          </AccordionItem>
  
          <AccordionItem question="8. ¿Qué clase de vehículos puedo rentar para mi negocio?">
            <p className="text-gray-700 p-2">
              Puedes rentar vehículos de uso personal, vehículos livianos, vehículos de uso comercial y camiones livianos, según las necesidades de tu empresa.
            </p>
          </AccordionItem>
  
          <AccordionItem question="9. ¿Se puede adquirir el vehículo al final del contrato?">
            <p className="text-gray-700 p-2">
              No, en la modalidad de renting o arrendamiento operativo no existe la opción de compra del vehículo al finalizar el contrato. Esta es una diferencia clave con respecto al leasing o arrendamiento financiero.
            </p>
          </AccordionItem>
  
          <AccordionItem question="10. ¿Qué ventajas ofrece el renting frente a la compra de vehículos?">
            <p className="text-gray-700 p-2">
              El renting ofrece ventajas como la preservación del capital, costos fijos predecibles, mejora del flujo de caja, mantenimiento y reparaciones incluidos, renovación de flota periódica, gestión simplificada y beneficios tributarios, como la deducción de impuestos y una mejor estructura financiera para la empresa.
            </p>
          </AccordionItem>
        </div>
      </div>
    );
  };
  
  export default FAQ;
  