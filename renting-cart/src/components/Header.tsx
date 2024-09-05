import Image from "next/image";

export default function Header() {
  return (
    <header
      className="relative bg-cover bg-no-repeat bg-bottom"
      style={{
        backgroundImage:
          "url('/ondas.png'), linear-gradient(280deg, #46b3ff 0%, #0752fe 100%)",
        height: "660px",
        backgroundSize: "cover",
      }}
    >
      <div className="container mx-auto my-9">
        <div className="flex flex-col lg:flex-row justify-center items-center pt-4 px-6 lg:px-32">
          <div className="w-full lg:w-2/5 mt-16 text-center lg:text-left">
            <h1 className="text-white text-4xl lg:text-5xl font-rubik">
              Soluciones de Renting
            </h1>
            <p className="text-white mt-4 leading-7 lg:leading-8 w-full lg:w-3/4">
              Ayudamos a los gerentes a tomar decisiones basadas en datos, lo que les permite reducir hasta un 30% de costos operativos, financieros y tributarios anuales en su flota de vehículos de trabajo mediante nuestro método de estrenecarro renting.
            </p>
          </div>
          <div className="w-full lg:w-2/5 mt-10 lg:mt-16 flex justify-center lg:justify-start items-center">
            <div className="relative w-full h-80 lg:h-auto flex justify-between">
              <div className="transform rotate-3 lg:rotate-6 overflow-hidden">
                <Image
                  src="/automovil.webp"
                  width={200}
                  height={300}
                  alt="Automóvil"
                  className="max-w-full h-auto object-cover shadow-lg"
                />
              </div>
              <div className="transform -rotate-3 lg:-rotate-6 overflow-hidden -ml-4 lg:-ml-10">
                <Image
                  src="/operative.png"
                  width={200}
                  height={300}
                  alt="Operativo"
                  className="max-w-full h-auto object-cover shadow-lg"
                />
              </div>
              <div className="transform rotate-3 lg:rotate-6 overflow-hidden -ml-4 lg:-ml-10">
                <Image
                  src="/camioneta.png"
                  width={200}
                  height={300}
                  alt="Camioneta"
                  className="max-w-full h-auto object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
