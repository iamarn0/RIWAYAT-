import PageHero from "../components/layout/PageHero.jsx";
import Seo from "../components/layout/Seo.jsx";
import MenuBoard from "../components/menu/MenuBoard.jsx";

export default function MenuPage() {
  return (
    <>
      <Seo
        title="Menu"
        description="The RIWAYAT menu: tandoor, small plates, curries, breads, biryani and desserts. Fictional prices for a portfolio demonstration."
        path="/menu"
      />
      <PageHero
        eyebrow="The Menu"
        title="Recipes with a history."
        lede="Every dish on this table began somewhere else — a region, a kitchen, a person who cooked it before we did. The prices below are part of the demonstration, not a bill."
      />
      <MenuBoard />
    </>
  );
}
