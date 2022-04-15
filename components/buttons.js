import tw from "tailwind-styled-components";

export const Button = tw.button`

    bg-opacity-20
    bg-blue-500 
    text-blue-900
    
    rounded-xl
    shadow-lg 
    shadow-blue-400/10
    hover:shadow-blue-400/50

    focus:shadow-xl
    hover:drop-shadow-xl
    active:drop-shadow-2xl

    px-5
    py-2

    font-bold
    text-lg

    hover:bg-opacity-100
    focus:bg-opacity-100

    focus:ring-4
    ring-blue-500
    ring-opacity-30

    hover:text-white
    hover:bg-blue-400
    focus:text-white
    focus:bg-blue-400

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
        ? "bg-blue-900 text-white drop-shadow-lg"
        : "bg-blue-100 text-blue-900"}

`;
