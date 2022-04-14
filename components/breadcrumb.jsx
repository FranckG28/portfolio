import Link from "next/link";

export default function Breadcrumb({ nav }) {
  return (
    <nav className="bg-gray-200 rounded-xl py-2 px-4">
      <ul className="inline-block">
        {nav.map((item) => {
          if (item.path) {
            return (
              <li className="inline-block">
                <a>
                  <Link href={item.path}>{item.name}</Link>
                </a>
              </li>
            );
          } else {
            return <li className="inline-block">{item.name}</li>;
          }
        })}
      </ul>
    </nav>
  );
}
