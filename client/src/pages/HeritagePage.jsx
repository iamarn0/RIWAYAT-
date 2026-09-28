import { useState } from "react";
import { ingredients, techniques, traditions } from "../data/site.js";
import JaaliPattern from "../components/ui/JaaliPattern.jsx";
import PageHero from "../components/layout/PageHero.jsx";
import Seo from "../components/layout/Seo.jsx";
import Container from "../components/ui/Container.jsx";

export default function HeritagePage() {
  const [activeId, setActiveId] = useState(traditions[0].id);
  const active = traditions.find((item) => item.id === activeId) || traditions[0];

  return (
    <>
      <Seo
        title="Heritage"
        description="A digital archive of the culinary traditions, ingredients and techniques behind RIWAYAT, a fictional Indian restaurant."
        path="/heritage"
      />
      <PageHero
        eyebrow="The Archive"
        title="A kitchen with a longer memory than the room."
        lede="This page is a small archive: regions, ingredients, and the techniques that keep a recipe from becoming a costume. RIWAYAT cooks from it. It does not put it behind glass."
      />

      <section className="py-16 md:py-24" aria-labelledby="traditions-heading">
        <Container>
          <h2 id="traditions-heading" className="display text-[clamp(2.4rem,4vw,3.8rem)]">
            Indian Culinary Traditions
          </h2>
          <p className="mt-4 max-w-2xl text-brown">Select a tradition to read how it arrives at this table.</p>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {traditions.map((tradition) => {
              const selected = tradition.id === active.id;
              return (
                <button
                  key={tradition.id}
                  type="button"
                  aria-expanded={selected}
                  aria-controls="tradition-detail"
                  className={`border px-4 py-5 text-left transition-colors ${selected ? "border-charcoal bg-charcoal text-ivory" : "border-sand hover:border-brass"}`}
                  onClick={() => setActiveId(tradition.id)}
                >
                  <span className="block font-display text-3xl">{tradition.name}</span>
                  <span className={`mt-2 block text-sm ${selected ? "text-sand" : "text-brown"}`}>{tradition.summary}</span>
                </button>
              );
            })}
          </div>
          <div id="tradition-detail" className="mt-8 border-l border-brass pl-6" aria-live="polite">
            <h3 className="font-display text-4xl">{active.name}</h3>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed">{active.detail}</p>
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-charcoal py-16 text-ivory md:py-24" aria-labelledby="ingredients-wall-heading">
        <JaaliPattern className="absolute inset-0 h-full w-full text-brass opacity-[0.12]" />
        <Container className="relative">
          <h2 id="ingredients-wall-heading" className="display text-[clamp(2.4rem,4vw,3.8rem)]">
            Ingredients
          </h2>
          <p className="mt-4 max-w-xl text-sand">A wall of the spices the kitchen actually reaches for.</p>
          <ul className="mt-12 grid grid-cols-2 gap-px bg-ivory/15 md:grid-cols-5">
            {ingredients.map((item) => (
              <li key={item.name} className="bg-charcoal p-5">
                <h3 className="font-display text-3xl leading-none">{item.name}</h3>
                <p className="mt-3 text-sm text-sand">{item.note}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="techniques-heading">
        <Container>
          <h2 id="techniques-heading" className="display text-[clamp(2.4rem,4vw,3.8rem)]">
            Traditional Techniques
          </h2>
          <ol className="mt-12 divide-y divide-sand border-y border-sand">
            {techniques.map((technique, index) => (
              <li key={technique.name} className="grid gap-3 py-8 md:grid-cols-[6rem_14rem_1fr] md:items-baseline md:gap-8">
                <span className="font-display text-3xl text-brown">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="font-display text-3xl">{technique.name}</h3>
                <p className="text-brown">{technique.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </>
  );
}
