import GigPage from "../gigs/page";
import ProjectPage from "../projects/page";
import CataloguePage from "../catalogue/page";
import AboutPage from "../about/page";

export default async function Page() {
  return (
    <>
      <GigPage />
      <ProjectPage />
      <CataloguePage />
      <AboutPage />
    </>
  );
}
