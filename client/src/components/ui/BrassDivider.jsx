export default function BrassDivider({ className = "" }) {
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden="true">
      <span className="h-px flex-1 bg-brass/80" />
      <span className="h-1.5 w-1.5 rotate-45 border border-brass" />
      <span className="h-px w-10 bg-brass/80" />
    </div>
  );
}
