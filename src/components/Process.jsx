import { process } from "../data/content";

export default function Process() {
  return (
    <section id="how-we-work" className="section py-24 sm:py-32 scroll-mt-20">
      <div className="section-inner">
        <div className="max-w-2xl mb-16">
          <p className="kicker mb-6">{process.kicker}</p>
          <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-6">
            {process.heading}
          </h2>
          <p className="text-ivoryDim leading-relaxed text-[17px]">{process.intro}</p>
        </div>

        <ol className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-px bg-gold/15" aria-hidden="true" />
          {process.steps.map((s, i) => (
            <li key={s.title} className="relative flex gap-6 pb-12 last:pb-0">
              <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-panel border border-gold/40 flex items-center justify-center font-display text-sm text-gold-light">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="pt-1.5">
                <h3 className="font-display text-lg text-ivory mb-1.5">{s.title}</h3>
                <p className="text-ivoryDim leading-relaxed max-w-xl">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
