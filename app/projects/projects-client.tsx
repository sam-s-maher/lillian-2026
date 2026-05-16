"use client";

import { useTina } from "tinacms/dist/react";
import Image from "next/image";

interface ProjectsClientProps {
  data: any;
  query: string;
  variables: any;
}

export default function ProjectsClient({ data, query, variables }: ProjectsClientProps) {
  const { data: tinaData } = useTina({ data, query, variables });

  const sortedProjects = (tinaData.projectConnection?.edges ?? []).slice().sort((a: any, b: any) => {
    const orderA = a.node.order ?? 0;
    const orderB = b.node.order ?? 0;
    return orderA - orderB;
  });

  return (
    <div
      id="projects-section"
      className="section grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-8 w-full">
      {sortedProjects.map((project: any) => (
        <div key={project.node.id} className="flex flex-col items-center w-full gap-0.5">
          <div className="w-full overflow-hidden h-[11rem] lg:h-[18rem]">
            <Image
              src={project.node.hero_image}
              alt={project.node.title}
              width={1200}
              height={800}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="bordered image-fade-auto w-full h-full"
              priority
            />
          </div>
          <div className="pt-1 lg:pt-4 flex flex-col items-start w-full">
            <div className="text-lg lg:text-xl decoration-[1px] font-helvetica">
              {project.node.title}
            </div>
            <div className="flex gap-7 text-sm lg:text-lg pt-1">
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
  );
}
