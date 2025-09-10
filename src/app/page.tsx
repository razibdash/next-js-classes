import Image from "next/image";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";

export default function Home() {
  return (
   <div>
    <HeroSection />
    <FeaturesSection />
    <TestimonialsSection />
   </div>
  );
}
