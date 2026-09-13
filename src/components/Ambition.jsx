import { ambition } from "../data/content";

export default function Ambition() {
  return (
    <section id="ambition" className="bg-panel py-24 sm:py-32 scroll-mt-20">
      <div className="section">
        <div className="section-inner">
          <div className="max-w-2xl mb-16">
            <p className="kicker mb-6">{ambition.kicker}</p>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-6">
              {ambition.heading}
            </h2>
            <p className="text-ivoryDim leading-relaxed text-[17px]">{ambition.intro}</p>
          </div>

          <div className="divider">
            {ambition.pillars.map((p, i) => (
              <div
                key={p.title}
                className="grid sm:grid-cols-[1fr_2fr] gap-4 sm:gap-12 py-8 border-b border-gold/15 items-baseline"
              >
                <h3 className="font-display text-xl text-ivory">{p.title}</h3>
                <p className="text-ivoryDim leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
