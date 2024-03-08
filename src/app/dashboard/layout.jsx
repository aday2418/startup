import Tab from './Tab'
import Link from "next/link";
import Friend from '/src/components/icons/Friend'
import House from '@/components/icons/House';
import Dashboard from '@/components/icons/Dashboard';
import Gear from '@/components/icons/Gear';
import Sidebar from './Sidebar';
import DarkModeProvider from './DarkModeProvider';
import Header from './Header';
import DashboardContainer from './DashboardContainer';


export default async function DashboardLayout({children})
{   


    return (
        <DarkModeProvider>
            <DashboardContainer children={children} />
        </DarkModeProvider>
    )
}