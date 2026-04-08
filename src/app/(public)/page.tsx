import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import ProblemSolution from "@/components/home/ProblemSolution";
import HomeEvidenceGallery from "@/components/home/HomeEvidenceGallery";
import ServicesSnapshot from "@/components/home/ServicesSnapshot";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedTestimonial from "@/components/home/FeaturedTestimonial";
import WhyUrban360 from "@/components/home/WhyUrban360";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <HomeEvidenceGallery />
      <ServicesSnapshot />
      <HowItWorks />
      <FeaturedTestimonial />
      <WhyUrban360 />
      <Testimonials />
      <CTASection />
    </>
  );
}
