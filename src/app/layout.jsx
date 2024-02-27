import './globals.css'
import Image from 'next/image'
import House from '/src/components/icons/House'
import Dashboard from '/src/components/icons/Dashboard'
import Friend from '/src/components/icons/Friend'
import Gear from '/src/components/icons/Gear'
import Head from 'next/head';


export const metadata = {
  title: 'SoundCircle',
  description: 'Connect With Your Friends Through Music',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='w-full flex flex-col'>
        {children}
      </body>
    </html>
  )
}

//Needs proper use of BODY, NAV, MAIN, HEADER, FOOTER (Layout will handle header, footer, nav) <-- All in this file!!

