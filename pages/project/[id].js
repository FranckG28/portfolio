import Layout from "../../components/layout";
import { adress } from "../../lib/fetcher";
import {
  getProjectData,
  getProjectsIds,
  makeDate,
  makeTeam,
} from "../../lib/projectsLib";

import Image from "next/image";
import { TechnologyBadge } from "../../components/technologyBadge";
import { PageTitle } from "../../components/typo";
import { Button } from "../../components/buttons";

export default function ProjectDetail({ project }) {
  return (
    <Layout
      title={project.attributes.title}
      navigation={[
        { name: "Accueil", path: "/" },
        { name: "Projets", path: "/projects" },
        { name: project.attributes.title },
      ]}
    >
      <div className="py-5 grid gap-3">
        <p className="text-gray-400">
          <span className="font-bold">{makeDate(project)}</span>
          {" • " + project.attributes.tasks + " • " + makeTeam(project)}
        </p>
        <div className="flex flex-nowrap overflow-x-auto">
          {project.attributes.images.data.map((img) => {
            return (
              <Image
                src={adress + img.attributes.formats.large.url}
                width={400}
                height={300}
                objectFit="cover"
              />
            );
          })}
        </div>
        <PageTitle>{project.attributes.title}</PageTitle>

        <ul className="flex gap-3">
          {project.attributes.technologies.data.map((tech) => {
            return (
              <TechnologyBadge $color={tech.attributes.color} key={tech.id}>
                <a href={tech.attributes.link}>{tech.attributes.slug}</a>
              </TechnologyBadge>
            );
          })}
        </ul>

        <p>{project.attributes.description}</p>
        <a href={project.attributes.link}>
          <Button>Visiter</Button>
        </a>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getProjectsIds();

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    const project = await getProjectData(params.id);

    return { props: { project: project.data } };
  } catch (error) {
    return { props: { error } };
  }
}
