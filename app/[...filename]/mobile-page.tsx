import Hero from "../components/hero";
import GigPage from "../gigs/page";
import Acknowledgement from "../components/acknowledgement";

export default async function Page() {
  return (
    <>
      <Hero />
      <div className="pt-12 h-[34vh] flex flex-col justify-between">
        <div className="flex flex-col">
          <h1>THE NEXT THREE:</h1>
          <GigPage limit={3} />
        </div>
        <Acknowledgement />
      </div>
    </>
  );
}
