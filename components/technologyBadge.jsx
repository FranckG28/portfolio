import tw from "tailwind-styled-components";

export const TechnologyBadge = tw.li`
    px-3
    py-1
    rounded-xl
    font-bold

    bg-opacity-20

    hover:bg-opacity-40

    transition
    ease-in-out
    duration-200

    ${(p) => p.$color}

`;
