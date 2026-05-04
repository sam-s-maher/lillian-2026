import { client } from "../../tina/__generated__/client";
import BandcampEmbed from "../components/bandcamp-embed";

export default async function Page() {
  const music = await client.queries.musicConnection();

  const sortedMusic = (music.data.musicConnection?.edges ?? [])
    .filter((edge) => edge?.node && edge.node.album_id && edge.node.title)
    .slice()
    .sort((a, b) => {
      const orderA = a.node.order ?? 0;
      const orderB = b.node.order ?? 0;
      return orderA - orderB;
    });

  return (
    <>
      <div
        id="music-section"
        className="section flex flex-col lg:flex-row lg:flex-wrap gap-8 lg:gap-12 items-center lg:items-start lg:justify-center w-full"
      >
        {sortedMusic.map((item) => (
          <div
            key={item.node.id}
            className="flex flex-col items-center w-full max-w-[350px] lg:w-[calc(50%-1.5rem)]"
          >
            <BandcampEmbed
              albumId={item.node.album_id}
              title={item.node.title}
              bandcampUrl={item.node.bandcamp_url}
            />
          </div>
        ))}
      </div>
    </>
  );
}
