import Image from "next/image";
import Header from '@/components/header'
import HeroSection from '@/components/HeroSection'
import ServiceSection from '@/components/Services'
import KeyFactorSection from '@/components/keyFactor'
import MissionVisionValuesSection from "@/components/MissionVisionValuesSection";
import WorkProcess from "@/components/work-process";
import Integration from '@/components/Integration'
import IndustryExpertise from '@/components/IndustryExpertise'
import Technologies from "@/components/Tech";
import Footer from "@/components/footer";
export default function Home() {
  return (
   <> 
   <Header />
   <HeroSection />
   <KeyFactorSection />
   <ServiceSection />
   <MissionVisionValuesSection />
   <WorkProcess />
   <Integration />
   <IndustryExpertise />
   <Technologies />
   <Footer />
   </>
  );
}
