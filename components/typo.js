import tw from "tailwind-styled-components/dist/tailwind";

export const PageTitle = tw.h1`
    font-normal 
    md:text-8xl
    text-6xl
    
    tracking-tight
    
    ${(p) => (p.$nomargin ? `leading-1` : "leading-loose md:leading-loose")}
    ${(p) => p.$color || "text-indigo-500"}
`;

export const ItemSubtitle = tw.p`
    text-indigo-800 
    font-bold 
    uppercase 
    text-xs
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

export const Paragraph = tw.p`

    text-lg
    font-normal
    text-neutral-600

`;
