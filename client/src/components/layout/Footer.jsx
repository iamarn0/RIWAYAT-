import { Link } from "react-router-dom";
import { footerExplore, house, socialLinks } from "../../data/site.js";
import JaaliPattern from "../ui/JaaliPattern.jsx";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-charcoal text-ivory">
      <JaaliPattern className="absolute inset-0 h-full w-full text-brass opacity-[0.14]" />
      <div className="relative mx-auto grid max-w-[1400px] gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-4 lg:px-12 lg:py-20">
        <div className="lg:col-span-1">
          <p className="font-display text-3xl tracking-[0.22em]">RIWAYAT</p>
          <p className="mt-4 max-w-xs font-display text-2xl leading-snug text-sand italic">Where tradition finds its table.</p>
        </div>

        <div>
          <h2 className="text-[11px] uppercase tracking-[0.24em] text-brass">Explore</h2>
          <ul className="mt-5 space-y-3">
            {footerExplore.map((link) => (
              <li key={link.to}>
                <Link to={link.to} className="text-ivory/85 hover:text-ivory">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-[11px] uppercase tracking-[0.24em] text-brass">Reservations</h2>
          <ul className="mt-5 space-y-3">
            <li>
              <Link to="/reservations" className="text-ivory/85 hover:text-ivory">
                Reserve a Table
              </Link>
            </li>
            <li className="text-sm text-sand/90">{house.phone}</li>
            <li>
              <a href={house.emailHref} className="text-sm text-sand/90 hover:text-ivory">
                {house.email}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-[11px] uppercase tracking-[0.24em] text-brass">Follow</h2>
          <ul className="mt-5 space-y-3">
            {socialLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-ivory/85 hover:text-ivory" target="_blank" rel="noreferrer">
                  {link.label}
                  <span className="sr-only"> (placeholder, opens in a new tab)</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="relative border-t border-ivory/10">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-2 px-5 py-6 text-sm text-sand/80 sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
          <p>© 2026 RIWAYAT. Portfolio Demo.</p>
          <p>A fictional restaurant. Photography via Unsplash.</p>
        </div>
      </div>
    </footer>
  );
}
