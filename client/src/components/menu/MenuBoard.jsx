import { useMemo, useState } from "react";
import { categories, menu } from "../../data/menu.js";
import { formatPrice } from "../../utils/format.js";
import Container from "../ui/Container.jsx";
import DietMark from "../ui/DietMark.jsx";

export default function MenuBoard() {
  const [category, setCategory] = useState("All");
  const [vegetarianOnly, setVegetarianOnly] = useState(false);

  const groups = useMemo(() => {
    const visibleCategories = category === "All" ? categories : categories.filter((item) => item === category);
    return visibleCategories
      .map((name) => ({
        name,
        items: menu.filter((item) => item.category === name && (!vegetarianOnly || item.vegetarian)),
      }))
      .filter((group) => group.items.length);
  }, [category, vegetarianOnly]);

  return (
    <section className="py-14 md:py-20" aria-labelledby="menu-board-heading">
      <Container>
        <h2 id="menu-board-heading" className="sr-only">
          Menu dishes
        </h2>
        <div className="flex flex-col gap-4 border-b border-sand pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div role="group" aria-label="Menu categories">
            <div className="flex flex-wrap gap-2">
              {["All", ...categories].map((name) => {
                const selected = category === name;
                return (
                  <button
                    key={name}
                    type="button"
                    aria-pressed={selected}
                    className={`shrink-0 border px-3 py-2 text-[11px] uppercase tracking-[0.14em] transition-colors ${selected ? "border-charcoal bg-charcoal text-ivory" : "border-sand text-brown hover:border-brass hover:text-charcoal"}`}
                    onClick={() => setCategory(name)}
                  >
                    {name}
                  </button>
                );
              })}
            </div>
          </div>
          <button
            type="button"
            aria-pressed={vegetarianOnly}
            className={`shrink-0 self-start border px-3 py-2 text-[11px] uppercase tracking-[0.14em] ${vegetarianOnly ? "border-leaf bg-leaf text-ivory" : "border-sand text-brown"}`}
            onClick={() => setVegetarianOnly((value) => !value)}
          >
            Vegetarian only
          </button>
        </div>

        <p className="mt-6 max-w-2xl text-sm text-brown">
          Prices are fictional and written for this portfolio demonstration. Lunch is served from 12:00 PM, dinner from 6:30 PM. The house is closed on Monday.
        </p>

        {groups.length === 0 ? (
          <p className="mt-12 text-lg" role="status">
            No dishes match this filter. Try another category.
          </p>
        ) : (
          <div className="mt-12 space-y-16">
            {groups.map((group) => (
              <section key={group.name} aria-labelledby={`cat-${group.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`}>
                <h3 id={`cat-${group.name.replace(/[^a-z0-9]+/gi, "-").toLowerCase()}`} className="font-display text-4xl">
                  {group.name}
                </h3>
                <ul className="mt-6 divide-y divide-sand/80 border-t border-sand">
                  {group.items.map((item) => (
                    <li key={item.id} className="grid gap-2 py-5 sm:grid-cols-[1fr_auto] sm:items-baseline sm:gap-8">
                      <div className="min-w-0">
                        <div className="flex items-baseline gap-3">
                          <h4 className="font-display text-[1.7rem] leading-tight">{item.name}</h4>
                          <span className="hidden flex-1 border-b border-dotted border-brass/70 sm:block" aria-hidden="true" />
                        </div>
                        <p className="mt-1 max-w-2xl text-sm text-brown">{item.description}</p>
                        <div className="mt-2">
                          <DietMark vegetarian={item.vegetarian} />
                        </div>
                      </div>
                      <p className="font-display text-2xl sm:text-right">{formatPrice(item.price)}</p>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
