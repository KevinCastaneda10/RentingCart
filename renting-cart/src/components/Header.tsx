import Image from "next/image";

export default function Header() {
  return (
    <header
      className="relative bg-cover bg-no-repeat bg-bottom"
      style={{
        backgroundImage:
          "url('/ondas.png'), linear-gradient(237deg, #46b3ff 0%, #0752fe 100%)",
        height: "660px",
        backgroundSize: "contain",
      }}
    >
      <div className="container mx-auto my-9">
        <div className="flex justify-center items-center pt-4 px-32">
          <div className="w-2/5 mt-16">
            <h1 className="text-white text-5xl font-rubik">
              Soluciones de Renting
            </h1>
            <p className="text-white mt-4 leading-8 w-3/4">
              Ayudamos a los gerentes a tomar decisiones basadas en datos, lo
              que les permite reducir hasta un 30% de costos operativos,
              financieros y tributarios anuales en su flota de vehículos de
              trabajo mediante nuestro método de estrenecarro renting.
            </p>
          </div>
          <div className="w-2/5 mt-16 pl-4">
            <Image
              src="/RentingVehiculo.webp"
              width={600}
              height={400}
              alt="Hosting"
              className="max-w-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
