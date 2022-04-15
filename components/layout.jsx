import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "./breadcrumb";
import { Button } from "./buttons";
import { PageTitle } from "./typo";

const siteTitle = "Franck G.";

export function makeTitle(pageTitle) {
  return siteTitle + " - " + pageTitle;
}

export default function Layout({ children, navigation, title }) {
  let nav = navigation || [];

  return (
    <div className="container mx-auto py-10 px-5">
      <Head>
        <title>{makeTitle(title)}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Franck GUTMANN Portfolio" />
      </Head>
      <main>
        {/* nav */}
        {nav.length > 0 ? <Breadcrumb nav={nav} /> : ""}

        {/* Content */}
        {children}
      </main>
    </div>
  );
}
