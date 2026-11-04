import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight, ArrowUpRight, BarChart3, BrainCircuit, BriefcaseBusiness, Building2, Check, FileText,
  GraduationCap, Hotel, Link2, MapPin, PenLine, Phone, Rocket, Scale, Search, ShoppingBag, Smartphone,
  Sparkles, Star, Stethoscope, Target, TrendingUp, ShieldCheck,
} from "lucide-react";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { SeoAchievementsSection } from "@/components/landing/SeoAchievementsSection";

import heroImage from "@/assets/seo-reference-hero.jpg";
import evolvingImage from "@/assets/seo-search-evolving.jpg";
import partnerImage from "@/assets/seo-growth-partner.jpg";
import realGrowthImage from "@/assets/seo-real-growth-workspace.jpg";
import featuredSearchImage from "@/assets/seo-featured-ai-search.jpg";
import bookMyScansReport from "@/assets/seo-reports/bookmyscans-report.png";
import suranaReport from "@/assets/seo-reports/surana-report.png";
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

const process = [
  ["01", "Discover", "Understand your business"],
  ["02", "Audit", "Technical and competitor analysis"],
  ["03", "Strategy", "Build a custom SEO roadmap"],
  ["04", "Implement", "On-page, content and technical fixes"],
  ["05", "Grow", "Build authority and expand reach"],
  ["06", "Measure", "Track performance and ROI"],
];

const clientLogos = [
  { src: magicbricksClientLogo, name: "Magicbricks" }, { src: bhrighuLogo, name: "Bhrighu Academy" },
  { src: mamaearthClientLogo, name: "Mamaearth" }, { src: jainLogo, name: "Jain University" },
  { src: upgradClientLogo, name: "upGrad" }, { src: harvestClientLogo, name: "Harvest International School" },
  { src: tata1mgLogo, name: "Tata 1mg" }, { src: smrLogo, name: "SMR University" },
  { src: shriramLogo, name: "Shriram Properties" }, { src: atriaLogo, name: "Atria Institute of Technology" },
  { src: lancesoftLogo, name: "Lancesoft" },
];

const results = [
  { name: "Book My Scans", type: "Healthcare platform", image: bookMyScansReport, slug: "book-my-scans", metrics: [["+320%", "Organic traffic"], ["1,200+", "Keywords"], ["+18", "Authority"]] },
  { name: "Surana Educational Institutions", type: "Education group", image: suranaReport, slug: "surana-educational", metrics: [["+195%", "Organic traffic"], ["850+", "Keywords"], ["+140%", "Lead growth"]] },
];

const aiSearchSteps = [
  { icon: FileText, number: "01", title: "Optimize for AI", text: "Structure content for AI discovery" },
  { icon: BrainCircuit, number: "02", title: "Build Trust Signals", text: "Strengthen topical authority" },
  { icon: Link2, number: "03", title: "Earn Citations", text: "Become a trusted source" },
  { icon: BarChart3, number: "04", title: "Monitor Visibility", text: "Track search and AI presence" },
];

const stats = [["300%+", "Avg. Traffic Growth"], ["50+", "AI Audits Delivered"], ["$2M+", "Revenue Generated"], ["4.9/5", "Client Rating"]];

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
      <section className="overflow-hidden py-12">
        <div className="flex animate-marquee gap-5" style={{ width: "max-content" }}>
          {[...clientLogos, ...clientLogos].map((c, i) => (
            <div key={`${c.name}-${i}`} className="flex shrink-0 items-center justify-center rounded-xl border border-border bg-background px-6 py-3">
              <img src={c.src} alt={c.name} className="h-12 w-auto object-contain" loading="lazy" width="96" height="48" />
            </div>
          ))}
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

      {/* IMPACT / FEATURED SERVICE */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div><Eyebrow>Featured service</Eyebrow><h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">AI Search &amp; <span className="text-brand">Intent Mapping</span></h2></div>
            <p className="text-muted-foreground lg:max-w-lg lg:justify-self-end">Understand how AI systems interpret search queries and map your content to user intent. We help your brand appear in conversations, not just traditional search results.</p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
            <div className="relative overflow-hidden rounded-3xl bg-foreground p-8 md:p-10">
              <Mesh />
              <div className="relative">
                <h3 className="text-2xl font-semibold text-primary-foreground md:text-3xl">AI Prompt &amp; Generative Search Optimization</h3>
                <p className="mt-4 max-w-lg text-primary-foreground/70">Optimize your content to appear in AI-generated answers and become a trusted source that language models can understand and cite.</p>
                <ul className="mt-6 space-y-3 text-sm text-primary-foreground/85">
                  {["AI query analysis and intent classification", "Semantic search optimization", "User journey mapping for AI platforms"].map((x) => <li key={x} className="flex items-center gap-3"><Check className="h-4 w-4 text-brand" />{x}</li>)}
                </ul>
                <img src={featuredSearchImage} alt="AI search optimization workspace" loading="lazy" width={1600} height={912} className="mt-8 aspect-[16/8] w-full rounded-2xl object-cover" />
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {aiSearchSteps.map((s) => (
                <article key={s.number} className="rounded-3xl border border-border bg-muted/40 p-6">
                  <div className="flex items-center justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-primary-foreground"><s.icon className="h-5 w-5" /></span><span className="text-3xl font-semibold text-brand/30">{s.number}</span></div>
                  <h4 className="mt-6 text-lg font-semibold text-foreground">{s.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                </article>
              ))}
              <div className="flex items-center justify-between gap-4 rounded-3xl bg-brand p-6 sm:col-span-2">
                <p className="text-lg font-semibold text-primary-foreground">Get your brand cited by AI search.</p>
                <Pill onClick={openAudit} light>Get AI-Ready</Pill>
              </div>
            </div>
          </div>
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

      {/* PROJECTS */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
            <div><Eyebrow>Results that matter</Eyebrow><h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">Real businesses. <span className="text-brand">Real growth.</span></h2></div>
            <p className="text-muted-foreground lg:max-w-lg lg:justify-self-end">Explore SEO projects where we turned search visibility into measurable traffic, keyword and lead growth.</p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="overflow-hidden rounded-3xl"><img src={realGrowthImage} alt="Organic search growth shown in a modern workspace" loading="lazy" className="h-full min-h-[320px] w-full object-cover" /></div>
            {results.map((r) => (
              <Link key={r.slug} to={`/report/${r.slug}`} className="group overflow-hidden rounded-3xl border border-border bg-background">
                <div className="aspect-[16/10] overflow-hidden bg-muted"><img src={r.image} alt={`${r.name} SEO report`} loading="lazy" className="h-full w-full object-cover object-left-top transition duration-500 group-hover:scale-105" /></div>
                <div className="p-6">
                  <p className="text-xs text-muted-foreground">{r.type}</p>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{r.name}</h3>
                  <div className="mt-4 grid grid-cols-3 gap-2 border-y border-border py-4">
                    {r.metrics.map(([v, l]) => <div key={l}><p className="text-lg font-semibold text-brand">{v}</p><p className="text-[11px] text-muted-foreground">{l}</p></div>)}
                  </div>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground group-hover:text-brand">Read case study <ArrowRight className="h-4 w-4" /></span>
                </div>
              </Link>
            ))}
          </div>
          <p className="mt-10 text-center text-muted-foreground"><span className="mr-2 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-primary-foreground">Free</span>See more client results. <Link to="/our-work" className="font-semibold text-foreground underline underline-offset-4 hover:text-brand">Explore Our Work.</Link></p>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="container mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow>Why choose The Super 30</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">More than an SEO agency — <span className="text-brand">your growth partner.</span></h2>
            <p className="mt-5 text-muted-foreground">A team of specialists combining search expertise, AI visibility and accountable execution around your business goals.</p>
            <div className="mt-8 space-y-4">
              {[
                { icon: Target, t: "Data-driven strategy", d: "Every decision is backed by search data, competitor research and your business goals." },
                { icon: BarChart3, t: "Transparent reporting", d: "Clear dashboards that connect rankings to traffic, leads and revenue." },
                { icon: ShieldCheck, t: "Business-first approach", d: "We focus on measurable outcomes like enquiries and sales — not just rankings." },
              ].map((x) => (
                <div key={x.t} className="flex gap-4 rounded-2xl border border-border bg-background p-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand text-primary-foreground"><x.icon className="h-5 w-5" /></span>
                  <div><h3 className="font-semibold text-foreground">{x.t}</h3><p className="mt-1 text-sm text-muted-foreground">{x.d}</p></div>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6"><Pill onClick={openAudit}>Get My Free SEO Audit</Pill><Rating /></div>
          </div>
          <div className="grid grid-cols-2 gap-5">
            <div className="space-y-5">
              <img src={partnerImage} alt="The Super 30 SEO team collaborating" loading="lazy" className="aspect-[4/5] w-full rounded-3xl object-cover" />
            </div>
            <div className="space-y-5 pt-12">
              <div className="rounded-3xl bg-foreground p-6 text-primary-foreground">
                <TrendingUp className="h-6 w-6 text-brand" />
                <p className="mt-4 text-4xl font-semibold">300%+</p>
                <p className="text-sm text-primary-foreground/70">Average Traffic Growth</p>
              </div>
              <img src={heroImage} alt="Search performance workspace" loading="lazy" className="aspect-square w-full rounded-3xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Eyebrow>Our process</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">A simple, proven <span className="text-brand">path to growth.</span></h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">From audit to scale, we follow a structured process designed for long-term search growth.</p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {process.map(([n, t, c]) => (
              <div key={n} className="group rounded-3xl border border-border bg-background p-7 transition hover:border-brand">
                <span className="inline-flex rounded-full bg-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-brand">Step {n}</span>
                <h3 className="mt-6 text-xl font-semibold text-foreground">{t}</h3>
                <p className="mt-2 text-muted-foreground">{c}</p>
              </div>
            ))}
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
