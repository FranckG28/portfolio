const siteTitle = "Franck G.";

export function makeTitle(pageTitle) {
  return siteTitle + " - " + pageTitle;
}

export default function Layout({ children }) {
  return <div className="container mx-auto py-10">{children}</div>;
}
