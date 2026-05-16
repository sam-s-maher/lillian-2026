import Hero from "../components/hero";
import GigList from "../components/gig-list";
import Acknowledgement from "../components/acknowledgement";
import Socials from "../components/socials";

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
          <div className="flex flex-col gap-2">
            <div className="px-4">
              <Socials />
            </div>
            <Acknowledgement />
          </div>
        </div>
      </div>
    </>
  );
}
