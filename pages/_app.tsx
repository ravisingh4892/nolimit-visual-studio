import '../styles/globals.css'
import type { AppProps } from 'next/app'
import useLenisGsap from '../hooks/useLenisGsap'

export default function MyApp({ Component, pageProps }: AppProps) {
  useLenisGsap()
  return <Component {...pageProps} />
}
