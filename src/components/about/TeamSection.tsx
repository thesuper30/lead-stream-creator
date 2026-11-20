import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import amitImg from "@/assets/team/amit-singh.png.asset.json";
import mayankImg from "@/assets/team/mayank.png.asset.json";
import praveenImg from "@/assets/team/praveen.png.asset.json";
import harshavardhanImg from "@/assets/team/harshavardhan.png.asset.json";
import chandrasekharImg from "@/assets/team/chandrasekhar.png.asset.json";
import anandImg from "@/assets/team/anand.png.asset.json";
import likhithImg from "@/assets/team/likhith.png.asset.json";
import sujeetImg from "@/assets/team/sujeet.png.asset.json";
import swanandImg from "@/assets/team/swanand.png.asset.json";
import madhuImg from "@/assets/team/madhu.png.asset.json";
import anushImg from "@/assets/team/anush.png.asset.json";
import abhishekImg from "@/assets/team/abhishek.png.asset.json";
import azarudheenImg from "@/assets/team/azarudheen.png.asset.json";

const teamMembers = [
  { name: "Amit Singh", expertise: "Co-Founder", image: amitImg.url, card: "bg-[#FDE2E4]" },
  { name: "Mayank", expertise: "VP - Business Growth", image: mayankImg.url, card: "bg-[#D8F3DC]" },
  { name: "Praveen", expertise: "Senior Creative Manager", image: praveenImg.url, card: "bg-[#E5DEFF]" },
  { name: "Harshavardhan", expertise: "Graphic Designer", image: harshavardhanImg.url, card: "bg-[#D7E3FC]" },
  { name: "G. Chandrasekhar", expertise: "Team Leader - Digital Marketing", image: chandrasekharImg.url, card: "bg-[#FFE5D9]" },
  { name: "Anand Kumar", expertise: "Performance Marketing Manager", image: anandImg.url, card: "bg-[#CFF7E5]" },
  { name: "Likhith P", expertise: "Video Editor", image: likhithImg.url, card: "bg-[#FCE1F0]" },
  { name: "Sujeet", expertise: "AI/ML SEO Specialist", image: sujeetImg.url, card: "bg-[#D8F3DC]" },
  { name: "Swanand", expertise: "PPC Specialist, Meta & Google Certified", image: swanandImg.url, card: "bg-[#FFF3C4]" },
  { name: "Madhu", expertise: "E-commerce SEO Expert", image: madhuImg.url, card: "bg-[#CFF7E5]" },
  { name: "Anush", expertise: "Google Ads Certified, ROI Expert", image: anushImg.url, card: "bg-[#FCE1F0]" },
  { name: "Abhishek", expertise: "React & Node.js Expert", image: abhishekImg.url, card: "bg-[#FDE2E4]" },
  { name: "Azarudheen", expertise: "UI/UX & Creative Design", image: azarudheenImg.url, card: "bg-[#D8F3DC]" },
];

const TeamCard = ({ member }: { member: typeof teamMembers[0] }) => (
  <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand/50 hover:shadow-xl">
    <div className={`relative aspect-[4/5] overflow-hidden ${member.card}`}>
      <img src={member.image} alt={`${member.name} at The Super 30`} width={800} height={1000} loading="lazy" className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-[1.03]" />
    </div>
    <div className="px-5 py-4">
      <div className="min-w-0"><h3 className="text-lg font-semibold text-foreground">{member.name}</h3><p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">{member.expertise}</p></div>
    </div>
  </article>
);

export const TeamSection = () => (
  <section aria-labelledby="about-team-heading" className="py-16 md:py-24 bg-background">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
      <div className="max-w-2xl">
        <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase text-foreground"><span className="h-2 w-2 rounded-full bg-brand" />Our Team</p>
        <h2 id="about-team-heading" className="text-3xl font-semibold leading-tight text-foreground sm:text-4xl lg:text-5xl">Meet Our <span className="text-brand">Digital Marketing Experts</span></h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">Our SEO specialists and PPC specialists work collaboratively to deliver integrated strategies for your growth.</p>
      </div>
      <Button asChild className="group h-auto rounded-full bg-brand py-1.5 pl-6 pr-1.5 text-primary-foreground hover:bg-brand-dark"><Link to="/contact-us">Get Started<span className="ml-3 flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground text-foreground"><ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" /></span></Link></Button>
      </div>
      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map(member => <TeamCard key={member.name} member={member} />)}
      </div>
    </div>
  </section>
);
