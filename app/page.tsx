import BenefitSection from "./components/home/BenefitSection";
import AdmissionAd from "./components/home/AdmissionAd";
import Hero from "./components/home/Hero";
import Navbar from "./components/Navbar";
import TestimonialSection from "./components/home/TestimonialSection";
import FAQSection from "./components/home/FAQSection"

export default function Home() {
  return (
    <div className="">
      <AdmissionAd />
      <Navbar />
      <Hero />
      <BenefitSection />
      <TestimonialSection />
      <FAQSection />
    </div>
  );
}
