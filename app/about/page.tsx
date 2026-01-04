import { client } from "../../tina/__generated__/client";
import Image from "next/image";
import { TinaMarkdown } from "tinacms/dist/rich-text";

export default async function Page() {
  const aboutData = await client.queries.aboutConnection();
  
  // Get the first (and likely only) about record
  const about = aboutData.data.aboutConnection?.edges?.[0]?.node;

  if (!about) {
    return (
      <div
        id="about-section"
        className="section flex flex-col items-center justify-center">
        No about content found
      </div>
    );
  }

  return (
    <>
      <div
        id="about-section"
        className="section flex flex-col items-center w-full">
        <div className="w-1/2">
          <div className="relative aspect-square w-full overflow-hidden">
            <Image
              src={about.hero_image}
              alt="About"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              priority
            />
          </div>
        </div>
        <div className="w-1/2 mt-16">
          <TinaMarkdown content={about.description} />
        </div>
      </div>
    </>
  );
}