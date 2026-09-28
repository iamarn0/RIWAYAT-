import { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import useFocusTrap from "../../hooks/useFocusTrap.js";
import useLockBodyScroll from "../../hooks/useLockBodyScroll.js";
import Photo from "../ui/Photo.jsx";

export default function Lightbox({ items, index, onClose, onChange }) {
  const dialogRef = useRef(null);
  const open = index !== null && items[index];
  useLockBodyScroll(Boolean(open));
  useFocusTrap(Boolean(open), dialogRef);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight") onChange((index + 1) % items.length);
      if (event.key === "ArrowLeft") onChange((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, index, items.length, onClose, onChange]);

  if (!open) return null;
  const item = items[index];

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/92 p-4 sm:p-8" onClick={onClose}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lightbox-caption"
        tabIndex={-1}
        className="relative flex w-full max-w-5xl flex-col"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="mb-3 flex items-center justify-between text-ivory">
          <p className="text-[12px] uppercase tracking-[0.18em] text-sand">
            {index + 1} / {items.length}
          </p>
          <button type="button" className="inline-flex h-11 w-11 items-center justify-center" onClick={onClose}>
            <X aria-hidden="true" />
            <span className="sr-only">Close gallery</span>
          </button>
        </div>
        <div className="bg-charcoal">
          <Photo src={item.src} alt={item.alt} className="max-h-[72vh] w-full object-contain" />
        </div>
        <div className="mt-4 flex items-center justify-between gap-4 text-ivory">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-ivory/30"
            onClick={() => onChange((index - 1 + items.length) % items.length)}
          >
            <ChevronLeft aria-hidden="true" />
            <span className="sr-only">Previous image</span>
          </button>
          <p id="lightbox-caption" className="text-center font-display text-2xl">{item.caption}</p>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center border border-ivory/30"
            onClick={() => onChange((index + 1) % items.length)}
          >
            <ChevronRight aria-hidden="true" />
            <span className="sr-only">Next image</span>
          </button>
        </div>
      </div>
    </div>
  );
}
