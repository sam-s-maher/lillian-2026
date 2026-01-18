import Hero from "../components/hero";
import GigList from "../components/gig-list";
import Acknowledgement from "../components/acknowledgement";

export default async function Page() {
  return (
    <>
      <Hero />
      <div className="h-[36vh] h-[36svh] flex flex-col justify-end">
        <div className="flex flex-col pb-[9svh] px-4">
          <h1 className="text-sm">THE NEXT THREE:</h1>
          <GigList limit={3} className="text-sm"/>
        </div>
        <Acknowledgement />
      </div>
    </>
  );
}
