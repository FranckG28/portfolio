const api_key = process.env.API_TOKEN;
const adress = "http://localhost:1338/api/";

const checkStatus = (resp) => {
  if (resp.status >= 200 && resp.status < 300) {
    return resp;
  } else {
    throw resp;
  }
};

const parseJson = (resp) => (resp.json ? resp.json() : resp);

export function fetcher(url) {
  return fetch(adress + url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer " + api_key,
    },
  })
    .then(checkStatus)
    .then(parseJson);
}
