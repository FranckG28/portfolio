import Link from "next/link";
import tw from "tailwind-styled-components";

const BreadcrumbElement = tw.span`
     

`;

const BreadcrumbLink = tw.a`
text-indigo-500 
  hover:underline 
  hover:underline-offset-2 
  underline-offset-0
  active:text-indigo-800
  cursor-pointer

  transition-all
  ease-in-out
  duration-200

`;

export default function Breadcrumb({ nav }) {
  return (
    <nav className="bg-white rounded-xl py-2 px-4 shadow-sm shadow-indigo-500/10">
      <ul className="flex">
        {nav.map((item) => {
          return (
            <li className="inline-block" key={"bread_" + item.name}>
              {item.path ? (
                <BreadcrumbElement>
                  <Link href={item.path}>
                    <BreadcrumbLink>{item.name}</BreadcrumbLink>
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
