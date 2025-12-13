import BenefitSection from "./BenefitSection";
import AdmissionAd from "./components/AdmissionAd";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="">
      <AdmissionAd />
      <Navbar />
      <Hero />
      <BenefitSection />
    </div>
  );
}
