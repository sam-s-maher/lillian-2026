import BottomNavigation from "./bottom-navigation";
import SidebarNavigation from "./sidebar-navigation";

export default async function Page() {
  return (
    <>
      <div className="block lg:hidden">
        <BottomNavigation />
      </div>
      <div className="hidden lg:block">
        <SidebarNavigation />
      </div>
    </>
  );
}
