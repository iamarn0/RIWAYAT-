import { Link } from "react-router-dom";
import ContactForm from "../components/forms/ContactForm.jsx";
import PageHero from "../components/layout/PageHero.jsx";
import Seo from "../components/layout/Seo.jsx";
import Container from "../components/ui/Container.jsx";
import JaaliPattern from "../components/ui/JaaliPattern.jsx";
import { house } from "../data/site.js";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact"
        description="Visit the fictional dining room of RIWAYAT at 47 Heritage Avenue, Kolkata. Hours, a map placeholder, and a contact form."
        path="/contact"
      />
      <PageHero
        eyebrow="Contact"
        title="The house keeps a light on."
        lede="RIWAYAT, the address and the telephone number are fictional. They exist so this portfolio can show how a guest would find the door."
      />
      <section className="py-14 md:py-20">
        <Container className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl">RIWAYAT</h2>
            <address className="mt-4 not-italic">
              {house.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
            <div className="mt-8">
              <h3 className="text-[11px] uppercase tracking-[0.2em] text-brown">Hours</h3>
              <p className="mt-3">Tuesday – Sunday</p>
              <p>12:00 PM – 3:30 PM</p>
              <p>6:30 PM – 11:30 PM</p>
              <p className="mt-3">Monday — Closed</p>
            </div>
            <div className="mt-8 space-y-2">
              <p>
                <a href={house.phoneHref} className="hover:text-terracotta">
                  {house.phone}
                </a>
                <span className="ml-2 text-sm text-brown">placeholder</span>
              </p>
              <p>
                <a href={house.emailHref} className="hover:text-terracotta">
                  {house.email}
                </a>
                <span className="ml-2 text-sm text-brown">placeholder</span>
              </p>
            </div>
            <Link to="/reservations" className="mt-8 inline-block text-[12px] uppercase tracking-[0.2em] text-clay underline decoration-clay/40 underline-offset-4">
              Reserve a Table
            </Link>
            <div className="relative mt-10 min-h-56 overflow-hidden border border-sand bg-ivory-deep">
              <JaaliPattern className="absolute inset-0 h-full w-full text-brass opacity-30" />
              <div className="relative flex h-full min-h-56 flex-col justify-end p-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-brown">Map placeholder</p>
                <p className="mt-2 max-w-xs font-display text-3xl leading-tight">47 Heritage Avenue does not exist on a map.</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <h2 className="font-display text-4xl">Write to the house</h2>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
