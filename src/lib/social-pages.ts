import type { FaqItem, ServiceLink, TextBlock, WebDevelopmentLocation } from "@/lib/web-development-locations";

const socialHub: ServiceLink = { title: "Social Media Management", href: "/services/social-media-management" };
const studio: ServiceLink = { title: "Website Development Company in Mangalore", href: "/services/web-development/mangalore" };
const contact: ServiceLink = { title: "Contact our team", href: "/contact-us" };
const brandingHub: ServiceLink = { title: "Branding", href: "/services/branding" };

const office =
  "The only studio is at Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002. Mangalore and Mangaluru are the same city. There is no second social office.";

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
    { name: "Social Media Management", path: "/services/social-media-management" },
    { name, path },
  ];
}

function build(spec: Spec): WebDevelopmentLocation {
  const path = `/services/social-media-management/${spec.slug}`;
  const faqs: FaqItem[] = [
    { question: "Where is the studio for this Mangalore social work?", answer: office },
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
      services: [socialHub, brandingHub, studio, contact],
    },
  };
}

const specs: Spec[] = [
  {
    slug: "social-media-marketing-agency-mangalore",
    name: "Social Media Marketing Agency in Mangalore",
    line1: "Social Media Marketing Agency",
    keywords: ["social media marketing agency Mangalore", "social media marketing Mangalore", "SMM agency Mangalore"],
    clause: "A plan, creative, and the channels named in the quote. We do not buy followers or promise a cost per message.",
    intro:
      "A social media marketing agency in Mangalore should name the channel and the offer before it fills a calendar. Dark Media Tech plans that work from our Mangaluru studio. Posting, creative, and paid ads are different scopes. Ad spend, if you want it, stays on an account you own. We do not buy followers, and we do not promise how many messages a month will produce.",
    cards: [
      { title: "An offer, then the posts", desc: "Creative follows a message you can deliver. We do not invent offers to fill dates." },
      { title: "Channels you actually use", desc: "The quote names them. We do not promise every network." },
      { title: "Accounts you can open", desc: "Pages, ad accounts, and logins stay with your business." },
    ],
    why:
      "Mangalore social marketing is often a grid of templates and a boost. We write the offer first and review it at Kotichennaya Circle. A report of likes is not the product. The useful record is what was posted, what was spent if anything was spent, and what the page recorded.",
    points: ["Channels named in the quote", "No bought followers", "Ad accounts stay yours", "No cost-per-lead promise"],
    offerLead: "Social marketing",
    offerBody: "Marketing plans and creative from the Mangaluru studio.",
    offers: [
      { title: "A monthly plan", desc: "What will be posted, and what will not." },
      { title: "Creative", desc: "The sizes and the count in the quote." },
      { title: "Posting", desc: "On accounts you own, when management is included." },
      { title: "Ads, separately", desc: "Only if you want paid reach, on your ad account." },
    ],
    faqs: [
      { q: "Does a social media marketing agency in Mangalore include ads?", a: "Only when the quote includes them. Spend is yours. Our fee is separate." },
      { q: "Will you buy followers?", a: "No." },
      { q: "Who approves the posts?", a: "You do, before they go live, when the scope says approval is required." },
      { q: "Do you guarantee enquiries?", a: "No." },
    ],
  },
  {
    slug: "social-media-management-company-mangalore",
    name: "Social Media Management Company in Mangalore",
    line1: "Social Media Management Company",
    keywords: ["social media management company Mangalore", "social media management Mangalore", "SMM company Mangalore"],
    clause: "Ongoing posting and replies for the channels in the plan. Ads and a new brand identity are separate quotes.",
    intro:
      "A social media management company in Mangalore should be a studio you can visit, with a calendar you can read. Dark Media Tech manages the channels named in the quote from Kotichennaya Circle. Management means the plan, the posts, and the replies that are in scope. It does not silently include ad spend, a rebrand, or a video shoot. We do not buy comments, and we do not keep the only login.",
    cards: [
      { title: "A calendar with an end", desc: "The month lists the posts. Empty days are allowed when there is nothing true to say." },
      { title: "Replies with a limit", desc: "Who answers, and in what hours, is written down. We do not promise a 24-hour desk." },
      { title: "Logins that stay yours", desc: "You can remove access. The page should be in your business name." },
    ],
    why:
      "Management companies in Mangalore often disappear into a shared inbox. We keep the work at one studio in Mangaluru and show what was published. If the account needs ads, that is a campaign quote. If it needs a logo, that is branding.",
    points: ["Plan written before posting", "You own the accounts", "No bought engagement", "Reviewed in Mangaluru"],
    offerLead: "Management",
    offerBody: "Account care for Mangalore businesses.",
    offers: [
      { title: "A monthly calendar", desc: "The posts and the channels." },
      { title: "Publishing", desc: "On the accounts you own." },
      { title: "Replies in the agreed hours", desc: "Not an unlimited community team." },
      { title: "A note of the month", desc: "What went out, not a vanity score." },
    ],
    faqs: [
      { q: "Is a social media management company in Mangalore the same as an ads agency?", a: "No. Management is the organic plan and posting. Ads are a separate scope." },
      { q: "Will you reply to every comment overnight?", a: "Only inside the hours in the quote. We do not staff a night desk by default." },
      { q: "Can we stop and keep the account?", a: "Yes. It should already be yours." },
      { q: "Do you design a new brand as part of management?", a: "No. Identity work is quoted on its own." },
    ],
  },
  {
    slug: "facebook-instagram-ads-agency-mangalore",
    name: "Facebook and Instagram Ads Agency in Mangalore",
    line1: "Facebook and Instagram",
    line2: "Ads Agency in Mangalore",
    keywords: ["Facebook and Instagram ads agency Mangalore", "Facebook Instagram ads Mangalore", "social ads agency Mangalore"],
    clause: "Paid campaigns on both apps, on an ad account you own. Creative and media spend are separate.",
    intro:
      "A Facebook and Instagram ads agency in Mangalore should run both placements only when both are in the quote. Dark Media Tech sets up those campaigns from our Mangaluru studio, on a Meta ad account in your name. One offer, one next step, and a page or form that can receive it. We do not promise a cost per message, and we do not hide the spend in an account you cannot open.",
    cards: [
      { title: "Both apps, called out", desc: "Facebook, Instagram, or both. The quote says which placements are included." },
      { title: "Your ad account", desc: "You can see the spend after the engagement ends." },
      { title: "A page that matches the ad", desc: "We will not pay to send people to a page that does not explain the offer." },
    ],
    why:
      "Mangalore advertisers often boost a post that does not say what to do next. We write the offer, then build the Facebook and Instagram campaign around it. Reviews are at Kotichennaya Circle. Organic posting is not included unless the quote adds it.",
    points: ["Placements named", "You own the Meta ad account", "No cost-per-lead guarantee", "Managed from Mangaluru"],
    offerLead: "Facebook and Instagram ads",
    offerBody: "Paid social on the two apps, from the Mangaluru studio.",
    offers: [
      { title: "Campaign setup", desc: "Objective, locations, and the page the ad opens." },
      { title: "Creative for both placements", desc: "The sizes named in the quote." },
      { title: "A landing path", desc: "A page or a form that matches the ad." },
      { title: "A spend read", desc: "What went out and what the site recorded." },
    ],
    faqs: [
      { q: "Does a Facebook and Instagram ads agency in Mangalore manage organic posts too?", a: "Not unless the quote says so. This page is paid ads." },
      { q: "Who pays Meta?", a: "Your business, on your ad account. Our fee is separate." },
      { q: "Will you guarantee messages?", a: "No." },
      { q: "Can we keep the campaigns if we stop?", a: "Yes. The account should be yours from the start." },
    ],
  },
  {
    slug: "meta-ads-agency-mangalore",
    name: "Meta Ads Agency in Mangalore",
    line1: "Meta Ads Agency",
    keywords: ["Meta Ads agency Mangalore", "Meta ads Mangalore", "Facebook ads agency Mangalore"],
    clause: "Meta campaigns on an account you own. We do not promise a cost per lead, and we do not keep the only login.",
    intro:
      "A Meta Ads agency in Mangalore runs paid campaigns across Meta's placements for a specific offer. Dark Media Tech does that from Mangaluru. The ad account stays yours. We name the locations to match where you actually serve people, not the whole coast by default. Creative is quoted apart from the media spend. There is no promised cost per message.",
    cards: [
      { title: "One offer per campaign", desc: "A clear service and a next step. A boosted post with no destination is not the job." },
      { title: "Creative you can reuse", desc: "The pieces in the quote. Not an endless content mill." },
      { title: "Spend you can see", desc: "The account remains in your Business Manager." },
    ],
    why:
      "Meta ads in Mangalore get wasted when the landing page and the ad disagree. We check that before the budget runs. The studio is at Nandi Gudda. We will not call ourselves a Meta partner unless that status is real, and we do not claim it.",
    points: ["You own the ad account", "Offer written before creative", "No partner-badge claim", "No guaranteed cost per lead"],
    offerLead: "Meta ads",
    offerBody: "Paid Meta campaigns from the Mangaluru studio.",
    offers: [
      { title: "Account setup", desc: "Tracking and a structure you can read." },
      { title: "Campaigns", desc: "The placements named in the quote." },
      { title: "Creative", desc: "Still images or short cuts, as scoped." },
      { title: "A monthly read", desc: "Spend and the enquiries you can see." },
    ],
    faqs: [
      { q: "What does a Meta Ads agency in Mangalore manage?", a: "Paid ads on Meta. Organic posting is a different scope." },
      { q: "Are you a Meta Business Partner?", a: "We do not claim that badge." },
      { q: "Do you guarantee leads?", a: "No. We report spend and what the page recorded." },
      { q: "Who owns the pixel and the account?", a: "Your business." },
    ],
  },
  {
    slug: "social-media-ads-campaign-management-mangalore",
    name: "Social Media Ads Campaign Management in Mangalore",
    line1: "Social Media Ads",
    line2: "Campaign Management in Mangalore",
    keywords: ["social media ads campaign management Mangalore", "social ads management Mangalore", "paid social management Mangalore"],
    clause: "Management of campaigns already aimed at one offer. We do not rebuild your brand inside an ads fee.",
    intro:
      "Social media ads campaign management in Mangalore is the ongoing running of paid social: structure, creative swaps that are in scope, and a read of spend. Dark Media Tech does that from our Mangaluru studio on an account you own. The campaign needs an offer and a destination before we turn budget on. We do not promise a cost per lead, and we do not treat management as a licence to post organically all month.",
    cards: [
      { title: "A live campaign, not a mood", desc: "Objective, location, and the page are agreed before spend." },
      { title: "Changes inside a limit", desc: "The quote says how often creative or targeting is revised." },
      { title: "A stop when it is wasting money", desc: "We would rather pause than keep a campaign that the page cannot convert." },
    ],
    why:
      "Campaign management in Mangalore fails when nobody owns the weekly check. We write that check into the plan and review it from Kotichennaya Circle. New offers need a new brief. They are not free additions to last month's ad.",
    points: ["Account owned by you", "Revision limit in the quote", "No cost-per-lead promise", "Managed from Mangaluru"],
    offerLead: "Campaign management",
    offerBody: "Ongoing paid-social management for one Mangalore offer at a time.",
    offers: [
      { title: "Setup or a takeover", desc: "A new campaign, or one we can read in your account." },
      { title: "Weekly checks", desc: "The cadence named in the plan." },
      { title: "Creative swaps", desc: "The number of new ads in the quote." },
      { title: "A spend note", desc: "What went out and which enquiries were recorded." },
    ],
    faqs: [
      { q: "Does social media ads campaign management in Mangalore include making the ads?", a: "The number of new ads is in the quote. Unlimited creative is not the default." },
      { q: "Can you manage a campaign someone else started?", a: "Yes, after we can see the account and the destination page." },
      { q: "Will you keep spending if the page is weak?", a: "No. We pause and say the page needs work." },
      { q: "Who pays for the ads?", a: "You do, on your account." },
    ],
  },
  {
    slug: "instagram-ads-management-services-mangalore",
    name: "Instagram Ads Management Services in Mangalore",
    line1: "Instagram Ads",
    line2: "Management Services in Mangalore",
    keywords: ["Instagram ads management services Mangalore", "Instagram ads Mangalore", "Instagram advertising Mangalore"],
    clause: "Instagram placements on your Meta ad account. Facebook feed is not included unless the quote adds it.",
    intro:
      "Instagram ads management services in Mangalore are for paid placements on Instagram, not a general social retainer. Dark Media Tech manages those from our Mangaluru studio. Stories, reels, and feed are different crops, and the quote names which ones. The ad account stays yours. Captions and claims are approved by you. We do not buy followers to make the ad look busy, and we do not promise a cost per profile visit.",
    cards: [
      { title: "Instagram, unless we add more", desc: "Facebook is a separate line. This service does not assume both." },
      { title: "Crops that fit the placement", desc: "A landscape film is not an Instagram ad until it is cut for the placement." },
      { title: "A destination", desc: "Profile, WhatsApp, or a page. The ad should not dead-end." },
    ],
    why:
      "Instagram ads in Mangalore are often a boosted reel with no offer. We write the offer and the crop first. Management is the checks after launch, from Nandi Gudda. Organic grid design is not this scope.",
    points: ["Instagram placements named", "You own the ad account", "No bought followers", "No cost-per-visit promise"],
    offerLead: "Instagram ads",
    offerBody: "Paid Instagram management for Mangalore businesses.",
    offers: [
      { title: "Placement choice", desc: "Feed, stories, or reels, as written." },
      { title: "The ad", desc: "Creative sized for that placement." },
      { title: "Management", desc: "The check cadence in the quote." },
      { title: "A result note", desc: "Spend and the actions the ad recorded." },
    ],
    faqs: [
      { q: "Do Instagram ads management services in Mangalore include Facebook?", a: "No, unless the quote adds Facebook placements." },
      { q: "Will you grow the organic follower count?", a: "No. This is paid ads. We do not buy followers." },
      { q: "Who approves the caption?", a: "You do, before it runs." },
      { q: "Can the ad open WhatsApp?", a: "Yes, when that destination is in the setup and your number is the one that answers." },
    ],
  },
  {
    slug: "facebook-ads-management-company-mangalore",
    name: "Facebook Ads Management Company in Mangalore",
    line1: "Facebook Ads Management",
    line2: "Company in Mangalore",
    keywords: ["Facebook ads management company Mangalore", "Facebook ads Mangalore", "Facebook advertising Mangalore"],
    clause: "Facebook placements managed from Mangaluru, on an account you own. Instagram is extra if you need it.",
    intro:
      "A Facebook ads management company in Mangalore should be specific about Facebook. Dark Media Tech manages those placements from Kotichennaya Circle. The ad account is yours. We set locations to the area you can actually serve. A lead form or a landing page is chosen before spend. We do not promise a cost per lead, and we do not run Instagram as a free extra.",
    cards: [
      { title: "Facebook called out", desc: "Feed and the other Facebook placements in the quote. Not an unnamed 'social boost'." },
      { title: "A form or a page", desc: "The enquiry has to land somewhere your team checks." },
      { title: "A company you can visit", desc: "The work is reviewed at the Mangaluru studio." },
    ],
    why:
      "Facebook ads in Mangalore drift when the form asks for twelve fields and nobody calls back. We shorten the path and say who receives the lead. Management stays in Mangaluru. We will not rent you an ad account we control.",
    points: ["You own the Facebook ad account", "Lead path written down", "Instagram only if added", "No cost-per-lead guarantee"],
    offerLead: "Facebook ads",
    offerBody: "Facebook campaign management for Mangalore businesses.",
    offers: [
      { title: "Setup", desc: "Campaign, audience area, and the destination." },
      { title: "The ad", desc: "Copy and creative you approve." },
      { title: "Management", desc: "The checks named in the plan." },
      { title: "Lead handling notes", desc: "Where enquiries arrive, so they are not lost in a notification." },
    ],
    faqs: [
      { q: "Does a Facebook ads management company in Mangalore also post on the page?", a: "No. Organic posting is a management scope. This is paid Facebook." },
      { q: "Will you use our personal profile to advertise?", a: "No. Ads run from a business ad account you own." },
      { q: "Do you guarantee leads?", a: "No." },
      { q: "Can we see the spend ourselves?", a: "Yes. That is why the account is yours." },
    ],
  },
  {
    slug: "digital-advertising-agency-mangalore",
    name: "Digital Advertising Agency in Mangalore",
    line1: "Digital Advertising Agency",
    keywords: ["digital advertising agency Mangalore", "digital ads agency Mangalore", "online advertising Mangalore"],
    clause: "Paid social from this page. Google Ads is a separate quote. Accounts stay yours. No cost-per-lead promise.",
    intro:
      "A digital advertising agency in Mangalore should say which ads it will run. From this service, Dark Media Tech runs paid social from our Mangaluru studio. Search ads on Google are a different quote, so they are not hidden inside this fee. The social ad account stays in your name. We do not promise a cost per lead, and we do not buy placements we cannot show you.",
    cards: [
      { title: "The channel is named", desc: "Paid social here. Search advertising only if a separate quote says so." },
      { title: "Spend you can audit", desc: "Invoices from the platform stay on your account." },
      { title: "A page that can convert", desc: "Advertising onto a weak page is a waste. We say so before launch." },
    ],
    why:
      "Digital advertising in Mangalore gets sold as every network at once. We start with the placement that matches the offer. Reviews are at Kotichennaya Circle. A brand film or a new identity is not included in the media fee.",
    points: ["Paid social in this scope", "Google Ads quoted separately", "You own the accounts", "No lead guarantee"],
    offerLead: "Digital ads",
    offerBody: "Paid social advertising for Mangalore businesses.",
    offers: [
      { title: "A media plan", desc: "Where the budget goes, and where it does not." },
      { title: "Campaign setup", desc: "On accounts you own." },
      { title: "Creative", desc: "The ads named in the quote." },
      { title: "A spend report", desc: "What left the account and what the site recorded." },
    ],
    faqs: [
      { q: "Does a digital advertising agency in Mangalore include Google Ads?", a: "Not on this page. Google Ads is a separate scope." },
      { q: "Do you mark up the media spend?", a: "The platform bills your account. Our management fee is written separately. We do not hide a margin inside an account you cannot see." },
      { q: "Will you guarantee sales?", a: "No." },
      { q: "Can you advertise an offer we cannot fulfil?", a: "No. The claim has to be one you can deliver." },
    ],
  },
  {
    slug: "social-media-content-creation-services-mangalore",
    name: "Social Media Content Creation Services in Mangalore",
    line1: "Social Media Content",
    line2: "Creation Services in Mangalore",
    keywords: ["social media content creation services Mangalore", "social media content Mangalore", "Instagram content Mangalore"],
    clause: "Posts and short cuts designed around one offer. Posting and ads are separate. We do not buy reach.",
    intro:
      "Social media content creation services in Mangalore are the pieces themselves: stills, captions, and short cuts. Dark Media Tech makes them at our Mangaluru studio. The count and the sizes are in the quote. We do not post them unless management is included, and we do not run ads unless that is a separate campaign. You approve anything that describes the business. We do not invent offers to fill a month.",
    cards: [
      { title: "A set, not a mill", desc: "The number of pieces is finite and written down." },
      { title: "Words you approve", desc: "Captions that claim a price or a result wait for your yes." },
      { title: "Files you can post", desc: "If we are not the ones publishing, you still receive the files." },
    ],
    why:
      "Content creation in Mangalore is often a template with the logo swapped. We design from the offer and the brand you have. If there is no brand system, we follow the current mark and say when an identity quote would help. The work happens at Nandi Gudda.",
    points: ["Count and sizes in the quote", "No bought reach", "Posting optional", "Made in Mangaluru"],
    offerLead: "Content",
    offerBody: "Social creative for Mangalore brands.",
    offers: [
      { title: "Still posts", desc: "The sizes for the channels you named." },
      { title: "Short cuts", desc: "When video is in the quote, at the length agreed." },
      { title: "Captions", desc: "Drafts you approve." },
      { title: "A simple system", desc: "Type and colour so the next set can match." },
    ],
    faqs: [
      { q: "Do social media content creation services in Mangalore include posting?", a: "Only if the quote says so. Making the pieces and managing the account are different." },
      { q: "Will you photograph the product?", a: "A shoot is separate. We can design around photos you supply." },
      { q: "How many posts a month?", a: "The number in the quote. We do not sell an unlimited pack." },
      { q: "Do you buy likes on the content?", a: "No." },
    ],
  },
  {
    slug: "social-media-branding-advertising-agency-mangalore",
    name: "Social Media Branding and Advertising Agency in Mangalore",
    line1: "Social Media Branding",
    line2: "and Advertising Agency in Mangalore",
    keywords: ["social media branding and advertising agency Mangalore", "social media branding Mangalore", "social advertising Mangalore"],
    clause: "A consistent social look plus paid ads on your account. A full identity and a website are separate quotes.",
    intro:
      "A social media branding and advertising agency in Mangalore should keep the feed and the ads looking like one company, then spend only on an offer the page can explain. Dark Media Tech does that from our Mangaluru studio. Branding here means the social system: type, colour, and templates that follow a mark you already have. A new logo is a branding project. Advertising is paid social on an account you own. We do not promise a cost per lead, and we do not buy followers to decorate the brand.",
    cards: [
      { title: "One look on the feed and the ad", desc: "The paid creative should not contradict the organic posts." },
      { title: "A mark you already use", desc: "If the logo is not ready, identity work comes first or beside this, as its own quote." },
      { title: "Ads with a destination", desc: "Branding does not replace a page that can take the enquiry." },
    ],
    why:
      "Mangalore brands often run ads in a style the feed never uses. We align those two, from Kotichennaya Circle, and we keep the advertising claim as small as the truth. A full rebrand is not slipped into the ad fee.",
    points: ["Social system, not a surprise rebrand", "You own the ad account", "No bought followers", "No lead guarantee"],
    offerLead: "Branding and ads",
    offerBody: "A social look and paid social for Mangalore businesses.",
    offers: [
      { title: "A social system", desc: "Type, colour, and a few templates from the current identity." },
      { title: "Organic pieces", desc: "The count in the quote, if content is included." },
      { title: "Paid ads", desc: "On your account, for the offer you approved." },
      { title: "A shared review", desc: "Feed and ads checked together so they still match." },
    ],
    faqs: [
      { q: "Does a social media branding and advertising agency in Mangalore design a new logo?", a: "No. Logo and identity systems are a branding quote. This work applies the brand you have to social and ads." },
      { q: "Are organic posts and ads both included?", a: "Only the parts named in the quote. They can be bought together or apart." },
      { q: "Will you guarantee reach?", a: "No." },
      { q: "Who approves the advertising claim?", a: "You do, before it runs." },
    ],
  },
];

const built = specs.map(build);

export const socialSeoPages: WebDevelopmentLocation[] = built.map((page) => ({
  ...page,
  content: {
    ...page.content,
    localPagesHeading: "Social media in Mangalore",
    localPagesIntro:
      "The studio is in Mangaluru. These pages cover management, content, and paid social. They do not mean a second office. Ad accounts stay with the business, and followers are not for sale.",
    localPages: built
      .filter((item) => item.seo.path !== page.seo.path)
      .map((item) => ({ title: item.serviceName, href: item.seo.path })),
  },
}));

export function getSocialPage(slug: string) {
  return socialSeoPages.find((page) => page.slug === slug);
}
