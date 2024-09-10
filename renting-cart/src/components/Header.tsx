"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header
      className="relative bg-cover bg-no-repeat bg-bottom"
      style={{
        backgroundImage:
          "url('/ondas.png'), linear-gradient(280deg, #46b3ff 0%, #0752fe 100%)",
        height: "650px",
        backgroundSize: "cover",
      }}
    >
      <style jsx>{`
        @media (max-width: 768px) {
          header {
            background-size: cover; /* Agranda el fondo en pantallas pequeñas */
          }
        }
      `}</style>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-center items-center pt-4 px-6 lg:px-32">
          <div className="w-full lg:w-2/5 text-center lg:text-left">
            <Image
              src="/logo-YnnovaRent.jpg"
              width={120}
              height={14}
              className="h-16 rounded-full p-0.5"
              alt="YnnovaRent-logo"
            />
            <h1 className="text-white text-4xl lg:text-5xl font-rubik">
              Soluciones de Renting
            </h1>
            <p className="text-white mt-4 leading-7 lg:leading-7 w-full lg:w-3/4">
              Ayudamos a los gerentes a tomar decisiones basadas en datos, lo
              que les permite reducir hasta un 30% de costos operativos,
              financieros y tributarios anuales en su flota de vehículos de
              trabajo mediante nuestro método de estrenecarro renting.
            </p>
          </div>
          <div className="w-full lg:w-2/5 mt-10 lg:mt-16 flex justify-center lg:justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4">
              <div className="transform overflow-hidden rounded-ss-3xl rounded-ee-3xl">
                <Image
                  src="/Soluciones.webp"
                  width={400}
                  height={200}
                  alt="Automóvil"
                  className="w-64 h-auto object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
