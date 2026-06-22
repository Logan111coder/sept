import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import ScrollStory from "@/components/ScrollStory";
import MovingVisuals from "@/components/MovingVisuals";
import BeforeAfter from "@/components/BeforeAfter";
import Services from "@/components/Services";
import DetailSection from "@/components/DetailSection";
import Reviews from "@/components/Reviews";
import QuoteForm from "@/components/QuoteForm";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ScrollStory />
        <MovingVisuals />
        <BeforeAfter />
        <Services />
        <DetailSection />
        <Reviews />
        <QuoteForm />
      </main>
      <Footer />
    </>
  );
}
