import Link from "next/link";
import tw from "tailwind-styled-components";

const BreadcrumbElement = tw.span`
     

`;

export default function Breadcrumb({ nav }) {
  return (
    <nav className="bg-gray-100 rounded-xl py-2 px-4 ">
      <ul className="flex">
        {nav.map((item) => {
          return (
            <li className="inline-block">
              {item.path ? (
                <BreadcrumbElement>
                  <a className="text-blue-500 hover:underline underline-offset-1 active:text-blue-800">
                    <Link href={item.path}>{item.name}</Link>
                  </a>
                </BreadcrumbElement>
              ) : (
                <BreadcrumbElement className="text-gray-400">
                  {item.name}
                </BreadcrumbElement>
              )}
              {item.path ? (
                <span className="px-3 text-gray-400">{">"}</span>
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
