import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Award, MessageCircle, Search } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { ClientLogosSection } from "@/components/landing/ClientLogosSection";
import { TestimonialSection } from "@/components/landing/TestimonialSection";
import { BlogSection } from "@/components/landing/BlogSection";
import { WorkPortfolioTabs } from "@/components/work/WorkPortfolioTabs";
import { WorkFinalCTASection } from "@/components/work/WorkFinalCTASection";
import { Button } from "@/components/ui/button";
import { EnquiryPopup } from "@/components/EnquiryPopup";
import { AuditChoicePopup } from "@/components/popups/AuditChoicePopup";
import heroImage from "@/assets/home-agency-team.jpg";
import "./Work2.css";

const Work2 = () => {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [auditOpen, setAuditOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Our Work 2 | Digital Marketing Results | The Super 30</title>
        <meta name="description" content="Explore The Super 30's work across SEO, lead generation, brand identity, social creatives, UGC and product photography." />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:title" content="Our Work | The Super 30" />
        <meta property="og:description" content="Digital marketing, creative work and results for growing brands. Explore The Super 30 portfolio." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar />
      <main className="work2 min-h-screen pt-16 md:pt-20">
        <section className="work2-hero" id="work-hero">
          <img src={heroImage} alt="Digital marketing team collaborating on client campaigns" className="work2-hero-image" fetchPriority="high" />
          <div className="container mx-auto py-16 md:py-24">
            <p className="work2-eyebrow">— 300+ Proven Success Stories</p>
            <h1>Successfully Achieved Digital Marketing Growth <span className="text-brand">for 300+ Brands</span></h1>
            <p className="work2-hero-description mt-6 text-base leading-relaxed md:text-lg">From emerging startups to established enterprises, Meet leading brands in Bangalore that grew sustainably with TheSuper30. Highly successful digital marketing case studies and performance, with 98% client satisfaction in SEO, ads, web and design.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" onClick={() => setAuditOpen(true)} className="rounded-full bg-brand text-primary-foreground hover:bg-brand-dark"><Search className="mr-2 h-4 w-4" />Get Free Audit &amp; Strategy<ArrowRight className="ml-3 h-4 w-4" /></Button>
              <Button size="lg" variant="outline" onClick={() => setEnquiryOpen(true)} className="work2-outline rounded-full"><MessageCircle className="mr-2 h-4 w-4" />Enquire Now<ArrowRight className="ml-3 h-4 w-4" /></Button>
            </div>
            <div className="work2-credentials">
              {["AI SEO Experts", "Performance Marketing", "Data-Driven Results"].map((label) => <span key={label}><Award className="h-4 w-4 text-brand" />{label}</span>)}
            </div>
          </div>
        </section>
        <div className="work2-brands"><ClientLogosSection /></div>
        <div className="work2-portfolio" id="work-portfolio"><WorkPortfolioTabs dark /></div>
        <div className="work2-testimonials" id="work-testimonials"><TestimonialSection /></div>
        <div className="work2-insights" id="work-blog"><BlogSection dark /></div>
        <div className="work2-final" id="work-final-cta"><WorkFinalCTASection /></div>
        <Footer />
      </main>
      <EnquiryPopup open={enquiryOpen} onOpenChange={setEnquiryOpen} />
      <AuditChoicePopup open={auditOpen} onOpenChange={setAuditOpen} />
    </>
  );
};

export default Work2;