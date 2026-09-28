import HeritageTimeline from "../components/heritage/HeritageTimeline.jsx";
import IngredientWall from "../components/heritage/IngredientWall.jsx";
import RegionArchive from "../components/heritage/RegionArchive.jsx";
import TechniqueArchive from "../components/heritage/TechniqueArchive.jsx";
import PageHero from "../components/layout/PageHero.jsx";
import Seo from "../components/layout/Seo.jsx";

export default function HeritagePage() {
  return (
    <>
      <Seo
        title="Heritage"
        description="The RIWAYAT archive: culinary regions, an ingredient wall, traditional techniques, and a fictional timeline written for the house."
        path="/heritage"
      />
      <PageHero
        eyebrow="The Archive"
        title="A living record of how India cooks."
        lede="Regions, ingredients, techniques, and a timeline written for this house. The years are storytelling, not a historical claim. What remains is the path from recipe to the table."
      />
      <RegionArchive />
      <IngredientWall />
      <TechniqueArchive />
      <HeritageTimeline />
    </>
  );
}
