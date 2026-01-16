import DesktopPage from "./desktop-page";
import MobilePage from "./mobile-page";

export default async function Page() {
  return (
    <>
      <div className="hidden lg:block">
        <DesktopPage />
      </div>
      <div className="block lg:hidden">
        <MobilePage />
      </div>
    </>
  );
}
