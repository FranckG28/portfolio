const api_key = process.env.API_TOKEN;
export const adress = "http://localhost:1338";

const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  } else {
    console.error(resp);
    throw { resp };
  }
};

const parseJson = (resp) => (resp.json ? resp.json() : resp);

export function fetcher(url) {
  return fetch(adress + "/api/" + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + api_key,
    },
  })
    .then(checkStatus)
    .then(parseJson)
    .catch((e) => {
      throw e;
    });
}
