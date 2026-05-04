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
        className="section flex flex-col lg:flex-row lg:flex-wrap gap-4 lg:gap-12 items-center lg:items-start lg:justify-center w-full">
        {sortedProjects.map((project) => (
          <div key={project.node.id} className="flex flex-col items-center w-full lg:w-[calc(50%-1rem)] lg:max-w-md gap-0.5">
            <div className="w-full overflow-hidden">
              <Image
                src={project.node.hero_image}
                alt={project.node.title}
                width={1200}
                height={800}
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="bordered image-fade-auto w-full h-auto max-h-[11rem] lg:max-h-[18rem]"
                priority
              />
            </div>
            <div className="pt-1 lg:pt-4 flex flex-wrap justify-between items-center lg:items-start w-full">
              <div className="text-lg lg:text-xl decoration-[1px] w-1/2 font-helvetica">
                {project.node.title}
              </div>
              <div className="flex gap-7 justify-end text-sm lg:text-lg w-1/2">
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
              <div className="py-4 text-sm lg:text-lg w-full">
                <p className="leading-tight">{project.node.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
