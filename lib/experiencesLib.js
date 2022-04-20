import { fetcher } from "./fetcher";

let qs = require("qs");

export function getExperiences() {
  const query = qs.stringify(
    {
      sort: ["dateStart:desc"],
      populate: {
        place: {
          fields: "*",
        },
        degrees: {
          fields: ["name", "details"],
        },
        logo: {
          fields: "*",
        },
        projects: {
          fields: ["title"],
        },
      },
    },
    { encodeValuesOnly: true }
  );

  return fetcher(`experiences?${query}`);
}

export function getDegrees() {}

export function getExperienceData(id) {}
