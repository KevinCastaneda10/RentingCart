import WhatsAppButton from "@/components/WhatsAppButton";
import CallButton from "@/components/CallButton";
import Beneficios from "@/components/Benefits";
import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ/Faq";
import Header from "@/components/Header";
import MainStatement from "@/components/MainStatement";
import Partner from "@/components/Partner";
import VehicleCarousel from "@/components/VehicleCarousel";

export default function Home() {
  const phoneNumber = "+573176804823";
  const message =
    "Hola, estoy interesado en obtener más información sobre la renta de vehículos.";

  return (
    <>
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
    </>
  );
}
