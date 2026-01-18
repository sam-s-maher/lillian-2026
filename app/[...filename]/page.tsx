import DesktopPage from "./desktop-page";
import MobilePage from "./mobile-page";

export default async function Page() {
  return (
    <>
      <div className="hidden lg:block w-full">
        <DesktopPage />
      </div>
      <div className="block lg:hidden w-full">
        <MobilePage />
      </div>
    </>
  );
}
