import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FAQSection from "@/components/FAQSection";
import AnubiSection from "@/components/AnubiSection";
import AllServicesGrid from "@/components/AllServicesGrid";
import ServicesSection from "@/components/ServicesSection";

export const metadata = {
  title: "All Services | Mydbucket",
  description: "Comprehensive digital solutions including Web Development, Branding, Video Production, and SEO & Analytics.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] font-sans">
      <Navbar />
      
      <main className="w-full flex-grow pt-24">
        <div className="w-full px-4 sm:px-6 lg:px-8 mb-4 flex flex-col items-center">
          <section className="relative w-full max-w-[1400px] mx-auto h-[60vh] md:h-[70vh] min-h-[500px] rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100">
            <video autoPlay 
              loop 
              muted 
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="https://www.mydbucket.com/wp-content/uploads/2024/10/wave.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-white/85 backdrop-blur-sm"></div>
            
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 tracking-tight leading-[1.1] max-w-4xl mb-6">
                Shaping the Future <br />
                of Digital Innovation.
              </h1>
              <p className="text-lg md:text-xl text-gray-600 font-medium max-w-2xl mx-auto">
                We craft scalable web solutions, stunning visual identities, and data-driven strategies to elevate your brand.
              </p>
            </div>
          </section>
        </div>

        {/* Advanced 3D Motion Graphics Services Grid */}
        {/* <AllServicesGrid /> */}
         <ServicesSection />
        
        {/* FAQ Section */}
        <FAQSection />
        
        {/* Anubi Call to Action Section */}
        <AnubiSection />
      </main>

      <Footer />
    </div>
  );
}
