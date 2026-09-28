import Container from "../ui/Container.jsx";
import BrassDivider from "../ui/BrassDivider.jsx";

export default function PageHero({ eyebrow, title, lede, children }) {
  return (
    <header className="border-b border-sand/80 pt-28 pb-14 md:pt-36 md:pb-20">
      <Container>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display mt-4 max-w-4xl text-[clamp(2.8rem,7vw,5.8rem)] text-charcoal">{title}</h1>
        {lede ? <p className="prose-copy mt-6 text-brown">{lede}</p> : null}
        <BrassDivider className="mt-8 max-w-xs" />
        {children}
      </Container>
    </header>
  );
}
