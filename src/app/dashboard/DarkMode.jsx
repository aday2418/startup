import DarkModeProvider from "./DarkModeProvider"
import getUser from "../../lib/getUser"
import userIdFromToken from "../../lib/userIdFromToken"

export default async function DarkMode({children, darkMode}){
    return (
        <DarkModeProvider darkMode={darkMode}>
            {children}
        </DarkModeProvider>
    )
}