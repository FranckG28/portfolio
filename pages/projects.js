import { useState } from "react";
import Image from "next/image";
import tw from "tailwind-styled-components";
import Link from "next/link";

import { ChipButton } from "../components/buttons";
import Layout from "../components/layout";
import { PageTitle } from "../components/typo";

import { getCategories, getProjects, makeDate } from "../lib/projectsLib";
import { adress } from "../lib/fetcher";

const pageTitle = "Projets";

const ProjectCard = tw.article`

  bg-white
  shadow-lg
  rounded-xl

  cursor-pointer

  mt-2

  hover:mb-2
  hover:mt-0
  hover:drop-shadow-2xl
  focus:mb-2
  focus:mt-0
  focus:drop-shadow-2xl

  active:scale-95

  transform
  transition-all
  ease-in-out
  duration-200

`;

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

          <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-3">
            {projects.data.map((element) => {
              const categoryName =
                element.attributes.categories.data[0].attributes.name || "";

              if (
                selectedCategory === "" ||
                categoryName === selectedCategory
              ) {
                return (
                  <Link href={"/project/" + element.id}>
                    <ProjectCard key={element.id}>
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          height: "200px",
                        }}
                      >
                        <Image
                          src={
                            adress +
                            element.attributes.images.data[0].attributes.url
                          }
                          alt={element.attributes.name}
                          layout="fill"
                          objectFit="cover"
                          quality={100}
                          className="rounded-t-xl"
                        />
                      </div>

                      <div className="px-6 pt-5 pb-6">
                        <p className="text-blue-300 font-bold uppercase">
                          {makeDate(element) + " • " + categoryName}
                        </p>
                        <h3 className="text-2xl text-blue-600">
                          {element.attributes.title}
                        </h3>

                        <p className="line-clamp-3">
                          {element.attributes.description}
                        </p>
                      </div>
                    </ProjectCard>
                  </Link>
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
