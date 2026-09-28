import Button from "../ui/Button.jsx";
import Container from "../ui/Container.jsx";

export default function ReservationBand() {
  return (
    <section className="bg-charcoal py-16 text-ivory md:py-20" aria-labelledby="reserve-heading">
      <Container className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div>
          <p className="text-[11px] uppercase tracking-[0.28em] text-sand">A table is waiting</p>
          <h2 id="reserve-heading" className="display mt-3 max-w-xl text-[clamp(2.4rem,4vw,3.8rem)]">
            Come hungry for a story you can taste.
          </h2>
        </div>
        <Button to="/reservations" variant="light">
          Reserve a Table
        </Button>
      </Container>
    </section>
  );
}
