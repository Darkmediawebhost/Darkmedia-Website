import type { FaqItem, ServiceLink, TextBlock, WebDevelopmentLocation } from "@/lib/web-development-locations";

const webHub: ServiceLink = { title: "Web Development Services", href: "/services/web-development" };
const mangaloreHub: ServiceLink = {
  title: "Website Development Company in Mangalore",
  href: "/services/web-development/mangalore",
};
const contact: ServiceLink = { title: "Contact our team", href: "/contact-us" };
const erpMangalore: ServiceLink = {
  title: "ERP Software Development Company in Mangalore",
  href: "/services/web-development/erp-software-development-mangalore",
};
const erpMangaluru: ServiceLink = {
  title: "ERP Software Development Company in Mangaluru",
  href: "/services/web-development/erp-software-development-mangaluru",
};

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
  related: ServiceLink[];
};

function page(input: PageInput): WebDevelopmentLocation {
  const path = `/services/web-development/${input.slug}`;
  return {
    slug: input.slug,
    name: input.badgeText,
    market: "mangalore",
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
      services: [webHub, mangaloreHub, ...input.related, contact].filter(
        (link, index, all) => link.href !== path && all.findIndex((item) => item.href === link.href) === index,
      ),
    },
  };
}

const studioAnswer = "Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002. That is the only studio.";

export const erpSeoPages: WebDevelopmentLocation[] = [
  page({
    slug: "custom-erp-software-development-mangalore",
    serviceName: "Custom ERP Software Development Company in Mangalore",
    title: "Custom ERP Software Development Company in Mangalore | Dark Media",
    description:
      "Custom ERP software development company in Mangalore. We write operational software for your workflow from our Mangaluru studio. We do not resell SAP or Salesforce.",
    keywords: [
      "custom ERP software development company in Mangalore",
      "custom ERP developers Mangalore",
      "bespoke ERP Mangalore",
      "custom ERP software Mangalore",
      "Mangalore custom ERP company",
    ],
    badgeText: "Mangalore",
    titleLine1: "Custom ERP Software Development",
    titleLine2: "Company in Mangalore",
    intro:
      "A custom ERP software development company in Mangalore should mean the software is written for this business, not a package with your logo on the login. Dark Media Tech maps the workflow at our Mangaluru studio and builds the screens that replace the sheet. Orders, stock, or approvals come first. A second department waits until the first one is actually used. We do not implement SAP, Oracle, or Salesforce.",
    cards: [
      { title: "Written for your steps", desc: "The fields match the job. A module list from a brochure does not." },
      { title: "Small enough to start", desc: "The first release is the morning task. Extra screens are a later quote." },
      { title: "Your records can leave", desc: "An export is part of the build, so the data is not trapped." },
    ],
    whyTitleLead: "Custom ERP",
    whyTitleAccent: "in Mangalore",
    whyBody:
      "Mangalore firms get pitched a suite and then told to change how they work. Custom ERP software development in Mangalore, for us, is the other way around. You review the workflow at Kotichennaya Circle with the people who will use it. If a packaged product already fits, we will say so before anyone writes code.",
    whyPoints: [
      "Process agreed before screens are built",
      "No resale of SAP, Oracle, or Salesforce",
      "Roles for the clerk and the owner",
      "Reviewed at the Mangaluru studio",
    ],
    offerTitleLead: "Custom ERP",
    offerTitleRest: "for",
    offerTitleAccent: "Mangalore",
    offerBody: "Operational software written for one company.",
    offers: [
      { title: "A process map", desc: "From request to done, in the words your staff use." },
      { title: "The first screens", desc: "The list each role opens in the morning." },
      { title: "A sheet import", desc: "When the current file is clean enough to move." },
      { title: "A walkthrough", desc: "With the people who will use it, at the studio or on a call." },
    ],
    faqs: [
      {
        question: "Do you sell a ready-made ERP?",
        answer: "No. A custom ERP software development company in Mangalore, as we practice it, builds the workflow in the quote. We do not resell a branded suite.",
      },
      {
        question: "Can we start with inventory only?",
        answer: "Yes, if that is the pain. A full company system on day one is not a scope we will sign.",
      },
      {
        question: "Will this file our GST returns?",
        answer: "No. Order and stock status can be in scope. Statutory accounting and tax filing stay with a specialist.",
      },
      {
        question: "How is it priced?",
        answer: "By the workflows and screens. A single desk and a multi-branch system are different quotes.",
      },
      { question: "Where is the studio?", answer: studioAnswer },
    ],
    related: [erpMangalore, erpMangaluru],
  }),
  page({
    slug: "custom-erp-software-development-mangaluru",
    serviceName: "Custom ERP Software Development Company in Mangaluru",
    title: "Custom ERP Software Development Company in Mangaluru | Dark Media",
    description:
      "Custom ERP software development company in Mangaluru. Operational software for local teams, built at Nandi Gudda. Not a configured ERP brand.",
    keywords: [
      "custom ERP software development company in Mangaluru",
      "custom ERP Mangaluru",
      "bespoke ERP software Mangaluru",
      "custom ERP developers Mangaluru",
      "Mangaluru custom ERP",
    ],
    badgeText: "Mangaluru",
    titleLine1: "Custom ERP Software Development",
    titleLine2: "Company in Mangaluru",
    intro:
      "Custom ERP software development in Mangaluru starts in the office that already runs the work. Distributors, workshops, and family firms around Nandi Gudda often share one sheet across two counters. Dark Media Tech replaces that sheet with a login, a status, and a role for each person. The spelling on this page is Mangaluru because that is the city's name and the studio's city. We still do not sell a packaged ERP.",
    cards: [
      { title: "Two counters, one record", desc: "A job updated at one desk should not be retyped at the other." },
      { title: "Language your staff already use", desc: "Stage names stay familiar. We do not rename the business to match a product." },
      { title: "A stop when it is enough", desc: "If the first release removes the double entry, we do not add modules to sound larger." },
    ],
    whyTitleLead: "Built in",
    whyTitleAccent: "Mangaluru",
    whyBody:
      "A custom ERP software development company in Mangaluru should be able to sit with the people who do the work. That meeting is at Kotichennaya Circle. We write the screens from what we see, not from a generic industry template. Packaged ERP brands remain someone else's product.",
    whyPoints: [
      "Reviewed in Mangaluru with the users",
      "One shared record for the desks that need it",
      "No branded suite",
      "Export included so you are not locked in",
    ],
    offerTitleLead: "Custom ERP",
    offerTitleRest: "in",
    offerTitleAccent: "Mangaluru",
    offerBody: "Software shaped to a Mangaluru operation.",
    offers: [
      { title: "A day in the workflow", desc: "What happens from the first request to done." },
      { title: "Roles", desc: "Who creates, who changes stock, who can see status." },
      { title: "The first release", desc: "The smallest system that removes the retype." },
      { title: "Care after launch", desc: "Fixes once people start using it every day." },
    ],
    faqs: [
      {
        question: "Is custom ERP software development in Mangaluru the same as buying ERP?",
        answer: "No. We build the system. We do not resell SAP, Oracle, or Salesforce.",
      },
      {
        question: "Can the team visit the studio?",
        answer: "Yes. Reviews can be at Kotichennaya Circle. That is the point of a Mangaluru project.",
      },
      {
        question: "Do you replace Tally?",
        answer: "No. We can show order and stock status. Statutory books stay with your accountant.",
      },
      {
        question: "How long is a first version?",
        answer: "A narrow workflow is often a few weeks after the steps are agreed. Several roles take longer. The quote has the timeline.",
      },
      { question: "Where are you based?", answer: studioAnswer },
    ],
    related: [erpMangaluru, erpMangalore],
  }),
  page({
    slug: "erp-software-solutions-mangalore",
    serviceName: "ERP Software Solutions in Mangalore",
    title: "ERP Software Solutions in Mangalore | Dark Media",
    description:
      "ERP software solutions in Mangalore for a named operational problem. We build the system. We do not sell a boxed ERP product.",
    keywords: [
      "ERP software solutions in Mangalore",
      "ERP solutions Mangalore",
      "ERP software Mangalore",
      "business ERP solution Mangalore",
      "Mangalore ERP solutions",
    ],
    badgeText: "Mangalore",
    titleLine1: "ERP Software Solutions",
    titleLine2: "in Mangalore",
    intro:
      "ERP software solutions in Mangalore should name the problem they solve. Dark Media Tech builds a system for that problem from our Mangaluru studio: orders that are retyped, stock that disagrees between two desks, or an approval that lives only in a chat. There is no price list of ready-made ERP products. If the honest answer is a smaller tool, or a package from another vendor, we will say that before the quote grows.",
    cards: [
      { title: "A problem you can point at", desc: "The solution is that job, finished in software. A poster of modules is not a solution." },
      { title: "Staff can complete the step", desc: "Success is the morning list leaving the spreadsheet." },
      { title: "Limits written down", desc: "We do not include tax filing, payroll law, or a suite we do not own." },
    ],
    whyTitleLead: "ERP solutions",
    whyTitleAccent: "in Mangalore",
    whyBody:
      "Searches for ERP software solutions in Mangalore often find a demo of someone else's product. We would rather walk through your current sheet at Kotichennaya Circle and say which columns become records. The solution is custom software for that sheet, not a brand name.",
    whyPoints: [
      "The problem is named before design",
      "No boxed ERP catalogue",
      "Built and reviewed in Mangaluru",
      "Data export included",
    ],
    offerTitleLead: "Solutions",
    offerTitleRest: "we build in",
    offerTitleAccent: "Mangalore",
    offerBody: "Operational answers, scoped one problem at a time.",
    offers: [
      { title: "Orders", desc: "Asked, owned, and finished." },
      { title: "Stock", desc: "On hand, moved, and still missing." },
      { title: "Approvals", desc: "A recorded step instead of a forwarded message." },
      { title: "An owner list", desc: "What is stuck, short enough to read." },
    ],
    faqs: [
      {
        question: "Are ERP software solutions in Mangalore a product I can switch on?",
        answer: "No. We build the solution for the workflow in the quote. We do not sell a ready-made ERP.",
      },
      {
        question: "Which problems do you take first?",
        answer: "The repeated one: retyping orders, arguing about stock, or losing an approval. A whole-company transformation is not the first release.",
      },
      {
        question: "Can the public website send enquiries into it?",
        answer: "Yes, when that connection is in the scope.",
      },
      {
        question: "Do you implement SAP?",
        answer: "No.",
      },
      { question: "Where is the studio?", answer: studioAnswer },
    ],
    related: [erpMangalore],
  }),
  page({
    slug: "custom-erp-solutions-for-businesses-mangalore",
    serviceName: "Custom ERP Solutions for Businesses in Mangalore",
    title: "Custom ERP Solutions for Businesses in Mangalore | Dark Media",
    description:
      "Custom ERP solutions for businesses in Mangalore. A practical system for an owner-run firm, built in Mangaluru. Not an enterprise suite.",
    keywords: [
      "custom ERP solutions for businesses in Mangalore",
      "ERP for small business Mangalore",
      "custom ERP for businesses Mangalore",
      "business ERP Mangalore",
      "Mangalore business ERP solutions",
    ],
    badgeText: "Mangalore",
    titleLine1: "Custom ERP Solutions",
    titleLine2: "for Businesses in Mangalore",
    intro:
      "Custom ERP solutions for businesses in Mangalore are for the firm an owner still recognises: a trader, a workshop, a clinic desk, a distributor with two counters. Dark Media Tech builds a small operational system at our Mangaluru studio. It is not a programme for a thousand users, and it is not priced like one. The first release covers the job that currently breaks the sheet. We do not resell an enterprise suite to a business that will never configure it.",
    cards: [
      { title: "Sized for the firm", desc: "The people who do the work should be able to open it without a training course." },
      { title: "The owner's view is short", desc: "Pending work, not a wall of charts." },
      { title: "Honest about accounting", desc: "We track operational status. Your accountant keeps the statutory books." },
    ],
    whyTitleLead: "For Mangalore",
    whyTitleAccent: "businesses",
    whyBody:
      "A business in Mangalore does not need every module a global vendor lists. Custom ERP solutions for businesses in Mangalore, from this studio, start with who takes the order and who says it is done. We review that at Kotichennaya Circle. Growth can add a screen later. It does not have to be in version one.",
    whyPoints: [
      "Built for an operating business, not a product demo",
      "First release is one job",
      "No enterprise licence",
      "Studio reviews in Mangaluru",
    ],
    offerTitleLead: "Business ERP",
    offerTitleRest: "in",
    offerTitleAccent: "Mangalore",
    offerBody: "Custom systems for owner-run firms.",
    offers: [
      { title: "The daily job", desc: "Orders, jobs, or stock, whichever one is breaking." },
      { title: "A login per person", desc: "So two people stop editing one file." },
      { title: "A simple report", desc: "What is open, for the owner." },
      { title: "Room to add a desk", desc: "A second role when the first one is in use." },
    ],
    faqs: [
      {
        question: "Are custom ERP solutions for businesses in Mangalore only for large companies?",
        answer: "No. Most of this work is for a firm that has outgrown a spreadsheet and does not want a suite.",
      },
      {
        question: "Is there a cheap starter ERP?",
        answer: "We quote the workflow. We do not advertise a bait price for a template with your city name on it.",
      },
      {
        question: "Can my staff update it?",
        answer: "Yes. The screens are for them. A developer should not be required to mark a job done.",
      },
      {
        question: "Do you replace our accountant's software?",
        answer: "No.",
      },
      { question: "Where do we meet?", answer: studioAnswer },
    ],
    related: [erpMangalore],
  }),
  page({
    slug: "real-estate-erp-software-development-mangalore",
    serviceName: "Real Estate ERP Software Development Company in Mangalore",
    title: "Real Estate ERP Software Development Company in Mangalore | Dark Media",
    description:
      "Real estate ERP software development company in Mangalore. Units, enquiries, and site visits in one system. Not a land-records portal, and not a resold ERP.",
    keywords: [
      "real estate ERP software development company in Mangalore",
      "real estate ERP Mangalore",
      "property ERP software Mangalore",
      "real estate software Mangalore",
      "builder ERP Mangalore",
    ],
    badgeText: "Mangalore",
    titleLine1: "Real Estate ERP Software",
    titleLine2: "Development Company in Mangalore",
    intro:
      "A real estate ERP software development company in Mangalore should track what a builder or broker already does: which unit, who enquired, whether the site visit happened, and what the next step is. Dark Media Tech builds that system from our Mangaluru studio. We do not build a government land-records portal, we do not guarantee bookings, and we do not resell a property ERP brand. The public website, if you need one, is a separate quote.",
    cards: [
      { title: "Units and enquiries", desc: "A flat or a plot has a status. An enquiry has an owner and a next date." },
      { title: "Visits that were promised", desc: "The list shows who was supposed to see the site, and whether they did." },
      { title: "Not a land office", desc: "Titles, registrations, and legal opinions stay with your counsel. The software stores the status you enter." },
    ],
    whyTitleLead: "Real estate ERP",
    whyTitleAccent: "in Mangalore",
    whyBody:
      "Mangalore property teams lose leads between a brochure, a phone, and a sheet. Real estate ERP software development in Mangalore, for us, puts those in one record the sales desk will open. We review it at Kotichennaya Circle. We will not add a payment gateway or a portal unless the quote says so.",
    whyPoints: [
      "Enquiry, unit, and visit in the first release",
      "No government land-records system",
      "No resold property suite",
      "Website quoted separately",
    ],
    offerTitleLead: "Property operations",
    offerTitleRest: "in",
    offerTitleAccent: "Mangalore",
    offerBody: "Software for the sales desk, not for the sub-registrar.",
    offers: [
      { title: "A unit list", desc: "Available, held, or spoken for, in your words." },
      { title: "Enquiries", desc: "Who called, what they asked, and the next date." },
      { title: "Site visits", desc: "Booked and completed, visible to the desk." },
      { title: "An export", desc: "The pipeline can leave with you." },
    ],
    faqs: [
      {
        question: "Does a real estate ERP software development company in Mangalore handle registrations?",
        answer: "No. We build the operational record. Legal registration is not software we provide.",
      },
      {
        question: "Can brokers and a builder share it?",
        answer: "Only if the quote names both roles. We do not assume a public portal.",
      },
      {
        question: "Will you photograph the project?",
        answer: "No. We plan the fields. Photography is separate.",
      },
      {
        question: "Is this a CRM instead?",
        answer: "If you only need enquiries, we will say so. Units and visits are what makes it this ERP scope.",
      },
      { question: "Where is the studio?", answer: studioAnswer },
    ],
    related: [erpMangalore],
  }),
  page({
    slug: "inventory-management-erp-software-development-mangalore",
    serviceName: "Inventory Management ERP Software Development Company in Mangalore",
    title: "Inventory Management ERP Software Development Company in Mangalore | Dark Media",
    description:
      "Inventory management ERP software development company in Mangalore. Stock, movement, and who took it, built in Mangaluru. Not a full accounting suite.",
    keywords: [
      "inventory management ERP software development company in Mangalore",
      "inventory ERP Mangalore",
      "inventory management software Mangalore",
      "stock management ERP Mangalore",
      "Mangalore inventory software",
    ],
    badgeText: "Mangalore",
    titleLine1: "Inventory Management ERP",
    titleLine2: "Software Development Company in Mangalore",
    intro:
      "An inventory management ERP software development company in Mangalore should answer three questions: what you have, where it moved, and who moved it. Dark Media Tech builds that record from our Mangaluru studio for traders and workshops that have outgrown a stock sheet. This is narrower than a whole-company ERP. We do not add payroll, tax filing, or a shopfront unless those are separate quotes. We do not resell an inventory brand.",
    cards: [
      { title: "On hand, in and out", desc: "A movement has a date and a person. A number with no history is how stock arguments start." },
      { title: "One store or two", desc: "If you have a godown and a counter, both should read the same item." },
      { title: "Not the accounts book", desc: "Quantity and status are in scope. Statutory inventory valuation for filings is your accountant's work." },
    ],
    whyTitleLead: "Inventory ERP",
    whyTitleAccent: "in Mangalore",
    whyBody:
      "Mangalore stock problems are usually a sheet that two people edit. Inventory management ERP software development in Mangalore starts there. We sit through a receipt and an issue at Kotichennaya Circle, then build those two movements. Barcode hardware, if you want it, is named in the quote. We do not pretend a scanner is included by default.",
    whyPoints: [
      "Receipt and issue in the first release",
      "No assumed barcode hardware",
      "No statutory valuation product",
      "Built in Mangaluru",
    ],
    offerTitleLead: "Inventory",
    offerTitleRest: "systems in",
    offerTitleAccent: "Mangalore",
    offerBody: "Stock software for the movement you already do.",
    offers: [
      { title: "Items", desc: "The list you actually store, not a global catalogue." },
      { title: "Movements", desc: "In, out, and an adjustment a person can explain." },
      { title: "A low-stock view", desc: "What to reorder, if you want that warning." },
      { title: "An export", desc: "So the counts can be checked outside the system." },
    ],
    faqs: [
      {
        question: "Is inventory management ERP software development in Mangalore a full ERP?",
        answer: "It is the stock workflow. Orders, billing, and accounts are separate scopes if you need them.",
      },
      {
        question: "Do you supply barcode scanners?",
        answer: "No. Hardware is not part of the software quote unless we say so in writing, and we usually do not supply it.",
      },
      {
        question: "Can two locations share stock?",
        answer: "Yes, when both locations are in the scope. We will not invent a warehouse you do not have.",
      },
      {
        question: "Will it calculate GST?",
        answer: "No. We track quantities and movements.",
      },
      { question: "Where is the studio?", answer: studioAnswer },
    ],
    related: [erpMangalore],
  }),
];
