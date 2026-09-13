import { site } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36 scroll-mt-20">
      <div
        className="pointer-events-none absolute -bottom-56 left-1/2 -translate-x-1/2 w-[720px] h-[720px] rounded-full opacity-[0.14] blur-3xl"
        style={{ background: "radial-gradient(circle, #C9A227 0%, transparent 70%)" }}
      />

      <div className="section relative text-center">
        <div className="section-inner">
          <p className="kicker justify-center mb-6">Let's talk</p>
          <h2 className="text-3xl sm:text-5xl font-semibold leading-tight mb-6">
            Let's build growth together.
          </h2>
          <p className="text-ivoryDim max-w-lg mx-auto mb-10">
            Introducing, developing and growing international brands in Mauritius — get in touch to start the conversation.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-14">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center justify-center bg-gold text-void font-semibold px-7 py-3.5 rounded-full hover:bg-gold-light transition-colors"
            >
              {site.email}
            </a>
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center text-ivory border border-ivory/20 px-7 py-3.5 rounded-full hover:border-gold/50 hover:text-gold-light transition-colors"
            >
              {site.phone}
            </a>
          </div>

          <p className="text-sm text-ivoryDim">{site.address}</p>
          <p className="text-sm text-gold-light/70 mt-1">Indian Ocean</p>

          <p className="mt-14 text-gold-light font-medium tracking-wide">
            {site.strapline}
          </p>
        </div>
      </div>
    </section>
  );
}
