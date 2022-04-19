import tw from "tailwind-styled-components";

export const Card = tw.article`

  bg-white
  shadow-lg
  rounded-xl

  cursor-pointer
  hover:-translate-y-1
  focus:-translate-y-1

  hover:drop-shadow-2xl
  focus:drop-shadow-2xl

  active:scale-95

  transform
  transition-all
  ease-in-out
  duration-200

`;
