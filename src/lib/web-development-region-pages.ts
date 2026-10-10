import type { AreaServed, FaqItem, ServiceLink, TextBlock, WebDevelopmentLocation } from "@/lib/web-development-locations";

type PlaceId = "bangalore" | "bengaluru" | "karnataka" | "udupi" | "bantwal" | "saudi" | "dammam" | "al-jubail";
type Market = "bangalore" | "karnataka" | "udupi" | "bantwal" | "saudi";

type Place = {
  id: PlaceId;
  market: Market;
  label: string;
  bit: string;
  area: AreaServed;
  hubTitle: string;
  hubHref: string;
};

const places: Record<PlaceId, Place> = {
  bangalore: {
    id: "bangalore",
    market: "bangalore",
    label: "Bangalore",
    bit: "bangalore",
    area: { "@type": "City", name: "Bengaluru" },
    hubTitle: "Website Development Company in Bangalore",
    hubHref: "/services/web-development/bangalore",
  },
  bengaluru: {
    id: "bengaluru",
    market: "bangalore",
    label: "Bengaluru",
    bit: "bengaluru",
    area: { "@type": "City", name: "Bengaluru" },
    hubTitle: "Website Development Company in Bangalore",
    hubHref: "/services/web-development/bangalore",
  },
  karnataka: {
    id: "karnataka",
    market: "karnataka",
    label: "Karnataka",
    bit: "karnataka",
    area: { "@type": "State", name: "Karnataka" },
    hubTitle: "Website Development Company in Karnataka",
    hubHref: "/services/web-development/karnataka",
  },
  udupi: {
    id: "udupi",
    market: "udupi",
    label: "Udupi",
    bit: "udupi",
    area: { "@type": "City", name: "Udupi" },
    hubTitle: "Website Development Company in Udupi",
    hubHref: "/services/web-development/website-development-company-udupi",
  },
  bantwal: {
    id: "bantwal",
    market: "bantwal",
    label: "Bantwal",
    bit: "bantwal",
    area: { "@type": "City", name: "Bantwal" },
    hubTitle: "Website Development Company in Bantwal",
    hubHref: "/services/web-development/website-development-company-bantwal",
  },
  saudi: {
    id: "saudi",
    market: "saudi",
    label: "Saudi Arabia",
    bit: "saudi-arabia",
    area: { "@type": "Country", name: "Saudi Arabia" },
    hubTitle: "Website Development Company in Saudi Arabia",
    hubHref: "/services/web-development/website-development-company-saudi-arabia",
  },
  dammam: {
    id: "dammam",
    market: "saudi",
    label: "Dammam",
    bit: "dammam",
    area: { "@type": "City", name: "Dammam" },
    hubTitle: "Website Development Company in Saudi Arabia",
    hubHref: "/services/web-development/website-development-company-saudi-arabia",
  },
  "al-jubail": {
    id: "al-jubail",
    market: "saudi",
    label: "Al Jubail",
    bit: "al-jubail",
    area: { "@type": "City", name: "Al Jubail" },
    hubTitle: "Website Development Company in Saudi Arabia",
    hubHref: "/services/web-development/website-development-company-saudi-arabia",
  },
};

const hubs: Record<"web" | "seo" | "social" | "brand" | "video", ServiceLink> = {
  web: { title: "Web Development Services", href: "/services/web-development" },
  seo: { title: "SEO and Analytics", href: "/services/seo-analytics" },
  social: { title: "Social Media Management", href: "/services/social-media-management" },
  brand: { title: "Branding", href: "/services/branding" },
  video: { title: "Video Production", href: "/services/video-production" },
};

const contact: ServiceLink = { title: "Contact our team", href: "/contact-us" };
const studio: ServiceLink = { title: "Website Development Company in Mangalore", href: "/services/web-development/mangalore" };

const office: Record<PlaceId, string> = {
  bangalore: "There is no Bangalore office. Dark Media Tech works remotely from Mangaluru, at Kotichennaya Circle, Nandi Gudda.",
  bengaluru: "Bengaluru is the official name of the city. We still have one studio, in Mangaluru, and this work is remote.",
  karnataka: "The only studio is in Mangaluru. We do not run a branch in Mysuru, Hubballi, or anywhere else in Karnataka.",
  udupi: "There is no Udupi office. Udupi projects are handled from our Mangaluru studio, about an hour south.",
  bantwal: "There is no Bantwal office. Bantwal is in Dakshina Kannada, and the studio is in Mangaluru at Nandi Gudda.",
  saudi: "There is no office in Riyadh, Jeddah, Dammam, or Al Jubail. Saudi Arabia work is remote from our Mangaluru studio.",
  dammam: "There is no office in Dammam. Eastern Province work is remote from our Mangaluru studio.",
  "al-jubail": "There is no office in Al Jubail. Industrial-city work is remote from our Mangaluru studio.",
};

function crumbs(name: string, path: string) {
  return [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Web Development", path: "/services/web-development" },
    { name, path },
  ];
}

type Copy = Partial<Record<PlaceId, string>>;

type Spec = {
  slug: string;
  name: string;
  line1?: string;
  line2?: Copy;
  exact?: string;
  hub: keyof typeof hubs;
  places: PlaceId[];
  keywords: string[];
  clause: string;
  intro: Copy;
  cards: TextBlock[];
  why: Copy;
  points: string[];
  offerLead: string;
  offerBody: string;
  offers: TextBlock[];
  faqs: { q: string; a: string }[];
  related?: { slug: string; name: string };
};

function pageName(spec: Spec, place: Place) {
  return spec.exact ?? `${spec.name} in ${place.label}`;
}

function pagePath(spec: Spec, place: Place) {
  if (spec.exact) return `/services/web-development/${spec.slug}`;
  return `/services/web-development/${spec.slug}-${place.bit}`;
}

function sibling(spec: Spec, place: Place): ServiceLink | undefined {
  const otherId: PlaceId | undefined = place.id === "bangalore" ? "bengaluru" : place.id === "bengaluru" ? "bangalore" : undefined;
  if (!otherId || !spec.places.includes(otherId) || spec.exact) return undefined;
  const other = places[otherId];
  return { title: `${spec.name} in ${other.label}`, href: pagePath(spec, other) };
}

function build(spec: Spec, place: Place, index: number): WebDevelopmentLocation {
  const path = pagePath(spec, place);
  const name = pageName(spec, place);
  const intro = spec.intro[place.id];
  const why = spec.why[place.id];
  if (!intro || !why) throw new Error(`Missing copy for ${spec.slug} ${place.id}`);
  const related = spec.related && !spec.exact
    ? { title: `${spec.related.name} in ${place.label}`, href: `/services/web-development/${spec.related.slug}-${place.bit}` }
    : spec.related && spec.exact
      ? undefined
      : undefined;
  const explore = [hubs[spec.hub], { title: place.hubTitle, href: place.hubHref }, sibling(spec, place), related, studio, contact]
    .filter((link): link is ServiceLink => Boolean(link))
    .filter((link, i, all) => link.href !== path && all.findIndex((item) => item.href === link.href) === i);

  const ending = [
    office[place.id],
    place.id === "saudi"
      ? "Arabic wording, when a page needs it, is approved before launch."
      : "The quote names the pages, the timeline, and what happens after launch.",
  ][index % 2];

  return {
    slug: spec.exact ? spec.slug : `${spec.slug}-${place.bit}`,
    name: place.label,
    market: place.market,
    seo: {
      path,
      title: `${name} | Dark Media`,
      description: `${name}. ${spec.clause} ${ending}`.replace(/\s+/g, " "),
      keywords: spec.exact
        ? [name.toLowerCase(), ...spec.keywords]
        : [name.toLowerCase(), ...spec.keywords.map((word) => `${word} ${place.label}`)],
    },
    serviceName: name,
    areaServed: place.area,
    content: {
      badgeText: place.label,
      titleLine1: spec.line1 ?? spec.name,
      titleLine2: spec.line2?.[place.id] ?? (spec.exact ? "" : `in ${place.label}`),
      compactTitle: true,
      intro,
      introLinks: true,
      cards: spec.cards,
      whyEyebrow: "Why work with us",
      whyTitleLead: spec.line1 ?? spec.name,
      whyTitleAccent: spec.exact ? "" : `in ${place.label}`,
      whyBody: why,
      whyPoints: spec.points,
      offerEyebrow: "What we offer",
      offerEyebrowTag: "div",
      offerTitleLead: spec.offerLead,
      offerTitleRest: "for",
      offerTitleAccent: place.label,
      offerTitleTag: "h2",
      offerBody: spec.offerBody,
      offers: spec.offers,
      faqs: [
        { question: `Do you have an office for this work in ${place.label}?`, answer: office[place.id] },
        ...spec.faqs.map((faq) => ({ question: faq.q.replaceAll("{place}", place.label), answer: faq.a.replaceAll("{place}", place.label) })),
      ],
      breadcrumb: crumbs(name, path),
      services: explore,
    },
  };
}

const specs: Spec[] = [
  {
    slug: "website-development-company",
    name: "Website Development Company",
    hub: "web",
    places: ["bengaluru", "udupi", "bantwal", "saudi"],
    keywords: ["website development company", "web development company", "website developers"],
    clause: "Dark Media Tech designs and builds business websites from our Mangaluru studio.",
    intro: {
      bengaluru: "A website development company for Bengaluru teams does not need a desk in the city to build a clear site. Dark Media Tech is in Mangaluru. Bengaluru work is remote: calls, a written page list, and reviews you can join. We build the public site, and the enquiry path behind it, for product companies and professional firms that use the official city name.",
      udupi: "Udupi businesses, from hotels and colleges around Manipal to shops near the temple town, still need a site that says what they offer and how to call. Dark Media Tech is a website development company serving Udupi from Mangaluru. There is no Udupi office. The pages are scoped around the services people already ask for.",
      bantwal: "Bantwal firms sit close to Mangaluru, in Dakshina Kannada, and many still send customers to a phone number with no website behind it. Website development for Bantwal, from our Nandi Gudda studio, is a short site: the offer, the place, and a way to enquire. We do not pretend there is a Bantwal branch.",
      saudi: "A website development company working with Saudi Arabia builds the site in English, Arabic, or both, and does it remotely. Dark Media Tech is in Mangaluru. There is no Riyadh or Jeddah office. The scope names the languages, the pages, and who approves the Arabic wording before anything goes live.",
    },
    cards: [
      { title: "A page list before design", desc: "Services, proof, and the enquiry come first. Visual design follows that list for every remote project." },
      { title: "Phone layouts first", desc: "Customers open these sites on a phone. The small screen is designed as the main case, then checked on a desk." },
      { title: "One studio, a written scope", desc: "You get the pages, the timeline, and what is not included. Remote clients see the same quote a Mangaluru client would." },
    ],
    why: {
      bengaluru: "Bengaluru companies can hire a local vendor on every street. The useful test is who designs, who builds, and who answers after launch. We do all three from Mangaluru. Website development for Bengaluru is remote, and we will not describe an office we do not have.",
      udupi: "Udupi clients can review work on a call or come to Mangaluru. A website development company for Udupi should still be specific: which pages, whose photos, and what the front desk will update. That is the brief we write.",
      bantwal: "Because Bantwal is near the studio, a review in Mangaluru is practical. The website is still a proper build, not a template with the town name dropped in. We agree the pages before design starts.",
      saudi: "Saudi website projects need a clear language plan. We build the structure, the English pages, and the Arabic layout when it is in the scope. We do not publish Arabic claims you have not approved.",
    },
    points: ["A written page list before design", "Remote reviews with the same team that builds", "Launch and a named way to request edits", "No second office invented for the market"],
    offerLead: "Websites",
    offerBody: "The website builds we scope from Mangaluru for clients outside the studio city.",
    offers: [
      { title: "Company sites", desc: "Services, proof, and a contact path the office recognises." },
      { title: "Stores, when you sell products", desc: "A catalogue and checkout, quoted separately from a brochure site." },
      { title: "Landing pages", desc: "One offer and one action, for a campaign or a season." },
      { title: "Care after launch", desc: "Edits and fixes from the team that built the site." },
    ],
    faqs: [
      { q: "How are {place} website projects priced?", a: "By the pages and features, not by a city rate. A short company site and a store are different quotes." },
      { q: "How long does a build take?", a: "A focused company site is often a few weeks after the content is ready. Larger sites take longer because reviews and catalogues add steps." },
      { q: "Can our own staff update the site?", a: "Yes, when the scope includes that. We agree what you will change and what stays with us." },
      { q: "Will you claim a local office?", a: "No. The studio address is Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002." },
    ],
  },
  {
    slug: "best-website-design-company",
    name: "Best Website Design Company",
    hub: "web",
    places: ["bangalore", "bengaluru"],
    keywords: ["best website design company", "website design company", "web design company"],
    clause: "We design the pages and build them from Mangaluru. We do not claim a city ranking.",
    intro: {
      bangalore: "People searching for the best website design company in Bangalore are comparing studios. Dark Media Tech designs the pages and builds them. Bangalore work is remote from Mangaluru. A useful comparison is the page list, the timeline, and who maintains the site. We do not publish a rank or an award.",
      bengaluru: "A search for the best website design company in Bengaluru is a comparison, not a trophy. We use the official city name on this page and the same rule: design and development stay in one team, working remotely from Mangaluru. There is no Bengaluru office and no ranking to sell.",
    },
    cards: [
      { title: "Structure before colour", desc: "Bangalore and Bengaluru buyers should see the page list before a visual theme. We review that on a call." },
      { title: "Design that gets built", desc: "A picture of a website is not a website. The people who design the pages also develop them." },
      { title: "No invented rank", desc: "We will not call ourselves number one in Bangalore or Bengaluru. Judge the scope." },
    ],
    why: {
      bangalore: "The best website design company in Bangalore, for a working business, is the one that can ship the site you described. We start with the services and the enquiries. Visual design follows. Reviews are remote. The studio is in Mangaluru.",
      bengaluru: "Bengaluru teams often have a product and a sales conversation that the site has to support. We design for that job, then build it. The official name of the city does not create a second office for us.",
    },
    points: ["Design and development in one team", "Page structure agreed before visual design", "Remote reviews with Bangalore teams", "Maintenance available after launch"],
    offerLead: "Design",
    offerBody: "Website design for Bangalore and Bengaluru teams, delivered from Mangaluru.",
    offers: [
      { title: "Page structure", desc: "What belongs on the home page and what gets its own page." },
      { title: "Interface design", desc: "Type, spacing, and layout for phone and desk." },
      { title: "A redesign of an existing site", desc: "Keep pages that already bring enquiries. Replace clutter." },
      { title: "Build included", desc: "The approved screens are developed by the same studio." },
    ],
    faqs: [
      { q: "How do you pick the best website design company in {place}?", a: "Ask who designs, who builds, and who you call after launch. We do that work from Mangaluru. We do not sell a city ranking." },
      { q: "Do you only design?", a: "No. For most projects we design and build. A design-only file is possible if another team will develop, and the quote will say so." },
      { q: "Can we meet in {place}?", a: "No. There is no local office. Reviews are calls. You can visit the Mangaluru studio if you are there." },
      { q: "Are the sites responsive?", a: "Yes. Phone layout is part of the design, not a later shrink." },
    ],
  },
  {
    slug: "web-design-company",
    name: "Web Design Company",
    hub: "web",
    places: ["karnataka", "udupi", "bantwal", "saudi"],
    keywords: ["web design company", "website design company", "web designers"],
    clause: "Page design and the build stay with one Mangaluru team.",
    intro: {
      karnataka: "A web design company for Karnataka can work from one studio. Ours is in Mangaluru. Teams in other districts join by call. We design the pages around the offer and then build them, so a Karnataka business is not left holding a mockup.",
      udupi: "Web design for Udupi should make a hotel, a college, or a local service obvious on a phone. Dark Media Tech designs those pages from Mangaluru. There is no Udupi studio. The design includes the words, the mobile screens, and the build.",
      bantwal: "Bantwal businesses need a site their customers can read, not a theme with the town name pasted on. We design and build from Mangaluru, a short trip away, and we do not open a Bantwal office for the project.",
      saudi: "Web design for Saudi Arabia has to say which language the page is in. We design English layouts from Mangaluru and Arabic layouts when the scope includes them, with right-to-left structure planned before development. You approve the wording.",
    },
    cards: [
      { title: "Design tied to the enquiry", desc: "The page has a job: call, form, or application. Decoration that hides that job does not ship." },
      { title: "Mobile screens signed off", desc: "We review the phone width before development, because that is how most visits arrive." },
      { title: "The same team builds it", desc: "Web design here includes development unless the quote says another team will build." },
    ],
    why: {
      karnataka: "Karnataka web design fails when the file never becomes a site. We keep both in one scope and one studio in Mangaluru.",
      udupi: "Udupi pages should name the real service and the real area. We design for that, then build it remotely from Mangaluru.",
      bantwal: "A Bantwal firm can approve designs in Mangaluru. The pages stay specific to the business, not to a generic coastal template.",
      saudi: "Saudi web design includes the language decision. An English-only page is fine when that is the brief. A bilingual page is a different scope.",
    },
    points: ["Structure agreed before visual design", "Phone layout reviewed first", "Build included unless the quote says otherwise", "No local branch outside Mangaluru"],
    offerLead: "Web design",
    offerBody: "Design and development for clients we serve from Mangaluru.",
    offers: [
      { title: "Homepage and service pages", desc: "One clear offer on the first screen, with detail on inner pages." },
      { title: "Redesigns", desc: "A new layout that keeps what already earns enquiries." },
      { title: "Campaign pages", desc: "A single page for one offer." },
      { title: "Handover", desc: "Files and a live site, plus a note on how edits work." },
    ],
    faqs: [
      { q: "Is web design in {place} only the pictures?", a: "No. We design and, on most projects, build. If you only need the design files, say so at the start." },
      { q: "Who approves the pages?", a: "Someone on your side who knows the offer. We do not publish claims you have not checked." },
      { q: "How do reviews happen?", a: "On a call or a shared screen. The studio address, if you want to visit, is in Mangaluru." },
      { q: "Can the design match an existing brand?", a: "Yes. If the identity is already set, the site follows it." },
    ],
  },
  {
    slug: "custom-software-development",
    name: "Custom Software Development Company",
    hub: "web",
    places: ["bangalore", "bengaluru", "karnataka", "saudi"],
    keywords: ["custom software development", "bespoke software", "custom software developers"],
    clause: "We build the staff tools and workflows your team actually repeats. We do not resell a branded suite.",
    intro: {
      bangalore: "Custom software for a Bangalore company usually starts when a spreadsheet is shared by too many people. Dark Media Tech builds that system remotely from Mangaluru: bookings, catalogues, or an internal queue. There is no Bangalore office. If a smaller website will do, we say so.",
      bengaluru: "Bengaluru product and operations teams often need software beside the marketing site. We write the workflow down, then build the screens, from Mangaluru. Custom software development for Bengaluru is remote. We do not invent a local engineering office.",
      karnataka: "Custom software development for Karnataka is for a team that has outgrown a sheet. The studio is in Mangaluru. A branch in another district uses the same browser-based system. We scope the screens, not a generic ERP brand.",
      saudi: "Custom software for a Saudi company is scoped around the workflow you describe, and delivered remotely from Mangaluru. We do not claim a Saudi software licence or a local entity. Access, language, and who approves the screens are part of the quote.",
    },
    cards: [
      { title: "The daily task first", desc: "We write the steps staff repeat before we name a feature list." },
      { title: "Browser-based tools", desc: "The people who use it open a login. There is no special install on every desk." },
      { title: "A first version that is small", desc: "The morning screen ships first. Extra modules wait until that version is used." },
    ],
    why: {
      bangalore: "Bangalore teams can buy a large product and still retype leads. We build only the gap. Reviews are calls. The studio is in Mangaluru.",
      bengaluru: "Bengaluru work is remote and specific. You see the screen list before development. We will not clone a famous product on a local budget.",
      karnataka: "A Karnataka firm with two locations needs one record, not two sheets. We build that from Mangaluru and we do not open another office to do it.",
      saudi: "Saudi software projects stay in your accounts and your data. We build the tool. We do not keep a copy of customer records for ourselves.",
    },
    points: ["Workflow written before interface design", "Quoted separately from a marketing site", "Roles for the people who do the work", "No resale of a branded software suite"],
    offerLead: "Custom software",
    offerBody: "Operational software built from the Mangaluru studio.",
    offers: [
      { title: "Internal tools", desc: "Queues, status, and the few reports the owner reads." },
      { title: "Customer logins", desc: "Orders, bookings, or applications the outside person can check." },
      { title: "A link from the public site", desc: "Forms that create a record, so nobody retypes the lead." },
      { title: "A second release", desc: "The changes the first month of use reveals." },
    ],
    faqs: [
      { q: "What does custom software development in {place} include?", a: "The screens and roles in the scope. Dark Media Tech builds them from Mangaluru. Extra integrations are included only if the quote names them." },
      { q: "Do you build desktop software?", a: "The software we ship is used in the browser. A mobile app is a separate scope." },
      { q: "How is it priced?", a: "By the workflow. A small internal tool and a multi-role portal are different projects." },
      { q: "Will you maintain it?", a: "Yes, when you want that. New features are quoted on top of the original scope." },
    ],
  },
  {
    slug: "software-development-company",
    name: "Software Development Company",
    hub: "web",
    places: ["bangalore", "bengaluru", "karnataka", "udupi", "bantwal", "saudi"],
    keywords: ["software development company", "software company", "software developers"],
    clause: "Websites, web applications, and custom tools, scoped separately and built in Mangaluru.",
    intro: {
      bangalore: "A software development company for Bangalore should say whether you need a website, an application, or both. We take Bangalore work remotely from Mangaluru. We are not a staffing firm placing developers on outside contracts. There is no Bengaluru office.",
      bengaluru: "Software development for Bengaluru teams is a product with a beginning and a launch, not a seat on someone else's project. Dark Media Tech designs and builds that from Mangaluru. Bengaluru is the city's official name. Our only studio is still in Mangaluru.",
      karnataka: "Software development for Karnataka runs from Mangaluru. A company in another district gets the same written scope: the public site, the system behind it, or both. We do not claim offices across the state.",
      udupi: "Udupi colleges, hotels, and traders sometimes need more than a page. Software development for Udupi, from our Mangaluru studio, is the website plus the tool the office opens every morning. There is no Udupi office.",
      bantwal: "A software development company serving Bantwal is still the Mangaluru studio. Bantwal businesses get a scoped site or a small system, reviewed in Mangaluru if you want to sit together. We do not open a branch in the town.",
      saudi: "Software development for Saudi Arabia is remote. We build websites and web software from Mangaluru. We are not a Saudi IT contractor, and we do not supply on-site hardware support in the Kingdom.",
    },
    cards: [
      { title: "The website when that is the urgent job", desc: "Many clients arrive because the public site is the problem. We build that first if it is what customers need." },
      { title: "Software when the page is not enough", desc: "Logins, queues, and catalogues are scoped on their own." },
      { title: "The same company after launch", desc: "Fixes and small changes stay with the team that shipped the work." },
    ],
    why: {
      bangalore: "Bangalore software projects are easy to overscope. We split the marketing site from the application and quote them apart. Reviews are remote.",
      bengaluru: "Bengaluru buyers can compare many vendors. We are specific about the screens and the timeline, and we do not invent a headcount in the city.",
      karnataka: "One Mangaluru studio can build for a Karnataka company. The city does not change the engineering. The scope does.",
      udupi: "Udupi software should match a real desk: admissions, bookings, or a stock list. We will not sell a platform the team will not open.",
      bantwal: "Bantwal projects stay small enough to explain. If a website is enough, we do not add software to make the quote larger.",
      saudi: "Saudi software work needs a clear owner on your side and accounts that stay yours. We build from Mangaluru and we say what we will not operate.",
    },
    points: ["Web, software, and apps quoted as separate pieces", "No staff augmentation", "A scope you can read before work starts", "Maintenance from the same studio"],
    offerLead: "Software",
    offerBody: "What this studio means by software development.",
    offers: [
      { title: "Business websites", desc: "The public explanation of the company and a way to enquire." },
      { title: "Web applications", desc: "Logins and workflows for staff or customers." },
      { title: "Stores", desc: "Catalogues and checkout when you sell products." },
      { title: "Care after release", desc: "Fixes and small changes, quoted as their own plan." },
    ],
    faqs: [
      { q: "Are you a software development company with an office in {place}?", a: "No. The only office is in Mangaluru. {place} projects are delivered from there." },
      { q: "Do you place developers on client teams?", a: "No. We take products we can scope: a site, an application, or an app." },
      { q: "Can we start with the website?", a: "Yes. That is often the right order. The application can wait until the public site is in use." },
      { q: "Who designs the interface?", a: "We do. Software from this studio includes the screens. They are not handed to another agency to make usable." },
    ],
  },
  {
    slug: "digital-marketing-agency",
    name: "Digital Marketing Agency",
    hub: "seo",
    places: ["bangalore", "bengaluru", "karnataka", "udupi", "bantwal", "saudi"],
    keywords: ["digital marketing agency", "digital marketing company", "online marketing"],
    clause: "Search, ads, and social are quoted separately. Ad spend stays in your account.",
    intro: {
      bangalore: "A digital marketing agency for Bangalore should name the channel. Search, ads, and social are different jobs. Dark Media Tech plans them remotely from Mangaluru, and we build or fix the page people land on. There is no Bangalore marketing office.",
      bengaluru: "Bengaluru campaigns fail when the site cannot take the enquiry. We look at the offer first, then pick the channel, working remotely from Mangaluru. Digital marketing for Bengaluru does not mean we have a team sitting in the city.",
      karnataka: "Digital marketing for Karnataka is run from Mangaluru. A business in another district gets a written channel plan, not a bundle that hides a retainer inside a website quote.",
      udupi: "Udupi hotels, colleges, and local services usually need one offer marketed at a time. We plan that from Mangaluru. There is no Udupi agency office. Spend, if any, stays in your ad account.",
      bantwal: "Digital marketing for Bantwal is often a clear local page plus a small campaign, not a statewide media plan. We scope it from the Mangaluru studio. Bantwal does not get a branch.",
      saudi: "Digital marketing for Saudi Arabia is remote. We can plan search, paid social, and the landing page. Arabic ad copy is approved by you before it runs. We do not hold a Saudi trade licence.",
    },
    cards: [
      { title: "One channel at a time", desc: "We do not spray a budget across search, social, and ads before the offer is clear." },
      { title: "A page that can convert", desc: "Sending paid visits to a broken site is not a finished brief. We say when the page has to be fixed first." },
      { title: "Accounts you own", desc: "Google and Meta spend is paid from accounts in your name. Our fee is separate." },
    ],
    why: {
      bangalore: "Bangalore marketing is crowded with reports. We would rather show enquiries, spend, and the page that received the visit. The work is remote from Mangaluru.",
      bengaluru: "Bengaluru teams can meet us on a call and see the same scope a local studio would owe them. We will not promise the first position on Google.",
      karnataka: "A Karnataka campaign should match where you can actually serve the customer. We set that before anyone talks about reach.",
      udupi: "Udupi offers are often seasonal or local. The campaign should have an end, and the page should match the town you serve.",
      bantwal: "Bantwal marketing should sound like the business, not like a template calendar. We keep the plan small enough for the owner to approve.",
      saudi: "Saudi campaigns need a language and a location setting. We do not run Arabic ads you have not read. The account stays yours.",
    },
    points: ["Search, ads, and social quoted apart", "Landing pages scoped when the campaign needs them", "No guaranteed ranking", "No rented ad account"],
    offerLead: "Marketing",
    offerBody: "Channels we will name in a quote. Not every channel is included by default.",
    offers: [
      { title: "Search", desc: "Pages and local signals aimed at queries people already type." },
      { title: "Google Ads", desc: "Search campaigns pointed at a page that can take the enquiry." },
      { title: "Meta ads", desc: "Paid social for one offer, with a budget you set." },
      { title: "The page underneath", desc: "If the website cannot hold the campaign, we scope the fix." },
    ],
    faqs: [
      { q: "What does a digital marketing agency in {place} include?", a: "Only what the quote names. Hiring the studio does not silently include every channel." },
      { q: "Do you guarantee leads or rankings?", a: "No. We improve the page and run the campaign you approved. The market still decides." },
      { q: "Who owns the ad accounts?", a: "You do. We work inside accounts you control." },
      { q: "Can you market a business with no website?", a: "We start with the page. Paid traffic to a placeholder wastes the budget." },
    ],
  },
  {
    slug: "seo-services-company",
    name: "SEO Services Company",
    hub: "seo",
    places: ["bangalore", "bengaluru", "karnataka", "udupi", "saudi"],
    keywords: ["SEO services company", "SEO company", "search engine optimization"],
    clause: "We fix pages, structure, and local listings. We do not promise a number-one rank.",
    intro: {
      bangalore: "SEO for a Bangalore company starts with the pages you already have. Dark Media Tech looks at what can be crawled, what is slow, and what a buyer cannot find. The work is remote from Mangaluru. We do not sell a pile of thin location pages.",
      bengaluru: "An SEO services company for Bengaluru should treat Bangalore and Bengaluru as one city. We use the spelling that fits the page. The studio is in Mangaluru. There is no Bengaluru SEO office, and there is no guaranteed position.",
      karnataka: "SEO for Karnataka is not a copy of one paragraph for every district. We write a page when the business actually serves that search with different information. The studio is in Mangaluru.",
      udupi: "Local SEO for Udupi means the listing, the address, and a site that confirms them. Dark Media Tech does that from Mangaluru. We do not buy reviews, and we do not promise the map pack.",
      saudi: "SEO for Saudi Arabia starts with the language and the pages. English and Arabic searches are different. We fix structure and titles from Mangaluru. Arabic copy is approved by you. We do not promise rankings in the Kingdom.",
    },
    cards: [
      { title: "Pages that match real searches", desc: "If the service has no page, search has nothing useful to show. We start there." },
      { title: "Technical cleanup", desc: "Titles, headings, speed, and addresses that stay stable." },
      { title: "No rank guarantee", desc: "We report what changed. We do not sell the first position." },
    ],
    why: {
      bangalore: "Bangalore SEO is often a monthly report with no page changes. We would rather edit the site. Reviews are remote. The studio is in Mangaluru.",
      bengaluru: "Bengaluru queries and Bangalore queries can point at the same business. We will not stuff both names into every sentence.",
      karnataka: "A Karnataka site should be findable for the services you offer, not for every town in the state. We refuse empty area pages.",
      udupi: "Udupi listings fail when the hours and the phone number disagree with the website. We check that before we add pages.",
      saudi: "Saudi search needs a language plan. We will not machine-translate a site and call it SEO.",
    },
    points: ["A query list before new pages are written", "Existing pages improved first", "Local details kept consistent", "No purchased rankings"],
    offerLead: "Search",
    offerBody: "SEO work we will put in a scope.",
    offers: [
      { title: "An audit", desc: "What search engines can see and what the site fails to answer." },
      { title: "On-page edits", desc: "Titles, headings, and internal links." },
      { title: "New service pages", desc: "Only when the page answers a real query with real information." },
      { title: "A short report", desc: "What changed and what we recommend next." },
    ],
    faqs: [
      { q: "How does an SEO services company in {place} price the work?", a: "By the pages and the technical list. A one-time fix and a monthly plan are different." },
      { q: "How fast will rankings move?", a: "Technical fixes can help sooner than new pages. We do not name a date for the first position." },
      { q: "Do you write the content?", a: "Yes, when the scope includes it. You still approve anything that describes the business." },
      { q: "Can you do SEO on a site you did not build?", a: "Yes, after an audit. If the site cannot be edited, a rebuild is the real job." },
    ],
  },
  {
    slug: "mobile-app-development",
    name: "Mobile App Development Company",
    hub: "web",
    places: ["bangalore", "bengaluru", "karnataka", "udupi", "saudi"],
    keywords: ["mobile app development company", "app developers", "Android app development"],
    clause: "Android and iOS apps for a repeat task. We say when a website is the better spend.",
    intro: {
      bangalore: "A mobile app development company for Bangalore should ask whether you need an app. Many products need a fast site first. When bookings, orders, or accounts bring people back, we build Android and iOS remotely from Mangaluru. There is no Bangalore app studio.",
      bengaluru: "App development for Bengaluru is remote. Dark Media Tech designs the flows and builds them from Mangaluru, usually with React Native when one codebase fits both stores. We do not keep a Bengaluru office for releases.",
      karnataka: "Mobile apps for Karnataka businesses are built in Mangaluru. A college, a clinic, or a store elsewhere in the state gets a scoped app, not a branch. Store accounts should belong to you.",
      udupi: "An app for an Udupi business makes sense when people return: a booking, a membership, a reorder. We build it from Mangaluru. There is no Udupi office, and we will recommend the website when an install would sit unused.",
      saudi: "Mobile apps for Saudi Arabia are remote builds from Mangaluru. We plan Arabic and English screens when both are required. The store accounts stay with your company. We do not claim a local release team in the Kingdom.",
    },
    cards: [
      { title: "A repeat task, not a brochure", desc: "If a person visits once, the website is the better product. An app is for the people who come back." },
      { title: "Android and iOS called out", desc: "Both stores are listed in the quote. Android covers most first releases. iOS is added when your buyers are there." },
      { title: "The same offer as the site", desc: "Prices and phone numbers should match. We do not ship an app that contradicts the website." },
    ],
    why: {
      bangalore: "Bangalore app projects drift when every idea is version one. We write the screens down. Reviews are calls. The studio is in Mangaluru.",
      bengaluru: "Bengaluru teams often already have a site. The app should share accounts and content with it when both are in the scope.",
      karnataka: "A Karnataka app is still built in Mangaluru. We will not pretend the release happens from another city.",
      udupi: "Udupi customers mostly find you on a phone browser first. The app comes after that path is clear.",
      saudi: "Saudi app screens need a language decision before design. Arabic interface work is scoped, not assumed.",
    },
    points: ["Website versus app decided before an icon is drawn", "Store accounts owned by your business", "A plan for the update after the first release", "No office outside Mangaluru"],
    offerLead: "Apps",
    offerBody: "App work we take when an install is actually required.",
    offers: [
      { title: "Booking and membership", desc: "Reserve, cancel, and see the next appointment." },
      { title: "Reorder and status", desc: "A short list for customers who already know what they buy." },
      { title: "A matching website", desc: "The public site remains how new people find you." },
      { title: "Release support", desc: "A build and listing prepared on accounts you control." },
    ],
    faqs: [
      { q: "When should a {place} business build an app?", a: "When people return often enough that installing an app is reasonable. Otherwise start with the website." },
      { q: "Do you build Android and iPhone apps?", a: "Yes. React Native is the usual way we ship them together. A fully separate native codebase is a larger quote." },
      { q: "Who publishes to the stores?", a: "We prepare the release. The accounts should belong to your business." },
      { q: "How is an app priced?", a: "By the screens, the accounts, and whether one store or both are included. There is no single app price." },
    ],
  },
  {
    slug: "ecommerce-development-company",
    name: "E-commerce Development Company",
    hub: "web",
    places: ["bangalore", "bengaluru", "karnataka"],
    keywords: ["e-commerce development company", "ecommerce developers", "online store development"],
    clause: "Product pages and checkout your team can update. Payment setup is named in the quote.",
    intro: {
      bangalore: "E-commerce development for Bangalore is a catalogue and a checkout people can finish on a phone. Dark Media Tech builds it remotely from Mangaluru. There is no Bengaluru store office. Delivery rules and who edits products are agreed before design.",
      bengaluru: "An e-commerce development company for Bengaluru should talk about operations, not only a theme. We scope products, payment, and shipping from Mangaluru. Bengaluru work is remote. The merchant account stays yours.",
      karnataka: "Stores for Karnataka businesses are built in Mangaluru. A seller may deliver in one city and ship the rest. Those are different promises, and the product page should say which one the buyer gets.",
    },
    cards: [
      { title: "A catalogue the team can edit", desc: "If adding a product needs a developer, the shop will go stale. The admin is part of the scope." },
      { title: "Checkout on a phone", desc: "Price, delivery, and payment have to be understandable on a small screen." },
      { title: "Your payment account", desc: "We name the provider. The merchant relationship stays with your business." },
    ],
    why: {
      bangalore: "Bangalore stores fail when a theme is skinned and the first price rule breaks it. We treat the shop as a product. Reviews are remote.",
      bengaluru: "Bengaluru catalogues often change weekly. We design the edit path for the person who knows the stock.",
      karnataka: "A Karnataka shop can serve more than one city. We write the shipping rules in plain language before launch.",
    },
    points: ["Products and delivery rules agreed first", "Admin your staff can use", "Launch includes a test order", "No hidden payment-account ownership"],
    offerLead: "Stores",
    offerBody: "E-commerce builds from the Mangaluru studio.",
    offers: [
      { title: "Product pages", desc: "What the item is, what is included, and how it arrives." },
      { title: "Cart and checkout", desc: "A short path, with costs visible before the last step." },
      { title: "Store admin", desc: "Prices and availability edited by your team." },
      { title: "A company page around the shop", desc: "So the store does not look ownerless." },
    ],
    faqs: [
      { q: "Do you build small catalogues in {place}?", a: "Yes. A short, accurate catalogue is a better first store than a large one nobody maintains." },
      { q: "Will you set up payments?", a: "When the scope includes them. You own the merchant account. Provider fees stay with you." },
      { q: "Can you move an existing shop?", a: "Often. We look at the products and the addresses that already get shared before we replace them." },
      { q: "Where is the team?", a: "Mangaluru. {place} store projects are remote. There is no local branch." },
    ],
  },
  {
    slug: "ecommerce-website-development",
    name: "E-commerce Website Development",
    hub: "web",
    places: ["udupi", "saudi"],
    keywords: ["e-commerce website development", "online store development", "shopping website"],
    clause: "A shop with clear products and delivery details, edited by your staff.",
    intro: {
      udupi: "E-commerce website development for Udupi is for a business that sells beyond the counter: food, goods, or a catalogue people reorder. Dark Media Tech builds it from Mangaluru. There is no Udupi office. Pickup in Udupi and shipping elsewhere should be written as different promises.",
      saudi: "E-commerce website development for Saudi Arabia needs a currency, a delivery promise, and a language plan. We build the shop remotely from Mangaluru. Arabic product text is approved by you. We do not claim a Saudi payment licence. The merchant account is yours.",
    },
    cards: [
      { title: "Products that need an explanation", desc: "The page says what the buyer receives and how it ships, before the cart." },
      { title: "A catalogue people can maintain", desc: "Prices and availability change. The admin is designed for that person." },
      { title: "A real business behind the shop", desc: "Contact details and policies sit with the products so the store is not anonymous." },
    ],
    why: {
      udupi: "Udupi sellers often mix a local pickup with parcels. We put that on the product page. The build happens in Mangaluru.",
      saudi: "A Saudi shop should not hide delivery and language until checkout. We decide those in the scope, remotely from Mangaluru.",
    },
    points: ["Catalogue size agreed up front", "Delivery or pickup written in plain language", "Staff can edit products after launch", "Payment accounts stay with you"],
    offerLead: "Online stores",
    offerBody: "Shop builds for Udupi and Saudi Arabia, from Mangaluru.",
    offers: [
      { title: "Product pages", desc: "Facts a buyer needs before they add anything." },
      { title: "Checkout", desc: "Few steps, visible costs, and a confirmation." },
      { title: "Admin", desc: "Add, hide, and reprice without a developer ticket each time." },
      { title: "Policies", desc: "Shipping and contact, so the shop names its owner." },
    ],
    faqs: [
      { q: "Is e-commerce website development in {place} only for large catalogues?", a: "No. Fewer accurate products are a better start." },
      { q: "Do you photograph the products?", a: "We plan the image slots. A photo shoot is scoped only if you want one." },
      { q: "What is not included?", a: "Payment provider fees, shipping contracts, and a warehouse. Those stay with your business." },
      { q: "Can you improve a shop we already have?", a: "Yes, when it is hard to edit or hard to finish on a phone." },
    ],
  },
  {
    slug: "ui-ux-design-agency",
    name: "UI/UX Design Agency",
    hub: "web",
    places: ["bangalore", "bengaluru", "karnataka", "saudi"],
    keywords: ["UI/UX design agency", "UX design company", "interface design"],
    clause: "We plan the flow and the screens, then build them unless the quote says otherwise.",
    intro: {
      bangalore: "A UI/UX design agency for Bangalore should make a task obvious. Dark Media Tech plans flows and screens for websites and apps, then builds them, remotely from Mangaluru. There is no Bengaluru design office. We do not sell a mood board with nowhere to go.",
      bengaluru: "UI/UX for Bengaluru products starts with the job the user came to do: enquire, sign up, or finish a step in the app. We design that path from Mangaluru. Bengaluru work is remote. The shipped interface is the one you approved.",
      karnataka: "UI/UX for a Karnataka organisation is often a website with too many departments on one screen. We decide the order, then build it, from Mangaluru. There is no second studio in the state.",
      saudi: "UI/UX for Saudi Arabia includes language and direction. An Arabic screen is not an English screen flipped at the end. We plan that from Mangaluru when Arabic is in the scope, and you approve the words.",
    },
    cards: [
      { title: "The flow before the visual layer", desc: "Find the offer, believe it, and take the next step. If that path is long, colour will not fix it." },
      { title: "Empty and error states", desc: "A login and a failed form are part of the design, not a surprise after launch." },
      { title: "Design your developers can build", desc: "Because we usually build as well, the screens stay within what the project will ship." },
    ],
    why: {
      bangalore: "Bangalore design requests often start at a mood. We start at the stuck step. Reviews are remote from Mangaluru.",
      bengaluru: "Bengaluru product teams need the marketing site and the product UI to feel like one company. We design both when both are in the scope.",
      karnataka: "A Karnataka institution with many services needs a way to choose. We cut the first screen to that choice.",
      saudi: "Saudi interface work fails if Arabic is pasted into an English layout. We scope the languages first.",
    },
    points: ["Flows agreed before visual design", "Phone screens reviewed as the main case", "Build included on most projects", "No local studio outside Mangaluru"],
    offerLead: "UI and UX",
    offerBody: "Interface work attached to a website, a web app, or a mobile product.",
    offers: [
      { title: "Task flows", desc: "The steps from arrival to enquiry, booking, or login." },
      { title: "Interface design", desc: "Type, navigation, and the states of each screen." },
      { title: "Redesign of a confusing product", desc: "We keep what people understand and redraw what they miss." },
      { title: "A short design system", desc: "Buttons and forms the next page can reuse." },
    ],
    faqs: [
      { q: "What does a UI/UX design agency in {place} deliver?", a: "The flow, the screens, and usually the build. A design-only engagement is possible when another team will develop." },
      { q: "Is this only for apps?", a: "No. Most of the work is websites: navigation, service pages, and forms." },
      { q: "Do you run a formal research study?", a: "We review the current product with the people who watch customers struggle. A separate research study is its own scope." },
      { q: "Where are the designers?", a: "In Mangaluru. {place} reviews are remote." },
    ],
  },
  {
    slug: "branding-agency",
    name: "Branding Agency",
    hub: "brand",
    places: ["bangalore", "bengaluru", "karnataka", "udupi", "saudi"],
    keywords: ["branding agency", "brand identity", "brand design"],
    clause: "A mark, colour, and type your team can use. Packaging and a website are separate scopes.",
    intro: {
      bangalore: "A branding agency for Bangalore should leave files a printer and a website can both use. Dark Media Tech does that identity work remotely from Mangaluru. There is no Bengaluru brand office. A logo on its own is a smaller job. A brand is the system around it.",
      bengaluru: "Branding for Bengaluru companies starts with where the mark has to appear: a product, a deck, a site. We design from Mangaluru. We do not run an unlimited contest of unrelated sketches, and we do not claim a local studio in Bengaluru.",
      karnataka: "Branding for a Karnataka business is done in Mangaluru. A company with two offers needs a system, not five unrelated logos. We test the mark small and in one colour before you approve it.",
      udupi: "Udupi hotels, colleges, and family firms often have a reputation and no shared way to show it. We design the mark and the rules from Mangaluru. There is no Udupi branding office.",
      saudi: "Branding for Saudi Arabia may need an English name, an Arabic name, or both. We design the system from Mangaluru and you approve the words. We do not register a trademark. That is a legal step.",
    },
    cards: [
      { title: "A mark you can reproduce", desc: "Small sizes, one colour, and a file the printer can open." },
      { title: "Rules short enough to follow", desc: "Colour, type, and clear space. Not a book nobody opens." },
      { title: "Honest limits", desc: "A website, a pack, or a campaign is quoted separately." },
    ],
    why: {
      bangalore: "Bangalore branding projects die in a presentation. We deliver the formats you will actually send. Reviews are remote.",
      bengaluru: "Bengaluru teams often already have a name. We decide what the mark must do before we draw it.",
      karnataka: "A Karnataka identity has to work on a board and on a phone. We check both from Mangaluru.",
      udupi: "An Udupi brand should still be recognisable on a sign. We design for that, from Mangaluru.",
      saudi: "A Saudi brand with two scripts needs both drawn properly. We will not auto-flip an English logo and call it Arabic.",
    },
    points: ["One direction refined, not an option mill", "Files for screen and print", "Website and packaging only if scoped", "No trademark filing"],
    offerLead: "Identity",
    offerBody: "Brand work from the Mangaluru studio.",
    offers: [
      { title: "Mark, colour, and type", desc: "The basics a business can start using." },
      { title: "A short guide", desc: "How to use the mark, and what not to do." },
      { title: "A careful refresh", desc: "Keep what customers already recognise." },
      { title: "Applications you list", desc: "Card, social, or a page, as named in the quote." },
    ],
    faqs: [
      { q: "What do we get from a branding agency in {place}?", a: "The identity pieces named in the quote, with files you can use. The work is done in Mangaluru." },
      { q: "How many logo options do you show?", a: "We explore a direction and refine it. We do not run an unlimited contest." },
      { q: "Will you trademark the logo?", a: "No. Registration is for your counsel." },
      { q: "Can you brand and build the website?", a: "Yes. They are related and still quoted so you can see each part." },
    ],
  },
  {
    slug: "react-native-app-development",
    name: "React Native App Development",
    hub: "web",
    places: ["bangalore", "bengaluru", "karnataka", "saudi"],
    keywords: ["React Native app development", "React Native developers", "cross platform app"],
    clause: "One codebase for Android and iOS when the app is forms, lists, and accounts.",
    intro: {
      bangalore: "React Native app development for Bangalore is for a product that needs both stores without two native teams. Dark Media Tech builds that remotely from Mangaluru. We use it when the app is accounts, lists, and forms. A game or a heavy camera product is a different build. There is no Bengaluru app office.",
      bengaluru: "React Native for Bengaluru teams is a practical choice when the same screens ship on Android and iPhone. We design and build them from Mangaluru. Store accounts stay with you. We do not staff a Bengaluru release desk.",
      karnataka: "React Native apps for Karnataka organisations are built in Mangaluru. A college portal or a field app can share one codebase. We say so in the quote, including which stores are in the first release.",
      saudi: "React Native for Saudi Arabia can carry English and Arabic screens in one app when that is scoped. We build from Mangaluru. Right-to-left layout is planned, not patched on at the end. You approve the Arabic copy.",
    },
    cards: [
      { title: "One app, two stores", desc: "The quote names Android, iOS, or both. Shared screens are the point of React Native." },
      { title: "A fit for business apps", desc: "Accounts, catalogues, and status updates. Not every product belongs in this stack." },
      { title: "You own the release", desc: "We prepare the build. The developer accounts should be yours." },
    ],
    why: {
      bangalore: "Bangalore briefs often ask for native and React Native in the same sentence. We pick one path and write the screens. Reviews are remote.",
      bengaluru: "Bengaluru products that already have a web app can share the idea of the account. We do not promise the same code in the browser and the phone.",
      karnataka: "A Karnataka field team needs an app that works on the phones they already carry. We confirm that before we choose the stack.",
      saudi: "A Saudi React Native app with two languages needs both in the layout. We will not ship English-only and call the Arabic a later surprise.",
    },
    points: ["Stores named in the quote", "Screens written before the first build", "Language plan when Arabic is required", "No office outside Mangaluru"],
    offerLead: "React Native",
    offerBody: "Cross-platform apps from the Mangaluru studio.",
    offers: [
      { title: "A first release", desc: "The screens a person needs on day one." },
      { title: "Accounts", desc: "Sign in and the data that belongs to that person." },
      { title: "A matching website", desc: "How new people find the product before they install it." },
      { title: "An update path", desc: "Who changes content after the stores approve the app." },
    ],
    faqs: [
      { q: "Is React Native app development in {place} cheaper than two native apps?", a: "Usually, when the screens can be shared. A product that needs deep device features may not save that money." },
      { q: "Do you also build the API?", a: "When the scope includes it. An existing backend is reviewed before we promise the app." },
      { q: "Who owns the code?", a: "Your business, as the contract states. We do not keep the only copy." },
      { q: "Where is the team?", a: "Mangaluru. {place} projects are remote." },
    ],
  },
  {
    slug: "google-ads-agency",
    name: "Google Ads Agency",
    hub: "seo",
    places: ["bangalore", "bengaluru"],
    keywords: ["Google Ads agency", "Google Ads management", "PPC agency"],
    clause: "Search ads on an account you own. We do not promise a cost per lead.",
    intro: {
      bangalore: "A Google Ads agency for Bangalore should send clicks to a page that can take the enquiry. Dark Media Tech sets up and manages Search campaigns remotely from Mangaluru. The ads account stays yours. There is no Bengaluru media office, and there is no promised cost per lead.",
      bengaluru: "Google Ads for Bengaluru is the same city as Bangalore, so the locations in the campaign should match where you actually serve. We manage that from Mangaluru. We will not buy clicks for a page that does not explain the offer.",
    },
    cards: [
      { title: "An account in your name", desc: "You can see spend. We do not hide the campaign inside an account you cannot open." },
      { title: "A landing page that matches", desc: "The ad and the page should say the same thing. We fix the page when it is in the scope." },
      { title: "A report of spend and enquiries", desc: "Not a rank. Ads are paid clicks, and the useful number is what happens after the click." },
    ],
    why: {
      bangalore: "Bangalore ad accounts often target the whole city when the business serves one corridor. We narrow that. Reviews are calls from Mangaluru.",
      bengaluru: "Bengaluru and Bangalore keywords can waste money if both are bid without a plan. We write the locations down first.",
    },
    points: ["You own the Google Ads account", "Landing page checked before spend", "No guaranteed cost per lead", "Remote management from Mangaluru"],
    offerLead: "Google Ads",
    offerBody: "Paid search we will run when the page can convert.",
    offers: [
      { title: "Account setup", desc: "Conversion tracking and a campaign structure you can read." },
      { title: "Search campaigns", desc: "Queries tied to a service you actually sell." },
      { title: "Landing page fixes", desc: "When the current page cannot take the click." },
      { title: "A monthly read", desc: "What was spent and which enquiries came in." },
    ],
    faqs: [
      { q: "Does a Google Ads agency in {place} need a minimum spend?", a: "The ad spend is yours, paid to Google. Our fee is separate and written in the quote." },
      { q: "Will you guarantee leads?", a: "No. We can show clicks and the enquiries the page recorded. We cannot promise a cost." },
      { q: "Can we keep the account if we stop?", a: "Yes. It should be in your Google account from the start." },
      { q: "Do you also do SEO?", a: "Yes, as a separate scope. Ads do not replace a page that should rank." },
    ],
  },
  {
    slug: "google-ads-management",
    name: "Google Ads Management",
    hub: "seo",
    places: ["saudi"],
    keywords: ["Google Ads management", "PPC management", "Google Ads Saudi Arabia"],
    clause: "Campaigns on an account you own, aimed at searches you can serve.",
    intro: {
      saudi: "Google Ads management in Saudi Arabia is remote work from Mangaluru. We set up Search campaigns for the services you can deliver in the Kingdom, on an account in your name. Arabic ad copy is approved by you. We do not promise a cost per lead, and we do not claim a Saudi media licence.",
    },
    cards: [
      { title: "Your ads account", desc: "Spend stays visible to your company. We manage it. We do not own it." },
      { title: "Language in the campaign", desc: "English and Arabic are different ads. Both are scoped, and you approve the Arabic." },
      { title: "A page that can take the click", desc: "We will not send paid traffic to a page that does not explain the offer." },
    ],
    why: {
      saudi: "Saudi ad spend is wasted when the landing page and the language do not match the query. We check that from Mangaluru before the budget runs.",
    },
    points: ["Account owned by your business", "Arabic copy approved by you", "No promised cost per lead", "Remote from Mangaluru"],
    offerLead: "Ads management",
    offerBody: "Google Ads for Saudi searches, run from Mangaluru.",
    offers: [
      { title: "Setup", desc: "Tracking and a structure you can audit." },
      { title: "Search ads", desc: "Queries tied to work you can deliver." },
      { title: "Landing pages", desc: "When the current page cannot convert the click." },
      { title: "A spend report", desc: "What went out and what the site recorded." },
    ],
    faqs: [
      { q: "Is Google Ads management in Saudi Arabia done locally?", a: "No. Dark Media Tech manages it from Mangaluru. There is no Saudi ads office." },
      { q: "Who pays Google?", a: "Your business, on your account. Our management fee is separate." },
      { q: "Do you write Arabic ads?", a: "We can draft them. You approve every Arabic line before it runs." },
      { q: "Will you guarantee leads?", a: "No." },
    ],
  },
  {
    slug: "meta-ads-agency",
    name: "Meta Ads Agency",
    hub: "social",
    places: ["bangalore", "bengaluru"],
    keywords: ["Meta Ads agency", "Facebook ads", "Instagram ads"],
    clause: "Facebook and Instagram ads on an account you own. Creative and spend are separate.",
    intro: {
      bangalore: "A Meta Ads agency for Bangalore runs Facebook and Instagram campaigns for a specific offer, not a boost with no page behind it. Dark Media Tech does that remotely from Mangaluru. The ad account stays yours. There is no Bengaluru media office.",
      bengaluru: "Meta ads for Bengaluru should name who the offer is for and where you can serve them. We build the campaign and the creative from Mangaluru. We do not promise a cost per message, and we do not keep the only login.",
    },
    cards: [
      { title: "One offer per campaign", desc: "A clear service, a clear next step, and a page or form that can receive it." },
      { title: "Creative you can reuse", desc: "Still images and short cuts when video is in the scope. Not an endless content mill." },
      { title: "An account you can open", desc: "Spend and results stay visible after the engagement ends." },
    ],
    why: {
      bangalore: "Bangalore Meta accounts often boost a post that does not say what to do next. We write the offer first. Reviews are remote.",
      bengaluru: "Bengaluru and Bangalore audiences overlap. We set locations to match the business, not the spelling of the city.",
    },
    points: ["You own the Meta ad account", "Offer written before creative", "No guaranteed cost per lead", "Managed from Mangaluru"],
    offerLead: "Meta ads",
    offerBody: "Facebook and Instagram campaigns from the Mangaluru studio.",
    offers: [
      { title: "Campaign setup", desc: "Objective, locations, and the page the ad opens." },
      { title: "Creative", desc: "The pieces named in the quote, sized for the placements." },
      { title: "A landing path", desc: "A page or a form that matches the ad." },
      { title: "A monthly read", desc: "Spend, clicks, and the enquiries you can see." },
    ],
    faqs: [
      { q: "What does a Meta Ads agency in {place} manage?", a: "Facebook and Instagram ads. Organic posting is a different scope." },
      { q: "Do you guarantee messages?", a: "No. We report spend and what the page recorded." },
      { q: "Who owns the ad account?", a: "Your business." },
      { q: "Can you design the creative?", a: "Yes, when it is in the quote. A photoshoot is separate." },
    ],
  },
  {
    slug: "logo-design-company",
    name: "Logo Design Company",
    hub: "brand",
    places: ["bangalore", "bengaluru", "udupi"],
    keywords: ["logo design company", "logo designers", "custom logo"],
    clause: "A mark you can print and put on a site. A full brand system is a larger quote.",
    intro: {
      bangalore: "A logo design company for Bangalore should deliver a mark that still reads at the size of an app icon. Dark Media Tech designs that remotely from Mangaluru. There is no Bengaluru design office. We explore one direction and refine it. We do not run a contest of unrelated sketches.",
      bengaluru: "Logo design for Bengaluru starts with the name and where the mark has to work: a site, a card, a sign. We draw it from Mangaluru. Files for screen and print are part of the delivery. Trademark filing is not.",
      udupi: "A logo for an Udupi business has to work on a board and on a phone. Dark Media Tech designs it from Mangaluru, about an hour south. There is no Udupi studio. We test the mark in one colour before you approve it.",
    },
    cards: [
      { title: "Readable when it is small", desc: "If the mark only works on a large board, it will fail on the website." },
      { title: "Files you can hand over", desc: "Screen and print formats, so the next vendor is not stuck." },
      { title: "A logo, unless you want more", desc: "Colour rules and a website are quoted when you need them." },
    ],
    why: {
      bangalore: "Bangalore logo jobs get lost in option piles. We pick a direction and finish it. Reviews are remote from Mangaluru.",
      bengaluru: "Bengaluru companies often need the mark on a product and a site in the same month. We design for both uses.",
      udupi: "An Udupi sign is a real test. We check the mark at that size, even though the drawing happens in Mangaluru.",
    },
    points: ["One direction, refined", "Screen and print files", "No trademark registration", "No local office outside Mangaluru"],
    offerLead: "Logos",
    offerBody: "Logo design from the Mangaluru studio.",
    offers: [
      { title: "A primary mark", desc: "The version you will use most." },
      { title: "A small version", desc: "For an icon, a stamp, or a tight space." },
      { title: "One-colour artwork", desc: "For print that cannot carry the full palette." },
      { title: "A short usage note", desc: "Clear space and the backgrounds to avoid." },
    ],
    faqs: [
      { q: "How many concepts does a logo design company in {place} show?", a: "We develop one direction and refine it with you. We do not sell an unlimited set of unrelated sketches." },
      { q: "Do we own the logo?", a: "Yes, as the contract states, once the agreed fee is paid." },
      { q: "Will you register the trademark?", a: "No. That is a legal step." },
      { q: "Can the logo go on a new website?", a: "Yes. The site is a separate quote." },
    ],
  },
  {
    slug: "packaging-design-company",
    name: "Packaging Design Company",
    hub: "brand",
    places: ["bangalore", "bengaluru", "karnataka"],
    keywords: ["packaging design company", "packaging designers", "product packaging"],
    clause: "Artwork for a pack your printer can produce. We do not manufacture the box.",
    intro: {
      bangalore: "A packaging design company for Bangalore should design to a dieline, not to a pretty mockup that cannot be printed. Dark Media Tech does the artwork remotely from Mangaluru. There is no Bengaluru packaging studio, and we do not run the factory.",
      bengaluru: "Packaging for Bengaluru brands starts with the product, the size, and the legal lines that have to appear. We design from Mangaluru. Print production stays with your printer. We prepare files they can use.",
      karnataka: "Packaging design for Karnataka food, spice, and product brands is done in Mangaluru. We need the real dimensions and the words that must be on the pack. We do not invent a nutrition panel.",
    },
    cards: [
      { title: "A dieline before decoration", desc: "The shape of the pack decides the layout. We design to that." },
      { title: "Words you supply", desc: "Ingredients, claims, and legal lines come from you. We place them so they can be read." },
      { title: "Print-ready files", desc: "Your printer produces the pack. We do not manufacture it." },
    ],
    why: {
      bangalore: "Bangalore packaging jobs fail when the design ignores the fold. We start from the dieline. Reviews are remote.",
      bengaluru: "Bengaluru product teams often need the pack and the website to match. We can do both, as separate scopes.",
      karnataka: "A Karnataka product may be sold in more than one city. The pack has to carry the facts, not a slogan only.",
    },
    points: ["Dieline from you or your printer", "Legal copy supplied by you", "No manufacturing", "Designed in Mangaluru"],
    offerLead: "Packs",
    offerBody: "Packaging artwork from the Mangaluru studio.",
    offers: [
      { title: "A primary pack", desc: "The front, the back, and the panels that carry facts." },
      { title: "A short range", desc: "Flavours or sizes that share one system." },
      { title: "A careful refresh", desc: "Keep recognition, fix what is hard to read." },
      { title: "Files for your printer", desc: "The format they ask for, after the dieline is confirmed." },
    ],
    faqs: [
      { q: "Does a packaging design company in {place} print the boxes?", a: "No. We design the artwork. Your printer manufactures the pack." },
      { q: "Who writes the ingredients and claims?", a: "You do. We will not invent them." },
      { q: "Can you design a logo as well?", a: "Yes, as its own scope, if the brand does not have one yet." },
      { q: "Where is the work done?", a: "In Mangaluru. {place} reviews are remote." },
    ],
  },
  {
    slug: "website-redesign-company",
    name: "Website Redesign Company",
    hub: "web",
    places: ["bangalore", "bengaluru"],
    keywords: ["website redesign company", "website redesign", "redesign agency"],
    clause: "A rebuild that keeps the pages people already use. We do not throw away working addresses.",
    intro: {
      bangalore: "A website redesign company for Bangalore should keep the pages that already bring enquiries. Dark Media Tech rebuilds the site remotely from Mangaluru: clearer pages, faster loads, and the same offers. There is no Bengaluru office. We map the current addresses before we change them.",
      bengaluru: "A redesign for a Bengaluru company is not a new colour on a confusing menu. We look at what people cannot find, then rebuild from Mangaluru. Old links get a plan. We do not launch a pretty site that drops the phone number.",
    },
    cards: [
      { title: "What already works stays findable", desc: "Addresses that get shared are mapped. A redesign should not orphan them." },
      { title: "The offer, easier to see", desc: "Service, proof, and a way to enquire, without a tour of the company first." },
      { title: "A site your team can update", desc: "The rebuild includes the path for new pages, not only a launch weekend." },
    ],
    why: {
      bangalore: "Bangalore redesigns often start from a template and lose the content that ranked. We read the current site first. The studio is in Mangaluru.",
      bengaluru: "Bengaluru teams ask for a modern look. We ask which task is failing. Those are different briefs, and we write the second one down.",
    },
    points: ["Current pages reviewed before design", "Addresses planned, not abandoned", "Content rewritten only where it is unclear", "Remote from Mangaluru"],
    offerLead: "Redesigns",
    offerBody: "Rebuilds that keep the business recognisable.",
    offers: [
      { title: "A content map", desc: "What stays, what merges, and what is new." },
      { title: "A clearer structure", desc: "Navigation a new visitor can use on a phone." },
      { title: "The build", desc: "The pages in the map, on a stack we can maintain." },
      { title: "A launch check", desc: "Forms, speed, and the important old addresses." },
    ],
    faqs: [
      { q: "Will a website redesign company in {place} keep our Google rankings?", a: "We keep useful pages and plan redirects. We do not promise that every query stays in the same position." },
      { q: "Do you rewrite everything?", a: "Only what is unclear or missing. Accurate pages can stay, in a clearer layout." },
      { q: "Can you redesign a site you did not build?", a: "Yes. We need access and a list of the pages that matter." },
      { q: "Where is the team?", a: "Mangaluru. {place} reviews are remote." },
    ],
  },
  {
    slug: "erp-software-development",
    name: "ERP Software Development Company",
    hub: "web",
    places: ["bangalore", "bengaluru", "karnataka", "saudi"],
    keywords: ["ERP software development company", "custom ERP", "operations software"],
    clause: "Custom software for the operations you actually run. We do not resell SAP or Salesforce.",
    intro: {
      bangalore: "An ERP software development company for Bangalore should name the workflows, not a brand of suite. Dark Media Tech builds custom operational software remotely from Mangaluru: orders, stock, or approvals your team already does in sheets. There is no Bengaluru office. We do not resell SAP or Salesforce.",
      bengaluru: "ERP for a Bengaluru company is a product around your process. We scope the first workflow from Mangaluru and ship that before we add the next. A full replacement of every department on day one is how these projects stall.",
      karnataka: "Custom ERP for Karnataka businesses is built in Mangaluru. A factory, a college, or a distributor gets the screens their staff will use, not a catalogue of modules nobody opens.",
      saudi: "ERP software for Saudi Arabia is a remote build from Mangaluru. We do not claim a Saudi systems-integrator licence, and we do not implement SAP. If Arabic screens are required, you approve the labels. The first release is one workflow.",
    },
    cards: [
      { title: "One workflow first", desc: "The process that hurts this quarter. The rest waits until that one is used." },
      { title: "Software your staff recognise", desc: "The fields match how the work is done, not a generic module list." },
      { title: "Not a resold suite", desc: "If you need SAP or Salesforce, that is a different vendor. We build custom operational software." },
    ],
    why: {
      bangalore: "Bangalore ERP pitches sell a platform. We sell a scoped workflow. Reviews are remote from Mangaluru.",
      bengaluru: "Bengaluru operations teams already have sheets that work. We replace the ones that break, and we keep the language they use.",
      karnataka: "A Karnataka ERP should be usable by the person on the floor, not only by the person who bought it. We design for that.",
      saudi: "A Saudi operations tool needs a language decision and a clear owner of the data. We write both down before we build.",
    },
    points: ["First workflow named in the quote", "No SAP or Salesforce resale", "Data export so you are not locked in", "Built in Mangaluru"],
    offerLead: "Operations software",
    offerBody: "Custom ERP-style tools, not a licensed suite.",
    offers: [
      { title: "Orders and jobs", desc: "What was asked, who owns it, and when it is done." },
      { title: "Stock or assets", desc: "What you have and where it moved." },
      { title: "Approvals", desc: "A step that should not live in a chat thread." },
      { title: "A report the owner reads", desc: "A few numbers, not a dashboard nobody opens." },
    ],
    faqs: [
      { q: "Is an ERP software development company in {place} selling SAP?", a: "No. We build custom software for your operations. We do not resell SAP or Salesforce." },
      { q: "Can you replace our whole company system at once?", a: "We will not promise that. The first release is one workflow your team will actually use." },
      { q: "Who owns the data?", a: "Your business. The quote includes a way to export it." },
      { q: "Where is it built?", a: "In Mangaluru. {place} reviews are remote." },
    ],
  },
  {
    slug: "ai-automation-services",
    name: "AI Automation Services",
    hub: "web",
    places: ["bangalore", "bengaluru", "karnataka"],
    keywords: ["AI automation services", "business automation", "AI workflow"],
    clause: "A workflow with a human approving anything a customer sees. We do not sell a chatbot as a strategy.",
    intro: {
      bangalore: "AI automation services for Bangalore should start with a repeated task: sorting enquiries, drafting a reply, or moving a row between tools. Dark Media Tech builds that remotely from Mangaluru. A person still approves anything a customer sees. There is no Bengaluru AI office.",
      bengaluru: "Automation for a Bengaluru team is useful when the same steps happen every day and the rules are known. We connect those steps from Mangaluru. We do not promise that a model will run the business, and we do not hide who approved the output.",
      karnataka: "AI automation for Karnataka organisations is built in Mangaluru. A college, a clinic desk, or a small ops team gets one workflow, with a person in the loop. We will not automate a decision you are not allowed to hand off.",
    },
    cards: [
      { title: "A repeated task", desc: "If it happens once a month, automation is the wrong spend. We look for the daily steps." },
      { title: "A human on customer-facing output", desc: "Drafts can be generated. Sending them without a check is out of scope." },
      { title: "Your tools, named", desc: "The quote says which inbox, sheet, or product we connect. We do not boil the ocean." },
    ],
    why: {
      bangalore: "Bangalore automation pitches start with a model name. We start with the task and the person who checks it. The studio is in Mangaluru.",
      bengaluru: "Bengaluru teams already have tools. We connect them when the handoff is the waste, and we leave a log of what ran.",
      karnataka: "A Karnataka workflow should fail safely. If the automation is unsure, it stops and asks a person.",
    },
    points: ["One workflow in the first scope", "Customer-facing text is approved by a person", "No claim that AI replaces your staff", "Built in Mangaluru"],
    offerLead: "Automation",
    offerBody: "Practical AI workflows with a person in the loop.",
    offers: [
      { title: "Enquiry sorting", desc: "A first pass, then a person decides." },
      { title: "Draft replies", desc: "A starting text your team edits before it is sent." },
      { title: "Handoffs between tools", desc: "The step that currently gets retyped." },
      { title: "A log", desc: "What ran, and what a person still has to check." },
    ],
    faqs: [
      { q: "Will AI automation services in {place} reply to customers on their own?", a: "Not in our scope. A person approves anything a customer sees." },
      { q: "Do you train a private model?", a: "Usually no. We use a scoped workflow. A custom model is a different project, and we will say so." },
      { q: "What if the automation is wrong?", a: "It should stop and ask. We design that stop before we turn it on." },
      { q: "Where is the team?", a: "Mangaluru. {place} work is remote." },
    ],
  },
  {
    slug: "ai-automation-company",
    name: "AI Automation Company",
    hub: "web",
    places: ["saudi"],
    keywords: ["AI automation company", "business automation", "AI workflow"],
    clause: "One workflow, with a person approving customer-facing output.",
    intro: {
      saudi: "An AI automation company for Saudi Arabia should automate a known task, not announce a transformation. Dark Media Tech builds that remotely from Mangaluru. Arabic drafts are approved by you before anyone sees them. We do not claim a Saudi AI licence, and we do not let a model send customer messages on its own.",
    },
    cards: [
      { title: "One daily task", desc: "Sorting, drafting, or moving a record. The first scope is that task." },
      { title: "Approval before a customer sees it", desc: "Especially when the draft is in Arabic. You approve the words." },
      { title: "A stop when it is unsure", desc: "The workflow asks a person instead of guessing." },
    ],
    why: {
      saudi: "Saudi automation has to respect language and who is allowed to send a message. We write that rule into the workflow, from Mangaluru.",
    },
    points: ["Human approval on customer output", "Arabic drafts checked by you", "No unattended customer replies", "Remote from Mangaluru"],
    offerLead: "Automation",
    offerBody: "AI workflows for Saudi operations, built in Mangaluru.",
    offers: [
      { title: "Sorting", desc: "A first pass on enquiries or documents." },
      { title: "Drafts", desc: "Text a person edits. Nothing sends itself." },
      { title: "Tool handoffs", desc: "The retyping you want to stop." },
      { title: "A log", desc: "What the workflow did and what is still waiting." },
    ],
    faqs: [
      { q: "Does an AI automation company in Saudi Arabia work from the Kingdom?", a: "No. Dark Media Tech builds this from Mangaluru. There is no Saudi office." },
      { q: "Will it email customers automatically?", a: "No. A person approves customer-facing output." },
      { q: "Who approves Arabic?", a: "You do, before it is used." },
      { q: "Can you automate our whole company?", a: "We start with one workflow. A whole-company claim is not a scope we will sign." },
    ],
  },
  {
    slug: "saas-product-development",
    name: "SaaS Product Development Company",
    hub: "web",
    places: ["bangalore", "bengaluru"],
    keywords: ["SaaS product development company", "SaaS developers", "software product development"],
    clause: "A first version of a product people can log into. We do not raise your round.",
    intro: {
      bangalore: "A SaaS product development company for Bangalore should ship a login, the core task, and a way to charge or invite users. Dark Media Tech builds that first version remotely from Mangaluru. There is no Bengaluru product studio. We do not write a pitch deck, and we do not promise customers.",
      bengaluru: "SaaS development for Bengaluru founders starts with the job the product does on day one. We design and build that from Mangaluru. Accounts, roles, and the empty states are in the scope. A marketplace of every idea is not.",
    },
    cards: [
      { title: "A first version with a job", desc: "One workflow a user can finish. Extra modules wait." },
      { title: "Accounts and roles", desc: "Who can see what is decided before the screens multiply." },
      { title: "You own the product", desc: "The code and the data are yours, as the contract states." },
    ],
    why: {
      bangalore: "Bangalore SaaS builds stall when version one includes the whole roadmap. We cut it to the job. Reviews are remote.",
      bengaluru: "Bengaluru product teams need a build they can show a real user. We ship that, from Mangaluru, and we name what is not in it.",
    },
    points: ["First version scoped tightly", "Billing only if it is in the quote", "No fundraising or customer-acquisition promise", "Built in Mangaluru"],
    offerLead: "SaaS",
    offerBody: "Product builds from the Mangaluru studio.",
    offers: [
      { title: "The core workflow", desc: "The reason a person logs in." },
      { title: "Accounts", desc: "Sign up, roles, and a way to recover access." },
      { title: "An admin", desc: "What you need to support the first users." },
      { title: "A public site", desc: "How someone understands the product before they create an account." },
    ],
    faqs: [
      { q: "What does a SaaS product development company in {place} ship first?", a: "The workflow in the quote, with accounts. Not the full roadmap." },
      { q: "Do you find customers for the product?", a: "No. We build the product and, if scoped, the site that explains it." },
      { q: "Can you take over a half-built product?", a: "Sometimes. We read the code before we promise a date." },
      { q: "Where is the team?", a: "Mangaluru. {place} reviews are remote." },
    ],
  },
  {
    slug: "custom-crm-development",
    name: "Custom CRM Development",
    hub: "web",
    places: ["bangalore", "bengaluru", "karnataka", "saudi"],
    keywords: ["custom CRM development", "CRM software", "custom CRM"],
    clause: "A CRM shaped to your pipeline. We do not resell Salesforce.",
    intro: {
      bangalore: "Custom CRM development for Bangalore is for a pipeline that a generic tool keeps fighting. Dark Media Tech builds the stages, the fields, and the follow-ups your team actually uses, remotely from Mangaluru. There is no Bengaluru office. We do not resell Salesforce.",
      bengaluru: "A custom CRM for Bengaluru sales teams starts with how a lead arrives and who owns the next step. We build that from Mangaluru. If a standard CRM already fits, we will say so instead of building one.",
      karnataka: "Custom CRM development for Karnataka businesses is done in Mangaluru. A distributor, a college admissions desk, or a services firm gets the stages they named, not a clone of a famous product.",
      saudi: "A custom CRM for Saudi Arabia is a remote build from Mangaluru. Arabic labels are approved by you. We do not implement Salesforce, and we do not claim a local systems office in the Kingdom.",
    },
    cards: [
      { title: "Stages you already use", desc: "The pipeline is written down before we design screens." },
      { title: "A follow-up a person can see", desc: "Who owns the lead, and what happens if nobody replies." },
      { title: "Not a resold CRM", desc: "We build custom software. If Salesforce is the right buy, we will not pretend to be that vendor." },
    ],
    why: {
      bangalore: "Bangalore CRM projects fail when every field from a spreadsheet is marked required. We keep the first screen short. The studio is in Mangaluru.",
      bengaluru: "Bengaluru teams often have the leads in three places. The CRM should be the place they agree to use, with an export so they are not trapped.",
      karnataka: "A Karnataka services firm may not need a famous CRM. They need the next call on a list. We build that.",
      saudi: "A Saudi pipeline may be in two languages. We scope the labels before the screens, and you approve the Arabic.",
    },
    points: ["Pipeline agreed first", "Export included", "No Salesforce resale", "Built in Mangaluru"],
    offerLead: "CRM",
    offerBody: "Custom pipeline software from the Mangaluru studio.",
    offers: [
      { title: "Leads and stages", desc: "Where a conversation is, and who owns it." },
      { title: "Follow-ups", desc: "The next step, visible, not buried in a chat." },
      { title: "A simple report", desc: "What is stuck, without a wall of charts." },
      { title: "An export", desc: "Your data can leave with you." },
    ],
    faqs: [
      { q: "Is custom CRM development in {place} a Salesforce project?", a: "No. We build a CRM for your pipeline. We do not resell Salesforce." },
      { q: "What if a standard CRM is enough?", a: "We will say so. Building custom software only makes sense when the standard tool keeps getting in the way." },
      { q: "Can our team update stages later?", a: "The first stages are in the scope. Changing the model later is a follow-up, not a surprise rebuild." },
      { q: "Where is it built?", a: "Mangaluru. {place} reviews are remote." },
    ],
  },
  {
    slug: "education-technology-solutions",
    name: "Education Technology Solutions",
    hub: "web",
    places: ["karnataka"],
    keywords: ["education technology solutions", "education software", "school software"],
    clause: "Software for a real campus workflow. We do not sell a national learning platform.",
    intro: {
      karnataka: "Education technology solutions for Karnataka start with one job a college or school already struggles to do: admissions, a parent update, or a simple course page. Dark Media Tech builds that in Mangaluru. We do not claim to be a statewide learning platform, and we do not hold student data on an account you cannot export.",
    },
    cards: [
      { title: "One campus workflow", desc: "Admissions, notices, or a course catalogue. Not every department on day one." },
      { title: "Pages a parent can read", desc: "The public site and the tool should tell the same story." },
      { title: "Data you can export", desc: "Student and enquiry records stay exportable. We do not lock them in." },
    ],
    why: {
      karnataka: "Karnataka institutions are often sold a suite they never finish configuring. We ship the workflow they named, from Mangaluru.",
    },
    points: ["One workflow in the first release", "Public site and tool kept consistent", "Exportable records", "Built in Mangaluru"],
    offerLead: "Education",
    offerBody: "Campus websites and small operational tools.",
    offers: [
      { title: "Admissions enquiries", desc: "A form that lands with the person who replies." },
      { title: "Course and campus pages", desc: "What is taught, where, and how to apply." },
      { title: "Notices", desc: "A place parents can check, instead of a forwarded image." },
      { title: "A staff view", desc: "Who has replied, and what is still open." },
    ],
    faqs: [
      { q: "Do education technology solutions in Karnataka mean a full learning management system?", a: "Only if that is the scoped workflow. Most first projects are the website plus one operational job." },
      { q: "Where is the team?", a: "Mangaluru. There is no separate campus-software office." },
      { q: "Who owns student data?", a: "The institution. We include an export." },
      { q: "Can you work with a college outside Mangaluru?", a: "Yes, remotely, anywhere in Karnataka we can actually serve." },
    ],
  },
  {
    slug: "social-media-creative-design",
    name: "Social Media Creative Design",
    hub: "social",
    places: ["karnataka"],
    keywords: ["social media creative design", "social media creatives", "Instagram design"],
    clause: "Posts and ads designed around one offer. We do not run your account unless that is scoped.",
    intro: {
      karnataka: "Social media creative design for Karnataka is artwork for an offer you can explain: a launch, a festival, a service. Dark Media Tech designs it in Mangaluru. Posting every day, community management, and ad spend are separate. We do not invent offers to fill a calendar.",
    },
    cards: [
      { title: "One offer, then the frames", desc: "The creative follows the message. A template with the logo swapped is not the job." },
      { title: "Sizes for the placements you use", desc: "Feed, story, or an ad, as named in the quote." },
      { title: "Posting is optional", desc: "Design and account management are different scopes." },
    ],
    why: {
      karnataka: "Karnataka brands often need a month of pieces that still look like one company. We design that system from Mangaluru, for the channels you named.",
    },
    points: ["Offer approved before design", "Placements listed in the quote", "No bought followers", "Designed in Mangaluru"],
    offerLead: "Social creative",
    offerBody: "Designed posts and ads, not a vanity calendar.",
    offers: [
      { title: "A set of posts", desc: "The count and the sizes in the quote." },
      { title: "Ad frames", desc: "When a campaign needs still creative." },
      { title: "A simple system", desc: "Type and colour so next month can match." },
      { title: "Files you can post", desc: "If we are not the ones posting." },
    ],
    faqs: [
      { q: "Does social media creative design in Karnataka include posting?", a: "Only if the quote says so. Design and management are separate." },
      { q: "Will you write the captions?", a: "When that is in the scope. You approve anything that describes the business." },
      { q: "Do you buy followers?", a: "No." },
      { q: "Where is the design done?", a: "Mangaluru." },
    ],
  },
  {
    slug: "portfolio-website-development",
    name: "Portfolio Website Development",
    hub: "web",
    places: ["karnataka"],
    keywords: ["portfolio website development", "portfolio website", "creative portfolio"],
    clause: "A site that shows selected work and makes it easy to enquire.",
    intro: {
      karnataka: "Portfolio website development for Karnataka is for a studio, an architect, a photographer, or a consultant who needs selected work on a page a client can open. Dark Media Tech builds it in Mangaluru. We edit the set down. A portfolio that shows everything shows nothing.",
    },
    cards: [
      { title: "Selected work", desc: "A short set, with the outcome, not a dump of every file." },
      { title: "A way to enquire", desc: "The portfolio fails if a client cannot tell you they want to talk." },
      { title: "Fast on a phone", desc: "Large images are prepared so the page still loads." },
    ],
    why: {
      karnataka: "Karnataka creatives often send a PDF. A portfolio site is easier to share and easier to update. We build it from Mangaluru.",
    },
    points: ["Work selected before design", "Enquiry path included", "Images prepared for the web", "Built in Mangaluru"],
    offerLead: "Portfolios",
    offerBody: "Portfolio sites from the Mangaluru studio.",
    offers: [
      { title: "Project pages", desc: "What the work was and what you did." },
      { title: "An index", desc: "A way to scan the set without opening every piece." },
      { title: "About and contact", desc: "Who you are and how to reach you." },
      { title: "A way to add the next project", desc: "So the site does not freeze after launch." },
    ],
    faqs: [
      { q: "How many projects should a portfolio website in Karnataka include?", a: "Enough to prove the kind of work you want next. We would rather show fewer, well explained." },
      { q: "Do you photograph the work?", a: "We plan the image slots. A shoot is separate." },
      { q: "Can I update it later?", a: "Yes. That path is part of the build." },
      { q: "Where is it built?", a: "Mangaluru." },
    ],
  },
  {
    slug: "website-maintenance-services",
    name: "Website Maintenance Services",
    hub: "web",
    places: ["karnataka", "saudi"],
    keywords: ["website maintenance services", "website maintenance", "website support"],
    clause: "Updates, fixes, and a person to call. We do not sell an unlimited change queue.",
    intro: {
      karnataka: "Website maintenance services for Karnataka keep a site you already have: updates, a broken form, a new page, a certificate. Dark Media Tech does that from Mangaluru. The scope is a list, not an unlimited queue. If the site cannot be edited safely, we will say a rebuild is the real job.",
      saudi: "Website maintenance for Saudi Arabia is remote support from Mangaluru. We fix what is broken and publish changes you approved. Arabic edits are checked by you. We do not claim a local support desk in the Kingdom, and we do not take ownership of your domain.",
    },
    cards: [
      { title: "A written list", desc: "What is included each month, and what is a separate quote." },
      { title: "Fixes before features", desc: "A form that does not send is more urgent than a new animation." },
      { title: "Access that stays yours", desc: "Domains, hosting, and ad accounts remain in your name." },
    ],
    why: {
      karnataka: "Karnataka sites go quiet after launch because nobody owns the next edit. We take a bounded list, from Mangaluru.",
      saudi: "A Saudi site with two languages needs a maintenance rule for both. We will not change Arabic without your approval.",
    },
    points: ["Scope written down", "Domains stay in your name", "Arabic changes approved by you when relevant", "Handled from Mangaluru"],
    offerLead: "Maintenance",
    offerBody: "Ongoing site care with a clear boundary.",
    offers: [
      { title: "Small content edits", desc: "The hours or the count named in the plan." },
      { title: "A broken form or page", desc: "Checked and fixed when it is in the plan." },
      { title: "Platform updates", desc: "When the site is on a stack we can safely update." },
      { title: "A note of what changed", desc: "So you can see the month." },
    ],
    faqs: [
      { q: "Are website maintenance services in {place} unlimited edits?", a: "No. The plan names what is included. Larger changes are quoted." },
      { q: "Will you maintain a site you did not build?", a: "Often, after we see how it is built. Some sites are safer to rebuild." },
      { q: "Do you take the domain?", a: "No. It stays with your business." },
      { q: "Where is support handled?", a: "From Mangaluru. There is no {place} maintenance office." },
    ],
  },
  {
    slug: "web-application-development-company",
    name: "Web Application Development Company",
    hub: "web",
    places: ["karnataka"],
    keywords: ["web application development company", "web app development", "custom web application"],
    clause: "A logged-in tool for a job your team repeats. A brochure site is a different quote.",
    intro: {
      karnataka: "A web application development company for Karnataka builds software people log into: a portal, a workflow, a client area. Dark Media Tech does that in Mangaluru. If you need a public brochure, that is a website project. We will not dress a website up as an application to raise the price.",
    },
    cards: [
      { title: "A job behind the login", desc: "The application exists to finish a task, not to look like a product." },
      { title: "Roles", desc: "Staff, clients, and admins do not all see the same screen." },
      { title: "A public site if you need one", desc: "Quoted separately, so the marketing pages and the tool stay clear." },
    ],
    why: {
      karnataka: "Karnataka teams often outgrow a spreadsheet and a shared inbox. We replace that one job, from Mangaluru, and leave an export.",
    },
    points: ["Roles defined before build", "Export included", "Brochure site quoted separately", "Built in Mangaluru"],
    offerLead: "Web apps",
    offerBody: "Logged-in tools for Karnataka organisations.",
    offers: [
      { title: "A client or staff portal", desc: "The records that person is allowed to see." },
      { title: "A workflow", desc: "Submit, review, and finish, with an owner on each step." },
      { title: "An admin", desc: "The controls your team needs on day one." },
      { title: "A matching website", desc: "Optional, and quoted on its own." },
    ],
    faqs: [
      { q: "How is a web application different from a website?", a: "A website explains the business. An application is software people log into to do a job." },
      { q: "Do you build web applications for all of Karnataka?", a: "We build them in Mangaluru for organisations we can serve remotely. There is no second office." },
      { q: "Who owns the code?", a: "Your organisation, as the contract states." },
      { q: "Can you start from our spreadsheet?", a: "Yes. That sheet is often the best spec we get." },
    ],
  },
  {
    slug: "custom-web-application-development",
    name: "Custom Web Application Development",
    hub: "web",
    places: ["saudi"],
    keywords: ["custom web application development", "web application", "custom web app"],
    clause: "A logged-in tool for one job. A brochure website is a different quote.",
    intro: {
      saudi: "Custom web application development for Saudi Arabia is software people log into: a client portal, an approval flow, or an internal tool. Dark Media Tech builds it remotely from Mangaluru. There is no Riyadh or Jeddah office. Arabic interface labels are approved by you. We do not resell a foreign suite and call it custom.",
    },
    cards: [
      { title: "One job in the first release", desc: "The screen a person opens every day. Extra modules wait until that one is used." },
      { title: "Roles and language", desc: "Who sees what, and whether Arabic labels are in this release, is written in the scope." },
      { title: "An export", desc: "Your data can leave. We do not build a trap." },
    ],
    why: {
      saudi: "Saudi teams often need a tool that matches a local process, not a generic admin theme. We scope that process from Mangaluru and ship the first workflow.",
    },
    points: ["Roles agreed first", "Arabic labels approved by you", "Data export included", "Built in Mangaluru"],
    offerLead: "Web applications",
    offerBody: "Custom tools for Saudi companies, built remotely.",
    offers: [
      { title: "A client portal", desc: "The records that account is allowed to see." },
      { title: "An internal workflow", desc: "Submit, review, and finish." },
      { title: "An admin", desc: "The controls named for day one." },
      { title: "A public website", desc: "Optional, and quoted on its own." },
    ],
    faqs: [
      { q: "Is custom web application development in Saudi Arabia done in the Kingdom?", a: "No. The studio is in Mangaluru. Reviews are remote." },
      { q: "Do you implement SAP or Salesforce?", a: "No. This is custom software for a scoped job." },
      { q: "Who approves Arabic labels?", a: "You do, before launch." },
      { q: "Who owns the code?", a: "Your company, as the contract states." },
    ],
  },
  {
    slug: "corporate-website-development",
    name: "Corporate Website Development",
    hub: "web",
    places: ["saudi"],
    keywords: ["corporate website development", "corporate website", "company website"],
    clause: "A company site with services, proof, and a contact path. Not a template with a logo dropped in.",
    intro: {
      saudi: "Corporate website development for Saudi Arabia is a public site a buyer can trust: what the company does, where it operates, and how to enquire. Dark Media Tech builds it remotely from Mangaluru. English, Arabic, or both is a scope decision. Arabic copy is approved by you. There is no office in the Kingdom.",
    },
    cards: [
      { title: "Services a buyer can scan", desc: "Each offer gets a page. A single paragraph for the whole company is not enough." },
      { title: "Proof that is real", desc: "Clients, sectors, or projects you can stand behind. We do not invent case studies." },
      { title: "A contact path the office recognises", desc: "The form should reach a person who replies." },
    ],
    why: {
      saudi: "A Saudi corporate site fails when it looks translated and unnamed. We plan the languages and the pages first, from Mangaluru, and we keep the company details accurate.",
    },
    points: ["Page list before design", "Arabic approved by you", "No invented offices or awards", "Built in Mangaluru"],
    offerLead: "Corporate sites",
    offerBody: "Company websites for Saudi organisations.",
    offers: [
      { title: "Service pages", desc: "What you sell, in language a buyer can use." },
      { title: "About and proof", desc: "The company, the sectors, and work you can name." },
      { title: "Contact", desc: "A form and the details your team will answer." },
      { title: "A second language", desc: "Arabic layout when it is in the quote." },
    ],
    faqs: [
      { q: "Does corporate website development in Saudi Arabia include Arabic?", a: "When the quote includes it. You approve the Arabic before launch." },
      { q: "Will you claim a Saudi office for Dark Media?", a: "No. Our studio is in Mangaluru." },
      { q: "Can our team edit pages later?", a: "Yes, when that path is in the scope." },
      { q: "How is it priced?", a: "By the pages, the languages, and whether a portal or a store is included." },
    ],
  },
  {
    slug: "arabic-website-development",
    name: "Arabic Website Development Company",
    hub: "web",
    places: ["saudi"],
    keywords: ["Arabic website development company", "Arabic website", "Arabic web design"],
    clause: "An Arabic site planned as Arabic, with wording you approve. We do not auto-translate and publish.",
    intro: {
      saudi: "An Arabic website development company for Saudi Arabia should design the reading direction, the navigation, and the pages in Arabic from the start. Dark Media Tech builds that remotely from Mangaluru. You approve every Arabic line. We do not machine-translate an English site and call the result finished, and we do not have an office in the Kingdom.",
    },
    cards: [
      { title: "Arabic as the layout, not a plugin", desc: "Direction, type, and navigation are planned for Arabic readers." },
      { title: "Words you approve", desc: "We can draft. Nothing Arabic goes live until you sign it off." },
      { title: "English only if you need it", desc: "A second language is a separate set of pages, not a toggle we promise for free." },
    ],
    why: {
      saudi: "Saudi buyers notice a flipped English template. We scope an Arabic site as its own design, from Mangaluru, and we keep the approval with you.",
    },
    points: ["Right-to-left layout in the scope", "Arabic copy approved by you", "No unreviewed machine translation", "Built in Mangaluru"],
    offerLead: "Arabic websites",
    offerBody: "Arabic company sites, built remotely and approved by you.",
    offers: [
      { title: "An Arabic page structure", desc: "Services, proof, and contact in a reading order that fits." },
      { title: "Type that holds Arabic", desc: "A face that stays readable at body size." },
      { title: "Forms", desc: "Fields and errors that make sense in Arabic." },
      { title: "An English twin", desc: "Only when you want both languages." },
    ],
    faqs: [
      { q: "Will an Arabic website development company in Saudi Arabia write the Arabic?", a: "We can draft it. You approve it. We will not publish unreviewed translation." },
      { q: "Do you have Arabic-speaking staff in Riyadh?", a: "No. The studio is in Mangaluru. Approval of Arabic stays with your company." },
      { q: "Can you convert our English site?", a: "Sometimes. A real Arabic site is still a layout job, not a button in a plugin." },
      { q: "Is English included?", a: "Only if the quote says so." },
    ],
  },
  {
    slug: "arabic-english-website-design",
    name: "Arabic and English Website Design",
    hub: "web",
    places: ["saudi"],
    keywords: ["Arabic and English website design", "bilingual website", "Arabic English website"],
    clause: "Two language versions that say the same true things. Arabic is approved by you.",
    intro: {
      saudi: "Arabic and English website design for Saudi Arabia means two versions of the site, not one language pasted over the other. Dark Media Tech plans both from Mangaluru: shared pages, a way to switch, and layouts that fit each script. You approve the Arabic. There is no Saudi office.",
    },
    cards: [
      { title: "The same facts in both languages", desc: "Prices, phone numbers, and services should not disagree between English and Arabic." },
      { title: "A switch people can find", desc: "The language choice sits where a visitor expects it, on a phone as well as a desk." },
      { title: "Arabic signed off by you", desc: "We do not launch a translation you have not read." },
    ],
    why: {
      saudi: "Bilingual Saudi sites fail when English is designed first and Arabic is squeezed in. We plan both, remotely from Mangaluru, before visual design locks the widths.",
    },
    points: ["Page list shared across languages", "Arabic approved by you", "No mismatched contact details", "Built in Mangaluru"],
    offerLead: "Bilingual sites",
    offerBody: "Arabic and English websites for Saudi companies.",
    offers: [
      { title: "A shared structure", desc: "The same services in both languages." },
      { title: "Two layouts", desc: "English left to right, Arabic right to left." },
      { title: "A language switch", desc: "Clear on the small screen." },
      { title: "Launch checks", desc: "Both versions open, and the facts match." },
    ],
    faqs: [
      { q: "Is Arabic and English website design in Saudi Arabia two websites?", a: "It is two language versions of one site, unless you ask for separate domains." },
      { q: "Who checks the Arabic?", a: "You do. We will not publish it unreviewed." },
      { q: "Does the price double?", a: "The second language is real work and is in the quote. It is not a free toggle, and it is not always double a single-language site." },
      { q: "Where is it designed?", a: "In Mangaluru. There is no Saudi studio." },
    ],
  },
  {
    slug: "social-media-marketing-agency",
    name: "Social Media Marketing Agency",
    hub: "social",
    places: ["saudi"],
    keywords: ["social media marketing agency", "social media marketing", "Instagram marketing"],
    clause: "A plan, creative, and posting for the channels in the quote. We do not buy followers.",
    intro: {
      saudi: "A social media marketing agency for Saudi Arabia should name the channels, the offer, and the language. Dark Media Tech plans and designs that work remotely from Mangaluru. Arabic captions are approved by you. Ad spend, if any, stays on an account you own. We do not buy followers, and we do not have an office in the Kingdom.",
    },
    cards: [
      { title: "Channels you actually use", desc: "The quote names them. We do not promise every network." },
      { title: "An offer, then the posts", desc: "Creative follows a message you can deliver." },
      { title: "No bought audience", desc: "Followers and comments are not for sale in our scope." },
    ],
    why: {
      saudi: "Saudi social work needs a language rule and a person who approves Arabic. We set that up from Mangaluru before a calendar is filled.",
    },
    points: ["Channels named in the quote", "Arabic captions approved by you", "Ad accounts stay yours", "No bought followers"],
    offerLead: "Social marketing",
    offerBody: "Channel work for Saudi brands, run from Mangaluru.",
    offers: [
      { title: "A monthly plan", desc: "What will be posted, and what will not." },
      { title: "Creative", desc: "The sizes and the count in the quote." },
      { title: "Posting", desc: "On the accounts you own, when management is included." },
      { title: "Ads, separately", desc: "Only if you want paid reach, on your ad account." },
    ],
    faqs: [
      { q: "Does a social media marketing agency in Saudi Arabia sit in the Kingdom?", a: "No. Dark Media Tech works from Mangaluru." },
      { q: "Will you buy followers?", a: "No." },
      { q: "Who approves Arabic posts?", a: "You do, before they go live." },
      { q: "Are ads included?", a: "Only when the quote includes them. Spend is yours." },
    ],
  },
  {
    slug: "it-solutions-company",
    name: "IT Solutions Company",
    hub: "web",
    places: ["saudi"],
    keywords: ["IT solutions company", "IT company", "business software"],
    clause: "Websites and custom software. We are not a hardware help desk or a cloud reseller.",
    intro: {
      saudi: "An IT solutions company, in the work Dark Media Tech actually does for Saudi Arabia, means websites and custom software: a company site, a portal, or a workflow. We build that remotely from Mangaluru. We do not sell laptops, we do not run a help desk in the Kingdom, and we do not resell SAP or Salesforce.",
    },
    cards: [
      { title: "Software and websites", desc: "The public site and the tools your team logs into." },
      { title: "A written scope", desc: "What we will build, and the hardware and licences we will not supply." },
      { title: "Remote delivery", desc: "Reviews happen on a call. The studio is in Mangaluru." },
    ],
    why: {
      saudi: "Saudi buyers searching for an IT company often need a site and a system, not a rack of servers. We are clear about that limit, and we build the software from Mangaluru.",
    },
    points: ["Websites and custom software only", "No hardware help desk", "No SAP or Salesforce resale", "Delivered from Mangaluru"],
    offerLead: "IT work we do",
    offerBody: "Sites and software for Saudi companies. Not devices.",
    offers: [
      { title: "A company website", desc: "Services, proof, and a way to enquire." },
      { title: "A web application", desc: "A login and one operational job." },
      { title: "A store", desc: "When you sell products online." },
      { title: "Care after launch", desc: "Edits and fixes on what we built." },
    ],
    faqs: [
      { q: "Does an IT solutions company in Saudi Arabia mean on-site support?", a: "Not from us. We design and build websites and software from Mangaluru." },
      { q: "Do you supply hardware?", a: "No." },
      { q: "Do you implement SAP?", a: "No." },
      { q: "Can you still build a bilingual site?", a: "Yes. Arabic is approved by you before launch." },
    ],
  },
  {
    slug: "website-development-small-business",
    name: "Website Development for Small Businesses",
    hub: "web",
    places: ["saudi"],
    keywords: ["website development for small businesses", "small business website", "small business web design"],
    clause: "A short site: the offer, proof, and a way to enquire. Not a cheap template with a city name on it.",
    intro: {
      saudi: "Website development for small businesses in Saudi Arabia is a focused site a customer can understand on a phone. Dark Media Tech builds it remotely from Mangaluru. There is no office in the Kingdom. A small business still gets a written page list. We do not sell a bait price, and we do not publish Arabic you have not approved.",
    },
    cards: [
      { title: "Few pages, finished", desc: "What you sell, why someone should call, and how they reach you." },
      { title: "A phone-first layout", desc: "Most of these visits start on a small screen." },
      { title: "Room to grow", desc: "A store or a second language can be added later, as its own quote." },
    ],
    why: {
      saudi: "Small Saudi businesses are often handed a template that does not say what they do. We write the pages around the real offer, from Mangaluru.",
    },
    points: ["A short page list", "No bait pricing", "Arabic only when you approve it", "Built in Mangaluru"],
    offerLead: "Small-business sites",
    offerBody: "Company sites sized for a small Saudi business.",
    offers: [
      { title: "A home page with the offer", desc: "What you do, in the first screen." },
      { title: "Service pages", desc: "Enough detail to enquire, not a novel." },
      { title: "Contact", desc: "A form and a number your team answers." },
      { title: "A later expansion", desc: "Arabic, a catalogue, or more pages when you are ready." },
    ],
    faqs: [
      { q: "Is website development for small businesses in Saudi Arabia a template?", a: "No. The pages are written for your offer. We still keep the scope small." },
      { q: "Do you have a cheap starter price?", a: "We quote the pages. We do not advertise a bait price." },
      { q: "Can the site be in Arabic?", a: "Yes, when that is in the quote, and only after you approve the words." },
      { q: "Where is the team?", a: "Mangaluru. There is no Saudi office." },
    ],
  },
  {
    slug: "ecommerce-solutions-for-saudi-businesses",
    name: "E-commerce Solutions for Saudi Businesses",
    line1: "E-commerce Solutions",
    line2: { saudi: "for Saudi Businesses" },
    exact: "E-commerce Solutions for Saudi Businesses",
    hub: "web",
    places: ["saudi"],
    keywords: ["e-commerce solutions for Saudi businesses", "Saudi ecommerce", "online store Saudi Arabia"],
    clause: "A shop with clear products, delivery, and a catalogue your team can edit.",
    intro: {
      saudi: "E-commerce solutions for Saudi businesses are product pages and a checkout a buyer can finish. Dark Media Tech builds the shop remotely from Mangaluru. Currency, delivery, and language are agreed first. Arabic product text is approved by you. The merchant account stays yours. We do not claim a Saudi payment licence.",
    },
    cards: [
      { title: "Products with a delivery promise", desc: "What arrives, and where, is on the page before the cart." },
      { title: "A catalogue staff can edit", desc: "Prices and availability should not need a developer each week." },
      { title: "Your payment account", desc: "We can connect a provider in the scope. The account is yours." },
    ],
    why: {
      saudi: "A Saudi shop fails when language and shipping are discovered at checkout. We write those rules into the scope, and we build from Mangaluru.",
    },
    points: ["Delivery rules written first", "Arabic product text approved by you", "Merchant account stays yours", "Built in Mangaluru"],
    offerLead: "E-commerce",
    offerBody: "Online stores for Saudi businesses, built remotely.",
    offers: [
      { title: "Product pages", desc: "Facts a buyer needs before they add the item." },
      { title: "Checkout", desc: "Visible costs and a confirmation." },
      { title: "Admin", desc: "Add, hide, and reprice." },
      { title: "Policies", desc: "Shipping and contact, in the languages you approved." },
    ],
    faqs: [
      { q: "Are e-commerce solutions for Saudi businesses built in Saudi Arabia?", a: "No. Dark Media Tech builds them from Mangaluru. There is no local office." },
      { q: "Do you hold the payment account?", a: "No. It belongs to your business." },
      { q: "Can the catalogue be in Arabic and English?", a: "Yes, when both are in the quote. You approve the Arabic." },
      { q: "Is a huge catalogue required?", a: "No. A short, accurate catalogue is a better start." },
    ],
  },
  {
    slug: "professional-website-design",
    name: "Professional Website Design Services",
    hub: "web",
    places: ["saudi"],
    keywords: ["professional website design services", "professional web design", "website design Saudi Arabia"],
    clause: "Design and build of a business site. We do not hand over a picture of a website.",
    intro: {
      saudi: "Professional website design services for Saudi Arabia mean the pages are designed and then built. Dark Media Tech does both, remotely from Mangaluru. There is no office in Riyadh, Jeddah, or Dammam. The scope names the languages. Arabic wording is approved by you. We do not sell a mockup with no site behind it.",
    },
    cards: [
      { title: "Design that ships", desc: "The screens we agree are the ones we build, unless the quote says design only." },
      { title: "A business structure", desc: "Services, proof, and contact. Decoration comes after that." },
      { title: "A language plan", desc: "English, Arabic, or both, decided before layout locks in." },
    ],
    why: {
      saudi: "Professional, here, means a site a buyer can use. We design it for the phone, build it from Mangaluru, and keep the company facts accurate.",
    },
    points: ["Design and build in one team", "Arabic approved by you", "No mockup-only delivery unless scoped", "Remote from Mangaluru"],
    offerLead: "Website design",
    offerBody: "Professional sites for Saudi companies.",
    offers: [
      { title: "A page plan", desc: "What the site must answer." },
      { title: "Interface design", desc: "Type, navigation, and the phone layout." },
      { title: "The build", desc: "The pages in the plan, on a stack we can maintain." },
      { title: "Launch checks", desc: "Forms, speed, and the languages you approved." },
    ],
    faqs: [
      { q: "Are professional website design services in Saudi Arabia design only?", a: "Usually we design and build. A design-only engagement is possible when another team will develop." },
      { q: "Do you have a studio in Saudi Arabia?", a: "No. The studio is in Mangaluru." },
      { q: "Who approves Arabic?", a: "You do." },
      { q: "Can you redesign a site we have?", a: "Yes. We map the current pages before we replace them." },
    ],
  },
  {
    slug: "custom-erp-software-development",
    name: "Custom ERP Software Development Company",
    hub: "web",
    places: ["bangalore", "bengaluru", "saudi", "dammam"],
    keywords: ["custom ERP software development company", "custom ERP developers", "bespoke ERP"],
    clause: "Software written for your workflow. We do not configure SAP, Oracle, or Salesforce and call it custom.",
    intro: {
      bangalore: "A custom ERP software development company for Bangalore should start from the steps your staff already follow, then build only those screens. Dark Media Tech does that remotely from Mangaluru. There is no Bengaluru office. If a packaged suite already fits, we will say so. We do not resell SAP or Salesforce.",
      bengaluru: "Custom ERP for Bengaluru means the record is shaped to your desks, not to a vendor's module list. We write the first workflow in Mangaluru and ship that before a second one is discussed. Bengaluru is the official city name. The studio does not move.",
      saudi: "Custom ERP software for Saudi Arabia is a remote build from Mangaluru. Arabic labels, if the screens need them, are approved by you. We do not claim a Saudi integrator licence, and we do not implement a branded suite. The first release is one workflow your team will open.",
      dammam: "Custom ERP for a Dammam company is still built in Mangaluru. There is no Dammam office and no site visit sold as part of the software. We scope orders, stock, or job status for the Eastern Province team that will use it, and you approve any Arabic labels.",
    },
    cards: [
      { title: "Your steps, then the screens", desc: "The quote names the workflow. Unused modules from a catalogue are not the product." },
      { title: "A first release people will open", desc: "One job replaces the sheet. The next job waits until that one is in use." },
      { title: "Not a resold suite", desc: "SAP, Oracle, and Salesforce stay with their own vendors. This is custom software." },
    ],
    why: {
      bangalore: "Bangalore teams are often sold a platform and then asked to change how they work. We change the software instead, from Mangaluru, and we keep the first screen short.",
      bengaluru: "Bengaluru operations language should stay in the product. We use your stage names. Reviews are calls. There is no local engineering office.",
      saudi: "A Saudi custom ERP needs an owner for the data and a decision on language. We write both down before development, remotely from Mangaluru.",
      dammam: "Dammam projects do not get a branch. The useful test is whether the Dammam desk can finish the morning job in the browser without retyping a sheet.",
    },
    points: ["Workflow written before build", "No SAP or Salesforce resale", "Export so the data can leave", "Built in Mangaluru"],
    offerLead: "Custom ERP",
    offerBody: "Operational software written for one company, not a licensed suite.",
    offers: [
      { title: "A process map", desc: "The steps from request to done, in your words." },
      { title: "Roles", desc: "What the clerk can change and what the owner can see." },
      { title: "The first screens", desc: "The list people open every morning." },
      { title: "An export", desc: "Your records are not trapped in the build." },
    ],
    faqs: [
      { q: "How is a custom ERP software development company in {place} different from a reseller?", a: "We write software for the workflow in the quote. We do not implement SAP, Oracle, or Salesforce." },
      { q: "Can the first version be one department?", a: "Yes. That is the usual start. A whole-company replacement on day one is not a scope we will sign." },
      { q: "Do you file tax returns inside the ERP?", a: "No. Status of orders and stock can be in scope. Statutory accounting and tax filing stay with a specialist." },
      { q: "Where is it built?", a: "In Mangaluru. {place} reviews are remote. There is no local office." },
    ],
  },
  {
    slug: "erp-development-company",
    name: "ERP Development Company",
    hub: "web",
    places: ["bangalore", "saudi", "al-jubail"],
    keywords: ["ERP development company", "ERP developers", "ERP software development"],
    clause: "A development team for one operational workflow. We do not staff a seat on someone else's ERP project.",
    intro: {
      bangalore: "An ERP development company for Bangalore should say who designs the screens and who is still there after launch. Dark Media Tech does both, remotely from Mangaluru. There is no Bengaluru office. We are not a staffing firm placing developers on an outside ERP contract, and we do not resell a suite.",
      saudi: "ERP development for Saudi Arabia is a remote engagement from Mangaluru. The scope is a workflow, a first release, and a way to export the data. Arabic labels are approved by you. We do not hold a Saudi systems licence, and we do not implement SAP.",
      "al-jubail": "ERP development for Al Jubail is for a plant, a contractor, or a supplier that has outgrown a sheet. Dark Media Tech builds that from Mangaluru. There is no Al Jubail office, and we do not visit the industrial city as part of the build. You approve any Arabic on the screens.",
    },
    cards: [
      { title: "One team from map to launch", desc: "The people who write the workflow also build the screens." },
      { title: "A release you can use", desc: "The first version removes a repeated retype. Extra departments wait." },
      { title: "Your data stays exportable", desc: "The development contract includes a way out. We do not lock the records in." },
    ],
    why: {
      bangalore: "Bangalore ERP development often means rented developers and a platform you did not choose. We quote a product instead: the screens, the timeline, and what is not included.",
      saudi: "Saudi ERP development fails when language and ownership are left until the end. We decide those in the scope, from Mangaluru.",
      "al-jubail": "Al Jubail operations are often materials, jobs, and who approved the next step. We build that record. We do not pretend to run a desk in the city.",
    },
    points: ["A written workflow before development", "No staff augmentation on a foreign ERP", "No branded suite resale", "Remote from Mangaluru"],
    offerLead: "ERP development",
    offerBody: "The build we take when the job is custom operational software.",
    offers: [
      { title: "Discovery", desc: "The morning job, written down with the people who do it." },
      { title: "A first build", desc: "Roles, records, and the status list." },
      { title: "A walkthrough", desc: "The team that will use it sees the screens before go-live." },
      { title: "A follow-up", desc: "Fixes after the first weeks, quoted when the gaps are real." },
    ],
    faqs: [
      { q: "Does an ERP development company in {place} mean you join our existing vendor?", a: "No. We build the system in the quote. We do not place staff on another company's ERP contract." },
      { q: "Do you implement SAP?", a: "No." },
      { q: "How is the work priced?", a: "By the workflow and the screens. A stock list and a multi-role system are different quotes." },
      { q: "Will you open an office in {place}?", a: "No. The studio is in Mangaluru." },
    ],
  },
  {
    slug: "erp-software-solutions",
    name: "ERP Software Solutions",
    hub: "web",
    places: ["bangalore", "saudi"],
    keywords: ["ERP software solutions", "ERP solution", "operations software"],
    clause: "A solution is the system we build for one problem. It is not a boxed product on a price list.",
    intro: {
      bangalore: "ERP software solutions for Bangalore, in this studio, means a working answer to a named operational problem: orders that get retyped, stock that disagrees, or approvals lost in chat. Dark Media Tech builds that remotely from Mangaluru. There is no Bengaluru office, and there is no catalogue of ready-made ERP products to buy.",
      saudi: "ERP software solutions for Saudi Arabia are scoped systems, not a licence we resell. We build from Mangaluru. Hosting, language, and who owns the data are in the quote. Arabic labels are approved by you. We do not claim a solution that files Saudi tax or runs a national platform.",
    },
    cards: [
      { title: "One problem, named", desc: "The solution matches that problem. A brochure of modules is not a solution." },
      { title: "Software your staff can finish a job in", desc: "If the morning list is still a sheet, the solution has not shipped." },
      { title: "No product SKU", desc: "We do not sell SAP, Oracle, or Salesforce under a solutions label." },
    ],
    why: {
      bangalore: "Bangalore searches for ERP solutions often land on a demo of someone else's product. We would rather show the workflow we will build. Reviews are remote.",
      saudi: "A Saudi solution has to say what it will not do: tax filing, a government portal, or a suite we do not own. We write those limits down.",
    },
    points: ["The problem is named in the quote", "No boxed ERP catalogue", "Data export included", "Built in Mangaluru"],
    offerLead: "Solutions",
    offerBody: "Custom operational systems for a problem you can point at.",
    offers: [
      { title: "Orders", desc: "What was asked, who owns it, and when it is done." },
      { title: "Stock", desc: "What you have and where it moved." },
      { title: "Approvals", desc: "A step that should not live only in a message." },
      { title: "A short owner view", desc: "What is stuck, in a list a person will read." },
    ],
    faqs: [
      { q: "Are ERP software solutions in {place} a ready-made product?", a: "No. The solution is software we build for the workflow in the quote." },
      { q: "Can we buy a module and switch it on?", a: "Not from us. If a packaged ERP is the right buy, that is a different vendor." },
      { q: "Will it replace our accountant?", a: "No. We do not build statutory accounting or tax-filing software." },
      { q: "Where is the team?", a: "Mangaluru. {place} work is remote." },
    ],
  },
  {
    slug: "cloud-erp-development",
    name: "Cloud ERP Development Company",
    hub: "web",
    places: ["saudi"],
    keywords: ["cloud ERP development company", "cloud ERP", "browser ERP"],
    clause: "A browser system your staff can open without an install. Hosting is named in the quote. We do not promise a data centre inside Saudi Arabia.",
    intro: {
      saudi: "A cloud ERP development company for Saudi Arabia, as Dark Media Tech practices it, builds operational software people open in a browser. The work is remote from Mangaluru. There is no office in the Kingdom. Cloud here means no desk install and a host named in the quote. We do not claim Saudi data residency, a local cloud region, or a branded cloud ERP licence.",
    },
    cards: [
      { title: "A browser, not a desk install", desc: "Staff sign in. We do not ship a program that has to be updated on every PC." },
      { title: "Hosting written down", desc: "Where it runs is part of the quote. We will not imply a Saudi data centre we do not control." },
      { title: "Still custom software", desc: "Cloud is the access. The screens are still built for your workflow, not rented from SAP." },
    ],
    why: {
      saudi: "Saudi buyers hear cloud and expect the data to sit in the Kingdom. We will not promise that unless the host in the quote actually does. The studio remains in Mangaluru.",
    },
    points: ["No per-desk install", "Host named before build", "No default Saudi data-residency claim", "No SAP or Salesforce resale"],
    offerLead: "Cloud ERP",
    offerBody: "Browser-based operational software for Saudi teams.",
    offers: [
      { title: "Sign-in and roles", desc: "Who can see orders, stock, or approvals." },
      { title: "The daily job", desc: "One workflow in the first release." },
      { title: "A named host", desc: "The place the application runs, written in the quote." },
      { title: "An export", desc: "Records can leave with your company." },
    ],
    faqs: [
      { q: "Does a cloud ERP development company in Saudi Arabia host inside the Kingdom?", a: "Only if the quote names a host that does. We do not promise Saudi data residency by default." },
      { q: "Do staff install software?", a: "No. They use a browser." },
      { q: "Is this a rented cloud ERP brand?", a: "No. We build the system. We do not resell SAP or a similar suite." },
      { q: "Where are the developers?", a: "Mangaluru. There is no Saudi office." },
    ],
  },
  {
    slug: "erp-system-development",
    name: "ERP System Development Company",
    hub: "web",
    places: ["karnataka"],
    keywords: ["ERP system development company", "ERP system", "business system software"],
    clause: "One system of records for the desks that share the work. We do not roll out a suite across every district.",
    intro: {
      karnataka: "An ERP system development company for Karnataka should connect the desks that currently keep different sheets. Dark Media Tech builds that system in Mangaluru: one record for the order, the stock, or the approval, with roles for the people who touch it. A company elsewhere in the state uses the browser. We do not open a branch to do it, and we do not resell SAP.",
    },
    cards: [
      { title: "One record, shared", desc: "Two offices should not keep two truths about the same order." },
      { title: "Roles for each desk", desc: "The person who creates the job and the person who closes it do not need the same screen." },
      { title: "A system small enough to run", desc: "The first release is the shared record. Extra departments are a later quote." },
    ],
    why: {
      karnataka: "Karnataka firms are offered a system that means every module on a poster. We mean the records your staff already argue about. The build stays in Mangaluru.",
    },
    points: ["Shared records in the first release", "No statewide branch", "No packaged suite", "Export included"],
    offerLead: "ERP systems",
    offerBody: "Connected operational records for Karnataka companies.",
    offers: [
      { title: "The shared record", desc: "Order, job, or stock, with one status." },
      { title: "Who can change it", desc: "Roles written before the screens multiply." },
      { title: "A second location", desc: "Another desk in Karnataka on the same system, if that is how you work." },
      { title: "A way to export", desc: "The system does not trap the history." },
    ],
    faqs: [
      { q: "Is an ERP system development company in Karnataka a rollout in every city?", a: "No. We build one system for the organisation in the quote, from Mangaluru." },
      { q: "How is this different from the ERP software page?", a: "That page is the company offer. This page is the system itself: one shared record across the desks that need it." },
      { q: "Do you resell a suite?", a: "No." },
      { q: "Where is the studio?", a: "Kotichennaya Circle, Nandi Gudda, Mangaluru." },
    ],
  },
  {
    slug: "construction-erp-software-development",
    name: "Construction ERP Software Development Company",
    hub: "web",
    places: ["saudi"],
    keywords: ["construction ERP software development company", "construction ERP", "contractor software"],
    clause: "Job, material, and progress records for a contractor. We are not a construction company, and we do not certify quantities.",
    intro: {
      saudi: "A construction ERP software development company for Saudi Arabia should track the job a contractor already runs: which site, which materials moved, and who approved the next step. Dark Media Tech builds that remotely from Mangaluru. There is no office in the Kingdom. We do not pour concrete, we do not certify a bill of quantities, and we do not resell a construction suite. Arabic labels are approved by you.",
    },
    cards: [
      { title: "Sites and jobs", desc: "A project has a name, a status, and an owner. That is the first record." },
      { title: "Materials that moved", desc: "What left the store and what the site says it received." },
      { title: "Not a contractor", desc: "We build the software. Site work, licences, and quantity certification stay with your company." },
    ],
    why: {
      saudi: "Saudi construction teams lose the thread between the store and the site. We build that thread from Mangaluru, in the language plan you approved, and we stop at the workflow in the quote.",
    },
    points: ["Jobs and materials in the first release", "No quantity certification", "No construction licence claimed", "Arabic labels approved by you"],
    offerLead: "Construction records",
    offerBody: "Operational software for contractors, built in Mangaluru.",
    offers: [
      { title: "A job record", desc: "Site, status, and who is responsible." },
      { title: "Material movement", desc: "Issued, received, and still outstanding." },
      { title: "An approval", desc: "The step that should not live only in a chat." },
      { title: "An export", desc: "Project history your company can keep." },
    ],
    faqs: [
      { q: "Does a construction ERP software development company in Saudi Arabia work on site?", a: "No. The software is built in Mangaluru. We do not staff a site in the Kingdom." },
      { q: "Will you certify quantities or variations?", a: "No. That is your engineer's responsibility. The software can store the status you enter." },
      { q: "Do you sell a ready-made construction ERP?", a: "No. We build the records in the quote." },
      { q: "Who approves Arabic labels?", a: "You do, before launch." },
    ],
  },
];

export const regionSeoPages: WebDevelopmentLocation[] = specs.flatMap((spec, specIndex) =>
  spec.places.map((id) => build(spec, places[id], specIndex)),
);
