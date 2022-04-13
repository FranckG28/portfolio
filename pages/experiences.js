import Link from "next/link";
import Head from "next/head";
import Layout, { makeTitle } from "../components/layout";
import { PageTitle } from "../components/typo";

const pageTitle = "Expériences";

export default function Experiences() {
  return (
    <Layout>
      <Head>
        <title>{makeTitle(pageTitle)}</title>
      </Head>
      <main>
        <PageTitle>{pageTitle}</PageTitle>
        <Link href="/">
          <a>Retour</a>
        </Link>
      </main>
    </Layout>
  );
}
