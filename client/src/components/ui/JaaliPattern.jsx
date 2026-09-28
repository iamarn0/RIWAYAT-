import { useId } from "react";

export default function JaaliPattern({ className = "" }) {
  const rawId = useId();
  const id = `jaali-${rawId.replace(/:/g, "")}`;

  return (
    <svg className={`pointer-events-none ${className}`} aria-hidden="true">
      <defs>
        <pattern id={id} width="56" height="56" patternUnits="userSpaceOnUse">
          <path d="M28 4 L52 28 L28 52 L4 28 Z" fill="none" stroke="currentColor" strokeWidth="0.7" />
          <path d="M28 14 L42 28 L28 42 L14 28 Z" fill="none" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="28" cy="28" r="2.2" fill="none" stroke="currentColor" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}
