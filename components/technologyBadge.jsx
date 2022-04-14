import tw from "tailwind-styled-components";

export const TechnologyBadge = tw.li`
    px-3
    py-1
    rounded-lg
    font-bold

    bg-opacity-10

    hover:bg-opacity-40

    transition
    ease-in-out
    duration-200

    ${(p) => "bg-" + p.$color + " text-" + p.$color}

`;
