import { ErrorAlert } from "../components/alerts";
import Layout from "../components/layout";
import { PageTitle } from "../components/typo";
import { getDegrees, getExperiences } from "../lib/experiencesLib";

import { parseISO, format } from "date-fns";
import { fr } from "date-fns/locale";

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
          <ol className="relative border-l border-neutral-200 ml-3">
            {experiences.data.map((element) => {
              const dateStart = parseISO(element.attributes.dateStart);

              const start = format(dateStart, "LLLL yyyy", { locale: fr });

              let dateEnd, end;
              if (element.attributes.dateEnd) {
                dateEnd = parseISO(element.attributes.dateEnd);
                end = format(dateEnd, "LLLL yyyy", { locale: fr });
              }

              return (
                <li className="mb-10 ml-6" key={element.id}>
                  <div className="absolute w-4 h-4 bg-indigo-400 rounded-full mt-1.5 -left-2 border-2 border-indigo-200"></div>
                  <div className="mb-1 text-sm font-normal leading-none text-neutral-400 flex flex-wrap gap-3">
                    <time
                      className="capitalize "
                      dateTime={element.attributes.dateStart}
                    >
                      {start + (end ? " à " + end : " à Aujourd'hui")}
                    </time>
                    {" • "}
                    <p className="font-semibold">
                      <a
                        href={element.attributes.place.data.attributes.link}
                        target="_blank"
                      >
                        {element.attributes.place.data.attributes.name}
                      </a>
                    </p>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {element.attributes.name}
                  </h3>
                  <p className="mb-4 text-base font-normal text-gray-500">
                    {element.attributes.description}
                  </p>
                </li>
              );
            })}
          </ol>
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
