import { timeline } from "../../data/site.js";
import Container from "../ui/Container.jsx";

export default function HeritageTimeline() {
  return (
    <section className="bg-forest py-16 text-ivory md:py-24" aria-labelledby="timeline-heading">
      <Container>
        <p className="text-[11px] uppercase tracking-[0.28em] text-sand">Storytelling, not a historical record</p>
        <h2 id="timeline-heading" className="display mt-4 max-w-3xl text-[clamp(2.4rem,4vw,3.8rem)]">
          A timeline written for the house
        </h2>
        <p className="mt-6 max-w-2xl border border-brass/40 px-5 py-4 text-sm leading-relaxed text-sand">
          These years are imagined for RIWAYAT. They explain a feeling — that recipes were kept, and then trusted to new hands. They are not dates from a real family, a real kitchen, or the history of Indian cooking.
        </p>

        <ol className="relative mt-14 border-l border-brass/50">
          {timeline.map((item) => (
            <li key={item.year} className="relative grid gap-3 py-8 pl-8 md:grid-cols-[9rem_1fr] md:gap-12 md:py-10 md:pl-12">
              <span className="absolute top-10 left-0 h-2.5 w-2.5 -translate-x-1/2 rotate-45 bg-brass" aria-hidden="true" />
              <p className="font-display text-4xl text-sand md:text-5xl">{item.year}</p>
              <div>
                <h3 className="font-display text-3xl leading-tight">{item.title}</h3>
                <p className="mt-3 max-w-xl text-ivory/75">{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
