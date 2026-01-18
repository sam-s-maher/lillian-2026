import Hero from "../components/hero";
import GigList from "../components/gig-list";
import Acknowledgement from "../components/acknowledgement";

export default async function Page() {
  return (
    <>
      <Hero />
      <div className="h-[36vh] h-[36svh] flex flex-col justify-end">
        <div className="flex flex-col pb-[2svh]">
          <h1>THE NEXT THREE:</h1>
          <GigList limit={3} />
        </div>
        <Acknowledgement />
      </div>
    </>
  );
}
