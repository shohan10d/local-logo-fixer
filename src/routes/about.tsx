import { createFileRoute, Link } from "@tanstack/react-router";
import { MdOutlinePublic, MdOutlineShield, MdOutlineHandshake } from "react-icons/md";

import PageHero from "../components/PageHero";
import FadeInUp from "../components/FadeInUp";
import Button from "../components/Button";
import GlowBackground from "../components/GlowBackground";
import CountUp from "../components/CountUp";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About TIC Advisor — Our Mission & Global Network" },
      {
        name: "description",
        content:
          "Who we are: a global testing, inspection and certification partner helping companies prove quality, safety and compliance.",
      },
      { property: "og:title", content: "About TIC Advisor" },
      {
        property: "og:description",
        content:
          "Who we are: a global testing, inspection and certification partner helping companies prove quality, safety and compliance.",
      },
      { property: "og:url", content: "/about" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About TIC Advisor — Our Mission & Global Network" },
      {
        name: "twitter:description",
        content:
          "Who we are: a global testing, inspection and certification partner helping companies prove quality, safety and compliance.",
      },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const VALUES = [
  {
    title: "Independence",
    icon: MdOutlineShield,
    text: "Our findings are impartial. We report what the evidence shows, never what is convenient.",
  },
  {
    title: "Global Reach",
    icon: MdOutlinePublic,
    text: "Laboratories, inspectors and auditors positioned where your suppliers and markets actually are.",
  },
  {
    title: "Partnership",
    icon: MdOutlineHandshake,
    text: "We work alongside your teams to turn compliance from a cost centre into a competitive edge.",
  },
];

const STATS = [
  { value: "60+", label: "Countries served" },
  { value: "180", label: "Accredited labs" },
  { value: "4,500", label: "Experts worldwide" },
  { value: "25 yrs", label: "Industry experience" },
];

const MILESTONES = [
  {
    year: "2001",
    text: "Founded as a specialist inspection bureau serving agricultural exporters.",
  },
  {
    year: "2008",
    text: "Opened our first accredited multi-discipline testing laboratory network.",
  },
  {
    year: "2015",
    text: "Expanded into consumer products, pharmaceuticals and industrial certification.",
  },
  {
    year: "2021",
    text: "Launched digital reporting, giving clients live visibility of every inspection.",
  },
  {
    year: "2026",
    text: "Serving clients across six continents with sustainability verification at the core.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About TIC Advisor"
        title="Trusted evidence for"
        highlight="critical decisions"
        description="We exist so that manufacturers, traders and regulators can rely on the same source of truth about quality, safety and compliance."
      />

      <section className="px-5 py-16 lg:py-24">
        <div className="custom-container grid grid-cols-1 gap-12 lg:grid-cols-2">
          <FadeInUp animation="animate-slide-in-left">
            <h2 className="mb-6 font-gotham text-3xl font-black uppercase tracking-tight leading-[0.95] text-brand-blue lg:text-5xl">
              Our mission
            </h2>
            <p className="mb-4 font-gotham text-base leading-relaxed text-gray-600 lg:text-lg">
              Global supply chains move faster than the rules that govern them. TICAdvisor
              closes that gap with independent testing, inspection and certification that
              stands up to scrutiny anywhere in the world.
            </p>
            <p className="font-gotham text-base leading-relaxed text-gray-600 lg:text-lg">
              We combine accredited laboratory science with on-the-ground inspection and
              clear digital reporting, so our clients can act on risk instead of merely
              documenting it.
            </p>
          </FadeInUp>

          <FadeInUp animation="animate-slide-in-right">
            <div className="overflow-hidden rounded-xl shadow-card">
              <img
                src="/inspection.webp"
                alt="TICAdvisor inspector reviewing product quality on site"
                width={950}
                height={352}
                className="h-full w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </FadeInUp>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-blue px-5 py-16 lg:py-24">
        <GlowBackground />
        <div className="custom-container relative z-10">
          <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
            {STATS.map((stat, idx) => (
              <FadeInUp key={stat.label} delay={`delay-${(idx % 4) * 100}`}>
                <p className="font-gotham text-4xl font-black text-brand-green-light lg:text-6xl">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-2 font-gotham text-xs uppercase tracking-widest text-white/80">
                  {stat.label}
                </p>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 lg:py-24">
        <div className="custom-container">
          <FadeInUp>
            <h2 className="mb-12 font-gotham text-3xl font-black uppercase tracking-tight leading-[0.95] text-brand-blue lg:text-5xl">
              What we stand for
            </h2>
          </FadeInUp>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {VALUES.map((value, idx) => {
              const Icon = value.icon;
              return (
                <FadeInUp key={value.title} delay={`delay-${(idx % 3) * 100}`}>
                  <div className="group h-full rounded-xl border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan hover:shadow-card">
                    <Icon className="mb-5 h-10 w-10 text-brand-blue-light transition-colors group-hover:text-brand-green" />
                    <h3 className="mb-3 font-gotham text-lg font-bold uppercase tracking-wider text-darkBlue">
                      {value.title}
                    </h3>
                    <p className="font-gotham text-sm leading-relaxed text-gray-600">
                      {value.text}
                    </p>
                  </div>
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-16 lg:py-24">
        <div className="custom-container">
          <FadeInUp>
            <h2 className="mb-12 font-gotham text-3xl font-black uppercase tracking-tight leading-[0.95] text-brand-blue lg:text-5xl">
              Our history
            </h2>
          </FadeInUp>
          <div className="border-l border-brand-cyan/40 pl-6">
            {MILESTONES.map((item, idx) => (
              <FadeInUp key={item.year} delay={`delay-${(idx % 3) * 100}`}>
                <div className="relative pb-10">
                  <span className="absolute -left-[31px] top-1 h-3 w-3 rounded-full bg-brand-green" />
                  <p className="font-gotham text-xl font-bold text-brand-blue">{item.year}</p>
                  <p className="mt-2 max-w-2xl font-gotham text-sm text-gray-600 lg:text-base">
                    {item.text}
                  </p>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay="delay-200">
            <Link to="/contact">
              <Button variant="default" className="mt-4 px-8 py-3 font-bold">
                Work with us
              </Button>
            </Link>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
