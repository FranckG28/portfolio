import Layout from "../../components/layout";
import {
  getProjectData,
  getProjectsIds,
  makeDate,
  makeTeam,
} from "../../lib/projectsLib";

import { TechnologyBadge } from "../../components/technologyBadge";
import { PageTitle, Paragraph } from "../../components/typo";
import {
  InfoSectionTitle,
  InfoSectionText,
  SectionTitle,
  Section,
} from "../../components/sections";
import { Button } from "../../components/buttons";

import Image from "next/image";
import Link from "next/link";
import tw from "tailwind-styled-components";
import { ErrorAlert } from "../../components/alerts";
import { adress } from "../../lib/fetcher";
import ReactPlayer from "react-player";

const InfoSection = tw.section`
  flex
  flex-col
`;

export default function ProjectDetail({ project, error }) {
  console.log(project);

  return (
    <Layout
      title={project.attributes.title}
      navigation={[
        { name: "Accueil", path: "/" },
        { name: "Projets", path: "/projects" },
        { name: project.attributes.title },
      ]}
    >
      {error ? (
        <ErrorAlert>{error}</ErrorAlert>
      ) : (
        <div className="py-5 grid gap-4">
          <section className="flex flex-nowrap overflow-x-auto gap-3">
            {project.attributes.images.data.map((img) => {
              return (
                <Image
                  src={adress + img.attributes.formats.large.url}
                  width={450}
                  height={300}
                  objectFit="cover"
                  className="rounded-xl"
                  key={img.id}
                />
              );
            })}
          </section>

          <section className="grid xl:grid-cols-4 gap-8 items-start">
            <div className="lg:col-span-3 grid gap-3">
              <p className="font-bold text-indigo-400">
                {makeDate(project) + " • "}
                <Link
                  href={"/experience/" + project.attributes.experience.data.id}
                >
                  {project.attributes.experience.data.attributes.name}
                </Link>
              </p>
              <PageTitle $nomargin>{project.attributes.title}</PageTitle>
              <Paragraph>{project.attributes.description}</Paragraph>

              {project.attributes.videos.data.length > 0 ? (
                <Section id="videos">
                  <SectionTitle>Vidéos</SectionTitle>

                  <div className="grid grid-cols-2 gap-5">
                    {project.attributes.videos.data.map((video) => {
                      return (
                        <div className="grid gap-2 rounded-lg aspect-video">
                          <ReactPlayer
                            url={video.attributes.link}
                            width={"100%"}
                            height={"100%"}
                            controls="true"
                          />
                        </div>
                      );
                    })}
                  </div>
                </Section>
              ) : (
                ""
              )}

              <a href={project.attributes.link} target="_blank">
                <Button>Visiter</Button>
              </a>
              <a href={project.attributes.sourceLink} target="_blank">
                <Button>Code source</Button>
              </a>
            </div>

            <div className="rounded-lg shadow-lg bg-white p-6">
              <ul className="grid gap-5">
                <InfoSection>
                  <InfoSectionTitle>Catégories</InfoSectionTitle>
                  <InfoSectionText>
                    {project.attributes.categories.data.map((cat) => {
                      return cat.attributes.name + " ";
                    })}
                  </InfoSectionText>
                </InfoSection>

                <InfoSection>
                  <InfoSectionTitle>équipe</InfoSectionTitle>
                  <InfoSectionText>{makeTeam(project)}</InfoSectionText>
                </InfoSection>

                <InfoSection>
                  <InfoSectionTitle>Tâches</InfoSectionTitle>
                  <InfoSectionText>{project.attributes.tasks}</InfoSectionText>
                </InfoSection>

                <InfoSection>
                  <InfoSectionTitle>Technologies</InfoSectionTitle>
                  <ul className="flex flex-wrap gap-1 my-1">
                    {project.attributes.technologies.data.map((tech) => {
                      return (
                        <a href={tech.attributes.link} key={tech.id}>
                          <TechnologyBadge $color={tech.attributes.color}>
                            {tech.attributes.slug}
                          </TechnologyBadge>
                        </a>
                      );
                    })}
                  </ul>
                </InfoSection>
              </ul>
            </div>
          </section>
        </div>
      )}
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = await getProjectsIds();

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  try {
    const project = await getProjectData(params.id);

    return { props: { project: project.data } };
  } catch (error) {
    return { props: { error } };
  }
}
