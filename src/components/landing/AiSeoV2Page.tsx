import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight, BarChart3, BrainCircuit, BriefcaseBusiness, Building2, Check, FileText,
  GraduationCap, Hotel, Link2, MapPin, PenLine, Phone, Rocket, Scale, Search, ShoppingBag, Smartphone,
  Sparkles, Star, Stethoscope, Target, TrendingUp,
} from "lucide-react";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { SeoAchievementsSection } from "@/components/landing/SeoAchievementsSection";

import heroImage from "@/assets/seo-reference-hero.jpg";
import evolvingImage from "@/assets/seo-search-evolving.jpg";
import partnerImage from "@/assets/seo-growth-partner.jpg";
import realGrowthImage from "@/assets/seo-real-growth-workspace.jpg";
import featuredSearchImage from "@/assets/seo-featured-ai-search.jpg";
import magicbricksClientLogo from "@/assets/clients/magicbricks.png";
import mamaearthClientLogo from "@/assets/clients/mamaearth.png";
import upgradClientLogo from "@/assets/clients/upgrad.png";
import tata1mgLogo from "@/assets/clients/tata1mg.png";
import shriramLogo from "@/assets/clients/shriram-properties.png";
import jainLogo from "@/assets/clients/jain-university.png";
import harvestClientLogo from "@/assets/clients/harvest-international.png";
import bhrighuLogo from "@/assets/clients/bhrighu-academy.png";
import smrLogo from "@/assets/clients/smr-university.png";
import atriaLogo from "@/assets/clients/atria-institute.png";
import lancesoftLogo from "@/assets/clients/lancesoft.png";
import organicSearchImage from "@/assets/search-platform-organic-search-photo.jpg.asset.json";
import aiSearchImage from "@/assets/search-platform-ai-search-photo.jpg.asset.json";
import conversationalAiImage from "@/assets/search-platform-conversational-ai-photo.jpg.asset.json";
import videoSearchImage from "@/assets/search-platform-video-search-photo.jpg.asset.json";
import localSearchImage from "@/assets/search-platform-local-search-photo.jpg.asset.json";
import appMarketplacesImage from "@/assets/search-platform-app-marketplaces-photo.jpg.asset.json";

const industries = [
  { icon: Building2, label: "B2B SaaS", href: "/industries/b2b", text: "Full-funnel digital marketing for SaaS — from SEO and content to paid campaigns that generate qualified pipeline." },
  { icon: ShoppingBag, label: "E-commerce", href: "/ecommerce-marketing-agency-bangalore", text: "AI-driven ecommerce marketing combining SEO, paid ads, and social media to boost conversions and ROAS." },
  { icon: BriefcaseBusiness, label: "Professional Services", href: "/industries/b2b", text: "Integrated digital marketing strategies that build authority, drive inbound leads, and grow your practice." },
  { icon: GraduationCap, label: "EdTech", href: "/digital-marketing-for-coaching-institutes", text: "Multi-channel digital marketing for EdTech — SEO, paid campaigns, and social media to reach learners at scale." },
  { icon: Stethoscope, label: "Healthcare", href: "/industries/lifestyle", text: "Trust-focused digital marketing for healthcare — from patient acquisition to authoritative content." },
  { icon: Rocket, label: "Tech Startups", href: "/industries/b2b", text: "Growth marketing for startups — rapid experimentation across SEO, ads, social, and content to find product-market fit." },
  { icon: BarChart3, label: "Real Estate", href: "/industries/b2b", text: "SEO, Google Ads, social media, and landing pages that help real estate businesses generate quality leads." },
  { icon: Scale, label: "Legal Services", href: "/industries/b2b", text: "Targeted digital marketing for law firms — from local SEO to paid ads that attract high-intent clients." },
  { icon: Hotel, label: "Hospitality & Travel", href: "/industries/hospitality", text: "Social media, SEO, and paid campaigns that help hotels, resorts, and travel businesses drive bookings." },
];

const services = [
  { icon: Search, title: "Technical SEO", text: "We fix crawlability, site speed, indexing and Core Web Vitals so search engines can access every important page. A clean technical foundation ensures nothing holds your rankings back." },
  { icon: FileText, title: "On-Page SEO", text: "From title tags and meta descriptions to heading structure, internal links and schema markup — every page is optimised around the keywords your buyers actually search for." },
  { icon: PenLine, title: "Content Strategy", text: "We plan and produce high-quality content that answers real search intent. Blogs, service pages and landing pages designed to rank, build trust and convert readers into enquiries." },
  { icon: Link2, title: "Authority Building", text: "Earn relevant backlinks, citations and brand mentions from trusted websites in your niche. Authority is what separates pages that rank on page one from pages nobody sees." },
  { icon: MapPin, title: "Local SEO", text: "Google Business Profile optimisation, local citations and location pages that put you in front of nearby customers exactly when they are ready to call, visit or book." },
  { icon: Sparkles, title: "AEO — Answer Engine Optimization", text: "Structure your content so AI assistants like ChatGPT, Perplexity and Google's AI Overviews quote your brand directly in their answers, not your competitors'." },
  { icon: BrainCircuit, title: "GEO — Generative Engine Optimization", text: "We strengthen your entity signals, reviews and topical authority so generative engines recognise your business as a credible source and recommend it across AI search." },
  { icon: Smartphone, title: "ASO — App Store Optimization", text: "Keyword-optimised app titles, descriptions and visuals that improve your visibility in the App Store and Play Store, driving more organic installs without extra ad spend." },
  { icon: ShoppingBag, title: "E-commerce SEO", text: "Product and category page optimisation, faceted navigation handling and content that turns organic search into a consistent, low-cost sales channel for your store." },
  { icon: BarChart3, title: "SEO Analytics & Reporting", text: "Transparent dashboards and monthly reports that connect rankings to traffic, leads and revenue — so you always know exactly what your SEO investment is returning." },
];

const growthFramework = [
  { icon: Search, title: "Audit & Discover", description: "Analyze website health, competitors and search opportunities." },
  { icon: Target, title: "Strategize & Plan", description: "Build a customized roadmap aligned with your objectives." },
  { icon: BrainCircuit, title: "Optimize & Execute", description: "Implement technical, content, AI and authority-building strategies." },
  { icon: BarChart3, title: "Track & Analyze", description: "Measure rankings, organic traffic, visibility and conversions." },
  { icon: TrendingUp, title: "Scale & Accelerate", description: "Identify new opportunities and continuously improve performance." },
];

const clientLogos = [
  { src: magicbricksClientLogo, name: "Magicbricks" }, { src: bhrighuLogo, name: "Bhrighu Academy" },
  { src: mamaearthClientLogo, name: "Mamaearth" }, { src: jainLogo, name: "Jain University" },
  { src: upgradClientLogo, name: "upGrad" }, { src: harvestClientLogo, name: "Harvest International School" },
  { src: tata1mgLogo, name: "Tata 1mg" }, { src: smrLogo, name: "SMR University" },
  { src: shriramLogo, name: "Shriram Properties" }, { src: atriaLogo, name: "Atria Institute of Technology" },
  { src: lancesoftLogo, name: "Lancesoft" },
];

const stats = [["300%+", "Avg. Traffic Growth"], ["50+", "AI Audits Delivered"], ["$2M+", "Revenue Generated"], ["4.9/5", "Client Rating"]];

const ecosystem = [
  { icon: Search, title: "Search Engine Optimization", desc: "Get discovered across traditional search engines.", items: [
    { code: "SEO", name: "Search Engine Optimization", desc: "Improve organic rankings, keyword visibility and website traffic." },
    { code: "LSO", name: "Local Search Optimization", desc: "Get discovered in local search results and maps." },
    { code: "E-SEO", name: "E-commerce SEO", desc: "Improve product rankings and shopping discovery." },
    { code: "I-SEO", name: "International SEO", desc: "Reach audiences across countries and languages." },
  ] },
  { icon: BrainCircuit, title: "AI & Answer Engine Optimization", desc: "Become the answer customers and AI platforms discover.", items: [
    { code: "AEO", name: "Answer Engine Optimization", desc: "Improve visibility in direct answers and answer-driven search." },
    { code: "GEO", name: "Generative Engine Optimization", desc: "Improve brand mentions and citations in AI-generated responses." },
    { code: "VSO", name: "Voice Search Optimization", desc: "Optimize for conversational and voice-based queries." },
    { code: "SEM-SEO", name: "Semantic Search Optimization", desc: "Build topical relevance, entity connections and search intent." },
  ] },
  { icon: Sparkles, title: "Digital Discovery & Experience Optimization", desc: "Get discovered, engage audiences and convert across digital platforms.", items: [
    { code: "SXO", name: "Search Experience Optimization", desc: "Turn search visitors into engaged customers." },
    { code: "ASO", name: "App Store Optimization", desc: "Increase app visibility, rankings and downloads." },
    { code: "VSEO", name: "Video Search Optimization", desc: "Improve video discovery and YouTube rankings." },
    { code: "DSO", name: "Digital Discovery Optimization", desc: "Expand visibility across social search and online marketplaces." },
  ] },
];

const supportingCapabilities = ["Technical SEO", "On-Page SEO", "Off-Page SEO", "Image SEO", "Programmatic SEO", "Content Optimization", "Link Building", "SEO Analytics"];

const searchPlatforms = [
  { title: "Google & Bing", description: "Capture relevant organic search traffic.", image: organicSearchImage },
  { title: "AI Search Experiences", description: "Improve visibility in AI-generated results.", image: aiSearchImage },
  { title: "Conversational AI", description: "Strengthen brand discoverability in AI-powered answers.", image: conversationalAiImage },
  { title: "YouTube & Video Platforms", description: "Improve video discovery and engagement.", image: videoSearchImage },
  { title: "Maps & Local Search", description: "Help nearby customers discover your business.", image: localSearchImage },
  { title: "App Stores & Marketplaces", description: "Increase app and product discoverability.", image: appMarketplacesImage },
];

const Eyebrow = ({ children, light }: { children: ReactNode; light?: boolean }) => (
  <p className={`mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider ${light ? "text-primary-foreground" : "text-foreground"}`}>
    <span className="h-2 w-2 rounded-full bg-brand" />{children}
  </p>
);

const Pill = ({ children, onClick, to, light }: { children: ReactNode; onClick?: () => void; to?: string; light?: boolean }) => {
  const cls = `group inline-flex items-center gap-3 rounded-full py-1.5 pl-6 pr-1.5 text-sm font-semibold transition ${light ? "bg-primary-foreground text-foreground hover:bg-brand hover:text-primary-foreground" : "bg-brand text-primary-foreground hover:bg-brand-dark"}`;
  const inner = <>{children}<span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground text-foreground transition group-hover:rotate-45"><ArrowUpRight className="h-4 w-4" /></span></>;
  return to ? <Link to={to} className={cls}>{inner}</Link> : <button type="button" onClick={onClick} className={cls}>{inner}</button>;
};

const Mesh = () => (
  <>
    <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,hsl(var(--primary-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary-foreground))_1px,transparent_1px)] bg-[size:46px_46px] [mask-image:radial-gradient(ellipse_at_center,transparent_35%,black_85%)]" />
    <div className="pointer-events-none absolute left-1/2 top-1/2 h-[720px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-brand/25 blur-[140px]" />
  </>
);

const Rating = ({ light }: { light?: boolean }) => (
  <div className="flex items-center gap-3">
    <div className="flex -space-x-2">
      {clientLogos.slice(0, 3).map((c) => <span key={c.name} className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border-2 border-background bg-background"><img src={c.src} alt="" className="h-6 w-6 object-contain" loading="lazy" /></span>)}
    </div>
    <div>
      <div className="flex items-center gap-1">{[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-3.5 w-3.5 fill-brand text-brand" />)}<span className={`ml-1 text-sm font-semibold ${light ? "text-primary-foreground" : "text-foreground"}`}>4.9/5</span></div>
      <p className={`text-xs ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>Trusted by <b>50+</b> leading companies</p>
    </div>
  </div>
);

export const AiSeoV2Page = () => {
  const [showEnquiry, setShowEnquiry] = useState(false);
  const openAudit = () => setShowEnquiry(true);

  return (
    <div className="bg-background">
      {/* HERO */}
      <section className="px-3 pt-3 sm:px-5">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-foreground">
          <Mesh />
          <div className="container relative mx-auto px-4 pb-14 pt-20 text-center sm:px-6 md:pt-28 lg:px-8">
            <div className="mx-auto inline-flex items-center gap-3 rounded-full border border-primary-foreground/10 bg-primary-foreground/5 py-1.5 pl-1.5 pr-4 text-sm text-primary-foreground/85">
              <span className="flex -space-x-2">{clientLogos.slice(0, 3).map((c) => <span key={c.name} className="flex h-7 w-7 items-center justify-center overflow-hidden rounded-full border border-foreground bg-background"><img src={c.src} alt="" className="h-5 w-5 object-contain" /></span>)}</span>
              SEO · AEO · GEO · AI Search
            </div>
            <h1 className="mx-auto mt-6 max-w-5xl text-4xl font-semibold leading-[1.08] text-primary-foreground sm:text-6xl lg:text-7xl">
              Be Found Where It Matters. Turn Searches into Real{" "}
              <span className="inline-block -rotate-2 rounded-2xl bg-brand px-4 pb-1">Growth</span>
            </h1>
            <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
              We help businesses grow with SEO, AI search optimization and high-quality content that drives traffic, leads and revenue.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Pill onClick={openAudit}>Get My Free SEO Audit</Pill>
              <Link to="/our-work" className="text-sm font-semibold text-primary-foreground underline-offset-4 hover:underline">View Case Studies</Link>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-primary-foreground/70">
              {["No obligation", "Expert analysis", "Actionable insights"].map((item) => <span key={item} className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-brand" />{item}</span>)}
            </div>

            <p className="mt-20 text-sm text-primary-foreground/80">Trusted by <b className="text-primary-foreground">50+</b> Brands That Value Real Results</p>
            <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-y-8 md:grid-cols-4">
              {stats.map(([v, l], i) => (
                <div key={l} className={`px-4 ${i > 0 ? "md:border-l md:border-primary-foreground/15" : ""}`}>
                  <p className="text-4xl font-semibold text-primary-foreground md:text-5xl">{v}</p>
                  <p className="mt-2 text-sm text-primary-foreground/75">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-center">
            <span className="hidden h-px w-16 bg-gradient-to-r from-transparent to-brand sm:block" />
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">Trusted by <span className="text-brand">50+</span> growing brands across India</p>
            <span className="hidden h-px w-16 bg-gradient-to-l from-transparent to-brand sm:block" />
          </div>
        </div>
        <div className="relative space-y-5 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          {[0, 1].map((row) => {
            const list = row === 0 ? clientLogos : [...clientLogos].reverse();
            return (
              <div key={row} className="flex w-max gap-5 hover:[animation-play-state:paused]" style={{ animation: `marquee ${row === 0 ? 40 : 48}s linear infinite${row === 1 ? " reverse" : ""}` }}>
                {[...list, ...list].map((c, i) => (
                  <div key={`${c.name}-${i}`} className="group flex h-20 w-44 shrink-0 items-center justify-center rounded-2xl border border-border bg-background px-5 transition duration-300 hover:-translate-y-1 hover:border-brand/60">
                    <img src={c.src} alt={c.name} className="max-h-12 w-auto object-contain transition duration-300 group-hover:scale-110" loading="lazy" width="120" height="48" />
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="relative">
            <img src={evolvingImage} alt="People discovering businesses through search" width={1100} height={900} loading="lazy" className="aspect-[5/4] w-full rounded-3xl object-cover" />
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-background p-5 shadow-lg sm:left-10">
              <p className="text-3xl font-semibold text-foreground">$2M+</p>
              <p className="text-sm text-muted-foreground">Client Revenue Generated</p>
              <div className="mt-4 border-t border-border pt-4"><Rating /></div>
            </div>
          </div>
          <div className="pt-8 lg:pt-0">
            <Eyebrow>The new search reality</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">Search is evolving. <span className="text-brand">Are you visible?</span></h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">Your customers search on Google, AI tools and local platforms. We help your brand show up everywhere they are looking.</p>
            <div className="mt-8 grid gap-6 border-y border-border py-6 sm:grid-cols-2">
              {[["50+", "AI Audits Delivered"], ["300%+", "Avg. Traffic Growth"]].map(([v, l]) => <div key={l}><p className="text-4xl font-semibold text-brand">{v}</p><p className="mt-1 text-sm text-muted-foreground">{l}</p></div>)}
            </div>
            <ul className="mt-6 space-y-3">
              {["Technical SEO Optimization", "On-Page SEO Optimization", "AI Search & Answer Engine Visibility"].map((x) => <li key={x} className="flex items-center gap-3 text-foreground"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand"><Check className="h-3.5 w-3.5 text-primary-foreground" /></span>{x}</li>)}
            </ul>
            <div className="mt-8"><Pill onClick={openAudit}>Get My Free SEO Audit</Pill></div>
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="relative overflow-hidden bg-foreground py-20 md:py-28">
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,hsl(var(--primary-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--primary-foreground))_1px,transparent_1px)] bg-[size:10px_10px]" />
        <div className="pointer-events-none absolute left-1/2 top-1/3 h-[820px] w-[1100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/30 blur-[160px]" />
        <div className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[800px] -translate-x-1/2 translate-y-1/2 rounded-full bg-brand/20 blur-[140px]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow light>The Search Ecosystem</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">One Brand. Every Search. <span className="text-brand">Every Discovery Opportunity.</span></h2>
            <p className="mt-5 text-lg leading-relaxed text-primary-foreground/70">We go beyond traditional SEO to build your brand's visibility across search engines, AI platforms, apps, videos and digital experiences.</p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {ecosystem.map((pillar, pi) => (
              <div key={pillar.title} className="group relative flex flex-col rounded-[28px] border border-primary-foreground/10 bg-foreground-card p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/50 sm:p-8">
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-60" />
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-primary-foreground"><pillar.icon className="h-6 w-6" /></span>
                  <span className="text-5xl font-semibold leading-none text-primary-foreground/10">0{pi + 1}</span>
                </div>
                <h3 className="mt-6 text-2xl font-semibold text-primary-foreground">{pillar.title}</h3>
                <p className="mt-2 text-primary-foreground/60">{pillar.desc}</p>
                <div className="mt-6 space-y-3 border-t border-primary-foreground/10 pt-6">
                  {pillar.items.map((it) => (
                    <div key={it.code} className="flex items-start gap-4 rounded-2xl border border-primary-foreground/5 bg-primary-foreground/[0.03] p-4 transition hover:border-brand/40 hover:bg-brand/10">
                      <span className="flex h-11 min-w-[3.5rem] shrink-0 items-center justify-center rounded-xl border border-brand/40 bg-brand/10 px-2 text-xs font-bold tracking-wide text-brand">{it.code}</span>
                      <div>
                        <p className="font-semibold text-primary-foreground">{it.name}</p>
                        <p className="mt-1 text-sm leading-relaxed text-primary-foreground/60">{it.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="relative mt-8 overflow-hidden rounded-[28px] border border-primary-foreground/10 bg-foreground-card p-6 sm:p-8 lg:flex lg:items-center lg:gap-10">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand/25 blur-[90px]" />
            <div className="relative lg:w-1/3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand">Foundation</p>
              <h3 className="mt-2 text-2xl font-semibold text-primary-foreground">Supporting Optimization Capabilities</h3>
              <p className="mt-2 text-primary-foreground/60">Specialized expertise powering the entire ecosystem.</p>
            </div>
            <div className="relative mt-6 flex flex-wrap gap-3 lg:mt-0 lg:w-2/3">
              {supportingCapabilities.map((c) => (
                <span key={c} className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-4 py-2 text-sm font-medium text-primary-foreground transition hover:border-brand hover:bg-brand/15">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />{c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SEARCH PLATFORMS */}
      <section aria-labelledby="search-platforms-heading" className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="search-platforms-heading" className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">Your Brand. <span className="text-brand">Every Search Platform.</span></h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">Be visible wherever your customers search, ask questions, watch, explore and discover.</p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {searchPlatforms.map((platform) => (
              <article key={platform.title} className="flex min-w-0 flex-col overflow-hidden rounded-lg border border-border bg-card">
                <img src={platform.image.url} alt={`${platform.title} discovery photograph`} width={1000} height={625} loading="lazy" className="aspect-[16/10] w-full object-cover" />
                <div className="flex-1 border-t border-border p-6 sm:p-7">
                  <div className="mb-4 h-1 w-8 rounded-full bg-brand" />
                  <h3 className="text-xl font-semibold leading-snug text-foreground">{platform.title}</h3>
                  <p className="mt-3 text-base leading-relaxed text-muted-foreground">{platform.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US — PLATFORM VISIBILITY */}
      <section aria-labelledby="platform-why-us-heading" className="relative isolate overflow-hidden bg-foreground py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_45%_65%,hsl(var(--brand)/0.24),transparent_70%)]" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center lg:gap-12">
            <div>
              <Eyebrow light>Why choose us</Eyebrow>
              <h2 id="platform-why-us-heading" className="text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">Your Trusted Partner for <span className="text-brand">Digital Growth</span></h2>
            </div>
            <p className="text-base leading-relaxed text-primary-foreground/70 lg:text-lg">We go beyond basic SEO with strategies tailored to your business, audience and search opportunities. Our specialists combine AI-first thinking with hands-on execution to build visibility that supports sustainable business growth.</p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="grid min-w-0 grid-cols-2 items-stretch gap-4 sm:gap-6">
              <img src={partnerImage} alt="SEO specialists collaborating on a growth strategy" width={600} height={1000} loading="lazy" className="h-full min-h-[360px] w-full rounded-lg object-cover sm:min-h-[530px]" />
              <div className="flex min-w-0 flex-col gap-6">
                <div className="py-6 text-center sm:py-8">
                  <p className="text-4xl font-semibold text-brand sm:text-5xl lg:text-6xl">10,000</p>
                  <p className="mt-3 text-sm text-primary-foreground/70 sm:text-base">Keywords Ranked</p>
                </div>
                <img src={realGrowthImage} alt="A professional search marketing workspace" width={600} height={800} loading="lazy" className="min-h-[230px] w-full flex-1 rounded-lg object-cover" />
              </div>
            </div>
            <div className="flex min-w-0 flex-col justify-between">
              <div className="divide-y divide-primary-foreground/15">
                {[
                  { title: "250+ Projects", description: "Experience across diverse businesses, industries and search challenges.", image: evolvingImage },
                  { title: "10,000 Keywords Ranked", description: "Building organic visibility around the searches that matter to your audience.", image: heroImage },
                  { title: "AI-First Approach", description: "Connecting traditional SEO with AI search, answers and digital discovery.", image: featuredSearchImage },
                  { title: "30 Highly Specialised Experts", description: "Dedicated expertise across technical SEO, content, analytics and growth strategy.", image: partnerImage },
                  { title: "Business Growth Focused", description: "Prioritising relevant traffic, qualified enquiries and meaningful business outcomes.", image: realGrowthImage },
                ].map((point) => (
                  <div key={point.title} className="flex items-start gap-4 py-5 first:pt-0">
                    <img src={point.image} alt="" width={56} height={56} loading="lazy" className="h-14 w-14 shrink-0 rounded-full border border-primary-foreground/20 object-cover" />
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold leading-snug text-primary-foreground">{point.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-6">
                <Pill onClick={openAudit}>Get My Free SEO Audit</Pill>
                <div>
                  <div className="flex items-center gap-1 text-brand">{[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-3.5 w-3.5 fill-brand" />)}<span className="ml-2 text-sm font-semibold text-primary-foreground">4.9/5</span></div>
                  <p className="mt-2 text-xs text-primary-foreground/70">Trusted by 50+ leading companies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Our services</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">Everything you need for higher rankings and <span className="text-brand">real business growth.</span></h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((s) => (
              <article key={s.title} className="group flex flex-col rounded-3xl border border-border bg-background p-6 transition duration-300 hover:-translate-y-1 hover:border-brand">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-primary-foreground"><s.icon className="h-6 w-6" /></span>
                <h3 className="mt-6 text-lg font-semibold leading-snug text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-muted-foreground">
            <span className="mr-2 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-primary-foreground">Free</span>
            Let's make your website rank higher together.{" "}
            <button type="button" onClick={openAudit} className="font-semibold text-foreground underline underline-offset-4 hover:text-brand">Let's Start Ranking.</button>
          </p>
        </div>
      </section>

      {/* INDUSTRIES (dark) */}
      <section className="px-3 sm:px-5">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-foreground py-16 md:py-24">
          <Mesh />
          <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <Eyebrow light>Industries we serve</Eyebrow>
              <h2 className="text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">Built for ambitious businesses <span className="text-brand">ready to grow.</span></h2>
              <p className="mx-auto mt-4 max-w-2xl text-primary-foreground/70">AI-powered digital marketing shaped around the buying journey, competition, and opportunities in your market.</p>
            </div>
            <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
              {industries.map((ind) => (
                <Link key={ind.label} to={ind.href} className="group flex gap-5 rounded-3xl border border-primary-foreground/10 bg-foreground-card p-6 transition hover:-translate-y-1 hover:border-brand">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand/15 text-brand transition group-hover:bg-brand group-hover:text-primary-foreground"><ind.icon className="h-5 w-5" /></span>
                  <div>
                    <h3 className="flex items-center gap-2 text-lg font-semibold text-primary-foreground">{ind.label}<ArrowUpRight className="h-4 w-4 text-brand opacity-0 transition group-hover:opacity-100" /></h3>
                    <p className="mt-2 text-sm leading-relaxed text-primary-foreground/65">{ind.text}</p>
                  </div>
                </Link>
              ))}
            </div>
            <p className="mt-10 text-center text-sm text-primary-foreground/70">Don&apos;t see your industry? <Link to="/industries" className="font-semibold text-primary-foreground underline underline-offset-4 hover:text-brand">Explore All Industries.</Link></p>
          </div>
        </div>
      </section>

      {/* SEO GROWTH FRAMEWORK */}
      <section aria-labelledby="seo-growth-framework-heading" className="overflow-hidden bg-muted/40 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <Eyebrow>Our SEO Growth Framework</Eyebrow>
              <h2 id="seo-growth-framework-heading" className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">From Search Visibility<br className="hidden sm:block" /> to <span className="text-brand">Business Growth.</span></h2>
            </div>
            <div aria-hidden="true" className="hidden h-20 w-20 items-center justify-center rounded-full border border-brand/20 bg-background text-brand lg:flex">
              <TrendingUp className="h-9 w-9" strokeWidth={1.5} />
            </div>
          </div>

          <ol className="relative mt-12 grid gap-0 lg:mt-16 lg:grid-cols-5">
            {growthFramework.map((step, index) => (
              <li key={step.title} className="relative min-w-0 pb-10 pl-20 last:pb-0 lg:pb-0 lg:pl-0 lg:pr-6">
                <div aria-hidden="true" className={`absolute bottom-0 left-7 top-0 w-px bg-border lg:left-0 lg:right-0 lg:top-7 lg:h-px lg:w-auto ${index === growthFramework.length - 1 ? "hidden" : ""}`} />
                <span className="absolute left-0 top-0 flex h-14 w-14 items-center justify-center rounded-full border border-brand/20 bg-background text-sm font-semibold text-brand lg:relative">0{index + 1}</span>
                <div className={`relative lg:mt-9 ${index % 2 === 1 ? "lg:pt-10" : ""}`}>
                  <span aria-hidden="true" className="mb-5 flex h-14 w-14 items-center justify-center rounded-lg border border-border bg-background text-brand">
                    <step.icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="text-xl font-semibold leading-snug text-foreground">{step.title}</h3>
                  <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div aria-hidden="true" className="mt-12 flex h-1.5 overflow-hidden rounded-full bg-border/60 lg:mt-16">
            <span className="w-1/5 bg-brand/20" /><span className="w-1/5 bg-brand/40" /><span className="w-1/5 bg-brand/60" /><span className="w-1/5 bg-brand/80" /><span className="w-1/5 bg-brand" />
          </div>
        </div>
      </section>

      <SeoAchievementsSection />

      {/* CTA */}
      <section className="px-3 py-12 sm:px-5">
        <div className="relative isolate overflow-hidden rounded-[2rem] bg-foreground px-6 py-16 text-center md:py-24">
          <Mesh />
          <div className="relative mx-auto max-w-3xl">
            <Eyebrow light>Ready to grow?</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">Let's build your <span className="text-brand">search growth strategy.</span></h2>
            <p className="mx-auto mt-5 max-w-xl text-primary-foreground/70">Get a clear view of your current search visibility, biggest opportunities and the actions that will drive qualified growth.</p>
            <div className="mt-9 flex flex-col items-center justify-center gap-5 sm:flex-row">
              <Pill onClick={openAudit}>Get My Free SEO Audit</Pill>
              <Link to="/booking" className="inline-flex items-center gap-2 text-sm font-semibold text-primary-foreground hover:text-brand"><Phone className="h-4 w-4 text-brand" />Book a Strategy Call</Link>
            </div>
          </div>
        </div>
      </section>

      <EnquiryPopup open={showEnquiry} onOpenChange={setShowEnquiry} />
    </div>
  );
};
