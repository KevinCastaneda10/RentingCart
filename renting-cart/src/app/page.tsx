import Head from "next/head";
import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import Beneficios from "@/components/Benefits";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ/Faq";
import Header from "@/components/Header";
import MainStatement from "@/components/MainStatement";
import Partner from "@/components/Partner";
import VehicleCarousel from "@/components/VehicleCarousel/VehicleCarousel";
import "./globals.css";

export default async function Home() {
  const phoneNumber = "+573246200856";
  const message =
    "Hola, estoy interesado en obtener más información sobre la renta de vehículos.";

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "CarRental",
    name: "Tu Empresa de Renta de Vehículos",
    description:
      "Ofrecemos una amplia gama de vehículos para alquiler con precios accesibles.",
    url: "https://www.tusitio.com",
    logo: "https://www.tusitio.com/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+573246200856",
      contactType: "Customer Service",
    },
  };

  return (
    <>
      <Head>
        <title>Renta de Vehículos - Alquiler de Vehículos Fácil y Rápido</title>
        <meta
          name="description"
          content="Renta de vehículos en tu ciudad de manera rápida y eficiente. Contamos con una amplia flota de vehículos adaptados a tus necesidades."
        />
        <meta
          name="keywords"
          content="renta de vehículos, alquiler de coches, renta rápida, vehículos en alquiler"
        />
        <meta
          property="og:title"
          content="Renta de Vehículos - Alquiler de Vehículos Fácil y Rápido"
        />
        <meta
          property="og:description"
          content="Renta de vehículos en tu ciudad de manera rápida y eficiente. Explora nuestra flota de autos disponibles."
        />
        <meta property="og:image" content="/images/carrusel-image.jpg" />
        <meta property="og:url" content="https://www.tusitio.com" />
        <meta name="twitter:card" content="summary_large_image" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </Head>

      <div className="overflow-x-hidden">
        <Header />
        <MainStatement />
        <Beneficios />
        <Partner />
        <VehicleCarousel />
        <FAQ />
        <ContactForm />

        <div className="fixed bottom-20 right-4 flex flex-col gap-4">
          <WhatsAppButton phoneNumber={phoneNumber} message={message} />
          <CallButton phoneNumber={phoneNumber} />
        </div>
      </div>
    </>
  );
}
