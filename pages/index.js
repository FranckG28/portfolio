import Link from "next/link";
import Layout, { makeTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout home title="Accueil">
      <section className="grid gap-2">
        <Link href="/projects">
          <a>Projets</a>
        </Link>

        <Link href="/experiences">
          <a>Expériences</a>
        </Link>
      </section>
    </Layout>
  );
}
