import { testimonials } from "../../data/site.js";
import Container from "../ui/Container.jsx";
import Photo from "../ui/Photo.jsx";
import Reveal from "../ui/Reveal.jsx";

function GuestNote({ guest, featured = false }) {
  return (
    <figure className={`grid gap-5 ${featured ? "sm:grid-cols-[7.5rem_1fr] sm:gap-8" : "grid-cols-[4.5rem_1fr] sm:grid-cols-[5.5rem_1fr]"}`}>
      <div className="overflow-hidden bg-sand">
        <Photo
          src={guest.image}
          alt={guest.imageAlt}
          sizes={featured ? "120px" : "88px"}
          className="aspect-square w-full object-cover"
        />
      </div>
      <div className="min-w-0">
        <blockquote>
          <p className={`font-display leading-snug text-ivory italic ${featured ? "text-[clamp(1.6rem,2.4vw,2.15rem)]" : "text-xl sm:text-2xl"}`}>
            “{guest.quote}”
          </p>
        </blockquote>
        <figcaption className="mt-4">
          <span className="block font-medium text-ivory">{guest.name}</span>
          <span className="mt-1 block text-sm text-sand">
            {guest.city}
            <span className="mx-2 text-brass" aria-hidden="true">
              ·
            </span>
            {guest.occasion}
          </span>
        </figcaption>
      </div>
    </figure>
  );
}

export default function Testimonials() {
  const [lead, ...rest] = testimonials;

  return (
    <section className="bg-forest py-20 text-ivory md:py-28" aria-labelledby="guests-heading">
      <Container>
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-sand">From the Table</p>
          <h2 id="guests-heading" className="display mt-4 max-w-3xl text-[clamp(2.6rem,5vw,4.4rem)]">
            Evenings, remembered.
          </h2>
          <p className="mt-5 max-w-xl text-sm leading-relaxed text-sand">
            Guest notes composed for this house. They are part of the demonstration, not reviews from a real dining room.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <GuestNote guest={lead} featured />
          </div>
          <div className="flex flex-col gap-10 lg:col-span-5">
            {rest.map((guest) => (
              <GuestNote key={guest.name} guest={guest} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
