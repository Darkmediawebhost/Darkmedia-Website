import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dark Media | Expert Branding, Web & Video Solutions",
  description: "Trusted by visionary brands worldwide to craft unforgettable digital experiences and drive meaningful growth.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} h-full antialiased`}
    >
      <body className={`${bricolage.className} min-h-full flex flex-col`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
