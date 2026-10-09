import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] font-sans">
      <Navbar />
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-36 pb-24 text-center">
        <p className="text-sm font-semibold tracking-[0.25em] uppercase text-gray-500 mb-4">404</p>
        <h1 className="text-4xl md:text-6xl font-bold text-[#111111] tracking-tight max-w-3xl">
          This page does not exist
        </h1>
        <p className="mt-6 max-w-xl text-lg text-gray-600">
          The address may be out of date. You can return to the homepage, look through services, or contact the Mangalore studio.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/"
            className="inline-flex justify-center items-center bg-[#11132d] text-white px-8 py-4 rounded-full text-base font-medium hover:bg-gray-900 transition-colors"
          >
            Back to homepage
          </Link>
          <Link
            href="/services"
            className="inline-flex justify-center items-center text-[#11132d] px-8 py-4 rounded-full text-base font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            View services
          </Link>
          <Link
            href="/contact-us"
            className="inline-flex justify-center items-center text-[#11132d] px-8 py-4 rounded-full text-base font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
          >
            Contact us
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
