import Link from "next/link";

export default async function Page() {
  return (
    <>
      <nav>
        <Link href="/">Gigs</Link>
        <br />
        <Link href="/">Projects</Link>
        <Link href="/">Catalogue</Link>
        <Link href="/">Reviews</Link>
        <br />
        <Link href="/">Contact</Link>
        <Link href="/">About</Link>
      </nav>
    </>
  );
}
