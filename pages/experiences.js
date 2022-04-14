import Layout, { makeTitle } from "../components/layout";
import { PageTitle } from "../components/typo";

export default function Experiences() {
  const pageTitle = "Expériences";

  return (
    <Layout
      title={pageTitle}
      navigation={[{ name: "Accueil", path: "/" }, { name: "Expériences" }]}
    >
      <PageTitle>{pageTitle}</PageTitle>
      <p>Heyyy c'est le expériences</p>
    </Layout>
  );
}
