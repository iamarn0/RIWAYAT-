import { useState } from "react";

export default function Photo({ src, alt, className = "", priority = false }) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={`flex items-center justify-center bg-sand ${className}`} role="img" aria-label={alt}>
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
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : "auto"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
