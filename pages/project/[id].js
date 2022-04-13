import Layout from "../../components/layout";
import { getProjectData, getProjectsIds } from "../../lib/projectsLib";

export default function ProjectDetail({ project }) {
  return (
    <Layout title={project.attributes.title}>
      <p>Heyy</p>
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
