import Layout from "../../components/layout";
import { adress } from "../../lib/fetcher";
import {
  getProjectData,
  getProjectsIds,
  makeDate,
} from "../../lib/projectsLib";

import Image from "next/image";

export default function ProjectDetail({ project }) {
  const equipe =
    project.attributes.team == 1
      ? "Seul"
      : "Équipe de " + project.attributes.team;

  console.log(project);

  return (
    <Layout title={project.attributes.title}>
      <div className="grid gap-3">
        <p className="font-bold">
          {project.attributes.tasks +
            " • " +
            equipe +
            " • " +
            makeDate(project)}
        </p>

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
        <a href={project.attributes.link}>Visiter</a>
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
