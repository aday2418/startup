
import DarkModeProvider from './DarkModeProvider';
import DashboardContainer from './DashboardContainer';


export default async function DashboardLayout({children})
{   
    return (
        <DarkModeProvider>
            <DashboardContainer children={children} />
        </DarkModeProvider>
    )
}