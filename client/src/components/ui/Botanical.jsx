export default function Botanical({ className = "" }) {
  return (
    <svg viewBox="0 0 120 220" className={className} aria-hidden="true" fill="none">
      <path d="M60 210 C62 150 58 90 60 18" stroke="currentColor" strokeWidth="1" />
      <path d="M60 70 C40 60 28 42 30 24 C48 30 58 48 60 70Z" stroke="currentColor" strokeWidth="1" />
      <path d="M60 110 C82 98 98 78 96 56 C78 64 66 86 60 110Z" stroke="currentColor" strokeWidth="1" />
      <path d="M60 150 C36 140 22 122 24 100 C44 108 56 130 60 150Z" stroke="currentColor" strokeWidth="1" />
      <circle cx="60" cy="16" r="3" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
