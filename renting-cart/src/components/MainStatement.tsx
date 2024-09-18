import Image from "next/image";

export default function MainStatement() {
  return (
    <section id="features">
      <div className="flex flex-col lg:flex-row justify-center max-w-screen-lg mx-auto pb-10 px-4">
        <div className="w-full lg:w-2/5 lg:mr-20">
          <h3 className="font-bold text-center text-[#ff8f00] text-2xl lg:text-4xl mt-0">
            Nuestro Servicio de Renting
          </h3>
          <p className="text-gray-600 text-justify leading-6 lg:leading-6 text-base lg:text-sm mt-4">
            Con más de 4 años de experiencia liderando el sector de renting y
            financiamiento vehicular, YnnovaRent se destaca por su trayectoria
            impecable y la confianza de nuestros clientes. Nuestras alianzas
            estratégicas, profundo conocimiento del mercado y métodos
            innovadores nos posicionan como el mejor aliado para tomar
            decisiones inteligentes en movilidad empresarial. <br /> <br />
            Ofrecemos una amplia gama de soluciones, desde vehículos ejecutivos
            hasta flotas de trabajo pesado, garantizando opciones personalizadas
            que impulsan el progreso y la eficiencia de su empresa. Nos
            especializamos en Renting vehicular, gestión de flotas y soluciones
            de movilidad corporativa, comprometiéndonos a proporcionar opciones
            de renting flexibles y financiamiento para vehículos comerciales,
            asegurando siempre la mejor calidad y servicio en el mercado
            automotriz empresarial.
          </p>
        </div>

        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <div className="relative overflow-hidden transform skew-y-12">
            <Image
              src="/main.webp"
              width={300}
              height={200}
              alt="Features Image"
              className="w-full transform -skew-y-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
