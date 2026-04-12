import Hero from "@/components/home/Hero";
import ServicesSnapshot from "@/components/home/ServicesSnapshot";
import ProblemSolution from "@/components/home/ProblemSolution";
import HomeEvidenceGallery from "@/components/home/HomeEvidenceGallery";
import HowItWorks from "@/components/home/HowItWorks";
import WhyUrban360 from "@/components/home/WhyUrban360";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSnapshot />
      <ProblemSolution />
      <HomeEvidenceGallery />
      <HowItWorks />
      <WhyUrban360 />
      <Testimonials />
      <CTASection />
    </>
  );
}
