import tw from "tailwind-styled-components/dist/tailwind";

export const PageTitle = tw.h1`
    font-normal 
    text-8xl
    text-indigo-500
    tracking-tight
    
    ${(p) => (p.$nomargin ? `leading-1` : "leading-loose")}
`;

export const ItemSubtitle = tw.p`
    text-indigo-800 
    font-bold 
    uppercase 
    text-sm 
    tracking-tight
`;

export const ItemTitle = tw.h3`
    text-2xl 
    text-indigo-500 
    tracking-tight 
    font-normal 
    leading-normal
`;

export const ItemDescription = tw.p`
    line-clamp-3 
    text-sm 
    text-neutral-600
`;
