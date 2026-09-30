import Button from "./Button";

const CTASection = () => {
  return (
    <section className="mt-14 md:mt-20">
      <div className="border-l-8 border-brand-green-light bg-brand-blue px-6 py-10 text-left shadow-card md:px-12 md:py-12">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_auto] md:gap-12">
          <div>
          <h2 className="font-gotham text-3xl font-black uppercase tracking-tight text-white md:text-5xl">
            See. Decide. Act.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg">
            TIC Advisor is the central platform where quality verification,
            analytics and powerful tools combine to deliver trusted compliance.
          </p>
          </div>
          <Button className="w-full px-8 py-4 text-sm md:w-auto">Get started</Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
