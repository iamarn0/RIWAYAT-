import { useState } from "react";
import { ingredients } from "../../data/site.js";
import JaaliPattern from "../ui/JaaliPattern.jsx";
import Container from "../ui/Container.jsx";

export default function IngredientWall() {
  const [activeName, setActiveName] = useState(ingredients[0].name);
  const active = ingredients.find((item) => item.name === activeName) || ingredients[0];

  const move = (event) => {
    const keys = ["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp", "Home", "End"];
    if (!keys.includes(event.key)) return;
    event.preventDefault();
    const names = ingredients.map((item) => item.name);
    const current = names.indexOf(activeName);
    let next = current;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = names.length - 1;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = (current + 1) % names.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = (current - 1 + names.length) % names.length;
    const nextName = names[next];
    setActiveName(nextName);
    document.getElementById(`ingredient-${nextName.replace(/\s+/g, "-").toLowerCase()}`)?.focus();
  };

  return (
    <section className="relative overflow-hidden bg-charcoal py-16 text-ivory md:py-24" aria-labelledby="ingredients-wall-heading">
      <JaaliPattern className="absolute inset-0 h-full w-full text-brass opacity-[0.12]" />
      <Container className="relative">
        <h2 id="ingredients-wall-heading" className="display text-[clamp(2.4rem,4vw,3.8rem)]">
          Ingredients Archive
        </h2>
        <p className="mt-4 max-w-xl text-sand">Choose a spice. Origin, flavour and the way this kitchen uses it.</p>

        <div role="tablist" aria-label="Ingredients" aria-orientation="horizontal" className="mt-12 grid grid-cols-2 gap-px bg-ivory/15 sm:grid-cols-3 lg:grid-cols-5" onKeyDown={move}>
          {ingredients.map((item) => {
            const selected = item.name === active.name;
            const id = `ingredient-${item.name.replace(/\s+/g, "-").toLowerCase()}`;
            return (
              <button
                key={item.name}
                id={id}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="ingredient-panel"
                tabIndex={selected ? 0 : -1}
                className={`min-h-24 bg-charcoal px-4 py-5 text-left transition-colors ${selected ? "text-ivory" : "text-sand hover:text-ivory"}`}
                onClick={() => setActiveName(item.name)}
              >
                <span className={`mb-3 block h-1.5 w-1.5 rotate-45 ${selected ? "bg-brass" : "bg-transparent"}`} aria-hidden="true" />
                <span className="block font-display text-[clamp(1.45rem,2vw,1.85rem)] leading-none">{item.name}</span>
              </button>
            );
          })}
        </div>

        <div id="ingredient-panel" role="tabpanel" aria-labelledby={`ingredient-${active.name.replace(/\s+/g, "-").toLowerCase()}`} className="mt-10 grid gap-8 border-t border-ivory/15 pt-8 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h3 className="font-display text-[clamp(2.4rem,8vw,3rem)] leading-tight">{active.name}</h3>
            <p className="mt-4 max-w-sm text-sand">{active.note}</p>
          </div>
          <dl className="grid gap-6 sm:grid-cols-3 lg:col-span-8">
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-brass">Origin</dt>
              <dd className="mt-2 leading-relaxed text-ivory/90">{active.origin}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-brass">Flavour notes</dt>
              <dd className="mt-2 leading-relaxed text-ivory/90">{active.flavour}</dd>
            </div>
            <div>
              <dt className="text-[11px] uppercase tracking-[0.18em] text-brass">Traditional use</dt>
              <dd className="mt-2 leading-relaxed text-ivory/90">{active.use}</dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  );
}
