export default async function Page() {
  return (
    <>
      <footer
        className="flex flex-col items-center justify-center w-full h-36"
        style={{
          paddingBottom: 'calc(var(--bottom-navigation-height) + var(--bottom-page-navigator-height))'
        }}>
        Footer
      </footer>
    </>
  );
}
