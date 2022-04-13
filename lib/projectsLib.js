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
