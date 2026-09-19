import { lazy, Suspense, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  CirclePlay,
  Code2,
  Eye,
  GraduationCap,
  HeartPulse,
  Hotel,
  Megaphone,
  Palette,
  Search,
  ShoppingBag,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/home-agency-team.jpg";
import strategyImage from "@/assets/home-strategy-session.jpg";
import aiSeoImage from "@/assets/services/ai-seo-card.jpg";
import socialImage from "@/assets/services/social-media-card.jpg";
import webImage from "@/assets/services/web-design-card.jpg";
import emailImage from "@/assets/services/email-marketing-card.jpg";
import suranaCase from "@/assets/case-studies/surana-educational.png";
import magicbricksCase from "@/assets/case-studies/magicbricks.png";
import mamaearthCase from "@/assets/case-studies/mamaearth.png";
import auditImage from "@/assets/process/step-audit.jpg";
import strategyStepImage from "@/assets/process/step-strategy.jpg";
import launchImage from "@/assets/process/step-launch.jpg";
import reportingImage from "@/assets/process/step-reporting.jpg";
import magicbricksLogo from "@/assets/clients/magicbricks.png";
import mamaearthLogo from "@/assets/clients/mamaearth.png";
import upgradLogo from "@/assets/clients/upgrad.png";
import tata1mgLogo from "@/assets/clients/tata1mg.png";
import shriramLogo from "@/assets/clients/shriram-properties.png";
import jainLogo from "@/assets/clients/jain-university.png";
import indEcommerce from "@/assets/ind-ecommerce.jpg";
import indSaas from "@/assets/ind-saas.jpg";
import indLifestyle from "@/assets/ind-lifestyle.jpg";
import indRealEstate from "@/assets/ind-real-estate.jpg";
import indEducation from "@/assets/ind-education.jpg";
import indHospitality from "@/assets/ind-hospitality.jpg";

const BlogSection = lazy(() => import("@/components/landing/BlogSection").then((m) => ({ default: m.BlogSection })));
const FAQSection = lazy(() => import("@/components/landing/FAQSection").then((m) => ({ default: m.FAQSection })));

const services = [
  { icon: Search, title: "AI SEO", text: "Build visibility across Google and AI search with technical, content, and authority systems.", href: "/seo-company-bangalore", image: aiSeoImage },
  { icon: Target, title: "Lead Generation", text: "Turn intent into qualified enquiries through focused paid campaigns and conversion journeys.", href: "/lead-generation-agency-bangalore", image: strategyImage },
  { icon: Megaphone, title: "Social Media", text: "Create a brand people recognize, follow, and remember across every social touchpoint.", href: "/social-media-marketing-agency-bangalore", image: socialImage },
  { icon: Palette, title: "Design & Creative", text: "Give campaigns the visual clarity and creative strength they need to earn attention.", href: "/graphic-design-agency-bangalore", image: emailImage },
  { icon: Bot, title: "AI & Automation", text: "Connect faster workflows, sharper insights, and smarter customer communication.", href: "/digital-marketing-agency-bangalore", image: strategyImage },
  { icon: Code2, title: "Web Design & CRO", text: "Build fast, persuasive digital experiences designed to move visitors toward action.", href: "/web-design-company-bangalore", image: webImage },
];

const industries = [
  { icon: ShoppingBag, label: "Ecommerce", href: "/ecommerce-marketing-agency-bangalore", image: indEcommerce, text: "Stores, marketplaces & D2C brands" },
  { icon: Sparkles, label: "SaaS", href: "/industries/technology", image: indSaas, text: "Software & tech products" },
  { icon: HeartPulse, label: "Lifestyle", href: "/industries/lifestyle", image: indLifestyle, text: "Wellness, beauty & retail" },
  { icon: BarChart3, label: "Real Estate", href: "/industries/real-estate", image: indRealEstate, text: "Builders, developers & brokers" },
  { icon: GraduationCap, label: "Education", href: "/digital-marketing-for-coaching-institutes", image: indEducation, text: "Institutes, coaching & ed-tech" },
  { icon: Hotel, label: "Hospitality", href: "/industries/hospitality", image: indHospitality, text: "Hotels, resorts & venues" },
];

const differenceRows = [
  { matter: "Strategy & Execution", super30: "End-to-end, ROI focused", others: "Only execution or limited strategy" },
  { matter: "Use of AI & Automation", super30: "Integrated across all services", others: "Minimal or no AI adoption" },
  { matter: "Reporting & Transparency", super30: "Real-time, transparent reporting", others: "Basic, delayed reports" },
  { matter: "Focus on Business Outcomes", super30: "Revenue & long-term growth", others: "Focus on vanity metrics" },
  { matter: "Dedicated Expert Team", super30: "Senior specialists, hands-on", others: "Junior resources, high turnover" },
  { matter: "Flexibility & Personalization", super30: "Tailored to your business goals", others: "One-size-fits-all approach" },
];

const caseStudies = [
  { title: "Surana Educational Institutions", service: "AI SEO & Content", image: suranaCase },
  { title: "Magicbricks", service: "Integrated Digital Growth", image: magicbricksCase },
  { title: "Mamaearth", service: "Ecommerce Marketing", image: mamaearthCase },
];

const process = [
  { number: "01", title: "Discover", text: "Understand your market, goals, and growth constraints.", image: auditImage },
  { number: "02", title: "Strategize", text: "Shape a focused, data-led plan around your priorities.", image: strategyStepImage },
  { number: "03", title: "Execute", text: "Launch coordinated creative, media, search, and web work.", image: launchImage },
  { number: "04", title: "Improve", text: "Read the signal, report clearly, and keep refining performance.", image: reportingImage },
];

const clientLogos = [
  { src: magicbricksLogo, name: "Magicbricks" },
  { src: mamaearthLogo, name: "Mamaearth" },
  { src: upgradLogo, name: "upGrad" },
  { src: tata1mgLogo, name: "Tata 1mg" },
  { src: shriramLogo, name: "Shriram Properties" },
  { src: jainLogo, name: "Jain University" },
];

const heroUsps = [
  { icon: BarChart3, label: "Data-driven strategies" },
  { icon: Bot, label: "AI-powered execution" },
  { icon: Eye, label: "Transparent reporting" },
  { icon: TrendingUp, label: "Focused on your ROI" },
];

const SectionIntro = ({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) => (
  <div className="max-w-2xl">
    <p className="mb-3 text-xs font-semibold uppercase text-brand">— {eyebrow}</p>
    <h2 className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">{title}</h2>
    {copy && <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{copy}</p>}
  </div>
);

const Home = () => {
  const [activeRow, setActiveRow] = useState(0);
  return (
  <>
    <Helmet>
      <title>Digital Marketing Agency &amp; AI Growth Company | TheSuper30</title>
      <meta name="description" content="A leading AI-driven digital marketing agency helping businesses achieve real ROI and scalable growth with proven strategies. Book a free consultation now." />
      <meta name="keywords" content="Digital Marketing Agency, Digital Marketing Company, AI digital marketing agency, AI Digital Marketing Company, AI based digital marketing agency" />
      <link rel="canonical" href="https://www.thesuper30.ai/" />
      <meta property="og:title" content="Stop Guessing. Start Growing With AI-Powered Marketing." />
      <meta property="og:description" content="From strategy to execution, Super 30 delivers measurable revenue growth. Book your free call now." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.thesuper30.ai/" />
      <meta property="og:image" content="https://www.thesuper30.ai/super30-social-logo.jpg" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Stop Guessing. Start Growing With AI-Powered Marketing." />
      <meta name="twitter:description" content="From strategy to execution, Super 30 delivers measurable revenue growth. Book your free call now." />
      <meta name="twitter:image" content="https://www.thesuper30.ai/super30-social-logo.jpg" />
      <meta name="robots" content="index, follow" />
    </Helmet>

    <Navbar />
    <main className="min-h-screen bg-background pt-16 md:pt-20">
      <section className="relative overflow-hidden border-b border-border bg-background lg:min-h-[590px]">
        <div className="relative h-[330px] overflow-hidden sm:h-[390px] lg:absolute lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[66%]">
          <img src={heroImage} alt="Digital marketing team collaborating in a bright office" className="absolute inset-0 h-full w-full object-cover object-center" width={1600} height={1104} fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent lg:bg-gradient-to-r lg:from-background lg:via-background/25 lg:to-transparent" />
          <div className="absolute right-5 top-5 hidden text-left lg:block xl:right-9 xl:top-8">
            <p className="text-xl font-semibold leading-[1.35] text-foreground xl:text-2xl">Ideas<br />Strategy<br />Execution<br />Growth</p>
            <span className="mt-3 block h-1 w-12 bg-brand" />
          </div>
          <div className="absolute bottom-5 right-5 rounded-lg border border-border bg-background/95 p-4 shadow-xl backdrop-blur-md sm:bottom-7 sm:right-7 lg:bottom-10 lg:right-10">
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-md bg-brand-light text-brand"><BarChart3 className="h-6 w-6" /></span>
              <div><p className="text-2xl font-semibold text-foreground">300%+</p><p className="max-w-[125px] text-[11px] leading-snug text-muted-foreground">Average traffic growth</p></div>
            </div>
          </div>
        </div>

        <div className="relative z-10 -mt-1 px-5 pb-7 sm:px-8 sm:pb-9 lg:mt-0 lg:flex lg:min-h-[590px] lg:w-[50%] lg:flex-col lg:justify-center lg:pl-16 lg:pr-6 lg:py-12 xl:pl-24">
          <p className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-brand/20 bg-brand-light px-3 py-1.5 text-[10px] font-semibold uppercase text-brand sm:text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-brand" /> AI-powered digital marketing agency
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold leading-[1.02] text-foreground sm:text-5xl lg:text-6xl">
            Real Marketing<br />for Real<br /><span className="text-brand">Business Growth.</span>
          </h1>
          <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            We combine AI, data, and human creativity to help brands get more traffic, more leads, and more revenue.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg" className="rounded-full bg-brand px-7 text-primary-foreground hover:bg-brand-dark">
              <Link to="/contact-us">Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full bg-background/75 px-7 backdrop-blur-sm">
              <Link to="/our-work"><CirclePlay className="mr-2 h-4 w-4 fill-brand text-brand" />Watch Our Story</Link>
            </Button>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4 lg:max-w-[610px]">
            {heroUsps.map(({ icon: Icon, label }) => (
              <div key={label} className="flex min-w-0 items-center gap-2.5">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-brand-light text-brand"><Icon className="h-4 w-4" /></span>
                <span className="text-[11px] font-medium leading-tight text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <p className="mb-7 text-center text-[11px] font-semibold uppercase text-muted-foreground">Trusted by ambitious brands</p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="animate-marquee flex w-max items-center gap-16 pr-16">
              {[...clientLogos, ...clientLogos].map((logo, i) => (
                <img key={`${logo.name}-${i}`} src={logo.src} alt={logo.name} className="h-12 w-auto max-w-[180px] object-contain md:h-14 md:max-w-[200px]" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16">
          <div className="relative overflow-hidden rounded-lg">
            <img src={strategyImage} alt="Growth team studying live marketing performance" className="aspect-[4/3] w-full object-cover" width={1408} height={1008} loading="lazy" />
          </div>
          <div>
            <SectionIntro eyebrow="About The Super 30" title="A growth partner built for what comes next." copy="Strategy, search, media, creative, and technology work together here. One connected team keeps every decision focused on the business outcome." />
            <div className="mt-8 grid grid-cols-2 gap-6 border-y border-border py-7 sm:grid-cols-4">
              {[["300%+", "Growth"], ["50+", "Audits"], ["$2M+", "Revenue"], ["4.9/5", "Rating"]].map(([value, label]) => <div key={label}><p className="text-2xl font-semibold text-foreground">{value}</p><p className="mt-1 text-xs text-muted-foreground">{label}</p></div>)}
            </div>
            <Button asChild className="mt-8 rounded-full bg-brand text-primary-foreground hover:bg-brand-dark"><Link to="/internet-marketing-agency">Our Story <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><SectionIntro eyebrow="Our Services" title="End-to-end digital marketing solutions." /><Link to="/digital-marketing-agency-bangalore" className="inline-flex items-center text-sm font-semibold text-brand">View all services <ArrowRight className="ml-2 h-4 w-4" /></Link></div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Link key={service.title} to={service.href} className="group overflow-hidden rounded-lg border border-border bg-background transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="relative aspect-[16/8] overflow-hidden"><img src={service.image} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" /><div className="absolute inset-0 bg-foreground/10" /></div>
                <div className="p-6"><service.icon className="mb-5 h-6 w-6 text-brand" /><h3 className="text-xl font-semibold text-foreground">{service.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.text}</p><span className="mt-5 inline-flex items-center text-sm font-semibold text-brand">Explore <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><SectionIntro eyebrow="Industries We Serve" title="Growth marketing shaped for your market." /><Link to="/industries" className="inline-flex items-center text-sm font-semibold text-brand">Explore industries <ArrowRight className="ml-2 h-4 w-4" /></Link></div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {industries.map((industry) => (
              <Link key={industry.label} to={industry.href} className="group relative overflow-hidden rounded-2xl border border-border bg-background transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={industry.image} alt={`${industry.label} marketing`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" width={768} height={960} />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/10 to-transparent" />
                  <span className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background/90 text-foreground backdrop-blur transition group-hover:bg-brand group-hover:text-primary-foreground">
                    <industry.icon className="h-4 w-4" />
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <div>
                    <h3 className="text-base font-semibold text-foreground">{industry.label}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{industry.text}</p>
                  </div>
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition group-hover:border-brand group-hover:bg-brand group-hover:text-primary-foreground">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end"><SectionIntro eyebrow="Featured Work" title="Real brands. Connected growth stories." /><Link to="/our-work" className="inline-flex items-center text-sm font-semibold text-brand">See all work <ArrowRight className="ml-2 h-4 w-4" /></Link></div>
          <div className="grid gap-4 lg:grid-cols-3">
            {caseStudies.map((item) => <Link to="/our-work" key={item.title} className="group relative min-h-[350px] overflow-hidden rounded-lg"><img src={item.image} alt={`${item.title} case study`} className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105" loading="lazy" /><div className="absolute inset-0 bg-gradient-to-t from-foreground via-foreground/20 to-transparent" /><div className="absolute inset-x-0 bottom-0 p-6"><span className="rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground">{item.service}</span><h3 className="mt-3 text-2xl font-semibold text-primary-foreground">{item.title}</h3><span className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-background text-foreground"><ArrowRight className="h-4 w-4" /></span></div></Link>)}
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-brand">The Super 30 Difference</p>
              <h2 className="mt-3 max-w-xl text-3xl font-semibold leading-tight text-foreground md:text-4xl">Not Just Another Agency.<br />A True Growth Partner.</h2>
            </div>
            <Link to="/about" className="inline-flex items-center text-sm font-semibold text-brand">See Why We’re Different <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </div>
          <p className="mt-6 text-xs font-medium uppercase tracking-wider text-muted-foreground">Tap a row to compare</p>
          <div className="mt-3 grid gap-4 lg:grid-cols-[0.9fr_1.1fr_1fr]">
            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
              <div className="min-h-[48px] pb-4" aria-hidden="true" />
              {differenceRows.map((row, i) => (
                <button
                  key={row.matter}
                  type="button"
                  onClick={() => setActiveRow(i)}
                  onMouseEnter={() => setActiveRow(i)}
                  className={`flex w-full items-center justify-between gap-2 border-t border-border py-4 text-left text-sm font-medium transition-all duration-300 ${activeRow === i ? "text-brand" : "text-foreground hover:text-brand/70"}`}
                >
                  {row.matter}
                  <span className={`h-1.5 w-1.5 shrink-0 rounded-full bg-brand transition-all duration-300 ${activeRow === i ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} />
                </button>
              ))}
            </div>
            <div className="relative rounded-2xl bg-brand-light p-6 shadow-md ring-1 ring-brand/20">
              <p className="min-h-[48px] pb-4 text-center text-2xl font-semibold tracking-tight text-foreground">super<span className="text-brand">30</span></p>
              {differenceRows.map((row, i) => (
                <p
                  key={row.matter}
                  className={`flex items-center gap-3 border-t border-brand/10 px-2 py-4 text-sm font-medium rounded-lg transition-all duration-300 ${activeRow === i ? "translate-x-1 bg-background/70 text-foreground shadow-sm" : "text-foreground/70"}`}
                >
                  <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand transition-transform duration-300 ${activeRow === i ? "scale-110" : ""}`}><Check className="h-3.5 w-3.5 text-primary-foreground" /></span>
                  {row.super30}
                </p>
              ))}
            </div>
            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
              <p className="min-h-[48px] pb-4 text-center text-sm font-semibold text-muted-foreground">Other Agencies</p>
              {differenceRows.map((row, i) => (
                <p
                  key={row.matter}
                  className={`flex items-center gap-3 border-t border-border py-4 text-sm transition-all duration-300 ${activeRow === i ? "text-foreground" : "text-muted-foreground"}`}
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-muted"><X className="h-3.5 w-3.5 text-muted-foreground" /></span>
                  {row.others}
                </p>
              ))}
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center gap-3 text-center">
            <Button asChild size="lg" className="rounded-full bg-brand text-primary-foreground hover:bg-brand-dark"><Link to="/contact-us">Experience the Difference <ArrowRight className="ml-2 h-4 w-4" /></Link></Button>
            <p className="text-xs text-muted-foreground">Start with a free growth audit — no commitments, just clarity.</p>
          </div>
        </div>
      </section>

      <section className="bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto px-4"><SectionIntro eyebrow="Our Process" title="A simple path from ambition to action." copy="Every engagement begins with context, moves through a focused plan, and improves through transparent learning." />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {process.map((step) => <div key={step.number} className="overflow-hidden rounded-lg border border-border bg-background"><img src={step.image} alt="" className="aspect-[16/9] w-full object-cover" loading="lazy" /><div className="p-5"><span className="text-3xl font-semibold text-brand">{step.number}</span><h3 className="mt-4 text-lg font-semibold text-foreground">{step.title}</h3><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p></div></div>)}
          </div>
        </div>
      </section>

      <section className="bg-background py-10 md:py-16">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-10 md:px-12 md:py-14 lg:flex lg:items-center lg:justify-between lg:gap-12">
            <div className="max-w-2xl"><p className="text-xs font-semibold uppercase text-brand">Let’s grow together</p><h2 className="mt-4 text-3xl font-semibold text-primary-foreground md:text-4xl">Ready to turn your growth goals into a clearer plan?</h2><p className="mt-4 text-base text-primary-foreground/70">Book a free consultation and talk through the opportunities that matter most to your business.</p></div>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0"><Button asChild size="lg" className="rounded-full bg-brand text-primary-foreground hover:bg-brand-dark"><Link to="/contact-us">Book a Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline-white" className="rounded-full"><a href="tel:+918904150555"><Users className="mr-2 h-4 w-4" />Talk to Our Team</a></Button></div>
          </div>
        </div>
      </section>

      <Suspense fallback={null}><BlogSection /><FAQSection slug="home" /></Suspense>
      <Footer />
    </main>
  </>
  );
};

export default Home;