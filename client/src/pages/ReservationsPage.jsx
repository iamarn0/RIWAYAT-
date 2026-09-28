import { useState } from "react";
import ReservationForm from "../components/forms/ReservationForm.jsx";
import PageHero from "../components/layout/PageHero.jsx";
import Seo from "../components/layout/Seo.jsx";
import DiningExperiences from "../components/reservations/DiningExperiences.jsx";
import Container from "../components/ui/Container.jsx";
import { diningExperiences } from "../data/site.js";

export default function ReservationsPage() {
  const [selectedId, setSelectedId] = useState("");
  const selected = diningExperiences.find((item) => item.id === selectedId);

  const onSelect = (id) => {
    const next = selectedId === id ? "" : id;
    setSelectedId(next);
    if (!next) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById("reservation-request")?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <>
      <Seo
        title="Reservations"
        description="Request a table at RIWAYAT for private dining, a chef's tasting, a family celebration or a corporate gathering. A fictional reservation desk."
        path="/reservations"
      />
      <PageHero
        eyebrow="Reservations"
        title="An evening, kept."
        lede="Choose how you would like to be received, then tell us when. This form reaches a demonstration API, not a real dining room. The welcome around it is how the house would keep a table."
      />
      <DiningExperiences selectedId={selectedId} onSelect={onSelect} />
      <section className="py-14 md:py-20" aria-labelledby="service-heading">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="service-heading" className="font-display text-4xl">
              Service
            </h2>
            <p className="mt-4 text-brown">Tuesday – Sunday</p>
            <p>12:00 PM – 3:30 PM</p>
            <p>6:30 PM – 11:30 PM</p>
            <p className="mt-4">Monday — Closed</p>
            <p className="mt-8 text-sm leading-relaxed text-brown">
              Parties larger than ten are a conversation. Write from the contact page. This desk is part of the demonstration, so the reply will not come from a real restaurant.
            </p>
          </div>
          <div id="reservation-request" className="scroll-mt-28 lg:col-span-8">
            <h2 className="font-display text-4xl">Request the table</h2>
            <p className="mt-3 max-w-xl text-brown">
              {selected
                ? `${selected.name} will be included with your note. You can still tell us the occasion in your own words.`
                : "A table for the evening, or one of the experiences above. Either way, someone in this demonstration would confirm by phone."}
            </p>
            <div className="mt-8">
              <ReservationForm experience={selected?.name || ""} />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
