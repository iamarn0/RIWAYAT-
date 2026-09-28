export default function Field({ id, label, error, children }) {
  return (
    <div className="min-w-0">
      <label htmlFor={id} className="mb-2 block text-[11px] uppercase tracking-[0.16em] text-brown">
        {label}
      </label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-clay">
          {error}
        </p>
      ) : null}
    </div>
  );
}
