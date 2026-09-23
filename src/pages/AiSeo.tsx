import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { StickyCTA } from "@/components/landing/StickyCTA";
import { Helmet } from "react-helmet-async";
import { AiSeoReferencePage } from "@/components/landing/AiSeoReferencePage";

const AiSeo = () => {
  return (
    <>
      <Helmet>
        <title>SEO Company in Bangalore | #1 AI-Driven SEO Services Agency</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Struggling to get organic leads? Trusted SEO agency in Bangalore delivering AI powered SEO services with 3x visibility &amp; 300% traffic growth. Book a free call" />
        <meta name="keywords" content="AI seo services in bangalore, AI seo agency in bangalore, AI seo company in bangalore, seo services in bangalore, seo agency in bangalore, seo company in bangalore, search engine optimization services in bangalore, search engine optimization company in bangalore" />
        <link rel="canonical" href="https://www.thesuper30.ai/seo-company-bangalore" />
        <meta property="og:title" content="Your Competitors Are Ranking on Google. Why Aren't You?" />
        <meta property="og:description" content="3x visibility boost. 300% traffic growth. AI-powered SEO that dominates Google &amp; AI search results!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.thesuper30.ai/seo-company-bangalore" />
        <meta property="og:image" content="https://www.thesuper30.ai/super30-social-logo.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Your Competitors Are Ranking on Google. Why Aren't You?" />
        <meta name="twitter:description" content="3x visibility boost. 300% traffic growth. AI-powered SEO that dominates Google &amp; AI search results!" />
        <meta name="twitter:image" content="https://www.thesuper30.ai/super30-social-logo.jpg" />
        <meta name="twitter:url" content="https://www.thesuper30.ai/seo-company-bangalore" />
      </Helmet>

      <Navbar />

      <main className="min-h-screen pt-16 md:pt-20">
        <div id="ai-seo-hero"><AiSeoReferencePage /></div>
        <Footer />
      </main>

      <StickyCTA onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />
    </>
  );
};

export default AiSeo;
