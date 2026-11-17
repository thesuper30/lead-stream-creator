import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { UnifiedCTASection } from "@/components/landing/UnifiedCTASection";
import { ClientLogosSection } from "@/components/landing/ClientLogosSection";
import { FAQSection } from "@/components/landing/FAQSection";

import { TeamSection } from "@/components/about/TeamSection";
import { InteractiveTimeline } from "@/components/about/InteractiveTimeline";

import { CultureSection } from "@/components/about/CultureSection";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/home-agency-team.jpg";
import "./About.css";
import {
  ArrowRight,
  Bot,
  Target,
  Users,
  Award,
  Shield,
  Heart,
  CheckCircle2,
  Sparkles,
  Play,
} from "lucide-react";

const values = [
  {
    icon: Bot,
    title: "AI-First Innovation",
    description: "We stay ahead by embracing AI as a core part of everything we do.",
  },
  {
    icon: Target,
    title: "Results Obsession",
    description: "We measure success by your business outcomes, not vanity metrics.",
  },
  {
    icon: Shield,
    title: "Radical Transparency",
    description: "No hidden fees, no jargon. You always know exactly what we're doing.",
  },
  {
    icon: Heart,
    title: "Client Partnership",
    description: "Your success is our success. We're invested in your long-term growth.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>Internet Marketing Agency With 30+ Digital Marketing Experts</title>
        <meta name="twitter:url" content="https://www.thesuper30.ai/internet-marketing-agency" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Meet 30+ experts at TheSuper30, a leading internet marketing company. SEO, design, content, ads and web under one roof. Trusted by 300+ businesses." />
        <meta name="keywords" content="Internet marketing agency, Digital Marketing Experts, Internet marketing Company, Online marketing agency, Online marketing Company" />
        <link rel="canonical" href="https://www.thesuper30.ai/internet-marketing-agency" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Meet the 30+ Experts Behind Every Campaign We Run." />
        <meta property="og:description" content="Real people. Real strategies. AI-powered results. See the team that scales brands &amp; drives ROI." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thesuper30.ai/internet-marketing-agency" />
        <meta property="og:image" content="https://www.thesuper30.ai/super30-social-logo.jpg" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Meet the 30+ Experts Behind Every Campaign We Run." />
        <meta name="twitter:description" content="Real people. Real strategies. AI-powered results. See the team that scales brands &amp; drives ROI." />
        <meta name="twitter:image" content="https://www.thesuper30.ai/super30-social-logo.jpg" />
        
      </Helmet>

      <Navbar />

      <main className="about-page min-h-screen pt-16 md:pt-20">
        <section id="about-hero" className="about-hero">
          <img src={heroImage} alt="The digital marketing team collaborating on a growth strategy" fetchPriority="high" />
          <div className="container mx-auto py-16 md:py-24">
            <p className="about-eyebrow">— 10+ Years of Excellence</p>
            <h1>The Best <span className="text-brand">Digital Marketing Experts</span> Driving Measurable Business Growth</h1>
            <p className="about-hero-description mt-6 text-base md:text-lg leading-relaxed">Success in today's digital landscape requires more than marketing tools. Our team of digital marketing experts combines industry experience, strategic insights, and performance driven execution to help businesses increase visibility, generate quality leads, and achieve sustainable growth.</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Button asChild size="lg" className="rounded-full bg-brand text-primary-foreground hover:bg-brand-dark"><Link to="/contact-us"><Users className="mr-2 h-4 w-4" />Get In Touch<ArrowRight className="ml-3 h-4 w-4" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="about-outline rounded-full"><Link to="/our-work"><Play className="mr-2 h-4 w-4" />See Our Work<ArrowRight className="ml-3 h-4 w-4" /></Link></Button>
            </div>
            <div className="about-proof">
              {[{ icon: Target, text: "300+ Projects" }, { icon: Award, text: "₹50Cr+ Revenue" }, { icon: Users, text: "50+ Clients" }, { icon: Shield, text: "AI-Powered Strategy" }].map(signal => <span key={signal.text}><signal.icon className="h-4 w-4 shrink-0 text-brand" />{signal.text}</span>)}
            </div>
            <div className="about-credentials">{["Ex-Google Experts", "AI-Powered Solutions", "Results-Driven"].map(cred => <span key={cred}>{cred}</span>)}</div>
          </div>
        </section>
        <div className="about-light"><ClientLogosSection /></div>
        <section id="about-mission" className="about-dark about-band">
          <div className="container mx-auto about-mission-grid">
            <div>
              <p className="about-eyebrow">— Our Mission</p>
              <h2 className="mb-6">A Human-Driven Internet Marketing Agency for the <span className="text-brand">AI Era</span></h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">We believe that a great internet marketing agency should act as a true partner to your business. Our online marketing agency works with total transparency and passion to turn complex growth goals into measurable results.</p>
              <p className="text-muted-foreground mb-6 leading-relaxed">Our internet marketing company combines ex-Google expertise with proprietary AI tools to deliver enterprise-grade results at founder-friendly prices.</p>
              <ul className="grid sm:grid-cols-2 gap-4">{["No long-term lock-ins", "Transparent pricing", "Results-based approach", "AI + Human expertise"].map(item => <li key={item} className="flex gap-3 items-center"><CheckCircle2 className="h-5 w-5 shrink-0 text-brand" />{item}</li>)}</ul>
            </div>
            <div className="about-values">{values.map(value => <article key={value.title} className="about-value"><value.icon /><h3>{value.title}</h3><p>{value.description}</p></article>)}</div>
          </div>
        </section>

        {/* Team Section */}
        <div id="about-team" className="about-light about-band">
          <TeamSection />
        </div>

        {/* Interactive Timeline */}
        <div id="about-timeline" className="about-dark about-band">
          <InteractiveTimeline />
        </div>


        {/* Culture Section */}
        <div id="about-culture" className="about-light about-band">
          <CultureSection />
        </div>

        <div id="about-cta" className="about-dark about-band">
          <UnifiedCTASection variant="dark" />
        </div>

        <div id="about-faq" className="about-light about-band">
          <FAQSection slug="internet-marketing-agency" />
        </div>

        <Footer />
      </main>
    </>
  );
};

export default About;
