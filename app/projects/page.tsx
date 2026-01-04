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
          <div key={project.node.id} className="flex flex-col items-center w-full gap-0.5">
            <div className="relative h-[11rem] lg:h-[18rem] w-full overflow-hidden">
              <Image
                src={project.node.hero_image}
                alt={project.node.title}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                priority
              />
            </div>
            <div className="flex flex-row flex-wrap lg:flex-nowrap justify-between items-center lg:items-start w-full lg:pt-2">
              <div className="uppercase underline underline-offset-4 decoration-[1px] order-1 lg:order-1 lg:w-1/5">
                {project.node.title}
              </div>
              <div className="flex flex-row lg:flex-col gap-7 lg:gap-0 lg:items-end text-sm lg:text-lg order-2 lg:order-3 lg:w-1/5">
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
              <div className="py-2 px-4 text-sm lg:text-lg text-center order-3 lg:order-2 w-full lg:w-3/5">
                <p className="leading-tight">{project.node.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
