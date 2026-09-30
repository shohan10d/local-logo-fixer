import GlowBackground from "./GlowBackground";
import {
  MdOutlineFastfood,
  MdOutlineAgriculture,
  MdOutlineLocalShipping,
  MdOutlineShoppingBag,
  MdOutlineMedicalServices,
  MdOutlineSecurity,
  MdOutlineAssignment,
  MdOutlinePublic,
} from "react-icons/md";

const SERVICES = [
  {
    title: "Food",
    description:
      "Safeguard food safety with advanced analytical services, efficient solutions, crisis management and fast turnaround.",
    Icon: MdOutlineFastfood,
  },
  {
    title: "Agriculture",
    description:
      "Mitigate risk, ensure compliance and boost transparency with tailored agricultural testing, inspection and certification.",
    Icon: MdOutlineAgriculture,
  },
  {
    title: "Minerals & Metals",
    description:
      "From exploration to recycling: inspection, sampling, testing and certification services across the value chain.",
    Icon: MdOutlineLocalShipping,
  },
  {
    title: "Consumer Products",
    description:
      "With our expert network, ensure your products meet specifications, quality standards and regulatory requirements.",
    Icon: MdOutlineShoppingBag,
  },
  {
    title: "Pharmaceutical",
    description:
      "Advanced pharmaceutical testing services to evaluate potency, dosage and quality for safe, effective products.",
    Icon: MdOutlineMedicalServices,
  },
  {
    title: "Certification",
    description:
      "Certification, verification and audit services that help organisations demonstrate they meet key standards.",
    Icon: MdOutlineSecurity,
  },
  {
    title: "Verification of Conformity",
    description:
      "Ensure shipments meet destination standards through a valid Certificate of Conformity.",
    Icon: MdOutlineAssignment,
  },
  {
    title: "Carbon & Environment",
    description:
      "Carbon and environmental certification schemes that prove product and supply chain performance.",
    Icon: MdOutlinePublic,
  },
];

function ServicesSection() {
  return (
    <section className="relative overflow-hidden bg-brand-blue px-5 py-20 lg:py-28">
      <GlowBackground />

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="max-w-3xl border-l-8 border-brand-green-light pl-6 md:pl-10">
          <p className="eyebrow text-brand-cyan-light">What we do</p>
          <h2 className="mt-4 font-gotham text-4xl font-black uppercase leading-[0.95] tracking-tight text-white lg:text-6xl">
            Our services
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/80 lg:text-base">
            We provide testing, inspection and certification services that help
            clients navigate evolving regulations, ensure product compliance and
            support their sustainability journey.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px bg-white/15 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ title, description, Icon }) => (
            <div
              key={title}
              className="group flex h-full flex-col gap-4 bg-brand-blue p-8 hover:bg-brand-blue-light"
            >
              <Icon className="h-10 w-10 text-brand-green-light" />
              <h3 className="font-gotham text-lg font-black uppercase leading-tight text-white">
                {title}
              </h3>
              <p className="text-[13px] leading-relaxed text-white/75">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
