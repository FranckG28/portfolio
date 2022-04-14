import { fetcher } from "./fetcher";

export function getProjects() {
  return fetcher("projects");
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
  return fetcher("projects/" + id);
}

export function makeDate(project) {
  const dateStart = new String(project.attributes.dateStart || "").substring(
    0,
    4
  );
  const dateEnd = new String(project.attributes.dateEnd || "").substring(0, 4);

  return dateStart == dateEnd ? dateStart : "de " + dateStart + " à " + dateEnd;
}
