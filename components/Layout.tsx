import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className='bg-cover bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 '>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
   
    </header>
    <div className=''></div>
    {children}
    <footer className='mt-4 pb-4 text-center text-white'>
      
      <div>DISCLAIMER Budget Planner is just a demo applcation. Not to be used for financial advice and is not providing financial advice.</div>
    </footer>
  </div>
)

export default Layout
