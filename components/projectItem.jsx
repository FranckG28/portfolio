import Image from "next/image";
import Link from "next/link";

export default function ProjectItem({ project }) {
  return (
    <li className="bg-gray-100 p-5 rounded-xl max-w-max">
      {/* <Image src={project.attributes.images} width={200} /> */}
      <h3 className="bold text-xl text-blue-500">
        <Link href={"/project/" + project.id}>
          <a>{project.attributes.title}</a>
        </Link>
      </h3>
      <p className="truncate ">{project.attributes.description}</p>
      <p>{project.attributes.dateStart + " - " + project.attributes.dateEnd}</p>
    </li>
  );
}
