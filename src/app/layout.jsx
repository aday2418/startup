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

