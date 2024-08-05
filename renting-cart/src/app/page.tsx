import ContactForm from "@/components/ContactForm";
import FAQ from "@/components/FAQ/Faq";
import Header from "@/components/Header";
import MainStatement from "@/components/MainStatement";

export default function Home() {
  return (
    <>
      <Header />
      <ContactForm />
      <MainStatement />
      <FAQ />
    </>
  );
}
