import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/site.js";
import useFocusTrap from "../../hooks/useFocusTrap.js";
import useLockBodyScroll from "../../hooks/useLockBodyScroll.js";
import Button from "../ui/Button.jsx";

function linkClass(isActive, onDark) {
  if (onDark) {
    return `text-[11px] uppercase tracking-[0.14em] transition-colors ${isActive ? "text-ivory underline decoration-brass decoration-1 underline-offset-[6px]" : "text-ivory/85 hover:text-ivory"}`;
  }
  return `text-[11px] uppercase tracking-[0.14em] transition-colors ${isActive ? "text-charcoal underline decoration-terracotta decoration-1 underline-offset-[6px]" : "text-charcoal/80 hover:text-charcoal"}`;
}

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const drawerRef = useRef(null);
  const reduce = useReducedMotion();
  const onHero = pathname === "/" && !scrolled && !open;

  useLockBodyScroll(open);
  useFocusTrap(open, drawerRef);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${onHero ? "bg-transparent" : "border-b border-sand/70 bg-ivory/95 backdrop-blur-sm"}`}>
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Link to="/" className={`shrink-0 font-display text-[1.25rem] tracking-[0.18em] sm:text-[1.35rem] sm:tracking-[0.28em] ${onHero ? "text-ivory" : "text-charcoal"}`} aria-label="RIWAYAT, home">
          RIWAYAT
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === "/"} className={({ isActive }) => linkClass(isActive, onHero)}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/reservations"
            className={`hidden items-center px-5 py-3 text-[11px] font-medium uppercase tracking-[0.18em] transition-colors sm:inline-flex ${onHero ? "bg-ivory text-charcoal hover:bg-sand" : "bg-charcoal text-ivory hover:bg-brown"}`}
          >
            Reserve a Table
          </Link>
          <button
            type="button"
            className={`inline-flex h-11 w-11 items-center justify-center lg:hidden ${onHero ? "bg-charcoal/70 text-ivory" : "text-charcoal"}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <Menu aria-hidden="true" size={22} />
            <span className="sr-only">Open menu</span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            tabIndex={-1}
            className="fixed inset-0 z-50 flex flex-col bg-ivory lg:hidden"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex h-20 items-center justify-between px-5 sm:px-8">
              <span className="font-display text-[1.35rem] tracking-[0.28em]">RIWAYAT</span>
              <button type="button" className="inline-flex h-11 w-11 items-center justify-center" onClick={() => setOpen(false)}>
                <X aria-hidden="true" size={22} />
                <span className="sr-only">Close menu</span>
              </button>
            </div>
            <nav className="flex flex-1 flex-col justify-center gap-2 px-6" aria-label="Mobile">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.to}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduce ? 0 : 0.05 * index, duration: 0.35 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) => `block py-2 font-display text-5xl ${isActive ? "text-terracotta" : "text-charcoal"}`}
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <div className="px-6 pb-10">
              <Button to="/reservations" className="w-full">
                Reserve a Table
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
