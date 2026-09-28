import { motion, useReducedMotion } from "framer-motion";
import { photos } from "../../data/images.js";
import Button from "../ui/Button.jsx";
import Photo from "../ui/Photo.jsx";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease },
        };

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-charcoal text-ivory">
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <Photo
          src={photos.hero}
          alt="A steel pan of spiced meat and rice with torn naan on a dark tray"
          priority
          className="h-full w-full object-cover"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal/75 via-charcoal/25 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/55 to-transparent" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pt-28 pb-20 sm:px-8 lg:px-12 lg:pb-24">
        <motion.p className="text-[11px] uppercase tracking-[0.34em] text-sand" {...rise(0.15)}>
          RIWAYAT
        </motion.p>
        <h1 className="display mt-5 max-w-5xl text-[clamp(2.15rem,8vw,7.1rem)] text-ivory uppercase">
          <motion.span className="block md:hidden" {...rise(0.28)}>
            Where
            <br />
            tradition
            <br />
            finds its
            <br />
            table.
          </motion.span>
          <motion.span className="hidden md:block" {...rise(0.28)}>
            Where tradition
            <br />
            finds its table.
          </motion.span>
        </h1>
        <motion.p className="mt-6 max-w-md text-base leading-relaxed text-ivory/85 sm:text-lg" {...rise(0.45)}>
          A contemporary Indian dining experience rooted in recipes, rituals and stories passed through generations.
        </motion.p>
        <motion.div className="mt-8 flex flex-col gap-3 sm:flex-row" {...rise(0.58)}>
          <Button to="/reservations" variant="light">
            Reserve a Table
          </Button>
          <Button to="/menu" variant="lightGhost">
            Explore the Menu
          </Button>
        </motion.div>
      </div>

      <div className="absolute right-5 bottom-6 flex flex-col items-center gap-3 text-ivory/80 sm:right-8">
        <span className="text-[10px] uppercase tracking-[0.28em]">Scroll</span>
        <span className="relative h-12 w-px overflow-hidden bg-ivory/30" aria-hidden="true">
          <span className="scroll-line absolute inset-x-0 top-0 h-4 bg-ivory" />
        </span>
      </div>
    </section>
  );
}
