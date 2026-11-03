import { lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, BarChart3, Bot, CheckCircle2, Eye, Phone, Search, Star, Target, TrendingUp, Users, Zap } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { WorkPortfolioTabs } from "@/components/work/WorkPortfolioTabs";
import { SeoAchievementsSection } from "@/components/landing/SeoAchievementsSection";
import heroImage from "@/assets/home-agency-team.jpg";
import strategyImage from "@/assets/home-strategy-session.jpg";
import seoTeamImage from "@/assets/home-seo-team.jpg";
import aiSeoImage from "@/assets/services/ai-seo-card.jpg";
import socialImage from "@/assets/services/social-media-card.jpg";
import webImage from "@/assets/services/web-design-card.jpg";
import emailImage from "@/assets/services/email-marketing-card.jpg";
import magicbricksLogo from "@/assets/clients/magicbricks.png";
import mamaearthLogo from "@/assets/clients/mamaearth.png";
import upgradLogo from "@/assets/clients/upgrad.png";
import tata1mgLogo from "@/assets/clients/tata1mg.png";
import shriramLogo from "@/assets/clients/shriram-properties.png";
import jainLogo from "@/assets/clients/jain-university.png";
import harvestLogo from "@/assets/clients/harvest-international.png";
import bhrighuLogo from "@/assets/clients/bhrighu-academy.png";
import smrLogo from "@/assets/clients/smr-university.png";
import atriaLogo from "@/assets/clients/atria-institute.png";
import amitTeam from "@/assets/team/amit-singh.png";
import mayankTeam from "@/assets/team/mayank-1.png";
import gaganTeam from "@/assets/team/gagan-vp-digital-marketing.jpg";
import praveenTeam from "@/assets/team/praveen-1.png";

const BlogSection = lazy(() => import("@/components/landing/BlogSection").then((m) => ({ default: m.BlogSection })));

const heroFeatures = [
  { icon: BarChart3, title: "Data-Driven Strategies", text: "Every campaign is guided by clear performance signals and measurable goals." },
  { icon: Bot, title: "AI-Powered Execution", text: "AI tools and automation make campaigns smarter, faster, and more responsive." },
  { icon: TrendingUp, title: "Focused On Your ROI", text: "More traffic, more leads, and more revenue — with transparent reporting." },
];

const services = [
  { title: "AI SEO", href: "/seo-company-bangalore", image: aiSeoImage, points: ["Technical SEO & content clusters", "AEO, AIO & GEO visibility", "Authority building"] },
  { title: "Lead Generation", href: "/lead-generation-agency-bangalore", image: strategyImage, points: ["Targeted paid campaigns", "Conversion-focused landing pages", "Funnel optimization"] },
  { title: "Social Media", href: "/social-media-marketing-agency-bangalore", image: socialImage, points: ["Platform strategy & calendars", "Community management", "Performance paid social"] },
  { title: "Design & Creative", href: "/graphic-design-agency-bangalore", image: emailImage, points: ["Brand-aligned design systems", "Scroll-stopping creatives", "Conversion visual assets"] },
  { title: "AI & Automation", href: "/digital-marketing-agency-bangalore", image: strategyImage, points: ["Workflow automation", "Predictive analytics", "Integrated marketing ops"] },
  { title: "Web Design & CRO", href: "/web-design-company-bangalore", image: webImage, points: ["UX design", "Conversion rate optimization", "Performance-focused builds"] },
];

const steps = [
  { title: "Discover", text: "We audit your website, search presence, and competitors to uncover the biggest growth gaps." },
  { title: "Strategize", text: "We build a data-driven plan across SEO, ads, social, and content around your business goals." },
  { title: "Execute", text: "Our 30-member team implements with AI-powered tools, creative, and continuous optimization." },
  { title: "Measure & Grow", text: "Transparent reporting on traffic, leads, and revenue — then we double down on what works." },
];

const whyUs = [
  { icon: Users, title: "30+ Expert Marketers", text: "Strategy, creative, media, and technology in one focused team." },
  { icon: Bot, title: "AI-Powered Strategies", text: "Smarter, faster, more responsive campaigns." },
  { icon: BarChart3, title: "Data-Driven Growth", text: "Guided by testing and measurable goals." },
  { icon: Zap, title: "Fast & Flexible", text: "Agile execution that adapts as priorities change." },
];

const logos = [magicbricksLogo, mamaearthLogo, upgradLogo, tata1mgLogo, shriramLogo, jainLogo, harvestLogo, bhrighuLogo, smrLogo, atriaLogo];

const Eyebrow = ({ children, light }: { children: string; light?: boolean }) => (
  <p className={`mb-3 text-sm font-semibold uppercase tracking-wider ${light ? "text-brand" : "text-brand"}`}>— {children}</p>
);

const PillCta = ({ to, children, href }: { to?: string; href?: string; children: string }) => {
  const cls = "group inline-flex items-center gap-3 rounded-full bg-brand py-1.5 pl-6 pr-1.5 text-sm font-semibold text-primary-foreground transition hover:bg-brand-dark";
  const inner = (<>{children}<span className="grid h-9 w-9 place-items-center rounded-full bg-background text-brand transition group-hover:rotate-45"><ArrowUpRight className="h-4 w-4" /></span></>);
  return href ? <a href={href} className={cls}>{inner}</a> : <Link to={to!} className={cls}>{inner}</Link>;
};

const Home2 = () => (
  <>
    <Helmet>
      <title>Homepage 2 | TheSuper30</title>
      <meta name="robots" content="noindex, nofollow" />
    </Helmet>
    <Navbar />
    <main className="min-h-screen bg-background pt-16 md:pt-20">
      {/* HERO */}
      <section className="relative overflow-hidden bg-foreground">
        <img src={heroImage} alt="Digital marketing team collaborating" className="absolute inset-0 h-full w-full object-cover" width={1600} height={1104} fetchPriority="high" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/75 to-foreground/40" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-foreground to-transparent" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-end gap-10 pb-12 pt-28 lg:grid-cols-[1.6fr_1fr] lg:pt-48">
            <div>
              <p className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-primary-foreground"><span className="h-2 w-2 rounded-full bg-brand" /> AI-powered digital marketing agency</p>
              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] text-primary-foreground sm:text-5xl lg:text-6xl">Real Marketing for Real <span className="text-brand">Business Growth.</span></h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-primary-foreground/80 md:text-lg">We combine AI, data, and human creativity to help brands get more traffic, more leads, and more revenue.</p>
              <div className="mt-8"><PillCta to="/contact-us">Book a Free Consultation</PillCta></div>
            </div>
            <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-7 backdrop-blur-md">
              <div className="flex items-start justify-between"><Search className="h-12 w-12 text-primary-foreground" strokeWidth={1.3} /><p className="text-5xl font-semibold text-primary-foreground">300%+</p></div>
              <h3 className="mt-8 text-xl font-semibold text-primary-foreground">Average Traffic Growth</h3>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/75">Measured across our clients' AI SEO and lead generation programs.</p>
            </div>
          </div>
          <div className="grid gap-8 border-t border-primary-foreground/15 py-10 md:grid-cols-3">
            {heroFeatures.map((f) => (
              <div key={f.title} className="flex gap-4">
                <f.icon className="h-10 w-10 shrink-0 text-brand" strokeWidth={1.4} />
                <div><h3 className="text-lg font-semibold text-primary-foreground">{f.title}</h3><p className="mt-1.5 text-sm leading-relaxed text-primary-foreground/75">{f.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative">
            <img src={seoTeamImage} alt="The Super30 SEO team" className="aspect-[4/5] w-4/5 rounded-3xl object-cover" width={1408} height={1056} loading="lazy" />
            <img src={strategyImage} alt="Strategy session" className="absolute bottom-0 right-0 aspect-square w-1/2 rounded-3xl border-8 border-background object-cover" loading="lazy" />
            <div className="absolute right-6 top-8 grid h-32 w-32 place-items-center rounded-full bg-brand text-primary-foreground">
              <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-[spin_14s_linear_infinite]"><defs><path id="c" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs><text className="fill-current text-[10px] font-semibold uppercase tracking-[3px]"><textPath href="#c">More About Us * More About Us * </textPath></text></svg>
              <ArrowUpRight className="h-7 w-7" />
            </div>
          </div>
          <div>
            <Eyebrow>Our Super30 Team</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">Team of <span className="text-brand">30 SEO Specialists</span></h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">A team of strategists, analysts and creators working together to rank brands higher — across SEO, AEO, AIO, GEO and beyond.</p>
            <div className="mt-8 grid gap-6 border-y border-border py-8 sm:grid-cols-2">
              <div className="flex gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-light text-brand"><Target className="h-5 w-5" /></span><div><h3 className="font-semibold text-foreground">Data-driven strategies</h3><p className="mt-1 text-sm text-muted-foreground">Clear signals guide every move.</p></div></div>
              <div className="flex gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand-light text-brand"><Eye className="h-5 w-5" /></span><div><h3 className="font-semibold text-foreground">Transparent reporting</h3><p className="mt-1 text-sm text-muted-foreground">Know exactly what's working.</p></div></div>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <PillCta to="/about">Meet Our Team</PillCta>
              <div className="flex items-center gap-3"><TrendingUp className="h-8 w-8 text-brand" /><p className="text-sm text-muted-foreground"><span className="block text-2xl font-semibold text-foreground">10,000+</span>Keywords ranked for clients</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-brand/5 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl"><Eyebrow>Our Services</Eyebrow><h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">End-to-end digital marketing solutions.</h2></div>
            <PillCta to="/digital-marketing-agency-bangalore">View All Services</PillCta>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Link key={s.title} to={s.href} className="group flex flex-col rounded-3xl border border-border bg-background p-7 transition hover:-translate-y-1 hover:border-brand/40">
                <div className="flex items-center justify-between"><span className="text-sm font-semibold text-brand">0{i + 1}</span><span className="grid h-10 w-10 place-items-center rounded-full bg-brand-light text-brand transition group-hover:bg-brand group-hover:text-primary-foreground"><ArrowUpRight className="h-4 w-4" /></span></div>
                <h3 className="mt-6 text-2xl font-semibold text-foreground">{s.title}</h3>
                <ul className="mt-4 space-y-2">{s.points.map((p) => <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground"><CheckCircle2 className="h-4 w-4 text-brand" />{p}</li>)}</ul>
                <img src={s.image} alt="" className="mt-6 aspect-[16/9] w-full rounded-2xl object-cover" loading="lazy" />
              </Link>
            ))}
          </div>
          <p className="mt-10 text-center text-muted-foreground">Let's turn your goals into measurable growth – <Link to="/contact-us" className="font-semibold text-brand underline underline-offset-4">Book a Free Consultation.</Link></p>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <Eyebrow>Why Us</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">Why We Are Your AI Growth Partner</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">We combine human creativity with AI-led insight to anticipate market shifts, sharpen decisions, and help brands grow profitably.</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {whyUs.map((w) => (
                <div key={w.title} className="rounded-2xl border border-border p-5"><w.icon className="h-7 w-7 text-brand" /><h3 className="mt-4 font-semibold text-foreground">{w.title}</h3><p className="mt-1 text-sm text-muted-foreground">{w.text}</p></div>
              ))}
            </div>
            <a href="tel:+918904150555" className="mt-8 inline-flex items-center gap-4"><span className="grid h-12 w-12 place-items-center rounded-full bg-brand text-primary-foreground"><Phone className="h-5 w-5" /></span><span><span className="block text-sm text-muted-foreground">Talk to an expert</span><span className="text-lg font-semibold text-foreground">+91 89041 50555</span></span></a>
          </div>
          <div className="relative">
            <img src={heroImage} alt="Team at work" className="aspect-[4/5] w-full rounded-3xl object-cover" loading="lazy" />
            <div className="absolute bottom-6 left-6 rounded-2xl bg-background p-5 shadow-lg"><p className="text-3xl font-semibold text-foreground">$2M+</p><p className="text-sm text-muted-foreground">Revenue generated</p></div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center"><Eyebrow>How It Works</Eyebrow><h2 className="text-3xl font-semibold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">A simple, proven path to growth.</h2></div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="rounded-3xl border border-primary-foreground/15 bg-primary-foreground/5 p-7">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-brand text-lg font-semibold text-primary-foreground">0{i + 1}</span>
                <h3 className="mt-6 text-xl font-semibold text-primary-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-primary-foreground/70">{s.text}</p>
                <p className="mt-6 border-t border-primary-foreground/15 pt-4 text-xs font-semibold uppercase tracking-wider text-brand">Step 0{i + 1}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WorkPortfolioTabs homePreview />
      <SeoAchievementsSection />

      {/* TEAM */}
      <section className="bg-brand/5 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><Eyebrow>The people behind the work</Eyebrow><h2 className="text-3xl font-semibold text-foreground sm:text-4xl lg:text-5xl">Meet Our <span className="text-brand">Super 30</span></h2></div>
            <PillCta to="/about">Meet the whole team</PillCta>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
            {[{ n: "Amit Singh", r: "Co-Founder", i: amitTeam }, { n: "Mayank", r: "VP - Business Growth", i: mayankTeam }, { n: "Gagan", r: "VP - Digital Marketing", i: gaganTeam }, { n: "Praveen", r: "Senior Creative Manager", i: praveenTeam }].map((m) => (
              <div key={m.n} className="overflow-hidden rounded-3xl bg-background"><img src={m.i} alt={m.n} width={800} height={1000} className="aspect-[4/5] w-full object-cover object-top" loading="lazy" /><div className="p-4"><h3 className="font-semibold text-foreground">{m.n}</h3><p className="text-sm text-muted-foreground">{m.r}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
          <div>
            <div className="flex gap-1">{[1, 2, 3, 4, 5].map((i) => <Star key={i} className="h-5 w-5 fill-brand text-brand" />)}</div>
            <p className="mt-3 text-sm text-muted-foreground">4.8/5 Client Rating</p>
            <Eyebrow>Our Clients</Eyebrow>
            <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Trusted by 50+ leading companies across industries</h2>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-5">
            {logos.map((l, i) => <div key={i} className="grid h-24 place-items-center rounded-2xl border border-border bg-background p-4"><img src={l} alt="Client logo" className="max-h-12 w-auto object-contain" loading="lazy" /></div>)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-foreground px-8 py-12 md:flex-row md:items-center md:px-12">
            <div><Eyebrow>Let's grow together</Eyebrow><h2 className="text-3xl font-semibold text-primary-foreground md:text-4xl">Ready to turn your growth goals into a clearer plan?</h2></div>
            <PillCta to="/contact-us">Book a Free Consultation</PillCta>
          </div>
        </div>
      </section>

      <Suspense fallback={null}><BlogSection /></Suspense>
      <Footer />
    </main>
  </>
);

export default Home2;
