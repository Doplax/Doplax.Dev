import { VercelProvider } from '@vercel/analytics'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <VercelProvider>
      <Component {...pageProps} />
    </VercelProvider>
  )
}

export default MyApp
