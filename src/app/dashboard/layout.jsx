import DarkMode from './DarkMode';
import DashboardContainer from './DashboardContainer';


export default async function DashboardLayout({children})
{   
    return (
        <DarkMode>
            <DashboardContainer children={children} />
        </DarkMode>
    )
}