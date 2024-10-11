import Image from "next/image";

export default function MainStatement() {
  return (
    <section id="features">
      <div className="flex flex-col lg:flex-row justify-center items-center max-w-screen-lg mx-auto pb-10 px-4">
        <div className="w-full lg:w-2/5 lg:mr-20">
          <h3 className="font-bold text-center text-[#ff8f00] text-2xl lg:text-4xl mt-0">
            Nuestro Servicio de Renting
          </h3>
          <p className="text-gray-600 text-justify leading-6 lg:leading-6 text-base lg:text-sm mt-4">
            - Con más de 4 años de experiencia en renting somos tu aliado para
            decisiones inteligentes en movilidad empresarial. Ofrecemos una
            amplia gama de soluciones, desde vehículos ejecutivos hasta flotas
            de trabajo pesado, diseñadas para impulsar el progreso y la
            eficiencia de su empresa. Nos especializamos en renting vehicular,
            gestión de flotas y soluciones de movilidad corporativa. , con
            opciones flexibles y financiamiento de vehículos comerciales,
            garantizando siempre la mejor calidad y servicio en el mercado
            automotriz empresarial.
          </p>
        </div>

        <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
          <div className="relative overflow-hidden transform skew-y-12">
            <Image
              src="/main.webp"
              width={600}
              height={400}
              alt="Features Image"
              className="w-full transform -skew-y-12"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
