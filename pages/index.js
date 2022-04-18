import Link from "next/link";
import { Button } from "../components/buttons";
import Layout from "../components/layout";
import { PageTitle } from "../components/typo";

const pageTitle = "Accueil";

function calculateAge(birthday) {
  const ageDifMs = Date.now() - birthday;
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

export default function Home() {
  return (
    <Layout home title={pageTitle}>
      <header className="py-10">
        <PageTitle>Franck G.</PageTitle>
        <div>
          <p>{calculateAge(new Date("2002-10-28")) + " ans"}</p>
        </div>
      </header>
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
