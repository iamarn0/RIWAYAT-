import { Link } from "react-router-dom";
import { photos } from "../../data/images.js";
import BrassDivider from "../ui/BrassDivider.jsx";
import Container from "../ui/Container.jsx";
import Photo from "../ui/Photo.jsx";
import Reveal from "../ui/Reveal.jsx";

export default function Introduction() {
  return (
    <section className="py-20 md:py-28" aria-labelledby="introduction-heading">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <p className="eyebrow">01 — The House</p>
          <h2 id="introduction-heading" className="display mt-4 text-[clamp(2.6rem,5vw,4.6rem)]">
            Some recipes are remembered.
            <span className="block italic text-brown">Others are inherited.</span>
          </h2>
          <BrassDivider className="mt-6 max-w-[12rem]" />
          <div className="prose-copy mt-8 space-y-5">
            <p>
              RIWAYAT is built around recipes, techniques and stories that move from one generation to the next. A dal tempered the way a grandmother insisted. A kebab minced until it barely holds. A halwa stirred until the kitchen smells of cardamom and winter carrots.
            </p>
            <p>
              We cook those recipes in a dining room that looks forward. Tradition, here, is not a costume. It is a way of paying attention — and then carrying the dish into the present without sanding off where it came from.
            </p>
          </div>
          <Link to="/about" className="mt-8 inline-block text-[12px] uppercase tracking-[0.2em] text-clay underline decoration-clay/40 underline-offset-4">
            Read our story
          </Link>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="group overflow-hidden rounded-t-[180px] rounded-b-md bg-sand">
            <Photo
              src={photos.wood}
              alt="Steel bowls of curry and a stack of naan on a dark wooden table"
              className="aspect-[4/5] w-full object-cover motion-safe:transition motion-safe:duration-700 motion-safe:group-hover:scale-[1.03]"
            />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
