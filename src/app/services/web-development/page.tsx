import WebDevelopmentPageView from "@/components/WebDevelopmentPageView";
import { breadcrumbJsonLd, pageMetadata, seoPages, serviceJsonLd } from "@/lib/seo";
import { webDevelopmentMasterContent } from "@/lib/web-development-locations";

export const metadata = pageMetadata(seoPages.webDevelopment);

export default function WebDevelopmentPage() {
  return (
    <WebDevelopmentPageView
      content={webDevelopmentMasterContent}
      jsonLd={[
        serviceJsonLd(seoPages.webDevelopment, "Web Design and Development"),
        breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: "Web Development", path: "/services/web-development" },
        ]),
      ]}
    />
  );
}
