import tw from "tailwind-styled-components";

export const Button = tw.button`

    bg-opacity-30
    bg-emerald-500
    text-emerald-900
    
    rounded-lg
    shadow-sm

    px-7
    py-3

    font-bold
    text-xl

    hover:bg-opacity-100
    focus:bg-opacity-100

    focus:ring-4
    ring-emerald-500
    ring-opacity-30

    hover:text-white
    focus:text-white
    
    focus:shadow-lg
    hover:drop-shadow-xl
    active:drop-shadow-xl

    transition
    ease-in-out
    duration-200

    inline

`;
