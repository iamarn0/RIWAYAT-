import { Link } from "react-router-dom";
import { getFeaturedDishes } from "../../data/menu.js";
import { formatPrice } from "../../utils/format.js";
import Container from "../ui/Container.jsx";
import DietMark from "../ui/DietMark.jsx";
import Photo from "../ui/Photo.jsx";
import Reveal from "../ui/Reveal.jsx";

export default function SignatureDishes() {
  const dishes = getFeaturedDishes();
  const [lead, ...rest] = dishes;

  return (
    <section className="py-20 md:py-28" aria-labelledby="kitchen-heading">
      <Container>
        <Reveal>
          <p className="eyebrow">03 — The Kitchen</p>
          <h2 id="kitchen-heading" className="display mt-4 text-[clamp(2.6rem,5vw,4.6rem)]">
            From Our Kitchen
          </h2>
          <p className="mt-5 max-w-xl font-display text-3xl leading-snug text-brown italic">
            Recipes with a history.
            <span className="block">Flavours with a future.</span>
          </p>
        </Reveal>

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-7">
            <article className="group">
              <div className="overflow-hidden bg-sand">
                <Photo
                  src={lead.image}
                  alt={lead.imageAlt}
                  className="aspect-[4/5] w-full object-cover motion-safe:transition motion-safe:duration-700 motion-safe:group-hover:scale-[1.04] sm:aspect-[5/4]"
                />
              </div>
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow">{lead.region}</p>
                  <h3 className="display mt-2 text-5xl">{lead.name}</h3>
                </div>
                <p className="font-display text-3xl">{formatPrice(lead.price)}</p>
              </div>
              <p className="mt-4 max-w-lg text-brown">{lead.description}</p>
              <div className="mt-4">
                <DietMark vegetarian={lead.vegetarian} />
              </div>
            </article>
          </Reveal>

          <div className="lg:col-span-5">
            <ul className="divide-y divide-sand border-y border-sand">
              {rest.map((dish) => (
                <li key={dish.id}>
                  <article className="grid grid-cols-[5.5rem_1fr] gap-4 py-5 sm:grid-cols-[6.5rem_1fr]">
                    <div className="overflow-hidden bg-sand">
                      <Photo src={dish.image} alt={dish.imageAlt} className="aspect-square w-full object-cover" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-baseline justify-between gap-3">
                        <h3 className="font-display text-2xl leading-tight">{dish.name}</h3>
                        <p className="shrink-0 font-display text-xl">{formatPrice(dish.price)}</p>
                      </div>
                      <p className="mt-1 text-sm text-brown">{dish.description}</p>
                      <div className="mt-2">
                        <DietMark vegetarian={dish.vegetarian} />
                      </div>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
            <Link to="/menu" className="mt-6 inline-block text-[12px] uppercase tracking-[0.2em] text-clay underline decoration-clay/40 underline-offset-4">
              See the full menu
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
