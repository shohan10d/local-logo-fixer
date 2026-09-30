const clients = [
  { name: "icddr,b", logo: "/client-logos/icddrb-Logo-Vector.svg-.png", logoClass: "max-h-16" },
  { name: "PRAN", logo: "/client-logos/pran-taste-of-life-transparent.png", logoClass: "max-h-24" },
  { name: "Akij Venture", logo: "/client-logos/akij-venture-official.png", logoClass: "max-h-14 max-w-[82%] sm:max-h-16" },
  { name: "Akij INSAF", logo: "/client-logos/akij-insaf.jpg", logoClass: "max-h-24 scale-110 sm:max-h-24" },
  { name: "Akij Resources", logo: "/client-logos/akij-resources.webp" },
  { name: "Meghna Group", logo: "/client-logos/meghna-group-official.webp", logoClass: "max-h-20 max-w-[88%] sm:max-h-24" },
  { name: "Care Nutrition", logo: "/client-logos/care-nutrition.webp", logoClass: "max-h-16" },
  { name: "ACI", logo: "/client-logos/aci-transparent.png", logoClass: "max-h-20 sm:max-h-24" },
  { name: "Gemcon Group", logo: "/client-logos/gemcon-group.avif", logoClass: "max-h-24 scale-110 sm:max-h-24" },
  { name: "Sher-e-Bangla Agricultural University", logo: "/client-logos/sau.png", logoClass: "max-h-24 scale-110 sm:max-h-24" },
  { name: "Banoful Kishwan Group", logo: "/client-logos/kishwan.png" },
  { name: "United Group", logo: "/client-logos/united-group.svg", invert: true },
  { name: "DXN", logo: "/client-logos/dxn.png" },
  { name: "Sena Kalyan Constructions & Developments", logo: "/client-logos/sena-kalyan.svg" },
  { name: "Elite Steel", logo: "/client-logos/elite-steel.png" },
  { name: "Aqua Paint", logo: "/client-logos/aqua-paint.png" },
  { name: "Reve Group", logo: "/client-logos/reve-group.png", logoClass: "max-h-24 max-w-[88%] sm:max-h-24" },
  { name: "Ajinomoto", logo: "/client-logos/ajinomoto.svg" },
  { name: "Bombay Sweets & Co. Ltd.", logo: "/client-logos/bombay-sweets.png" },
  { name: "Ovijat Food & Beverage Industries Ltd.", logo: "/client-logos/ovijat.png" },
  { name: "Bangladesh Agricultural University", logo: "/client-logos/bau.png", logoClass: "max-h-24 scale-110 sm:max-h-24" },
  { name: "New Zealand Dairy", logo: "/client-logos/new-zealand-dairy.png", logoClass: "max-h-20 w-full max-w-[94%] brightness-0 invert sm:max-h-20" },
];

const Partners = () => {
  return (
    <section className="bg-brand-blue-deep px-5 py-20 text-white lg:py-28">
      <div className="custom-container">
        <div className="border-l-8 border-brand-cyan-light pl-6 md:pl-10">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand-cyan-light">Selected clients</p>
            <h2 className="mt-4 font-gotham text-4xl font-black uppercase leading-[0.95] tracking-tight lg:text-6xl">
              Companies we have worked with
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/80 lg:text-base">
              Supporting organizations across food, healthcare, agriculture,
              manufacturing and construction.
            </p>
          </div>
        </div>

        <div className="mt-14 flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {clients.map(({ name, logo, invert, logoClass }) => (
            <div
              key={name}
              className="group relative flex h-28 w-[calc(50%-0.375rem)] items-center justify-center overflow-hidden rounded-lg border border-white/15 bg-white/5 px-5 py-5 text-center transition duration-300 hover:-translate-y-1 hover:border-brand-cyan-light/60 hover:bg-white/10 sm:h-32 sm:w-[calc(33.333%-0.75rem)] lg:w-[calc(25%-0.75rem)]"
            >
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-brand-cyan transition-transform duration-300 group-hover:scale-x-100" />
              <img
                src={logo}
                alt={`${name} logo`}
                loading="lazy"
                className={`relative max-h-16 w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:max-h-20 ${logoClass ?? ""} ${invert ? "p-2" : ""}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
