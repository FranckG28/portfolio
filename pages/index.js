import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Franck G. - Acccueil</title>
        {/* <meta name="description" content="Franck GUTMANN" /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col justify-center min-h-screen items-center gap-5">
        <h1>
          <span className="font-normal">FRANCK</span> GUTMANN
        </h1>

        <h3>Homepage</h3>

        <Link href="/projects">
          <a>Projets</a>
        </Link>

        <Link href="/experiences">
          <a>Expériences</a>
        </Link>
      </main>
    </>
  );
}
