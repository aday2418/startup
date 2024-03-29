import Link from "next/link";
import { useContext } from "react";
import { DarkModeContext } from "./DarkModeProvider";

export default function Tab({selected, svg, link, newTab = false}){

    const { darkMode } = useContext(DarkModeContext)

    
    return(
        <Link href={link} target={newTab && "_blank"} >
            <div className={`relative w-full h-[60px] flex  py-3 justify-center items-center cursor-pointer border-y 
            ${selected? darkMode
                ? "border-gray-500 bg-gray-800 " // selected + darkMode
                : "border-gray-500 bg-green-200" // selected + !darkMode
            : darkMode
                ? "border-transparent hover:bg-gray-700" // !selected + darkMode
                : "border-transparent  hover:bg-gray-200 " // !selected + !darkMode
}`}>
                {svg}
            </div>
        </Link>
        
    )
}