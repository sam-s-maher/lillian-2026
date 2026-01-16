import Hero from "../components/hero";
import GigPage from "../gigs/page";
import Acknowledgement from "../components/acknowledgement";

export default async function Page() {
  return (
    <>
      <Hero />
      <div className="h-[36vh] flex flex-col justify-end">
        <div className="flex flex-col pb-10">
          <h1>THE NEXT THREE:</h1>
          <GigPage limit={3} />
        </div>
        <Acknowledgement />
      </div>
    </>
  );
}
