import { Helmet } from "react-helmet-async";

export default function Seo({ title, description, path = "/" }) {
  const fullTitle = title.startsWith("RIWAYAT") ? title : `${title} | RIWAYAT`;
  const url = `https://riwayat.example${path}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta
        property="og:image"
        content="https://images.unsplash.com/photo-1589778655375-3e622a9fc91c?auto=format&fit=crop&w=1200&q=75"
      />
      <meta name="twitter:card" content="summary_large_image" />
    </Helmet>
  );
}
