import { client } from "../../tina/__generated__/client";

import Image from "next/image";

export default async function Page() {
  const projects = await client.queries.projectConnection();

  const sortedProjects = (projects.data.projectConnection?.edges ?? []).slice().sort((a, b) => {
    const orderA = a.node.order ?? 0;
    const orderB = b.node.order ?? 0;
    return orderA - orderB;
  });

  return (
    <>
      <div
        id="projects-section"
        className="section flex flex-col gap-6 items-center w-full">
        {sortedProjects.map((project) => (
          <div key={project.node.id} className="flex flex-col items-center max-w-full gap-0.5">
            <div className="relative h-[11rem] lg:h-[18rem] w-full overflow-hidden">
              <Image
                src={project.node.hero_image}
                alt={project.node.title}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority
              />
            </div>
            <div className="flex flex-row justify-between items-center w-full">
              <div className="uppercase underline underline-offset-4 decoration-[1px]">{project.node.title}</div>
              <div className="flex flex-row gap-7 text-sm">
                <a 
                  href={project.node.instagram_link}
                  target="_blank"
                  rel="noopener noreferrer">
                    Instagram
                </a>
                <a 
                  href={project.node.bandcamp_link}
                  target="_blank"
                  rel="noopener noreferrer">
                    Bandcamp
                </a>
              </div>
            </div>
            <div className="py-2 px-4 text-sm text-center">
              <p className="leading-tight">{project.node.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
