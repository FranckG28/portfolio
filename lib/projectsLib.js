import { fetcher } from "./fetcher";

let qs = require("qs");

export function getProjects() {
  const query = qs.stringify(
    {
      fields: ["title", "description", "dateStart", "dateEnd", "url"],
      populate: {
        images: {
          fields: ["url"],
        },
        categories: {
          fields: ["name"],
        },
      },
    },
    { encodeValuesOnly: true }
  );
  return fetcher(`projects?${query}`);
}

export function getCategories() {
  const query = qs.stringify(
    {
      fields: ["name"],
    },
    { encodeValuesOnly: true }
  );

  return fetcher(`categories?${query}`);
}

export async function getProjectsIds() {
  const projects = await getProjects();

  return projects.data.map((project) => {
    return {
      params: {
        id: project.id + "",
      },
    };
  });
}

export function getProjectData(id) {
  const query = qs.stringify(
    {
      populate: "*",
    },
    {
      encodeValuesOnly: true,
    }
  );

  const url = `projects/${id}?${query}`;

  return fetcher(url);
}

export function makeTeam(project) {
  return project.attributes.team == 1
    ? "Seul"
    : project.attributes.team + " personnes";
}

export function makeDate(project) {
  const dateStart = new String(project.attributes.dateStart || "").substring(
    0,
    4
  );
  const dateEnd = new String(project.attributes.dateEnd || "").substring(0, 4);

  return dateStart == dateEnd ? dateStart : "de " + dateStart + " à " + dateEnd;
}
