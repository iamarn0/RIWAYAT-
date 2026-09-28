import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { house } from "../../data/site.js";

const days = ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

function siteOrigin() {
  const configured = import.meta.env.VITE_SITE_URL;
  if (configured) return String(configured).replace(/\/$/, "");
  if (typeof window !== "undefined") return window.location.origin;
  return "";
}

function restaurantJsonLd(origin, image) {
  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: house.name,
    description:
      "RIWAYAT is a fictional heritage-inspired Indian dining room in Kolkata. A living archive of recipes, memory, tradition and craft, served as a dining experience. Portfolio demonstration.",
    servesCuisine: ["Indian", "Awadhi", "Punjabi", "Kashmiri", "Bengali", "Rajasthani", "Kerala", "Hyderabadi"],
    image,
    url: origin || undefined,
    telephone: house.phone,
    email: house.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "47 Heritage Avenue",
      addressLocality: "Kolkata",
      addressCountry: "IN",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: days,
        opens: "12:00",
        closes: "15:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: days,
        opens: "18:30",
        closes: "23:30",
      },
    ],
    acceptsReservations: true,
    priceRange: "₹₹₹",
    currenciesAccepted: "INR",
  };
}

export default function Seo({ title, description, path = "/" }) {
  const fullTitle = title.startsWith("RIWAYAT") ? title : `${title} | RIWAYAT`;
  const origin = siteOrigin();
  const url = origin ? `${origin}${path}` : undefined;
  const image = origin ? `${origin}/og-riwayat.png` : "/og-riwayat.png";
  const imageAlt = "RIWAYAT — Where Tradition Finds Its Table";

  useEffect(() => {
    document.head.querySelectorAll("[data-static='true']").forEach((node) => node.remove());
  }, [fullTitle, description, path]);

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {url ? <link rel="canonical" href={url} /> : null}
      <meta property="og:site_name" content="RIWAYAT" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      {url ? <meta property="og:url" content={url} /> : null}
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
      <script type="application/ld+json">{JSON.stringify(restaurantJsonLd(origin, image))}</script>
    </Helmet>
  );
}
