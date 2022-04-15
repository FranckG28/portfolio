import Layout from "../../components/layout";
import { adress } from "../../lib/fetcher";
import {
  getProjectData,
  getProjectsIds,
  makeDate,
  makeTeam,
} from "../../lib/projectsLib";

import { TechnologyBadge } from "../../components/technologyBadge";
import { PageTitle } from "../../components/typo";
import { Button } from "../../components/buttons";

import Image from "next/image";
import Link from "next/link";

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
      <div className="py-5 grid gap-4">
        <div>
          {project.attributes.categories.data.map((cat) => {
            return (
              <Link href="/">
                <a className="rounded-xl text-blue-900 shadow-sm font-bold inline-block uppercase">
                  {cat.attributes.name}
                </a>
              </Link>
            );
          })}
        </div>

        <div className="flex flex-nowrap overflow-x-auto gap-3">
          {project.attributes.images.data.map((img) => {
            return (
              <Image
                src={adress + img.attributes.formats.large.url}
                width={450}
                height={300}
                objectFit="cover"
                className="rounded-xl"
              />
            );
          })}
        </div>

        <p className="text-blue-800 opacity-80">
          <span className="font-bold">{makeDate(project)}</span>
          {" • " + project.attributes.tasks + " • " + makeTeam(project)}
        </p>

        <PageTitle $nomargin={true}>{project.attributes.title}</PageTitle>

        <p className="text-blue-800">{project.attributes.description}</p>

        <ul className="flex gap-3">
          {project.attributes.technologies.data.map((tech) => {
            return (
              <TechnologyBadge $color={tech.attributes.color} key={tech.id}>
                <a href={tech.attributes.link}>{tech.attributes.slug}</a>
              </TechnologyBadge>
            );
          })}
        </ul>

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
