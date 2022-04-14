import Layout from "../../components/layout";
import { adress } from "../../lib/fetcher";
import {
  getProjectData,
  getProjectsIds,
  makeDate,
  makeTeam,
} from "../../lib/projectsLib";

import Image from "next/image";
import Button from "../../components/button";
import { TechnologyBadge } from "../../components/technologyBadge";

export default function ProjectDetail({ project }) {
  return (
    <Layout title={project.attributes.title}>
      <div className="grid gap-3">
        <p className="font-bold">
          {project.attributes.tasks +
            " • " +
            makeTeam(project) +
            " • " +
            makeDate(project)}
        </p>

        <ul className="flex gap-3">
          {project.attributes.technologies.data.map((tech) => {
            return (
              <TechnologyBadge $color={tech.attributes.color} key={tech.id}>
                <a href={tech.attributes.link}>{tech.attributes.slug}</a>
              </TechnologyBadge>
            );
          })}
        </ul>

        <div className="grid grid-cols-3">
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

        <p>{project.attributes.description}</p>
        <a href={project.attributes.link}>{/* <Button>Visiter</Button> */}</a>
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
