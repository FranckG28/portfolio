import Link from "next/link";
import Image from "next/image";

import { ItemSubtitle, ItemTitle, ItemDescription } from "../components/typo";

import { makeDate } from "../lib/projectsLib";

import { adress } from "../lib/fetcher";
import { Card } from "./card";

export default function ProjectCard({ element }) {
  return (
    <Link href={"/project/" + element.id}>
      <Card>
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "200px",
          }}
        >
          <Image
            src={adress + element.attributes.images.data[0].attributes.url}
            alt={element.attributes.name}
            layout="fill"
            objectFit="cover"
            quality={100}
            className="rounded-t-xl"
          />
        </div>

        <div className="px-6 pt-5 pb-6">
          <ItemSubtitle>
            {makeDate(element) +
              " • " +
              element.attributes.categories.data.map(
                (item) => item.attributes.name
              )}
          </ItemSubtitle>
          <ItemTitle>{element.attributes.title}</ItemTitle>

          <ItemDescription>{element.attributes.description}</ItemDescription>
        </div>
      </Card>
    </Link>
  );
}
