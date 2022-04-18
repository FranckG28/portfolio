import tw from "tailwind-styled-components";

export const Button = tw.button`

    bg-indigo-600 
    text-white
    
    rounded-lg
    shadow-lg 
    shadow-indigo-400/10
    hover:shadow-indigo-400/50

    focus:shadow-xl
    hover:drop-shadow-xl
    active:drop-shadow-2xl

    px-6
    py-2

    hover:-translate-y-0.5
    focus:-translate-y-0.5

    font-normal
    text-lg

    focus:ring-4
    ring-indigo-500
    ring-opacity-30

    hover:bg-indigo-500
    focus:bg-indigo-500

    active:scale-95

    transition-all
    transform
    ease-in-out
    duration-200

    inline

`;

export const ChipButton = tw.button`

    rounded-full
    uppercase
    font-bold

    text-sm

    px-3
    py-1

    transition
    ease-in-out
    duration-200

    ${(p) =>
      p.$active
        ? "bg-indigo-500 text-white shadow-lg shadow-indigo-400/50"
        : "bg-indigo-100 text-indigo-500  hover:bg-indigo-200"}

`;
