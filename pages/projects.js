import { useState } from "react";

import { ChipButton } from "../components/buttons";
import Layout from "../components/layout";
import { PageTitle } from "../components/typo";

import { getCategories, getProjects, makeDate } from "../lib/projectsLib";
import { ErrorAlert } from "../components/alerts";
import ProjectCard from "../components/projectCard";

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
        <ErrorAlert>{error}</ErrorAlert>
      ) : (
        <div className="grid gap-5">
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
                  key={cat.id}
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

          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
            {projects.data.map((element) => {
              const categoryName =
                element.attributes.categories.data[0].attributes.name || "";

              let visible =
                selectedCategory === "" || categoryName === selectedCategory;

              if (visible) {
                return (
                  <ProjectCard
                    element={element}
                    key={element.id}
                    visible={visible}
                  />
                );
              }
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
