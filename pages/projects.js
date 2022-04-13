import Head from "next/head";
import Link from "next/link";
import ProjectItem from "../components/projectItem";

import { fetcher } from "../lib/data";

export default function Projects({ projects, error }) {
  return (
    <>
      <Head>
        <title>Franck G. - Projets</title>
      </Head>

      <main>
        <h1>Projects</h1>

        {error ? (
          <p>{error}</p>
        ) : (
          <div>
            <p>List : </p>
            <ul className="grid grid-cols-4 gap-3 ">
              {projects.data.map((element) => {
                return <ProjectItem key={element.id} project={element} />;
              })}
            </ul>
          </div>
        )}

        <Link href="/">
          <a>Retour</a>
        </Link>
      </main>
    </>
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
