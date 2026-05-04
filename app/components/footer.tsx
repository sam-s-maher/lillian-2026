import Acknowledgement from "./acknowledgement";
import Socials from "./socials";

export default async function Footer() {
  return (
    <footer
      className="hidden lg:flex fixed bottom-0 left-0 right-0 z-40 items-center justify-between px-[var(--desktop-padding)] py-3 bg-transparent"
    >
      <div className="w-1/3">
        <Acknowledgement />
      </div>
      <div className="flex justify-end">
        <Socials />
      </div>
    </footer>
  );
}
