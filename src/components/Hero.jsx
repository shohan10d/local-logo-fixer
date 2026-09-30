import Button from "./Button";
import CountUp from "./CountUp";
import GlobeVisual from "./GlobeVisual";

const STATS = [
  { value: "60+", label: "Countries served" },
  { value: "180", label: "Accredited labs" },
  { value: "4,500", label: "Experts worldwide" },
];

function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-5rem)] overflow-hidden bg-brand-blue-deep">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-35" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-5 py-12 lg:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-[1.06fr_.94fr] lg:gap-12">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-green-light">
              Testing. Inspection. Certification
            </p>
            <h1 className="mt-5 font-gotham text-4xl font-black uppercase leading-[0.95] text-white sm:text-6xl lg:text-7xl">
              The global
              <br />
              standard for
              <br />
              <span className="text-brand-green-light">quality assurance</span>
            </h1>
            <div className="mt-8 max-w-xl border-l-4 border-brand-green-light pl-5">
              <p className="text-base leading-relaxed text-white/85 lg:text-lg">
                Protect your brand and secure your entire supply chain.
                TICAdvisor delivers expert testing, inspection and certification
                services built for the most rigorous international standards.
              </p>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button className="px-8 py-4 text-sm">Talk to an expert</Button>
              <Button variant="outline" className="px-8 py-4 text-sm">
                Explore services
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <GlobeVisual />
          </div>
        </div>

        <div className="mt-10 border-y border-white/15 bg-white/5 lg:mt-12">
          <div className="grid grid-cols-3 divide-x divide-white/10">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex min-h-28 flex-col items-center justify-center px-3 py-5 text-center sm:min-h-32"
              >
                <p className="font-gotham text-3xl font-black text-white sm:text-4xl lg:text-5xl">
                  <CountUp value={stat.value} />
                </p>
                <p className="mt-2 max-w-36 text-[10px] font-bold uppercase tracking-widest text-brand-cyan-light sm:text-[11px]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
