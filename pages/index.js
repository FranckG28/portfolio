import Link from "next/link";
import { Button } from "../components/button";
import Layout, { makeTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout home title="Accueil">
      <section className="flex gap-2">
        <Link href="/projects">
          <Button>Projets</Button>
        </Link>

        <Link href="/experiences">
          <Button>Expériences</Button>
        </Link>
      </section>
    </Layout>
  );
}
