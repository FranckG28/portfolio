import Link from "next/link";
import { Button } from "../components/buttons";
import Layout from "../components/layout";
import { PageTitle } from "../components/typo";

const pageTitle = "Accueil";

export default function Home() {
  return (
    <Layout home title={pageTitle}>
      <PageTitle>{pageTitle}</PageTitle>
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
