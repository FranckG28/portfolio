import Layout from "../components/layout";
import ProjectItem from "../components/projectItem";

import { fetcher } from "../lib/data";

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
    const projects = await fetcher("projects");

    return { props: { projects } };
  } catch (error) {
    return { props: { error } };
  }
}
