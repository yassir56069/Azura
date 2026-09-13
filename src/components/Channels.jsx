import { channels } from "../data/content";

export default function Channels() {
  return (
    <section id="channels" className="section py-24 sm:py-32 scroll-mt-20">
      <div className="section-inner">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
          <div>
            <p className="kicker mb-6">{channels.kicker}</p>
            <h2 className="text-3xl sm:text-4xl font-semibold leading-tight max-w-md mb-6">
              {channels.heading}
            </h2>
            <p className="text-ivoryDim leading-relaxed">{channels.intro}</p>
          </div>

          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-1">
            {channels.list.map((c) => (
              <li
                key={c.name}
                className="flex items-start gap-3 py-4 border-b border-gold/10"
              >
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                <div>
                  <p className="text-ivory font-medium">{c.name}</p>
                  <p className="text-sm text-ivoryDim mt-0.5">{c.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
