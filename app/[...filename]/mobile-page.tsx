import Hero from "../components/hero";
import GigList from "../components/gig-list";
import MobileAcknowledgement from "../components/mobile-acknowledgement";

export default async function Page() {
  return (
    <>
      <div style={{ height: "var(--mobile-first-page-space)" }}>
        <div className="h-[55%] pt-4">
          <Hero variant="mobile" />
        </div>
        <div className="h-[35%] flex flex-col justify-end">
          <div className="h-2/3 flex flex-col justify-center px-4">
            <h1 className="text-sm">THE NEXT THREE:</h1>
            <GigList limit={3} className="text-sm"/>
          </div>
          <MobileAcknowledgement />
        </div>
      </div>
    </>
  );
}
