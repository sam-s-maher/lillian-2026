import { client } from "../../tina/__generated__/client";
import Image from "next/image";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${month} ${year}`;
}

export default async function Page() {
  const catalogue = await client.queries.catalogueConnection();

  const sortedCatalogue = (catalogue.data.catalogueConnection?.edges ?? [])
    .filter((edge) => edge?.node && edge.node.hero_image && edge.node.title && edge.node.date)
    .slice()
    .sort((a, b) => {
      const orderA = a.node.order ?? 0;
      const orderB = b.node.order ?? 0;
      return orderA - orderB;
    });

  return (
    <>
      <div
        id="catalogue-section"
        className="section flex flex-col gap-6 items-center w-full">
        {sortedCatalogue.map((item) => (
          <div key={item.node.id} className="flex flex-col items-center w-full gap-0.5">
            <div className="relative h-[11rem] lg:h-[34rem] w-full overflow-hidden">
              <Image
                src={item.node.hero_image}
                alt={item.node.title}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="bordered"
                priority
              />
            </div>
            <div className="flex flex-row justify-between items-center w-full text-xs lg:text-sm">
              <div className="underline underline-offset-2 decoration-[1px] font-helvetica">
                {item.node.title}
              </div>
              <div className="text-xs lg:text-sm flex gap-1">
                {item.node.image_credits && (
                  <span className="hidden lg:block">{item.node.image_credits},</span>
                )}
                <span>{formatDate(item.node.date)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}