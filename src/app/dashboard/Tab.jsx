export default function Tab({icon, pageName, link}){
    return(
        <li class="mb-2">
            <a href={link} class="flex items-center space-x-2">
                <div className='h-[30px]'>
                    {icon}
                </div>
                <span>
                    {pageName}
                </span>
            </a>
        </li>
    )
}