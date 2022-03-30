export default function IconTextLink({children, link, text}) {

    return (
        <a href={link} target={'_blank'} rel="noreferrer" className="inline-flex gap-3 text-blue-900 hover:underline hover:text-blue-400 transition-all ease-in-out duration-200 hover:gap-4 focus:text-blue-600 focus:gap-4 align-middle items-center">
            <p className="min-w-fit">{text}</p>
            <div className="h-6 w-6">{children}</div>
        </a>);

}