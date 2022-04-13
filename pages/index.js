import Head from "next/head";
import Link from "next/link";
import Layout, { makeTitle } from "../components/layout";
import { PageTitle } from "../components/typo";

const pageTitle = "Accueil";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{makeTitle(pageTitle)}l</title>
      </Head>

      <main className="grid gap-5">
        <PageTitle>{pageTitle}</PageTitle>

        <Link href="/projects">
          <a>Projets</a>
        </Link>

        <Link href="/experiences">
          <a>Expériences</a>
        </Link>
      </main>
    </Layout>
  );
}
