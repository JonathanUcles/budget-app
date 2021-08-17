import React from 'react'
import { AppProps } from 'next/app'
import {GlobalProvider} from '../context/GlobalContext'
import '../styles/index.css'
import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalProvider>
      <Component {...pageProps} />
    </GlobalProvider>


  )
}

export default MyApp
