export default function DietMark({ vegetarian }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-brown">
      <span
        className={`inline-block h-2.5 w-2.5 border ${vegetarian ? "border-leaf bg-leaf" : "border-terracotta bg-terracotta"}`}
        aria-hidden="true"
      />
      {vegetarian ? "Vegetarian" : "Non-vegetarian"}
    </span>
  );
}
