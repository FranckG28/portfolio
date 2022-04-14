import Head from "next/head";
import Link from "next/link";
import { Button } from "./button";
import { PageTitle } from "./typo";

const siteTitle = "Franck G.";

export function makeTitle(pageTitle) {
  return siteTitle + " - " + pageTitle;
}

export default function Layout({ children, home, title }) {
  return (
    <div className="container mx-auto py-10">
      <Head>
        <title>{makeTitle(title)}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Franck GUTMANN Portfolio" />
      </Head>
      <main>
        {home ? (
          ""
        ) : (
          <Link href="/">
            <Button>Retour</Button>
          </Link>
        )}
        <PageTitle>{title}</PageTitle>
        {children}
      </main>
    </div>
  );
}
