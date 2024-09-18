import Image from "next/image";

export default function Header() {
  return (
    <header className="relative bg-gradient-to-b from-blue-900 via-blue-500 to-white text-white">
      <div className="container mx-auto px-6 py-12 lg:py-24 flex flex-col lg:flex-row items-center lg:items-start">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mb-12 lg:mb-0">
          <Image
            src="/logo-YnnovaRent.jpg"
            width={140}
            height={20}
            className="mb-4 rounded-full"
            alt="YnnovaRent-logo"
          />
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Soluciones de Renting
          </h1>
          <p className="text-lg lg:text-xl leading-relaxed">
            Ayudamos a los gerentes a tomar decisiones basadas en datos, lo que
            les permite reducir hasta un 30% de costos operativos, financieros y
            tributarios anuales en su flota de vehículos de trabajo.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <Image
            src="/Soluciones.jpg"
            width={300}
            height={150}
            alt="Automóvil"
            className="w-full max-w-md object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </header>
  );
}
