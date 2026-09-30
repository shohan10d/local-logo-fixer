import infoCards from "../data/infoCards.json";

function InfoCards() {
  return (
    <section className="bg-white px-5 py-16 lg:py-24">
      <div className="custom-container">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((card, idx) => (
            <article
              key={idx}
              className="group border-2 border-gray-200 bg-white hover:border-brand-blue"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={`/${card.image}`}
                  alt={card.title}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="border-t-4 border-brand-green-light p-5">
                <h3 className="font-gotham text-base font-black uppercase tracking-wide text-brand-blue">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {card.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default InfoCards;
