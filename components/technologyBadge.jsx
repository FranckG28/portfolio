import tw from "tailwind-styled-components";

export const TechnologyBadge = tw.li`
    px-3
    py-1
    rounded-lg
    font-bold

    bg-opacity-5
    shadow-sm
    hover:shadow-md
    focus:shadow-md
    active:shadow-lg


    hover:bg-opacity-20

    transition
    ease-in-out
    duration-200

    ${(p) => "bg-" + p.$color + " text-" + p.$color}

`;
