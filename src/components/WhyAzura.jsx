import { whyAzura } from "../data/content";

export default function WhyAzura() {
  return (
    <section className="bg-panel py-24 sm:py-32">
      <div className="section">
        <div className="section-inner max-w-3xl">
          <p className="kicker mb-6">{whyAzura.kicker}</p>
          <h2 className="text-3xl sm:text-[2.5rem] font-semibold leading-tight mb-8">
            {whyAzura.heading}
          </h2>
          <p className="text-ivoryDim leading-relaxed text-lg">{whyAzura.body}</p>
        </div>
      </div>
    </section>
  );
}
