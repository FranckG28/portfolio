import Layout from "../../components/layout";
import {
  getProjectData,
  getProjectsIds,
  makeDate,
} from "../../lib/projectsLib";

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
