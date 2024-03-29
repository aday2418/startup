import DarkModeProvider from "./DarkModeProvider"
import getUser from "../../lib/getUser"
import userIdFromToken from "../../lib/userIdFromToken"

export default async function DarkMode({children}){
    const userId = userIdFromToken()
    const user = await getUser(userId)

    console.log(user.darkMode)
    return (
        <DarkModeProvider darkMode={user.darkMode}>
            {children}
        </DarkModeProvider>
    )
}