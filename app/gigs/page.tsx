import GigList from "../components/gig-list";

export default async function Page() {
  return (
    <div id="gigs-section" className="section w-full">
      <GigList />
    </div>
  );
}
