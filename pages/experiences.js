import { ErrorAlert } from "../components/alert";
import Layout from "../components/layout";
import { PageTitle } from "../components/typo";
import { getDegrees, getExperiences } from "../lib/experiencesLib";

const pageTitle = "Expériences";

export default function Experiences({ experiences, error }) {
  return (
    <Layout
      title={pageTitle}
      navigation={[{ name: "Accueil", path: "/" }, { name: "Expériences" }]}
    >
      <PageTitle>{pageTitle}</PageTitle>
      {error ? (
        <ErrorAlert>{error}</ErrorAlert>
      ) : (
        <div>
          <p>Heyy</p>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const experiences = await getExperiences();
    // const degrees = await getDegrees();

    return { props: { experiences } };
  } catch (error) {
    console.error("ERROR ", error);
    return { props: { error } };
  }
}
