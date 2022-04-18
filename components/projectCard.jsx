import Link from "next/link";
import Image from "next/image";

import { ItemSubtitle, ItemTitle, ItemDescription } from "../components/typo";

import { makeDate } from "../lib/projectsLib";

import { adress } from "../lib/fetcher";

import tw from "tailwind-styled-components";
import { Transition } from "@headlessui/react";

const ProjectContainer = tw.article`

  bg-white
  shadow-lg
  rounded-xl

  cursor-pointer

  mt-2

  hover:mb-2
  hover:mt-0
  hover:drop-shadow-2xl
  focus:mb-2
  focus:mt-0
  focus:drop-shadow-2xl

  active:scale-95

  transform
  transition-all
  ease-in-out
  duration-200

`;

export default function ProjectCard({ element }) {
  return (
    <Link href={"/project/" + element.id}>
      <ProjectContainer>
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
      </ProjectContainer>
    </Link>
  );
}
