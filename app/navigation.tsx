import BottomNavigation from "./bottom-navigation";
import SidebarNavigation from "./sidebar-navigation";

export default async function Page() {
  return (
    <>
      <div className="block md:hidden">
        <BottomNavigation />
      </div>
      <div className="hidden md:block">
        <SidebarNavigation />
      </div>
    </>
  );
}
