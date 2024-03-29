import DarkModeProvider from './DarkModeProvider';
import DashboardContainer from './DashboardContainer';
import UsersOnlineProvider from './UsersOnlineProvider'


export default function DashboardLayout({children}) {   
    return (
        <UsersOnlineProvider>
            <DarkModeProvider>
                <DashboardContainer>
                    {children}
                </DashboardContainer>
            </DarkModeProvider>
        </UsersOnlineProvider>
        
    )
}