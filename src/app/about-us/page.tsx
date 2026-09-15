import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import AeroShards from "@/components/AeroShards";
import AnubiSection from "@/components/AnubiSection";
import OurEdgeSection from "@/components/OurEdgeSection";
import TrustedWorldwideSection from "@/components/TrustedWorldwideSection";
import FAQSection from "@/components/FAQSection";
import ClientMarqueeSection from "@/components/ClientMarqueeSection";

export const metadata = {
  title: "About Us | Mydbucket",
  description: "More than designers. Problem solvers.",
};

export default function AboutUsPage() {
  return (
    <>
    <Navbar/>

   
    <main className="w-full min-h-screen bg-white pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
      {/* Hero Section Container */}
      <div className="w-full max-w-[1400px] h-[75vh] min-h-[500px] max-h-[800px] bg-[#EBEBEB] rounded-[2rem] sm:rounded-[3rem] px-6 flex flex-col items-center justify-center text-center relative overflow-hidden mt-6">
        
        {/* AeroShards Background */}
        <div className="absolute inset-0 z-0">
          <AeroShards
            backgroundColor="#EBEBEB"
            shardColor="#896ABD"
            accentColor="#A855F7"
            placement="full"
            flow="stream"
            material="pearl"
            detail="balanced"
            effect="none"
            scale={1}
            spread={1}
            depth={1}
            speed={1}
            spin={1}
            interaction="repel"
            density={1.5}
            shardSize={1.1}
            stretch={1}
            turbulence={1}
            glow={1}
            edgeSoftness={2}
            bloom={0.5}
            grain={0.05}
            chromaticAberration={0.0075}
            transitionDuration={1}
            interactionRadius={1.5}
            interactionStrength={0.5}
            rippleIntensity={1}
            holdToGather={true}
          />
        </div>

        {/* Top subtle inner shadow / gradient */}
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-white/40 to-transparent pointer-events-none"></div>

        {/* Hero Text */}
        <h1 className="text-[2.75rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.1] font-bold text-[#111111] tracking-tight z-10 max-w-4xl mx-auto">
          More than designers.
          <br />
          Problem solvers. 
        </h1>

        {/* Call to Action Button */}
       
      </div>

      <ClientMarqueeSection />

      {/* <OurEdgeSection /> */}
      <TrustedWorldwideSection />
      <FAQSection />

      <AnubiSection />
    </main>
    <Footer/>

     </>
  );
}
