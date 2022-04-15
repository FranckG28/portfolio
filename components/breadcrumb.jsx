import Link from "next/link";
import tw from "tailwind-styled-components";

const BreadcrumbElement = tw.span`
     

`;

export default function Breadcrumb({ nav }) {
  return (
    <nav className="bg-white rounded-xl py-2 px-4 shadow-sm">
      <ul className="flex">
        {nav.map((item) => {
          return (
            <li className="inline-block" key={"bread_" + item.name}>
              {item.path ? (
                <BreadcrumbElement>
                  <Link href={item.path}>
                    <a className="text-blue-500 hover:underline underline-offset-1 active:text-blue-800">
                      {item.name}
                    </a>
                  </Link>
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
