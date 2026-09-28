import Seo from "../components/layout/Seo.jsx";
import Hero from "../components/hero/Hero.jsx";
import ChefSection from "../components/sections/ChefSection.jsx";
import HeritageStory from "../components/sections/HeritageStory.jsx";
import Introduction from "../components/sections/Introduction.jsx";
import RegionalTable from "../components/sections/RegionalTable.jsx";
import ReservationBand from "../components/sections/ReservationBand.jsx";
import SignatureDishes from "../components/sections/SignatureDishes.jsx";

export default function HomePage() {
  return (
    <>
      <Seo
        title="RIWAYAT | Where Tradition Finds Its Table"
        description="A fictional contemporary Indian restaurant. Recipes, rituals and stories, carried forward into a dining room in Kolkata. Portfolio demonstration."
        path="/"
      />
      <Hero />
      <Introduction />
      <HeritageStory />
      <SignatureDishes />
      <RegionalTable />
      <ChefSection />
      <ReservationBand />
    </>
  );
}
