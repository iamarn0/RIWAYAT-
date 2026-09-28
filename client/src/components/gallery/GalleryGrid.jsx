import { useMemo, useState } from "react";
import { galleryCategories, galleryItems } from "../../data/gallery.js";
import Container from "../ui/Container.jsx";
import Photo from "../ui/Photo.jsx";
import Lightbox from "./Lightbox.jsx";

export default function GalleryGrid() {
  const [category, setCategory] = useState("All");
  const [index, setIndex] = useState(null);

  const items = useMemo(
    () => (category === "All" ? galleryItems : galleryItems.filter((item) => item.category === category)),
    [category],
  );

  return (
    <section className="py-14 md:py-20">
      <Container>
        <div role="group" aria-label="Gallery categories">
          <div className="flex flex-wrap gap-2">
            {["All", ...galleryCategories].map((name) => {
              const selected = category === name;
              return (
                <button
                  key={name}
                  type="button"
                  aria-pressed={selected}
                  className={`shrink-0 border px-3 py-2 text-[11px] uppercase tracking-[0.14em] ${selected ? "border-charcoal bg-charcoal text-ivory" : "border-sand text-brown"}`}
                  onClick={() => {
                    setCategory(name);
                    setIndex(null);
                  }}
                >
                  {name}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-10 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((item, itemIndex) => (
            <figure key={item.id} className="mb-4 break-inside-avoid">
              <button type="button" className="group block w-full overflow-hidden bg-sand text-left" onClick={() => setIndex(itemIndex)}>
                <Photo
                  src={item.src}
                  alt={item.alt}
                  className={`w-full object-cover motion-safe:transition motion-safe:duration-700 motion-safe:group-hover:scale-[1.04] ${item.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                />
              </button>
              <figcaption className="mt-3 text-sm text-brown">
                <span className="text-[11px] uppercase tracking-[0.16em] text-brown">{item.category}</span>
                <span className="mt-1 block font-display text-2xl text-charcoal">{item.caption}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
      <Lightbox items={items} index={index} onClose={() => setIndex(null)} onChange={setIndex} />
    </section>
  );
}
