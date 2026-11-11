import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check, Code2, Search, FileText, Layers, Link2, ShoppingBag, TrendingUp, TriangleAlert, Lightbulb } from "lucide-react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Button } from "@/components/ui/button";
import furnitureImage from "@/assets/ecommerce-seo-case-study.jpg";
import mamaearthLogo from "@/assets/clients/mamaearth-transparent.png";
import { campaignSnapshot, clientProblems, solutionsProvided, keywordRankings, trafficGrowth, searchVisibility, seoStrategies } from "@/data/ecommerceCaseStudy";
import "./EcommerceSeoCaseStudy.css";

const sections = [
  { id: "performance", label: "Overview" },
  { id: "challenge", label: "Challenge & solution" },
  { id: "rankings", label: "Keyword rankings" },
  { id: "strategy", label: "The strategy" },
  { id: "traffic", label: "Traffic growth" },
  { id: "visibility", label: "Search visibility" },
  { id: "impact", label: "Business impact" },
];
const strategyIcons = [Code2, Search, FileText, Layers, Link2, ShoppingBag];
const shell = "container mx-auto px-5 sm:px-6 lg:px-8";
const title = "text-3xl md:text-4xl lg:text-5xl leading-tight font-medium";

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="mb-5 text-xs font-medium uppercase text-brand">— {number} / {children}</p>;
}

export default function EcommerceSeoCaseStudy() {
  const [selectedMonth, setSelectedMonth] = useState(5);
  const selected = trafficGrowth[selectedMonth] ?? trafficGrowth[5];

  return (
    <>
      <Helmet>
        <title>E-commerce SEO Case Study: 285% Organic Traffic Growth | The Super 30</title>
        <meta name="description" content="Explore a six-month e-commerce SEO campaign: keyword ranking transformation, 285% organic traffic growth, and 190% organic revenue growth." />
        <meta property="og:title" content="E-commerce SEO Case Study | The Super 30" />
        <meta property="og:description" content="The strategy behind six months of growth: from 8,000 to 30,800 organic visitors per month." />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Navbar forceWhiteBg />
      <main className="ecommerce-case-study bg-study-paper pt-16 text-study-ink md:pt-20">
        <header className="case-hero relative isolate flex items-center overflow-hidden bg-study-ink">
          <img src={furnitureImage} alt="Modern furniture and home furnishing interior" width={1920} height={1024} fetchPriority="high" className="absolute inset-0 -z-20 h-full w-full object-cover object-[65%_center]" />
          <div className={`case-hero-content ${shell} w-full text-study-paper`}>
            <div className="case-hero-brand"><img src={mamaearthLogo} alt="Mamaearth" width={280} height={144} className="h-14 w-auto md:h-20" /></div>
            <h1 className="max-w-3xl text-4xl font-medium leading-[1.12] md:text-5xl lg:text-6xl">How We Turned an E-commerce Brand Into a <span className="text-brand">Search Market Leader.</span></h1>
            <p className="mt-7 max-w-xl text-base leading-relaxed text-study-paper/85">We transformed a low-visibility online furniture store into a high-performing organic acquisition channel through technical SEO, category optimization, content marketing and authority building.</p>
            <Button asChild variant="unstyled" className="case-pill mt-8 rounded-full bg-brand text-study-paper"><a href="#performance">Explore the results <span><ArrowUpRight /></span></a></Button>
          </div>
        </header>

        <nav aria-label="Case study sections" className="sticky top-16 z-30 border-b border-study-line bg-study-paper md:top-20">
          <div className={`${shell} flex gap-3 overflow-x-auto py-3`}>
            {sections.map((section, index) => <Button key={section.id} asChild variant="ghost" className="shrink-0 rounded-full px-3 text-study-ink hover:bg-study-muted"><a href={`#${section.id}`}><span className="text-brand">0{index + 1}</span>{section.label}</a></Button>)}
          </div>
        </nav>

        <section id="performance" className="scroll-mt-40 py-16 md:py-24">
          <div className={shell}>
            <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div><SectionLabel number="01">Campaign performance snapshot</SectionLabel><h2 className={title}>Six months of work.<br /><span className="text-brand">A measurable difference.</span></h2></div>
              <p className="max-w-xs text-sm leading-relaxed text-study-ink/60">From search visibility to purchase intent. The campaign, at a glance.</p>
            </div>
            <div className="case-brand-intro mb-8 flex flex-col items-start gap-6 border p-7 sm:flex-row sm:items-center sm:gap-10 sm:p-8">
              <img src={mamaearthLogo} alt="Mamaearth" width={240} height={44} className="h-9 w-auto shrink-0 sm:h-11" />
              <p className="text-sm leading-relaxed text-study-ink/70 sm:text-[15px]">Mamaearth is an Indian personal-care brand built on toxin-free, naturally derived formulas for skin, hair and baby care. Founded in 2016, it grew from a single online store into a multi-category consumer brand sold across its own website, marketplaces and modern retail. Today it competes in one of India's most crowded, high-intent search categories.</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {campaignSnapshot.map((metric, index) => <article key={metric.label} className={`min-w-0 rounded-lg border p-6 ${index === 0 ? "border-brand bg-brand text-study-paper" : "border-study-line bg-study-muted text-study-ink"}`}>
                <div className="mb-8 flex items-center justify-between gap-2"><h3 className="text-sm">{metric.label}</h3><ArrowUpRight className="h-5 w-5" /></div>
                <p className={`mb-6 text-5xl font-medium ${index === 0 ? "text-study-paper" : "text-brand"}`}>{metric.growth}</p>
                <div className={`flex flex-wrap items-center gap-2 border-t pt-5 ${index === 0 ? "border-study-paper/30" : "border-study-line"}`}><span className="text-sm opacity-70">{metric.before}</span><ArrowRight className="h-4 w-4 opacity-60" /><span className="text-xl font-medium">{metric.after}</span></div>
                <p className="mt-2 text-xs opacity-65">{metric.unit} · Before → After</p>
              </article>)}
            </div>
          </div>
        </section>

        <section id="challenge" className="scroll-mt-40 py-16 md:py-24">
          <div className={shell}>
            <SectionLabel number="02">The problem & the solution</SectionLabel>
            <h2 className={`${title} mb-12`}>What Was Holding the Brand Back.<br /><span className="text-brand">What We Did About It.</span></h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
              <div className="case-panel case-panel-problem">
                <div className="case-panel-head"><span className="case-panel-chip"><TriangleAlert className="h-5 w-5" strokeWidth={1.8} /></span><div><p className="text-xs uppercase text-study-ink/50">Where the brand started</p><h3 className="text-xl font-medium">The problem</h3></div></div>
                <ul className="space-y-6">{clientProblems.map((item, index) => <li key={item.title} className="flex gap-4"><span className="case-panel-num">{index + 1}</span><div><p className="mb-1 font-medium">{item.title}</p><p className="text-sm leading-relaxed text-study-ink/60">{item.detail}</p></div></li>)}</ul>
              </div>
              <div className="case-panel case-panel-solution">
                <div className="case-panel-head"><span className="case-panel-chip"><Lightbulb className="h-5 w-5" strokeWidth={1.8} /></span><div><p className="text-xs uppercase text-study-paper/50">What we put in place</p><h3 className="text-xl font-medium">The solution</h3></div></div>
                <ul className="space-y-6">{solutionsProvided.map(item => <li key={item.title} className="flex gap-4"><span className="case-panel-num"><Check className="h-4 w-4" strokeWidth={2.5} /></span><div><p className="mb-1 font-medium">{item.title}</p><p className="text-sm leading-relaxed text-study-paper/60">{item.detail}</p></div></li>)}</ul>
              </div>
            </div>
          </div>
        </section>

        <section id="rankings" className="scroll-mt-40 bg-study-ink py-16 text-study-paper md:py-24">
          <div className={shell}>
            <div className="mb-10 grid gap-8 md:grid-cols-[1fr_260px] md:items-end">
              <div><SectionLabel number="03">Keyword ranking transformation</SectionLabel><h2 className={title}>Which Keywords Did<br />We <span className="text-brand">Actually Rank?</span></h2></div>
              <div className="border-l-2 border-brand pl-5"><p className="text-5xl font-medium">8<span className="text-brand">/8</span></p><p className="mt-2 text-sm text-study-paper/65">Featured keywords on page one</p></div>
            </div>
            <div className="case-ranking-table overflow-hidden rounded-lg border border-study-paper/20">
              <table className="w-full text-left text-sm">
                <thead className="bg-study-paper/5 text-xs text-study-paper/60"><tr><th className="px-4 py-5 sm:px-6">Target keyword</th><th className="px-2 py-5 text-center sm:px-6">Before SEO</th><th className="px-2 py-5 text-center sm:px-6">After 6 months</th><th className="hidden px-6 py-5 text-right md:table-cell">Positions gained</th></tr></thead>
                <tbody>{keywordRankings.map(row => <tr key={row.keyword} className="border-t border-study-paper/10"><th scope="row" className="px-4 py-5 font-normal sm:px-6">{row.keyword}</th><td className="px-2 py-5 text-center text-study-paper/45 sm:px-6">{row.before}</td><td className="px-2 py-5 text-center sm:px-6"><span className="inline-flex min-w-12 items-center justify-center gap-1 rounded bg-brand/15 px-2 py-1 text-lg font-medium text-brand">#{row.after}</span></td><td className="hidden px-6 py-5 text-right md:table-cell"><span className="inline-flex items-center gap-2 text-study-paper/80"><ArrowUpRight className="h-4 w-4 text-brand" />{row.before - row.after}</span></td></tr>)}</tbody>
              </table>
            </div>
            <p className="mt-5 max-w-2xl text-xs leading-relaxed text-study-paper/50">Illustrative Google organic keyword positions. Ranking results vary by location, device and measurement date.</p>
          </div>
        </section>

        <section id="strategy" className="scroll-mt-40 py-16 md:py-24">
          <div className={shell}>
            <SectionLabel number="04">SEO strategies implemented</SectionLabel><h2 className={`${title} mb-12`}>The Strategy Behind<br /><span className="text-brand">Every Ranking.</span></h2>
            <div className="grid gap-x-10 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {seoStrategies.map((strategy, index) => {
                const Icon = strategyIcons[index] ?? Search;
                return <article key={strategy.title} className="min-w-0 border-t border-study-line pt-6">
                  <div className="mb-6 flex items-center justify-between"><span className="text-4xl font-medium text-study-ink/20">0{index + 1}</span><Icon className="h-6 w-6 text-brand" strokeWidth={1.5} /></div>
                  <h3 className="mb-3 text-xl font-medium leading-snug">{strategy.title}</h3><p className="mb-6 text-sm leading-relaxed text-study-ink/60">{strategy.summary}</p>
                  <ul className="space-y-3">{strategy.items.map(item => <li key={item} className="flex gap-3 text-sm leading-relaxed"><Check className="mt-1 h-4 w-4 shrink-0 text-brand" /><span>{item}</span></li>)}</ul>
                </article>;
              })}
            </div>
          </div>
        </section>

        <section id="traffic" className="scroll-mt-40 bg-study-muted py-16 md:py-24">
          <div className={shell}>
            <SectionLabel number="05">Organic traffic growth — month by month</SectionLabel>
            <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"><h2 className={title}>Six Months. One Consistent<br /><span className="text-brand">Growth Trajectory.</span></h2><div className="flex items-center gap-2 text-sm text-study-success"><TrendingUp className="h-5 w-5" />3.85X organic traffic growth</div></div>
            <div className="grid gap-10 lg:grid-cols-[220px_1fr]">
              <div className="border-l-2 border-brand pl-6"><p className="text-xs uppercase text-study-ink/55">Month {selectedMonth + 1}</p><p className="mt-3 text-5xl font-medium text-brand">{selected?.visitors.toLocaleString("en-IN")}</p><p className="mt-3 text-sm text-study-ink/60">Organic visitors / month</p><div className="mt-6 border-t border-study-line pt-5 text-sm leading-relaxed text-study-ink/60">8,000 at the start.<br />30,800 by month six.</div></div>
              <div className="case-chart min-w-0">
                <div className="h-[280px] sm:h-[340px]" role="img" aria-label="Monthly organic traffic grew from 8,000 to 30,800 over six months">
                  <ResponsiveContainer width="100%" height="100%"><AreaChart data={trafficGrowth} margin={{ top: 20, right: 15, left: -20, bottom: 0 }}>
                    <CartesianGrid stroke="hsl(var(--case-line))" vertical={false} strokeDasharray="3 5" />
                    <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "hsl(var(--case-ink))", fontSize: 12 }} dy={8} />
                    <YAxis axisLine={false} tickLine={false} tickFormatter={value => `${value / 1000}K`} tick={{ fill: "hsl(var(--case-ink))", fontSize: 11 }} />
                    <Tooltip formatter={(value: number) => [value.toLocaleString("en-IN"), "Organic visitors"]} contentStyle={{ background: "hsl(var(--case-paper))", borderColor: "hsl(var(--case-line))", borderRadius: 8, color: "hsl(var(--case-ink))" }} />
                    <Area type="monotone" dataKey="visitors" stroke="hsl(var(--brand))" strokeWidth={3} fill="hsl(var(--brand) / .08)" dot={{ r: 4, fill: "hsl(var(--brand))", stroke: "hsl(var(--case-paper))", strokeWidth: 2 }} activeDot={{ r: 6 }} isAnimationActive={false} />
                  </AreaChart></ResponsiveContainer>
                </div>
                <div className="mt-5 grid grid-cols-3 gap-2 sm:grid-cols-6" aria-label="Monthly traffic details">{trafficGrowth.map((month, index) => <Button key={month.month} variant="unstyled" aria-pressed={selectedMonth === index} aria-label={`Month ${index + 1}: ${month.visitors.toLocaleString("en-IN")} organic visitors`} onClick={() => setSelectedMonth(index)} className={`h-auto flex-col rounded-md border py-3 ${selectedMonth === index ? "border-brand bg-study-paper text-brand" : "border-study-line text-study-ink"}`}><span className="text-xs opacity-60">{month.month}</span><span className="text-base">{month.label}</span></Button>)}</div>
              </div>
            </div>
          </div>
        </section>

        <section id="visibility" className="scroll-mt-40 py-16 md:py-24">
          <div className={`${shell} grid gap-10 lg:grid-cols-2 lg:gap-20`}>
            <div><SectionLabel number="06">Search visibility improvements</SectionLabel><h2 className={title}>From Page 5 to Page 1.<br /><span className="text-brand">From Invisible to Discoverable.</span></h2><div className="mt-10 flex items-center gap-4 border-l-2 border-brand pl-5"><Search className="h-8 w-8 text-brand" /><p className="max-w-xs text-sm leading-relaxed text-study-ink/60">A stronger search footprint across keywords, indexed pages, links and organic clicks.</p></div></div>
            <div className="min-w-0"><table className="w-full text-left text-sm"><thead><tr className="border-b border-study-line text-xs uppercase text-study-ink/50"><th className="pb-5 font-normal">SEO metric</th><th className="px-2 pb-5 text-right font-normal">Before</th><th className="pb-5 text-right font-normal text-study-success">After</th></tr></thead><tbody>{searchVisibility.map(row => <tr key={row.label} className="border-b border-study-line"><th scope="row" className="py-5 pr-3 font-normal">{row.label}</th><td className="px-2 py-5 text-right text-study-ink/50">{row.before}</td><td className="py-5 text-right text-xl font-medium text-study-success">{row.after}</td></tr>)}</tbody></table></div>
          </div>
        </section>

        <section id="impact" className="scroll-mt-40 bg-study-ink py-16 text-study-paper md:py-24">
          <div className={shell}>
            <SectionLabel number="07">Business impact</SectionLabel><h2 className={`${title} max-w-4xl`}>Rankings Were Just the Beginning.<br /><span className="text-brand">Revenue Was the Goal.</span></h2>
            <div className="case-impact-numbers my-12 grid gap-8 border-y border-study-paper/20 py-10 sm:grid-cols-3">{[{ value: "3.85X", label: "organic traffic growth" }, { value: "2.65X", label: "organic conversion volume" }, { value: "+190%", label: "organic-attributed revenue" }].map(metric => <div key={metric.label}><ArrowUpRight className="mb-3 h-6 w-6 text-brand" /><p className="text-5xl font-medium">{metric.value}</p><p className="mt-3 text-sm text-study-paper/60">{metric.label}</p></div>)}</div>
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
              <ul className="space-y-5 text-sm text-study-paper/75"><li className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-brand" />Reduced reliance on paid acquisition.</li><li className="flex gap-3"><Check className="h-5 w-5 shrink-0 text-brand" />Stronger visibility across commercial product searches.</li></ul>
              <div><p className="mb-4 text-xs uppercase text-brand">The final takeaway</p><p className="text-2xl leading-relaxed">We didn't just improve keyword positions. We built a sustainable organic acquisition channel that contributed directly to business growth.</p><Button asChild variant="unstyled" className="case-pill mt-8 rounded-full bg-brand text-study-paper"><Link to="/audit">Build your growth story <span><ArrowUpRight /></span></Link></Button></div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}