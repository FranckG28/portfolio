import Head from "next/head";
import Link from "next/link";
import Breadcrumb from "./breadcrumb";
import { Button } from "./buttons";
import { PageTitle } from "./typo";

const siteTitle = "Franck G.";

export function makeTitle(pageTitle) {
  return siteTitle + " - " + pageTitle;
}

export default function Layout({ children, navigation, title, home }) {
  let nav = navigation || [];

  return (
    <div
      className="min-h-screen min-w-full transition-all ease-in-out duration-200"
      style={{
        background:
          "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #FFFFFF 20%), linear-gradient(90deg, #EDCA85 0%, #EF96AD 30.21%, #A169E9 61.46%, #A0E9FF 100%)",
      }}
    >
      <div className="container mx-auto py-10 px-5 ">
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
    </div>
  );
}
