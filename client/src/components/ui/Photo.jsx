import { useState } from "react";

function srcSetFor(src) {
  if (typeof src !== "string" || !src.includes("images.unsplash.com") || !/w=\d+/.test(src)) return undefined;
  return [480, 800, 1200, 1600].map((width) => `${src.replace(/w=\d+/, `w=${width}`)} ${width}w`).join(", ");
}

export default function Photo({ src, alt, className = "", priority = false, sizes = "(max-width: 768px) 100vw, 50vw" }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`flex items-center justify-center bg-sand ${className}`} role="img" aria-label={alt || "RIWAYAT"}>
        <span className="px-4 font-display text-3xl text-brown/70" aria-hidden="true">
          RIWAYAT
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      sizes={sizes}
      srcSet={srcSetFor(src)}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
