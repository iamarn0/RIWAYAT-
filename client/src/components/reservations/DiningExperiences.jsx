import { diningExperiences } from "../../data/site.js";
import Container from "../ui/Container.jsx";
import Photo from "../ui/Photo.jsx";

export default function DiningExperiences({ selectedId, onSelect }) {
  return (
    <section className="border-b border-sand py-14 md:py-20" aria-labelledby="dining-experiences-heading">
      <Container>
        <p className="eyebrow">How you are received</p>
        <h2 id="dining-experiences-heading" className="display mt-4 max-w-3xl text-[clamp(2.4rem,4vw,3.8rem)]">
          Choose the shape of the evening.
        </h2>
        <p className="mt-5 max-w-2xl text-brown">
          The form below still asks for a table. These are the ways the house would keep it. Larger parties remain a conversation.
        </p>

        <ul className="mt-12 grid gap-10 md:grid-cols-2 md:gap-x-8 md:gap-y-12">
          {diningExperiences.map((experience) => {
            const selected = experience.id === selectedId;
            return (
              <li key={experience.id}>
                <button
                  type="button"
                  aria-pressed={selected}
                  className="group w-full text-left"
                  onClick={() => onSelect(experience.id)}
                >
                  <div className="overflow-hidden bg-sand">
                    <Photo
                      src={experience.image}
                      alt=""
                      sizes="(max-width: 768px) 100vw, 45vw"
                      className="aspect-[16/10] w-full object-cover motion-safe:transition motion-safe:duration-700 motion-safe:group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className={`mt-5 border-l-2 pl-4 ${selected ? "border-brass" : "border-transparent"}`}>
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                      <h3 className="font-display text-[clamp(1.8rem,2.5vw,2.4rem)] leading-none">{experience.name}</h3>
                      <p className="shrink-0 text-[11px] uppercase tracking-[0.16em] text-brown">{experience.guests}</p>
                    </div>
                    <p className="mt-3 max-w-md text-brown">{experience.description}</p>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.16em] text-clay">{selected ? "Selected for your request" : "Select this experience"}</p>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
