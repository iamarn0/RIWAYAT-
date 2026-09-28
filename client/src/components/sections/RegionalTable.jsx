import { useState } from "react";
import { getDish } from "../../data/menu.js";
import { regions } from "../../data/site.js";
import { formatPrice } from "../../utils/format.js";
import Container from "../ui/Container.jsx";
import DietMark from "../ui/DietMark.jsx";
import Photo from "../ui/Photo.jsx";
import Reveal from "../ui/Reveal.jsx";

export default function RegionalTable() {
  const [activeId, setActiveId] = useState(regions[0].id);
  const active = regions.find((region) => region.id === activeId) || regions[0];
  const dishes = active.dishIds.map((id) => getDish(id)).filter(Boolean);

  return (
    <section className="bg-ivory-deep py-20 md:py-28" aria-labelledby="regions-heading">
      <Container>
        <Reveal>
          <p className="eyebrow">06 — The Regions</p>
          <h2 id="regions-heading" className="display mt-4 max-w-3xl text-[clamp(2.6rem,5vw,4.6rem)]">
            A Table Inspired by India
          </h2>
          <p className="prose-copy mt-6 text-brown">
            RIWAYAT is not a single cuisine wearing a uniform. The menu moves — Awadh to Kerala, Punjab to Bengal — because Indian food was never one recipe. Choose a region to see what it lends this table.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div
            className="lg:col-span-4"
            role="tablist"
            aria-label="Regions of India"
            aria-orientation="vertical"
            onKeyDown={(event) => {
              const keys = ["ArrowDown", "ArrowUp", "Home", "End"];
              if (!keys.includes(event.key)) return;
              event.preventDefault();
              const ids = regions.map((region) => region.id);
              const current = ids.indexOf(activeId);
              let next = current;
              if (event.key === "Home") next = 0;
              if (event.key === "End") next = ids.length - 1;
              if (event.key === "ArrowDown") next = (current + 1) % ids.length;
              if (event.key === "ArrowUp") next = (current - 1 + ids.length) % ids.length;
              const nextId = ids[next];
              setActiveId(nextId);
              document.getElementById(`region-tab-${nextId}`)?.focus();
            }}
          >
            {regions.map((region) => {
              const selected = region.id === active.id;
              return (
                <button
                  key={region.id}
                  type="button"
                  role="tab"
                  id={`region-tab-${region.id}`}
                  aria-selected={selected}
                  aria-controls="region-panel"
                  tabIndex={selected ? 0 : -1}
                  className={`flex w-full items-baseline justify-between border-b border-sand py-4 text-left transition-colors ${selected ? "text-charcoal" : "text-brown hover:text-charcoal"}`}
                  onClick={() => setActiveId(region.id)}
                >
                  <span className="font-display text-3xl">{region.name}</span>
                  <span className={`h-1.5 w-1.5 rotate-45 ${selected ? "bg-terracotta" : "bg-transparent"}`} aria-hidden="true" />
                </button>
              );
            })}
          </div>

          <div
            className="lg:col-span-8"
            role="tabpanel"
            id="region-panel"
            aria-labelledby={`region-tab-${active.id}`}
          >
            <div className="overflow-hidden bg-sand">
              <Photo src={active.image} alt={active.imageAlt} className="aspect-[16/10] w-full object-cover" />
            </div>
            <p className="mt-6 max-w-xl font-display text-3xl leading-snug">{active.line}</p>
            <ul className="mt-8 divide-y divide-sand border-t border-sand">
              {dishes.map((dish) => (
                <li key={dish.id} className="flex flex-col gap-2 py-4 sm:flex-row sm:items-baseline sm:justify-between">
                  <div>
                    <p className="font-display text-2xl">{dish.name}</p>
                    <p className="text-sm text-brown">{dish.description}</p>
                  </div>
                  <div className="flex items-center gap-4 sm:flex-col sm:items-end sm:gap-1">
                    <span className="font-display text-xl">{formatPrice(dish.price)}</span>
                    <DietMark vegetarian={dish.vegetarian} />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
