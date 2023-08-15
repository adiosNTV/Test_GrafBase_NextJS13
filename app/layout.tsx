import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import './globals.css'

export const metadata = {
  title: 'Flexibble',
  description: 'Show case and discover remarable developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar/>
        <main>
        {children}
        </main>
        <Footer/>
      </body>
    </html>
  )
}
