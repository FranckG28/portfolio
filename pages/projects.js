import Layout from "../components/layout";
import ProjectItem from "../components/projectItem";

import { getProjects } from "../lib/projectsLib";

export default function Projects({ projects, error }) {
  return (
    <Layout title="Projets">
      {error ? (
        <p>{error}</p>
      ) : (
        <ul className="grid grid-cols-4 gap-3 ">
          {projects.data.map((element) => {
            return <ProjectItem key={element.id} project={element} />;
          })}
        </ul>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const projects = await getProjects();

    return { props: { projects } };
  } catch (error) {
    return { props: { error } };
  }
}
