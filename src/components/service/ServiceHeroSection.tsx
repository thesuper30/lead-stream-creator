import { lazy, useState, Suspense } from "react";
import { LeadCaptureForm } from "@/components/landing/LeadCaptureForm";
import { ArrowRight, MessageCircle, LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import strategyImage from "@/assets/home-strategy-session.jpg";

const EnquiryPopup = lazy(() => import("@/components/EnquiryPopup").then(m => ({ default: m.EnquiryPopup })));

interface TrustSignal {
  icon: LucideIcon;
  text: string;
}

interface ServiceHeroSectionProps {
  badgeIcon: LucideIcon;
  badgeText: string;
  headline: React.ReactNode;
  description: React.ReactNode;
  trustSignals: TrustSignal[];
  credentials: string[];
  onSubmit: (data: { website_url: string; email: string; phone?: string; role?: string; monthly_revenue?: string; full_name?: string; company_name?: string }) => void;
  loading?: boolean;
  formTitle?: string;
  formDescription?: string;
  formBadgeText?: string;
  formButtonText?: string;
  formId?: string;
  formName?: string;
  modern?: boolean;
}

export const ServiceHeroSection = ({
  badgeIcon: BadgeIcon,
  badgeText,
  headline,
  description,
  trustSignals,
  credentials,
  onSubmit,
  loading,
  formTitle,
  formDescription,
  formBadgeText,
  formButtonText,
  formId,
  formName,
  modern = false,
}: ServiceHeroSectionProps) => {
  const [showEnquiryPopup, setShowEnquiryPopup] = useState(false);

  if (modern) return (
    <>
      <section className="modern-service-hero text-center">
        <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-4 py-2 text-sm text-primary-foreground"><BadgeIcon className="h-4 w-4 text-brand" />{badgeText}</p>
        <h1 className="mt-7 text-4xl leading-[1.12] text-primary-foreground sm:text-5xl lg:text-6xl">{headline}</h1>
        <div className="hero-description mx-auto mt-6 max-w-3xl text-base leading-relaxed sm:text-lg">{description}</div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button variant="unstyled" className="h-auto rounded-full bg-brand px-6 py-3 text-primary-foreground" onClick={() => setShowEnquiryPopup(true)}>Enquire Now <ArrowRight /></Button>
          <Button asChild variant="unstyled" className="h-auto rounded-full border border-primary-foreground/30 px-6 py-3 text-primary-foreground"><a href="#service-enquiry">{formButtonText ?? "Get Started"}<ArrowRight /></a></Button>
        </div>
        <div className="mx-auto mt-10 grid max-w-5xl gap-5 border-t border-primary-foreground/15 pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {trustSignals.map(({ icon: Icon, text }) => <div key={text} className="flex items-center justify-center gap-3 text-sm text-primary-foreground/85"><Icon className="h-5 w-5 shrink-0 text-brand" />{text}</div>)}
        </div>
        <div className="mt-7 flex flex-wrap justify-center gap-x-7 gap-y-3 text-sm text-primary-foreground/70">{credentials.map(x => <span key={x}>{x}</span>)}</div>
      </section>
      <section id="service-enquiry" className="service-band service-band-light scroll-mt-24 px-4 py-14 md:py-20">
        <div className="container mx-auto grid items-center gap-10 lg:grid-cols-2">
          <div><img src={strategyImage} alt="The Super 30 team planning a marketing strategy" width={1200} height={800} className="aspect-[5/4] w-full rounded-3xl object-cover" loading="lazy" /><h2 className="mt-6 text-2xl font-semibold text-foreground sm:text-3xl">{formTitle}</h2><p className="mt-3 text-muted-foreground">{formDescription}</p></div>
          <LeadCaptureForm onSubmit={onSubmit} loading={loading} formTitle={formTitle} formDescription={formDescription} formBadgeText={formBadgeText} formButtonText={formButtonText} formId={formId} formName={formName} />
        </div>
      </section>
      {showEnquiryPopup && <Suspense fallback={null}><EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} /></Suspense>}
    </>
  );

  return (
    <section className="relative bg-background overflow-hidden min-h-[85vh] md:min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />
      </div>

      <div className="container relative mx-auto px-4 py-8 md:py-12 lg:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-16 items-center">
          <div className="md:col-span-1 lg:col-span-7 space-y-4 md:space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent border border-border px-4 py-1.5 rounded-full">
              <BadgeIcon className="w-4 h-4 text-brand" />
              <span className="text-foreground text-sm font-medium">{badgeText}</span>
            </div>

            <div>
              <h1 className="font-bold text-foreground mb-4 md:mb-5">
                {headline}
              </h1>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
                {description}
              </p>
            </div>

            <div className="flex flex-col gap-3 py-2">
              {trustSignals.map((signal, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-brand-gradient rounded-full flex items-center justify-center flex-shrink-0">
                  <signal.icon className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <span className="font-medium text-foreground text-sm md:text-base">{signal.text}</span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <Button
                variant="outline-brand"
                size="lg"
                onClick={() => setShowEnquiryPopup(true)}
                className="px-6 py-3 h-auto rounded-full group"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Enquire Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>

          <div className="md:col-span-1 lg:col-span-5">
            <LeadCaptureForm 
              onSubmit={onSubmit} 
              loading={loading}
              formTitle={formTitle}
              formDescription={formDescription}
              formBadgeText={formBadgeText}
              formButtonText={formButtonText}
              formId={formId}
              formName={formName}
            />
          </div>
        </div>
      </div>

      {showEnquiryPopup && (
        <Suspense fallback={null}>
          <EnquiryPopup open={showEnquiryPopup} onOpenChange={setShowEnquiryPopup} />
        </Suspense>
      )}
    </section>
  );
};
