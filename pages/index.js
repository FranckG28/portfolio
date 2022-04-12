import Head from "next/head";

import { DocumentTextIcon, MailIcon } from "@heroicons/react/outline";

import IconTextLink from "../components/iconTextLink";
import IconLink from "../components/iconLink";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex-1">
      <Head>
        <title>Franck G.</title>
        <meta name="description" content="Franck GUTMANN" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col justify-center min-h-screen items-center gap-5">
        <h1>
          <span className="font-normal">FRANCK</span> GUTMANN
        </h1>

        <h3>Homepage</h3>

        <Link href={"/projects"}>
          <a>Projets</a>
        </Link>

        <Link href={"/experiences"}>
          <a>Expériences</a>
        </Link>
      </main>
    </div>
  );
}
