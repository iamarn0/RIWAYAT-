import { Link } from "react-router-dom";
import { signatureExperiences } from "../../data/site.js";
import Container from "../ui/Container.jsx";
import Reveal from "../ui/Reveal.jsx";

export default function SignatureExperiences() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="experiences-heading">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">05 — The Evening</p>
            <h2 id="experiences-heading" className="display mt-4 text-[clamp(2.6rem,5vw,4.4rem)]">
              Signature Experiences
            </h2>
            <p className="mt-6 max-w-sm leading-relaxed text-brown">
              Ways of being received. Each one begins with a recipe and ends as a dining experience — priced for the demonstration, composed for the table.
            </p>
            <Link
              to="/reservations"
              className="mt-8 inline-block text-[12px] uppercase tracking-[0.2em] text-clay underline decoration-clay/40 underline-offset-4"
            >
              Request an evening
            </Link>
          </Reveal>

          <ol className="border-t border-sand lg:col-span-8">
            {signatureExperiences.map((experience, index) => (
              <li key={experience.name} className="grid gap-3 border-b border-sand py-8 md:grid-cols-[3.5rem_1fr] md:gap-8 md:py-10">
                <span className="font-display text-3xl text-brown">{String(index + 1).padStart(2, "0")}</span>
                <div className="grid gap-4 md:grid-cols-[1fr_auto] md:gap-8">
                  <div className="min-w-0">
                    <h3 className="font-display text-[clamp(2rem,3vw,2.75rem)] leading-none">{experience.name}</h3>
                    <p className="mt-3 text-brown">{experience.detail}</p>
                    <p className="mt-4 max-w-xl leading-relaxed">{experience.text}</p>
                  </div>
                  <p className="font-display text-2xl text-charcoal md:pt-1 md:text-right">{experience.price}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
