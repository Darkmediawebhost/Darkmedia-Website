import type { FaqItem, ServiceLink, TextBlock, WebDevelopmentLocation } from "@/lib/web-development-locations";

const videoHub: ServiceLink = { title: "Video Production", href: "/services/video-production" };
const studio: ServiceLink = { title: "Website Development Company in Mangalore", href: "/services/web-development/mangalore" };
const contact: ServiceLink = { title: "Contact our team", href: "/contact-us" };
const brandingHub: ServiceLink = { title: "Branding", href: "/services/branding" };

const office =
  "The only studio is at Kotichennaya Circle, Nandi Gudda, Mangaluru, Karnataka 575002. Mangalore and Mangaluru are the same city. Shoots, when the quote includes them, are on location. We do not claim a sound stage.";

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
    { name: "Video Production", path: "/services/video-production" },
    { name, path },
  ];
}

function build(spec: Spec): WebDevelopmentLocation {
  const path = `/services/video-production/${spec.slug}`;
  const serviceName = spec.name;
  const faqs: FaqItem[] = [
    { question: "Where is the studio for this Mangalore video work?", answer: office },
    ...spec.faqs.map((faq) => ({ question: faq.q, answer: faq.a })),
  ];

  return {
    slug: spec.slug,
    name: "Mangalore",
    market: "mangalore",
    seo: {
      path,
      title: `${serviceName} | Dark Media`,
      description: `${serviceName}. ${spec.clause} ${office}`.replace(/\s+/g, " "),
      keywords: [serviceName.toLowerCase(), ...spec.keywords],
    },
    serviceName,
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
      breadcrumb: crumbs(serviceName, path),
      services: [videoHub, brandingHub, studio, contact],
    },
  };
}

const specs: Spec[] = [
  {
    slug: "video-production-company-mangalore",
    name: "Video Production Company in Mangalore",
    line1: "Video Production Company",
    keywords: ["video production company Mangalore", "video production Mangalore", "film production Mangalore"],
    clause: "Concept, shoot, and edit from our Mangaluru studio. The quote names the length, the locations, and what is not included.",
    intro:
      "A video production company in Mangalore should say whether the job is a shoot, an edit, or both. Dark Media Tech plans the film at Kotichennaya Circle and films on location when the quote includes a crew. We do not rent a sound stage and call it ours. The length and the place the film will be seen are agreed before the shoot day. A company film and a twenty-second reel are different productions.",
    cards: [
      { title: "A script before the camera", desc: "What the viewer should remember, and how long they have." },
      { title: "A shoot only when it is needed", desc: "Locations, people, and the day are in the quote. We do not invent coverage." },
      { title: "An edit you can publish", desc: "The cut matches the platform. Music we do not have rights to is not dropped in." },
    ],
    why:
      "Mangalore production jobs fail when the shoot day has no shot list. We write that list at the studio, then film. Reviews can be at Nandi Gudda. We will not call ourselves the top production company in the city.",
    points: ["Length and platform named first", "Shoot days written in the quote", "Licensed or client-supplied music", "No ranking claim"],
    offerLead: "Production",
    offerBody: "Films planned and finished in Mangaluru.",
    offers: [
      { title: "A short script", desc: "The points the film has to make." },
      { title: "A location shoot", desc: "When the story needs pictures you do not already have." },
      { title: "The edit", desc: "A first cut, then a fine cut after your notes." },
      { title: "Delivery", desc: "The formats named in the scope." },
    ],
    faqs: [
      { q: "Does a video production company in Mangalore include the shoot?", a: "When the quote says so. Editing existing footage is a different job." },
      { q: "Do you have a studio stage?", a: "No. The company address is the Mangaluru studio. Filming is on location." },
      { q: "Who owns the finished film?", a: "Your business, as the contract states, once the agreed fee is paid." },
      { q: "How many revisions are included?", a: "The quote says. A new script after the fine cut is new work." },
    ],
  },
  {
    slug: "video-editing-company-mangalore",
    name: "Video Editing Company in Mangalore",
    line1: "Video Editing Company",
    keywords: ["video editing company Mangalore", "video editors Mangalore", "video editing services Mangalore"],
    clause: "Cuts from footage you already have, or from a shoot we produced. We watch the files before we promise a story.",
    intro:
      "A video editing company in Mangalore is often handed a folder of clips and asked for a film. Dark Media Tech cuts that at our Mangaluru studio. We start with the length, where it will be seen, and the one thing the viewer should remember. If the sound is unusable, we say so before the quote becomes a finished film. A three-minute corporate cut and a twenty-second reel are different edits.",
    cards: [
      { title: "Existing footage first", desc: "Interviews, events, and product clips you recorded. Missing shots are not invented in the edit." },
      { title: "A cut for the platform", desc: "A website film, a reel, and a presentation export are named separately." },
      { title: "An edit after our shoot", desc: "If we filmed it, the edit is part of production. Edit-only is still a valid job." },
    ],
    why:
      "Editors in Mangalore should refuse a story the footage cannot support. We review the files at Kotichennaya Circle, or from a transfer, before we lock a delivery date. Music stays licensed or supplied by you.",
    points: ["Footage reviewed before a promise", "Revision count in the quote", "Captions when the platform is silent-first", "No unlicensed music"],
    offerLead: "Editing",
    offerBody: "Video editing from the Mangaluru studio.",
    offers: [
      { title: "Corporate cuts", desc: "Interviews and coverage at a length you can use." },
      { title: "Social cuts", desc: "Short versions, including captions for silent viewing." },
      { title: "A first cut", desc: "So you can correct the direction before the fine cut." },
      { title: "Delivery files", desc: "The formats in the scope, not one unusable master." },
    ],
    faqs: [
      { q: "Can a video editing company in Mangalore work with phone footage?", a: "Yes, if the picture and sound are usable. We watch the files before we quote a finished film." },
      { q: "Do you shoot as well?", a: "Yes, as a production quote. Editing can stand alone when the footage already exists." },
      { q: "Will you fix bad audio?", a: "Sometimes. Audio that was never recorded cannot be restored. We will say which case you have." },
      { q: "How are revisions counted?", a: "The quote lists them. A new script is new work." },
    ],
  },
  {
    slug: "ai-video-creation-services-mangalore",
    name: "AI Video Creation Services in Mangalore",
    line1: "AI Video Creation",
    line2: "Services in Mangalore",
    keywords: ["AI video creation services Mangalore", "AI video Mangalore", "AI video production Mangalore"],
    clause: "AI-assisted pictures and cuts, with a person approving anything a customer sees. Not a fake testimonial.",
    intro:
      "AI video creation services in Mangalore should name what the model is allowed to make. Dark Media Tech uses AI-assisted generation and editing from our Mangaluru studio when a sequence needs it: a motion test, a graphic, or a cut that would otherwise be rebuilt by hand. A person approves the picture and the words before anything is published. We do not generate a customer, a staff member, or a place and present them as real.",
    cards: [
      { title: "A person approves the output", desc: "Customer-facing video is not sent by a model on its own." },
      { title: "Real footage stays real", desc: "If the film is about your office or your product, we film or use pictures you supply." },
      { title: "AI where it saves a step", desc: "A graphic or a timing pass. Not a claim that a crew was never needed." },
    ],
    why:
      "Mangalore briefs now ask for AI video as if it replaces a shoot. We use it when the frame does not have to be a real person or a real room. If it does, the honest job is production. Reviews are at the studio. We do not sell undetectable fake reviews.",
    points: ["Human approval before publish", "No synthetic people presented as customers", "Real locations filmed when the story needs them", "Built in Mangaluru"],
    offerLead: "AI video",
    offerBody: "Assisted video with a person in the approval.",
    offers: [
      { title: "A motion test", desc: "A short generated or assisted sequence you can accept or reject." },
      { title: "Graphics inside a real edit", desc: "Titles or supporting pictures around footage you own." },
      { title: "An edit that uses AI tools", desc: "Cleanup or a version, still checked by an editor." },
      { title: "A written limit", desc: "What will not be faked, in the quote." },
    ],
    faqs: [
      { q: "Will AI video creation services in Mangalore invent a customer speaking?", a: "No. We do not publish a synthetic person as a real customer or employee." },
      { q: "Can AI replace the shoot?", a: "Only when the picture does not need to be your real place or product. Otherwise we film." },
      { q: "Who approves the video?", a: "You do, and an editor here checks it before delivery." },
      { q: "Do you train a private model?", a: "No. This is assisted production, not a custom model project." },
    ],
  },
  {
    slug: "motion-graphics-company-mangalore",
    name: "Motion Graphics Company in Mangalore",
    line1: "Motion Graphics Company",
    keywords: ["motion graphics company Mangalore", "motion graphics Mangalore", "motion design Mangalore"],
    clause: "Titles, logo motion, and explainers designed to a length. Not a feature-animation studio.",
    intro:
      "A motion graphics company in Mangalore should design pictures that move for a reason: a title, a logo sting, an explainer, or a lower third in a film. Dark Media Tech does that from Mangaluru. We follow your brand colours when you have them. We do not sell a feature-length animated film, and we do not claim a city ranking for motion design.",
    cards: [
      { title: "A length and a job", desc: "Five seconds on a logo is not a two-minute explainer. The quote names which one." },
      { title: "Type you can read", desc: "Motion that hides the words is a failed graphic." },
      { title: "Brand colours when they exist", desc: "If the identity is unset, a logo is a separate quote." },
    ],
    why:
      "Mangalore motion jobs arrive as a reference clip with no script. We write the on-screen lines first, then animate. You approve those lines. The work is reviewed from the Nandi Gudda studio.",
    points: ["On-screen words approved by you", "Duration in the quote", "No feature-film claim", "Designed in Mangaluru"],
    offerLead: "Motion",
    offerBody: "Motion graphics for Mangalore brands.",
    offers: [
      { title: "A logo sting", desc: "A short move for the mark you already use." },
      { title: "Titles and supers", desc: "Names and offers a viewer can read." },
      { title: "An explainer sequence", desc: "The steps of one offer, not a company history." },
      { title: "Graphics for a live film", desc: "Boards and titles inside a video we edit." },
    ],
    faqs: [
      { q: "Is a motion graphics company in Mangalore a 3D character studio?", a: "No. This is design in motion: type, shapes, and simple illustration. A character film is a different quote, and we will say if it is outside the job." },
      { q: "Do you animate a logo you did not design?", a: "Yes, from the files. If the files are missing, we need a usable version or a separate logo job." },
      { q: "Will you add a voiceover?", a: "When it is in the quote. The voice and the script are approved by you." },
      { q: "What do we receive?", a: "The formats named in the scope, such as a master and a social crop." },
    ],
  },
  {
    slug: "after-effects-animation-services-mangalore",
    name: "After Effects Animation Services in Mangalore",
    line1: "After Effects Animation",
    line2: "Services in Mangalore",
    keywords: ["After Effects animation services Mangalore", "After Effects Mangalore", "AE animation Mangalore"],
    clause: "Animation built in After Effects for titles, graphics, and short sequences. Not a cinema visual-effects house.",
    intro:
      "After Effects animation services in Mangalore are for graphics that have to move inside a real deadline: titles, icon sequences, map lines, and logo animation. Dark Media Tech builds those in After Effects at our Mangaluru studio. We are not a feature-film visual-effects company, and we do not promise a crowd simulation or a photoreal product film unless that work is separately possible and written in the quote. Most of this work is design animation.",
    cards: [
      { title: "After Effects for the job it fits", desc: "Type, shape, and tracked graphics. Not every visual problem belongs in this tool." },
      { title: "A board before the animation", desc: "You see the frames and the words, then we animate the approved version." },
      { title: "A file you can use", desc: "Delivery is a rendered video. Project files are included only if the quote says so." },
    ],
    why:
      "Mangalore requests often name After Effects because a reference was made in it. We confirm the reference is a graphic, then we build that graphic. If the job is really a filmed scene, we say so. The studio is at Kotichennaya Circle.",
    points: ["Style frames before animation", "Tool named because it fits", "No unscoped visual effects", "Finished in Mangaluru"],
    offerLead: "After Effects",
    offerBody: "Design animation in After Effects.",
    offers: [
      { title: "Title sequences", desc: "Openings and name supers." },
      { title: "Icon and infographic motion", desc: "A few steps, readable." },
      { title: "Logo animation", desc: "A short sting from your artwork." },
      { title: "Graphics on footage", desc: "Callouts and tracked labels when the shot supports them." },
    ],
    faqs: [
      { q: "Do After Effects animation services in Mangalore include the project file?", a: "The rendered film is the usual delivery. The project file is included only when the quote says so." },
      { q: "Can you match a reference frame for frame?", a: "We can follow a reference. An exact copy of someone else's film is not the job." },
      { q: "Is this 3D?", a: "Usually no. Three-dimensional product animation is a different scope, and we will say if we are not the right studio for it." },
      { q: "Who writes the on-screen text?", a: "We draft it from your brief. You approve it before animation." },
    ],
  },
  {
    slug: "corporate-video-production-company-mangalore",
    name: "Corporate Video Production Company in Mangalore",
    line1: "Corporate Video",
    line2: "Production Company in Mangalore",
    keywords: ["corporate video production company Mangalore", "corporate video Mangalore", "company film Mangalore"],
    clause: "A company film from interviews and real rooms. We do not invent clients or awards in the cut.",
    intro:
      "A corporate video production company in Mangalore should film the business you actually run. Dark Media Tech scripts a short film, shoots the people and rooms that are allowed on camera, and edits it at our Mangaluru studio. The film is for a website, a pitch, or an internal meeting. We do not add fake testimonials, and we do not claim the film will win a tender by itself.",
    cards: [
      { title: "People who can speak for the company", desc: "Interviews are scheduled. We do not put words in the mouth of someone who was not there." },
      { title: "Rooms you can show", desc: "A factory, an office, or a campus, if access is agreed. Stock footage of another city is not your office." },
      { title: "A length a buyer will watch", desc: "Often shorter than the first brief. We say so before the shoot." },
    ],
    why:
      "Corporate films in Mangalore become tours that never say what the company sells. We start with that sentence, then film the proof. Reviews are at Kotichennaya Circle. Music and claims stay ones you can stand behind.",
    points: ["Script approved before the shoot", "No invented testimonials", "Locations you can actually access", "Edited in Mangaluru"],
    offerLead: "Corporate films",
    offerBody: "Company videos for Mangalore organisations.",
    offers: [
      { title: "A short script", desc: "What the company does, in the order a buyer needs." },
      { title: "Interviews", desc: "The people named in the call sheet." },
      { title: "Coverage", desc: "The rooms and work that support the words." },
      { title: "A cut for the website", desc: "Plus a shorter version if the quote includes it." },
    ],
    faqs: [
      { q: "Will a corporate video production company in Mangalore write the script?", a: "Yes. You approve it before we film. We do not invent credentials." },
      { q: "Can you film at our office?", a: "Yes, when access, power, and the people are arranged. That day is in the quote." },
      { q: "Do you supply actors?", a: "Only if the quote names them. A corporate film is usually your own staff." },
      { q: "Is a drone included?", a: "Only when it is written in the quote and the location allows it." },
    ],
  },
  {
    slug: "brand-video-production-company-mangalore",
    name: "Brand Video Production Company in Mangalore",
    line1: "Brand Video",
    line2: "Production Company in Mangalore",
    keywords: ["brand video production company Mangalore", "brand film Mangalore", "brand video Mangalore"],
    clause: "A film that shows the brand you already have. Identity design is a separate quote if the mark is not ready.",
    intro:
      "A brand video production company in Mangalore should make a film people can connect to the name, not a generic slow-motion montage. Dark Media Tech writes and produces that film from Mangaluru, using the colours, type, and offer you already use. If the identity is not settled, we will say a branding quote should come first or sit beside the film. We do not design a new logo inside the video fee.",
    cards: [
      { title: "The offer, on screen", desc: "A brand film still has to say what you do." },
      { title: "The identity you have", desc: "Titles follow the mark. We do not invent a second logo for the end card." },
      { title: "A cut for where it will play", desc: "A website hero and a social cut are different lengths." },
    ],
    why:
      "Brand videos in Mangalore often look like stock and a slogan. We film or design around the real business and keep the end card honest. The studio is at Nandi Gudda. A branding project, if you need one, is quoted on its own.",
    points: ["Uses the existing identity", "Logo design is separate", "Lengths named for each placement", "Produced in Mangaluru"],
    offerLead: "Brand films",
    offerBody: "Video that matches the brand a Mangalore business already shows.",
    offers: [
      { title: "A brand script", desc: "The line the film has to land." },
      { title: "Picture", desc: "A shoot, motion, or both, as scoped." },
      { title: "Titles in the brand", desc: "Type and colour from the identity." },
      { title: "Masters", desc: "The website cut and any shorter cut in the quote." },
    ],
    faqs: [
      { q: "Does a brand video production company in Mangalore design the brand?", a: "No. We use the identity you have. A new identity is a branding project." },
      { q: "Is this the same as a corporate film?", a: "A corporate film explains the company. A brand film is shorter and closer to how you want to be recognised. We will say which brief you actually have." },
      { q: "Can it run as an ad?", a: "The film can be cut for an ad placement. Media spend and the ad account are separate." },
      { q: "Who approves the script?", a: "You do, before production." },
    ],
  },
  {
    slug: "promotional-video-production-mangalore",
    name: "Promotional Video Production in Mangalore",
    line1: "Promotional Video",
    line2: "Production in Mangalore",
    keywords: ["promotional video production Mangalore", "promo video Mangalore", "advertising video Mangalore"],
    clause: "One offer, one next step, and a length that fits the campaign. Not a company history.",
    intro:
      "Promotional video production in Mangalore is a film for a specific offer: an opening, a festival, a product, or a season. Dark Media Tech scripts that offer, produces the pictures the offer needs, and edits it at our Mangaluru studio. The video should tell someone what to do next. We do not pad it into a tour of the company, and we do not promise a number of leads.",
    cards: [
      { title: "One offer", desc: "If the film lists everything you sell, it is no longer a promotion." },
      { title: "A next step", desc: "Call, visit, or a page. The end of the film should match that step." },
      { title: "A campaign length", desc: "The cut is as long as the placement allows, not as long as the raw footage." },
    ],
    why:
      "Promotional films in Mangalore get reused until the offer is over and the dates are wrong. We put the dates and the offer in the quote so the film can end when the promotion ends. Production is planned from Kotichennaya Circle.",
    points: ["One offer in the script", "Dates checked before delivery", "No lead guarantee", "Produced in Mangaluru"],
    offerLead: "Promotional films",
    offerBody: "Campaign videos for a named Mangalore offer.",
    offers: [
      { title: "The offer line", desc: "What is being promoted, in one sentence." },
      { title: "Picture of that offer", desc: "A shoot or graphics, as the product requires." },
      { title: "A short cut", desc: "For social or a paid placement, if scoped." },
      { title: "A master", desc: "For the website or the screen you named." },
    ],
    faqs: [
      { q: "Is promotional video production in Mangalore an advertisement buy?", a: "No. We make the film. Placing it and paying for media are separate." },
      { q: "Can one film cover three offers?", a: "We will advise against it. Three offers are three films or a different kind of company video." },
      { q: "Do you write the offer?", a: "We draft from what you can actually deliver. You approve the claim." },
      { q: "What if the dates change?", a: "A new end card or a new cut is a small follow-up, quoted when you know the new date." },
    ],
  },
  {
    slug: "animation-studio-mangalore",
    name: "Animation Studio in Mangalore",
    line1: "Animation Studio",
    keywords: ["animation studio Mangalore", "animation company Mangalore", "explainer animation Mangalore"],
    clause: "Short animation and motion for explainers and brand pieces. Not a feature-film or game studio.",
    intro:
      "An animation studio in Mangalore, as Dark Media Tech runs it, makes short animated pieces: explainers, icon films, and title sequences. The work is done at our Mangaluru studio. We are not a feature-animation company and we do not build game cinematics. If the job needs a filmed person or a real product, we will say the honest path is a shoot plus graphics, not a full cartoon of your factory.",
    cards: [
      { title: "Short films, scoped", desc: "Thirty seconds and two minutes are different budgets. The duration is in the quote." },
      { title: "A style you approve first", desc: "Frames before a full animation, so the look is not a surprise." },
      { title: "An honest limit", desc: "No feature, no game, no promise of a character universe." },
    ],
    why:
      "Mangalore searches for an animation studio often expect a large 3D pipeline. We do design-led animation a business can use this quarter. You approve the script and the frames at the studio process, from Nandi Gudda.",
    points: ["Style frames before production", "Duration agreed", "No feature-film pipeline", "Made in Mangaluru"],
    offerLead: "Animation",
    offerBody: "Short animated films for Mangalore businesses.",
    offers: [
      { title: "An explainer", desc: "One process or offer, in pictures and a few lines." },
      { title: "Icon animation", desc: "Simple characters or symbols, not a cast." },
      { title: "Titles", desc: "An opening or an end card that matches the brand." },
      { title: "A voice, if needed", desc: "Script and voice approved by you." },
    ],
    faqs: [
      { q: "Is an animation studio in Mangalore able to make a feature film?", a: "No. We make short business animation and motion graphics." },
      { q: "Do you animate in 3D?", a: "The usual work is 2D design animation. A 3D product film is outside the normal scope, and we will say so." },
      { q: "Can you animate our mascot?", a: "If the artwork exists and the move is short, yes. Designing the mascot is a separate branding job." },
      { q: "How do approvals work?", a: "Script, then frames, then animation. Skipping the frames is how the style drifts." },
    ],
  },
  {
    slug: "social-media-video-production-company-mangalore",
    name: "Social Media Video Production Company in Mangalore",
    line1: "Social Media Video",
    line2: "Production Company in Mangalore",
    keywords: ["social media video production company Mangalore", "reel production Mangalore", "Instagram video Mangalore"],
    clause: "Short films for the channels in the quote, cut for silent autoplay. Posting and ad spend are separate. We do not buy views.",
    intro:
      "A social media video production company in Mangalore should make pieces people can watch without sound: reels, a product clip, a speaking-to-camera cut with captions. Dark Media Tech produces those from our Mangaluru studio. The quote names the count, the lengths, and the channels. We do not post them unless management is included, we do not buy views, and we do not promise a follower count.",
    cards: [
      { title: "Captions on by default", desc: "Most of these plays start on mute. The words have to be on screen." },
      { title: "A count, not a content mill", desc: "The number of films is in the quote. We do not invent offers to fill a calendar." },
      { title: "Your accounts stay yours", desc: "If we post, it is on accounts you own. Ad spend is a different scope." },
    ],
    why:
      "Social video in Mangalore is often a boosted still with a logo. We would rather film or cut one clear offer. You approve the claim. The edit is done in Mangaluru, at Kotichennaya Circle.",
    points: ["Silent-first edits", "No bought views or followers", "Posting only if scoped", "Produced in Mangaluru"],
    offerLead: "Social video",
    offerBody: "Short-form production for Mangalore brands.",
    offers: [
      { title: "A reel", desc: "One offer, vertical, with captions." },
      { title: "A product clip", desc: "The item, the price or the promise, and a next step." },
      { title: "A speaking cut", desc: "A person you approve, with a short script." },
      { title: "Crops", desc: "The sizes for the channels named in the quote." },
    ],
    faqs: [
      { q: "Does a social media video production company in Mangalore post the videos?", a: "Only if the quote includes posting. Making the film and running the account are different jobs." },
      { q: "Will you buy views?", a: "No." },
      { q: "Can you film on a phone?", a: "Yes, when that is the right picture for the channel. The camera is chosen for the job, not for show." },
      { q: "Are ads included?", a: "No. A cut can be made for an ad. The spend stays on an account you own, in a separate scope." },
    ],
  },
];

const built = specs.map(build);

export const videoSeoPages: WebDevelopmentLocation[] = built.map((page) => ({
  ...page,
  content: {
    ...page.content,
    localPagesHeading: "Video in Mangalore",
    localPagesIntro:
      "The studio is in Mangaluru. These pages cover production, editing, motion, and short social films. They do not mean a second office or a sound stage.",
    localPages: built
      .filter((item) => item.seo.path !== page.seo.path)
      .map((item) => ({ title: item.serviceName, href: item.seo.path })),
  },
}));

export function getVideoPage(slug: string) {
  return videoSeoPages.find((page) => page.slug === slug);
}
