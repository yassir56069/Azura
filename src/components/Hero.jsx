import { site } from "../data/content";
import NetworkMap from "./NetworkMap";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* subtle warm radial glow, single deliberate accent rather than scattered gradients */}
      <div
        className="pointer-events-none absolute -top-40 right-0 w-[640px] h-[640px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #C9A227 0%, transparent 70%)" }}
      />

      <div className="section relative">
        <div className="section-inner grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          <div className="animate-riseIn">
            <p className="kicker mb-6">{site.location} · {site.sector}</p>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.08] font-semibold text-ivory max-w-xl">
              Building the next generation of food &amp; beverage brands in Mauritius.
            </h1>
            <p className="mt-6 text-lg text-ivoryDim max-w-lg leading-relaxed">
              {site.tagline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-gold text-void font-semibold px-6 py-3.5 rounded-full hover:bg-gold-light transition-colors"
              >
                Partner with Azura
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center text-ivory border border-ivory/20 px-6 py-3.5 rounded-full hover:border-gold/50 hover:text-gold-light transition-colors"
              >
                Learn more
              </a>
            </div>

            <p className="mt-12 text-sm text-gold-light/80 font-medium">
              {site.strapline}
            </p>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <NetworkMap className="w-full max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
