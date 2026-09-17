import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import VideoSection from "@/components/VideoSection";
import InstagramSection from "@/components/InstagramSection";
import Footer from "@/components/Footer";
import AnubiSection from "@/components/AnubiSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] font-sans">
      <Navbar />
      <main id="main-content" className="flex-1">
        <Hero />
        <VideoSection />
        <ServicesSection />
        {/* <MissionVisionSection /> */}
        <InstagramSection />
        <AnubiSection/>
      </main>
      <Footer />
    </div>
  );
}
