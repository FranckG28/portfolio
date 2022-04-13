import Head from "next/head";

const siteTitle = "Franck G.";

export function makeTitle(pageTitle) {
  return siteTitle + " - " + pageTitle;
}

export default function Layout({ children }) {
  return (
    <div className="container mx-auto py-10">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Franck GUTMANN Portfolio" />
      </Head>
      {children}
    </div>
  );
}
