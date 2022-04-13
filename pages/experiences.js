import Link from "next/link";
import Head from "next/head";
import Layout, { makeTitle } from "../components/layout";

export default function Experiences() {
  return (
    <Layout>
      <Head>
        <title>{makeTitle("Expériences")}</title>
      </Head>
      <h1>Expériences</h1>
      <h2>
        <Link href="/">
          <a>Retour</a>
        </Link>
      </h2>
    </Layout>
  );
}
