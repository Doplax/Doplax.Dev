import '../styles/globals.css' 
import { Inter } from 'next/font/google'
import {Footer} from '../components/Footer/Footer';
import {Header} from '../components/Header/Header';
import {Providers} from "./providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Doplax.dev',
  description: 'La web de pol valle',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <body className={inter.className}>
            <Providers>
                  <div className='max-w-7xl mx-auto'>
                    <Header />
                  </div>
                  {/* Content */}
                  <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                    {children}
                  </div>
                  <Footer />
              </Providers>
        </body>
    </html>
  )
}




