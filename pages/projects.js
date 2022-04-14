import Layout from "../components/layout";
import ProjectItem from "../components/projectItem";
import { PageTitle } from "../components/typo";

import { getProjects } from "../lib/projectsLib";

export default function Projects({ projects, error }) {
  const pageTitle = "Projets";

  return (
    <Layout title={pageTitle} navigation={[{ name: "Accueil", path: "/" }]}>
      <PageTitle>{pageTitle}</PageTitle>
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
