import type { FaqItem, ServiceLink, TextBlock, WebDevelopmentLocation } from "@/lib/web-development-locations";

const mangaloreHub: ServiceLink = {
  title: "Website Development Company in Mangalore",
  href: "/services/web-development/mangalore",
};
const contact: ServiceLink = { title: "Contact our team", href: "/contact-us" };
const webHub: ServiceLink = { title: "Web Development Services", href: "/services/web-development" };
const seoHub: ServiceLink = { title: "SEO and Analytics", href: "/services/seo-analytics" };
const socialHub: ServiceLink = { title: "Social Media Management", href: "/services/social-media-management" };
const brandHub: ServiceLink = { title: "Branding", href: "/services/branding" };
const videoHub: ServiceLink = { title: "Video Production", href: "/services/video-production" };

function crumbs(name: string, path: string) {
  return [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Web Development", path: "/services/web-development" },
    { name, path },
  ];
}

type PageInput = {
  slug: string;
  serviceName: string;
  title: string;
  description: string;
  keywords: string[];
  badgeText: string;
  titleLine1: string;
  titleLine2: string;
  intro: string;
  cards: TextBlock[];
  whyTitleLead: string;
  whyTitleAccent: string;
  whyBody: string;
  whyPoints: string[];
  offerTitleLead: string;
  offerTitleRest: string;
  offerTitleAccent: string;
  offerBody: string;
  offers: TextBlock[];
  faqs: FaqItem[];
  hub: ServiceLink;
  related: ServiceLink[];
};

function page(input: PageInput): WebDevelopmentLocation {
  const path = `/services/web-development/${input.slug}`;
  return {
    slug: input.slug,
    name: input.badgeText,
    seo: {
      path,
      title: input.title,
      description: input.description,
      keywords: input.keywords,
    },
    serviceName: input.serviceName,
    areaServed: { "@type": "City", name: "Mangaluru" },
    content: {
      badgeText: input.badgeText,
      titleLine1: input.titleLine1,
      titleLine2: input.titleLine2,
      compactTitle: true,
      intro: input.intro,
      introLinks: true,
      cards: input.cards,
      whyEyebrow: "Why work with us",
      whyTitleLead: input.whyTitleLead,
      whyTitleAccent: input.whyTitleAccent,
      whyBody: input.whyBody,
      whyPoints: input.whyPoints,
      offerEyebrow: "What we offer",
      offerEyebrowTag: "div",
      offerTitleLead: input.offerTitleLead,
      offerTitleRest: input.offerTitleRest,
      offerTitleAccent: input.offerTitleAccent,
      offerTitleTag: "h2",
      offerBody: input.offerBody,
      offers: input.offers,
      faqs: input.faqs,
      breadcrumb: crumbs(input.serviceName, path),
      services: [input.hub, mangaloreHub, ...input.related, contact],
    },
  };
}

const digitalMangalore: ServiceLink = {
  title: "Digital Marketing Agency in Mangalore",
  href: "/services/web-development/digital-marketing-agency-mangalore",
};
const digitalMangaluru: ServiceLink = {
  title: "Digital Marketing Agency in Mangaluru",
  href: "/services/web-development/digital-marketing-agency-mangaluru",
};
const seoCompanyMangalore: ServiceLink = {
  title: "SEO Services Company in Mangalore",
  href: "/services/web-development/seo-services-company-mangalore",
};
const seoCompanyMangaluru: ServiceLink = {
  title: "SEO Services Company in Mangaluru",
  href: "/services/web-development/seo-services-company-mangaluru",
};
const localSeoMangalore: ServiceLink = {
  title: "Local SEO Services in Mangalore",
  href: "/services/web-development/local-seo-services-mangalore",
};
const localSeoMangaluru: ServiceLink = {
  title: "Local SEO Services in Mangaluru",
  href: "/services/web-development/local-seo-services-mangaluru",
};
const googleAdsMangalore: ServiceLink = {
  title: "Google Ads Agency in Mangalore",
  href: "/services/web-development/google-ads-agency-mangalore",
};
const googleAdsMangaluru: ServiceLink = {
  title: "Google Ads Agency in Mangaluru",
  href: "/services/web-development/google-ads-agency-mangaluru",
};
const metaAdsMangalore: ServiceLink = {
  title: "Meta Ads Agency in Mangalore",
  href: "/services/web-development/meta-ads-agency-mangalore",
};
const metaAdsMangaluru: ServiceLink = {
  title: "Meta Ads Agency in Mangaluru",
  href: "/services/web-development/meta-ads-agency-mangaluru",
};
const socialAgencyMangalore: ServiceLink = {
  title: "Social Media Marketing Agency in Mangalore",
  href: "/services/web-development/social-media-marketing-agency-mangalore",
};
const socialAgencyMangaluru: ServiceLink = {
  title: "Social Media Marketing Agency in Mangaluru",
  href: "/services/web-development/social-media-marketing-agency-mangaluru",
};
const socialCreativeMangalore: ServiceLink = {
  title: "Social Media Creative Design in Mangalore",
  href: "/services/web-development/social-media-creative-design-mangalore",
};
const socialCreativeMangaluru: ServiceLink = {
  title: "Social Media Creative Design in Mangaluru",
  href: "/services/web-development/social-media-creative-design-mangaluru",
};
const brandingMangalore: ServiceLink = {
  title: "Branding Agency in Mangalore",
  href: "/services/web-development/branding-agency-mangalore",
};
const brandingMangaluru: ServiceLink = {
  title: "Branding Agency in Mangaluru",
  href: "/services/web-development/branding-agency-mangaluru",
};
const logoMangalore: ServiceLink = {
  title: "Logo Design Company in Mangalore",
  href: "/services/web-development/logo-design-company-mangalore",
};
const logoMangaluru: ServiceLink = {
  title: "Logo Design Company in Mangaluru",
  href: "/services/web-development/logo-design-company-mangaluru",
};
const packagingMangalore: ServiceLink = {
  title: "Packaging Design Company in Mangalore",
  href: "/services/web-development/packaging-design-company-mangalore",
};
const packagingMangaluru: ServiceLink = {
  title: "Packaging Design Company in Mangaluru",
  href: "/services/web-development/packaging-design-company-mangaluru",
};
const graphicMangalore: ServiceLink = {
  title: "Graphic Design Company in Mangalore",
  href: "/services/web-development/graphic-design-company-mangalore",
};
const graphicMangaluru: ServiceLink = {
  title: "Graphic Design Company in Mangaluru",
  href: "/services/web-development/graphic-design-company-mangaluru",
};
const videoEditMangalore: ServiceLink = {
  title: "Video Editing Company in Mangalore",
  href: "/services/web-development/video-editing-company-mangalore",
};
const videoEditMangaluru: ServiceLink = {
  title: "Video Editing Company in Mangaluru",
  href: "/services/web-development/video-editing-company-mangaluru",
};
const corporateMangalore: ServiceLink = {
  title: "Corporate Website Design in Mangalore",
  href: "/services/web-development/corporate-website-design-mangalore",
};
const corporateMangaluru: ServiceLink = {
  title: "Corporate Website Design in Mangaluru",
  href: "/services/web-development/corporate-website-design-mangaluru",
};
const businessSiteMangalore: ServiceLink = {
  title: "Business Website Development in Mangalore",
  href: "/services/web-development/business-website-development-mangalore",
};
const businessSiteMangaluru: ServiceLink = {
  title: "Business Website Development in Mangaluru",
  href: "/services/web-development/business-website-development-mangaluru",
};
const portfolioMangalore: ServiceLink = {
  title: "Portfolio Website Development in Mangalore",
  href: "/services/web-development/portfolio-website-development-mangalore",
};
const portfolioMangaluru: ServiceLink = {
  title: "Portfolio Website Development in Mangaluru",
  href: "/services/web-development/portfolio-website-development-mangaluru",
};
const landingMangalore: ServiceLink = {
  title: "Landing Page Design Services in Mangalore",
  href: "/services/web-development/landing-page-design-services-mangalore",
};
const landingMangaluru: ServiceLink = {
  title: "Landing Page Design Services in Mangaluru",
  href: "/services/web-development/landing-page-design-services-mangaluru",
};
const redesignMangalore: ServiceLink = {
  title: "Website Redesign Services in Mangalore",
  href: "/services/web-development/website-redesign-services-mangalore",
};
const redesignMangaluru: ServiceLink = {
  title: "Website Redesign Services in Mangaluru",
  href: "/services/web-development/website-redesign-services-mangaluru",
};
const maintenanceMangalore: ServiceLink = {
  title: "Website Maintenance Services in Mangalore",
  href: "/services/web-development/website-maintenance-services-mangalore",
};
const maintenanceMangaluru: ServiceLink = {
  title: "Website Maintenance Services in Mangaluru",
  href: "/services/web-development/website-maintenance-services-mangaluru",
};
const erpMangalore: ServiceLink = {
  title: "ERP Software Development Company in Mangalore",
  href: "/services/web-development/erp-software-development-mangalore",
};
const erpMangaluru: ServiceLink = {
  title: "ERP Software Development Company in Mangaluru",
  href: "/services/web-development/erp-software-development-mangaluru",
};
const educationMangalore: ServiceLink = {
  title: "Education Software Development in Mangalore",
  href: "/services/web-development/education-software-development-mangalore",
};
const educationMangaluru: ServiceLink = {
  title: "Education Software Development in Mangaluru",
  href: "/services/web-development/education-software-development-mangaluru",
};
const aiMangalore: ServiceLink = {
  title: "AI Automation Company in Mangalore",
  href: "/services/web-development/ai-automation-company-mangalore",
};
const aiMangaluru: ServiceLink = {
  title: "AI Automation Company in Mangaluru",
  href: "/services/web-development/ai-automation-company-mangaluru",
};
const affordableMangalore: ServiceLink = {
  title: "Affordable Website Development in Mangalore",
  href: "/services/web-development/affordable-website-development-mangalore",
};
const affordableMangaluru: ServiceLink = {
  title: "Affordable Website Development in Mangaluru",
  href: "/services/web-development/affordable-website-development-mangaluru",
};
const smallBusinessMangalore: ServiceLink = {
  title: "Website Development for Small Businesses in Mangalore",
  href: "/services/web-development/website-development-small-business-mangalore",
};
const smallBusinessMangaluru: ServiceLink = {
  title: "Website Development for Small Businesses in Mangaluru",
  href: "/services/web-development/website-development-small-business-mangaluru",
};
const crmMangalore: ServiceLink = {
  title: "Custom CRM Development in Mangalore",
  href: "/services/web-development/custom-crm-development-mangalore",
};
const crmMangaluru: ServiceLink = {
  title: "Custom CRM Development in Mangaluru",
  href: "/services/web-development/custom-crm-development-mangaluru",
};

export const moreSeoServicePages: WebDevelopmentLocation[] = [
  page({
    slug: "digital-marketing-agency-mangalore",
    serviceName: "Digital Marketing Agency in Mangalore",
    title: "Digital Marketing Agency in Mangalore | Dark Media",
    description:
      "Digital marketing agency in Mangalore. Dark Media Tech plans search, ads, and social from our Mangaluru studio, with the website included when it is part of the brief.",
    keywords: [
      "digital marketing agency in Mangalore",
      "digital marketing company in Mangalore",
      "online marketing agency Mangalore",
      "digital marketing services Mangalore",
      "internet marketing Mangalore",
      "Mangalore digital marketing agency",
    ],
    badgeText: "Mangalore",
    titleLine1: "Digital Marketing Agency",
    titleLine2: "in Mangalore",
    intro:
      "A digital marketing agency in Mangalore should be able to say which channel is doing the work. Search, ads, and social are different jobs. Dark Media Tech is in Mangalore, at Kotichennaya Circle. We plan the channel against the offer, and we build or fix the page people land on. A campaign that sends visitors to a slow site is not a finished brief.",
    cards: [
      {
        title: "Search for people already looking",
        desc: "Clinics, colleges, hotels, and local firms in Mangalore are often found by someone typing a service and the city. That work is SEO, scoped on its own.",
      },
      {
        title: "Ads when the offer is ready",
        desc: "Google Ads and Meta ads make sense after the page, the price or the enquiry path, and the budget are clear. Ad spend stays in your account.",
      },
      {
        title: "Social that matches the business",
        desc: "Posts and creatives are useful when they sound like the company, not like a template calendar. We scope that separately from the website.",
      },
    ],
    whyTitleLead: "Digital marketing",
    whyTitleAccent: "agency in Mangalore",
    whyBody:
      "Hiring a digital marketing agency in Mangalore is easier when one studio can see the site and the campaign. We do not sell a bundle that hides a social retainer inside a website quote. You get a written scope: what we will run, what you will approve, and what success looks like for that month. Reviews can happen at the studio in Nandi Gudda.",
    whyPoints: [
      "Search, ads, and social quoted as separate pieces of work",
      "Landing pages built when the campaign needs them",
      "Ad accounts that belong to your business",
      "A Mangalore studio you can visit to review the work",
    ],
    offerTitleLead: "Marketing",
    offerTitleRest: "from",
    offerTitleAccent: "Mangalore",
    offerBody:
      "Digital marketing services in Mangalore from this studio stay close to a channel we can explain.",
    offers: [
      { title: "Search", desc: "Technical fixes, local pages, and content aimed at queries your customers already type." },
      { title: "Google Ads", desc: "Search campaigns pointed at a page that can take the enquiry." },
      { title: "Meta ads", desc: "Paid social for an offer with a clear next step, not a boost with no destination." },
      { title: "Social content", desc: "A planned set of posts and creatives, approved before they go out." },
      { title: "The page underneath", desc: "If the website cannot hold the campaign, we say so and scope the fix." },
    ],
    faqs: [
      {
        question: "What does a digital marketing agency in Mangalore include?",
        answer:
          "Whatever the quote names: search, ads, social, or the page those campaigns need. Dark Media Tech does not imply every channel is included because you hired the studio.",
      },
      {
        question: "Do you guarantee the first position on Google?",
        answer:
          "No. Nobody honest can. We improve the pages, the local listing, and the campaigns, then report what changed.",
      },
      {
        question: "Who owns the ad accounts?",
        answer: "Your business. We work inside accounts you control.",
      },
      {
        question: "Can we meet in Mangalore?",
        answer: "Yes. Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
      {
        question: "Is Mangaluru a different agency?",
        answer: "No. Mangalore and Mangaluru are the same city and the same studio.",
      },
    ],
    hub: seoHub,
    related: [digitalMangaluru, seoCompanyMangalore],
  }),
  page({
    slug: "digital-marketing-agency-mangaluru",
    serviceName: "Digital Marketing Agency in Mangaluru",
    title: "Digital Marketing Agency in Mangaluru | Dark Media",
    description:
      "Digital marketing agency in Mangaluru. We run search, ads, and social for local firms from our studio at Kotichennaya Circle, Nandi Gudda.",
    keywords: [
      "digital marketing agency in Mangaluru",
      "digital marketing company in Mangaluru",
      "online marketing Mangaluru",
      "digital marketing services in Mangaluru",
      "Mangaluru marketing agency",
      "internet marketing company Mangaluru",
    ],
    badgeText: "Mangaluru",
    titleLine1: "Digital Marketing Agency",
    titleLine2: "in Mangaluru",
    intro:
      "Firms in Mangaluru often ask one agency for posts, ads, and the first page of Google. A digital marketing agency in Mangaluru should split that ask. Dark Media Tech works from Nandi Gudda. We look at who you want to reach, then pick the channel. A college intake, a clinic, and a store shipping from the coast do not need the same mix.",
    cards: [
      {
        title: "One offer at a time",
        desc: "An admission window, a festive menu, or a new treatment is a campaign. We do not spray budget across every service on day one.",
      },
      {
        title: "English copy for a local buyer",
        desc: "Most campaigns we run are in English, written so a Mangaluru customer recognises the place, the hours, and the next step.",
      },
      {
        title: "Reporting you can read",
        desc: "Enquiries, spend, and the pages that received the visit. Not a deck of charts with no decision attached.",
      },
    ],
    whyTitleLead: "Marketing",
    whyTitleAccent: "from Mangaluru",
    whyBody:
      "A digital marketing company in Mangaluru is useful when the people running the ads can also see the website. That is this studio. We will tell you if social is the wrong spend and search is the right one. The office is at Kotichennaya Circle. There is no second branch behind the word agency.",
    whyPoints: [
      "Channel chosen after the offer, not before",
      "Website and campaign planned in the same conversation",
      "Approvals with the person who knows the business",
      "No promised ranking and no rented ad account",
    ],
    offerTitleLead: "What we",
    offerTitleRest: "run in",
    offerTitleAccent: "Mangaluru",
    offerBody: "Digital marketing services in Mangaluru are bought as the pieces below, not as a vague monthly package.",
    offers: [
      { title: "Local and technical search", desc: "The listing, the pages, and the fixes that stop a good business staying invisible." },
      { title: "Paid search", desc: "Google Ads for queries that already name the service." },
      { title: "Paid social", desc: "Meta campaigns with a destination and a budget you set." },
      { title: "Content for the channel", desc: "Pages, posts, or ads written for that offer, not recycled from last year." },
      { title: "A stop rule", desc: "If a channel is not producing enquiries, we say so instead of renewing it quietly." },
    ],
    faqs: [
      {
        question: "Are you a digital marketing agency in Mangaluru with a local office?",
        answer: "Yes. Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002. It is the only office.",
      },
      {
        question: "Can you market a business that does not have a proper website yet?",
        answer: "We can start with the page. Sending paid traffic to a placeholder wastes the budget. We will scope the site first when that is the gap.",
      },
      {
        question: "Do you cover Kannada campaigns?",
        answer: "When the brief needs Kannada, we scope the copy. Most of the work we ship is in English unless you ask for both.",
      },
      {
        question: "How do you price a month of marketing?",
        answer: "By the channel and the work inside it. Ad spend is extra and is paid to the platform from your account.",
      },
      {
        question: "Do you also build the website?",
        answer: "Yes. Web design and development sit in the same studio, quoted separately when they are part of the plan.",
      },
    ],
    hub: seoHub,
    related: [digitalMangalore, localSeoMangaluru],
  }),
  page({
    slug: "seo-services-company-mangalore",
    serviceName: "SEO Services Company in Mangalore",
    title: "SEO Services Company in Mangalore | Dark Media",
    description:
      "SEO services company in Mangalore. Dark Media Tech improves pages, local listings, and site structure so Mangalore customers can find the business.",
    keywords: [
      "SEO services company in Mangalore",
      "SEO company in Mangalore",
      "SEO services in Mangalore",
      "search engine optimization Mangalore",
      "SEO agency Mangalore",
      "Mangalore SEO experts",
    ],
    badgeText: "Mangalore",
    titleLine1: "SEO Services Company",
    titleLine2: "in Mangalore",
    intro:
      "An SEO services company in Mangalore should start with the pages you already have. Dark Media Tech looks at what ranks, what is slow, and what a customer cannot find. We are in the city, so a local business can sit with us and point at the service that should be on page one of its own site before anyone talks about backlinks.",
    cards: [
      {
        title: "Pages that match real searches",
        desc: "People type the service and Mangalore. If that page does not exist, or it is a paragraph buried in the homepage, search has nothing useful to show.",
      },
      {
        title: "A site search engines can read",
        desc: "Titles, headings, addresses, and speed. Technical SEO is part of the build when we made the site, and a fix list when we did not.",
      },
      {
        title: "Local proof",
        desc: "The address, the phone number, and the Google listing should agree. A Mangalore company with three different names online is harder to trust.",
      },
    ],
    whyTitleLead: "SEO services",
    whyTitleAccent: "in Mangalore",
    whyBody:
      "SEO companies in Mangalore sometimes sell a monthly report and a pile of thin pages. We would rather fix the structure and write the pages that answer a real query. An SEO services company in Mangalore, for us, means a scope: which queries, which pages, and what we will not promise. The studio is at Nandi Gudda.",
    whyPoints: [
      "Query list agreed before new pages are written",
      "Technical issues listed in plain language",
      "Local listing checked against the studio and your own address",
      "No guarantee of a number-one ranking",
    ],
    offerTitleLead: "Search work",
    offerTitleRest: "for",
    offerTitleAccent: "Mangalore",
    offerBody: "SEO services in Mangalore from Dark Media Tech are the jobs below, not a secret formula.",
    offers: [
      { title: "Page and title fixes", desc: "The words in the title, the heading, and the first screen matched to the search." },
      { title: "New service pages", desc: "A page for an offer people already look for, written so a human can use it too." },
      { title: "Technical cleanup", desc: "Speed, mobile layout, indexable addresses, and broken paths." },
      { title: "Local signals", desc: "Name, address, phone, and the business profile kept consistent." },
      { title: "A short report", desc: "What changed, which queries moved, and what we recommend next. Not a 40-page export." },
    ],
    faqs: [
      {
        question: "How does an SEO services company in Mangalore price the work?",
        answer:
          "By the pages and the technical list. A one-time fix and a monthly improvement plan are different. You see which one you are buying.",
      },
      {
        question: "How long before anything moves?",
        answer: "Technical fixes can help quickly. New pages take longer to be trusted. We do not promise a date for the first position.",
      },
      {
        question: "Do you write the content?",
        answer: "Yes, when the scope includes it. You still approve anything that describes your business.",
      },
      {
        question: "Can you do SEO on a site you did not build?",
        answer: "Yes. We audit it first. If the site cannot be edited, we will say a rebuild is the real job.",
      },
      {
        question: "Where are you based?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: seoHub,
    related: [seoCompanyMangaluru, localSeoMangalore],
  }),
  page({
    slug: "seo-services-company-mangaluru",
    serviceName: "SEO Services Company in Mangaluru",
    title: "SEO Services Company in Mangaluru | Dark Media",
    description:
      "SEO services company in Mangaluru. We fix site structure, write useful service pages, and align your local listing from our Nandi Gudda studio.",
    keywords: [
      "SEO services company in Mangaluru",
      "SEO company in Mangaluru",
      "SEO services in Mangaluru",
      "search engine optimization Mangaluru",
      "SEO agency in Mangaluru",
      "Mangaluru SEO company",
    ],
    badgeText: "Mangaluru",
    titleLine1: "SEO Services Company",
    titleLine2: "in Mangaluru",
    intro:
      "Searchers use both Mangalore and Mangaluru. An SEO services company in Mangaluru has to treat them as one city, not two markets. Dark Media Tech writes pages for the official name and the name people still type. The studio is in Mangaluru. We start from your current site and the queries that should reach it.",
    cards: [
      {
        title: "Both spellings, one business",
        desc: "A page stuffed with both names on every line reads badly. We use the spelling that fits the page and mention the other where it helps a reader.",
      },
      {
        title: "Services, not slogans",
        desc: "Colleges, clinics, and exporters in Mangaluru rank when the page explains the offer. A slogan in the title does not.",
      },
      {
        title: "The listing next to the site",
        desc: "If Google shows a map, the profile has to match the website. We check that before we add more pages.",
      },
    ],
    whyTitleLead: "SEO",
    whyTitleAccent: "company in Mangaluru",
    whyBody:
      "SEO agencies in Mangaluru are easy to hire on a promise. We hire ourselves out on a page list. An SEO services company in Mangaluru should be able to open your site and show the heading that is fighting the search. That meeting can be at Kotichennaya Circle.",
    whyPoints: [
      "Mangalore and Mangaluru treated as one city",
      "Existing pages improved before a pile of new ones",
      "Copy approved by someone who knows the service",
      "Rankings reported without a guaranteed position",
    ],
    offerTitleLead: "SEO for",
    offerTitleRest: "teams in",
    offerTitleAccent: "Mangaluru",
    offerBody: "These are the SEO services in Mangaluru we will put in a quote.",
    offers: [
      { title: "Search audit", desc: "What Google can see, what customers searched, and what the site fails to answer." },
      { title: "Service pages", desc: "One clear page per offer that deserves its own search." },
      { title: "On-page edits", desc: "Titles, headings, and internal links on the pages you already have." },
      { title: "Local profile", desc: "The Google Business Profile checked against your real name, address, and phone." },
      { title: "Follow-up", desc: "A second pass after the first changes have had time to be crawled." },
    ],
    faqs: [
      {
        question: "Do you only work with Mangaluru businesses?",
        answer: "The studio is here. This page is for local search. We also help clients elsewhere, remotely, from the same office.",
      },
      {
        question: "Will you build doorway pages for every area?",
        answer: "No. We write a page when the business actually serves that search with different information. Empty location copies are not a service we sell.",
      },
      {
        question: "What do you need from us?",
        answer: "Access to the site, the list of services you want found, and someone to approve the words.",
      },
      {
        question: "Can SEO and a redesign happen together?",
        answer: "Yes. A redesign that throws away working addresses can hurt search. We plan the old and new paths together.",
      },
      {
        question: "Where do we meet?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: seoHub,
    related: [seoCompanyMangalore, googleAdsMangaluru],
  }),
  page({
    slug: "local-seo-services-mangalore",
    serviceName: "Local SEO Services in Mangalore",
    title: "Local SEO Services in Mangalore | Dark Media",
    description:
      "Local SEO services in Mangalore. We align your website, Google listing, and service pages so nearby customers can find and contact you.",
    keywords: [
      "local SEO services in Mangalore",
      "local SEO company Mangalore",
      "Google Business Profile Mangalore",
      "local search optimization Mangalore",
      "Mangalore local SEO",
      "near me SEO Mangalore",
    ],
    badgeText: "Mangalore",
    titleLine1: "Local SEO Services",
    titleLine2: "in Mangalore",
    intro:
      "Local SEO services in Mangalore are for a business that wants to be found by someone already in the city. The map listing, the website, and the phone number have to tell the same story. Dark Media Tech checks that from our own Mangalore studio. We do not promise the map pack. We fix the mismatches that keep a real business off it.",
    cards: [
      {
        title: "The listing people tap",
        desc: "Hours, categories, photos, and the link to the site. A Mangalore shop with yesterday's hours on the profile loses the call.",
      },
      {
        title: "A page for the city",
        desc: "The website should say where you are and what you do here. A homepage with no address is a weak local page.",
      },
      {
        title: "Reviews you can answer",
        desc: "We do not buy reviews. We help you ask real customers and reply when a review needs a response.",
      },
    ],
    whyTitleLead: "Local SEO",
    whyTitleAccent: "in Mangalore",
    whyBody:
      "Local SEO companies in Mangalore sometimes create a page for every neighbourhood and change nothing else. That is not the work. Local SEO services in Mangalore, done properly, start with one accurate listing and a site that confirms it. Our address is Kotichennaya Circle, Nandi Gudda. Yours should be just as specific.",
    whyPoints: [
      "Name, address, and phone checked in one pass",
      "Google Business Profile categories reviewed with you",
      "City and service pages only where the content is real",
      "No purchased reviews and no fake map rank",
    ],
    offerTitleLead: "Local search",
    offerTitleRest: "for",
    offerTitleAccent: "Mangalore",
    offerBody: "This is what a local SEO engagement from the studio usually contains.",
    offers: [
      { title: "Profile cleanup", desc: "Categories, description, hours, and the website link on the Google listing." },
      { title: "On-site local details", desc: "Address, service area, and a contact path that matches the listing." },
      { title: "Service pages", desc: "Pages for the offers people combine with Mangalore in a search." },
      { title: "Citation consistency", desc: "The same name and phone on the directories that already mention you." },
      { title: "A review habit", desc: "A simple way for happy customers to be asked, without incentives that break the rules." },
    ],
    faqs: [
      {
        question: "What are local SEO services in Mangalore?",
        answer:
          "Work that helps a Mangalore business show up when someone nearby searches. Dark Media Tech covers the listing, the website details, and the pages. We do not sell a map-pack guarantee.",
      },
      {
        question: "Do you manage the Google listing for us?",
        answer: "We can, if you grant access. The profile should stay in your Google account.",
      },
      {
        question: "We serve several areas. Do we need a page for each?",
        answer: "Only when the service or the proof is different. Copying one paragraph across ten area names is not a plan we recommend.",
      },
      {
        question: "How fast does local SEO work?",
        answer: "Listing fixes can show up sooner than new pages. We will not name a week for the top map result.",
      },
      {
        question: "Can we review this in person?",
        answer: "Yes. The studio is at Kotichennaya Circle, Nandi Gudda, Mangaluru 575002.",
      },
    ],
    hub: seoHub,
    related: [localSeoMangaluru, seoCompanyMangalore],
  }),
  page({
    slug: "local-seo-services-mangaluru",
    serviceName: "Local SEO Services in Mangaluru",
    title: "Local SEO Services in Mangaluru | Dark Media",
    description:
      "Local SEO services in Mangaluru. Dark Media Tech keeps your listing, address, and service pages consistent so the city can find you.",
    keywords: [
      "local SEO services in Mangaluru",
      "local SEO Mangaluru",
      "Google My Business Mangaluru",
      "local search Mangaluru",
      "Mangaluru map listing SEO",
      "near me SEO Mangaluru",
    ],
    badgeText: "Mangaluru",
    titleLine1: "Local SEO Services",
    titleLine2: "in Mangaluru",
    intro:
      "Local SEO services in Mangaluru matter when a patient, a parent, or a buyer is choosing between two places in the same city. Dark Media Tech is one of those places: Nandi Gudda, Mangaluru. We use that same standard on your listing. The name on the board, the name on the website, and the name on Google should be the name you want called.",
    cards: [
      {
        title: "Neighbourhoods without fake pages",
        desc: "Kadri, Bejai, Kankanady, and Surathkal are real. A page about them only belongs on your site if you actually serve that place in a way worth explaining.",
      },
      {
        title: "Mangaluru and Mangalore together",
        desc: "People search both. The listing can use the official city name while the site answers the spelling they typed.",
      },
      {
        title: "Calls, not just visits",
        desc: "Local search is successful when the phone rings or the form arrives. We track that, not only the impression count.",
      },
    ],
    whyTitleLead: "Local SEO",
    whyTitleAccent: "in Mangaluru",
    whyBody:
      "A local SEO company in Mangaluru should be willing to delete a wrong category. We are. Local SEO services in Mangaluru from this studio are a cleanup and a small set of pages, then a check after Google has recrawled. You can sit in the studio and compare the listing with the site on one screen.",
    whyPoints: [
      "Official city name and the common English name both handled",
      "Categories chosen for what you sell, not for reach",
      "Photos and hours that match this month",
      "Enquiries treated as the result that matters",
    ],
    offerTitleLead: "Listing and",
    offerTitleRest: "pages in",
    offerTitleAccent: "Mangaluru",
    offerBody: "Local search work here is practical. These are the pieces.",
    offers: [
      { title: "Profile accuracy", desc: "Name, category, hours, and the pin, checked against the real premises." },
      { title: "Website confirmation", desc: "The same details in the footer, the contact page, and the relevant service page." },
      { title: "Query-led pages", desc: "A page when Mangaluru plus the service is a search you can honestly answer." },
      { title: "Photo and post basics", desc: "Current images and the occasional update, not a daily post quota dressed up as SEO." },
      { title: "A recrawl check", desc: "We look again after the edits, and tell you what Google still has wrong." },
    ],
    faqs: [
      {
        question: "Who should buy local SEO services in Mangaluru?",
        answer:
          "A business with a real address or a clear service area in the city: clinics, colleges, shops, hotels, and professional firms. Dark Media Tech is based here and does this work from Mangaluru.",
      },
      {
        question: "Can you create the Google listing?",
        answer: "If you do not have one, we can help you open it in an account you own. We will not create a listing you cannot access later.",
      },
      {
        question: "What if our name recently changed?",
        answer: "We update the site and the profile together, and we do not leave the old name on half the pages.",
      },
      {
        question: "Do you charge for each neighbourhood page?",
        answer: "We charge for pages that have something new to say. We will refuse a pack of empty area pages.",
      },
      {
        question: "Where is the studio?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: seoHub,
    related: [localSeoMangalore, digitalMangaluru],
  }),
  page({
    slug: "google-ads-agency-mangalore",
    serviceName: "Google Ads Agency in Mangalore",
    title: "Google Ads Agency in Mangalore | Dark Media",
    description:
      "Google Ads agency in Mangalore. We build Search campaigns in your own account and point them at a page that can take the enquiry.",
    keywords: [
      "Google Ads agency in Mangalore",
      "Google Ads company Mangalore",
      "PPC agency Mangalore",
      "Google Ads management Mangalore",
      "paid search Mangalore",
      "Google advertising agency Mangalore",
    ],
    badgeText: "Mangalore",
    titleLine1: "Google Ads Agency",
    titleLine2: "in Mangalore",
    intro:
      "A Google Ads agency in Mangalore should refuse a campaign that has nowhere to land. Dark Media Tech sets up Search ads for Mangalore businesses when the offer, the budget, and the enquiry page are ready. The ad account stays yours. We manage the campaigns from our studio at Kotichennaya Circle and tell you which searches are worth paying for.",
    cards: [
      {
        title: "Search before display",
        desc: "Someone typing a service in Mangalore is closer to a call than someone seeing a banner. We start there unless the brief is clearly something else.",
      },
      {
        title: "A page that can convert",
        desc: "The ad and the page must say the same thing. If the site is not ready, we scope a landing page before spend starts.",
      },
      {
        title: "A budget you can see",
        desc: "Media spend is paid to Google from your account. Our fee is for the setup and the management, written separately.",
      },
    ],
    whyTitleLead: "Google Ads",
    whyTitleAccent: "agency in Mangalore",
    whyBody:
      "PPC agencies in Mangalore sometimes run broad keywords and call the clicks a result. A click is not an enquiry. We are a Google Ads agency in Mangalore that reads the search terms with you. Useless queries get removed. The studio is in Nandi Gudda, so that review can be in the room.",
    whyPoints: [
      "Campaigns built in an account your company owns",
      "Search terms reviewed, not left on broad match forever",
      "Landing page checked before the budget is spent",
      "Fee and ad spend kept as two numbers",
    ],
    offerTitleLead: "Paid search",
    offerTitleRest: "in",
    offerTitleAccent: "Mangalore",
    offerBody: "Google Ads services in Mangalore from this studio are usually one of these.",
    offers: [
      { title: "Account setup", desc: "Conversion actions, the campaigns, and the negatives we already know you do not want." },
      { title: "Search campaigns", desc: "Ads for services people type, pointed at the right page." },
      { title: "Landing pages", desc: "A single page for the ad when the main site would waste the click." },
      { title: "Weekly cleanup", desc: "Search terms, budgets, and ads that are spending without enquiries." },
      { title: "A plain report", desc: "Spend, clicks, and the enquiries those clicks produced." },
    ],
    faqs: [
      {
        question: "What does a Google Ads agency in Mangalore actually manage?",
        answer:
          "The campaigns in your Google Ads account: keywords, ads, budgets, and the page they use. Dark Media Tech does this from Mangalore. We do not take ownership of the account.",
      },
      {
        question: "How much should we spend on ads?",
        answer: "Enough to learn which searches convert, not a number we invent to look busy. We recommend a test budget after seeing the offer.",
      },
      {
        question: "Do you guarantee leads?",
        answer: "No. We can control the queries and the page. We cannot control whether that person is ready to buy.",
      },
      {
        question: "Can you advertise outside Mangalore?",
        answer: "Yes, if that is where the customers are. The location settings are part of the scope.",
      },
      {
        question: "Where do we meet?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: seoHub,
    related: [googleAdsMangaluru, metaAdsMangalore],
  }),
  page({
    slug: "google-ads-agency-mangaluru",
    serviceName: "Google Ads Agency in Mangaluru",
    title: "Google Ads Agency in Mangaluru | Dark Media",
    description:
      "Google Ads agency in Mangaluru. Search campaigns for local offers, managed from Nandi Gudda, with spend kept in your Google account.",
    keywords: [
      "Google Ads agency in Mangaluru",
      "Google Ads company Mangaluru",
      "PPC services Mangaluru",
      "Google Ads expert Mangaluru",
      "paid ads Mangaluru",
      "Mangaluru Google Ads agency",
    ],
    badgeText: "Mangaluru",
    titleLine1: "Google Ads Agency",
    titleLine2: "in Mangaluru",
    intro:
      "Google Ads for a Mangaluru business usually means a person searching a treatment, a course, a room, or a product and the city. A Google Ads agency in Mangaluru should bid on that intent, not on the whole internet. Dark Media Tech sets this up from our studio in the city. Your account, your card with Google, our management on top.",
    cards: [
      {
        title: "City targeting with a reason",
        desc: "Mangaluru, the wider district, or a farther market. We pick the geography from where you can actually serve the customer.",
      },
      {
        title: "Ads that sound like the front desk",
        desc: "If the ad promises a same-day visit and the clinic cannot offer it, the campaign is wrong. We write ads you can fulfil.",
      },
      {
        title: "A stop when the page fails",
        desc: "If the form breaks, we pause. Spending through a broken enquiry path is not management.",
      },
    ],
    whyTitleLead: "Google Ads",
    whyTitleAccent: "in Mangaluru",
    whyBody:
      "Paid search in Mangaluru fails when five services share one messy homepage. We split campaigns by offer. A Google Ads agency in Mangaluru that also builds pages can do that without waiting on another vendor. That is Dark Media Tech, at Kotichennaya Circle.",
    whyPoints: [
      "One campaign per offer when the offers differ",
      "Location settings matched to where you work",
      "Ads approved by you before they run",
      "Pause rules when the landing page or the offer changes",
    ],
    offerTitleLead: "Campaign",
    offerTitleRest: "work in",
    offerTitleAccent: "Mangaluru",
    offerBody: "This is the Google Ads work we quote for Mangaluru teams.",
    offers: [
      { title: "Offer map", desc: "Which service is worth a campaign, and which should stay on the organic site." },
      { title: "Account build", desc: "Campaigns, ad groups, and conversion tracking in your account." },
      { title: "Copy and extensions", desc: "Ads, sitelinks, and calls that match the page." },
      { title: "Search-term care", desc: "Removing queries that will never become a customer." },
      { title: "Landing help", desc: "A dedicated page when the current site would confuse the click." },
    ],
    faqs: [
      {
        question: "Is Dark Media Tech a Google Ads agency in Mangaluru?",
        answer: "Yes. We manage Search campaigns from our Mangaluru studio. The account remains yours.",
      },
      {
        question: "Do you run YouTube or display as well?",
        answer: "Only when the brief needs them. Search is the default because the intent is clearer.",
      },
      {
        question: "What do you need to start?",
        answer: "The offer, the area you serve, a budget range, and access to the site and the ads account.",
      },
      {
        question: "Can the same team fix the website?",
        answer: "Yes. If the page is the problem, we scope that with the campaign instead of blaming the clicks.",
      },
      {
        question: "Where is the office?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: seoHub,
    related: [googleAdsMangalore, seoCompanyMangaluru],
  }),
  page({
    slug: "meta-ads-agency-mangalore",
    serviceName: "Meta Ads Agency in Mangalore",
    title: "Meta Ads Agency in Mangalore | Dark Media",
    description:
      "Meta Ads agency in Mangalore. Facebook and Instagram campaigns for a clear offer, with the ad account kept in your business name.",
    keywords: [
      "Meta Ads agency in Mangalore",
      "Facebook Ads agency Mangalore",
      "Instagram ads Mangalore",
      "Meta advertising company Mangalore",
      "social media ads Mangalore",
      "Facebook marketing Mangalore",
    ],
    badgeText: "Mangalore",
    titleLine1: "Meta Ads Agency",
    titleLine2: "in Mangalore",
    intro:
      "A Meta Ads agency in Mangalore is hired when the customer is not already searching, but might still want the offer if they see it. Dark Media Tech runs Facebook and Instagram ads from Mangalore for offers that can be explained in one screen: a course date, a room, a product, an appointment. The ad account belongs to you. Creative and the destination page are part of the same scope when you want them to be.",
    cards: [
      {
        title: "An offer, not a brand film",
        desc: "Boosting a logo does very little. We start with what the person should do after they stop scrolling.",
      },
      {
        title: "Creative that can be made",
        desc: "Photos you have, a short cut we can edit, or a simple designed frame. We do not plan a shoot you have not approved.",
      },
      {
        title: "Mangalore as a real location",
        desc: "If the customers are in the city, the campaign says so. A nationwide audience for a local clinic is usually a waste.",
      },
    ],
    whyTitleLead: "Meta Ads",
    whyTitleAccent: "agency in Mangalore",
    whyBody:
      "Facebook ads agencies in Mangalore often report reach. Reach without a next step is a number. We are a Meta Ads agency in Mangalore that asks for the enquiry, the booking, or the purchase before the campaign goes live. You can review the creative at Kotichennaya Circle.",
    whyPoints: [
      "Objective agreed before the audience is built",
      "Creative and destination checked together",
      "Spend in your Meta ad account",
      "Local audiences used when the business is local",
    ],
    offerTitleLead: "Meta campaigns",
    offerTitleRest: "in",
    offerTitleAccent: "Mangalore",
    offerBody: "Meta advertising in Mangalore from this studio covers these jobs.",
    offers: [
      { title: "Campaign setup", desc: "Objective, audience, placements, and the pixel or dataset on a page you control." },
      { title: "Ad creative", desc: "Frames and short copy for the offer, sized for the placement." },
      { title: "Landing check", desc: "The click should arrive on a page that repeats the offer, not on a generic homepage." },
      { title: "Spend care", desc: "Turning off the ad that spends and does not enquire." },
      { title: "A readable result", desc: "What you spent and what came back, in a note you can forward." },
    ],
    faqs: [
      {
        question: "Do you manage Facebook and Instagram as a Meta Ads agency in Mangalore?",
        answer: "Yes. Both run through Meta. Dark Media Tech sets them up from our Mangalore studio, in an ad account your business owns.",
      },
      {
        question: "Do you design the ads?",
        answer: "Yes, when that is in the quote. A campaign with no creative is not ready to run.",
      },
      {
        question: "Can you use photos we already have?",
        answer: "Yes. Good photos of the real place usually beat a stock image of another city.",
      },
      {
        question: "Will you guarantee sales?",
        answer: "No. We can make the offer clear and stop waste. The market still decides.",
      },
      {
        question: "Where are you?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: socialHub,
    related: [metaAdsMangaluru, socialAgencyMangalore],
  }),
  page({
    slug: "meta-ads-agency-mangaluru",
    serviceName: "Meta Ads Agency in Mangaluru",
    title: "Meta Ads Agency in Mangaluru | Dark Media",
    description:
      "Meta Ads agency in Mangaluru. We plan Facebook and Instagram ads around one local offer and a page that can finish the enquiry.",
    keywords: [
      "Meta Ads agency in Mangaluru",
      "Facebook Ads Mangaluru",
      "Instagram advertising Mangaluru",
      "Meta ads company Mangaluru",
      "social ads agency Mangaluru",
      "Facebook marketing company Mangaluru",
    ],
    badgeText: "Mangaluru",
    titleLine1: "Meta Ads Agency",
    titleLine2: "in Mangaluru",
    intro:
      "Instagram and Facebook are where a lot of Mangaluru customers already spend time. A Meta Ads agency in Mangaluru should still be picky. Dark Media Tech runs paid social when there is a date, a product, or a reason to enquire this month. We work from Nandi Gudda. Organic posting is a different service. Paying to show a post is not the same as having a campaign.",
    cards: [
      {
        title: "Festivals and intakes",
        desc: "A college window or a seasonal offer has an end date. The campaign should too.",
      },
      {
        title: "Creative in the language of the brand",
        desc: "We design frames that match the business, not a trending template with your logo in the corner.",
      },
      {
        title: "Leads the office can handle",
        desc: "There is no point buying enquiries the front desk cannot call back. We size the campaign to that capacity.",
      },
    ],
    whyTitleLead: "Meta Ads",
    whyTitleAccent: "in Mangaluru",
    whyBody:
      "Social ads in Mangaluru get expensive when the audience is everyone within a hundred kilometres and the creative says nothing specific. We narrow both. A Meta Ads agency in Mangaluru that sits in the city can also tell you if the photo looks like somewhere else. Ours is at Kotichennaya Circle.",
    whyPoints: [
      "One offer and one end date when the promotion is temporary",
      "Audience limited to people you can serve",
      "Creative approved before spend",
      "Enquiries counted, not just views",
    ],
    offerTitleLead: "Paid social",
    offerTitleRest: "from",
    offerTitleAccent: "Mangaluru",
    offerBody: "These are the Meta ads services we scope for Mangaluru businesses.",
    offers: [
      { title: "Offer brief", desc: "What is being sold, to whom, and what happens after they tap." },
      { title: "Account and pixel", desc: "Setup in your business account, with the site connected." },
      { title: "Ad design", desc: "Still frames or a short edit, written for the placement." },
      { title: "Lead path", desc: "A form or a page the Mangaluru office will actually answer." },
      { title: "After the flight", desc: "What to repeat and what to retire when the budget ends." },
    ],
    faqs: [
      {
        question: "Are Facebook ads and Meta ads the same service?",
        answer: "Meta is the company behind Facebook and Instagram. A Meta Ads agency in Mangaluru, which is what we are, manages both from one ad account.",
      },
      {
        question: "Do you post organically as well?",
        answer: "That is social media marketing, scoped separately. Ads can run without a daily posting calendar.",
      },
      {
        question: "Who pays Meta?",
        answer: "You do, from the ad account. Our invoice is for the work, not for marked-up media.",
      },
      {
        question: "Can you target only Mangaluru?",
        answer: "Yes. We set the locations to the area you serve, including nearby towns when that is honest.",
      },
      {
        question: "Can we approve ads at the studio?",
        answer: "Yes. Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: socialHub,
    related: [metaAdsMangalore, socialCreativeMangaluru],
  }),
  page({
    slug: "social-media-marketing-agency-mangalore",
    serviceName: "Social Media Marketing Agency in Mangalore",
    title: "Social Media Marketing Agency in Mangalore | Dark Media",
    description:
      "Social media marketing agency in Mangalore. We plan posts, creatives, and paid social for a business that wants a consistent public presence.",
    keywords: [
      "social media marketing agency in Mangalore",
      "social media agency Mangalore",
      "social media marketing company Mangalore",
      "Instagram marketing Mangalore",
      "Facebook marketing agency Mangalore",
      "social media management Mangalore",
    ],
    badgeText: "Mangalore",
    titleLine1: "Social Media Marketing Agency",
    titleLine2: "in Mangalore",
    intro:
      "A social media marketing agency in Mangalore should know what the business is willing to say every week. Dark Media Tech plans that from our Mangalore studio: the offer, the platforms, and who approves a post before it goes out. We do not fill a calendar with quotes and stock photos. If a week has nothing new, we would rather publish less.",
    cards: [
      {
        title: "Instagram and Facebook first",
        desc: "Those are the accounts most Mangalore customers already check. Other platforms are added only when your audience is there.",
      },
      {
        title: "A voice the front desk recognises",
        desc: "Posts should sound like the clinic, the college, the hotel, or the shop. We write from a short brief you approve.",
      },
      {
        title: "Paid only when there is an offer",
        desc: "Organic posting and Meta ads are different. We will not boost every post and call it a strategy.",
      },
    ],
    whyTitleLead: "Social media",
    whyTitleAccent: "marketing in Mangalore",
    whyBody:
      "Social media agencies in Mangalore are often judged on how many posts they promise. We would rather be judged on whether the posts are usable. A social media marketing agency in Mangalore, in our case, means a monthly plan, creatives, and a named approver. Reviews can happen at Kotichennaya Circle.",
    whyPoints: [
      "Platforms chosen from where your customers are",
      "A monthly plan you can see before production",
      "Creatives designed for the brand, not a template pack",
      "Ads scoped separately from the posting plan",
    ],
    offerTitleLead: "Social",
    offerTitleRest: "work in",
    offerTitleAccent: "Mangalore",
    offerBody: "Social media marketing services in Mangalore from this studio look like this.",
    offers: [
      { title: "A content plan", desc: "What the month is about, and which posts carry that idea." },
      { title: "Design and short copy", desc: "Frames and captions ready for approval." },
      { title: "Publishing", desc: "Posts go out on the accounts you own, after you say yes." },
      { title: "Replies guidance", desc: "We can handle comments when the scope says so, or leave them with your team." },
      { title: "A monthly note", desc: "What was published and what should change next month." },
    ],
    faqs: [
      {
        question: "What does a social media marketing agency in Mangalore post?",
        answer:
          "The plan we agree: offers, proof, and useful updates. Dark Media Tech will not invent a daily quota that the business cannot support.",
      },
      {
        question: "Do you need our login?",
        answer: "We need access to publish. The accounts stay in your name. We do not take ownership of them.",
      },
      {
        question: "Can you design reels?",
        answer: "Short edits are possible when you have footage or we scope a shoot. A reel with no material is not a post we can invent.",
      },
      {
        question: "Is community management included?",
        answer: "Only if the quote includes it. Many clients prefer to reply themselves and have us supply the posts.",
      },
      {
        question: "Where is the studio?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: socialHub,
    related: [socialAgencyMangaluru, socialCreativeMangalore],
  }),
  page({
    slug: "social-media-marketing-agency-mangaluru",
    serviceName: "Social Media Marketing Agency in Mangaluru",
    title: "Social Media Marketing Agency in Mangaluru | Dark Media",
    description:
      "Social media marketing agency in Mangaluru. Planned Instagram and Facebook content from our Nandi Gudda studio, approved before it is published.",
    keywords: [
      "social media marketing agency in Mangaluru",
      "social media company Mangaluru",
      "Instagram agency Mangaluru",
      "Facebook page management Mangaluru",
      "social media services Mangaluru",
      "Mangaluru social media marketing",
    ],
    badgeText: "Mangaluru",
    titleLine1: "Social Media Marketing Agency",
    titleLine2: "in Mangaluru",
    intro:
      "Mangaluru businesses already get messages on WhatsApp. Social pages are the public version of that reputation. A social media marketing agency in Mangaluru should keep the public page as clear as the counter. Dark Media Tech plans and designs that presence from Nandi Gudda. We publish only what you have approved.",
    cards: [
      {
        title: "Proof over slogans",
        desc: "A finished project, a classroom, a dish, a room. Mangaluru customers trust what they can see.",
      },
      {
        title: "A calendar that survives a busy week",
        desc: "If your team cannot shoot every day, the plan should not depend on it. We design around the material you can supply.",
      },
      {
        title: "The same facts as the website",
        desc: "Hours, location, and offers should match. A post that contradicts the site creates work for the front desk.",
      },
    ],
    whyTitleLead: "Social marketing",
    whyTitleAccent: "in Mangaluru",
    whyBody:
      "A social media company in Mangaluru is worth keeping when the approver is not chasing the agency. We send work in batches. A social media marketing agency in Mangaluru that sits in the city can also photograph or brief a shoot nearby when that is scoped. The office is at Kotichennaya Circle.",
    whyPoints: [
      "Batches for approval, not a surprise post",
      "Facts checked against the website",
      "Volume set by what you can stand behind",
      "Paid social added only for a specific offer",
    ],
    offerTitleLead: "Monthly",
    offerTitleRest: "social in",
    offerTitleAccent: "Mangaluru",
    offerBody: "This is the social media marketing we quote locally.",
    offers: [
      { title: "Account direction", desc: "What the profile is for, and what it will stop posting." },
      { title: "Designed posts", desc: "A set of frames and captions for the month." },
      { title: "Stories and short cuts", desc: "When you have footage or a simple announcement that fits a story." },
      { title: "Profile basics", desc: "Bio, highlight covers, and the link, so the account looks finished." },
      { title: "Next month's change", desc: "What the audience responded to, and what we will drop." },
    ],
    faqs: [
      {
        question: "Do you run a social media marketing agency in Mangaluru or remotely?",
        answer: "The studio is in Mangaluru. Planning and design happen here. Publishing is on the accounts you own.",
      },
      {
        question: "Which platforms do you cover?",
        answer: "Instagram and Facebook are the usual pair. LinkedIn or another network is added when your buyers use it.",
      },
      {
        question: "Can the posts be in Kannada?",
        answer: "Yes, when you need that and we have scoped the copy. English is the default unless the brief says otherwise.",
      },
      {
        question: "What if we have no photos?",
        answer: "We will say so. A month of stock images is a weak start. A small shoot or a better use of phone photos is usually the fix.",
      },
      {
        question: "How do we start?",
        answer: "A short brief, or a visit to Kotichennaya Circle, Nandi Gudda, Mangaluru 575002.",
      },
    ],
    hub: socialHub,
    related: [socialAgencyMangalore, metaAdsMangaluru],
  }),
  page({
    slug: "social-media-creative-design-mangalore",
    serviceName: "Social Media Creative Design in Mangalore",
    title: "Social Media Creative Design in Mangalore | Dark Media",
    description:
      "Social media creative design in Mangalore. Post frames, story covers, and short ad visuals designed to match your brand, from our Mangaluru studio.",
    keywords: [
      "social media creative design in Mangalore",
      "social media post design Mangalore",
      "Instagram creative design Mangalore",
      "social media graphics Mangalore",
      "ad creative design Mangalore",
      "Mangalore social media designer",
    ],
    badgeText: "Mangalore",
    titleLine1: "Social Media Creative Design",
    titleLine2: "in Mangalore",
    intro:
      "Social media creative design in Mangalore is the set of frames people actually see: the post, the story, the ad. Dark Media Tech designs those from Mangalore so they match the brand instead of a trending template. You can hand us the words, or we can write a short line. Publishing and ad management are separate if you only need the files.",
    cards: [
      {
        title: "A system, not one-off posters",
        desc: "Type, colour, and photo treatment that can repeat next week without looking like a new company.",
      },
      {
        title: "Sizes for the placement",
        desc: "A feed post, a story, and an ad are not the same crop. We deliver the sizes the campaign uses.",
      },
      {
        title: "Room for your real photos",
        desc: "Mangalore businesses look more trustworthy in their own rooms than in a stock cafe. We design for the photos you have.",
      },
    ],
    whyTitleLead: "Creative design",
    whyTitleAccent: "in Mangalore",
    whyBody:
      "Social media designers in Mangalore are easy to brief and hard to keep consistent. We write down the rules: margins, type, and what never goes on a post. Social media creative design in Mangalore from this studio can be a month of frames or a campaign set. Reviews are at Nandi Gudda.",
    whyPoints: [
      "Templates your next post can reuse",
      "Crops for feed, story, and ads",
      "Copy length that fits the frame",
      "Files your team or our social team can publish",
    ],
    offerTitleLead: "Creatives",
    offerTitleRest: "for",
    offerTitleAccent: "Mangalore",
    offerBody: "This is the design work, not the media buying.",
    offers: [
      { title: "Feed posts", desc: "A series with one visual system and a clear line of type." },
      { title: "Stories and covers", desc: "Vertical frames and highlight covers that match the feed." },
      { title: "Ad frames", desc: "Still ads for Meta when a campaign needs them." },
      { title: "Simple motion", desc: "A short designed move when a still frame is not enough and footage is limited." },
      { title: "A mini system", desc: "The rules so month two does not restart from zero." },
    ],
    faqs: [
      {
        question: "Is social media creative design in Mangalore the same as managing the account?",
        answer: "No. This page is the design. Posting and community management are a separate social media scope. Dark Media Tech can do either, or both.",
      },
      {
        question: "What files do we receive?",
        answer: "The sizes you need to publish, and the working rules if we are building a system. We do not hand over a single flattened image and call it a brand.",
      },
      {
        question: "Can you match an existing brand?",
        answer: "Yes. If the identity is already set, the social frames follow it.",
      },
      {
        question: "How many designs are in a set?",
        answer: "The quote names the count. A campaign of six frames and a monthly pack of twelve are different jobs.",
      },
      {
        question: "Where do we review them?",
        answer: "At Kotichennaya Circle, Nandi Gudda, Mangaluru 575002, or on a shared review.",
      },
    ],
    hub: socialHub,
    related: [socialCreativeMangaluru, socialAgencyMangalore],
  }),
  page({
    slug: "social-media-creative-design-mangaluru",
    serviceName: "Social Media Creative Design in Mangaluru",
    title: "Social Media Creative Design in Mangaluru | Dark Media",
    description:
      "Social media creative design in Mangaluru. Consistent post and story design for local brands, made at our Kotichennaya Circle studio.",
    keywords: [
      "social media creative design in Mangaluru",
      "Instagram post design Mangaluru",
      "social media graphics Mangaluru",
      "creative design agency Mangaluru",
      "social media designer Mangaluru",
      "ad creative Mangaluru",
    ],
    badgeText: "Mangaluru",
    titleLine1: "Social Media Creative Design",
    titleLine2: "in Mangaluru",
    intro:
      "A Mangaluru brand can look accidental if every post uses a different font. Social media creative design in Mangaluru fixes that without turning the account into a brochure. Dark Media Tech designs a small system: how a photo is cropped, where the offer sits, and how a story relates to the feed. The studio is in Nandi Gudda.",
    cards: [
      {
        title: "Offers that can be read on a phone",
        desc: "A price, a date, or a place has to survive a small screen. We design for that, not for a desktop mockup.",
      },
      {
        title: "Campaign sets",
        desc: "An admission week or a festive menu gets a set of frames that belong together.",
      },
      {
        title: "Design the team can extend",
        desc: "If your staff will make the next story, they need rules, not a folder of one-off files.",
      },
    ],
    whyTitleLead: "Social creatives",
    whyTitleAccent: "in Mangaluru",
    whyBody:
      "Creative design in Mangaluru fails when it ignores the photograph. We start with the pictures and the sentence. Social media creative design in Mangaluru then becomes a layout those ingredients can survive. You approve the set at the studio before anything is posted.",
    whyPoints: [
      "Designed around real photos and real offers",
      "Readable at phone size",
      "A repeatable system for the next month",
      "Separate from posting if you only want the files",
    ],
    offerTitleLead: "Design",
    offerTitleRest: "sets in",
    offerTitleAccent: "Mangaluru",
    offerBody: "These are the creative jobs we take for social.",
    offers: [
      { title: "Monthly frame sets", desc: "A planned group of posts with shared type and colour." },
      { title: "Announcement layouts", desc: "Dates, fees, menus, and hours set so they can be read quickly." },
      { title: "Story systems", desc: "Covers and a pattern for vertical posts." },
      { title: "Paid-ad stills", desc: "Frames cropped and written for an ad, not reused blindly from the feed." },
      { title: "Handover notes", desc: "How to use the system if your team publishes the next round." },
    ],
    faqs: [
      {
        question: "Who is social media creative design in Mangaluru for?",
        answer: "Teams that already post, or want to, and need the frames to look like one brand. Dark Media Tech designs them in Mangaluru.",
      },
      {
        question: "Do you write the captions?",
        answer: "Short lines on the frame are part of the design. Longer captions are included when the scope says so.",
      },
      {
        question: "Can this follow a rebrand?",
        answer: "Yes. If the identity is changing, we design social after the mark and colours are agreed.",
      },
      {
        question: "What is not included?",
        answer: "Media spend, influencer deals, and a guarantee of followers. Design does not buy an audience.",
      },
      {
        question: "Where is the studio?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: socialHub,
    related: [socialCreativeMangalore, graphicMangaluru],
  }),
  page({
    slug: "branding-agency-mangalore",
    serviceName: "Branding Agency in Mangalore",
    title: "Branding Agency in Mangalore | Dark Media",
    description:
      "Branding agency in Mangalore. Dark Media Tech designs names, marks, colour, and the rules a local business can actually use.",
    keywords: [
      "branding agency in Mangalore",
      "branding company in Mangalore",
      "brand identity Mangalore",
      "brand design agency Mangalore",
      "corporate branding Mangalore",
      "Mangalore branding studio",
    ],
    badgeText: "Mangalore",
    titleLine1: "Branding Agency",
    titleLine2: "in Mangalore",
    intro:
      "A branding agency in Mangalore should leave you with a mark you can put on a board, a website, and a bill without calling the designer every time. Dark Media Tech does that identity work from Mangalore. We start with what the business is, who it is for, and where the brand has to appear. A logo on its own is a smaller job. A brand is the system around it.",
    cards: [
      {
        title: "New companies",
        desc: "A name in use, a mark, and colours that work in print and on a phone. Mangalore startups do not need a 90-page book on day one.",
      },
      {
        title: "Businesses that have outgrown a logo",
        desc: "The old mark still means something. We decide what to keep before we redraw anything.",
      },
      {
        title: "Brand applied to the website",
        desc: "Identity that never reaches the site stays theoretical. We can design both, scoped as related work.",
      },
    ],
    whyTitleLead: "Branding",
    whyTitleAccent: "agency in Mangalore",
    whyBody:
      "Branding companies in Mangalore sometimes deliver a presentation and no files the printer can use. We deliver the mark, the colours, the type, and the formats you will actually send. A branding agency in Mangalore should also be able to say what is out of scope. Packaging, a full website, and a campaign are separate. The studio is at Nandi Gudda.",
    whyPoints: [
      "Identity based on the business, not a moodboard trend",
      "Files for screen and print",
      "Rules short enough that staff will follow them",
      "Website and packaging scoped only if you need them",
    ],
    offerTitleLead: "Identity",
    offerTitleRest: "work in",
    offerTitleAccent: "Mangalore",
    offerBody: "Branding services in Mangalore from Dark Media Tech are these engagements.",
    offers: [
      { title: "Brand basics", desc: "Mark, colour, type, and a short note on how to use them." },
      { title: "A fuller identity", desc: "Patterns, stationery, and the way the brand sits on a page." },
      { title: "A careful refresh", desc: "An update that keeps the recognition you already earned." },
      { title: "Verbal tone", desc: "How the business should sound in a headline and a caption." },
      { title: "Handover", desc: "Files named properly, so the next vendor is not guessing." },
    ],
    faqs: [
      {
        question: "What do we get from a branding agency in Mangalore?",
        answer:
          "The identity pieces named in the quote, with files you can use. Dark Media Tech works from Mangalore. A logo-only job is available if that is all you need.",
      },
      {
        question: "How many logo options do you show?",
        answer: "We explore directions, then refine one. We do not run an unlimited contest of unrelated sketches.",
      },
      {
        question: "Do you name companies?",
        answer: "Naming can be part of a brand project. It is harder than a logo and it is scoped that way.",
      },
      {
        question: "Can you brand and build the website?",
        answer: "Yes. They are related and still quoted so you can see each part.",
      },
      {
        question: "Where do we meet?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: brandHub,
    related: [brandingMangaluru, logoMangalore],
  }),
  page({
    slug: "branding-agency-mangaluru",
    serviceName: "Branding Agency in Mangaluru",
    title: "Branding Agency in Mangaluru | Dark Media",
    description:
      "Branding agency in Mangaluru. Identity design for local companies, from the mark to the rules your team can apply.",
    keywords: [
      "branding agency in Mangaluru",
      "branding company Mangaluru",
      "brand identity design Mangaluru",
      "brand studio Mangaluru",
      "corporate identity Mangaluru",
      "Mangaluru branding agency",
    ],
    badgeText: "Mangaluru",
    titleLine1: "Branding Agency",
    titleLine2: "in Mangaluru",
    intro:
      "Family firms and newer companies in Mangaluru often have a reputation and no shared way to show it. A branding agency in Mangaluru turns that into a mark, a colour, and a rule. Dark Media Tech does the work at Kotichennaya Circle. We look at the signboard, the invoice, and the website together, because a brand that only exists in a PDF will be ignored by Monday.",
    cards: [
      {
        title: "Companies with a long local name",
        desc: "The identity has to work in a small space and on a full letterhead. We test both before you approve it.",
      },
      {
        title: "Groups with more than one offer",
        desc: "A college, a hospital, or a business with two lines needs a system, not five unrelated logos.",
      },
      {
        title: "A refresh that elders still recognise",
        desc: "If customers already know the old mark, we change what is weak and keep what they remember.",
      },
    ],
    whyTitleLead: "Branding",
    whyTitleAccent: "in Mangaluru",
    whyBody:
      "Brand studios in Mangaluru should be able to print a sample, not only show a screen. We care about that. A branding agency in Mangaluru is useful when the owner can sit in the room and reject a direction quickly. That room is our studio in Nandi Gudda.",
    whyPoints: [
      "Tested at small sizes and on a page",
      "Built for the places the brand will actually appear",
      "One direction refined, not an endless gallery",
      "Files the printer and the website can both use",
    ],
    offerTitleLead: "Brand",
    offerTitleRest: "systems in",
    offerTitleAccent: "Mangaluru",
    offerBody: "Identity work we take for Mangaluru companies.",
    offers: [
      { title: "Discovery", desc: "Who the brand is for, and what it must not be confused with." },
      { title: "Mark and colour", desc: "A logo and a palette that survive print and screens." },
      { title: "Type and layout", desc: "How a headline and a body of text should look." },
      { title: "Applications", desc: "Card, invoice, social, or sign, as listed in the scope." },
      { title: "A short guide", desc: "Enough rules for the next person, not a book nobody opens." },
    ],
    faqs: [
      {
        question: "Do you have a branding agency office in Mangaluru?",
        answer: "Yes. Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
      {
        question: "Can you rebrand without confusing existing customers?",
        answer: "That is the point of a careful refresh. We identify what people already recognise and we do not throw it away for novelty.",
      },
      {
        question: "Is packaging included?",
        answer: "Only when the quote includes it. A brand system and a pack design are related and still separate jobs.",
      },
      {
        question: "How long does identity work take?",
        answer: "A focused mark is often a few weeks after the brief is clear. A wider system takes longer because more applications need approval.",
      },
      {
        question: "Will you trademark the logo?",
        answer: "No. We design it. Registration is a legal step for your counsel, not a design deliverable.",
      },
    ],
    hub: brandHub,
    related: [brandingMangalore, packagingMangaluru],
  }),
  page({
    slug: "logo-design-company-mangalore",
    serviceName: "Logo Design Company in Mangalore",
    title: "Logo Design Company in Mangalore | Dark Media",
    description:
      "Logo design company in Mangalore. A usable mark, with the colour and file formats a Mangalore business needs for print and the web.",
    keywords: [
      "logo design company in Mangalore",
      "logo designers in Mangalore",
      "logo design services Mangalore",
      "company logo design Mangalore",
      "professional logo Mangalore",
      "Mangalore logo design",
    ],
    badgeText: "Mangalore",
    titleLine1: "Logo Design Company",
    titleLine2: "in Mangalore",
    intro:
      "A logo design company in Mangalore should hand you a mark that still works on a shutter, a website header, and a small app icon. Dark Media Tech designs that from our Mangalore studio. We learn the name, the audience, and the places the logo must appear. Then we develop a direction and refine it. You get files, not a screenshot in a chat.",
    cards: [
      {
        title: "Wordmarks and symbols",
        desc: "Some Mangalore names are long. A wordmark may be wiser than forcing a symbol. We recommend the form that fits.",
      },
      {
        title: "Colour that prints",
        desc: "A logo that only works as a gradient on screen will fail at the printer. We check both.",
      },
      {
        title: "Versions you will need",
        desc: "Full colour, one colour, and a small version. A single lockup is rarely enough.",
      },
    ],
    whyTitleLead: "Logo design",
    whyTitleAccent: "in Mangalore",
    whyBody:
      "Logo designers in Mangalore are often asked for ten options by tomorrow. That produces ten weak marks. We take a brief, show a considered direction, and revise it. A logo design company in Mangalore should also tell you when you need a wider brand, not only a symbol. The studio is at Kotichennaya Circle.",
    whyPoints: [
      "A brief before any sketch is treated as final",
      "Tested small, in one colour, and on a light and dark ground",
      "Print and screen files included",
      "Revisions named in the quote, not left open-ended",
    ],
    offerTitleLead: "Logo",
    offerTitleRest: "design in",
    offerTitleAccent: "Mangalore",
    offerBody: "What a logo project from this studio includes.",
    offers: [
      { title: "The brief", desc: "Name, sector, and where the mark will be seen first." },
      { title: "A direction", desc: "A mark developed properly, with room to refine it." },
      { title: "Revisions", desc: "The rounds listed in the scope, used on the chosen direction." },
      { title: "File set", desc: "Formats for web, print, and a simple one-colour version." },
      { title: "A note on use", desc: "Clear space and the versions not to stretch or recolour." },
    ],
    faqs: [
      {
        question: "How much does a logo cost from a logo design company in Mangalore?",
        answer:
          "It depends on whether you need a single mark or a small identity around it. Dark Media Tech quotes after the brief. We do not sell a fixed contest price.",
      },
      {
        question: "How many concepts do we see?",
        answer: "We develop a direction and refine it. You are not choosing from a pile of unrelated icons.",
      },
      {
        question: "Do we own the logo?",
        answer: "Yes, once the project is paid for, you receive the files to use in the business. Stock elements, if any were required, are called out.",
      },
      {
        question: "Can you redesign an old logo?",
        answer: "Yes. We keep what customers recognise when that recognition is worth keeping.",
      },
      {
        question: "Where can we see the work?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: brandHub,
    related: [logoMangaluru, brandingMangalore],
  }),
  page({
    slug: "logo-design-company-mangaluru",
    serviceName: "Logo Design Company in Mangaluru",
    title: "Logo Design Company in Mangaluru | Dark Media",
    description:
      "Logo design company in Mangaluru. Marks designed for signboards, websites, and print, from our studio in Nandi Gudda.",
    keywords: [
      "logo design company in Mangaluru",
      "logo designers in Mangaluru",
      "logo design Mangaluru",
      "business logo Mangaluru",
      "custom logo design Mangaluru",
      "Mangaluru logo company",
    ],
    badgeText: "Mangaluru",
    titleLine1: "Logo Design Company",
    titleLine2: "in Mangaluru",
    intro:
      "In Mangaluru a logo often has to live on a physical board before it lives on Instagram. A logo design company in Mangaluru should design for that order. Dark Media Tech does. We look at the lettering in the name, the language you use in public, and the size of the sign. The studio is at Kotichennaya Circle, so you can see the mark at arm's length, not only on a laptop.",
    cards: [
      {
        title: "Names that are long or bilingual",
        desc: "A Mangaluru business may use an English trading name and a fuller registered name. The logo has to know which one leads.",
      },
      {
        title: "Signboard reality",
        desc: "Fine lines disappear on a lit board. We simplify before you pay for fabrication.",
      },
      {
        title: "Digital use the same week",
        desc: "You also need a header for the website and a profile image. Those versions are part of the file set.",
      },
    ],
    whyTitleLead: "Logo design",
    whyTitleAccent: "in Mangaluru",
    whyBody:
      "Logo design in Mangaluru is not a download. We draw a mark for this name. A logo design company in Mangaluru should refuse clip art and refuse an unlimited option mill. We do both. You leave with files your printer and your website can open.",
    whyPoints: [
      "Designed for a board and a screen",
      "The public name decided before the drawing",
      "One-colour and small-size versions included",
      "A limited, written round of revisions",
    ],
    offerTitleLead: "Marks",
    offerTitleRest: "for",
    offerTitleAccent: "Mangaluru",
    offerBody: "A logo engagement here is deliberately small and finished.",
    offers: [
      { title: "Name check", desc: "Which words appear in the mark, and which stay in the legal line only." },
      { title: "Design", desc: "A wordmark, a symbol, or both, chosen for the name." },
      { title: "Refinement", desc: "Spacing, weight, and colour adjusted after you have seen it." },
      { title: "Formats", desc: "Vector and the raster sizes a website and a profile need." },
      { title: "Use notes", desc: "What not to do, in a page you can send to a printer." },
    ],
    faqs: [
      {
        question: "Can a logo design company in Mangaluru also design the sign?",
        answer: "We design the artwork. Fabrication is done by your sign vendor. We can prepare the file they need.",
      },
      {
        question: "Do you design in Kannada lettering?",
        answer: "When the name is in Kannada, yes, and we scope it that way. We do not auto-convert an English wordmark and call it done.",
      },
      {
        question: "What if we only have a rough sketch?",
        answer: "Bring it. A sketch is a brief, not a final mark. We will redraw it so it can be reproduced.",
      },
      {
        question: "Is a brand guide included?",
        answer: "A short use note is included. A full brand system is a larger project.",
      },
      {
        question: "Where is the company?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: brandHub,
    related: [logoMangalore, graphicMangaluru],
  }),
  page({
    slug: "packaging-design-company-mangalore",
    serviceName: "Packaging Design Company in Mangalore",
    title: "Packaging Design Company in Mangalore | Dark Media",
    description:
      "Packaging design company in Mangalore. Artwork for boxes, labels, and pouches, prepared for the printer your business already uses.",
    keywords: [
      "packaging design company in Mangalore",
      "packaging designers in Mangalore",
      "product packaging design Mangalore",
      "label design Mangalore",
      "box design Mangalore",
      "package design Mangalore",
    ],
    badgeText: "Mangalore",
    titleLine1: "Packaging Design Company",
    titleLine2: "in Mangalore",
    intro:
      "A packaging design company in Mangalore should design the pack and leave the printing to a printer. Dark Media Tech does the artwork: structure of the face, the label, the mandatory lines, and a file your converter can open. We are in Mangalore. We are not a factory. If you make food, tile, textiles, or a local product, the pack has to explain what is inside before it tries to be decorative.",
    cards: [
      {
        title: "Labels and pouches",
        desc: "Small faces need a short name and a readable claim. We design for the size you will actually print.",
      },
      {
        title: "Boxes and cartons",
        desc: "The front, the side, and the back have different jobs. Legal lines do not get hidden to make the front prettier.",
      },
      {
        title: "A brand that matches the pack",
        desc: "If the logo is not ready for print, we say so. Packaging on a weak mark just prints the problem.",
      },
    ],
    whyTitleLead: "Packaging design",
    whyTitleAccent: "in Mangalore",
    whyBody:
      "Package designers in Mangalore are sometimes asked for a pretty render and no dieline. The printer then redraws it. We work from the dieline your printer supplies, or we prepare artwork to a size you confirm. A packaging design company in Mangalore, for us, means print-ready design. Reviews are at Kotichennaya Circle.",
    whyPoints: [
      "Designed on the real pack size",
      "Printer files, not only a 3D picture",
      "Claims and contents left readable",
      "Print production stays with your printer",
    ],
    offerTitleLead: "Pack",
    offerTitleRest: "design in",
    offerTitleAccent: "Mangalore",
    offerBody: "Packaging design services in Mangalore from this studio.",
    offers: [
      { title: "Label systems", desc: "One design that can carry a range of flavours or sizes." },
      { title: "Carton artwork", desc: "Front, back, and side laid out on the dieline." },
      { title: "Range logic", desc: "How a second product looks related without being identical." },
      { title: "Print handoff", desc: "Files and a note for the printer, including what we need them to confirm." },
      { title: "A shelf check", desc: "A proof review before you approve a large run." },
    ],
    faqs: [
      {
        question: "Do you print the packaging?",
        answer: "No. A packaging design company in Mangalore, in our case, designs the artwork. Your printer produces it. Dark Media Tech prepares the file.",
      },
      {
        question: "What do you need from us?",
        answer: "The product, the size, the words that must appear, and a dieline if the printer has one.",
      },
      {
        question: "Can you design a whole range?",
        answer: "Yes. A range is scoped by the number of packs, because each face still needs checking.",
      },
      {
        question: "Do you handle food-label law?",
        answer: "We place the information you and your advisor say must be there. We are not a regulatory consultant.",
      },
      {
        question: "Where do we review proofs?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: brandHub,
    related: [packagingMangaluru, brandingMangalore],
  }),
  page({
    slug: "packaging-design-company-mangaluru",
    serviceName: "Packaging Design Company in Mangaluru",
    title: "Packaging Design Company in Mangaluru | Dark Media",
    description:
      "Packaging design company in Mangaluru. Label and carton artwork for coastal products, ready to hand to your printer.",
    keywords: [
      "packaging design company in Mangaluru",
      "packaging design Mangaluru",
      "label designers Mangaluru",
      "product box design Mangaluru",
      "pouch design Mangaluru",
      "Mangaluru packaging studio",
    ],
    badgeText: "Mangaluru",
    titleLine1: "Packaging Design Company",
    titleLine2: "in Mangaluru",
    intro:
      "Producers in Mangaluru sell through shops, export desks, and a link on a phone. The pack is often the first proof the product is real. A packaging design company in Mangaluru should make that proof clear: what it is, who made it, and how to read the details. Dark Media Tech designs the artwork at Nandi Gudda. Printing, materials, and food compliance stay with the specialists you already use.",
    cards: [
      {
        title: "Speciality foods and goods",
        desc: "If the product needs an explanation, the back of the pack is part of the design, not an afterthought.",
      },
      {
        title: "Export and local versions",
        desc: "Two markets may need two text sets. We design the system so the second language does not break the layout.",
      },
      {
        title: "A render and a file",
        desc: "You can see a picture of the pack. The deliverable is still the artwork the printer opens.",
      },
    ],
    whyTitleLead: "Packaging",
    whyTitleAccent: "design in Mangaluru",
    whyBody:
      "Packaging studios in Mangaluru help most when they respect the dieline. We do. A packaging design company in Mangaluru that also does the brand can keep the pack and the website in one family. Those are still two quotes. The studio is at Kotichennaya Circle.",
    whyPoints: [
      "Artwork built on the printer's size",
      "Range design so products look related",
      "Text checked for fit before a render is polished",
      "No pretend print factory behind the design",
    ],
    offerTitleLead: "Artwork",
    offerTitleRest: "for",
    offerTitleAccent: "Mangaluru",
    offerBody: "The packaging jobs we take locally.",
    offers: [
      { title: "Primary pack", desc: "The label or face a buyer sees first." },
      { title: "Secondary pack", desc: "A carton or sleeve around it, if you need one." },
      { title: "Variant system", desc: "Colour or crop changes for a flavour, size, or line." },
      { title: "Printer liaison notes", desc: "What to confirm on the proof: bleed, colour, and small type." },
      { title: "Digital twin", desc: "A crop of the same design for the website or a marketplace image." },
    ],
    faqs: [
      {
        question: "Are you a packaging design company in Mangaluru that also manufactures boxes?",
        answer: "No. We design. Your printer or converter manufactures. Dark Media Tech is a studio in Mangaluru.",
      },
      {
        question: "Can you start without a dieline?",
        answer: "We can design a direction. Final artwork waits on the size your printer confirms, so we do not redraw it twice.",
      },
      {
        question: "Do you photograph the product?",
        answer: "If the pack needs a product photo, we scope that. Many labels work with type and a simple mark.",
      },
      {
        question: "How are revisions handled?",
        answer: "The quote names the rounds. A new pack size after approval is a new piece of artwork.",
      },
      {
        question: "Where are you based?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: brandHub,
    related: [packagingMangalore, graphicMangaluru],
  }),
  page({
    slug: "graphic-design-company-mangalore",
    serviceName: "Graphic Design Company in Mangalore",
    title: "Graphic Design Company in Mangalore | Dark Media",
    description:
      "Graphic design company in Mangalore. Print and digital layouts that follow your brand, from brochures to campaign frames.",
    keywords: [
      "graphic design company in Mangalore",
      "graphic designers in Mangalore",
      "graphic design services Mangalore",
      "brochure design Mangalore",
      "print design Mangalore",
      "Mangalore graphic design studio",
    ],
    badgeText: "Mangalore",
    titleLine1: "Graphic Design Company",
    titleLine2: "in Mangalore",
    intro:
      "A graphic design company in Mangalore is hired for the pieces between a logo and a website: a brochure, a rate card, a banner, a presentation, a poster. Dark Media Tech designs those from Mangalore so they belong to the same brand. We ask where the piece will be seen and who has to approve the words. Then we lay it out. We do not start from a blank trend.",
    cards: [
      {
        title: "Print the office still uses",
        desc: "Cards, leaflets, and menus for Mangalore businesses that hand something over in person.",
      },
      {
        title: "Decks and one-pagers",
        desc: "A leave-behind for a sales call or an admission desk, short enough to be read.",
      },
      {
        title: "Campaign layout",
        desc: "The same offer, arranged for a poster, a post, and a page, without three unrelated designs.",
      },
    ],
    whyTitleLead: "Graphic design",
    whyTitleAccent: "in Mangalore",
    whyBody:
      "Graphic designers in Mangalore can make a single poster quickly and a mess over a year. We keep a file of the rules. A graphic design company in Mangalore should also know when the job is really a brand or a website. We will say that. The studio is at Nandi Gudda.",
    whyPoints: [
      "Layouts matched to the brand you already have",
      "Print sizes confirmed before design is polished",
      "Words edited for the space, not spilled over the edge",
      "Source files so the next change is possible",
    ],
    offerTitleLead: "Design",
    offerTitleRest: "pieces in",
    offerTitleAccent: "Mangalore",
    offerBody: "Graphic design services in Mangalore we commonly quote.",
    offers: [
      { title: "Brochures and leaflets", desc: "A short booklet or a single sheet with a clear order of information." },
      { title: "Business stationery", desc: "Card, letterhead, and invoice layouts that use the mark correctly." },
      { title: "Presentations", desc: "A deck your team can edit after we set the master." },
      { title: "Event and offer art", desc: "Posters and banners for a date, a place, and one action." },
      { title: "Digital companions", desc: "The same artwork cropped for a post or a website banner." },
    ],
    faqs: [
      {
        question: "What does a graphic design company in Mangalore deliver?",
        answer: "The pieces in the quote, as print-ready or screen-ready files. Dark Media Tech designs them in Mangalore. Printing is arranged with your printer.",
      },
      {
        question: "Do you write the copy?",
        answer: "We can shape the lines so they fit. Long copy about your service should come from you, or be scoped as writing.",
      },
      {
        question: "Can you design without a logo?",
        answer: "We can, but a logo project may need to come first. We will say so rather than invent a temporary mark.",
      },
      {
        question: "How do you charge?",
        answer: "By the piece and the rounds of revision. A business card and a 16-page brochure are not the same price.",
      },
      {
        question: "Where do we review?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: brandHub,
    related: [graphicMangaluru, socialCreativeMangalore],
  }),
  page({
    slug: "graphic-design-company-mangaluru",
    serviceName: "Graphic Design Company in Mangaluru",
    title: "Graphic Design Company in Mangaluru | Dark Media",
    description:
      "Graphic design company in Mangaluru. Brochures, stationery, and campaign layouts designed at our Kotichennaya Circle studio.",
    keywords: [
      "graphic design company in Mangaluru",
      "graphic designers Mangaluru",
      "graphic design services Mangaluru",
      "print design Mangaluru",
      "creative design company Mangaluru",
      "Mangaluru graphic studio",
    ],
    badgeText: "Mangaluru",
    titleLine1: "Graphic Design Company",
    titleLine2: "in Mangaluru",
    intro:
      "Colleges, clinics, and family brands in Mangaluru still hand people paper. A graphic design company in Mangaluru should make that paper as clear as the website. Dark Media Tech lays out those pieces from Nandi Gudda. We use your real text, your real photos, and the brand colours. If any of those are missing, the design waits or we scope them.",
    cards: [
      {
        title: "Admission and clinic literature",
        desc: "Dates, fees, and departments need hierarchy. A decorative cover that hides the fact is a failed leaflet.",
      },
      {
        title: "Menus and rate cards",
        desc: "Things that change often need a layout your team can update without a full redesign.",
      },
      {
        title: "Consistent campaigns",
        desc: "A Mangaluru offer that appears on a flex, a post, and a receipt should still look like one company.",
      },
    ],
    whyTitleLead: "Graphic design",
    whyTitleAccent: "in Mangaluru",
    whyBody:
      "Design companies in Mangaluru help when they edit as well as decorate. We cut a heading that does not fit rather than shrinking it until it is unreadable. A graphic design company in Mangaluru should show you a proof at the real size. We can do that at Kotichennaya Circle.",
    whyPoints: [
      "Designed at the size it will be printed or posted",
      "Information ordered before decoration",
      "Masters your staff can reuse",
      "Print handoff notes included",
    ],
    offerTitleLead: "Layouts",
    offerTitleRest: "from",
    offerTitleAccent: "Mangaluru",
    offerBody: "Graphic work we take for Mangaluru teams.",
    offers: [
      { title: "Information design", desc: "Leaflets and sheets where the reader must find a fact quickly." },
      { title: "Brand applications", desc: "Stationery and templates that follow an existing identity." },
      { title: "Campaign kits", desc: "A small set of sizes for one announcement." },
      { title: "Editable templates", desc: "A deck or a rate card built so the next edit is not a new project." },
      { title: "Proof support", desc: "A check of the printer's proof for type and margins." },
    ],
    faqs: [
      {
        question: "Is graphic design in Mangaluru only for print?",
        answer: "No. A graphic design company in Mangaluru, which we are, also designs digital layouts. Print is included when you need paper.",
      },
      {
        question: "Can you work from a Word document?",
        answer: "Yes. That is often the brief. We turn it into a layout and we will flag text that is too long.",
      },
      {
        question: "Do you provide printing?",
        answer: "We prepare files. You choose the printer. We can talk to them about the proof if you want that in the scope.",
      },
      {
        question: "What if the brand is inconsistent already?",
        answer: "We can design the next piece carefully, and we will recommend an identity cleanup if every job is fighting the last one.",
      },
      {
        question: "Where is the studio?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: brandHub,
    related: [graphicMangalore, brandingMangaluru],
  }),
  page({
    slug: "video-editing-company-mangalore",
    serviceName: "Video Editing Company in Mangalore",
    title: "Video Editing Company in Mangalore | Dark Media",
    description:
      "Video editing company in Mangalore. Cuts, reels, and corporate edits from footage you have, or from a shoot we produce.",
    keywords: [
      "video editing company in Mangalore",
      "video editors in Mangalore",
      "video editing services Mangalore",
      "reels editing Mangalore",
      "corporate video editing Mangalore",
      "Mangalore video editing",
    ],
    badgeText: "Mangalore",
    titleLine1: "Video Editing Company",
    titleLine2: "in Mangalore",
    intro:
      "A video editing company in Mangalore is often handed a folder of phone clips and asked for a film. Dark Media Tech can cut that, and we can also edit footage from a shoot we produce. We are in Mangalore. The edit starts with the length, the place it will be seen, and the one thing the viewer should remember. A three-minute corporate film and a twenty-second reel are different edits.",
    cards: [
      {
        title: "Cuts from existing footage",
        desc: "Interviews, events, and product clips you already recorded. We do not pretend missing shots are in the folder.",
      },
      {
        title: "Reels and ads",
        desc: "Short versions for Instagram or a paid placement, cut for silence-on autoplay as well as for sound.",
      },
      {
        title: "Edits after a Dark Media shoot",
        desc: "If we filmed it, the edit is part of production. If someone else filmed it, editing can still be a standalone job.",
      },
    ],
    whyTitleLead: "Video editing",
    whyTitleAccent: "in Mangalore",
    whyBody:
      "Video editors in Mangalore should tell you when the footage cannot support the film you described. We do. A video editing company in Mangalore that also produces can plan the shoot so the edit is possible. For an edit-only job, we review the files first. The studio is at Kotichennaya Circle.",
    whyPoints: [
      "Length and platform agreed before the cut",
      "A review of the footage before we promise a story",
      "Revisions listed in the quote",
      "Exports for the website, a reel, and a presentation",
    ],
    offerTitleLead: "Editing",
    offerTitleRest: "in",
    offerTitleAccent: "Mangalore",
    offerBody: "Video editing services in Mangalore from this studio.",
    offers: [
      { title: "Corporate cuts", desc: "A clear film from interviews and coverage, at the length you can actually use." },
      { title: "Social cuts", desc: "Short versions with captions for silent viewing." },
      { title: "Product and menu films", desc: "Tight edits that show the thing, not a long opener." },
      { title: "Assembly and fine cut", desc: "A first cut for direction, then a fine cut after your notes." },
      { title: "Delivery", desc: "The formats named in the scope, not a single unusable master." },
    ],
    faqs: [
      {
        question: "Can a video editing company in Mangalore work with phone footage?",
        answer: "Yes, if the picture and sound are usable. Dark Media Tech will watch the files before quoting a finished film. Bad audio cannot always be saved.",
      },
      {
        question: "Do you shoot as well?",
        answer: "Yes. Video production is a separate service. Editing can stand alone when the footage already exists.",
      },
      {
        question: "How many revisions are included?",
        answer: "The quote says. A new script after the fine cut is new work.",
      },
      {
        question: "Do you add music we do not own?",
        answer: "We use music you have rights to, or we scope licensed music. We do not drop in a popular song and hope.",
      },
      {
        question: "Where are you?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: videoHub,
    related: [videoEditMangaluru, socialCreativeMangalore],
  }),
  page({
    slug: "video-editing-company-mangaluru",
    serviceName: "Video Editing Company in Mangaluru",
    title: "Video Editing Company in Mangaluru | Dark Media",
    description:
      "Video editing company in Mangaluru. We cut corporate films, reels, and ads from your footage or from a shoot planned with us.",
    keywords: [
      "video editing company in Mangaluru",
      "video editors Mangaluru",
      "video editing services Mangaluru",
      "reel editing Mangaluru",
      "corporate video editor Mangaluru",
      "Mangaluru video editing studio",
    ],
    badgeText: "Mangaluru",
    titleLine1: "Video Editing Company",
    titleLine2: "in Mangaluru",
    intro:
      "Events, campus days, and shop floors in Mangaluru produce hours of footage and no film. A video editing company in Mangaluru turns a selected part of that into something a person will watch. Dark Media Tech edits at our studio in Nandi Gudda. We agree the runtime first. Everything that does not serve that runtime comes out, even if it was expensive to film.",
    cards: [
      {
        title: "Talking heads that stay short",
        desc: "An interview becomes useful when it answers one question. We cut for that, and we will ask you which answer matters.",
      },
      {
        title: "Captions for mobile",
        desc: "Most Mangaluru viewers will see the film on a phone with the sound off at first. Captions are part of the edit.",
      },
      {
        title: "Versions, not one export",
        desc: "A full film, a 30-second cut, and a square reel can come from the same footage if we plan them.",
      },
    ],
    whyTitleLead: "Editing",
    whyTitleAccent: "in Mangaluru",
    whyBody:
      "Editors in Mangaluru cannot invent a shot that was never recorded. We say that early. A video editing company in Mangaluru should also keep your approval on the words that appear on screen. Names, fees, and claims get checked. The room for that review is at Kotichennaya Circle.",
    whyPoints: [
      "Footage reviewed before the schedule is promised",
      "Captions and on-screen text treated as part of the cut",
      "Several lengths from one story when you need them",
      "Your approval on claims before export",
    ],
    offerTitleLead: "Cuts",
    offerTitleRest: "we make in",
    offerTitleAccent: "Mangaluru",
    offerBody: "Editing work for Mangaluru clients.",
    offers: [
      { title: "Selects", desc: "We watch the material and tell you what story it can hold." },
      { title: "A first cut", desc: "Structure and length, before polish." },
      { title: "Finish", desc: "Titles, captions, grade within reason, and sound that is intelligible." },
      { title: "Cutdowns", desc: "Shorter versions for social or an ad." },
      { title: "Archive note", desc: "What was delivered, so the next edit does not start from a lost folder." },
    ],
    faqs: [
      {
        question: "Do you only edit, or do you produce?",
        answer: "Both exist. This page is editing. A video editing company in Mangaluru can cut footage you shot. Production is quoted when you need a crew.",
      },
      {
        question: "What formats can you take?",
        answer: "Common camera and phone files. If the files are damaged or in an odd format, we will know after we see them.",
      },
      {
        question: "Can you remove background noise?",
        answer: "Sometimes. Severe noise or several people talking at once may not be fixable. We will not promise a studio voice from a windy recording.",
      },
      {
        question: "How do reviews work?",
        answer: "You watch a cut and send grouped notes. Line-by-line changes after approval of the cut are a new round.",
      },
      {
        question: "Where do we sit for a review?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: videoHub,
    related: [videoEditMangalore, socialAgencyMangaluru],
  }),
  page({
    slug: "corporate-website-design-mangalore",
    serviceName: "Corporate Website Design in Mangalore",
    title: "Corporate Website Design in Mangalore | Dark Media",
    description:
      "Corporate website design in Mangalore. Clear company sites for firms with several services, built and designed by our Mangaluru studio.",
    keywords: [
      "corporate website design in Mangalore",
      "corporate website designers Mangalore",
      "company website design Mangalore",
      "corporate web design Mangalore",
      "business corporate website Mangalore",
      "enterprise website Mangalore",
    ],
    badgeText: "Mangalore",
    titleLine1: "Corporate Website Design",
    titleLine2: "in Mangalore",
    intro:
      "Corporate website design in Mangalore is for a company that has more than one offer and more than one kind of visitor. A buyer, a recruit, and a partner should not land on the same crowded homepage. Dark Media Tech designs and builds those sites from Mangalore. We map the company first: services, proof, leadership if it matters, and the way to enquire.",
    cards: [
      {
        title: "Groups and professional firms",
        desc: "Several practices or locations need a way to choose. The design gives each one a page instead of a box on the home screen.",
      },
      {
        title: "Proof without a trophy wall",
        desc: "Clients, sectors, and outcomes, written so they can be checked. We do not invent awards.",
      },
      {
        title: "A site the team can extend",
        desc: "A new service should use the same template. Corporate sites fail when every page is a one-off.",
      },
    ],
    whyTitleLead: "Corporate websites",
    whyTitleAccent: "in Mangalore",
    whyBody:
      "Corporate web designers in Mangalore are often asked for a site that looks large. Large is not the same as clear. We design the path through the company. Corporate website design in Mangalore from this studio includes the build, so the layout survives real paragraphs. You can review it at Kotichennaya Circle.",
    whyPoints: [
      "A page map before visual design",
      "Templates for services, locations, and news if you need them",
      "Enquiry paths matched to the right team",
      "The same studio designs and develops",
    ],
    offerTitleLead: "Company",
    offerTitleRest: "sites in",
    offerTitleAccent: "Mangalore",
    offerBody: "What a corporate website project includes.",
    offers: [
      { title: "Information architecture", desc: "Which visitor gets which page, and what the homepage is not." },
      { title: "Interface design", desc: "A calm first screen and inner pages that share a system." },
      { title: "Build", desc: "The approved design developed as a site your team can update where we agreed." },
      { title: "Proof and profile pages", desc: "About, leadership, or case notes, only if they help the visitor decide." },
      { title: "Launch", desc: "Addresses, forms, and a check that the company description is accurate." },
    ],
    faqs: [
      {
        question: "Who needs corporate website design in Mangalore?",
        answer: "Companies with several services, locations, or audiences. A smaller local shop may need a business website instead. Dark Media Tech will say which one fits.",
      },
      {
        question: "Do you write the company profile?",
        answer: "We structure it and can draft it from your notes. Leadership bios and claims need your approval.",
      },
      {
        question: "Can the site include a careers or investor section?",
        answer: "Yes, if those visitors are real. Empty sections that say coming soon are not a design we recommend.",
      },
      {
        question: "How long does it take?",
        answer: "A focused company site is often a few weeks after content is ready. More sections and approvals take longer.",
      },
      {
        question: "Where is the studio?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: webHub,
    related: [corporateMangaluru, businessSiteMangalore],
  }),
  page({
    slug: "corporate-website-design-mangaluru",
    serviceName: "Corporate Website Design in Mangaluru",
    title: "Corporate Website Design in Mangaluru | Dark Media",
    description:
      "Corporate website design in Mangaluru. Company websites with a clear structure for services, proof, and enquiries.",
    keywords: [
      "corporate website design in Mangaluru",
      "corporate website Mangaluru",
      "company website designers Mangaluru",
      "corporate web design Mangaluru",
      "professional website Mangaluru",
      "Mangaluru corporate website",
    ],
    badgeText: "Mangaluru",
    titleLine1: "Corporate Website Design",
    titleLine2: "in Mangaluru",
    intro:
      "A Mangaluru company with branches, departments, or a long history needs a website that can hold that without shouting. Corporate website design in Mangaluru is the structure and the interface for that job. Dark Media Tech designs it at Nandi Gudda and builds it in the same studio. The first screen says what the company is. Everything else has a page.",
    cards: [
      {
        title: "Institutions and groups",
        desc: "Colleges, healthcare groups, and multi-service firms need wayfinding more than a slogan.",
      },
      {
        title: "English pages with local facts",
        desc: "The address, the campuses, and the people to contact stay specific to Mangaluru.",
      },
      {
        title: "Room to add a division",
        desc: "The design system should take a new department next year without a second website.",
      },
    ],
    whyTitleLead: "Corporate design",
    whyTitleAccent: "in Mangaluru",
    whyBody:
      "Company websites in Mangaluru go wrong when every stakeholder adds a banner. We decide the hierarchy with you and then protect it. Corporate website design in Mangaluru includes that argument. It is useful. The review happens at Kotichennaya Circle.",
    whyPoints: [
      "One primary message on the first screen",
      "Departments given pages, not competing banners",
      "Contact routes that match how the office works",
      "Built so a later page can follow the template",
    ],
    offerTitleLead: "Corporate",
    offerTitleRest: "sites for",
    offerTitleAccent: "Mangaluru",
    offerBody: "The design and build we quote for company sites.",
    offers: [
      { title: "Stakeholder map", desc: "Buyers, students, patients, or partners, and the page each one needs." },
      { title: "Visual system", desc: "Type, grid, and components for a multi-page company site." },
      { title: "Content placement", desc: "Where proof, leadership, and locations sit." },
      { title: "Development", desc: "A fast site with stable addresses." },
      { title: "Handover", desc: "Who updates what after launch." },
    ],
    faqs: [
      {
        question: "Is corporate website design in Mangaluru different from a small business site?",
        answer: "Yes. A corporate site has more audiences and more pages. Dark Media Tech scopes them differently. A five-page local site is a business website, not a corporate one.",
      },
      {
        question: "Can several offices share one site?",
        answer: "Yes. Each office gets the facts that differ, inside one design.",
      },
      {
        question: "Will you migrate the old content?",
        answer: "We keep what is still true and drop what is outdated. A full copy of a messy old site is not a redesign.",
      },
      {
        question: "Do you provide photography?",
        answer: "We plan the slots. A photo shoot is scoped only if you want one.",
      },
      {
        question: "Where do we meet?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: webHub,
    related: [corporateMangalore, redesignMangaluru],
  }),
  page({
    slug: "business-website-development-mangalore",
    serviceName: "Business Website Development in Mangalore",
    title: "Business Website Development in Mangalore | Dark Media",
    description:
      "Business website development in Mangalore. A clear site for your services, proof, and enquiries, designed and built at our Mangaluru studio.",
    keywords: [
      "business website development in Mangalore",
      "business website designers Mangalore",
      "company website development Mangalore",
      "professional business website Mangalore",
      "website for business Mangalore",
      "Mangalore business website",
    ],
    badgeText: "Mangalore",
    titleLine1: "Business Website Development",
    titleLine2: "in Mangalore",
    intro:
      "Business website development in Mangalore is the practical site a working company needs: what you do, where you are, and how to start. Dark Media Tech builds it from Mangalore. It is not a corporate brochure with ten departments, and it is not a store unless you sell products. We write the page list from the way customers already ask for you.",
    cards: [
      {
        title: "Services people can scan",
        desc: "A clinic, a firm, a hotel, or a local brand should not hide the offer under a slider. Each service gets a straight explanation.",
      },
      {
        title: "Proof and place",
        desc: "Photos, a short record of the work, and the Mangalore address. Visitors decide faster when those are visible.",
      },
      {
        title: "An enquiry the office recognises",
        desc: "The form asks what the front desk needs, and nothing decorative.",
      },
    ],
    whyTitleLead: "Business websites",
    whyTitleAccent: "in Mangalore",
    whyBody:
      "Website developers in Mangalore are often asked to start from a theme. We start from the services. Business website development in Mangalore then becomes a small set of pages your staff can explain. You can review them at Kotichennaya Circle.",
    whyPoints: [
      "Page list based on real enquiries",
      "Phone layout treated as the main screen",
      "Contact details that match the shop or office",
      "A build your team can request changes to after launch",
    ],
    offerTitleLead: "Business",
    offerTitleRest: "sites in",
    offerTitleAccent: "Mangalore",
    offerBody: "What this kind of website includes.",
    offers: [
      { title: "Home and services", desc: "The offer, the proof, and the next step." },
      { title: "About and contact", desc: "Who you are, where you are, and how to reach you." },
      { title: "A simple editor path", desc: "The parts your team will change, agreed before launch." },
      { title: "Search-ready structure", desc: "Titles and headings that match the pages." },
      { title: "Launch support", desc: "Forms tested and the domain pointed when you are ready." },
    ],
    faqs: [
      {
        question: "What is included in business website development in Mangalore?",
        answer: "The pages in the quote, the design, and the build. Dark Media Tech does this from Mangalore. Photography, copywriting beyond the structure, and a store are extra if you need them.",
      },
      {
        question: "How is this different from a corporate site?",
        answer: "A business site is smaller and aimed at one kind of customer. A corporate site has more audiences. We will tell you which you are buying.",
      },
      {
        question: "How long does it take?",
        answer: "Often a few weeks once the words and photos are ready.",
      },
      {
        question: "Can you use our old content?",
        answer: "Yes, when it is still accurate. We will not copy a messy page just to fill space.",
      },
      {
        question: "Where are you based?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: webHub,
    related: [businessSiteMangaluru, smallBusinessMangalore],
  }),
  page({
    slug: "business-website-development-mangaluru",
    serviceName: "Business Website Development in Mangaluru",
    title: "Business Website Development in Mangaluru | Dark Media",
    description:
      "Business website development in Mangaluru. Sites for local firms that need services, location, and a working enquiry path.",
    keywords: [
      "business website development in Mangaluru",
      "business website Mangaluru",
      "website developers for business Mangaluru",
      "company website Mangaluru",
      "professional website development Mangaluru",
      "Mangaluru business website",
    ],
    badgeText: "Mangaluru",
    titleLine1: "Business Website Development",
    titleLine2: "in Mangaluru",
    intro:
      "A Mangaluru business still loses enquiries to a Facebook page or a PDF. Business website development in Mangaluru replaces that with a site people can trust and staff can send. Dark Media Tech builds it at Nandi Gudda. The pages name the service, the area, and the way to call. We keep the site small enough to finish.",
    cards: [
      {
        title: "One location, clearly stated",
        desc: "If you have a counter, the site says where it is. If you travel to the customer, the site says the area.",
      },
      {
        title: "Services in the customer's words",
        desc: "We use the phrases people already ask for, not internal department names.",
      },
      {
        title: "Ready for search later",
        desc: "The structure is clean so local SEO has a page to improve, instead of a single block of text.",
      },
    ],
    whyTitleLead: "Business sites",
    whyTitleAccent: "in Mangaluru",
    whyBody:
      "Business website developers in Mangaluru should be able to launch without a six-month workshop. We can. The scope is the pages, the design, and the build. Business website development in Mangaluru from this studio includes a review at Kotichennaya Circle before anything goes live.",
    whyPoints: [
      "A short page list, agreed in writing",
      "Local address and phone visible",
      "Forms tested with the person who will answer them",
      "Maintenance available after launch if you want it",
    ],
    offerTitleLead: "Websites",
    offerTitleRest: "for firms in",
    offerTitleAccent: "Mangaluru",
    offerBody: "The business website we build.",
    offers: [
      { title: "Offer pages", desc: "Each important service explained on its own." },
      { title: "Trust details", desc: "Who runs the business and how long the facts have been true." },
      { title: "Contact", desc: "Call, form, and map or directions." },
      { title: "Mobile build", desc: "The layout checked on a phone first." },
      { title: "Go-live", desc: "Domain, the last content check, and a note on what to do next." },
    ],
    faqs: [
      {
        question: "Do you build business websites only in Mangaluru?",
        answer: "The studio is in Mangaluru. This page is for local firms. We also build for clients elsewhere from the same team.",
      },
      {
        question: "Can the site be in English?",
        answer: "Yes. That is the usual language. Another language is scoped if you need it.",
      },
      {
        question: "What do you need from the business?",
        answer: "The services, a few photos if you have them, and someone who can approve the words.",
      },
      {
        question: "Will you train our staff?",
        answer: "We show the person who will request edits how the agreed updates work. A full content-management course is only included if the quote says so.",
      },
      {
        question: "Where do we meet?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: webHub,
    related: [businessSiteMangalore, affordableMangaluru],
  }),
  page({
    slug: "portfolio-website-development-mangalore",
    serviceName: "Portfolio Website Development in Mangalore",
    title: "Portfolio Website Development in Mangalore | Dark Media",
    description:
      "Portfolio website development in Mangalore. A site that shows the work clearly, for studios, architects, consultants, and independent practices.",
    keywords: [
      "portfolio website development in Mangalore",
      "portfolio website designers Mangalore",
      "portfolio website Mangalore",
      "creative portfolio website Mangalore",
      "work portfolio website Mangalore",
      "personal portfolio website Mangalore",
    ],
    badgeText: "Mangalore",
    titleLine1: "Portfolio Website Development",
    titleLine2: "in Mangalore",
    intro:
      "Portfolio website development in Mangalore is for people whose work has to be seen: architects, designers, photographers, consultants, and studios. Dark Media Tech builds the site so a project can be opened, understood, and followed by a way to hire you. We are in Mangalore. A portfolio that is only a grid of untitled images makes the visitor do too much work.",
    cards: [
      {
        title: "Projects with context",
        desc: "What the job was, what you did, and a few images. Captions matter as much as the crop.",
      },
      {
        title: "A way in for the right client",
        desc: "The homepage should say who the work is for. A Mangalore architect and a freelance editor do not need the same introduction.",
      },
      {
        title: "Easy to add the next project",
        desc: "If publishing a new piece needs a developer every time, the portfolio will go stale. We plan the update.",
      },
    ],
    whyTitleLead: "Portfolio sites",
    whyTitleAccent: "in Mangalore",
    whyBody:
      "Portfolio developers in Mangalore sometimes build a theme and leave the projects as filenames. We structure the case. Portfolio website development in Mangalore from this studio includes the design, the build, and a pattern for the next project. Reviews are at Nandi Gudda.",
    whyPoints: [
      "Project template agreed before the visual polish",
      "Images prepared for phone screens",
      "An enquiry that names the kind of work you want",
      "A way to add a project after launch",
    ],
    offerTitleLead: "Portfolio",
    offerTitleRest: "builds in",
    offerTitleAccent: "Mangalore",
    offerBody: "What we include in a portfolio site.",
    offers: [
      { title: "Project model", desc: "The fields every case needs: title, summary, images, and outcome." },
      { title: "Selected work on the home page", desc: "A few projects, not every file you have ever made." },
      { title: "About and approach", desc: "A short page on how you work and who you work with." },
      { title: "Contact", desc: "A brief that asks for the useful facts." },
      { title: "Launch and the next upload", desc: "The first set live, and the path for project two." },
    ],
    faqs: [
      {
        question: "Who is portfolio website development in Mangalore for?",
        answer: "Practices and individuals who win work by showing previous work. Dark Media Tech builds those sites in Mangalore. A company with services but no project gallery may need a business website instead.",
      },
      {
        question: "How many projects should we launch with?",
        answer: "Enough to prove the range, few enough to be finished. Six strong projects beat thirty unnamed thumbnails.",
      },
      {
        question: "Can you help select the work?",
        answer: "Yes. We can recommend what a first-time visitor should see. You still approve what is public.",
      },
      {
        question: "Will large images make the site slow?",
        answer: "We prepare them so the page stays quick. A portfolio that takes ten seconds to open loses the visit.",
      },
      {
        question: "Where is the studio?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: webHub,
    related: [portfolioMangaluru, corporateMangalore],
  }),
  page({
    slug: "portfolio-website-development-mangaluru",
    serviceName: "Portfolio Website Development in Mangaluru",
    title: "Portfolio Website Development in Mangaluru | Dark Media",
    description:
      "Portfolio website development in Mangaluru. Project sites for local studios and independent practices, built so the work is easy to judge.",
    keywords: [
      "portfolio website development in Mangaluru",
      "portfolio website Mangaluru",
      "creative website Mangaluru",
      "architect portfolio website Mangaluru",
      "personal website Mangaluru",
      "work showcase website Mangaluru",
    ],
    badgeText: "Mangaluru",
    titleLine1: "Portfolio Website Development",
    titleLine2: "in Mangaluru",
    intro:
      "Studios in Mangaluru often send a drive link when someone asks for work. Portfolio website development in Mangaluru replaces that link with a page that has your name on it. Dark Media Tech builds it from Nandi Gudda. Each project says what it is. The contact page says what kind of work you are taking now.",
    cards: [
      {
        title: "Architecture, design, and consulting",
        desc: "These practices are judged on judgement. The site should show decisions, not only beauty shots.",
      },
      {
        title: "A calm reading order",
        desc: "Title, one paragraph, images. Mangaluru clients hiring a studio do not want a puzzle.",
      },
      {
        title: "Your name, not a template's",
        desc: "The interface can be quiet. It should not look like every other portfolio theme.",
      },
    ],
    whyTitleLead: "Portfolio",
    whyTitleAccent: "websites in Mangaluru",
    whyBody:
      "A portfolio in Mangaluru fails when it hides the author. We put the practice and the work in one system. Portfolio website development in Mangaluru includes how you will add the next case without starting over. That conversation can happen at Kotichennaya Circle.",
    whyPoints: [
      "Projects written so a client understands the job",
      "A distinct but quiet interface",
      "Contact tied to the kind of commission you want",
      "Update path agreed at the start",
    ],
    offerTitleLead: "Showcase",
    offerTitleRest: "sites in",
    offerTitleAccent: "Mangaluru",
    offerBody: "The portfolio build we scope.",
    offers: [
      { title: "Selection", desc: "Which projects lead, and which stay in the archive." },
      { title: "Case layout", desc: "A repeatable page for images and a short account of the work." },
      { title: "Practice page", desc: "Who you are and how a project starts." },
      { title: "Performance", desc: "Images that look sharp and still load." },
      { title: "Handover", desc: "How to publish the next project." },
    ],
    faqs: [
      {
        question: "Can two partners share one portfolio website?",
        answer: "Yes, if the work is presented as one practice. Separate practices usually need a clear split. We will recommend the structure.",
      },
      {
        question: "Do you write the project text?",
        answer: "We can draft it from your notes. You correct the facts. A portfolio with wrong project details is worse than no site.",
      },
      {
        question: "Can clients download a PDF?",
        answer: "If you want a sheet per project, we can add it. It is listed in the scope so it is not forgotten.",
      },
      {
        question: "Is this a personal blog?",
        answer: "No. A portfolio is selected work. A blog can be added later if you will actually write it.",
      },
      {
        question: "Where do we review?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: webHub,
    related: [portfolioMangalore, landingMangaluru],
  }),
  page({
    slug: "landing-page-design-services-mangalore",
    serviceName: "Landing Page Design Services in Mangalore",
    title: "Landing Page Design Services in Mangalore | Dark Media",
    description:
      "Landing page design services in Mangalore. One page, one offer, and one action, designed and built for ads or a launch.",
    keywords: [
      "landing page design services in Mangalore",
      "landing page designers Mangalore",
      "landing page development Mangalore",
      "campaign landing page Mangalore",
      "sales page design Mangalore",
      "Mangalore landing page",
    ],
    badgeText: "Mangalore",
    titleLine1: "Landing Page Design",
    titleLine2: "Services in Mangalore",
    intro:
      "Landing page design services in Mangalore are for a single offer: an admission date, a treatment, a product, a hire, an event. Dark Media Tech designs and builds that page in Mangalore. The visitor should not have to hunt the rest of the website to understand the deal. One headline, the proof, and one action.",
    cards: [
      {
        title: "Pages for ads",
        desc: "If you are paying for a click, the page must repeat the promise in the ad. We design them together when both are in scope.",
      },
      {
        title: "Pages for a season",
        desc: "A Mangalore campaign with an end date needs a page that can be switched off without breaking the main site.",
      },
      {
        title: "A form the office will answer",
        desc: "We ask only for what your team will use when they call back.",
      },
    ],
    whyTitleLead: "Landing pages",
    whyTitleAccent: "in Mangalore",
    whyBody:
      "Landing page designers in Mangalore sometimes add every menu from the main site. That sends people away. We keep the page on the offer. Landing page design services in Mangalore from this studio include the build and a check on a phone. Reviews are at Kotichennaya Circle.",
    whyPoints: [
      "One action, written down before design",
      "Matched to the ad or the poster that sends people there",
      "Fast on a phone",
      "Measured by enquiries, not by how busy it looks",
    ],
    offerTitleLead: "Campaign",
    offerTitleRest: "pages in",
    offerTitleAccent: "Mangalore",
    offerBody: "What a landing page project covers.",
    offers: [
      { title: "Offer structure", desc: "Headline, proof, detail, and the action, in that order." },
      { title: "Design", desc: "A page that can be read without the main navigation pulling people out." },
      { title: "Build", desc: "A stable address you can put in an ad or a QR code." },
      { title: "Form or call", desc: "The response path your Mangalore team will actually handle." },
      { title: "A switch-off plan", desc: "What happens when the offer ends." },
    ],
    faqs: [
      {
        question: "When do we need landing page design services in Mangalore?",
        answer: "When a campaign has one offer. Dark Media Tech builds that page. If you need the whole company explained, you need a website, not a landing page.",
      },
      {
        question: "Can it live on our existing site?",
        answer: "Yes. It can be a path on your domain so the brand stays yours.",
      },
      {
        question: "Do you write the page?",
        answer: "We draft it from the offer. You approve every claim before it goes live.",
      },
      {
        question: "Will you connect it to ads?",
        answer: "Google Ads or Meta ads can be scoped with the page. They are not automatically included.",
      },
      {
        question: "Where is the studio?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: webHub,
    related: [landingMangaluru, googleAdsMangalore],
  }),
  page({
    slug: "landing-page-design-services-mangaluru",
    serviceName: "Landing Page Design Services in Mangaluru",
    title: "Landing Page Design Services in Mangaluru | Dark Media",
    description:
      "Landing page design services in Mangaluru. A single page for one local offer, built so the enquiry is obvious.",
    keywords: [
      "landing page design services in Mangaluru",
      "landing page design Mangaluru",
      "one page website Mangaluru",
      "campaign page design Mangaluru",
      "lead generation page Mangaluru",
      "Mangaluru landing page designers",
    ],
    badgeText: "Mangaluru",
    titleLine1: "Landing Page Design",
    titleLine2: "Services in Mangaluru",
    intro:
      "Intakes, festivals, and new services in Mangaluru do not always need a new website. They need a page. Landing page design services in Mangaluru give that offer a headline and a next step. Dark Media Tech designs and builds it at Nandi Gudda. The rest of the company can stay where it is.",
    cards: [
      {
        title: "Admissions and appointments",
        desc: "A date, a requirement, and a form. Parents and patients should not browse a whole institution to apply or book.",
      },
      {
        title: "Local launches",
        desc: "A new branch or a new product in Mangaluru gets its own explanation and its own end date.",
      },
      {
        title: "QR and WhatsApp entry",
        desc: "People may arrive from a poster or a chat. The page has to make sense with no other context.",
      },
    ],
    whyTitleLead: "Landing pages",
    whyTitleAccent: "in Mangaluru",
    whyBody:
      "One-page sites in Mangaluru fail when they try to be the whole company. We refuse that. Landing page design services in Mangaluru stay on one job. If the job grows into a full site, we scope that next. The review is at Kotichennaya Circle.",
    whyPoints: [
      "Written for someone with no prior context",
      "One form or one phone action",
      "Fast enough for a paid click or a QR scan",
      "Easy to retire when the offer ends",
    ],
    offerTitleLead: "Single",
    offerTitleRest: "pages in",
    offerTitleAccent: "Mangaluru",
    offerBody: "The landing page engagement.",
    offers: [
      { title: "Message", desc: "The sentence the page exists to say." },
      { title: "Layout", desc: "Proof and detail under that sentence, not beside five other offers." },
      { title: "Build and address", desc: "A URL you can share." },
      { title: "Tracking basics", desc: "A way to know the form was used, if you want it." },
      { title: "Handover", desc: "Who turns the page off, and when." },
    ],
    faqs: [
      {
        question: "Is a landing page the same as a website?",
        answer: "No. Landing page design services in Mangaluru produce one page for one offer. A website explains the business. Dark Media Tech builds both, as different projects.",
      },
      {
        question: "Can we have two offers on one page?",
        answer: "Usually no. Two offers split the action. We will split them into two pages if both matter.",
      },
      {
        question: "How fast can it launch?",
        answer: "A focused page can be quick once the offer and the proof are ready. We set the date with the scope.",
      },
      {
        question: "Do you design the ad as well?",
        answer: "We can. The ad and the page should use the same promise. That is a separate line if you need the creative.",
      },
      {
        question: "Where are you?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: webHub,
    related: [landingMangalore, metaAdsMangaluru],
  }),
  page({
    slug: "website-redesign-services-mangalore",
    serviceName: "Website Redesign Services in Mangalore",
    title: "Website Redesign Services in Mangalore | Dark Media",
    description:
      "Website redesign services in Mangalore. We keep the pages that already bring enquiries and rebuild the parts that are slow or unclear.",
    keywords: [
      "website redesign services in Mangalore",
      "website redesign company Mangalore",
      "website revamp Mangalore",
      "redesign my website Mangalore",
      "website redesign and development Mangalore",
      "Mangalore website redesign",
    ],
    badgeText: "Mangalore",
    titleLine1: "Website Redesign Services",
    titleLine2: "in Mangalore",
    intro:
      "Website redesign services in Mangalore start with the site you already have. Dark Media Tech looks at what still brings calls and what people cannot use. We are in Mangalore. A redesign is not a new coat of colour on the same confusion. We keep the addresses and the pages that work, and we replace the navigation, the clutter, and the parts nobody can edit.",
    cards: [
      {
        title: "Slow or dated sites",
        desc: "If the business has changed and the site has not, the redesign follows the current offer.",
      },
      {
        title: "Sites that are hard to edit",
        desc: "A Mangalore team that waits on a developer for every sentence needs a structure they can live with.",
      },
      {
        title: "Search you do not want to lose",
        desc: "We note the pages that already get visits before we move anything.",
      },
    ],
    whyTitleLead: "Website redesign",
    whyTitleAccent: "in Mangalore",
    whyBody:
      "Redesign companies in Mangalore sometimes throw the old site away. That can throw the enquiries away with it. We make a list: keep, rewrite, remove. Website redesign services in Mangalore from this studio include design and development. You review the new structure at Kotichennaya Circle before we build it.",
    whyPoints: [
      "A keep-or-replace list before design",
      "Important addresses preserved or redirected",
      "Mobile layout redesigned, not squeezed",
      "Editing path improved if that was the pain",
    ],
    offerTitleLead: "Redesigns",
    offerTitleRest: "for",
    offerTitleAccent: "Mangalore",
    offerBody: "How a redesign project runs.",
    offers: [
      { title: "Review of the current site", desc: "What visitors do, what is broken, and what still earns the call." },
      { title: "New structure", desc: "Pages and menus for the business as it is now." },
      { title: "Design and build", desc: "The new interface, developed, not left as a picture." },
      { title: "Content move", desc: "True copy brought over. Outdated copy left behind." },
      { title: "Launch checks", desc: "Forms, redirects, and the pages you cannot afford to lose." },
    ],
    faqs: [
      {
        question: "Will a redesign hurt our Google ranking?",
        answer: "It can, if addresses change without a plan. Website redesign services in Mangalore from Dark Media Tech include that plan. We do not promise rankings will rise just because the site looks newer.",
      },
      {
        question: "Can you redesign a site built by someone else?",
        answer: "Yes. We need access. If the old system cannot be edited, a rebuild is the honest scope.",
      },
      {
        question: "Do we have to rewrite everything?",
        answer: "No. We keep what is clear and rewrite what is not.",
      },
      {
        question: "How do you price it?",
        answer: "By the pages that change and whether the system underneath must change too.",
      },
      {
        question: "Where do we meet?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: webHub,
    related: [redesignMangaluru, maintenanceMangalore],
  }),
  page({
    slug: "website-redesign-services-mangaluru",
    serviceName: "Website Redesign Services in Mangaluru",
    title: "Website Redesign Services in Mangaluru | Dark Media",
    description:
      "Website redesign services in Mangaluru. A new structure for an outdated site, built by the studio at Kotichennaya Circle.",
    keywords: [
      "website redesign services in Mangaluru",
      "website redesign Mangaluru",
      "website revamp Mangaluru",
      "redesign website Mangaluru",
      "website makeover Mangaluru",
      "Mangaluru website redesign company",
    ],
    badgeText: "Mangaluru",
    titleLine1: "Website Redesign Services",
    titleLine2: "in Mangaluru",
    intro:
      "Many Mangaluru sites were last touched when the menu and the phone number were different. Website redesign services in Mangaluru bring the site back in line with the business. Dark Media Tech does that from Nandi Gudda. We sit with the current site, mark what a visitor cannot find, and design the replacement around those gaps.",
    cards: [
      {
        title: "Institutions with years of pages",
        desc: "Colleges and clinics accumulate PDFs. The redesign decides what becomes a page and what is retired.",
      },
      {
        title: "Family businesses with a new offer",
        desc: "The old site sells what you used to do. The new one has to lead with what you do now.",
      },
      {
        title: "Phone use that the old design ignored",
        desc: "If the current site is a desktop page shrunk down, the redesign starts at phone width.",
      },
    ],
    whyTitleLead: "Redesign",
    whyTitleAccent: "in Mangaluru",
    whyBody:
      "A revamp in Mangaluru is wasted if it only changes colour. We change the order of information. Website redesign services in Mangaluru include the build and the move of the content worth keeping. You approve that list at Kotichennaya Circle.",
    whyPoints: [
      "Current site reviewed before a new look is drawn",
      "Content sorted into keep, rewrite, and remove",
      "Phone layout designed first",
      "Redirects planned for pages people already use",
    ],
    offerTitleLead: "Rebuilds",
    offerTitleRest: "in",
    offerTitleAccent: "Mangaluru",
    offerBody: "The redesign work we quote.",
    offers: [
      { title: "Gap list", desc: "What the current site fails to answer." },
      { title: "New map", desc: "Pages for the offers you want found." },
      { title: "Interface", desc: "A calmer design that can hold real text." },
      { title: "Development", desc: "The new site, with the old addresses handled." },
      { title: "After launch", desc: "A short period of fixes once staff and customers use it." },
    ],
    faqs: [
      {
        question: "Can you redesign without taking the site offline for weeks?",
        answer: "Yes. We build the new site beside the old one and switch when it is ready. Dark Media Tech plans that switch in Mangaluru.",
      },
      {
        question: "What if we do not have the old login?",
        answer: "We need access to the domain and the content. If the previous vendor will not hand it over, that delay is part of the timeline.",
      },
      {
        question: "Will the redesign include new photography?",
        answer: "Only if scoped. We can design around the photos you have and mark the slots that are weak.",
      },
      {
        question: "Is SEO included?",
        answer: "Protecting existing addresses is part of the redesign. An ongoing SEO programme is separate.",
      },
      {
        question: "Where is the office?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: webHub,
    related: [redesignMangalore, seoCompanyMangaluru],
  }),
  page({
    slug: "website-maintenance-services-mangalore",
    serviceName: "Website Maintenance Services in Mangalore",
    title: "Website Maintenance Services in Mangalore | Dark Media",
    description:
      "Website maintenance services in Mangalore. Updates, small content changes, and fixes after launch, from the studio that can also build the site.",
    keywords: [
      "website maintenance services in Mangalore",
      "website maintenance company Mangalore",
      "website support Mangalore",
      "website updates Mangalore",
      "AMC for website Mangalore",
      "Mangalore website maintenance",
    ],
    badgeText: "Mangalore",
    titleLine1: "Website Maintenance Services",
    titleLine2: "in Mangalore",
    intro:
      "Website maintenance services in Mangalore are what happens after the launch excitement ends. A form breaks, a price changes, a certificate expires, a page needs a new paragraph. Dark Media Tech handles that from Mangalore. Maintenance is a named list of updates, not a promise that nothing will ever go wrong. If we built the site, we already know it. If we did not, we look before we quote.",
    cards: [
      {
        title: "Small changes with a reply",
        desc: "The Mangalore office should know who to message and how long a text change takes.",
      },
      {
        title: "Fixes before they become an outage",
        desc: "Broken links, failed forms, and updates the platform needs. We do the ones in the agreement.",
      },
      {
        title: "A limit, written down",
        desc: "A new section is a project. Maintenance is not an open door for a redesign.",
      },
    ],
    whyTitleLead: "Maintenance",
    whyTitleAccent: "in Mangalore",
    whyBody:
      "Website support in Mangalore is often sold as a vague annual contract. We list what a month includes. Website maintenance services in Mangalore from this studio can sit with the team that built the site. You can call the studio at Kotichennaya Circle for the changes in that list.",
    whyPoints: [
      "A written list of included changes",
      "New features quoted outside the plan",
      "Forms and key pages checked",
      "The same city, so a review is possible",
    ],
    offerTitleLead: "Care",
    offerTitleRest: "after launch in",
    offerTitleAccent: "Mangalore",
    offerBody: "Maintenance we will put in an agreement.",
    offers: [
      { title: "Content edits", desc: "Text, images, and prices within the agreed count." },
      { title: "Fix queue", desc: "Broken forms, links, and layout bugs." },
      { title: "Platform updates", desc: "The updates required to keep the site we built secure, as named in the plan." },
      { title: "A monthly note", desc: "What changed, in a few lines." },
      { title: "A path for bigger work", desc: "When a request is a new page, we say so and quote it." },
    ],
    faqs: [
      {
        question: "What is included in website maintenance services in Mangalore?",
        answer: "The edits and fixes named in the plan. Dark Media Tech does not include unlimited design or new features under the word maintenance.",
      },
      {
        question: "Do you maintain sites you did not build?",
        answer: "Sometimes, after we see how they are built. We will not sign a plan for a system we cannot safely edit.",
      },
      {
        question: "How fast are content changes?",
        answer: "Small text changes are usually quick. We agree the response time in the plan rather than promising instant edits.",
      },
      {
        question: "Is hosting included?",
        answer: "Only if the quote says so. Many clients keep hosting in their own account. We will tell you what we need access to.",
      },
      {
        question: "Where are you?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: webHub,
    related: [maintenanceMangaluru, redesignMangalore],
  }),
  page({
    slug: "website-maintenance-services-mangaluru",
    serviceName: "Website Maintenance Services in Mangaluru",
    title: "Website Maintenance Services in Mangaluru | Dark Media",
    description:
      "Website maintenance services in Mangaluru. Planned edits and fixes for a live site, handled from our Nandi Gudda studio.",
    keywords: [
      "website maintenance services in Mangaluru",
      "website maintenance Mangaluru",
      "website support services Mangaluru",
      "website AMC Mangaluru",
      "update website Mangaluru",
      "Mangaluru website care",
    ],
    badgeText: "Mangaluru",
    titleLine1: "Website Maintenance Services",
    titleLine2: "in Mangaluru",
    intro:
      "After a website launches in Mangaluru, the business keeps changing. Fees, doctors, courses, and menus move. Website maintenance services in Mangaluru are how those facts stay true online. Dark Media Tech does the agreed edits from Nandi Gudda. We would rather update five important lines than redesign the footer every week.",
    cards: [
      {
        title: "Facts that go stale",
        desc: "A wrong phone number or a closed course is a maintenance job with a real cost. Those get priority.",
      },
      {
        title: "Staff who should not need a developer",
        desc: "Some edits belong in a simple admin. We set that up during the build, and maintenance covers the rest.",
      },
      {
        title: "A person, not a ticket void",
        desc: "You write to the studio. We reply with what will change and when.",
      },
    ],
    whyTitleLead: "Site care",
    whyTitleAccent: "in Mangaluru",
    whyBody:
      "Maintenance in Mangaluru works when the boundary is clear. A sentence is included. A new campaign site is not. Website maintenance services in Mangaluru from Dark Media Tech use that boundary. The studio is at Kotichennaya Circle if you want to point at the page together.",
    whyPoints: [
      "Priority for wrong contact details and broken forms",
      "A monthly allowance of edits, written down",
      "Bigger requests quoted instead of quietly absorbed",
      "Notes so you can see what was done",
    ],
    offerTitleLead: "Updates",
    offerTitleRest: "for",
    offerTitleAccent: "Mangaluru",
    offerBody: "The care plan we offer.",
    offers: [
      { title: "Edit slots", desc: "A set number of content changes each month." },
      { title: "Break-fix", desc: "Pages or forms that stop working." },
      { title: "Housekeeping", desc: "The updates a site we built needs to stay current." },
      { title: "Small improvements", desc: "A heading or a section tweak inside the allowance." },
      { title: "Escalation", desc: "A separate quote when the ask is really a new feature." },
    ],
    faqs: [
      {
        question: "Do website maintenance services in Mangaluru include redesign?",
        answer: "No. Maintenance keeps the current site accurate and working. A redesign is a project. Dark Media Tech will tell you which one you are asking for.",
      },
      {
        question: "Can we pause the plan?",
        answer: "Yes. The agreement should say the notice period. We do not lock you into a plan you cannot leave.",
      },
      {
        question: "Who approves a change?",
        answer: "A named person on your side. We do not take conflicting edits from five inboxes.",
      },
      {
        question: "What if the site goes down?",
        answer: "We respond to faults covered by the plan. Hosting outages at a provider we do not control are reported, not magically fixed.",
      },
      {
        question: "Where do we contact you?",
        answer: "The studio at Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002, or the contact page.",
      },
    ],
    hub: webHub,
    related: [maintenanceMangalore, businessSiteMangaluru],
  }),
  page({
    slug: "erp-software-development-mangalore",
    serviceName: "ERP Software Development Company in Mangalore",
    title: "ERP Software Development Company in Mangalore | Dark Media",
    description:
      "ERP software development company in Mangalore. Custom tools for orders, stock, and billing status. We do not resell a branded ERP suite.",
    keywords: [
      "ERP software development company in Mangalore",
      "ERP developers in Mangalore",
      "ERP software company Mangalore",
      "custom ERP Mangalore",
      "business ERP Mangalore",
      "Mangalore ERP development",
    ],
    badgeText: "Mangalore",
    titleLine1: "ERP Software Development",
    titleLine2: "Company in Mangalore",
    intro:
      "An ERP software development company in Mangalore should be honest about the word ERP. Dark Media Tech does not resell a giant suite and call it implemented. We build the operational system a Mangalore business actually runs: orders, stock, billing status, and a branch list, in the browser. If a packaged product already fits, we will say so. If your staff are stuck between spreadsheets, we scope the screens that replace them.",
    cards: [
      {
        title: "Orders and stock",
        desc: "Who asked for what, what is available, and what has left. Those three lists solve more than a module diagram.",
      },
      {
        title: "More than one desk",
        desc: "When two people edit the same sheet, a record with roles is the point of the software.",
      },
      {
        title: "A first version that is small",
        desc: "We ship the morning workflow. Extra modules wait until that version is used.",
      },
    ],
    whyTitleLead: "Operational software",
    whyTitleAccent: "in Mangalore",
    whyBody:
      "ERP developers in Mangalore are sometimes asked to copy a large product. We will not fake that. Custom ERP software development in Mangalore, for us, means the workflows in the quote. You review them at Kotichennaya Circle with the people who will use the screens.",
    whyPoints: [
      "Workflow written before modules are named",
      "Browser-based, so branches need no special install",
      "Roles for the clerk and the owner",
      "No claim that we sell SAP, Oracle, or a similar suite",
    ],
    offerTitleLead: "Systems",
    offerTitleRest: "we build in",
    offerTitleAccent: "Mangalore",
    offerBody: "The ERP-shaped work this studio takes.",
    offers: [
      { title: "Process map", desc: "The steps from enquiry or order to done." },
      { title: "Core records", desc: "Customers, items, and status, without fifty unused fields." },
      { title: "Staff screens", desc: "The list each role opens in the morning." },
      { title: "A website connection", desc: "Enquiries or orders from the public site, if that is in scope." },
      { title: "A second release", desc: "The gaps the first month reveals, quoted when you know them." },
    ],
    faqs: [
      {
        question: "Do you implement branded ERP products?",
        answer: "No. An ERP software development company in Mangalore, as we practice it, builds custom operational software. Dark Media Tech does not implement SAP or similar packages.",
      },
      {
        question: "How do you price it?",
        answer: "By the workflows and screens. A stock list and a full multi-branch system are different projects.",
      },
      {
        question: "Can it replace our spreadsheet?",
        answer: "Often that is the goal. We move the columns people actually use and leave the rest.",
      },
      {
        question: "Will you train the staff?",
        answer: "We walk through the screens with the people who will use them. A long training programme is only included if it is quoted.",
      },
      {
        question: "Where are you based?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: webHub,
    related: [erpMangaluru, crmMangalore],
  }),
  page({
    slug: "erp-software-development-mangaluru",
    serviceName: "ERP Software Development Company in Mangaluru",
    title: "ERP Software Development Company in Mangaluru | Dark Media",
    description:
      "ERP software development company in Mangaluru. We build custom order, stock, and status systems for local teams. Not a resold ERP brand.",
    keywords: [
      "ERP software development company in Mangaluru",
      "ERP software Mangaluru",
      "custom ERP development Mangaluru",
      "ERP developers Mangaluru",
      "business management software Mangaluru",
      "Mangaluru ERP company",
    ],
    badgeText: "Mangaluru",
    titleLine1: "ERP Software Development",
    titleLine2: "Company in Mangaluru",
    intro:
      "Distributors, campuses, and family firms in Mangaluru often run the business on WhatsApp plus a sheet. An ERP software development company in Mangaluru should replace the sheet, not sell a logo of a platform. Dark Media Tech builds that custom system from Nandi Gudda. Orders, stock, and status live in one place. People get a login that matches their job.",
    cards: [
      {
        title: "Branches that share one record",
        desc: "A counter in the city and a store elsewhere should not keep separate truths. The software holds one.",
      },
      {
        title: "Status the owner can read",
        desc: "A short list of what is pending beats a dashboard of charts nobody opens.",
      },
      {
        title: "Room to stop",
        desc: "If the first release is enough, we do not push a second module to make the project sound bigger.",
      },
    ],
    whyTitleLead: "Custom operations",
    whyTitleAccent: "software in Mangaluru",
    whyBody:
      "Software companies in Mangaluru use ERP to mean very different things. We mean the operational core you described. An ERP software development company in Mangaluru that is honest will also tell you when a smaller CRM or a website form is the real need. We do that at Kotichennaya Circle.",
    whyPoints: [
      "Built around your steps, not a generic module list",
      "One record shared by the desks that need it",
      "Plain screens for daily use",
      "Packaged ERP brands left to their own vendors",
    ],
    offerTitleLead: "Operational",
    offerTitleRest: "systems in",
    offerTitleAccent: "Mangaluru",
    offerBody: "What we scope under this work.",
    offers: [
      { title: "Discovery", desc: "A day in the workflow, written down." },
      { title: "Records and roles", desc: "Who creates an order, who changes stock, who can see money status." },
      { title: "The first release", desc: "The smallest system that removes the double entry." },
      { title: "Imports", desc: "A path for the current sheet, if the data is clean enough." },
      { title: "Care", desc: "Fixes after people start using it." },
    ],
    faqs: [
      {
        question: "Is this a ready-made ERP?",
        answer: "No. ERP software development in Mangaluru from Dark Media Tech is custom. We are not a reseller of a named ERP product.",
      },
      {
        question: "Can accounts and inventory be included?",
        answer: "The status of bills and stock can be, if that is the workflow. A full statutory accounting product is a different kind of software and we will say if you need a specialist.",
      },
      {
        question: "How long is a first version?",
        answer: "A narrow workflow can be weeks after the process is agreed. A multi-role system takes longer. The quote has the timeline.",
      },
      {
        question: "Do you work on site?",
        answer: "Reviews can be at our studio or at your office in Mangaluru when seeing the work helps.",
      },
      {
        question: "Where is the company?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: webHub,
    related: [erpMangalore, educationMangaluru],
  }),
  page({
    slug: "education-software-development-mangalore",
    serviceName: "Education Software Development in Mangalore",
    title: "Education Software Development in Mangalore | Dark Media",
    description:
      "Education software development in Mangalore. Admissions, course lists, and student status tools for colleges and training centres.",
    keywords: [
      "education software development in Mangalore",
      "education software company Mangalore",
      "college software Mangalore",
      "school management software Mangalore",
      "admission software Mangalore",
      "edtech development Mangalore",
    ],
    badgeText: "Mangalore",
    titleLine1: "Education Software Development",
    titleLine2: "in Mangalore",
    intro:
      "Education software development in Mangalore usually starts at the admission desk, not in a classroom of features. Dark Media Tech builds the public course pages and the tools behind them: an application, a missing-document request, a status a parent can check. We are in Mangalore. We do not ship a full campus suite and pretend every timetable is included. The quote names the desks we are replacing.",
    cards: [
      {
        title: "Admissions",
        desc: "Apply once, see the status, send the missing file. The office sees a queue instead of an inbox.",
      },
      {
        title: "Course information",
        desc: "A page a parent can read, fed by records the college can update.",
      },
      {
        title: "Training centres",
        desc: "Batches, seats, and a simple register for a Mangalore institute that is not a university.",
      },
    ],
    whyTitleLead: "Education software",
    whyTitleAccent: "in Mangalore",
    whyBody:
      "Education developers in Mangalore are often asked for attendance, fees, exams, and an app in one breath. We split them. Education software development in Mangalore from this studio starts with the process that hurts this season. You can test it at Kotichennaya Circle with the admission staff.",
    whyPoints: [
      "Scoped around one desk, then extended if needed",
      "Parent-facing pages written in plain language",
      "Staff screens that match the paper process",
      "No unused modules added to sound complete",
    ],
    offerTitleLead: "Tools",
    offerTitleRest: "for campuses in",
    offerTitleAccent: "Mangalore",
    offerBody: "Education software we actually scope.",
    offers: [
      { title: "Application flow", desc: "Submit, review, and a status page." },
      { title: "Course catalogue", desc: "Public pages the institute can correct." },
      { title: "Staff queue", desc: "Who owns the next application." },
      { title: "Document collection", desc: "A request for what is missing, instead of a phone call." },
      { title: "A later module", desc: "Fees or batches only after the first flow is live." },
    ],
    faqs: [
      {
        question: "Do you build a complete college ERP?",
        answer: "Not as a boxed product. Education software development in Mangalore from Dark Media Tech is the workflow you need this year. A full campus system would be a much larger scope, and we will say so.",
      },
      {
        question: "Can parents use it on a phone?",
        answer: "Yes. Application pages are designed for phones.",
      },
      {
        question: "Will it replace our website?",
        answer: "It can sit with the website. The public pages and the login are planned so they do not block each other.",
      },
      {
        question: "How is student data handled?",
        answer: "Access is limited to the roles in the scope. We do not put applicant data on a public page.",
      },
      {
        question: "Where do we review it?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: webHub,
    related: [educationMangaluru, erpMangalore],
  }),
  page({
    slug: "education-software-development-mangaluru",
    serviceName: "Education Software Development in Mangaluru",
    title: "Education Software Development in Mangaluru | Dark Media",
    description:
      "Education software development in Mangaluru. Application tracking and course pages for colleges and training centres in the city.",
    keywords: [
      "education software development in Mangaluru",
      "college software Mangaluru",
      "institute management software Mangaluru",
      "admission portal Mangaluru",
      "education app development Mangaluru",
      "Mangaluru education software",
    ],
    badgeText: "Mangaluru",
    titleLine1: "Education Software Development",
    titleLine2: "in Mangaluru",
    intro:
      "Colleges and training centres in Mangaluru still collect applications in email and paper. Education software development in Mangaluru gives that queue a screen. Dark Media Tech builds it from our studio in the city. Families see a status. Staff see who is waiting. We do not add an exam engine or a bus tracker unless that is the problem you hired us to solve.",
    cards: [
      {
        title: "One intake at a time",
        desc: "The software is ready for the window you are about to open, not for every future course.",
      },
      {
        title: "Counsellors and a shared list",
        desc: "Two counsellors should not unknowingly call the same parent. The record shows who owns it.",
      },
      {
        title: "A public site that matches the portal",
        desc: "Course names on the website and in the application have to be the same names.",
      },
    ],
    whyTitleLead: "Campus tools",
    whyTitleAccent: "in Mangaluru",
    whyBody:
      "Education software in Mangaluru fails when it is demonstrated to management and never opened by the desk. We design with the desk. Education software development in Mangaluru includes that review at Kotichennaya Circle or on your campus when the queue is easier to see there.",
    whyPoints: [
      "Built with the people who process applications",
      "Status a family can understand",
      "Course names kept consistent with the website",
      "Extra modules left out until they are needed",
    ],
    offerTitleLead: "Education",
    offerTitleRest: "systems in",
    offerTitleAccent: "Mangaluru",
    offerBody: "The builds we quote for institutes.",
    offers: [
      { title: "Intake workflow", desc: "From the public form to a decision." },
      { title: "Counsellor screens", desc: "A list, a note, and a next step." },
      { title: "Applicant login", desc: "Status and a place to upload what is missing." },
      { title: "Basic reports", desc: "Counts the principal already asks for each week." },
      { title: "Seasonal care", desc: "Support through the intake, when the volume is real." },
    ],
    faqs: [
      {
        question: "Is education software development in Mangaluru only for large colleges?",
        answer: "No. Training centres and smaller institutes are often a better fit for a narrow tool. Dark Media Tech scopes the size you are.",
      },
      {
        question: "Can you import last year's sheet?",
        answer: "If it is consistent, yes. A messy export may need cleanup, and we will say that before relying on it.",
      },
      {
        question: "Do you build learning apps with video classes?",
        answer: "Only if that is a separate, explicit scope. The usual project is admissions and course information, not a full learning platform.",
      },
      {
        question: "Who owns the data?",
        answer: "The institute. We build the tool. We do not keep a copy of applicant data for our own use.",
      },
      {
        question: "Where is the studio?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: webHub,
    related: [educationMangalore, crmMangaluru],
  }),
  page({
    slug: "ai-automation-company-mangalore",
    serviceName: "AI Automation Company in Mangalore",
    title: "AI Automation Company in Mangalore | Dark Media",
    description:
      "AI automation company in Mangalore. We automate repetitive office steps, with a person still approving anything that reaches a customer.",
    keywords: [
      "AI automation company in Mangalore",
      "AI automation services Mangalore",
      "business automation Mangalore",
      "AI company in Mangalore",
      "workflow automation Mangalore",
      "Mangalore AI automation",
    ],
    badgeText: "Mangalore",
    titleLine1: "AI Automation Company",
    titleLine2: "in Mangalore",
    intro:
      "An AI automation company in Mangalore should start with a task a person repeats, not with a model. Dark Media Tech looks at the enquiry that gets copied into a sheet, the reply that is always the same, the file that is renamed by hand. We are in Mangalore. If a simple rule can do it, we will not wrap it in AI. If language is the messy part, we can draft and route, and a person still approves what a customer sees.",
    cards: [
      {
        title: "Enquiry sorting",
        desc: "Messages grouped by service so the right person in Mangalore sees them first.",
      },
      {
        title: "Drafts, not unsupervised replies",
        desc: "A proposed answer the staff can send. We do not let a model speak for your business alone.",
      },
      {
        title: "Steps around the website",
        desc: "A form, a sheet, and an inbox joined so nobody retypes the same lead.",
      },
    ],
    whyTitleLead: "Automation",
    whyTitleAccent: "in Mangalore",
    whyBody:
      "AI companies in Mangalore sometimes promise to replace a department. We automate a step and measure the time it returns. An AI automation company in Mangalore, in our practice, keeps a human on anything public. You can watch the workflow at Kotichennaya Circle before it runs.",
    whyPoints: [
      "One repeated task, named in the scope",
      "A person approves customer-facing output",
      "Plain rules used when AI is unnecessary",
      "No claim that staff can be removed",
    ],
    offerTitleLead: "Automation",
    offerTitleRest: "we set up in",
    offerTitleAccent: "Mangalore",
    offerBody: "Practical AI and workflow work.",
    offers: [
      { title: "Task audit", desc: "Which step is worth automating and which is fine as it is." },
      { title: "Routing", desc: "Enquiries and files sent to the right queue." },
      { title: "Drafting help", desc: "First drafts for replies or summaries a person edits." },
      { title: "A log", desc: "What the automation did, so you can correct it." },
      { title: "A stop switch", desc: "You can turn it off when it is wrong." },
    ],
    faqs: [
      {
        question: "What does an AI automation company in Mangalore deliver?",
        answer: "A working step in your process, with a person still in charge of customer messages. Dark Media Tech builds that from Mangalore. We do not sell a general chatbot and call it transformation.",
      },
      {
        question: "Will our data be used to train a public model?",
        answer: "We design the flow so customer records are not casually pasted into a public chat. The tools and the access are named in the scope.",
      },
      {
        question: "Can you automate our whole office?",
        answer: "No. We start with one painful repeat. A whole-office claim is not a scope we will sign.",
      },
      {
        question: "Do you build the website too?",
        answer: "Yes, as a separate project. Automation often sits next to the enquiry form.",
      },
      {
        question: "Where are you?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: webHub,
    related: [aiMangaluru, crmMangalore],
  }),
  page({
    slug: "ai-automation-company-mangaluru",
    serviceName: "AI Automation Company in Mangaluru",
    title: "AI Automation Company in Mangaluru | Dark Media",
    description:
      "AI automation company in Mangaluru. Repetitive office work drafted and routed from our studio, with staff approval before anything is sent.",
    keywords: [
      "AI automation company in Mangaluru",
      "AI services Mangaluru",
      "business process automation Mangaluru",
      "AI solutions Mangaluru",
      "workflow automation Mangaluru",
      "Mangaluru AI company",
    ],
    badgeText: "Mangaluru",
    titleLine1: "AI Automation Company",
    titleLine2: "in Mangaluru",
    intro:
      "Offices in Mangaluru lose hours on sorting, copying, and rewriting the same update. An AI automation company in Mangaluru should give those hours back without letting a model invent a policy. Dark Media Tech sets up that help from Nandi Gudda. The automation prepares. Your staff decide. If the task is only a formula, we build the formula.",
    cards: [
      {
        title: "Front-desk triage",
        desc: "Course questions, appointment requests, and supplier mails landing in different lists.",
      },
      {
        title: "Summaries for a busy owner",
        desc: "A short note of what came in, which a person can trust because the source is attached.",
      },
      {
        title: "Guards on the output",
        desc: "Prices, medical claims, and admission promises do not go out unreviewed.",
      },
    ],
    whyTitleLead: "AI automation",
    whyTitleAccent: "in Mangaluru",
    whyBody:
      "Automation in Mangaluru is useful when the exception is still handled by a person. We design for the exception. An AI automation company in Mangaluru that hides errors inside a chat window is not doing you a favour. We log the action. The studio is at Kotichennaya Circle.",
    whyPoints: [
      "Human approval on anything a customer receives",
      "Sources kept with the summary",
      "Rules first, models only where language is the problem",
      "A way to switch the automation off",
    ],
    offerTitleLead: "Assisted",
    offerTitleRest: "workflows in",
    offerTitleAccent: "Mangaluru",
    offerBody: "The automation projects we take.",
    offers: [
      { title: "Pick the step", desc: "The repeat that costs the most time this month." },
      { title: "Build the handoff", desc: "From inbox or form into a queue." },
      { title: "Draft assistance", desc: "A suggested reply the staff member edits." },
      { title: "Review", desc: "A week of watching what it got wrong." },
      { title: "Tighten", desc: "The second version, after real messages have passed through." },
    ],
    faqs: [
      {
        question: "Are you an AI automation company in Mangaluru with an office?",
        answer: "Yes. Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002. The work is practical automation, not a research lab.",
      },
      {
        question: "Can the automation talk to customers by itself?",
        answer: "We do not recommend that for claims, prices, or admissions. Drafts can be automatic. Sending them should stay with your team unless you explicitly accept the risk and the scope says so.",
      },
      {
        question: "What do you need to start?",
        answer: "Examples of the repeated task and access to the inbox, sheet, or form involved.",
      },
      {
        question: "Will this replace employees?",
        answer: "That is not the offer. The offer is fewer repeated steps for the people you already have.",
      },
      {
        question: "Can we see a trial on our own messages?",
        answer: "Yes. A short trial on real examples is how we know the idea is worth building.",
      },
    ],
    hub: webHub,
    related: [aiMangalore, digitalMangaluru],
  }),
  page({
    slug: "affordable-website-development-mangalore",
    serviceName: "Affordable Website Development in Mangalore",
    title: "Affordable Website Development in Mangalore | Dark Media",
    description:
      "Affordable website development in Mangalore. A smaller scope and a written quote, for businesses that need a clear site without extra pages.",
    keywords: [
      "affordable website development in Mangalore",
      "cheap website design Mangalore",
      "low cost website Mangalore",
      "affordable web design Mangalore",
      "budget website development Mangalore",
      "website price Mangalore",
    ],
    badgeText: "Mangalore",
    titleLine1: "Affordable Website Development",
    titleLine2: "in Mangalore",
    intro:
      "Affordable website development in Mangalore means a smaller site with a written price, not a race to the cheapest template. Dark Media Tech builds that from Mangalore. You get the pages the business needs: services, proof, contact. You do not get a fake discount on a site we then cannot edit. The quote comes after a short brief, so the number matches the work.",
    cards: [
      {
        title: "Fewer pages, finished properly",
        desc: "A five-page site that is clear beats a twenty-page site full of placeholder text.",
      },
      {
        title: "Your photos and your words",
        desc: "Cost stays down when you can supply the facts. We still structure them so a visitor can read them.",
      },
      {
        title: "No hidden rebuild",
        desc: "If the budget cannot include a store, a portal, or a brand, we say that before you pay.",
      },
    ],
    whyTitleLead: "A smaller",
    whyTitleAccent: "website in Mangalore",
    whyBody:
      "People searching for a cheap website in Mangalore are usually trying not to be oversold. We agree. Affordable website development in Mangalore, from this studio, is a defined page list and a launch. Add-ons are optional. You can see the scope at Kotichennaya Circle.",
    whyPoints: [
      "Price follows the page list, not a teaser rate",
      "Template-looking clutter left out",
      "Phone-friendly pages included, not charged as a surprise",
      "A path to add pages later when the business grows",
    ],
    offerTitleLead: "Focused",
    offerTitleRest: "sites in",
    offerTitleAccent: "Mangalore",
    offerBody: "What an affordable build includes.",
    offers: [
      { title: "A short sitemap", desc: "Home, services, about, contact, and one extra page if you need it." },
      { title: "Straightforward design", desc: "Readable type and a clear enquiry. Not a pile of effects." },
      { title: "The build", desc: "A live site on your domain." },
      { title: "Basic editing notes", desc: "How to ask for the next text change." },
      { title: "An honest no", desc: "We will not call a store or an app affordable by hiding the cost." },
    ],
    faqs: [
      {
        question: "How much is affordable website development in Mangalore?",
        answer: "There is no universal rate. A short business site costs less because it is less work. Dark Media Tech quotes after we know the pages. We do not publish a bait price.",
      },
      {
        question: "Is a cheap template the same thing?",
        answer: "No. A template you cannot edit becomes expensive. We build a small custom site you can keep.",
      },
      {
        question: "What makes the price go up?",
        answer: "More pages, a shop, bookings, copy we have to research, or a redesign of a large old site.",
      },
      {
        question: "Can we start small and expand?",
        answer: "Yes. That is often the right order.",
      },
      {
        question: "Where do we get the quote?",
        answer: "From the studio at Kotichennaya Circle, Nandi Gudda, Mangaluru 575002, or through the contact page.",
      },
    ],
    hub: webHub,
    related: [affordableMangaluru, smallBusinessMangalore],
  }),
  page({
    slug: "affordable-website-development-mangaluru",
    serviceName: "Affordable Website Development in Mangaluru",
    title: "Affordable Website Development in Mangaluru | Dark Media",
    description:
      "Affordable website development in Mangaluru. A compact business site with a clear quote from our Nandi Gudda studio.",
    keywords: [
      "affordable website development in Mangaluru",
      "low cost website Mangaluru",
      "budget website design Mangaluru",
      "affordable web design Mangaluru",
      "website cost Mangaluru",
      "cheap website developers Mangaluru",
    ],
    badgeText: "Mangaluru",
    titleLine1: "Affordable Website Development",
    titleLine2: "in Mangaluru",
    intro:
      "Affordable website development in Mangaluru is a decision about scope. Dark Media Tech will build the pages a local business can fill and a customer can use. We will not add a logo contest, a shop, and an app to look complete. The studio is in Nandi Gudda. You see the page list and the price together.",
    cards: [
      {
        title: "First sites",
        desc: "A Mangaluru firm that has never had a proper website needs presence, not a platform.",
      },
      {
        title: "Replacing a single PDF",
        desc: "If your whole offer fits on a few screens, the site should too.",
      },
      {
        title: "Room in the budget for the truth",
        desc: "Photos you take on a phone can be enough. We will not spend your budget on stock images of another city.",
      },
    ],
    whyTitleLead: "Compact sites",
    whyTitleAccent: "in Mangaluru",
    whyBody:
      "Low-cost websites in Mangaluru go wrong when the price is a hook and the real bill arrives as extras. We put the inclusions on one page of the quote. Affordable website development in Mangaluru still has to load, show the address, and send an enquiry. Those are not upgrades.",
    whyPoints: [
      "Inclusions and exclusions written down",
      "A small design, built properly",
      "Your real address and phone on the site",
      "Later pages available when you are ready to pay for them",
    ],
    offerTitleLead: "Small",
    offerTitleRest: "builds in",
    offerTitleAccent: "Mangaluru",
    offerBody: "The affordable website we mean.",
    offers: [
      { title: "Essential pages", desc: "Enough to explain the business and be contacted." },
      { title: "Clean layout", desc: "No slider, no fake counters, no pages of lorem ipsum." },
      { title: "Launch", desc: "On a domain you own." },
      { title: "A short care option", desc: "Edits after launch, priced separately so the build stays lean." },
      { title: "A ceiling", desc: "If the brief grows, we stop and re-quote instead of drifting." },
    ],
    faqs: [
      {
        question: "Why do affordable website quotes in Mangaluru vary so much?",
        answer: "Because the page count and the features vary. Dark Media Tech prices the list. A lower number that excludes the build, the phone layout, or the launch is not a saving.",
      },
      {
        question: "Do you take a deposit?",
        answer: "Yes. Work starts when the scope is agreed and the starting payment in that quote is made.",
      },
      {
        question: "Can students or very small shops hire you?",
        answer: "If the scope is a small business site, yes. We still need a real brief. We do not do unpaid sample websites.",
      },
      {
        question: "Will the site be slow because it is affordable?",
        answer: "No. A small site should be fast. Speed is part of building it, not a luxury tier.",
      },
      {
        question: "Where is the studio?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: webHub,
    related: [affordableMangalore, smallBusinessMangaluru],
  }),
  page({
    slug: "website-development-small-business-mangalore",
    serviceName: "Website Development for Small Businesses in Mangalore",
    title: "Website Development for Small Businesses in Mangalore | Dark Media",
    description:
      "Website development for small businesses in Mangalore. A simple site with your services, location, and a way for customers to enquire.",
    keywords: [
      "website development for small businesses in Mangalore",
      "small business website Mangalore",
      "website for small business Mangalore",
      "small business web design Mangalore",
      "local business website Mangalore",
      "Mangalore small business website",
    ],
    badgeText: "Mangalore",
    titleLine1: "Websites for Small Businesses",
    titleLine2: "in Mangalore",
    intro:
      "Website development for small businesses in Mangalore has to respect a owner who is also the person answering the phone. Dark Media Tech builds a short site: what you offer, where you are in Mangalore, and how to reach you. We do not hand a small shop a corporate sitemap. The studio is in the city, so the review can be between two jobs, not a week of workshops.",
    cards: [
      {
        title: "Shops, clinics, and services",
        desc: "The customer wants the offer, the area, and a number. The site leads with those.",
      },
      {
        title: "Hours and a map",
        desc: "If people visit you, the page says when and where. If you visit them, it says the localities you cover.",
      },
      {
        title: "A form that is optional",
        desc: "Many Mangalore customers would rather call or send a message. The site supports the way you already sell.",
      },
    ],
    whyTitleLead: "Small business",
    whyTitleAccent: "websites in Mangalore",
    whyBody:
      "Small business web design in Mangalore fails when it copies a large company. We keep the pages few and the words specific. Website development for small businesses in Mangalore from this studio includes design, build, and a launch on your domain. You approve it at Kotichennaya Circle.",
    whyPoints: [
      "Written for the owner, not for a marketing department",
      "Short enough to keep updated",
      "Phone number and address easy to find",
      "No extra products added to inflate the quote",
    ],
    offerTitleLead: "Small",
    offerTitleRest: "business sites in",
    offerTitleAccent: "Mangalore",
    offerBody: "The website a small Mangalore business usually needs.",
    offers: [
      { title: "Home", desc: "The offer and the next step, immediately." },
      { title: "Services or menu", desc: "What you sell, in the words customers use." },
      { title: "About", desc: "A few lines on who runs it. Not a corporate history." },
      { title: "Contact", desc: "Phone, message, and place." },
      { title: "Launch help", desc: "Domain and the first check that the form or the number works." },
    ],
    faqs: [
      {
        question: "What counts as website development for small businesses in Mangalore?",
        answer: "A compact site for one location or one service area. Dark Media Tech builds it in Mangalore. If you have many branches or a large catalogue, the scope is bigger and we will say so.",
      },
      {
        question: "I am not technical. Can I still do this?",
        answer: "Yes. You supply the facts. We structure the site and show you how to ask for a change.",
      },
      {
        question: "Do I need a logo first?",
        answer: "A simple wordmark is enough to launch. A full identity can wait if the website is the urgent job.",
      },
      {
        question: "Can customers find me on Google?",
        answer: "The site will have a clear title, address, and pages. Ongoing local SEO is a separate service if you want it.",
      },
      {
        question: "Where do we meet?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: webHub,
    related: [smallBusinessMangaluru, affordableMangalore],
  }),
  page({
    slug: "website-development-small-business-mangaluru",
    serviceName: "Website Development for Small Businesses in Mangaluru",
    title: "Website Development for Small Businesses in Mangaluru | Dark Media",
    description:
      "Website development for small businesses in Mangaluru. Short, clear sites for local shops and services, built at Nandi Gudda.",
    keywords: [
      "website development for small businesses in Mangaluru",
      "small business website Mangaluru",
      "website for local business Mangaluru",
      "small business web design Mangaluru",
      "local website developers Mangaluru",
      "Mangaluru small business website",
    ],
    badgeText: "Mangaluru",
    titleLine1: "Websites for Small Businesses",
    titleLine2: "in Mangaluru",
    intro:
      "A small business in Mangaluru does not need a website that takes a committee. Website development for small businesses in Mangaluru is a few honest pages and a launch. Dark Media Tech builds them at Kotichennaya Circle. We use your services, your area, and your phone number. The site should help this month's customers, not impress a conference.",
    cards: [
      {
        title: "Neighbourhood services",
        desc: "If you serve Bejai, Kadri, or the wider city, say so. People search the place and the trade together.",
      },
      {
        title: "Family-run detail",
        desc: "Who to ask for, and how orders or appointments really work. That detail beats a generic welcome line.",
      },
      {
        title: "WhatsApp and calls",
        desc: "If that is how Mangaluru customers reach you, the site makes it one tap, and still has a proper page behind it.",
      },
    ],
    whyTitleLead: "Local small",
    whyTitleAccent: "business sites",
    whyBody:
      "Website developers for small businesses in Mangaluru should finish. We scope a site that can go live without a month of missing logos and stock photos. Website development for small businesses in Mangaluru includes that restraint. You can approve the pages in one sitting at the studio.",
    whyPoints: [
      "Few pages, all of them true",
      "Local area named plainly",
      "Call and message paths that match the counter",
      "A launch date tied to the content you can supply",
    ],
    offerTitleLead: "Local",
    offerTitleRest: "sites in",
    offerTitleAccent: "Mangaluru",
    offerBody: "The small-business website.",
    offers: [
      { title: "A one-meeting structure", desc: "Pages agreed without a long discovery phase." },
      { title: "Service list", desc: "What you do, with prices or a next step if prices change often." },
      { title: "Location", desc: "Address or service area, hours, and a way to arrive." },
      { title: "Build", desc: "A fast phone page on your domain." },
      { title: "Aftercare option", desc: "Someone to change a price later, if you want that plan." },
    ],
    faqs: [
      {
        question: "Can a small Mangaluru business own the website?",
        answer: "Yes. The domain and the accounts should be in your name. Website development for small businesses in Mangaluru from Dark Media Tech does not hold your site hostage.",
      },
      {
        question: "What if I only have a Google listing today?",
        answer: "Good. The website should match that listing. We will use the same name, phone, and address.",
      },
      {
        question: "Do you write in Kannada?",
        answer: "We can scope a Kannada version. The first site is often in English unless your customers expect both.",
      },
      {
        question: "How do we pay?",
        answer: "Against the quote: a start, then the balance at launch, unless the quote says otherwise.",
      },
      {
        question: "Where is the studio?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: webHub,
    related: [smallBusinessMangalore, businessSiteMangaluru],
  }),
  page({
    slug: "custom-crm-development-mangalore",
    serviceName: "Custom CRM Development in Mangalore",
    title: "Custom CRM Development in Mangalore | Dark Media",
    description:
      "Custom CRM development in Mangalore. An enquiry pipeline your office will use, built for your steps. Not a Salesforce resale.",
    keywords: [
      "custom CRM development in Mangalore",
      "CRM software Mangalore",
      "CRM developers in Mangalore",
      "custom CRM company Mangalore",
      "lead management software Mangalore",
      "Mangalore CRM development",
    ],
    badgeText: "Mangalore",
    titleLine1: "Custom CRM Development",
    titleLine2: "in Mangalore",
    intro:
      "Custom CRM development in Mangalore is a pipeline for enquiries: who called, who owns the next step, and what was promised. Dark Media Tech builds that from Mangalore when a shared inbox is losing leads. We do not resell Salesforce or a similar product and call it custom. If one of those already fits, use it. If your steps are specific, we build the screens.",
    cards: [
      {
        title: "A list the front desk trusts",
        desc: "New, waiting, and done. Mangalore teams adopt a CRM that matches those words.",
      },
      {
        title: "From the website into the list",
        desc: "A form should create a record. Retyping leads is the problem the CRM is meant to stop.",
      },
      {
        title: "Notes the next person can read",
        desc: "A call note, not a novel. The screen asks for the fact the next call needs.",
      },
    ],
    whyTitleLead: "Custom CRM",
    whyTitleAccent: "in Mangalore",
    whyBody:
      "CRM developers in Mangalore sometimes install a product and leave the fields empty. We would rather build fewer fields and see them used. Custom CRM development in Mangalore from this studio is reviewed with the people who answer the phone, at Kotichennaya Circle.",
    whyPoints: [
      "Pipeline stages named in your language",
      "Website enquiries landed in the same list",
      "Roles so not everyone sees every note",
      "No resale of a branded CRM platform",
    ],
    offerTitleLead: "Pipelines",
    offerTitleRest: "we build in",
    offerTitleAccent: "Mangalore",
    offerBody: "The CRM work we scope.",
    offers: [
      { title: "Stages", desc: "The real path from first contact to won or lost." },
      { title: "Lead capture", desc: "Forms and calls recorded once." },
      { title: "Ownership", desc: "Who must reply, and when it is stuck." },
      { title: "A simple report", desc: "How many are waiting. Not a wall of charts." },
      { title: "Follow-up", desc: "Fixes after the first weeks of real use." },
    ],
    faqs: [
      {
        question: "Is custom CRM development in Mangalore a Salesforce project?",
        answer: "No. Dark Media Tech builds a custom enquiry system. We are not a Salesforce partner and we do not implement that product.",
      },
      {
        question: "How is a CRM different from ERP?",
        answer: "A CRM tracks the conversation with a customer. ERP-style software tracks orders and stock. Some businesses need one. Some need both. We will not merge them into a vague platform.",
      },
      {
        question: "Can our existing website send leads in?",
        answer: "Yes, if we can connect the form. That connection is part of the scope.",
      },
      {
        question: "What if the team will not use it?",
        answer: "Then it was too complicated. We design the shortest list they will open. Adoption is part of the review.",
      },
      {
        question: "Where do we see it?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: webHub,
    related: [crmMangaluru, erpMangalore],
  }),
  page({
    slug: "custom-crm-development-mangaluru",
    serviceName: "Custom CRM Development in Mangaluru",
    title: "Custom CRM Development in Mangaluru | Dark Media",
    description:
      "Custom CRM development in Mangaluru. A lead list and follow-up screens for local teams, built at our Kotichennaya Circle studio.",
    keywords: [
      "custom CRM development in Mangaluru",
      "CRM software Mangaluru",
      "CRM development company Mangaluru",
      "lead management Mangaluru",
      "custom CRM Mangaluru",
      "enquiry management software Mangaluru",
    ],
    badgeText: "Mangaluru",
    titleLine1: "Custom CRM Development",
    titleLine2: "in Mangaluru",
    intro:
      "Counsellors, clinics, and sales desks in Mangaluru lose follow-ups in personal chats. Custom CRM development in Mangaluru puts the enquiry on a shared list. Dark Media Tech builds it at Nandi Gudda. The next person can see the last promise. We keep the fields to what that next person needs. A branded CRM you will not open is not a result.",
    cards: [
      {
        title: "Admissions and appointments",
        desc: "A parent or a patient is a lead with a date. The CRM shows who has not been called.",
      },
      {
        title: "More than one branch",
        desc: "A Mangaluru office and a second desk can share the record without sharing a password.",
      },
      {
        title: "WhatsApp is not the database",
        desc: "Chats can still happen. The decision and the status live in the CRM so they survive a staff change.",
      },
    ],
    whyTitleLead: "Enquiry systems",
    whyTitleAccent: "in Mangaluru",
    whyBody:
      "A CRM in Mangaluru is successful when yesterday's lead is still visible this morning. We build for that. Custom CRM development in Mangaluru is reviewed with your team at Kotichennaya Circle. If a spreadsheet with three columns is honestly enough, we will tell you before writing software.",
    whyPoints: [
      "Follow-ups visible to the whole desk",
      "Statuses in the words your staff use",
      "Website and walk-in enquiries in one list",
      "Small enough that people open it daily",
    ],
    offerTitleLead: "CRM",
    offerTitleRest: "builds in",
    offerTitleAccent: "Mangaluru",
    offerBody: "What the custom CRM includes.",
    offers: [
      { title: "Lead record", desc: "Who, what they asked, and the next date." },
      { title: "Assignment", desc: "A owner for each enquiry." },
      { title: "History", desc: "Notes that stay when someone is on leave." },
      { title: "Source", desc: "Website, call, or walk-in, so you know what is working." },
      { title: "Handover", desc: "How to add a user and how to ask for a new field." },
    ],
    faqs: [
      {
        question: "Do you sell a ready-made CRM?",
        answer: "No. Custom CRM development in Mangaluru from Dark Media Tech is built for your pipeline. We do not resell a packaged CRM.",
      },
      {
        question: "Can we start with ten fields and add more?",
        answer: "Yes. Starting smaller is the point. New fields are a small follow-up once you know which ones you missed.",
      },
      {
        question: "Will it work on a phone?",
        answer: "If the people updating it are on phones, those screens are in the design.",
      },
      {
        question: "How long does a first version take?",
        answer: "A single pipeline is often a few weeks after the stages are agreed. Several teams and integrations take longer.",
      },
      {
        question: "Where is the studio?",
        answer: "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002.",
      },
    ],
    hub: webHub,
    related: [crmMangalore, educationMangaluru],
  }),
];
