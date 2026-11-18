export interface CareerOpening {
  id: string;
  title: string;
  team: string;
  type: string;
  location: string;
  experience: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
}

export const careerLocation = "J. P. Nagar, Bengaluru";

export const careerOpenings: CareerOpening[] = [
  {
    id: "seo-expert",
    title: "SEO Expert",
    team: "AI SEO",
    type: "Full-time",
    location: careerLocation,
    experience: "2+ years",
    summary: "Plan and run SEO, AEO and GEO campaigns that grow organic traffic, rankings and leads for our clients.",
    responsibilities: ["Run technical, on-page and off-page SEO audits", "Build keyword and content strategies", "Track rankings, traffic and conversions"],
    skills: ["Google Search Console", "GA4", "Semrush / Ahrefs", "Technical SEO"],
  },
  {
    id: "ecommerce-marketer",
    title: "E-Commerce Marketer",
    team: "E-Commerce Growth",
    type: "Full-time",
    location: careerLocation,
    experience: "2+ years",
    summary: "Grow online store sales across websites and marketplaces with campaigns, listings and conversion improvements.",
    responsibilities: ["Manage store and marketplace campaigns", "Improve product listings and conversion rates", "Report on revenue, ROAS and orders"],
    skills: ["Shopify / WooCommerce", "Amazon & Flipkart", "Meta & Google Shopping", "CRO"],
  },
  {
    id: "social-media-executive",
    title: "Social Media Executive",
    team: "Social Media",
    type: "Full-time",
    location: careerLocation,
    experience: "1+ years",
    summary: "Create, schedule and grow brand pages with content that builds engagement, reach and enquiries.",
    responsibilities: ["Plan monthly content calendars", "Write captions and coordinate creatives", "Grow engagement and track page insights"],
    skills: ["Instagram & LinkedIn", "Content planning", "Reels & trends", "Meta Business Suite"],
  },
  {
    id: "digital-marketing-executive",
    title: "Digital Marketing Executive",
    team: "Performance Marketing",
    type: "Full-time",
    location: careerLocation,
    experience: "1+ years",
    summary: "Run lead generation and paid campaigns across Google and Meta that turn ad spend into qualified leads.",
    responsibilities: ["Set up and optimise Google & Meta Ads", "Build landing pages and lead funnels", "Measure cost per lead and campaign ROI"],
    skills: ["Google Ads", "Meta Ads", "GA4 & GTM", "Lead generation"],
  },
];
