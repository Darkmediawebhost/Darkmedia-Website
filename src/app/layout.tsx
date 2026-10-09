import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import ScrollToTop from "@/components/ScrollToTop";
import { OG_IMAGE_PATH, seoPages, SITE_NAME, SITE_URL } from "@/lib/seo";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: "Dark Media Tech",
  title: {
    absolute: seoPages.home.title,
  },
  description: seoPages.home.description,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-SQVDQZRX7N"
          strategy="lazyOnload"
        />
        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-SQVDQZRX7N');
          `}
        </Script>
      </head>
      <body className={`${bricolage.className} min-h-full flex flex-col`}>
        {children}
        <ScrollToTop />
      </body>
    </html>
  );
}
