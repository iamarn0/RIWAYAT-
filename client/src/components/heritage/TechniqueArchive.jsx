import { useState } from "react";
import { techniques } from "../../data/site.js";
import Container from "../ui/Container.jsx";

export default function TechniqueArchive() {
  const [openName, setOpenName] = useState(techniques[0].name);

  return (
    <section className="py-16 md:py-24" aria-labelledby="techniques-heading">
      <Container>
        <h2 id="techniques-heading" className="display text-[clamp(2.4rem,4vw,3.8rem)]">
          Traditional Techniques
        </h2>
        <p className="mt-4 max-w-2xl text-brown">The methods the notebook keeps returning to. Open a technique to read how the kitchen practises it.</p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {techniques.map((technique, index) => {
            const open = openName === technique.name;
            const panelId = `technique-${technique.name.replace(/\s+/g, "-").toLowerCase()}`;
            return (
              <li key={technique.name} className={`border transition-colors ${open ? "border-charcoal bg-charcoal text-ivory" : "border-sand bg-ivory hover:border-brass"}`}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    className="flex w-full flex-col px-6 pt-7 text-left"
                    onClick={() => setOpenName(open ? "" : technique.name)}
                  >
                    <span className={`font-display text-3xl ${open ? "text-sand" : "text-brown"}`}>{String(index + 1).padStart(2, "0")}</span>
                    <span className="mt-6 font-display text-[clamp(1.8rem,2.5vw,2.25rem)] leading-none">{technique.name}</span>
                    <span className="sr-only">{open ? ", hide details" : ", show details"}</span>
                  </button>
                </h3>
                <div id={panelId} className="px-6 pt-4 pb-7">
                  <p className={`text-sm leading-relaxed ${open ? "text-ivory/80" : "text-brown"}`}>{technique.text}</p>
                  {open ? <p className="mt-4 text-sm leading-relaxed text-sand">{technique.detail}</p> : null}
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
