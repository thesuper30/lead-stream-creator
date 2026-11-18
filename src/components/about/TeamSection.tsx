import { Linkedin } from "lucide-react";

import amitImg from "@/assets/team/amit.png";
import lalitImg from "@/assets/team/lalit.png";
import mayankImg from "@/assets/team/mayank.png";
import sujeetImg from "@/assets/team/sujeet.png";
import swanandImg from "@/assets/team/swanand.png";
import sathyaImg from "@/assets/team/sathya.png";
import monishaImg from "@/assets/team/monisha.png";
import deepakImg from "@/assets/team/deepak.png";
import madhuImg from "@/assets/team/madhu.png";
import anushImg from "@/assets/team/anush.png";
import abhishekImg from "@/assets/team/abhishek.png";
import azarudheeImg from "@/assets/team/azarudheen.jpg";

const teamMembers = [
  { name: "Amit", expertise: "Growth Strategy & Business Development", image: amitImg },
  { name: "Lalit", expertise: "SEO Architecture & Technical Audits", image: lalitImg },
  { name: "Mayank", expertise: "Digital Strategy & Analytics", image: mayankImg },
  { name: "Sujeet", expertise: "AI/ML SEO Specialist", image: sujeetImg },
  { name: "Swanand", expertise: "PPC Specialist, Meta & Google Certified", image: swanandImg },
  { name: "Sathya", expertise: "Content Strategy & SEO Expert", image: sathyaImg },
  { name: "Monisha", expertise: "Full-stack Developer, SEO Engineer", image: monishaImg },
  { name: "Deepak", expertise: "10+ years in SEO & PPC", image: deepakImg },
  { name: "Madhu", expertise: "E-commerce SEO Expert", image: madhuImg },
  { name: "Anush", expertise: "Google Ads Certified, ROI Expert", image: anushImg },
  { name: "Abhishek", expertise: "React & Node.js Expert", image: abhishekImg },
  { name: "Azarudheen", expertise: "UI/UX & Creative Design", image: azarudheeImg },
];

const TeamCard = ({ member }: { member: typeof teamMembers[0] }) => (
  <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl">
    <div className="relative aspect-[4/5] overflow-hidden bg-muted">
      <img src={member.image} alt={`${member.name} at The Super 30`} width={800} height={1000} loading="lazy" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]" />
    </div>
    <div className="flex items-center justify-between gap-3 px-5 py-4">
      <div className="min-w-0"><h3 className="text-lg font-semibold text-foreground">{member.name}</h3><p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{member.expertise}</p></div>
      <a href="https://www.linkedin.com/company/thesuper30/" target="_blank" rel="noopener noreferrer" aria-label={`${member.name} on LinkedIn`} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-foreground transition hover:border-brand hover:bg-brand hover:text-primary-foreground"><Linkedin className="h-4 w-4" /></a>
    </div>
  </article>
);

export const TeamSection = () => (
  <section aria-labelledby="about-team-heading" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase text-foreground"><span className="h-2 w-2 rounded-full bg-brand" />Our Team</p>
        <h2 id="about-team-heading" className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">Meet Our <span className="text-brand">Digital Marketing Experts</span></h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">Our SEO specialists and PPC specialists work collaboratively to deliver integrated strategies for your growth.</p>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map(member => <TeamCard key={member.name} member={member} />)}
      </div>
    </div>
  </section>
);
