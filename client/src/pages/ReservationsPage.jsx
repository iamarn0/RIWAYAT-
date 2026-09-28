import ReservationForm from "../components/forms/ReservationForm.jsx";
import PageHero from "../components/layout/PageHero.jsx";
import Seo from "../components/layout/Seo.jsx";
import Container from "../components/ui/Container.jsx";

export default function ReservationsPage() {
  return (
    <>
      <Seo
        title="Reservations"
        description="Request a table at RIWAYAT. A fictional reservation desk for this portfolio demonstration."
        path="/reservations"
      />
      <PageHero
        eyebrow="Reservations"
        title="Request a table."
        lede="Tell us when you would like to come. This form reaches a demonstration API, not a real dining room. If the house were open, someone would call to confirm."
      />
      <section className="py-14 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 className="font-display text-4xl">Service</h2>
            <p className="mt-4 text-brown">Tuesday – Sunday</p>
            <p>12:00 PM – 3:30 PM</p>
            <p>6:30 PM – 11:30 PM</p>
            <p className="mt-4">Monday — Closed</p>
            <p className="mt-8 text-sm text-brown">Parties larger than ten are a conversation. Write from the contact page. This desk is part of the demonstration, so the reply will not come from a real restaurant.</p>
          </div>
          <div className="lg:col-span-8">
            <ReservationForm />
          </div>
        </Container>
      </section>
    </>
  );
}
