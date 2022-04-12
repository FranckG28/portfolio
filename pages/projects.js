import Head from "next/head";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Franck G. - Projets</title>
      </Head>

      <main>
        <h1>Projects</h1>
        <Link href="/">
          <a>Retour</a>
        </Link>
      </main>
    </>
  );
}
