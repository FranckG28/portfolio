import Link from "next/link";
import { Button } from "../components/buttons";
import { Card, PaddingCard } from "../components/card";
import Layout from "../components/layout";
import { ItemTitle, PageTitle } from "../components/typo";

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
      <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        <Link href="/projects">
          <PaddingCard>
            <ItemTitle>Projets</ItemTitle>
          </PaddingCard>
        </Link>

        <Link href="/experiences">
          <PaddingCard>
            <ItemTitle>Expériences</ItemTitle>
          </PaddingCard>
        </Link>

        <Link href="/videos">
          <PaddingCard>
            <ItemTitle>Vidéos</ItemTitle>
          </PaddingCard>
        </Link>

        <div className="xl:col-span-3">
          <a
            href="https://drive.google.com/file/d/1MzYGLruaO9yYWd2MqmMlJoadk1T2ZM6H/view?usp=sharing"
            target="_blank"
          >
            <PaddingCard>
              <ItemTitle>Télécharger mon CV</ItemTitle>
            </PaddingCard>
          </a>
        </div>
      </section>
    </Layout>
  );
}
