import { Link } from "react-router-dom";
import Seo from "../components/layout/Seo.jsx";
import Button from "../components/ui/Button.jsx";
import Container from "../components/ui/Container.jsx";

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" description="This page is not part of the RIWAYAT house." path="/404" />
      <section className="flex min-h-[70vh] items-center pt-28 pb-20">
        <Container>
          <p className="eyebrow">404</p>
          <h1 className="display mt-4 max-w-3xl text-[clamp(3rem,7vw,6rem)]">This path is not on the menu.</h1>
          <p className="prose-copy mt-6 text-brown">The page you asked for has left the table. The dining room is still open.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button to="/">Return home</Button>
            <Button to="/menu" variant="ghost">
              Explore the Menu
            </Button>
          </div>
          <p className="mt-8 text-sm text-brown">
            Or <Link to="/reservations" className="underline">request a table</Link>.
          </p>
        </Container>
      </section>
    </>
  );
}
