import type { PageSeo } from "@/lib/seo";

export type ServiceLink = { title: string; href: string };
export type TextBlock = { title: string; desc: string };
export type FaqItem = { question: string; answer: string };

export type AreaServed = {
  "@type": "City" | "State" | "AdministrativeArea";
  name: string;
};

export type WebDevelopmentContent = {
  badgeText: string;
  titleLine1: string;
  titleLine2: string;
  compactTitle?: boolean;
  intro: string;
  introLinks?: boolean;
  cards: TextBlock[];
  whyEyebrow: string;
  whyTitleLead: string;
  whyTitleAccent: string;
  whyBody: string;
  whyPoints: string[];
  offerEyebrow: string;
  offerEyebrowTag: "h2" | "div";
  offerTitleLead: string;
  offerTitleRest: string;
  offerTitleAccent: string;
  offerTitleTag: "h2" | "h3";
  offerBody: string;
  offers: TextBlock[];
  faqs?: FaqItem[];
  breadcrumb?: { name: string; path: string }[];
  services: ServiceLink[];
};

export type WebDevelopmentLocation = {
  slug: string;
  name: string;
  seo: PageSeo;
  serviceName: string;
  areaServed: AreaServed;
  content: WebDevelopmentContent;
};

const siblingServices: ServiceLink[] = [
  { title: "Social Media Management", href: "/services/social-media-management" },
  { title: "Branding", href: "/services/branding" },
  { title: "Video Production", href: "/services/video-production" },
  { title: "SEO & ANALYTICS", href: "/services/seo-analytics" },
];

const studioLinks: ServiceLink[] = [
  { title: "Web Development Services", href: "/services/web-development" },
  { title: "About Dark Media Tech", href: "/about-us" },
  { title: "All Services", href: "/services" },
  { title: "Contact our team", href: "/contact-us" },
];

function otherLocationLinks(except: "mangalore" | "karnataka" | "bangalore"): ServiceLink[] {
  const pages = [
    { name: "Mangalore", href: "/services/web-development/mangalore" },
    { name: "Karnataka", href: "/services/web-development/karnataka" },
    { name: "Bangalore", href: "/services/web-development/bangalore" },
  ];
  return pages
    .filter((page) => page.href !== `/services/web-development/${except}`)
    .map((page) => ({ title: `Web Development in ${page.name}`, href: page.href }));
}

function locationServices(slug: "mangalore" | "karnataka" | "bangalore"): ServiceLink[] {
  return [...studioLinks, ...siblingServices, ...otherLocationLinks(slug)];
}

function crumbs(name: string, path: string) {
  return [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Web Development", path: "/services/web-development" },
    { name, path },
  ];
}

export const webDevelopmentLocations: WebDevelopmentLocation[] = [
  {
    slug: "mangalore",
    name: "Mangalore",
    seo: {
      path: "/services/web-development/mangalore",
      title: "Website Development Company in Mangalore | Dark Media",
      description:
        "Website development company in Mangalore. Dark Media Tech designs and builds business websites, online stores, and custom web applications from our Mangaluru studio.",
    },
    serviceName: "Web Design and Development in Mangalore",
    areaServed: { "@type": "City", name: "Mangaluru" },
    content: {
      badgeText: "Mangalore",
      titleLine1: "Web Design & Development",
      titleLine2: "Company in Mangalore",
      compactTitle: true,
      intro:
        "A website for a Mangalore business has to work for someone who finds you on a phone, between a college visit, a clinic appointment, or a booking. Dark Media Tech is a web design and development company in Mangalore, based at Kotichennaya Circle in Nandi Gudda. We design and build business websites, online stores, and custom web applications for companies in Mangaluru and across Dakshina Kannada.",
      introLinks: true,
      cards: [
        {
          title: "Hotels, restaurants, and local services",
          desc: "Guest houses, restaurants, clinics, and home services around Mangalore need a page that shows what you offer, where you are, and how to call or book. We build that path so a visitor is not hunting through an old menu or a Facebook post.",
        },
        {
          title: "Colleges, clinics, and professional firms",
          desc: "Education groups, healthcare practices, and consultancies in Dakshina Kannada use the website as the place families and clients check before they enquire. We organise courses, services, and proof so the page is easy to scan.",
        },
        {
          title: "Stores shipping from the coast",
          desc: "E-commerce website development in Mangalore has to be clear on a phone and simple for the team updating products. We build catalogues and checkout for businesses selling from the city, with the admin work kept practical.",
        },
      ],
      whyEyebrow: "Why work with us",
      whyTitleLead: "Website Development",
      whyTitleAccent: "Company in Mangalore",
      whyBody:
        "People looking for web designers in Mangalore are usually replacing a slow site or putting a real business online for the first time. We are in the city, so reviews can happen in person when that helps. The build is still a proper product: responsive pages, a structure your team can update, and custom web development in Mangalore when the work includes bookings, catalogues, or a tool your staff uses every week. A website design company in Mangalore should be able to explain the scope before anyone talks about colours.",
      whyPoints: [
        "Meetings at our Mangalore studio when you want them in person",
        "Pages written around your services, locations, and enquiries",
        "Layouts planned for the phones your customers actually use",
        "A written scope, then design, build, launch, and care after go-live",
      ],
      offerEyebrow: "What we offer",
      offerEyebrowTag: "div",
      offerTitleLead: "Web Design & Development",
      offerTitleRest: "in",
      offerTitleAccent: "Mangalore",
      offerTitleTag: "h2",
      offerBody:
        "Web development services in Mangalore should cover the site customers see and the part your staff uses every week. Web design and development in Mangalore, for us, usually falls into one of these builds.",
      offers: [
        {
          title: "Business websites",
          desc: "A clear home for a firm, hospital, college, hotel, or local brand in Mangalore: services, proof, and a way to enquire that matches how the business actually answers.",
        },
        {
          title: "Online stores",
          desc: "Product pages and checkout for sellers in Mangaluru who need customers to understand the product, the delivery, and the next step without a cluttered cart.",
        },
        {
          title: "Focused landing pages",
          desc: "A single page for an admission cycle, a festive menu, a property listing, or a local promotion, with one action and copy that matches the offer.",
        },
        {
          title: "Updates after launch",
          desc: "Security updates, content changes, and fixes once the site is live, so the first version is not the last time anyone looks at it.",
        },
        {
          title: "Fast, search-friendly structure",
          desc: "Clean addresses, sensible headings, and a front end that stays quick on typical mobile networks across Karnataka.",
        },
      ],
      faqs: [
        {
          question: "How much does a website cost in Mangalore?",
          answer:
            "There is no single rate. A short business site, an online store, and a custom application are different builds. As a web development company in Mangalore we quote after a brief: pages, content, products, bookings, and anything that has to connect to payment or enquiry tools. The price follows that scope.",
        },
        {
          question: "How long does a website take?",
          answer:
            "A focused business website is often a few weeks once the words, photos, and approvals are ready. Stores and custom applications take longer because products, accounts, and integrations add steps. We agree the timeline with the scope, before design starts.",
        },
        {
          question: "Do you build e-commerce websites?",
          answer:
            "Yes. We build online stores for Mangalore businesses that need product pages, a checkout people can finish on a phone, and a way for the team to update the catalogue.",
        },
        {
          question: "Can you redesign the site we already have?",
          answer:
            "Yes. We can replace an outdated site, keep the pages that still earn enquiries, and rebuild the parts that are slow, confusing, or impossible to edit.",
        },
        {
          question: "Do you provide website maintenance?",
          answer:
            "Yes. After launch we can handle updates, small content changes, and the fixes that show up once real customers start using the site.",
        },
        {
          question: "Can we meet you in Mangalore?",
          answer:
            "Yes. The studio is at Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002. Projects elsewhere in India are handled remotely from the same team.",
        },
        {
          question: "How do you choose popular internet website designers in Mangalore?",
          answer:
            "People searching for popular internet website designers in Mangalore usually want a studio that designs the pages and builds them, not a mockup that someone else has to finish. Ask who writes the pages, who builds them, and who answers after launch. Dark Media Tech does that work from our studio at Kotichennaya Circle.",
        },
        {
          question: "What should a shortlist of top web development companies in Mangalore include?",
          answer:
            "A useful shortlist of top web development companies in Mangalore is based on the scope, the timeline, and whether the team can maintain the site. We do not publish awards or a ranking. We quote the pages, the store or application if you need one, and the work after go-live.",
        },
      ],
      breadcrumb: crumbs("Mangalore", "/services/web-development/mangalore"),
      services: locationServices("mangalore"),
    },
  },
  {
    slug: "karnataka",
    name: "Karnataka",
    seo: {
      path: "/services/web-development/karnataka",
      title: "Website Development Company in Karnataka | Dark Media",
      description:
        "Website development company in Karnataka. Dark Media Tech designs and builds business websites, online stores, and custom web applications from our Mangaluru studio.",
    },
    serviceName: "Web Design and Development in Karnataka",
    areaServed: { "@type": "State", name: "Karnataka" },
    content: {
      badgeText: "Karnataka",
      titleLine1: "Web Design & Development",
      titleLine2: "Company in Karnataka",
      compactTitle: true,
      intro:
        "Dark Media Tech designs and builds websites for businesses across Karnataka from our studio in Mangaluru. The work is the same wherever the company sits: a site that explains the offer, loads properly, and gives people a clear next step, whether that business is on the coast, in a manufacturing town, or in a larger city.",
      introLinks: true,
      cards: [
        {
          title: "Companies selling across the state",
          desc: "Manufacturers, distributors, and service brands often need one website to explain several locations or product lines. We structure that information so a buyer in another district can still understand who you are.",
        },
        {
          title: "Education, healthcare, and hospitality",
          desc: "Colleges, clinics, and guest-facing businesses rely on trust, timings, and a way to enquire. Web design and development in Karnataka, for these teams, is mostly about making that information easy to find.",
        },
        {
          title: "Teams that have outgrown a basic site",
          desc: "Custom web development in Karnataka starts when a brochure site cannot hold accounts, catalogues, or internal tools. We build the web application around the workflow you already have.",
        },
      ],
      whyEyebrow: "Why work with us",
      whyTitleLead: "Website Development",
      whyTitleAccent: "Company in Karnataka",
      whyBody:
        "A website development company in Karnataka can work from one studio. Ours is in Mangalore, and projects in the rest of the state run through calls, shared reviews, and a written scope. Web designers in Karnataka are often asked for a page that looks finished and then cannot be edited. We plan the content model with the people who will update it, and we build responsive pages for customers who will mostly arrive on a phone.",
      whyPoints: [
        "One studio in Mangaluru, working with businesses across Karnataka",
        "Scope, pages, and responsibilities written down before design starts",
        "Business websites, stores, and web applications in the same practice",
        "Launch, then maintenance, with the team that built the site",
      ],
      offerEyebrow: "What we offer",
      offerEyebrowTag: "div",
      offerTitleLead: "Web Design & Development",
      offerTitleRest: "in",
      offerTitleAccent: "Karnataka",
      offerTitleTag: "h2",
      offerBody:
        "Web development services in Karnataka cover the public website and, when you need it, the system behind it. A website design company in Karnataka should be able to say which of these you actually need.",
      offers: [
        {
          title: "Business websites",
          desc: "Company sites for professional services, education groups, healthcare practices, and regional brands that need a clear explanation of what they do.",
        },
        {
          title: "E-commerce platforms",
          desc: "E-commerce website development in Karnataka for catalogues that may serve more than one city, with checkout and product updates a small team can manage.",
        },
        {
          title: "Landing pages for a specific offer",
          desc: "A single page for a course intake, a product launch, a plant visit, or a hospitality season, with one action and copy that matches it.",
        },
        {
          title: "Care after the launch",
          desc: "Updates and fixes once the site is in use, so a Karnataka team is not left maintaining a build they cannot open.",
        },
        {
          title: "Structure that search engines can read",
          desc: "Headings, addresses, and performance treated as part of the build, for a web development company in Karnataka that expects the site to be found.",
        },
      ],
      faqs: [
        {
          question: "Do you have offices across Karnataka?",
          answer:
            "No. The studio is in Mangaluru. We take web projects from businesses elsewhere in Karnataka and work with those teams remotely. We will not describe a branch we do not have.",
        },
        {
          question: "How do you price a website for a Karnataka business?",
          answer:
            "The quote follows the scope: pages, content, products, languages if you need them, and any booking or payment tools. The city does not change the price. A short business site and a custom application are different projects, so they are quoted separately.",
        },
        {
          question: "How long does development take?",
          answer:
            "A focused company website is often a few weeks after the content is ready. Stores and custom web applications take longer. We set the timeline when the scope is agreed.",
        },
        {
          question: "Can you build an online store?",
          answer:
            "Yes. We build e-commerce sites for businesses that sell across Karnataka or beyond it, including product pages and a checkout that works on a phone.",
        },
        {
          question: "Can you redesign an existing website?",
          answer:
            "Yes. We keep what still brings enquiries and replace the parts that are slow, hard to edit, or unclear to a first-time visitor.",
        },
        {
          question: "Do you maintain the site after launch?",
          answer:
            "Yes. Maintenance can cover updates, content changes, and the issues that appear once customers and staff are using the site.",
        },
        {
          question: "How do you choose popular internet website designers in Karnataka?",
          answer:
            "A search for popular internet website designers in Karnataka usually means you need design and development in one team. We work from Mangaluru with businesses across the state. The brief, the pages, and the person who maintains the site should be clear before design starts.",
        },
        {
          question: "What should a shortlist of top web development companies in Karnataka include?",
          answer:
            "Top web development companies in Karnataka are easier to judge by the scope than by a badge. We do not claim a statewide ranking. We write down the pages, the store or application if you need one, the timeline, and who looks after the site after launch.",
        },
      ],
      breadcrumb: crumbs("Karnataka", "/services/web-development/karnataka"),
      services: locationServices("karnataka"),
    },
  },
  {
    slug: "bangalore",
    name: "Bangalore",
    seo: {
      path: "/services/web-development/bangalore",
      title: "Website Development Company in Bangalore | Dark Media",
      description:
        "Website development company in Bangalore. Dark Media Tech designs and builds business websites, online stores, and custom web applications for Bengaluru teams.",
    },
    serviceName: "Web Design and Development in Bangalore",
    areaServed: { "@type": "City", name: "Bengaluru" },
    content: {
      badgeText: "Bangalore",
      titleLine1: "Web Design & Development",
      titleLine2: "Company in Bangalore",
      compactTitle: true,
      intro:
        "Bangalore companies often need a website that can keep up with a product, a sales team, and a buyer comparing three other tabs. Dark Media Tech builds those business websites, stores, and custom web applications from our studio in Mangalore. Bangalore work is remote. The studio, and the only office, is in Mangaluru.",
      introLinks: true,
      cards: [
        {
          title: "Startups and product companies",
          desc: "A marketing site that can change as the offer changes, and the web application behind it when accounts, dashboards, or a signup flow are part of the product. Bengaluru teams usually need both to stay in step.",
        },
        {
          title: "Agencies and professional services",
          desc: "Consultancies, studios, and specialist firms need a site that makes the work obvious before the first call. Teams searching for web designers in Bangalore still need that same clarity: what you do, who it is for, and how to start a conversation.",
        },
        {
          title: "Stores, clinics, campuses, and property",
          desc: "E-commerce, appointment-led healthcare sites, education pages, restaurants, and real-estate projects still need a straightforward public website. Web design and development in Bangalore includes those builds, not only SaaS homepages.",
        },
      ],
      whyEyebrow: "Why work with us",
      whyTitleLead: "Website Development",
      whyTitleAccent: "Company in Bangalore",
      whyBody:
        "A website development company in Bangalore is easy to shortlist and hard to judge. We take the work from Mangalore: calls, design reviews, and a launch plan with the Bengaluru team. Custom web development in Bangalore, for us, means an interface and a system your staff can keep using after the kickoff is over. The page stays specific to the work. There is no invented Bangalore client list, award, or second office behind it.",
      whyPoints: [
        "Remote collaboration with Bangalore teams from the Mangalore studio",
        "Marketing sites and web applications planned as one project when both are needed",
        "Interfaces aimed at enquiries, signups, and sales conversations",
        "A scope you can read before design or development starts",
      ],
      offerEyebrow: "What we offer",
      offerEyebrowTag: "div",
      offerTitleLead: "Web Design & Development",
      offerTitleRest: "in",
      offerTitleAccent: "Bangalore",
      offerTitleTag: "h2",
      offerBody:
        "Web development services in Bangalore should match the stage of the company. A website design company in Bangalore that only reskins a template will struggle the moment the product, the menu, or the property list changes.",
      offers: [
        {
          title: "Product and company websites",
          desc: "A public site for a startup, SaaS product, or professional firm in Bengaluru, structured so the story can be updated without a rebuild.",
        },
        {
          title: "Custom web applications",
          desc: "Portals, dashboards, and signup flows when the business has moved past a set of marketing pages. This is the custom web development work we scope separately from a brochure site.",
        },
        {
          title: "E-commerce",
          desc: "E-commerce website development in Bangalore for catalogues that have to stay clear on mobile and editable by the people who run the store.",
        },
        {
          title: "Campaign pages",
          desc: "A single page for a launch, a hiring push, a clinic service, or a property release, with one action and room to measure it.",
        },
        {
          title: "Performance and a structure people can find",
          desc: "Fast pages, readable headings, and addresses that stay stable, so a web development company in Bangalore is handing over a site that can be maintained.",
        },
      ],
      faqs: [
        {
          question: "Do you have an office in Bangalore?",
          answer:
            "No. Dark Media Tech is based in Mangalore. We work with Bangalore and Bengaluru teams remotely. There is no Bangalore headquarters and no local branch.",
        },
        {
          question: "How much does website development cost?",
          answer:
            "We quote from the scope, not from the city. A marketing site, an online store, and a custom application are priced as different projects. After a short brief you get the pages, timeline, and what is included.",
        },
        {
          question: "How long does a build take?",
          answer:
            "A focused company website is often a few weeks once content and decisions are in place. Product sites and custom applications take longer because accounts, integrations, and review cycles add time.",
        },
        {
          question: "Do you build e-commerce websites?",
          answer:
            "Yes. We build stores with product pages and checkout, including for Bangalore businesses that need the catalogue updated by their own team.",
        },
        {
          question: "Can you redesign an existing product site?",
          answer:
            "Yes. We can keep the parts that already convert and rebuild navigation, page structure, and the editing experience when the current site is hard to change.",
        },
        {
          question: "Are the websites mobile responsive?",
          answer:
            "Yes. Layouts are designed for phones and desktops. Bangalore buyers compare vendors on a phone as often as on a laptop, so the small screen is part of the design, not a later shrink.",
        },
        {
          question: "Do you provide maintenance?",
          answer:
            "Yes. We can stay on for updates, content changes, and fixes after launch, with the same team that built the site.",
        },
        {
          question: "How do you choose popular internet website designers in Bangalore?",
          answer:
            "Popular internet website designers in Bangalore are often shortlisted for a marketing site that also has to be built and updated. Dark Media Tech does that from our Mangalore studio. Bangalore work is remote. There is no Bengaluru office.",
        },
        {
          question: "What should a shortlist of top web development companies in Bangalore include?",
          answer:
            "Top web development companies in Bangalore are best compared on the scope, not a directory badge. We do not claim a Bangalore ranking. We quote the public site, the web application if you need one, and the maintenance after launch.",
        },
      ],
      breadcrumb: crumbs("Bangalore", "/services/web-development/bangalore"),
      services: locationServices("bangalore"),
    },
  },
];

export function getWebDevelopmentLocation(slug: string) {
  return webDevelopmentLocations.find((page) => page.slug === slug);
}

export const webDevelopmentMasterContent: WebDevelopmentContent = {
  badgeText: "Web Development",
  titleLine1: "More Than Websites.",
  titleLine2: "Engineered for Your Business.",
  intro:
    "A great website does more than look good—it builds trust, drives engagement, and moves your business forward. At Dark Media, we create visually striking, high-performance websites tailored to your brand and business goals",
  cards: [
    {
      title: "Built Around Your Business",
      desc: "We don't believe in one-size-fits-all websites. Every project is shaped around your brand, audience, and ambitions to create a digital experience that feels authentic and performs with purpose.",
    },
    {
      title: "Static Websites",
      desc: "Fast, focused, and built to impress. Our static websites combine clean design, responsive experiences, and strong performance to give your brand a professional digital presence.",
    },
    {
      title: "E-Commerce Solutions",
      desc: "Create a shopping experience people enjoy. From product discovery to checkout, we build intuitive eCommerce websites designed to make buying easier and help your business sell more.",
    },
  ],
  whyEyebrow: "Why Work With Us",
  whyTitleLead: "Why work with",
  whyTitleAccent: "Dark Media?",
  whyBody:
    "Great brands are built with more than good design. They need clear thinking, creative direction, and a deep understanding of what makes your business unique. We bring strategy, creativity, and execution together to create work that connects with your audience and moves your business forward.",
  whyPoints: [
    "Strategy built around your business and goals",
    "Creative work that connects with your audience",
    "Consistent, memorable, and meaningful brand experiences",
    "A reliable creative partner from idea to execution",
  ],
  offerEyebrow: "What We Offer",
  offerEyebrowTag: "h2",
  offerTitleLead: "Digital solutions",
  offerTitleRest: "engineered for",
  offerTitleAccent: "growth.",
  offerTitleTag: "h3",
  offerBody:
    "We combine strategic design with cutting-edge technology to build digital experiences that drive real, measurable business results.",
  offers: [
    {
      title: "Corporate & Business Websites",
      desc: "We craft immersive, lightning-fast corporate websites designed to elevate your brand's digital presence and turn visitors into long-term partners.",
    },
    {
      title: "E-Commerce Platforms",
      desc: "Drive sales with scalable, secure, and intuitive e-commerce experiences. We optimize the entire customer journey from product discovery to seamless checkout.",
    },
    {
      title: "High-Conversion Landing Pages",
      desc: "Launch targeted, performance-driven landing pages that capture attention and maximize your campaign ROI through strategic design and compelling copy.",
    },
    {
      title: "Website Maintenance & Support",
      desc: "Protect your digital investment. We provide continuous updates, robust security monitoring, and proactive support to keep your platform running flawlessly.",
    },
    {
      title: "Technical SEO & Performance",
      desc: "Dominate search rankings. We build SEO right into the code, ensuring maximum visibility, blazing-fast load times, and a steady stream of organic traffic.",
    },
  ],
  services: [
    ...siblingServices,
    { title: "Web Development in Mangalore", href: "/services/web-development/mangalore" },
    { title: "Web Development in Karnataka", href: "/services/web-development/karnataka" },
    { title: "Web Development in Bangalore", href: "/services/web-development/bangalore" },
  ],
};
