import { useState } from "react";
import { ChipButton } from "../components/buttons";
import Layout from "../components/layout";
import ProjectItem from "../components/projectItem";
import { PageTitle } from "../components/typo";

import { getCategories, getProjects } from "../lib/projectsLib";

const pageTitle = "Projets";

export default function Projects({ projects, categories, error }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <Layout
      title={pageTitle}
      navigation={[{ name: "Accueil", path: "/" }, { name: "Projets" }]}
    >
      <PageTitle>{pageTitle}</PageTitle>
      {error ? (
        <p>{error}</p>
      ) : (
        <div>
          <ul className="flex gap-2">
            <ChipButton
              key={"all"}
              onClick={() => {
                setSelectedCategory("");
              }}
              $active={"" == selectedCategory}
            >
              Tous
            </ChipButton>
            {categories.data.map((cat) => {
              let name = cat.attributes.name;
              return (
                <ChipButton
                  key={name}
                  onClick={() => {
                    setSelectedCategory(name);
                  }}
                  $active={name == selectedCategory}
                >
                  {name}
                </ChipButton>
              );
            })}
          </ul>

          <ul className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {projects.data.map((element) => {
              return <ProjectItem key={element.id} project={element} />;
            })}
          </ul>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const projects = await getProjects();
    const categories = await getCategories();

    return { props: { projects, categories } };
  } catch (error) {
    return { props: { error } };
  }
}
