import { createFileRoute, Link } from "@tanstack/react-router";
import {
  MdOutlineScience,
  MdOutlineFactCheck,
  MdOutlineVerified,
  MdOutlineSchool,
  MdOutlineGavel,
  MdOutlineInventory2,
} from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

import PageHero from "../components/PageHero";
import ServicesSection from "../components/ServicesSection";
import FadeInUp from "../components/FadeInUp";
import Button from "../components/Button";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Testing, Inspection & Certification | TICAdvisor" },
      {
        name: "description",
        content:
          "Laboratory testing, field inspection, product certification, auditing, consulting and training services from TICAdvisor.",
      },
      { property: "og:title", content: "Services | TICAdvisor" },
      {
        property: "og:description",
        content:
          "Laboratory testing, field inspection, product certification, auditing, consulting and training services from TICAdvisor.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const CAPABILITIES = [
  {
    title: "Laboratory Testing",
    icon: MdOutlineScience,
    description:
      "Accredited laboratories running chemical, microbiological and physical analysis with fast, defensible reporting.",
  },
  {
    title: "Field Inspection",
    icon: MdOutlineFactCheck,
    description:
      "On-site surveillance, pre-shipment checks and loading supervision performed by inspectors in over 60 countries.",
  },
  {
    title: "Product Certification",
    icon: MdOutlineVerified,
    description:
      "Recognised certification and conformity schemes that unlock market access and prove compliance to regulators.",
  },
  {
    title: "Technical Auditing",
    icon: MdOutlineGavel,
    description:
      "Supplier, factory and management system audits that expose weak links before they reach your customers.",
  },
  {
    title: "Supply Chain Assurance",
    icon: MdOutlineInventory2,
    description:
      "End-to-end traceability programmes covering sourcing, production, storage and distribution risk.",
  },
  {
    title: "Specialized Training",
    icon: MdOutlineSchool,
    description:
      "Practical, standards-based training that keeps your teams current with evolving regulatory requirements.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "Scope",
    text: "We map your products, markets and applicable standards to define exactly what must be verified.",
  },
  {
    step: "02",
    title: "Test & Inspect",
    text: "Samples are analysed and sites inspected against the agreed protocols by accredited specialists.",
  },
  {
    step: "03",
    title: "Report",
    text: "You receive clear, decision-ready findings with corrective actions prioritised by risk.",
  },
  {
    step: "04",
    title: "Certify",
    text: "Once conformity is demonstrated we issue certificates recognised across global markets.",
  },
];

function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Testing. Inspection. Certification"
        title="Services built for"
        highlight="regulated markets"
        description="From a single laboratory analysis to a global assurance programme, TICAdvisor gives you the evidence you need to ship with confidence."
      />

      <section className="px-5 py-16 lg:py-24">
        <div className="custom-container">
          <FadeInUp>
            <h2 className="mb-4 font-gotham text-3xl font-black uppercase tracking-tight leading-[0.95] text-brand-blue lg:text-5xl">
              Core capabilities
            </h2>
            <p className="mb-12 max-w-3xl font-gotham text-base text-gray-600 lg:text-lg">
              Every engagement is delivered by accredited experts and backed by a global
              laboratory and inspection network.
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CAPABILITIES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeInUp key={item.title} delay={`delay-${(idx % 3) * 100}`}>
                  <div className="group h-full rounded-xl border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan hover:shadow-card">
                    <div className="mb-5 inline-flex rounded-lg bg-brand-blue/5 p-3">
                      <Icon className="h-10 w-10 text-brand-blue-light transition-colors group-hover:text-brand-green" />
                    </div>
                    <h3 className="mb-3 font-gotham text-lg font-bold uppercase tracking-wider text-darkBlue">
                      {item.title}
                    </h3>
                    <p className="font-gotham text-sm leading-relaxed text-gray-600">
                      {item.description}
                    </p>
                  </div>
                </FadeInUp>
              );
            })}
          </div>
        </div>
      </section>

      <ServicesSection />

      <section className="px-5 py-16 lg:py-24">
        <div className="custom-container">
          <FadeInUp>
            <h2 className="mb-12 font-gotham text-3xl font-black uppercase tracking-tight leading-[0.95] text-brand-blue lg:text-5xl">
              How we work
            </h2>
          </FadeInUp>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS.map((item, idx) => (
              <FadeInUp key={item.step} delay={`delay-${(idx % 4) * 100}`}>
                <div className="h-full rounded-xl bg-brand-blue px-6 py-8 text-left font-gotham">
                  <span className="font-gotham text-4xl font-black text-brand-cyan-light/50">
                    {item.step}
                  </span>
                  <h3 className="mt-4 mb-3 text-xl font-bold uppercase text-brand-green-light">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/90">{item.text}</p>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay="delay-200">
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <Link to="/contact">
                <Button variant="default" className="px-8 py-3 font-bold">
                  Talk to an expert
                </Button>
              </Link>
              <Link
                to="/events"
                className="inline-flex items-center gap-2 font-gotham text-sm font-semibold text-brand-blue transition-colors hover:text-brand-green"
              >
                See upcoming events <GoArrowRight />
              </Link>
            </div>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
