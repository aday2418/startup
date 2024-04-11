import DarkModeProvider from "./DarkModeProvider"

export default async function DarkMode({children, darkMode}){
    return (
        <DarkModeProvider darkMode={darkMode}>
            {children}
        </DarkModeProvider>
    )
}