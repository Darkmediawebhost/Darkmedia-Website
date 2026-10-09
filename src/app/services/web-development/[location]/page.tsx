import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WebDevelopmentPageView from "@/components/WebDevelopmentPageView";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd, webPageJsonLd } from "@/lib/seo";
import { getWebDevelopmentLocation, webDevelopmentLocations } from "@/lib/web-development-locations";

export const dynamicParams = false;

export function generateStaticParams() {
  return webDevelopmentLocations.map((page) => ({ location: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ location: string }>;
}): Promise<Metadata> {
  const { location } = await params;
  const page = getWebDevelopmentLocation(location);
  if (!page) return {};
  return pageMetadata(page.seo);
}

export default async function WebDevelopmentLocationPage({
  params,
}: {
  params: Promise<{ location: string }>;
}) {
  const { location } = await params;
  const page = getWebDevelopmentLocation(location);
  if (!page) notFound();

  return (
    <WebDevelopmentPageView
      content={page.content}
      jsonLd={[
        webPageJsonLd(page.seo),
        serviceJsonLd(page.seo, page.serviceName, page.areaServed),
        breadcrumbJsonLd(page.content.breadcrumb ?? []),
        ...(page.content.faqs ? [faqJsonLd(page.content.faqs)] : []),
      ]}
    />
  );
}
