import './globals.css'

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

