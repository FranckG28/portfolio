export default function IconLink({children, link}) {

    return (
        <a href={link} target={'_blank'} rel="noreferrer" className="text-blue-900 hover:text-blue-400 transition-all ease-in-out duration-200 focus:text-blue-600 transform hover:scale-110 focus:scale-110">
            <div className="h-6 w-6">{children}</div>
        </a>);

}