import GigPage from "../gigs/page";
import ProjectPage from "../projects/page";

export default async function Page() {
  return (
    <>
      <GigPage />
      <ProjectPage />
    </>
  );
}
