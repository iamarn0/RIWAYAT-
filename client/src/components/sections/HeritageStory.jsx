import { timeline } from "../../data/site.js";
import Container from "../ui/Container.jsx";
import Reveal from "../ui/Reveal.jsx";

export default function HeritageStory() {
  return (
    <section className="bg-forest py-20 text-ivory md:py-28" aria-labelledby="story-heading">
      <Container>
        <Reveal>
          <p className="text-[11px] uppercase tracking-[0.28em] text-sand">02 — A fictional telling</p>
          <h2 id="story-heading" className="display mt-4 max-w-3xl text-[clamp(2.6rem,5vw,4.6rem)]">
            The Story Behind the Table
          </h2>
          <p className="mt-6 max-w-xl text-ivory/80">
            These dates belong to an imagined house. They are not a historical record. They are how RIWAYAT explains the feeling it wants a guest to have: that someone kept the recipes, and someone else was trusted to cook them.
          </p>
        </Reveal>

        <ol className="relative mt-16 space-y-0 border-l border-brass/50 pl-0">
          {timeline.map((item, index) => (
            <Reveal key={item.year} delay={index * 0.05}>
              <li className="relative grid gap-3 py-8 pl-10 md:grid-cols-[8rem_1fr] md:gap-10 md:py-10">
                <span className="absolute top-10 left-0 h-2.5 w-2.5 -translate-x-1/2 rotate-45 bg-brass" aria-hidden="true" />
                <p className="font-display text-4xl text-sand md:text-5xl">{item.year}</p>
                <div>
                  <h3 className="font-display text-3xl leading-tight">{item.title}</h3>
                  <p className="mt-3 max-w-xl text-ivory/75">{item.text}</p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
