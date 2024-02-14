import Link from "next/link";


export default function Tab({selected, svg, link}){
    
    return(
        <Link href={link}>
            <div className={`relative w-full h-[60px] flex  py-3 justify-center items-center hover:bg-gray-900 cursor-pointer border-y hover:border-gray-500 smoothe ${selected ? " border-gray-500 bg-gray-900" : "border-transparent"}`}>
                {svg}
            </div>
        </Link>
        
    )
}
//<h1 className="text-white text-xl tracking-wide w-fit font-medium">{pageName}</h1>
/*<li class="mb-2">
            <a href={link} class="flex items-center space-x-2">
                <div className='h-[30px]'>
                    {icon}
                </div>
                <span>
                    {pageName}
                </span>
            </a>
        </li>*/