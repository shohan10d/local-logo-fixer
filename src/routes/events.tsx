import { createFileRoute, Link } from "@tanstack/react-router";
import { MdOutlineCalendarMonth, MdOutlinePlace } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

import PageHero from "../components/PageHero";
import FadeInUp from "../components/FadeInUp";
import Button from "../components/Button";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events & Webinars — TICAdvisor" },
      {
        name: "description",
        content:
          "Join TICAdvisor at trade shows, technical webinars and training workshops on testing, inspection and certification.",
      },
      { property: "og:title", content: "Events & Webinars | TICAdvisor" },
      {
        property: "og:description",
        content:
          "Join TICAdvisor at trade shows, technical webinars and training workshops on testing, inspection and certification.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EventsPage,
});

const UPCOMING = [
  {
    date: "18 September 2026",
    type: "Webinar",
    title: "New EU food contact material rules: what changes for exporters",
    location: "Online — 14:00 CET",
    image: "/food-testing.png",
  },
  {
    date: "07 October 2026",
    type: "Trade show",
    title: "Global Textiles & Apparel Compliance Summit",
    location: "Dhaka, Bangladesh",
    image: "/leather.jpg",
  },
  {
    date: "22 October 2026",
    type: "Workshop",
    title: "Hands-on supplier audit training for quality managers",
    location: "Singapore",
    image: "/training.jpg",
  },
  {
    date: "12 November 2026",
    type: "Webinar",
    title: "Carbon verification: preparing for mandatory reporting",
    location: "Online — 10:00 GMT",
    image: "/certification.jpg",
  },
];

const PAST = [
  { date: "May 2026", title: "Pharmaceutical stability testing roundtable", place: "Basel" },
  { date: "March 2026", title: "Minerals traceability in practice", place: "Johannesburg" },
  { date: "January 2026", title: "Toy safety regulations 2026 update", place: "Online" },
];

function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events & Webinars"
        title="Meet the people behind"
        highlight="the standards"
        description="Technical sessions, industry summits and practical workshops led by our inspectors, auditors and laboratory specialists."
      />

      <section className="px-5 py-16 lg:py-24">
        <div className="custom-container">
          <FadeInUp>
            <h2 className="mb-12 font-gotham text-3xl font-black uppercase tracking-tight leading-[0.95] text-brand-blue lg:text-5xl">
              Upcoming
            </h2>
          </FadeInUp>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {UPCOMING.map((event, idx) => (
              <FadeInUp key={event.title} delay={`delay-${(idx % 2) * 100}`}>
                <article className="group h-full overflow-hidden rounded-xl border border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:border-brand-cyan hover:shadow-card">
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="inline-block rounded-full bg-brand-blue/5 px-3 py-1 font-gotham text-[11px] font-bold uppercase tracking-widest text-brand-blue-light">
                      {event.type}
                    </span>
                    <h3 className="mt-4 font-gotham text-lg font-bold text-brand-blue">
                      {event.title}
                    </h3>
                    <div className="mt-4 flex flex-wrap gap-4 font-gotham text-xs text-gray-600">
                      <span className="inline-flex items-center gap-2">
                        <MdOutlineCalendarMonth className="h-4 w-4 text-brand-green" />
                        {event.date}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <MdOutlinePlace className="h-4 w-4 text-brand-green" />
                        {event.location}
                      </span>
                    </div>
                    <Link
                      to="/contact"
                      className="mt-5 inline-flex items-center gap-2 font-gotham text-sm font-semibold text-brand-blue transition-colors hover:text-brand-green"
                    >
                      Register interest <GoArrowRight />
                    </Link>
                  </div>
                </article>
              </FadeInUp>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-16 lg:py-24">
        <div className="custom-container">
          <FadeInUp>
            <h2 className="mb-10 font-gotham text-3xl font-black uppercase tracking-tight leading-[0.95] text-brand-blue lg:text-5xl">
              Past sessions
            </h2>
          </FadeInUp>
          <div className="divide-y divide-gray-200 border-y border-gray-200">
            {PAST.map((event, idx) => (
              <FadeInUp key={event.title} delay={`delay-${(idx % 3) * 100}`}>
                <div className="flex flex-wrap items-center justify-between gap-3 py-5">
                  <div>
                    <p className="font-gotham text-base font-semibold text-brand-blue">
                      {event.title}
                    </p>
                    <p className="mt-1 font-gotham text-xs text-gray-500">{event.place}</p>
                  </div>
                  <span className="font-gotham text-xs uppercase tracking-widest text-gray-500">
                    {event.date}
                  </span>
                </div>
              </FadeInUp>
            ))}
          </div>

          <FadeInUp delay="delay-200">
            <Link to="/contact">
              <Button variant="default" className="mt-10 px-8 py-3 font-bold">
                Request a recording
              </Button>
            </Link>
          </FadeInUp>
        </div>
      </section>
    </>
  );
}
