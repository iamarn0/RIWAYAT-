import GalleryGrid from "../components/gallery/GalleryGrid.jsx";
import PageHero from "../components/layout/PageHero.jsx";
import Seo from "../components/layout/Seo.jsx";

export default function GalleryPage() {
  return (
    <>
      <Seo
        title="Gallery"
        description="An editorial gallery of the table, the kitchen, the heritage and the people of RIWAYAT, a fictional restaurant."
        path="/gallery"
      />
      <PageHero
        eyebrow="The Gallery"
        title="Look closely. The room is in the details."
        lede="Four ways of seeing the house: the table, the kitchen, the buildings that taught us scale, and the people a meal is for."
      />
      <GalleryGrid />
    </>
  );
}
