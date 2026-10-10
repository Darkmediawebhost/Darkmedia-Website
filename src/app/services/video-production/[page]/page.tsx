import type { Metadata } from "next";
import { notFound } from "next/navigation";
import WebDevelopmentPageView from "@/components/WebDevelopmentPageView";
import { breadcrumbJsonLd, faqJsonLd, pageMetadata, serviceJsonLd, webPageJsonLd } from "@/lib/seo";
import { getVideoPage, videoSeoPages } from "@/lib/video-pages";

export const dynamicParams = false;

export function generateStaticParams() {
  return videoSeoPages.map((page) => ({ page: page.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ page: string }>;
}): Promise<Metadata> {
  const { page: slug } = await params;
  const page = getVideoPage(slug);
  if (!page) return {};
  return pageMetadata(page.seo);
}

export default async function VideoLocationPage({
  params,
}: {
  params: Promise<{ page: string }>;
}) {
  const { page: slug } = await params;
  const page = getVideoPage(slug);
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
