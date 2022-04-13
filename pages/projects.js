import Head from "next/head";
import Link from "next/link";
import Layout, { makeTitle } from "../components/layout";
import ProjectItem from "../components/projectItem";
import { PageTitle } from "../components/typo";

import { fetcher } from "../lib/data";

const pageTitle = "Projets";

export default function Projects({ projects, error }) {
  return (
    <Layout>
      <Head>
        <title>{makeTitle(pageTitle)}</title>
      </Head>

      <main>
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

        <Link href="/">
          <a>Retour</a>
        </Link>
      </main>
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
