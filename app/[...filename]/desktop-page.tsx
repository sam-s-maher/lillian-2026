import Acknowledgement from "../components/acknowledgement";
import Hero from "../components/hero";
import Socials from "../components/socials";

export default async function Page() {
  return (
    <>
      <div>
        <Hero />
        <div className="fixed bottom-[4mm] left-[4mm] flex flex-col w-1/3">
          <Socials />
          <div className="pe-4 pt-6">
            <Acknowledgement />
          </div>
        </div>
      </div>
    </>
  );
}
