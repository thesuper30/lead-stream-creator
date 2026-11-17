import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { X, Send, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { openThankYouPage } from "@/lib/thankYouRedirect";
import { validateEmail, validatePhone, sanitizeInput } from "@/lib/validation";
import { submitFormToGoogleSheets } from "@/hooks/useFormSubmit";

const DISMISS_KEY = "s30_lead_popup_dismissed";
const SHOW_DELAY_MS = 5000;

const LeadPopup = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/thank-you") return;
    if (sessionStorage.getItem(DISMISS_KEY)) return;
    const timer = setTimeout(() => setOpen(true), SHOW_DELAY_MS);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const close = () => {
    sessionStorage.setItem(DISMISS_KEY, "1");
    setOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!validateEmail(formData.email)) newErrors.email = "Please enter a valid email";
    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone = "Enter 10 digit number starting with 6, 7, 8, or 9";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);
    try {
      await submitFormToGoogleSheets({
        form_id: "popup_lead_form",
        form_name: "Popup Lead Form",
        page_url: window.location.href,
        trigger_type: "popup",
        data: {
          name: sanitizeInput(formData.name),
          email: sanitizeInput(formData.email),
          phone: formData.phone ? `+91${sanitizeInput(formData.phone)}` : "",
          service: formData.service || "",
        },
      });
      toast.success("Thank you! We'll get back to you within 24 hours.");
      close();
      openThankYouPage({
        name: formData.name,
        email: formData.email,
        source: "popup",
      });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Free growth consultation"
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-white/10 bg-[hsl(var(--work-ink))] text-[hsl(var(--work-paper))] p-6 md:p-8 shadow-2xl animate-in zoom-in-95 duration-300 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Warm orange glow */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: "var(--work-glow)" }} />

        <button
          onClick={close}
          aria-label="Close popup"
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-white/40 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative">
          <p className="text-brand text-xs font-semibold mb-2">— FREE GROWTH CONSULTATION</p>
          <h2 className="text-xl md:text-2xl font-semibold leading-snug mb-2">
            Get a Free Strategy Call Worth ₹5,000
          </h2>
          <p className="text-sm text-white/65 leading-relaxed mb-5">
            Talk to our digital marketing experts and get a clear growth plan for your business. No spam, no obligation.
          </p>

          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="space-y-1.5">
              <Label htmlFor="popup-name" className="text-white/85 text-xs">Full Name *</Label>
              <Input
                id="popup-name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`bg-black/40 border-white/15 text-white placeholder:text-white/40 focus-visible:border-brand ${errors.name ? "border-destructive" : ""}`}
              />
              {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="popup-email" className="text-white/85 text-xs">Email *</Label>
              <Input
                id="popup-email"
                name="email"
                type="email"
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`bg-black/40 border-white/15 text-white placeholder:text-white/40 focus-visible:border-brand ${errors.email ? "border-destructive" : ""}`}
              />
              {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="popup-phone" className="text-white/85 text-xs">Phone</Label>
              <div className="flex">
                <span className="inline-flex items-center gap-1 px-3 rounded-l-md bg-black/40 border border-r-0 border-white/15 text-white/60 text-sm font-medium">
                  <Phone className="w-3.5 h-3.5" />
                  +91
                </span>
                <Input
                  id="popup-phone"
                  name="phone"
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={(e) => {
                    let cleaned = e.target.value.replace(/\D/g, "").slice(0, 10);
                    if (cleaned.length > 0 && !/^[6-9]/.test(cleaned)) cleaned = "";
                    setFormData({ ...formData, phone: cleaned });
                  }}
                  className={`rounded-l-none bg-black/40 border-white/15 text-white placeholder:text-white/40 focus-visible:border-brand ${errors.phone ? "border-destructive" : ""}`}
                />
              </div>
              {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="popup-service" className="text-white/85 text-xs">Service Interest</Label>
              <Select
                value={formData.service}
                onValueChange={(value) => setFormData({ ...formData, service: value })}
              >
                <SelectTrigger id="popup-service" name="service" className="bg-black/40 border-white/15 text-white data-[placeholder]:text-white/40">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ai-seo">AI SEO</SelectItem>
                  <SelectItem value="lead-generation">Lead Generation</SelectItem>
                  <SelectItem value="social-media">Social Media Management</SelectItem>
                  <SelectItem value="google-ads">Google Ads</SelectItem>
                  <SelectItem value="web-design">Web Design & Development</SelectItem>
                  <SelectItem value="branding">Branding & Design</SelectItem>
                  <SelectItem value="multiple">Multiple Services</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button
              id="btn-popup-submit"
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-brand text-primary-foreground hover:bg-brand-dark mt-1"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Book My Free Call
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>

          <p className="text-[11px] text-white/45 text-center mt-3">
            24hr response • Free consultation • No spam, ever
          </p>
        </div>
      </div>
    </div>
  );
};

export default LeadPopup;
