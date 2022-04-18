import tw from "tailwind-styled-components";

export const TechnologyBadge = tw.li`
    px-3
    py-1
    rounded-lg
    font-light

    bg-opacity-10


    hover:bg-opacity-100
    hover:text-white

    transition
    ease-in-out
    duration-200

    ${(p) => "bg-" + p.$color + " text-" + p.$color}

`;
