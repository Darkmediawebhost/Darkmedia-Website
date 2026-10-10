import type { FaqItem, ServiceLink, TextBlock, WebDevelopmentLocation } from "@/lib/web-development-locations";

const seoHub: ServiceLink = { title: "SEO and Analytics", href: "/services/seo-analytics" };
const studio: ServiceLink = { title: "Website Development Company in Mangalore", href: "/services/web-development/mangalore" };
const contact: ServiceLink = { title: "Contact our team", href: "/contact-us" };
const webHub: ServiceLink = { title: "Web Development Services", href: "/services/web-development" };

const office =
  "The only studio is at Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002. Mangalore and Mangaluru are the same city. There is no second SEO office.";

type Spec = {
  slug: string;
  name: string;
  line1: string;
  line2?: string;
  keywords: string[];
  clause: string;
  intro: string;
  cards: TextBlock[];
  why: string;
  points: string[];
  offerLead: string;
  offerBody: string;
  offers: TextBlock[];
  faqs: { q: string; a: string }[];
};

function crumbs(name: string, path: string) {
  return [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "SEO and Analytics", path: "/services/seo-analytics" },
    { name, path },
  ];
}

function build(spec: Spec): WebDevelopmentLocation {
  const path = `/services/seo-analytics/${spec.slug}`;
  const faqs: FaqItem[] = [
    { question: "Where is the studio for this Mangalore SEO work?", answer: office },
    ...spec.faqs.map((faq) => ({ question: faq.q, answer: faq.a })),
  ];

  return {
    slug: spec.slug,
    name: "Mangalore",
    market: "mangalore",
    seo: {
      path,
      title: `${spec.name} | Dark Media`,
      description: `${spec.name}. ${spec.clause} ${office}`.replace(/\s+/g, " "),
      keywords: [spec.name.toLowerCase(), ...spec.keywords],
    },
    serviceName: spec.name,
    areaServed: { "@type": "City", name: "Mangaluru" },
    content: {
      badgeText: "Mangalore",
      titleLine1: spec.line1,
      titleLine2: spec.line2 ?? "in Mangalore",
      compactTitle: true,
      intro: spec.intro,
      introLinks: true,
      cards: spec.cards,
      whyEyebrow: "Why work with us",
      whyTitleLead: spec.line1,
      whyTitleAccent: spec.line2 ?? "in Mangalore",
      whyBody: spec.why,
      whyPoints: spec.points,
      offerEyebrow: "What we offer",
      offerEyebrowTag: "div",
      offerTitleLead: spec.offerLead,
      offerTitleRest: "in",
      offerTitleAccent: "Mangalore",
      offerTitleTag: "h2",
      offerBody: spec.offerBody,
      offers: spec.offers,
      faqs,
      breadcrumb: crumbs(spec.name, path),
      services: [seoHub, webHub, studio, contact],
    },
  };
}

const specs: Spec[] = [
  {
    slug: "seo-company-mangalore",
    name: "SEO Company in Mangalore",
    line1: "SEO Company",
    keywords: ["SEO company Mangalore", "SEO firm Mangalore", "search engine optimization Mangalore"],
    clause: "A studio you can visit in Mangaluru for page, structure, and listing work. We do not sell a rank.",
    intro:
      "An SEO company in Mangalore should have an address and a list of pages it will change. Dark Media Tech is at Kotichennaya Circle, Nandi Gudda. We look at what can be crawled, what is slow, and what a buyer cannot find. We do not buy links, we do not buy reviews, and we do not promise the first position. If the site cannot be edited, the honest job is a rebuild, quoted apart.",
    cards: [
      { title: "Pages before reports", desc: "A monthly PDF with no page changes is not the work." },
      { title: "A company you can meet", desc: "Reviews can be at the Mangaluru studio." },
      { title: "No rank for sale", desc: "We report what changed. We do not sell position one." },
    ],
    why:
      "Mangalore SEO pitches often start with a guaranteed place on Google. We start with the site you have. An SEO company in Mangalore, for us, means the same people who read the pages also edit them, or tell you the site has to be rebuilt.",
    points: ["Existing pages improved first", "No purchased links or reviews", "No rank guarantee", "Studio in Mangaluru"],
    offerLead: "SEO",
    offerBody: "Search work from the Mangaluru studio.",
    offers: [
      { title: "A look at the current site", desc: "What search engines can see and what the pages fail to answer." },
      { title: "On-page edits", desc: "Titles, headings, and internal links." },
      { title: "New service pages", desc: "Only when the page answers a real query with real information." },
      { title: "A short note of what changed", desc: "Not a promise of a position." },
    ],
    faqs: [
      { q: "Will an SEO company in Mangalore guarantee page one?", a: "No. We do not sell rankings." },
      { q: "Do you work on a site you did not build?", a: "Yes, after we see whether it can be edited. Some sites are safer to rebuild." },
      { q: "How is it priced?", a: "By the pages and the technical list. A one-time fix and a monthly plan are different quotes." },
      { q: "Can we meet at the studio?", a: "Yes. Kotichennaya Circle, Nandi Gudda, Mangaluru." },
    ],
  },
  {
    slug: "best-seo-agency-mangalore",
    name: "Best SEO Agency in Mangalore",
    line1: "Best SEO Agency",
    keywords: ["best SEO agency Mangalore", "SEO agency Mangalore", "top SEO agency Mangalore"],
    clause: "Compare the scope, not a badge. We do not claim to be the best or the number one agency.",
    intro:
      "People searching for the best SEO agency in Mangalore are comparing studios. Dark Media Tech will show the pages, the fixes, and who answers after the work starts. We work from our Mangaluru studio. We do not publish a rank, an award, or a 'best of' badge. A useful comparison is whether the agency changes the site or only sends a report, and whether it promises a position it cannot control.",
    cards: [
      { title: "Judge the scope", desc: "Which pages change, what is technical, and what is left out." },
      { title: "No invented rank", desc: "We will not call ourselves the best SEO agency in Mangalore. The phrase is the search, not our claim." },
      { title: "The same team after the sale", desc: "The people who quote the work are in Mangaluru." },
    ],
    why:
      "A search for the best SEO agency in Mangalore is a shortlist, not a trophy. We would rather be specific: local listings, technical fixes, and pages that match real services. Reviews are at Kotichennaya Circle. If another studio is a better fit, that is a fair outcome of a comparison.",
    points: ["No 'number one' claim", "Written page list", "No purchased rankings", "Based in Mangaluru"],
    offerLead: "Agency work",
    offerBody: "SEO you can compare on the scope, from Mangaluru.",
    offers: [
      { title: "A comparison-ready quote", desc: "Pages, technical items, and what we will not promise." },
      { title: "Edits", desc: "The site changes that are in the quote." },
      { title: "Local details", desc: "Name, address, and phone kept consistent." },
      { title: "A report of work done", desc: "What changed, not a bought position." },
    ],
    faqs: [
      { q: "Are you the best SEO agency in Mangalore?", a: "We do not claim that. Compare the scope and the address. Our studio is in Mangaluru." },
      { q: "Do you have awards that prove a ranking?", a: "No. We do not sell awards as proof of search position." },
      { q: "What should a shortlist include?", a: "Who edits the site, whether rankings are guaranteed, and where the team sits." },
      { q: "Will you promise the top three?", a: "No." },
    ],
  },
  {
    slug: "seo-services-company-mangalore",
    name: "SEO Services Company in Mangalore",
    line1: "SEO Services Company",
    keywords: ["SEO services company Mangalore", "SEO services Mangalore", "search engine optimization services Mangalore"],
    clause: "Named services: pages, technical fixes, and local listings. A retainer is not a bundle that hides the work.",
    intro:
      "An SEO services company in Mangalore should name the service. Dark Media Tech splits the work: an audit, on-page edits, technical cleanup, and local listing details. We do that from Mangaluru. We do not wrap all of it in a vague monthly fee and then send a rank screenshot. You can buy one service. A monthly plan is a different quote, and it still lists what happens each month.",
    cards: [
      { title: "Services you can point at", desc: "Audit, pages, technical fixes, or the local listing. Each one can be scoped alone." },
      { title: "The site you already have", desc: "We improve pages before we add new ones." },
      { title: "A limit on new pages", desc: "We do not publish a thin page for every neighbourhood." },
    ],
    why:
      "SEO services in Mangalore are often sold as one package with no list. We write the list. The studio is at Nandi Gudda. If the useful service is a rebuild rather than SEO on a broken site, we say that.",
    points: ["Services quoted separately", "No thin location pages", "No rank guarantee", "Delivered from Mangaluru"],
    offerLead: "SEO services",
    offerBody: "Search services a Mangalore business can buy one at a time.",
    offers: [
      { title: "An audit", desc: "What is crawlable and what the pages fail to answer." },
      { title: "On-page work", desc: "Titles, headings, and internal links." },
      { title: "Technical cleanup", desc: "Speed, indexation, and addresses that stay stable." },
      { title: "Local consistency", desc: "The public name, phone, and address agreeing with each other." },
    ],
    faqs: [
      { q: "How does an SEO services company in Mangalore price the work?", a: "By the service. An audit, a fix, and a monthly plan are different." },
      { q: "How fast will positions move?", a: "Technical fixes can help sooner than new pages. We do not name a date for the first position." },
      { q: "Do you write the content?", a: "Yes, when the scope includes it. You approve anything that describes the business." },
      { q: "Can you do this on a site you did not build?", a: "Yes, after an audit." },
    ],
  },
  {
    slug: "digital-marketing-agency-mangalore",
    name: "Digital Marketing Agency in Mangalore",
    line1: "Digital Marketing Agency",
    keywords: ["digital marketing agency Mangalore", "digital marketing Mangalore", "online marketing agency Mangalore"],
    clause: "Search, ads, and social are different jobs. Ad accounts stay yours. We do not promise a cost per lead.",
    intro:
      "A digital marketing agency in Mangalore should name the channel. Dark Media Tech plans search, paid ads, or social from our Mangaluru studio, and we look at the page people land on. We do not sell a bundle that hides a retainer inside a website quote. Spend, if any, stays in an account you own. We do not promise a cost per enquiry, and we do not buy followers.",
    cards: [
      { title: "One channel, named", desc: "SEO, Google ads, or social. They are not the same invoice unless you ask for more than one." },
      { title: "A page that can take the visit", desc: "We will not send people to a page that does not explain the offer." },
      { title: "Accounts you can open", desc: "Ads and listings stay in your name." },
    ],
    why:
      "Mangalore marketing is crowded with reports. We would rather show the page, the spend if there is spend, and the enquiries the site recorded. Reviews are at Kotichennaya Circle. The first position on Google is not for sale.",
    points: ["Channel written in the quote", "You own the ad account", "No bought audience", "No cost-per-lead promise"],
    offerLead: "Marketing",
    offerBody: "Channel work from the Mangaluru studio.",
    offers: [
      { title: "Search", desc: "Pages and technical fixes, without a rank guarantee." },
      { title: "Paid search", desc: "On your Google Ads account, if you want ads." },
      { title: "Social", desc: "Creative or management, only as named." },
      { title: "The landing page", desc: "When the current page cannot take the click." },
    ],
    faqs: [
      { q: "Does a digital marketing agency in Mangalore include ads and SEO together?", a: "Only if both are in the quote. They are different jobs." },
      { q: "Who pays Google or Meta?", a: "Your business, on your account. Our fee is separate." },
      { q: "Will you guarantee leads?", a: "No." },
      { q: "Can we keep the accounts if we stop?", a: "Yes. They should be in your name from the start." },
    ],
  },
  {
    slug: "local-seo-services-mangalore",
    name: "Local SEO Services in Mangalore",
    line1: "Local SEO Services",
    keywords: ["local SEO services Mangalore", "local SEO Mangalore", "Mangalore local search"],
    clause: "The listing, the address, and a site that confirms them. We do not buy reviews or promise the map pack.",
    intro:
      "Local SEO services in Mangalore mean a person nearby can tell who you are, where you are, and how to call. Dark Media Tech checks the Google Business Profile against the website, from our Mangaluru studio. The name, the phone, and the address have to match. We do not buy reviews, we do not stuff every neighbourhood into a page, and we do not promise a place in the map pack.",
    cards: [
      { title: "One true address", desc: "The studio and your business each keep their own real address. We do not invent branches." },
      { title: "The listing and the site agree", desc: "Hours, phone, and name are checked before new pages are added." },
      { title: "Pages only for real service areas", desc: "A page exists when you actually serve that search with different information." },
    ],
    why:
      "Local SEO in Mangalore fails when the map listing says one thing and the website says another. We fix that at the source. The work is reviewed from Kotichennaya Circle. A pile of doorway pages is something we refuse.",
    points: ["Listing details kept consistent", "No purchased reviews", "No empty area pages", "No map-pack guarantee"],
    offerLead: "Local SEO",
    offerBody: "Local search work for Mangalore businesses.",
    offers: [
      { title: "Profile cleanup", desc: "Categories, hours, and the public description, on a profile you own." },
      { title: "Address consistency", desc: "The same name and phone on the site and the listing." },
      { title: "A location page that is true", desc: "Only if the page says something the homepage does not." },
      { title: "A short check", desc: "What was inconsistent, and what we changed." },
    ],
    faqs: [
      { q: "Will local SEO services in Mangalore put us in the map pack?", a: "We do not promise that. We make the listing and the site agree, and we fix pages that hide the business." },
      { q: "Do you buy Google reviews?", a: "No." },
      { q: "Can you create a listing for a city where we have no office?", a: "No. The address has to be a place you actually occupy." },
      { q: "Who owns the profile?", a: "Your business." },
    ],
  },
  {
    slug: "technical-seo-services-mangalore",
    name: "Technical SEO Services in Mangalore",
    line1: "Technical SEO Services",
    keywords: ["technical SEO services Mangalore", "technical SEO Mangalore", "website technical SEO Mangalore"],
    clause: "Crawl, speed, indexation, and stable addresses. Not a content calendar dressed up as engineering.",
    intro:
      "Technical SEO services in Mangalore are the parts of a site that stop search engines from reading it properly: broken addresses, slow templates, pages that should not be indexed, and titles that duplicate each other. Dark Media Tech fixes that list from our Mangaluru studio. We do not call a blog schedule technical SEO. If the platform cannot be changed safely, we say a rebuild is the real job.",
    cards: [
      { title: "A list, not a vibe", desc: "Indexation, redirects, titles, and speed items are written down." },
      { title: "Fixes on the site you have", desc: "We edit what the stack allows. We do not pretend a locked template is flexible." },
      { title: "Content stays a separate scope", desc: "New articles are not smuggled in as technical work." },
    ],
    why:
      "Technical SEO in Mangalore is often a screenshot of a score. We would rather change the items that score is pointing at, when they matter to crawling and to a buyer. The studio is at Nandi Gudda. We do not promise the score will hit a number.",
    points: ["A written technical list", "No score guarantee", "Rebuild recommended when the site cannot be fixed", "Done from Mangaluru"],
    offerLead: "Technical SEO",
    offerBody: "Engineering fixes for search, not a content retainer.",
    offers: [
      { title: "Crawl and index checks", desc: "What should be found, and what should not." },
      { title: "Redirects and addresses", desc: "Old URLs that people already share." },
      { title: "Templates that are slow or duplicated", desc: "The ones that affect real pages." },
      { title: "A note of what shipped", desc: "The changes, not a rank." },
    ],
    faqs: [
      { q: "Are technical SEO services in Mangalore the same as writing blogs?", a: "No. This is structure, speed, and indexation. Writing is a different quote." },
      { q: "Will you guarantee a PageSpeed score?", a: "No. We fix the items in the scope. A perfect score is not the product." },
      { q: "Can you work in our existing CMS?", a: "Often. If it cannot be edited safely, we will say so." },
      { q: "Do you need a rebuild?", a: "Only when the technical list cannot be done on the current site." },
    ],
  },
  {
    slug: "website-ranking-services-mangalore",
    name: "Website Ranking Services in Mangalore",
    line1: "Website Ranking Services",
    keywords: ["website ranking services Mangalore", "website ranking Mangalore", "rank a website Mangalore"],
    clause: "Work that can help a site be understood. We do not sell a ranking, a position, or a date for page one.",
    intro:
      "Website ranking services in Mangalore, in the way this phrase is usually sold, promise a place on Google. Dark Media Tech will not sell that. From our Mangaluru studio we improve the pages, the structure, and the local details that a ranking depends on. The position itself is not a deliverable. If a vendor offers page one by a date, that is a different kind of offer from ours, and we will not match it.",
    cards: [
      { title: "The inputs, not the trophy", desc: "Titles, pages, speed, and a consistent address. Those are the services." },
      { title: "No date for position one", desc: "We will not put a ranking on a calendar." },
      { title: "Honest reporting", desc: "What changed on the site. Not a rented screenshot of someone else's result." },
    ],
    why:
      "Mangalore ranking services are often a guarantee with no page edits. We refuse the guarantee and do the edits. You can review the list at Kotichennaya Circle. Buying links to force a position is out of scope.",
    points: ["No position sold", "No purchased links", "Pages and technical items in the quote", "Studio in Mangaluru"],
    offerLead: "Ranking work",
    offerBody: "The site work people mean when they ask about rankings. Not a guaranteed place.",
    offers: [
      { title: "A page map", desc: "Which URLs should answer which queries." },
      { title: "On-page fixes", desc: "So the page says what the query asked." },
      { title: "Technical blockers", desc: "Anything that keeps useful pages from being read." },
      { title: "A record of changes", desc: "So you can see the work without a fake rank." },
    ],
    faqs: [
      { q: "Do website ranking services in Mangalore mean you will rank us first?", a: "No. We do not sell rankings." },
      { q: "Why use the word ranking at all?", a: "Because that is the search. The service we actually deliver is the site work a ranking depends on." },
      { q: "Can you move a page this month?", a: "We can publish fixes this month. We cannot schedule Google's response." },
      { q: "Do you buy backlinks?", a: "No." },
    ],
  },
  {
    slug: "google-business-profile-optimization-mangalore",
    name: "Google Business Profile Optimization in Mangalore",
    line1: "Google Business Profile",
    line2: "Optimization in Mangalore",
    keywords: ["Google Business Profile optimization Mangalore", "Google Business Profile Mangalore", "GBP optimization Mangalore"],
    clause: "Your profile, your categories, and details that match the website. We do not buy reviews or promise the map pack.",
    intro:
      "Google Business Profile optimization in Mangalore is work on the listing customers see on the map. Dark Media Tech cleans categories, hours, the description, and the photos you are allowed to use, from our Mangaluru studio. The profile stays in your Google account. We do not create a listing at an address you do not occupy, we do not buy reviews, and we do not promise the top of the map.",
    cards: [
      { title: "A profile you own", desc: "We can help manage it. We do not lock you out of the Google account." },
      { title: "Categories that match the business", desc: "Not every category Google offers. The ones you can defend." },
      { title: "The website confirms it", desc: "Name, phone, and hours on the site should match the profile." },
    ],
    why:
      "Mangalore profiles drift: old hours, a tracking number, a category for a service you stopped. We correct those and stop. A stack of fake reviews is not optimization. The check can be reviewed at Kotichennaya Circle.",
    points: ["You own the profile", "No purchased reviews", "No fake address", "No map-pack promise"],
    offerLead: "Business Profile",
    offerBody: "Listing optimization for Mangalore businesses.",
    offers: [
      { title: "A profile review", desc: "What is wrong, duplicated, or out of date." },
      { title: "Categories and description", desc: "Plain language, approved by you." },
      { title: "Hours, phone, and photos", desc: "Only details you can stand behind." },
      { title: "A match to the website", desc: "So the two do not contradict." },
    ],
    faqs: [
      { q: "Does Google Business Profile optimization in Mangalore include fake reviews?", a: "No." },
      { q: "Will you verify the listing for us?", a: "We can guide the process. Verification stays on your Google account, at your address." },
      { q: "Can you optimize a profile for a city we do not serve?", a: "No. The listing should describe a real location and a real service area." },
      { q: "Do you guarantee map position?", a: "No." },
    ],
  },
  {
    slug: "ecommerce-seo-services-mangalore",
    name: "E-commerce SEO Services in Mangalore",
    line1: "E-commerce SEO Services",
    keywords: ["e-commerce SEO services Mangalore", "ecommerce SEO Mangalore", "online store SEO Mangalore"],
    clause: "Category and product pages that can be crawled and understood. Building the shop is a separate quote.",
    intro:
      "E-commerce SEO services in Mangalore are for a store that already exists or is being built with indexable product pages. Dark Media Tech works on categories, product titles, and the technical issues that hide a catalogue, from our Mangaluru studio. We do not promise a product will outrank a marketplace. We do not stuff city names into every product title. If you need the shop built, that is a development quote.",
    cards: [
      { title: "Categories a buyer can scan", desc: "A category should say what the products are, not repeat one keyword." },
      { title: "Product pages with facts", desc: "The title and the description have to match the item you sell." },
      { title: "A catalogue that can be maintained", desc: "SEO on products nobody updates will rot. The edit path matters." },
    ],
    why:
      "Mangalore store SEO often means the same sentence pasted under every product. We write the structure first: which categories deserve a page, and which products are thin. Reviews are at Nandi Gudda. Payment setup and a new theme are not this service.",
    points: ["No marketplace outrank promise", "No city stuffed into every product", "Shop build quoted separately", "Done from Mangaluru"],
    offerLead: "Store SEO",
    offerBody: "Search work for Mangalore catalogues.",
    offers: [
      { title: "A category map", desc: "Which collections should be pages." },
      { title: "Product title and copy rules", desc: "So new items do not undo the structure." },
      { title: "Technical catalogue issues", desc: "Duplicates, filters, and pages that should not be indexed." },
      { title: "A short list of fixes", desc: "What we changed and what the store still needs." },
    ],
    faqs: [
      { q: "Do e-commerce SEO services in Mangalore include building the store?", a: "No. This is search work on a catalogue. The shop itself is a development project." },
      { q: "Will you rank us above Amazon or a marketplace?", a: "No. We will not promise that." },
      { q: "Can you write every product description?", a: "When the count is in the quote. A large catalogue needs a rule your team can follow, not a one-time dump." },
      { q: "Do you change prices or stock?", a: "No. Those stay with your store admin." },
    ],
  },
  {
    slug: "website-seo-audit-services-mangalore",
    name: "Website SEO Audit Services in Mangalore",
    line1: "Website SEO Audit",
    line2: "Services in Mangalore",
    keywords: ["website SEO audit services Mangalore", "SEO audit Mangalore", "website audit Mangalore"],
    clause: "A written audit of what search engines can see and what the pages fail to answer. Fixes are a separate quote.",
    intro:
      "Website SEO audit services in Mangalore are a diagnosis, not a retainer in disguise. Dark Media Tech reads the site from our Mangaluru studio and writes what is blocked, duplicated, slow in a way that matters, or missing as a page. You can stop after the audit. Implementation is optional and priced on the list. We do not hide a rank guarantee inside an audit, because an audit cannot promise a position.",
    cards: [
      { title: "A document, not a dashboard login", desc: "You get the findings in writing. The useful ones are specific to your URLs." },
      { title: "What we will not pad", desc: "Generic advice that applies to every website is not billed as a finding." },
      { title: "A choice after the audit", desc: "Fix it with us, fix it yourselves, or rebuild if the site cannot take the fixes." },
    ],
    why:
      "Mangalore audits are often a tool export with the logo swapped. We write what a person should change, and why. You can review it at Kotichennaya Circle. Buying the audit does not lock you into a monthly plan.",
    points: ["Written findings", "Implementation optional", "No rank attached to the audit", "Prepared in Mangaluru"],
    offerLead: "SEO audits",
    offerBody: "A one-time read of a Mangalore website.",
    offers: [
      { title: "Index and crawl notes", desc: "What can be found and what is in the way." },
      { title: "On-page notes", desc: "Titles, headings, and pages that do not answer a query." },
      { title: "Local notes", desc: "Whether the address and the listing agree." },
      { title: "A fix list", desc: "Ordered, so you can see what is worth doing first." },
    ],
    faqs: [
      { q: "Does a website SEO audit in Mangalore include the fixes?", a: "No. The audit is the written list. Fixes are quoted from that list if you want us to do them." },
      { q: "How long does an audit take?", a: "A focused business site is often a short engagement after we have access. A large catalogue takes longer. The quote says which." },
      { q: "Do you need a login?", a: "For a public read, no. For a full technical pass, access helps, and it stays yours." },
      { q: "Will the audit tell us our future rank?", a: "No. It tells you what is wrong or missing." },
    ],
  },
];

const built = specs.map(build);

export const seoAnalyticsPages: WebDevelopmentLocation[] = built.map((page) => ({
  ...page,
  content: {
    ...page.content,
    localPagesHeading: "SEO in Mangalore",
    localPagesIntro:
      "The studio is in Mangaluru. These pages cover search, local listings, technical fixes, and audits. They do not mean a second office, and they do not sell a ranking.",
    localPages: built
      .filter((item) => item.seo.path !== page.seo.path)
      .map((item) => ({ title: item.serviceName, href: item.seo.path })),
  },
}));

export function getSeoAnalyticsPage(slug: string) {
  return seoAnalyticsPages.find((page) => page.slug === slug);
}
