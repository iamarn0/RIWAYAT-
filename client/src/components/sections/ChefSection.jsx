import { chef } from "../../data/site.js";
import Botanical from "../ui/Botanical.jsx";
import Container from "../ui/Container.jsx";
import Photo from "../ui/Photo.jsx";
import Reveal from "../ui/Reveal.jsx";

export default function ChefSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" aria-labelledby="chef-heading">
      <Botanical className="pointer-events-none absolute -top-6 right-0 hidden h-64 w-32 text-brass/50 lg:block" />
      <Container className="grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="overflow-hidden bg-sand">
            <Photo src={chef.image} alt={chef.imageAlt} className="aspect-[4/5] w-full object-cover object-left sm:aspect-[5/4]" />
          </div>
        </Reveal>
        <Reveal className="lg:col-span-6 lg:col-start-7" delay={0.08}>
          <p className="eyebrow">05 — The Kitchen</p>
          <h2 id="chef-heading" className="display mt-4 text-[clamp(2.6rem,5vw,4.4rem)]">
            The Hands Behind the Tradition
          </h2>
          <p className="mt-6 font-display text-3xl">{chef.name}</p>
          <p className="text-sm uppercase tracking-[0.16em] text-brown">
            {chef.role}
            <span className="mx-2 text-brass" aria-hidden="true">
              ·
            </span>
            {chef.note}
          </p>
          <div className="mt-6 space-y-4 text-ink">
            {chef.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <blockquote className="mt-8 border-l border-brass pl-5">
            <p className="font-display text-2xl italic leading-snug text-brown">“{chef.quote}”</p>
            <p className="mt-3 font-display text-xl tracking-[0.2em] text-brown" aria-hidden="true">
              A.M.
            </p>
          </blockquote>
        </Reveal>
      </Container>
    </section>
  );
}
