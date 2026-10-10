import type { FaqItem, ServiceLink, TextBlock, WebDevelopmentLocation } from "@/lib/web-development-locations";

type CityId = "mangalore" | "mangaluru";

const cities: Record<CityId, { label: string; bit: string }> = {
  mangalore: { label: "Mangalore", bit: "mangalore" },
  mangaluru: { label: "Mangaluru", bit: "mangaluru" },
};

const brandingHub: ServiceLink = { title: "Branding", href: "/services/branding" };
const studio: ServiceLink = { title: "Website Development Company in Mangalore", href: "/services/web-development/mangalore" };
const contact: ServiceLink = { title: "Contact our team", href: "/contact-us" };
const webHub: ServiceLink = { title: "Web Development Services", href: "/services/web-development" };

const office =
  "The only studio is at Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002. Mangalore and Mangaluru are the same city.";

type Spec = {
  slug: string;
  name: string;
  line1: string;
  line2: string;
  places: CityId[];
  keywords: string[];
  clause: string;
  intro: Partial<Record<CityId, string>>;
  cards: TextBlock[];
  why: Partial<Record<CityId, string>>;
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
    { name: "Branding", path: "/services/branding" },
    { name, path },
  ];
}

function build(spec: Spec, city: CityId): WebDevelopmentLocation {
  const label = cities[city].label;
  const path = `/services/branding/${spec.slug}-${cities[city].bit}`;
  const serviceName = `${spec.name} in ${label}`;
  const intro = spec.intro[city];
  const why = spec.why[city];
  if (!intro || !why) throw new Error(`Missing branding copy for ${spec.slug} ${city}`);
  const titleLine2 = spec.line2 ? `${spec.line2} in ${label}` : `in ${label}`;
  const siblingId: CityId | undefined = spec.places.find((id) => id !== city);
  const sibling = siblingId
    ? { title: `${spec.name} in ${cities[siblingId].label}`, href: `/services/branding/${spec.slug}-${cities[siblingId].bit}` }
    : undefined;
  const faqs: FaqItem[] = [
    { question: `Where is the studio for this ${label} work?`, answer: office },
    ...spec.faqs.map((faq) => ({
      question: faq.q.replaceAll("{place}", label),
      answer: faq.a.replaceAll("{place}", label),
    })),
  ];

  return {
    slug: `${spec.slug}-${cities[city].bit}`,
    name: label,
    market: "mangalore",
    seo: {
      path,
      title: `${serviceName} | Dark Media`,
      description: `${serviceName}. ${spec.clause} ${office}`.replace(/\s+/g, " "),
      keywords: [serviceName.toLowerCase(), ...spec.keywords.map((word) => `${word} ${label}`)],
    },
    serviceName,
    areaServed: { "@type": "City", name: "Mangaluru" },
    content: {
      badgeText: label,
      titleLine1: spec.line1,
      titleLine2,
      compactTitle: true,
      intro,
      introLinks: true,
      cards: spec.cards,
      whyEyebrow: "Why work with us",
      whyTitleLead: spec.line1,
      whyTitleAccent: titleLine2,
      whyBody: why,
      whyPoints: spec.points,
      offerEyebrow: "What we offer",
      offerEyebrowTag: "div",
      offerTitleLead: spec.offerLead,
      offerTitleRest: "in",
      offerTitleAccent: label,
      offerTitleTag: "h2",
      offerBody: spec.offerBody,
      offers: spec.offers,
      faqs,
      breadcrumb: crumbs(serviceName, path),
      services: [brandingHub, webHub, studio, sibling, contact].filter((link): link is ServiceLink => Boolean(link)),
    },
  };
}

const specs: Spec[] = [
  {
    slug: "branding-agency",
    name: "Branding Agency",
    line1: "Branding Agency",
    line2: "",
    places: ["mangalore", "mangaluru"],
    keywords: ["branding agency", "brand agency", "brand studio"],
    clause: "Identity work from one Mangaluru studio: mark, colour, type, and the rules to use them. A website is a separate quote.",
    intro: {
      mangalore:
        "A branding agency in Mangalore should leave files a printer and a website can both use. Dark Media Tech does that from Nandi Gudda. We design the mark and the short rules around it. We do not run a contest of unrelated sketches, and we do not file a trademark. Mangalore clients can review the work at the studio.",
      mangaluru:
        "A branding agency in Mangaluru is the same studio, named with the city's official spelling. The work is still the identity: where the mark has to appear, then the files. We sit at Kotichennaya Circle. There is no second branding office, and there is no award we are selling with the logo.",
    },
    cards: [
      { title: "A mark you can reproduce", desc: "Small sizes, one colour, and a file the next vendor can open." },
      { title: "Rules short enough to follow", desc: "Colour, type, and clear space. Not a book nobody opens." },
      { title: "A written limit", desc: "Packaging, a website, or a campaign is quoted when you need it." },
    ],
    why: {
      mangalore:
        "Mangalore branding jobs die in a presentation. We deliver the formats you will send. Reviews happen at Kotichennaya Circle with the people who have to use the mark.",
      mangaluru:
        "Mangaluru companies often already have a name. We decide what the mark must do before we draw it, then refine one direction. The studio address does not change because the spelling of the city does.",
    },
    points: ["One direction, refined", "Screen and print files", "No trademark filing", "No ranking claim"],
    offerLead: "Branding",
    offerBody: "Identity work from the Mangaluru studio.",
    offers: [
      { title: "Mark, colour, and type", desc: "The basics a business can start using." },
      { title: "A short guide", desc: "How to use the mark, and what not to do." },
      { title: "A careful refresh", desc: "Keep what customers already recognise." },
      { title: "Applications you list", desc: "A card, a profile, or a page, named in the quote." },
    ],
    faqs: [
      { q: "What does a branding agency in {place} deliver?", a: "The identity pieces named in the quote, with files you can use. The studio is in Mangaluru." },
      { q: "How many logo options do you show?", a: "We explore one direction and refine it. We do not run an unlimited contest." },
      { q: "Will you trademark the logo?", a: "No. Registration is for your counsel." },
      { q: "Can you also build the website?", a: "Yes. It is a separate quote so you can see the identity and the site apart." },
    ],
  },
  {
    slug: "branding-company",
    name: "Branding Company",
    line1: "Branding Company",
    line2: "",
    places: ["mangalore", "mangaluru"],
    keywords: ["branding company", "branding firm", "brand design company"],
    clause: "A company you can visit in Mangaluru for identity work. Not a directory listing and not a freelance contest.",
    intro: {
      mangalore:
        "A branding company in Mangalore should have an address and a person who answers after the files are sent. Dark Media Tech is at Kotichennaya Circle, Nandi Gudda. We design the identity and hand over files your team can use. We are not a marketplace of unnamed designers, and we do not claim to be the top company in the city.",
      mangaluru:
        "Looking for a branding company in Mangaluru means you want the studio, not a remote template with the city name dropped in. We work in Mangaluru. The brief names where the brand has to live: a sign, a card, a site, a pack. Each of those is scoped. The company behind the work is this studio.",
    },
    cards: [
      { title: "A real studio", desc: "Kotichennaya Circle, Nandi Gudda. You can review work there." },
      { title: "One team from brief to files", desc: "The people who hear the brief also finish the artwork." },
      { title: "No city ranking", desc: "Judge the scope and the files. We will not call ourselves number one." },
    ],
    why: {
      mangalore:
        "Mangalore searches for a branding company often land on a list with no address. We publish the studio address and the pieces you will receive. If you only need a logo, that is a smaller job than a full identity.",
      mangaluru:
        "A branding company in Mangaluru should still say what it will not do. We do not register trademarks, we do not print the stationery ourselves, and we do not invent a second office.",
    },
    points: ["Studio address is public", "Scope written before design", "Logo and full identity quoted apart", "No purchased awards"],
    offerLead: "The company",
    offerBody: "What you hire Dark Media Tech to brand.",
    offers: [
      { title: "An identity", desc: "Mark, colour, and type for the business." },
      { title: "A usage note", desc: "Short enough that staff will follow it." },
      { title: "Print-ready files", desc: "For the printer you choose." },
      { title: "A later application", desc: "Profile, brochure, or site, when you ask for it." },
    ],
    faqs: [
      { q: "Is a branding company in {place} the same as a logo freelancer?", a: "We are a studio with an address in Mangaluru. The quote says whether you are buying a logo or a wider identity." },
      { q: "Can we meet in person?", a: "Yes. Reviews can be at Kotichennaya Circle." },
      { q: "Do you print business cards?", a: "We prepare the artwork. Your printer produces them." },
      { q: "Do you guarantee the brand will rank?", a: "No. Branding is not a search-ranking product." },
    ],
  },
  {
    slug: "logo-design-company",
    name: "Logo Design Company",
    line1: "Logo Design Company",
    line2: "",
    places: ["mangalore", "mangaluru"],
    keywords: ["logo design company", "logo designers", "custom logo"],
    clause: "A mark you can print and put on a site. A full brand system is a larger quote. We do not file the trademark.",
    intro: {
      mangalore:
        "A logo design company in Mangalore should deliver a mark that still reads at the size of an app icon and on a shop board. Dark Media Tech designs that at Nandi Gudda. We test it in one colour before you approve it. We explore one direction and refine it. Screen and print files are part of the delivery.",
      mangaluru:
        "Logo design in Mangaluru starts with the name and the places the mark has to survive: a sign, a stamp, a website header. We draw it at Kotichennaya Circle. This page uses the official city name. The job is still a logo, not an automatic brand book, unless the quote adds the book.",
    },
    cards: [
      { title: "Readable when it is small", desc: "If the mark only works on a large board, it will fail on a phone." },
      { title: "Files you can hand over", desc: "Screen and print formats, so the next vendor is not stuck." },
      { title: "A logo, unless you want more", desc: "Colour rules and a website are quoted when you need them." },
    ],
    why: {
      mangalore:
        "Mangalore logo jobs get lost in piles of options. We pick a direction and finish it. You can see it at the studio before it goes on a sign.",
      mangaluru:
        "A logo design company in Mangaluru should say who owns the artwork. You do, once the agreed fee is paid, as the contract states. We do not keep the only file.",
    },
    points: ["One direction, refined", "Screen and print files", "No trademark registration", "Reviewed in Mangaluru"],
    offerLead: "Logos",
    offerBody: "Logo design from the Mangaluru studio.",
    offers: [
      { title: "A primary mark", desc: "The version you will use most." },
      { title: "A small version", desc: "For an icon, a stamp, or a tight space." },
      { title: "One-colour artwork", desc: "For print that cannot carry the full palette." },
      { title: "A short usage note", desc: "Clear space and the backgrounds to avoid." },
    ],
    faqs: [
      { q: "How many concepts does a logo design company in {place} show?", a: "We develop one direction and refine it. We do not sell an unlimited set of unrelated sketches." },
      { q: "Do we own the logo?", a: "Yes, as the contract states, once the agreed fee is paid." },
      { q: "Will you register the trademark?", a: "No. That is a legal step." },
      { q: "Can the logo go on a new website?", a: "Yes. The site is a separate quote." },
    ],
  },
  {
    slug: "brand-identity-design-agency",
    name: "Brand Identity Design Agency",
    line1: "Brand Identity",
    line2: "Design Agency",
    places: ["mangalore", "mangaluru"],
    keywords: ["brand identity design agency", "brand identity", "visual identity"],
    clause: "The system around the logo: colour, type, and rules. A lone icon is a smaller job.",
    intro: {
      mangalore:
        "A brand identity design agency in Mangalore should design the system, not only a symbol. Dark Media Tech sets the mark, the colour, the type, and a short guide, from our Mangaluru studio. The identity has to work on a board and in a document. We do not deliver a mood board with no files, and we do not claim a city award for the system.",
      mangaluru:
        "Brand identity design in Mangaluru is for a business that will use the same mark on more than one thing. We design that set at Kotichennaya Circle and test it small and in one colour. Mangaluru is the city name we use on this page. The guide stays short enough that a new staff member can follow it.",
    },
    cards: [
      { title: "More than a logo file", desc: "Colour, type, and the spaces where the mark should not be stretched." },
      { title: "Checked at real sizes", desc: "A sign, a card, and a phone header, not only a large presentation slide." },
      { title: "A guide people will open", desc: "A few pages. A binder nobody reads is not the deliverable." },
    ],
    why: {
      mangalore:
        "Mangalore identities fail when the logo, the shop font, and the website colour are three different brands. We design them as one system and say which applications are in this quote.",
      mangaluru:
        "An identity designed in Mangaluru should still be usable by a printer in another town. The files are part of the job, not a favour after launch.",
    },
    points: ["System, not a single icon", "Print and screen checked", "Guide included when the identity is the scope", "No trademark filing"],
    offerLead: "Identity",
    offerBody: "Visual systems designed in Mangaluru.",
    offers: [
      { title: "Logo and lockups", desc: "Primary, small, and one-colour versions." },
      { title: "Colour and type", desc: "A palette and faces you can license or that we specify." },
      { title: "A short guide", desc: "Use, misuse, and clear space." },
      { title: "One application", desc: "The first real use, named in the quote." },
    ],
    faqs: [
      { q: "How is a brand identity design agency in {place} different from a logo company?", a: "A logo is the mark. An identity is the mark plus colour, type, and rules. We quote them so you can see the difference." },
      { q: "Do you write a long brand book?", a: "Only if the quote says so. The usual delivery is a short guide." },
      { q: "Will the identity include a website?", a: "Not unless it is listed. The site is its own project." },
      { q: "Who approves the final files?", a: "You do, before we hand them over." },
    ],
  },
  {
    slug: "company-profile-design",
    name: "Company Profile Design",
    line1: "Company Profile",
    line2: "Design",
    places: ["mangalore", "mangaluru"],
    keywords: ["company profile design", "company profile designers", "corporate profile design"],
    clause: "A profile document designed from facts you supply. We do not invent clients, turnover, or awards.",
    intro: {
      mangalore:
        "Company profile design in Mangalore is a document a buyer can read: what you do, where you work, and how to contact you. Dark Media Tech designs it at our Mangaluru studio. You supply the facts. We do not invent project lists, turnover, or awards to make the profile look larger. Print and a PDF are both possible. The page count is in the quote.",
      mangaluru:
        "A company profile for Mangaluru firms is often the file that goes out before a meeting. We design that file at Kotichennaya Circle so it matches the logo and stays readable on a phone. Mangaluru on the cover should be the real address. We will not drop in stock photos of a city you do not work in and call them your office.",
    },
    cards: [
      { title: "Facts you can stand behind", desc: "Services, proof, and contact. Invented case studies are out of scope." },
      { title: "A length you will actually send", desc: "A short profile beats a book nobody attaches to an email." },
      { title: "Files for screen and print", desc: "PDF, and print artwork if a printer is producing it." },
    ],
    why: {
      mangalore:
        "Mangalore profiles fail when every page is a slogan. We start with the pages a buyer needs, then design them. Photography you do not have is not faked.",
      mangaluru:
        "Company profile design in Mangaluru should use the identity you already have. If the logo is weak, we can quote a mark separately. We will not redesign the whole brand inside a profile fee unless that is written down.",
    },
    points: ["Copy based on your facts", "No invented awards", "Page count agreed first", "Designed in Mangaluru"],
    offerLead: "Profiles",
    offerBody: "Designed company profiles, not fictional histories.",
    offers: [
      { title: "A structure", desc: "Cover, services, proof, and contact." },
      { title: "The design", desc: "Type and image slots that match the brand." },
      { title: "Your words, edited for clarity", desc: "You still approve anything that describes the business." },
      { title: "A PDF", desc: "Ready to send. Print files if you are printing." },
    ],
    faqs: [
      { q: "Will company profile design in {place} include made-up clients?", a: "No. If you cannot name the work, it does not go in the profile." },
      { q: "Do you write the text?", a: "We can edit what you provide. You approve the final wording." },
      { q: "Can it be in two languages?", a: "Only if the quote includes both, and you approve the second language." },
      { q: "Is printing included?", a: "No. We design. Your printer produces copies." },
    ],
  },
  {
    slug: "corporate-branding-services",
    name: "Corporate Branding Services",
    line1: "Corporate Branding",
    line2: "Services",
    places: ["mangalore", "mangaluru"],
    keywords: ["corporate branding services", "corporate branding", "corporate identity"],
    clause: "A shared identity for a company that shows up in more than one place. Not a startup logo contest.",
    intro: {
      mangalore:
        "Corporate branding services in Mangalore are for a firm whose name already appears on letters, a site, a board, and a profile. Dark Media Tech aligns those from our Mangaluru studio. We keep what customers recognise and fix what has drifted. We do not replace a working name for novelty, and we do not claim a corporate award.",
      mangaluru:
        "Corporate branding in Mangaluru starts with an audit of what you already publish. Letterhead, the website header, and the sign should not look like three companies. We design the shared system at Kotichennaya Circle. Departments get the same mark. They do not each get a new logo unless you have a real sub-brand and the quote says so.",
    },
    cards: [
      { title: "One company, one system", desc: "The places the name already appears are listed before we redraw anything." },
      { title: "Recognition kept", desc: "A refresh is not an excuse to throw away a mark people know." },
      { title: "Stationery and a profile, if named", desc: "Those are applications. They are in the quote or they are not." },
    ],
    why: {
      mangalore:
        "Mangalore companies collect logos over the years. Corporate branding services in Mangalore, for us, means choosing one and writing the rules. Reviews are at the studio.",
      mangaluru:
        "A corporate brand in Mangaluru has to survive a tender document and a sign. We check both. We do not stop at a slide.",
    },
    points: ["Existing uses reviewed first", "One master mark", "Sub-brands only if scoped", "No invented credentials"],
    offerLead: "Corporate identity",
    offerBody: "Branding for companies with more than one public surface.",
    offers: [
      { title: "An audit of current uses", desc: "Where the name and mark already appear." },
      { title: "The master identity", desc: "Mark, colour, and type." },
      { title: "A short standard", desc: "What staff and printers should follow." },
      { title: "The first applications", desc: "The items named in the quote, such as a profile or a card." },
    ],
    faqs: [
      { q: "Do corporate branding services in {place} include a new name?", a: "Only if you ask for a name. Most corporate work keeps the name and fixes the system." },
      { q: "Will every department get its own logo?", a: "No. A sub-brand is a separate decision and a separate scope." },
      { q: "Can you apply this to the website?", a: "Yes, as a web project, quoted apart from the identity." },
      { q: "Do you print the stationery?", a: "We prepare files. Printing stays with your printer." },
    ],
  },
  {
    slug: "graphic-design-company",
    name: "Graphic Design Company",
    line1: "Graphic Design Company",
    line2: "",
    places: ["mangalore", "mangaluru"],
    keywords: ["graphic design company", "graphic designers", "graphic design studio"],
    clause: "Designed pieces for a real use: a profile, a poster, a brochure, or a social frame. Not an endless unnamed calendar.",
    intro: {
      mangalore:
        "A graphic design company in Mangalore should ask what the piece is for before it opens a layout. Dark Media Tech designs those pieces at Nandi Gudda: a profile, a brochure, a poster, or a set of social frames around one offer. We do not sell a monthly pile of templates with the logo swapped, and we do not buy reach for the artwork.",
      mangaluru:
        "Graphic design in Mangaluru is produced at Kotichennaya Circle. The quote names the sizes and the count. A festival post and a tender cover are different jobs. This page uses Mangaluru because that is the city. The same studio does not become a different company when the spelling changes.",
    },
    cards: [
      { title: "A use, then a layout", desc: "Who will see it, and on paper or a screen, decides the design." },
      { title: "Your brand, if you have one", desc: "We follow the identity. If there is no identity, a logo is a separate quote." },
      { title: "Files the next person can use", desc: "Print or social sizes, as named. Not a locked preview only." },
    ],
    why: {
      mangalore:
        "Mangalore graphic work is often a rush poster with no message. We write the offer first, then design. You approve the words that describe the business.",
      mangaluru:
        "A graphic design company in Mangaluru should be findable at an address. Ours is Kotichennaya Circle. Social posting and ad spend are not included unless the quote says so.",
    },
    points: ["Pieces named in the quote", "No bought followers", "Words approved by you", "Designed in Mangaluru"],
    offerLead: "Graphic design",
    offerBody: "Layouts for pieces you will actually publish.",
    offers: [
      { title: "A print piece", desc: "Poster, cover, or a page, to a size you name." },
      { title: "A social set", desc: "The count and the placements in the quote." },
      { title: "A simple system", desc: "Type and colour so the next piece can match." },
      { title: "Source files", desc: "So a later edit is possible." },
    ],
    faqs: [
      { q: "Does a graphic design company in {place} post to Instagram?", a: "Only if management is in the quote. Design and posting are different jobs." },
      { q: "Can you design one poster?", a: "Yes. A single piece is a valid scope." },
      { q: "Do you supply the photographs?", a: "We plan the image slots. A photo shoot is separate." },
      { q: "Will you design a logo inside a poster fee?", a: "No. A logo is its own quote." },
    ],
  },
  {
    slug: "brochure-design-company",
    name: "Brochure Design Company",
    line1: "Brochure Design Company",
    line2: "",
    places: ["mangalore", "mangaluru"],
    keywords: ["brochure design company", "brochure designers", "brochure design"],
    clause: "A brochure laid out from your facts, ready for a printer. We do not print the run.",
    intro: {
      mangalore:
        "A brochure design company in Mangalore should know the folded size before the decoration starts. Dark Media Tech designs brochures at our Mangaluru studio for hotels, colleges, clinics, and firms that still hand a printed piece to a visitor. You provide the facts and the photos you want used. We do not invent facilities. The printer you choose produces the copies.",
      mangaluru:
        "Brochure design in Mangaluru is a short document with a job: explain the offer and give a way to call. We design it at Kotichennaya Circle, for the size and paper your printer confirms. A PDF that is only read on a phone is a different layout, and we will say which one the quote covers.",
    },
    cards: [
      { title: "Size before style", desc: "Fold, page count, and bleed come from the printer's spec when you are printing." },
      { title: "Claims you can prove", desc: "Services and photos you supply. We do not add awards you do not have." },
      { title: "Print-ready files", desc: "We design. We do not run the press." },
    ],
    why: {
      mangalore:
        "Mangalore brochures often fail at the printer because the file was a screen layout. We start from the dieline or the page size. You can check a proof at the studio.",
      mangaluru:
        "A brochure design company in Mangaluru should also ask whether a one-page sheet is enough. We will recommend the shorter piece when a twelve-page brochure would only repeat the website.",
    },
    points: ["Page count agreed first", "Printer spec when it is going to print", "No invented claims", "Designed in Mangaluru"],
    offerLead: "Brochures",
    offerBody: "Designed brochures and leave-behinds.",
    offers: [
      { title: "A structure", desc: "Cover, offer, proof, and contact." },
      { title: "The layout", desc: "Type and images for the size in the quote." },
      { title: "A proof", desc: "You read it before files go to a printer." },
      { title: "Print files", desc: "The format your printer asks for." },
    ],
    faqs: [
      { q: "Does a brochure design company in {place} print the brochures?", a: "No. We design the artwork. Your printer produces the run." },
      { q: "How many pages?", a: "The quote names the count. A leaflet and a twelve-page piece are different jobs." },
      { q: "Can you write the brochure?", a: "We can edit your notes. You approve every claim." },
      { q: "Do you photograph the property or product?", a: "A shoot is separate. We design the slots either way." },
    ],
  },
  {
    slug: "business-branding-services",
    name: "Business Branding Services",
    line1: "Business Branding",
    line2: "Services",
    places: ["mangalore", "mangaluru"],
    keywords: ["business branding services", "small business branding", "business brand identity"],
    clause: "Branding sized for an owner-run firm. A short identity, not an enterprise brand programme.",
    intro: {
      mangalore:
        "Business branding services in Mangalore are for a shop, a clinic, a college desk, or a family firm that has a reputation and no shared way to show it. Dark Media Tech designs a mark and a few rules at our Mangaluru studio. The first use is something you will actually put up: a board, a card, or a profile. We do not sell a cheap template with the area name on it, and we do not price this like a national rebrand.",
      mangaluru:
        "Business branding in Mangaluru should be explainable to the owner in one meeting at Kotichennaya Circle. What the mark is, where it goes first, and what is not included. Mangaluru businesses do not need five logo options and a strategy deck they will not open. They need files they can send to a printer this month.",
    },
    cards: [
      { title: "Sized for the firm", desc: "A mark, colours, and one real application. Not a year-long programme." },
      { title: "The owner can use it", desc: "If only a designer can apply the brand, it will not survive the first week." },
      { title: "Room to grow", desc: "A website or a pack can come later, as its own quote." },
    ],
    why: {
      mangalore:
        "Mangalore owner-run firms are often handed a logo and nothing else. Business branding services in Mangalore include the first place that logo has to work, so it is tested.",
      mangaluru:
        "We will say when a business in Mangaluru only needs a careful logo. Branding services are the system around it. Both are available. They are not the same fee.",
    },
    points: ["First application included in the plan", "No bait price", "No enterprise theatre", "Reviewed in Mangaluru"],
    offerLead: "Business branding",
    offerBody: "Practical identity work for owner-run firms.",
    offers: [
      { title: "A mark", desc: "Primary and small versions." },
      { title: "Colour and type", desc: "Enough to keep the next piece consistent." },
      { title: "One application", desc: "Card, board artwork, or a one-page profile, as named." },
      { title: "Files", desc: "For you and for your printer." },
    ],
    faqs: [
      { q: "Are business branding services in {place} only for large companies?", a: "No. This scope is for a firm that needs a usable identity, not a corporate programme." },
      { q: "Is there a starter price?", a: "We quote the pieces. We do not advertise a bait price." },
      { q: "Can we start with a logo only?", a: "Yes. Say so, and the quote stays a logo." },
      { q: "Will you design the shop board?", a: "Artwork for a board can be the application. Fabrication is the sign maker's job." },
    ],
  },
  {
    slug: "rebranding-agency",
    name: "Rebranding Agency",
    line1: "Rebranding Agency",
    line2: "",
    places: ["mangalore"],
    keywords: ["rebranding agency", "rebranding company", "brand refresh"],
    clause: "A careful change to a brand people already know. We do not throw away recognition for a new look.",
    intro: {
      mangalore:
        "A rebranding agency in Mangalore should start with what customers already recognise. Dark Media Tech reviews the current mark, the places it appears, and what is failing, at our Mangaluru studio. Then we change only what the brief can justify: a tired palette, a mark that fails at small size, or a name you have already decided to leave. We do not sell a rebrand as a trophy, and we do not claim the new identity will rank.",
    },
    cards: [
      { title: "What must stay", desc: "Recognition is an asset. We write down what people already know before we redraw." },
      { title: "A reason for the change", desc: "A new trend is not a reason. A mark that cannot be printed, or a name you are leaving, is." },
      { title: "A rollout you can finish", desc: "The quote names which items change now and which can wait." },
    ],
    why: {
      mangalore:
        "Mangalore rebrands fail when every old file is abandoned on day one. We plan the first surfaces: the sign, the profile, the website header. The rest follows when you are ready. Reviews are at Kotichennaya Circle.",
    },
    points: ["Current brand reviewed first", "Recognition kept where it still works", "Rollout listed, not implied", "No ranking promise"],
    offerLead: "Rebranding",
    offerBody: "Identity changes for Mangalore businesses that already have a name in the market.",
    offers: [
      { title: "A review", desc: "Where the current brand is used and where it fails." },
      { title: "The updated system", desc: "Mark, colour, and type, with a note on what changed." },
      { title: "The first surfaces", desc: "The items that have to match on day one." },
      { title: "Files for the printer and the site", desc: "So the old and new are not mixed by accident." },
    ],
    faqs: [
      { q: "Does a rebranding agency in Mangalore always change the name?", a: "No. Many rebrands keep the name and fix the visual system." },
      { q: "Will you delete the old logo everywhere?", a: "We list what changes in this phase. A full replacement of every old file is rarely day one." },
      { q: "Can you rebrand and rebuild the website?", a: "Yes. The site is quoted separately so the identity decision is visible." },
      { q: "Do you guarantee more enquiries?", a: "No. A clearer brand can help. It is not a lead guarantee." },
    ],
  },
  {
    slug: "packaging-design-company",
    name: "Packaging Design Company",
    line1: "Packaging Design Company",
    line2: "",
    places: ["mangalore"],
    keywords: ["packaging design company", "packaging designers", "product packaging design"],
    clause: "Artwork for a pack your printer can produce. We do not manufacture the box or invent legal claims.",
    intro: {
      mangalore:
        "A packaging design company in Mangalore should design to a dieline, not to a pretty mockup that cannot be printed. Dark Media Tech does that artwork at our Mangaluru studio for food, spice, and product brands. You or your printer supply the structure. You supply ingredients, claims, and the legal lines. We place them so they can be read. We do not run the factory, and we do not invent a nutrition panel.",
    },
    cards: [
      { title: "A dieline before decoration", desc: "The shape of the pack decides the layout. We design to that." },
      { title: "Words you supply", desc: "Ingredients and claims come from you. We do not write them from guesswork." },
      { title: "Print-ready files", desc: "Your printer or converter produces the pack." },
    ],
    why: {
      mangalore:
        "Mangalore packaging jobs fail when the design ignores the fold and the mandatory text. We start from the dieline and the words that must appear. A matching website is a separate quote. Reviews can be at Kotichennaya Circle.",
    },
    points: ["Dieline from you or your printer", "Legal copy supplied by you", "No manufacturing", "Designed in Mangaluru"],
    offerLead: "Packs",
    offerBody: "Packaging artwork for Mangalore brands.",
    offers: [
      { title: "A primary pack", desc: "Front, back, and the panels that carry facts." },
      { title: "A short range", desc: "Flavours or sizes that share one system." },
      { title: "A careful refresh", desc: "Keep recognition, fix what is hard to read." },
      { title: "Files for your printer", desc: "The format they ask for, after the dieline is confirmed." },
    ],
    faqs: [
      { q: "Does a packaging design company in Mangalore print the boxes?", a: "No. We design the artwork. Your printer manufactures the pack." },
      { q: "Who writes the ingredients and claims?", a: "You do. We will not invent them." },
      { q: "Can you design the logo as well?", a: "Yes, as its own scope, if the brand does not have one yet." },
      { q: "Do you design shipping cartons and the retail pack?", a: "Only the formats named in the quote." },
    ],
  },
];

const built = specs.flatMap((spec) => spec.places.map((city) => build(spec, city)));

export const brandingSeoPages: WebDevelopmentLocation[] = built.map((page) => ({
  ...page,
  content: {
    ...page.content,
    localPagesHeading: "Branding in Mangalore and Mangaluru",
    localPagesIntro:
      "The studio is in Mangaluru. These pages cover identity, logos, profiles, print, and packaging. They do not mean a second office.",
    localPages: built
      .filter((item) => item.seo.path !== page.seo.path)
      .map((item) => ({ title: item.serviceName, href: item.seo.path })),
  },
}));

export function getBrandingPage(slug: string) {
  return brandingSeoPages.find((page) => page.slug === slug);
}
