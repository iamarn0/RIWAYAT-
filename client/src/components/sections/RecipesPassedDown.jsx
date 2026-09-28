import { recipeArchive } from "../../data/site.js";
import { photos } from "../../data/images.js";
import BrassDivider from "../ui/BrassDivider.jsx";
import Container from "../ui/Container.jsx";
import Photo from "../ui/Photo.jsx";
import Reveal from "../ui/Reveal.jsx";

export default function RecipesPassedDown() {
  return (
    <section className="overflow-hidden bg-ivory-deep py-20 md:py-28" aria-labelledby="notebook-heading">
      <Container>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-12">
          <Reveal className="lg:col-span-6">
            <p className="eyebrow">02 — The Notebook</p>
            <h2 id="notebook-heading" className="display mt-4 text-[clamp(2.6rem,5vw,4.6rem)]">
              Recipes Passed Down
            </h2>
            <BrassDivider className="mt-6 max-w-[12rem]" />
          </Reveal>
          <Reveal className="lg:col-span-5 lg:col-start-8" delay={0.08}>
            <p className="text-lg leading-relaxed text-brown">{recipeArchive.lede}</p>
          </Reveal>
        </div>

        <div className="mt-14 grid items-stretch gap-8 lg:mt-16 lg:grid-cols-12 lg:gap-10">
          <Reveal className="relative lg:col-span-7">
            <div className="overflow-hidden bg-sand">
              <Photo
                src={photos.notebook}
                alt="An open cloth-bound book, used as the fictional recipe notebook of RIWAYAT"
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4]"
              />
            </div>
            <div className="absolute inset-x-4 bottom-4 bg-ivory/95 p-5 sm:inset-x-8 sm:bottom-8 sm:max-w-md sm:p-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-brown">A margin note</p>
              <p className="mt-3 font-display text-[clamp(1.45rem,2.5vw,2rem)] leading-snug text-charcoal italic">
                “{recipeArchive.margin}”
              </p>
              <p className="mt-3 text-sm text-brown">{recipeArchive.kicker}. Not a recovered document.</p>
            </div>
          </Reveal>

          <div className="flex flex-col lg:col-span-5">
            <ol className="divide-y divide-sand border-y border-sand">
              {recipeArchive.pages.map((page) => (
                <li key={page.page} className="py-6">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-brown">
                    Page {page.page}
                    <span className="mx-2 text-brass" aria-hidden="true">
                      ·
                    </span>
                    {page.region}
                  </p>
                  <h3 className="mt-2 font-display text-4xl">{page.title}</h3>
                  <p className="mt-3 max-w-md leading-relaxed text-ink">{page.excerpt}</p>
                </li>
              ))}
            </ol>
            <div className="mt-6 overflow-hidden bg-sand">
              <Photo
                src={photos.writing}
                alt="A hand writing in a notebook, suggesting recipes carried by memory"
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="aspect-[16/10] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-10 border-t border-sand pt-12 md:grid-cols-3 md:gap-12">
          {recipeArchive.memories.map((memory) => (
            <div key={memory.label}>
              <p className="text-[11px] uppercase tracking-[0.22em] text-brown">{memory.label}</p>
              <p className="mt-4 font-display text-[clamp(1.45rem,2vw,1.85rem)] leading-snug italic">{memory.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
