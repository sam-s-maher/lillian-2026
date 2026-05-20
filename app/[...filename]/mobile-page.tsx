import Hero from "../components/hero";
import GigList from "../components/gig-list";
import MobileAcknowledgement from "../components/mobile-acknowledgement";

export default async function Page() {
  return (
    <>
      <div className="flex flex-col" style={{ height: "var(--mobile-first-page-space)" }}>
        <div className="flex-[3] pt-8">
          <Hero variant="mobile" />
        </div>
        <div className="flex-shrink-0 pt-4 pb-2">
          <h1 className="text-sm">THE NEXT THREE:</h1>
          <GigList limit={3} className="text-sm"/>
          <MobileAcknowledgement />
        </div>
      </div>
    </>
  );
}
