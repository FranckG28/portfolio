import tw from "tailwind-styled-components/dist/tailwind";

export const PageTitle = tw.h1`
    font-semibold 
    text-6xl
    text-blue-900
    
    ${(p) => (p.$nomargin ? `leading-1` : "leading-loose")}
`;
