import Hero from "../components/hero";
import Socials from "../components/socials";
import Acknowledgement from "../components/acknowledgement";

export default async function Page() {
  return (
    <>
      <div className="relative min-h-[calc(100vh-2*var(--desktop-padding))]">
        <Hero variant="desktop" />
        <div className="fixed bottom-[var(--desktop-padding)] left-[var(--desktop-padding)] flex flex-col gap-3 z-30 max-w-[calc(33.333%-2*var(--desktop-padding))]">
          <Socials />
          <Acknowledgement />
        </div>
      </div>
    </>
  );
}
