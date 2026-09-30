import GlowBackground from "./GlowBackground";

function PageHero({ eyebrow, title, highlight, description }) {
  return (
    <section className="relative overflow-hidden bg-brand-blue py-16 lg:py-28">
      <GlowBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-5 text-white">
        <div className="max-w-3xl">
          <p className="eyebrow text-brand-green-light">{eyebrow}</p>
          <h1 className="mt-5 font-gotham text-4xl font-black uppercase leading-[0.95] tracking-tight lg:text-7xl">
            {title}{" "}
            {highlight && (
              <span className="text-brand-green-light">{highlight}</span>
            )}
          </h1>
          <p className="mt-6 max-w-2xl border-l-4 border-brand-green-light pl-5 text-base leading-relaxed text-white/85 lg:text-lg">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}

export default PageHero;
