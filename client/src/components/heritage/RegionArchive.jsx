import { Link } from "react-router-dom";
import { regions } from "../../data/site.js";
import Container from "../ui/Container.jsx";
import Photo from "../ui/Photo.jsx";

export default function RegionArchive() {
  return (
    <section className="py-16 md:py-24" aria-labelledby="regions-archive-heading">
      <Container>
        <p className="eyebrow">The Map</p>
        <h2 id="regions-archive-heading" className="display mt-4 max-w-3xl text-[clamp(2.4rem,4vw,3.8rem)]">
          Traditional Indian Culinary Regions
        </h2>
        <p className="mt-5 max-w-2xl text-brown">
          Seven kitchens lend this table its grammar. Each note is a portrait for the menu, not a claim to speak for a place.
        </p>

        <div className="mt-6">
          {regions.map((region, index) => {
            const reversed = index % 2 === 1;
            return (
              <article key={region.id} className="grid items-center gap-6 border-b border-sand py-10 last:border-b-0 md:py-14 lg:grid-cols-12 lg:gap-16">
                <div className={`overflow-hidden bg-sand lg:col-span-7 ${reversed ? "lg:col-start-6" : ""}`}>
                  <Photo
                    src={region.image}
                    alt={region.imageAlt}
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="aspect-[4/3] w-full object-cover sm:aspect-[16/10]"
                  />
                </div>
                <div className={`lg:col-span-5 ${reversed ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                  <p className="text-[11px] uppercase tracking-[0.22em] text-brown">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="display mt-3 text-[clamp(2.4rem,4vw,3.6rem)]">{region.name}</h3>
                  <p className="mt-4 max-w-md text-lg leading-relaxed">{region.line}</p>
                  <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-brown">Flavour profile</p>
                  <p className="mt-2 max-w-md font-display text-2xl leading-snug italic text-ink">{region.flavour}</p>
                  <Link
                    to="/menu"
                    className="mt-6 inline-block text-[12px] uppercase tracking-[0.2em] text-clay underline decoration-clay/40 underline-offset-4"
                  >
                    Taste this region
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
