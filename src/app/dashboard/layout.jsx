import DarkModeProvider from './DarkModeProvider';
import DashboardContainer from './DashboardContainer';


export default function DashboardLayout({children}) {   
    return (
        <DarkModeProvider>
            <DashboardContainer>
                {children}
            </DashboardContainer>
        </DarkModeProvider>
    )
}