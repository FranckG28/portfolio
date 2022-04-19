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
          fields: ["url"],
        },
      },
    },
    { encodeValuesOnly: true }
  );

  console.log(query);

  return fetcher(`experiences?${query}`);
}

export function getDegrees() {}

export function getExperienceData(id) {}
