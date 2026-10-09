import { JsonLd } from "@/components/JsonLd";
import { breadcrumbJsonLd, pageMetadata, seoPages, webPageJsonLd } from "@/lib/seo";

export const metadata = pageMetadata(seoPages.contact);

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd(seoPages.contact, "ContactPage"),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact-us" },
          ]),
        ]}
      />
      {children}
    </>
  );
}
