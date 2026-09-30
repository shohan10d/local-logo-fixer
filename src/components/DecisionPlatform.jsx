import React from "react";
import CTASection from "./CTASection";

import cards from "../data/platformCards.json";

const DecisionPlatform = () => {
  return (
    <section className="bg-white px-5 py-20 text-gray-900 lg:py-28">
      <div className="custom-container">
        <div className="max-w-4xl border-l-8 border-brand-blue pl-6 md:pl-10">
          <h2 className="font-gotham text-4xl font-black uppercase leading-[0.95] tracking-tight text-brand-blue md:text-6xl">
            Testing. Inspection.
            <br />
            Certification.
          </h2>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <p className="text-base leading-relaxed text-gray-600 md:text-lg">
            When the scope of your supply chain is global and regulatory
            requirements change frequently, the potential for compliance risks
            increases.
          </p>
          <p className="text-base leading-relaxed text-gray-600 md:text-lg">
            TIC Advisor combines powerful testing, inspection and certification
            capabilities into a single trusted partnership, providing the
            critical insights needed to make decisions with confidence.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-px bg-gray-200 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="group bg-brand-blue px-6 py-10 text-left hover:bg-brand-blue-light"
            >
              <span className="font-gotham text-xs font-black tracking-widest text-brand-green-light">
                0{idx + 1}
              </span>
              <h6 className="mt-5 font-gotham text-xl font-black uppercase leading-tight text-white md:text-2xl">
                {card.title}
              </h6>
              <p className="mt-3 text-sm leading-relaxed text-white/80">
                {card.description}
              </p>
            </div>
          ))}
        </div>
        <CTASection />
      </div>
    </section>
  );
};

export default DecisionPlatform;
