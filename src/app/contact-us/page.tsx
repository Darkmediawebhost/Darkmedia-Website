"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactUs() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get('firstName') || '';
    const lastName = formData.get('lastName') || '';
    const email = formData.get('email') || '';
    const phone = formData.get('phone') || '';
    const company = formData.get('company') || '';
    const message = formData.get('message') || '';

    const whatsappMessage = `*New Contact Request*
*Name:* ${firstName} ${lastName}
*Email:* ${email}
*Phone:* ${phone}
*Company:* ${company}
*Message:* ${message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919480889252?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      <Navbar />

      <main className="flex-grow pt-28 pb-20">
        {/* Hero Section */}
        <section className="relative w-full max-w-[95%] lg:max-w-[90%] mx-auto h-[60vh] md:h-[70vh] rounded-3xl overflow-hidden mb-16">
          <video autoPlay 
            loop 
            muted 
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://www.mydbucket.com/wp-content/uploads/2024/10/wave.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-white/80"></div>
          
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              More Than Conversations.<br />
<span className="text-transparent bg-clip-text bg-gradient-to-br from-gray-900 to-gray-600">
                       Meaningful       Partnerships.
        </span>
            </h1>
            
            <div className="mt-10">
              {/* <a href="https://calendar.app.google/ygsfdQa66jLcWAW37" target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-4 border border-gray-300 rounded-full py-2 px-6 hover:bg-gray-50 transition-colors bg-white/50 backdrop-blur-sm">
                <img src="https://www.mydbucket.com/wp-content/uploads/2025/10/IMG_9351-150x150.webp" alt="Dilshad" className="w-12 h-12 rounded-full" />
                <div className="text-left">
                  <p className="font-bold text-gray-900 text-sm md:text-base">Book a session with Dilshad</p>
                  <p className="text-gray-600 text-xs md:text-sm">(1:1 private session)</p>
                </div>
              </a> */}
            </div>
          </div>
        </section>

        {/* Contact Information & Form */}
        <section className="max-w-[95%] lg:max-w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {/* Left Column - Contact Info */}
          <div className="bg-[#f5f5f5] rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Start the Conversation</h2>
            <p className="text-gray-600 mb-10 leading-relaxed text-lg">
              Share your ideas, goals, and business challenges with us. Whether you're looking for a new website, a stronger brand identity, or a complete digital transformation, our team is ready to craft solutions that deliver measurable results and long-term growth.
            </p>

            <div className="mb-10 border-t border-gray-200 pt-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Call Us</h3>
              
              <div className="space-y-4">
                <a href="tel:+919480889252" className="flex items-center space-x-3 text-gray-700 hover:text-black-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-lg">+91 94808 89252</span>
                </a>
                
                <a href="tel:+917483156464" className="flex items-center space-x-3 text-gray-700 hover:text-black-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-lg">+91 74831 56464</span>
                </a>

                <a href="mailto:info@darkmedia.tech" className="flex items-center space-x-3 text-gray-700 hover:text-black-600 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-lg">info@darkmedia.tech</span>
                </a>
              </div>
            </div>

            <div className="mb-10 border-t border-gray-200 pt-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Office Address</h3>
              
              <a href="https://maps.app.goo.gl/oGndED4cyJk4sGyn9" target="_blank" rel="noopener noreferrer" className="flex items-start space-x-3 text-gray-700 hover:text-black-600 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-lg">
                  KOTICHENNAYA CIRCLE, Nandi Gudda,<br />
                  Mangaluru, Karnataka 575002
                </span>
              </a>
            </div>

            {/* Map */}
            <div className="w-full h-72 rounded-2xl overflow-hidden mt-8 border border-gray-200 shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.8059636942207!2d74.85373469999999!3d12.855805700000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35bf30418289d%3A0x90bffbd6a7632235!2sDarkMedia!5e0!3m2!1sen!2sin!4v1789220519094!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-[#f5f5f5] rounded-3xl p-8 md:p-12">
            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">First name*</label>
                  <input type="text" id="firstName" name="firstName" required className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-black focus:ring-0 px-0 py-2 outline-none transition-colors" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">Last name*</label>
                  <input type="text" id="lastName" name="lastName" required className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-black focus:ring-0 px-0 py-2 outline-none transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email*</label>
                  <input type="email" id="email" name="email" required className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-black focus:ring-0 px-0 py-2 outline-none transition-colors" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone*</label>
                  <input type="tel" id="phone" name="phone" required className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-black focus:ring-0 px-0 py-2 outline-none transition-colors" />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">Company / Organization Name*</label>
                <input type="text" id="company" name="company" required className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-black focus:ring-0 px-0 py-2 outline-none transition-colors" />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">How can we help?</label>
                <textarea id="message" name="message" rows={4} className="w-full bg-transparent border-0 border-b border-gray-300 focus:border-black focus:ring-0 px-0 py-2 outline-none transition-colors resize-none"></textarea>
              </div>

              <div className="pt-6">
                <button type="submit" className="px-12 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-50 transition-colors shadow-sm border border-gray-200">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
