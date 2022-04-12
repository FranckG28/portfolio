import Head from "next/head";
import Link from "next/link";

export default function Projects({ projects, error }) {
  return (
    <>
      <Head>
        <title>Franck G. - Projets</title>
      </Head>

      <main>
        <h1>Projects</h1>

        {error ? (
          <p>{error}</p>
        ) : (
          <div>
            <p>List : </p>
            <ul>
              {projects.data.map((element) => {
                return <li key={element.id}>{element.attributes.title}</li>;
              })}
            </ul>
          </div>
        )}

        <Link href="/">
          <a>Retour</a>
        </Link>
      </main>
    </>
  );
}

export async function getStaticProps() {
  let token = process.env.API_TOKEN;

  const checkStatus = (resp) => {
    if (resp.status >= 200 && resp.status < 300) {
      return resp;
    } else {
      throw resp;
    }
  };

  const parseJson = (resp) => (resp.json ? resp.json() : resp);

  try {
    const projects = await fetch("http://localhost:1338/api/projects", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "bearer " + token,
      },
    })
      .then(checkStatus)
      .then(parseJson);

    return { props: { projects } };
  } catch (error) {
    return { props: { error } };
  }
}
