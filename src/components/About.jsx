import { foundation } from "../data/content";

export default function About() {
  return (
    <section id="about" className="section py-24 sm:py-32 scroll-mt-20">
      <div className="section-inner">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
          <div>
            <p className="kicker mb-6">{foundation.kicker}</p>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight max-w-md">
              {foundation.heading}
            </h2>
          </div>

          <div className="space-y-6 text-ivoryDim leading-relaxed text-[17px]">
            <p>{foundation.intro}</p>
            <p>{foundation.body}</p>

            <div className="pt-4 divider" />

            <div className="grid sm:grid-cols-2 gap-8 pt-2">
              {foundation.pillars.map((p) => (
                <div key={p.label}>
                  <p className="text-ivory font-display font-medium mb-1.5">{p.label}</p>
                  <p className="text-sm text-ivoryDim">{p.detail}</p>
                </div>
              ))}
            </div>
            <p className="text-sm text-gold-light/80 italic pt-1">{foundation.pillarsNote}</p>

            <p className="pt-4">{foundation.closing}</p>

            <p className="pt-2 text-gold-light font-medium tracking-wide">
              {foundation.footerLine}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
