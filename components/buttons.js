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

    transition
    ease-in-out
    duration-200

    inline

`;
