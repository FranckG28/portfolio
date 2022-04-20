import { fetcher } from "./fetcher";

export function getVideos() {
  return fetcher(`videos`);
}
