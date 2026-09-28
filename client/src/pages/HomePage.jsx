import Seo from "../components/layout/Seo.jsx";
import Hero from "../components/hero/Hero.jsx";
import ChefSection from "../components/sections/ChefSection.jsx";
import HeritageStory from "../components/sections/HeritageStory.jsx";
import Introduction from "../components/sections/Introduction.jsx";
import RecipesPassedDown from "../components/sections/RecipesPassedDown.jsx";
import RegionalTable from "../components/sections/RegionalTable.jsx";
import ReservationBand from "../components/sections/ReservationBand.jsx";
import SignatureDishes from "../components/sections/SignatureDishes.jsx";
import SignatureExperiences from "../components/sections/SignatureExperiences.jsx";
import Testimonials from "../components/sections/Testimonials.jsx";

export default function HomePage() {
  return (
    <>
      <Seo
        title="RIWAYAT | Where Tradition Finds Its Table"
        description="RIWAYAT is a fictional heritage dining room in Kolkata. Recipes, memory, tradition and craft, carried to the table. Portfolio demonstration."
        path="/"
      />
      <Hero />
      <Introduction />
      <RecipesPassedDown />
      <HeritageStory />
      <SignatureDishes />
      <SignatureExperiences />
      <RegionalTable />
      <ChefSection />
      <Testimonials />
      <ReservationBand />
    </>
  );
}
