import ReactPlayer from "react-player";
import Layout from "../components/layout";
import { PageTitle } from "../components/typo";
import { getVideos } from "../lib/videosLib";

const pageTitle = "Vidéos";

export default function VideoPage({ videos, error }) {
  console.log(videos);
  return (
    <Layout
      title={pageTitle}
      navigation={[{ name: "Accueil", path: "/" }, { name: pageTitle }]}
    >
      <PageTitle>{pageTitle}</PageTitle>

      {error ? (
        { error }
      ) : (
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {videos.data.map((video) => {
            return (
              <div className="grid gap-3">
                <div
                  className="grid gap-2 rounded-lg aspect-video"
                  key={video.id}
                >
                  <ReactPlayer
                    url={video.attributes.link}
                    width={"100%"}
                    height={"100%"}
                    controls={true}
                  />
                </div>
                <p>{video.attributes.title}</p>
              </div>
            );
          })}
        </div>
      )}
    </Layout>
  );
}

export async function getStaticProps() {
  try {
    const videos = await getVideos();

    return { props: { videos } };
  } catch (error) {
    console.error("ERROR ", error);
    return { props: { error } };
  }
}
