import type { LucideIcon } from "lucide-react";
import {
  BarChart3, Bot, BrainCircuit, Calendar, Camera, Clapperboard, Code2, DollarSign, Eye, FileText, Filter,
  Globe, Heart, Layers, LayoutTemplate, Linkedin, Mail, Megaphone, MessageCircle, MessageSquare, MousePointerClick,
  Newspaper, Palette, PenLine, PenTool, Rocket, Search, Send, Shield, ShoppingCart, Smartphone, Sparkles, Target,
  TrendingUp, Users, Video, Wrench, Zap,
} from "lucide-react";

type Item = { icon: LucideIcon; title: string; description: string };
export type ServiceV2Config = {
  path: string;
  seo: { title: string; description: string; canonical: string };
  ctaLabel: string;
  hero: { tags: string; title: string; highlight: string; sub: string };
  about: { eyebrow: string; title: string; highlight: string; text: string; bullets: string[]; imageAlt: string };
  ecosystem: {
    eyebrow: string; title: string; highlight: string; text: string;
    pillars: { icon: LucideIcon; title: string; desc: string; items: { code: string; name: string; desc: string }[] }[];
    capabilities: string[];
  };
  servicesTitle: string; servicesHighlight: string; servicesFooter: string;
  services: { icon: LucideIcon; title: string; text: string }[];
  why: { highlight: string; text: string; statValue: string; statLabel: string; points: { title: string; description: string }[] };
  deliverables: { title: string; highlight: string; text: string; items: Item[] };
  framework: { eyebrow: string; title: string; highlight: string; text: string; steps: Item[] };
  team: { eyebrow: string; highlight: string; text: string };
};

const whyBase = (focus: string) => [
  { title: "250+ Projects", description: `Experience across diverse businesses, industries and ${focus} challenges.` },
  { title: "AI-First Approach", description: "Combining AI tools and automation with expert human strategy and execution." },
  { title: "30 Highly Specialised Experts", description: `A dedicated in-house team covering strategy, ${focus}, creative and analytics.` },
  { title: "Transparent Reporting", description: "Clear dashboards and regular reviews so you always know what is working." },
  { title: "Business Growth Focused", description: "Prioritising qualified enquiries, sales and meaningful business outcomes." },
];

export const serviceV2Pages: ServiceV2Config[] = [
  {
    path: "/lead-generation-agency-bangalore2",
    seo: { title: "Lead Generation Agency in Bangalore | B2B Leads That Convert", description: "Trusted lead generation company in Bangalore helping B2B businesses attract & convert high-value leads. Real pipeline growth & measurable results. Let's Talk!", canonical: "/lead-generation-agency-bangalore" },
    ctaLabel: "Get My Free Lead Gen Audit",
    hero: { tags: "Lead Generation · Paid Ads · Funnels · CRM", title: "Lead Generation Agency in Bangalore. Turn Clicks into Qualified", highlight: "Leads", sub: "We help B2B and B2C businesses attract, capture and convert high-value leads with performance campaigns, landing pages and automation." },
    about: { eyebrow: "Your lead generation partner", title: "The Best Lead Generation Agency", highlight: "for Predictable Pipeline Growth.", text: "At The Super 30, we combine paid media, conversion-focused landing pages and CRM automation to deliver a steady flow of qualified leads — not just form fills.", bullets: ["Campaigns Built Around Your Ideal Customer", "High-Converting Landing Pages & Funnels", "Lead Quality Tracking with Transparent Reporting"], imageAlt: "Sales team reviewing qualified leads" },
    ecosystem: {
      eyebrow: "The Lead Engine", title: "One Funnel. Every Channel.", highlight: "Every Qualified Lead.", text: "We connect acquisition, conversion and nurturing into a single system that turns attention into revenue.",
      pillars: [
        { icon: Target, title: "Acquisition", desc: "Reach buyers who are actively looking.", items: [
          { code: "PPC", name: "Google Search Ads", desc: "Capture high-intent searches for your services." },
          { code: "META", name: "Meta Lead Ads", desc: "Instant forms across Facebook and Instagram." },
          { code: "LI", name: "LinkedIn Ads", desc: "Target decision-makers by role and company." },
          { code: "SEO", name: "Organic Lead Flow", desc: "Compounding inbound enquiries from search." },
        ] },
        { icon: Filter, title: "Conversion", desc: "Turn visitors into enquiries.", items: [
          { code: "LP", name: "Landing Pages", desc: "Fast, focused pages built to convert." },
          { code: "CRO", name: "Conversion Optimization", desc: "A/B tests on copy, forms and offers." },
          { code: "FRM", name: "Smart Forms", desc: "Qualifying questions that filter low-intent leads." },
          { code: "CTA", name: "Offer Strategy", desc: "Audits, demos and consultations that pull." },
        ] },
        { icon: Bot, title: "Nurture & Close", desc: "Move leads to sales faster.", items: [
          { code: "CRM", name: "CRM Integration", desc: "Every lead routed to your team instantly." },
          { code: "WA", name: "WhatsApp Follow-up", desc: "Automated replies within minutes." },
          { code: "EML", name: "Email Nurture", desc: "Sequences that warm up undecided leads." },
          { code: "RMK", name: "Remarketing", desc: "Bring back visitors who didn't convert." },
        ] },
      ],
      capabilities: ["Audience Research", "Offer Design", "Ad Creatives", "Landing Pages", "Conversion Tracking", "CRM Setup", "Lead Scoring", "Performance Analytics"],
    },
    servicesTitle: "Everything you need for a", servicesHighlight: "predictable lead pipeline.", servicesFooter: "Let's fill your sales pipeline together.",
    services: [
      { icon: Search, title: "Search Ads Lead Generation", text: "Google Search campaigns built around buyer-intent keywords so you appear exactly when prospects look for your solution." },
      { icon: Megaphone, title: "Social Lead Campaigns", text: "Meta and Instagram lead ads with tested creatives and instant forms that generate enquiries at scale." },
      { icon: Linkedin, title: "LinkedIn B2B Campaigns", text: "Account and role-based targeting that reaches founders, managers and decision-makers in your target industries." },
      { icon: LayoutTemplate, title: "Landing Page Development", text: "Conversion-focused landing pages with clear offers, trust signals and short forms that turn clicks into leads." },
      { icon: Filter, title: "Funnel Strategy", text: "End-to-end funnels mapped from first touch to sale, with the right offer at every stage of the journey." },
      { icon: Users, title: "Lead Qualification", text: "Qualifying questions and lead scoring so your sales team spends time only on serious prospects." },
      { icon: Bot, title: "CRM & Automation", text: "Instant lead routing, WhatsApp and email follow-ups and pipeline tracking connected to your CRM." },
      { icon: BarChart3, title: "Lead Analytics & Reporting", text: "Cost per lead, lead quality and revenue reporting so you know exactly which campaigns drive business." },
    ],
    why: { highlight: "Lead Generation", text: "We go beyond running ads. Our specialists combine targeting, offers, landing pages and automation to build a lead engine that keeps your sales team busy with the right conversations.", statValue: "300%+", statLabel: "Average Lead Growth", points: whyBase("lead generation") },
    deliverables: { title: "Lead Generation Results That", highlight: "Grow Your Pipeline.", text: "The outcomes your business sees when lead generation is planned, built and optimised end to end.", items: [
      { icon: Users, title: "More Qualified Leads", description: "A consistent flow of enquiries that match your ideal customer profile." },
      { icon: DollarSign, title: "Lower Cost Per Lead", description: "Continuous optimisation that reduces wasted spend month after month." },
      { icon: Zap, title: "Faster Response Times", description: "Automated follow-ups that reach leads within minutes of enquiry." },
      { icon: Filter, title: "Better Lead Quality", description: "Qualifying forms and scoring that filter out low-intent contacts." },
      { icon: TrendingUp, title: "Predictable Pipeline", description: "Forecastable lead volume so you can plan sales and growth confidently." },
      { icon: BarChart3, title: "Revenue-Level Reporting", description: "Track every lead from click to closed deal with clear dashboards." },
    ] },
    framework: { eyebrow: "Our Lead Generation Framework", title: "From First Click", highlight: "to Closed Deal.", text: "A connected approach to finding buyers, converting them and scaling the channels that work.", steps: [
      { icon: Search, title: "Audit & Research", description: "Analyse your audience, competitors and current funnel." },
      { icon: Target, title: "Offer & Targeting", description: "Define offers and audiences that attract serious buyers." },
      { icon: Rocket, title: "Launch Campaigns", description: "Go live with ads, landing pages and tracking." },
      { icon: BarChart3, title: "Optimize & Qualify", description: "Improve cost per lead and lead quality weekly." },
      { icon: TrendingUp, title: "Scale Revenue", description: "Increase budgets on winners and expand channels." },
    ] },
    team: { eyebrow: "Our lead generation experts", highlight: "Lead Gen Experts", text: "Performance marketers, funnel strategists, designers and analysts — one focused team working to fill your pipeline." },
  },
  {
    path: "/social-media-marketing-agency-bangalore2",
    seo: { title: "Social Media Marketing Agency in Bangalore | SMM Services", description: "Social media marketing agency in Bangalore offering content, reels, paid social and community management that grow reach, engagement and leads.", canonical: "/social-media-marketing-agency-bangalore" },
    ctaLabel: "Get My Free Social Audit",
    hero: { tags: "Instagram · LinkedIn · YouTube · Meta Ads", title: "Social Media Marketing Agency in Bangalore. Scale Your Digital", highlight: "Presence", sub: "Strategy, scroll-stopping creatives, reels and paid social campaigns that turn followers into leads and customers." },
    about: { eyebrow: "Your social media partner", title: "The Best Social Media Agency", highlight: "for Brand & Business Growth.", text: "At The Super 30, we plan content, produce creatives and run paid social campaigns that build a loyal community and drive measurable business results.", bullets: ["Content Calendars Built Around Your Audience", "In-House Creative & Reel Production", "Paid Social with Clear ROI Reporting"], imageAlt: "Social media content planning session" },
    ecosystem: {
      eyebrow: "The Social Ecosystem", title: "One Brand. Every Platform.", highlight: "Every Audience Moment.", text: "We build your presence across the platforms your customers use every day — organically and with paid reach.",
      pillars: [
        { icon: Calendar, title: "Organic Growth", desc: "Consistent content that builds community.", items: [
          { code: "CAL", name: "Content Calendar", desc: "Monthly themes and publishing schedules." },
          { code: "REEL", name: "Reels & Shorts", desc: "Short-form video that earns reach." },
          { code: "CAR", name: "Carousels & Statics", desc: "Designs that educate and engage." },
          { code: "CM", name: "Community Management", desc: "Replies, DMs and daily engagement." },
        ] },
        { icon: Megaphone, title: "Paid Social", desc: "Reach and conversions at scale.", items: [
          { code: "META", name: "Meta Ads", desc: "Facebook and Instagram campaigns." },
          { code: "LI", name: "LinkedIn Ads", desc: "B2B targeting by role and company." },
          { code: "YT", name: "YouTube Ads", desc: "Video campaigns that build recall." },
          { code: "A/B", name: "Creative Testing", desc: "Find the ads that perform best." },
        ] },
        { icon: Heart, title: "Brand & Influence", desc: "Trust that turns into sales.", items: [
          { code: "INF", name: "Influencer Campaigns", desc: "Verified creator partnerships." },
          { code: "UGC", name: "UGC Content", desc: "Authentic content from real users." },
          { code: "ORM", name: "Reputation Management", desc: "Reviews and brand monitoring." },
          { code: "PRO", name: "Profile Optimization", desc: "Bios and links that convert visits." },
        ] },
      ],
      capabilities: ["Strategy", "Copywriting", "Graphic Design", "Video Editing", "Scheduling", "Hashtag Research", "Social Listening", "Analytics"],
    },
    servicesTitle: "Everything you need to", servicesHighlight: "grow on social media.", servicesFooter: "Let's grow your social presence together.",
    services: [
      { icon: Calendar, title: "Content Calendar Planning & Scheduling", text: "Monthly content themes, campaign ideas, and publishing schedules designed around your audience and business objectives." },
      { icon: Sparkles, title: "Creative & Reel Production", text: "Static creatives, carousel designs, reels, and scroll stopping content created to capture audience attention instantly." },
      { icon: Target, title: "Paid Social Ads", text: "Meta, LinkedIn, and YouTube ad campaigns with audience targeting, A/B testing, and conversion tracking." },
      { icon: MessageCircle, title: "Community Management", text: "Daily responses, direct messages, and audience engagement designed to build a loyal and active brand community." },
      { icon: Users, title: "Influencer & UGC Campaigns", text: "Verified creator partnerships and UGC collaborations that deliver authentic and trusted brand visibility." },
      { icon: Rocket, title: "Launch & Growth Campaigns", text: "Product launches, promotional campaigns, and seasonal activations created to achieve greater reach and higher conversions." },
      { icon: BarChart3, title: "Analytics & Performance Reporting", text: "Monthly reporting dashboards measuring reach, engagement, leads, and revenue with meaningful business insights." },
      { icon: Zap, title: "Platform Performance Optimization", text: "Profile, bio, and link optimization designed to convert profile visits into followers, inquiries, and leads." },
    ],
    why: { highlight: "Social Media Growth", text: "We don't just post content. We build a strategy around your audience, produce creatives in-house and connect every campaign to leads and revenue.", statValue: "250+", statLabel: "Projects Delivered", points: whyBase("social media") },
    deliverables: { title: "Social Media Results That", highlight: "Move Your Business Forward.", text: "The outcomes your brand sees when social media is planned, created and managed end to end.", items: [
      { icon: TrendingUp, title: "Higher Audience Engagement", description: "Strategic content and active community management improve engagement within the first 90 days." },
      { icon: Users, title: "Qualified Audience Growth", description: "Attract relevant followers aligned with your ideal customer profile." },
      { icon: DollarSign, title: "Improved Ad ROI", description: "Well structured paid campaigns with creative testing deliver stronger returns." },
      { icon: Globe, title: "Consistent Brand Identity", description: "Unified visuals and messaging across every platform build recognition." },
      { icon: Target, title: "Conversion Focused Content", description: "Content aligned with every stage of the customer journey." },
      { icon: Shield, title: "Brand Reputation Management", description: "Proactive review management and monitoring that build trust." },
    ] },
    framework: { eyebrow: "Our Social Growth Framework", title: "From Scroll", highlight: "to Sale.", text: "A connected approach to building audience, engagement and revenue on social platforms.", steps: [
      { icon: Eye, title: "Audit & Discovery", description: "Review your social presence, competitors and brand voice." },
      { icon: Target, title: "Strategy & Calendar", description: "Plan pillars, formats and a monthly content calendar." },
      { icon: Sparkles, title: "Create & Publish", description: "Produce creatives and reels and publish consistently." },
      { icon: Megaphone, title: "Amplify with Ads", description: "Boost winning content to the right audiences." },
      { icon: TrendingUp, title: "Analyse & Scale", description: "Double down on what drives reach and leads." },
    ] },
    team: { eyebrow: "Our social media experts", highlight: "Social Media Experts", text: "Strategists, designers, video editors and paid social specialists — one focused team growing your brand on every platform." },
  },
  {
    path: "/google-ads-agency-bangalore2",
    seo: { title: "Google Ads Agency in Bangalore | PPC Service | Upto 10X ROAS", description: "Google Ads agency in Bangalore running Search, Shopping, YouTube and Performance Max campaigns focused on ROAS, lower CPC and qualified leads.", canonical: "/google-ads-agency-bangalore" },
    ctaLabel: "Get My Free Google Ads Audit",
    hero: { tags: "Search · Shopping · YouTube · Performance Max", title: "Google Ads Agency in Bangalore. Turn Ad Spend into Real", highlight: "ROAS", sub: "Data-driven Google Ads campaigns that reach high-intent buyers, cut wasted spend and deliver measurable leads and sales." },
    about: { eyebrow: "Your Google Ads partner", title: "The Best Google Ads Agency", highlight: "for Profitable Growth.", text: "At The Super 30, we build, manage and optimise Google Ads campaigns around your business goals — so every rupee spent works harder.", bullets: ["Keyword & Audience Strategy Built for Intent", "AI-Driven Bidding and Weekly Optimisation", "Complete Spend Transparency with Live Reporting"], imageAlt: "Marketer analysing Google Ads performance" },
    ecosystem: {
      eyebrow: "The Google Ads Ecosystem", title: "One Budget. Every Google Channel.", highlight: "Every Buying Moment.", text: "We run campaigns across Search, Display, Shopping and YouTube so your brand shows up wherever buyers are deciding.",
      pillars: [
        { icon: Search, title: "Search & Intent", desc: "Be first when buyers search.", items: [
          { code: "SRCH", name: "Search Ads", desc: "Top-of-Google placement for your services." },
          { code: "KW", name: "Keyword Strategy", desc: "High-intent terms, negatives and match types." },
          { code: "LOC", name: "Local Campaigns", desc: "Drive calls and visits nearby." },
          { code: "DSA", name: "Dynamic Search Ads", desc: "Capture long-tail searches automatically." },
        ] },
        { icon: Eye, title: "Visual & Video", desc: "Build awareness and recall.", items: [
          { code: "DISP", name: "Display Ads", desc: "Banners across leading websites." },
          { code: "YT", name: "YouTube Ads", desc: "Video campaigns that engage." },
          { code: "SHOP", name: "Shopping Ads", desc: "Product listings with price and images." },
          { code: "RMK", name: "Remarketing", desc: "Reconnect with past visitors." },
        ] },
        { icon: Bot, title: "AI & Optimization", desc: "Smarter spend, better returns.", items: [
          { code: "PMAX", name: "Performance Max", desc: "AI campaigns across all Google channels." },
          { code: "BID", name: "Automated Bidding", desc: "Target CPA and ROAS strategies." },
          { code: "QS", name: "Quality Score", desc: "Lower CPC through relevance." },
          { code: "LP", name: "Landing Pages", desc: "Pages that convert clicks into customers." },
        ] },
      ],
      capabilities: ["Account Audit", "Conversion Tracking", "GA4 Setup", "Ad Copywriting", "Negative Keywords", "Placement Exclusions", "A/B Testing", "ROAS Reporting"],
    },
    servicesTitle: "Everything you need for", servicesHighlight: "profitable Google Ads.", servicesFooter: "Let's make every click count.",
    services: [
      { icon: Search, title: "Search Ads", text: "Appear at the top of Google when customers actively search for your services, with keywords built around buying intent." },
      { icon: Eye, title: "Display Ads", text: "Visual banner ad campaigns across leading websites to strengthen brand awareness and keep you top of mind." },
      { icon: MousePointerClick, title: "Shopping Campaigns", text: "Product listing ad campaigns with images, pricing and reviews for e-commerce stores that want more sales." },
      { icon: Target, title: "Remarketing Campaigns", text: "Reconnect with visitors who left your website without completing a conversion and bring them back to buy." },
      { icon: Megaphone, title: "YouTube Ads", text: "Video ad campaigns on YouTube designed to engage audiences through compelling visual content." },
      { icon: TrendingUp, title: "Performance Max", text: "AI powered campaigns across Google channels focused on maximizing conversions efficiently." },
      { icon: Bot, title: "Automated Bidding", text: "Machine learning bidding strategies designed to maximize conversions at your target CPA or ROAS." },
      { icon: Layers, title: "Landing Page Optimization", text: "Conversion focused landing pages that transform ad clicks into qualified customers." },
    ],
    why: { highlight: "Google Ads Growth", text: "We don't set and forget. Our specialists audit, build and optimise every campaign weekly — protecting your budget and scaling what drives revenue.", statValue: "10X", statLabel: "Peak ROAS Achieved", points: whyBase("paid search") },
    deliverables: { title: "Google Ads Results That", highlight: "Pay for Themselves.", text: "The outcomes your business sees when Google Ads are managed with strategy, discipline and transparency.", items: [
      { icon: TrendingUp, title: "Higher ROAS", description: "Campaigns structured to maximise return on every rupee spent." },
      { icon: DollarSign, title: "Lower CPC", description: "Strategic bidding and quality score optimisation reduce cost per click." },
      { icon: Target, title: "Precision Targeting", description: "Reach high intent audiences ready to buy, not just browse." },
      { icon: BarChart3, title: "Complete Transparency", description: "Monitor every expense through live performance dashboards." },
      { icon: Zap, title: "Faster Lead Generation", description: "Begin receiving qualified enquiries within the first week." },
      { icon: Shield, title: "Controlled Ad Spend", description: "Negative keywords and exclusions safeguard your budget." },
    ] },
    framework: { eyebrow: "Our Google Ads Framework", title: "From Ad Spend", highlight: "to Revenue.", text: "A connected approach to launching, optimising and scaling profitable Google Ads campaigns.", steps: [
      { icon: Search, title: "Deep Audit", description: "Analyse current campaigns, competitors and market." },
      { icon: Target, title: "Strategy & Structure", description: "Build keyword, audience and campaign structure." },
      { icon: Rocket, title: "Launch & Track", description: "Go live with ads, landing pages and conversion tracking." },
      { icon: BarChart3, title: "Optimize Weekly", description: "Refine bids, keywords, ads and placements." },
      { icon: TrendingUp, title: "Scale ROAS", description: "Increase budget on winners and expand reach." },
    ] },
    team: { eyebrow: "Our Google Ads experts", highlight: "Google Ads Experts", text: "PPC strategists, copywriters, designers and analysts — one focused team making your ad spend profitable." },
  },
  {
    path: "/design-agency-bangalore2",
    seo: { title: "Design Agency in Bangalore | UI/UX, Branding, Video & Photography", description: "Creative design company in Bangalore for UI/UX, brand identity, video production and photography. 100+ brands, 98% satisfaction. Let's Connect!", canonical: "/graphic-design-agency-bangalore" },
    ctaLabel: "Start My Design Project",
    hero: { tags: "UI/UX · Branding · Video · Photography", title: "Design Agency in Bangalore. Give Your Brand a Bold", highlight: "Identity", sub: "UI/UX, brand identity, video production and photography under one roof — creative that looks premium and performs." },
    about: { eyebrow: "Your creative partner", title: "The Best Design Agency", highlight: "for Brands That Want to Stand Out.", text: "At The Super 30, designers, video producers and photographers work together to create a consistent, premium brand experience across every touchpoint.", bullets: ["Brand-First Design Across Every Channel", "In-House Video & Photography Production", "Fast Iterations Until You're 100% Happy"], imageAlt: "Designers working on brand concepts" },
    ecosystem: {
      eyebrow: "The Creative Ecosystem", title: "One Brand. Every Touchpoint.", highlight: "Every Visual Story.", text: "From your logo to your app, ads, videos and product shoots — we design everything your brand needs.",
      pillars: [
        { icon: PenTool, title: "UI/UX & Digital", desc: "Interfaces people love to use.", items: [
          { code: "UX", name: "UX Research", desc: "User flows and wireframes grounded in insight." },
          { code: "UI", name: "UI Design", desc: "Pixel-perfect interfaces in Figma." },
          { code: "WEB", name: "Website & Landing Pages", desc: "Conversion-focused page designs." },
          { code: "APP", name: "App & AI Product Design", desc: "Mobile and SaaS product experiences." },
        ] },
        { icon: Palette, title: "Brand Identity", desc: "A look that's unmistakably yours.", items: [
          { code: "LOGO", name: "Logo Design", desc: "Memorable marks built to last." },
          { code: "KIT", name: "Brand Kit", desc: "Colours, typography and guidelines." },
          { code: "SM", name: "Social Creatives", desc: "Posts, carousels and ad designs." },
          { code: "PRT", name: "Print & Packaging", desc: "Brochures, packaging and collateral." },
        ] },
        { icon: Clapperboard, title: "Video & Photography", desc: "Stories that move people.", items: [
          { code: "CORP", name: "Corporate Videos", desc: "Brand films and explainers." },
          { code: "REEL", name: "Reels & Ads", desc: "Short-form video for social and ads." },
          { code: "PROD", name: "Product Photography", desc: "Studio and lifestyle product shoots." },
          { code: "EVT", name: "Event & Team Shoots", desc: "Photography for people and places." },
        ] },
      ],
      capabilities: ["Creative Direction", "Figma", "Illustration", "Motion Graphics", "Video Editing", "Colour Grading", "Retouching", "Brand Guidelines"],
    },
    servicesTitle: "Everything your brand needs to", servicesHighlight: "look world-class.", servicesFooter: "Let's design something remarkable together.",
    services: [
      { icon: PenTool, title: "UI/UX Design", text: "Research-led user experiences and polished interfaces for websites, apps and SaaS products that are easy and enjoyable to use." },
      { icon: LayoutTemplate, title: "Landing Page Design", text: "High-converting landing page designs with clear hierarchy, strong visuals and persuasive layouts." },
      { icon: Sparkles, title: "Social Media Creative Designs", text: "Scroll-stopping posts, carousels and ad creatives designed in your brand language." },
      { icon: Palette, title: "Brand Identity Design", text: "Logos, colour palettes, typography and complete brand kits that make your business instantly recognisable." },
      { icon: BrainCircuit, title: "AI Product Designs", text: "Interfaces for AI-powered products that make complex capabilities feel simple and trustworthy." },
      { icon: Video, title: "Video Production", text: "Corporate films, explainers, testimonials and reels — scripted, shot and edited by our in-house team." },
      { icon: Camera, title: "Photography", text: "Product, lifestyle, team and event photography that gives your brand authentic, high-quality visuals." },
      { icon: Clapperboard, title: "Motion Graphics", text: "Animated logos, explainer animations and motion ads that bring your brand story to life." },
    ],
    why: { highlight: "Creative Excellence", text: "Design, video and photography under one roof means faster delivery, consistent quality and a brand that looks the same everywhere.", statValue: "100+", statLabel: "Brands Designed", points: whyBase("design") },
    deliverables: { title: "Creative That", highlight: "Elevates Your Brand.", text: "The outcomes your business sees when design, video and photography work together.", items: [
      { icon: Palette, title: "A Distinct Brand Identity", description: "A consistent look and voice that customers remember." },
      { icon: PenTool, title: "Better User Experiences", description: "Interfaces that are intuitive, accessible and conversion-focused." },
      { icon: Video, title: "Videos That Engage", description: "Stories that hold attention and drive action." },
      { icon: Camera, title: "Premium Visual Assets", description: "Photography that makes your products and team shine." },
      { icon: Zap, title: "Faster Turnarounds", description: "One team, one brief, quicker delivery across formats." },
      { icon: TrendingUp, title: "Higher Conversions", description: "Creative designed to perform, not just look good." },
    ] },
    framework: { eyebrow: "Our Creative Framework", title: "From Brief", highlight: "to Brand Impact.", text: "A connected process from understanding your brand to delivering polished assets in every format.", steps: [
      { icon: Eye, title: "Discovery", description: "Learn your brand, audience and goals to build a clear brief." },
      { icon: PenLine, title: "Concept & Wireframes", description: "Rough ideas become structured layouts and storyboards." },
      { icon: Palette, title: "Visual Design", description: "Pixel-perfect, brand-aligned designs and shoots." },
      { icon: Clapperboard, title: "Produce & Edit", description: "Video, photo and motion production finalised." },
      { icon: Rocket, title: "Deliver & Iterate", description: "Final assets in all formats, refined until perfect." },
    ] },
    team: { eyebrow: "Our creative experts", highlight: "Creative Experts", text: "Designers, video editors, photographers and creative directors — one focused team crafting your brand." },
  },
  {
    path: "/content-marketing-agency-bangalore2",
    seo: { title: "Content Marketing Agency in Bangalore | Website, Blogs, Scripts & PR", description: "Content marketing agency in Bangalore for website content, SEO blogs, scripts, articles and PR that rank, engage and convert.", canonical: "/content-writing-agency-bangalore" },
    ctaLabel: "Get My Free Content Audit",
    hero: { tags: "Website Content · Blogs · Scripts · PR", title: "Content Marketing Agency in Bangalore. Words That Rank and", highlight: "Convert", sub: "Website content, SEO blogs, video scripts, articles and PR that build authority, drive traffic and turn readers into customers." },
    about: { eyebrow: "Your content partner", title: "The Best Content Marketing Agency", highlight: "for Authority & Growth.", text: "At The Super 30, we combine keyword research, AI-powered research and expert human writing to produce content that ranks on Google, gets cited by AI and converts.", bullets: ["Content Strategy Built Around Search Intent", "Expert Writers Across Web, Blog, Script & PR", "Consistent Publishing with Performance Tracking"], imageAlt: "Content team planning an editorial calendar" },
    ecosystem: {
      eyebrow: "The Content Ecosystem", title: "One Voice. Every Format.", highlight: "Every Discovery Channel.", text: "We create content for your website, search, social, video and media so your brand story reaches people everywhere.",
      pillars: [
        { icon: FileText, title: "Web & SEO Content", desc: "Pages and posts that rank.", items: [
          { code: "WEB", name: "Website Content", desc: "Homepage, service and landing page copy." },
          { code: "BLOG", name: "SEO Blog Writing", desc: "Long-form articles built around keywords." },
          { code: "KW", name: "Keyword Research", desc: "Intent-driven topic opportunities." },
          { code: "AUD", name: "Content Audits", desc: "Fix weak pages and grow performance." },
        ] },
        { icon: Clapperboard, title: "Scripts & Social", desc: "Stories built for attention.", items: [
          { code: "SCR", name: "Video Scripts", desc: "Reels, YouTube, ads and explainers." },
          { code: "SOC", name: "Social Copy", desc: "Captions and carousels that engage." },
          { code: "AD", name: "Ad Copywriting", desc: "Headlines and copy that convert." },
          { code: "EML", name: "Email Content", desc: "Newsletters and nurture sequences." },
        ] },
        { icon: Newspaper, title: "Authority & PR", desc: "Credibility beyond your website.", items: [
          { code: "ART", name: "Articles", desc: "Thought leadership and industry pieces." },
          { code: "GP", name: "Guest Posting", desc: "Placements on trusted publications." },
          { code: "PR", name: "Press Releases", desc: "News distributed to media outlets." },
          { code: "CS", name: "Case Studies", desc: "Proof stories that win trust." },
        ] },
      ],
      capabilities: ["Content Strategy", "Topic Clusters", "AI Research", "Editing", "On-Page SEO", "Brand Voice", "Distribution", "Content Analytics"],
    },
    servicesTitle: "Everything you need for content that", servicesHighlight: "ranks and converts.", servicesFooter: "Let's tell your brand story together.",
    services: [
      { icon: Globe, title: "Website Content", text: "Conversion focused homepage, service, and landing page content designed for visibility, engagement, and lead generation." },
      { icon: PenLine, title: "SEO Blog Writing", text: "Long-form SEO articles created with a keyword strategy to improve rankings and drive consistent organic traffic." },
      { icon: Clapperboard, title: "Script Writing", text: "Video scripts for reels, YouTube, advertisements, and explainers designed to capture audience attention quickly." },
      { icon: Newspaper, title: "Articles & Thought Leadership", text: "In-depth articles that position your leadership as experts and build trust with your audience." },
      { icon: Megaphone, title: "PR & Press Releases", text: "Newsworthy press releases and media outreach that earn coverage and strengthen brand credibility." },
      { icon: Link2Icon, title: "Guest Posting", text: "Authority driven backlink placements from trusted publishing platforms that strengthen rankings and domain credibility." },
      { icon: Layers, title: "Content Strategy", text: "Topic clusters, pillar content, and editorial planning aligned with audience intent and business objectives." },
      { icon: Search, title: "Keyword Research & Audits", text: "Search intent driven keyword analysis and content reviews that find opportunities and strengthen weak pages." },
    ],
    why: { highlight: "Content That Performs", text: "We blend strategy, research and expert writing so every piece of content has a job — rank, engage, build trust or convert.", statValue: "10,000", statLabel: "Keywords Ranked", points: whyBase("content") },
    deliverables: { title: "Content Results That", highlight: "Build Authority.", text: "The outcomes your business sees when content is planned, written and distributed end to end.", items: [
      { icon: TrendingUp, title: "Sustained Traffic Growth", description: "Every asset designed to generate consistent long-term traffic." },
      { icon: Search, title: "Search Page Rankings", description: "Strategic keyword targeting puts you where customers search." },
      { icon: BrainCircuit, title: "AI Search Citations", description: "Structured content that AI assistants quote and recommend." },
      { icon: Shield, title: "Stronger Brand Authority", description: "Articles and PR that position you as the industry expert." },
      { icon: MousePointerClick, title: "Higher Conversions", description: "Persuasive copy that moves readers toward enquiry." },
      { icon: Calendar, title: "Consistent Publishing", description: "A reliable calendar without stretching your internal team." },
    ] },
    framework: { eyebrow: "Our Content Framework", title: "From Ideas", highlight: "to Influence.", text: "A connected approach to planning, creating and distributing content that compounds over time.", steps: [
      { icon: Search, title: "Research & Audit", description: "Analyse keywords, competitors and existing content." },
      { icon: Layers, title: "Strategy & Calendar", description: "Plan topics, formats and an editorial calendar." },
      { icon: PenLine, title: "Write & Edit", description: "Expert writers craft content in your brand voice." },
      { icon: Send, title: "Publish & Distribute", description: "Optimise, publish and promote across channels." },
      { icon: TrendingUp, title: "Measure & Scale", description: "Track performance and expand what works." },
    ] },
    team: { eyebrow: "Our content experts", highlight: "Content Experts", text: "Strategists, SEO writers, scriptwriters and editors — one focused team telling your brand story everywhere." },
  },
  {
    path: "/website-design-company-bangalore2",
    seo: { title: "Website Design Company in Bangalore | E-commerce, WordPress & Custom", description: "Website design company in Bangalore building e-commerce, WordPress and custom-coded websites that are fast, SEO-ready and built to convert.", canonical: "/web-design-company-bangalore" },
    ctaLabel: "Get My Free Website Audit",
    hero: { tags: "E-commerce · WordPress · Custom Coded", title: "Website Design Company in Bangalore. Websites Built to", highlight: "Convert", sub: "E-commerce stores, WordPress sites and custom-coded websites that are fast, responsive, SEO-ready and designed for growth." },
    about: { eyebrow: "Your website partner", title: "The Best Website Design Company", highlight: "for Business Growth.", text: "At The Super 30, we design and develop websites that strengthen your credibility, load fast, rank on search and turn visitors into enquiries and sales.", bullets: ["Conversion-Focused Design for Every Page", "E-commerce, WordPress & Custom Development", "SEO-Ready, Fast and Fully Responsive"], imageAlt: "Web designers reviewing a website layout" },
    ecosystem: {
      eyebrow: "The Website Ecosystem", title: "One Website. Every Device.", highlight: "Every Business Goal.", text: "Whichever platform suits your business, we build it to perform — beautifully designed and technically sound.",
      pillars: [
        { icon: ShoppingCart, title: "E-commerce", desc: "Stores that sell around the clock.", items: [
          { code: "SHOP", name: "Shopify Stores", desc: "Fast, scalable online stores." },
          { code: "WOO", name: "WooCommerce", desc: "Flexible WordPress-based commerce." },
          { code: "PAY", name: "Payment Gateways", desc: "Secure checkout and order management." },
          { code: "CAT", name: "Product Catalogs", desc: "Organised, filterable product listings." },
        ] },
        { icon: LayoutTemplate, title: "WordPress", desc: "Easy to manage, built to rank.", items: [
          { code: "CORP", name: "Corporate Websites", desc: "Professional sites that build trust." },
          { code: "CMS", name: "CMS Setup", desc: "Edit content without developers." },
          { code: "LP", name: "Landing Pages", desc: "Pages built to generate leads." },
          { code: "SEO", name: "SEO-Ready Build", desc: "Clean structure search engines love." },
        ] },
        { icon: Code2, title: "Custom Coded", desc: "Built exactly to your needs.", items: [
          { code: "REACT", name: "Custom Development", desc: "Modern frameworks for unique needs." },
          { code: "API", name: "Integrations", desc: "CRM, payments and third-party APIs." },
          { code: "PERF", name: "Speed Optimization", desc: "Fast loading and Core Web Vitals." },
          { code: "MNT", name: "Maintenance & Support", desc: "Updates, security and monitoring." },
        ] },
      ],
      capabilities: ["UI/UX Design", "Responsive Design", "Core Web Vitals", "Schema Markup", "Analytics Setup", "Hosting", "Security", "Accessibility"],
    },
    servicesTitle: "Everything you need for a website that", servicesHighlight: "grows your business.", servicesFooter: "Let's build your next website together.",
    services: [
      { icon: LayoutTemplate, title: "Landing Page Design", text: "Conversion focused landing pages built to generate quality leads and increase sales performance." },
      { icon: Globe, title: "Corporate Website Design", text: "Professional business websites that strengthen brand credibility and clearly communicate your services." },
      { icon: ShoppingCart, title: "E-Commerce Website Development", text: "Online stores with product catalogs, secure payment gateways, and complete order management systems." },
      { icon: FileText, title: "WordPress Website Development", text: "Easy-to-manage WordPress websites with custom themes, plugins and CMS training for your team." },
      { icon: Code2, title: "Custom Website Development", text: "Custom-coded features, third party integrations, CMS setup, and API connectivity built for your exact needs." },
      { icon: Smartphone, title: "Responsive Website Design", text: "Seamless website experiences that perform consistently across desktop, tablet, and mobile devices." },
      { icon: Zap, title: "Website Speed Optimization", text: "Performance optimization for faster loading and improved search engine visibility." },
      { icon: Wrench, title: "Website Maintenance & Support", text: "Regular updates, security monitoring, and ongoing performance management." },
    ],
    why: { highlight: "Websites That Perform", text: "We combine design, development and SEO from day one so your website looks premium, loads fast and keeps generating business.", statValue: "250+", statLabel: "Projects Delivered", points: whyBase("website") },
    deliverables: { title: "Website Results That", highlight: "Drive Business.", text: "The outcomes your business sees when your website is designed and built the right way.", items: [
      { icon: MousePointerClick, title: "More Enquiries & Sales", description: "Clear journeys and CTAs that turn visitors into customers." },
      { icon: Zap, title: "Faster Load Times", description: "Optimised builds that pass Core Web Vitals." },
      { icon: Search, title: "SEO-Ready Foundation", description: "Clean structure and schema that help you rank." },
      { icon: Smartphone, title: "Flawless on Mobile", description: "Responsive layouts for every screen size." },
      { icon: Shield, title: "Secure & Reliable", description: "Security best practices and ongoing monitoring." },
      { icon: Wrench, title: "Easy to Manage", description: "A CMS your team can update without developers." },
    ] },
    framework: { eyebrow: "Our Website Framework", title: "From Idea", highlight: "to Launch & Growth.", text: "A connected process for planning, designing, building and growing your website.", steps: [
      { icon: Search, title: "Discovery & Planning", description: "Understand goals, users, competitors and sitemap." },
      { icon: PenTool, title: "UX & Design", description: "Wireframes and visual designs for every page." },
      { icon: Code2, title: "Development", description: "Build on e-commerce, WordPress or custom code." },
      { icon: Shield, title: "Test & Launch", description: "QA across devices, speed and SEO checks." },
      { icon: TrendingUp, title: "Support & Grow", description: "Maintenance, optimisation and new features." },
    ] },
    team: { eyebrow: "Our website experts", highlight: "Website Experts", text: "UI/UX designers, developers, SEO specialists and project managers — one focused team building your website." },
  },
  {
    path: "/sms-marketing-agency-bangalore2",
    seo: { title: "SMS & WhatsApp Marketing Company in Bangalore | Customer Engagement", description: "Bulk SMS, WhatsApp Business API, RCS and customer engagement platforms in Bangalore that reach customers instantly and drive conversions.", canonical: "/bulk-sms-services-bangalore" },
    ctaLabel: "Get My Free Messaging Audit",
    hero: { tags: "Bulk SMS · WhatsApp · RCS · Chatbots", title: "SMS & WhatsApp Marketing Company in Bangalore. Reach Customers", highlight: "Instantly", sub: "Bulk SMS, WhatsApp Business API, RCS and customer engagement automation that deliver faster replies, higher engagement and more conversions." },
    about: { eyebrow: "Your messaging partner", title: "The Best SMS & WhatsApp Marketing Company", highlight: "for Customer Engagement.", text: "At The Super 30, we set up compliant messaging, automate customer journeys and run targeted campaigns across SMS, WhatsApp and RCS that customers actually open.", bullets: ["DLT-Compliant SMS & Meta-Approved WhatsApp", "Automated Journeys Across Every Channel", "Live Delivery, Click and Conversion Reporting"], imageAlt: "Customer engagement team managing messaging campaigns" },
    ecosystem: {
      eyebrow: "The Engagement Ecosystem", title: "One Customer. Every Channel.", highlight: "Every Conversation.", text: "We connect SMS, WhatsApp, RCS, chatbots and email into one engagement platform that reaches customers where they respond.",
      pillars: [
        { icon: MessageSquare, title: "SMS & RCS", desc: "Direct reach to every phone.", items: [
          { code: "SMS", name: "Bulk SMS", desc: "Promotional and transactional campaigns." },
          { code: "DLT", name: "DLT Compliance", desc: "Template and sender ID approvals." },
          { code: "RCS", name: "RCS Messaging", desc: "Rich messages with images and buttons." },
          { code: "API", name: "SMS Gateway", desc: "OTP and alerts through reliable APIs." },
        ] },
        { icon: MessageCircle, title: "WhatsApp & Chat", desc: "Conversations that convert.", items: [
          { code: "WA", name: "WhatsApp Business API", desc: "Official Meta-approved messaging." },
          { code: "BOT", name: "AI Chatbots", desc: "24/7 replies and lead qualification." },
          { code: "BRD", name: "Broadcast Campaigns", desc: "Offers and updates to opted-in users." },
          { code: "INB", name: "Shared Inbox", desc: "Your team manages chats in one place." },
        ] },
        { icon: Users, title: "Customer Engagement", desc: "Retention on autopilot.", items: [
          { code: "CEP", name: "Engagement Platforms", desc: "Unified customer data and journeys." },
          { code: "AUTO", name: "Omnichannel Automation", desc: "Triggers from CRM, carts and forms." },
          { code: "RET", name: "Retention Campaigns", desc: "Lifecycle messaging for repeat sales." },
          { code: "EML", name: "Email Integration", desc: "Coordinated email in every journey." },
        ] },
      ],
      capabilities: ["Audience Segmentation", "Template Approval", "Personalisation", "CRM Integration", "Abandoned Cart Flows", "Opt-in Management", "TRAI Compliance", "Campaign Analytics"],
    },
    servicesTitle: "Everything you need to", servicesHighlight: "engage customers instantly.", servicesFooter: "Let's start better customer conversations.",
    services: [
      { icon: MessageSquare, title: "Bulk SMS Campaigns", text: "DLT approved promotional and transactional SMS campaigns with reliable delivery and customer reach." },
      { icon: MessageCircle, title: "WhatsApp Business API", text: "Official Meta approved WhatsApp campaigns, automation workflows, and customer communication management." },
      { icon: Bot, title: "AI Chatbot Solutions", text: "Automated 24/7 chat support for WhatsApp, websites, and Instagram that qualifies leads and schedules conversations." },
      { icon: Sparkles, title: "RCS Business Messaging", text: "Interactive branded messaging with visuals, carousels, and action buttons for richer customer engagement." },
      { icon: Heart, title: "Customer Retention Campaigns", text: "Lifecycle messaging sequences across SMS, WhatsApp, and email focused on retention and repeat engagement." },
      { icon: Layers, title: "Omnichannel Automation", text: "Automated customer journeys triggered through CRM actions, abandoned carts, forms, and website activity." },
      { icon: Users, title: "Customer Engagement Platforms", text: "Setup and management of engagement platforms that unify customer data, segments and messaging journeys." },
      { icon: BarChart3, title: "Performance Analytics Reports", text: "Live reporting dashboards tracking delivery, engagement, clicks, conversions, and campaign performance insights." },
    ],
    why: { highlight: "Customer Engagement", text: "We handle compliance, setup, automation and campaigns end to end — so your messages reach the right customers at the right moment.", statValue: "250+", statLabel: "Projects Delivered", points: whyBase("messaging") },
    deliverables: { title: "Messaging Results That", highlight: "Keep Customers Coming Back.", text: "The outcomes your business sees when SMS, WhatsApp and engagement platforms work together.", items: [
      { icon: Eye, title: "Higher Open Rates", description: "SMS and WhatsApp reach customers faster than email." },
      { icon: Zap, title: "Faster Customer Conversions", description: "Direct messaging encourages quicker bookings and purchases." },
      { icon: MessageCircle, title: "Instant Customer Replies", description: "Chatbots and automation respond within seconds." },
      { icon: Heart, title: "Better Retention", description: "Lifecycle journeys that drive repeat business." },
      { icon: Shield, title: "Compliant Messaging", description: "DLT, TRAI and Meta policies handled for you." },
      { icon: Mail, title: "Unified Communication", description: "Every channel connected in one customer journey." },
    ] },
    framework: { eyebrow: "Our Engagement Framework", title: "From First Message", highlight: "to Loyal Customer.", text: "A connected approach to setting up, automating and scaling customer conversations.", steps: [
      { icon: Search, title: "Audit & Setup", description: "Review channels, compliance and customer data." },
      { icon: Users, title: "Segment & Plan", description: "Build audiences and map customer journeys." },
      { icon: Bot, title: "Automate Journeys", description: "Launch triggers, chatbots and templates." },
      { icon: Send, title: "Run Campaigns", description: "Targeted broadcasts across SMS, WhatsApp and RCS." },
      { icon: TrendingUp, title: "Measure & Scale", description: "Optimise engagement and expand what converts." },
    ] },
    team: { eyebrow: "Our engagement experts", highlight: "Engagement Experts", text: "Messaging strategists, automation specialists and analysts — one focused team building customer conversations." },
  },
];
