import { distribution } from "../data/content";
import NetworkMap from "./NetworkMap";

export default function Distribution() {
  return (
    <section id="distribution" className="bg-panel py-24 sm:py-32 overflow-hidden scroll-mt-20">
      <div className="section">
        <div className="section-inner">
          <div className="max-w-2xl mb-16">
            <p className="kicker mb-6">{distribution.kicker}</p>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight mb-6">
              {distribution.heading}
            </h2>
            <p className="text-ivoryDim leading-relaxed text-[17px]">{distribution.intro}</p>
          </div>

          <div className="grid lg:grid-cols-[1fr_0.9fr] gap-14 items-center">
            <div className="grid sm:grid-cols-[1.4fr_1fr] gap-10">
              <div>
                <p className="text-sm font-medium text-gold-light mb-4">What we aim to build</p>
                <ul className="space-y-3">
                  {distribution.aims.map((a) => (
                    <li key={a} className="flex gap-3 text-ivoryDim leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-gold-light mb-4">Regions</p>
                <ul className="space-y-3">
                  {distribution.regions.map((r) => (
                    <li key={r} className="text-ivory font-display">{r}</li>
                  ))}
                </ul>
              </div>
            </div>

            <NetworkMap className="w-full max-w-sm mx-auto" />
          </div>

          <div className="mt-20 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold leading-snug mb-4">
              {distribution.closingHeading}
            </h3>
            <p className="text-ivoryDim">{distribution.closingBody}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
