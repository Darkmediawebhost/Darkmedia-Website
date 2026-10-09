import type { Metadata } from "next";

export const SITE_URL = "https://darkmedia.tech";
export const SITE_NAME = "Dark Media Tech";
export const OG_IMAGE_PATH = "/og-image.png";
export const LOGO_PATH = "/logo.png";

export type PageSeo = {
  path: string;
  title: string;
  description: string;
};

export const seoPages = {
  home: {
    path: "/",
    title: "Dark Media Tech | Web, Software, AI & Digital Solutions in Mangalore",
    description:
      "Dark Media Tech provides professional web development, software, AI automation, branding, digital marketing and creative solutions in Mangalore, Karnataka.",
  },
  about: {
    path: "/about-us",
    title: "About Dark Media Tech | Web & Digital Solutions in Mangalore",
    description:
      "Learn about Dark Media Tech, a Mangalore studio that builds websites, brands, video, and digital systems for businesses in Karnataka and beyond.",
  },
  services: {
    path: "/services",
    title: "Web Development, Software & Digital Services | Dark Media Tech",
    description:
      "Explore Dark Media Tech services in Mangalore: web development, branding, video production, SEO, analytics, and social media management.",
  },
  contact: {
    path: "/contact-us",
    title: "Contact Dark Media Tech | Web & Digital Solutions in Mangalore",
    description:
      "Contact Dark Media Tech in Mangalore for a web, branding, video, or digital project. Visit Kotichennaya Circle, call, or send a project brief.",
  },
  webDevelopment: {
    path: "/services/web-development",
    title: "Web Development Services in Mangalore | Dark Media Tech",
    description:
      "Dark Media Tech is a web design and development company in Mangalore. We build custom websites and web applications for speed, clarity, and how your business sells.",
  },
  branding: {
    path: "/services/branding",
    title: "Branding and Identity Design | Dark Media Tech",
    description:
      "Brand identity, logos, and visual systems from Dark Media Tech in Mangalore, designed so a business is recognizable and trusted.",
  },
  video: {
    path: "/services/video-production",
    title: "Video Production Services | Dark Media Tech",
    description:
      "Corporate films, commercials, and brand video from Dark Media Tech, produced for businesses that need work people remember.",
  },
  seo: {
    path: "/services/seo-analytics",
    title: "SEO and Analytics Services | Dark Media Tech",
    description:
      "Technical SEO, local search, and analytics from Dark Media Tech, for Mangalore businesses that want qualified organic traffic.",
  },
  social: {
    path: "/services/social-media-management",
    title: "Social Media Management | Dark Media Tech",
    description:
      "Social media strategy, content, and campaign management from Dark Media Tech for brands that need a consistent public presence.",
  },
} as const satisfies Record<string, PageSeo>;

export function absoluteUrl(path: string) {
  if (path === "/" || path === "") return SITE_URL;
  return `${SITE_URL}${path}`;
}

const robots: Metadata["robots"] = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export function pageMetadata(page: PageSeo): Metadata {
  const url = absoluteUrl(page.path);

  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    robots,
    openGraph: {
      type: "website",
      title: page.title,
      description: page.description,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: "Dark Media Tech, web and digital solutions in Mangalore",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [OG_IMAGE_PATH],
    },
  };
}

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: "Kotichennaya Circle, Nandi Gudda",
  addressLocality: "Mangaluru",
  addressRegion: "Karnataka",
  postalCode: "575002",
  addressCountry: "IN",
};

export function organizationGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        url: SITE_URL,
        logo: `${SITE_URL}${LOGO_PATH}`,
        email: "info@darkmedia.tech",
        telephone: "+919480889252",
        sameAs: ["https://www.instagram.com/darkmedia.tech"],
        address: postalAddress,
        description:
          "Web development, software, AI, digital, branding and creative solutions in Mangalore.",
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": ["ProfessionalService", "LocalBusiness"],
        "@id": `${SITE_URL}/#business`,
        name: SITE_NAME,
        url: SITE_URL,
        image: `${SITE_URL}${OG_IMAGE_PATH}`,
        telephone: "+919480889252",
        email: "info@darkmedia.tech",
        address: postalAddress,
        geo: {
          "@type": "GeoCoordinates",
          latitude: 12.8558057,
          longitude: 74.8537347,
        },
        areaServed: {
          "@type": "City",
          name: "Mangaluru",
        },
        parentOrganization: { "@id": `${SITE_URL}/#organization` },
      },
    ],
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function webPageJsonLd(page: PageSeo, type: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" = "WebPage") {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name: page.title,
    description: page.description,
    url: absoluteUrl(page.path),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
  };
}

export function serviceJsonLd(
  page: PageSeo,
  serviceName: string,
  areaServed: { "@type": "City" | "State" | "AdministrativeArea"; name: string } = {
    "@type": "City",
    name: "Mangaluru",
  },
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: page.description,
    url: absoluteUrl(page.path),
    provider: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed,
  };
}

export function faqJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
