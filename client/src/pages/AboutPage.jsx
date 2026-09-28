import { about } from "../data/site.js";
import { photos } from "../data/images.js";
import PageHero from "../components/layout/PageHero.jsx";
import Seo from "../components/layout/Seo.jsx";
import ReservationBand from "../components/sections/ReservationBand.jsx";
import Container from "../components/ui/Container.jsx";
import Photo from "../components/ui/Photo.jsx";
import Reveal from "../components/ui/Reveal.jsx";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="Our Story"
        description="The philosophy of RIWAYAT: a recipe becomes memory, tradition and craft, then a meal. A fictional restaurant story for a portfolio."
        path="/about"
      />
      <PageHero
        eyebrow="Our Philosophy"
        title="Tradition is not repetition. It is memory, carried forward."
        lede="RIWAYAT is not simply an Indian restaurant. Recipe becomes memory, memory becomes tradition, tradition becomes craft, and craft becomes the dining experience."
      />

      <section className="py-16 md:py-24" aria-labelledby="philosophy-heading">
        <Container className="grid gap-10 lg:grid-cols-12">
          <h2 id="philosophy-heading" className="font-display text-4xl lg:col-span-4">
            Our Philosophy
          </h2>
          <div className="space-y-5 text-lg leading-relaxed lg:col-span-7">
            {about.philosophy.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-ivory-deep py-16 md:py-24" aria-labelledby="ingredients-heading">
        <Container>
          <h2 id="ingredients-heading" className="display text-[clamp(2.4rem,4vw,3.8rem)]">
            Our Ingredients
          </h2>
          <p className="prose-copy mt-6 text-brown">{about.ingredientsIntro}</p>
          <ul className="mt-12 grid gap-px bg-sand sm:grid-cols-2 lg:grid-cols-3">
            {about.ingredientPoints.map((point, index) => (
              <li key={point.title} className="bg-ivory p-6">
                <p className="font-display text-3xl text-brown">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 font-display text-3xl">{point.title}</h3>
                <p className="mt-3 text-brown">{point.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="cooking-heading">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="overflow-hidden bg-sand">
              <Photo src={photos.spices} alt="Bowls of whole and ground Indian spices" className="aspect-[5/4] w-full object-cover" />
            </div>
          </Reveal>
          <div>
            <h2 id="cooking-heading" className="display text-[clamp(2.4rem,4vw,3.8rem)]">
              Our Cooking
            </h2>
            <div className="mt-6 space-y-5 text-lg leading-relaxed">
              {about.cooking.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-forest py-16 text-ivory md:py-24" aria-labelledby="hospitality-heading">
        <Container className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-sand">Atithi</p>
          <h2 id="hospitality-heading" className="display mt-4 text-[clamp(2.4rem,4vw,3.8rem)]">
            Our Hospitality
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ivory/85">
            {about.hospitality.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Container>
      </section>
      <ReservationBand />
    </>
  );
}
