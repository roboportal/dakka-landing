import { useState } from 'react'
import Head from 'next/head'
import { css } from '@emotion/react'
import { Footer } from '../components/Footer'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)

  return (
    <div
      css={css`
        background: white;
        color: #000;
        display: flex;
        flex-direction: column;
        min-height: 100vh;
      `}
    >
      <Head>
        <title>Dakka</title>
        <meta name="description" content="Dakka - increase test coverage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} onOpenNav={handleOpen} open={open} />
      <Footer />
    </div>
  )
}
